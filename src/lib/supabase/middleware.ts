import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // Safety check: Avoid crashing if env vars are missing
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('Missing Supabase Environment Variables in Middleware');
        // Allow request to proceed to show the page (or error UI) instead of crashing middleware
        return response;
    }

    const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
    const hasAuthCookie = request.cookies.getAll().some(
        c => c.name.includes('-auth-token') || c.name.startsWith('sb-')
    );

    // Fast-path: If visiting a public page and no auth cookies exist,
    // skip network auth call completely. This eliminates latency and prevents 504 Edge Timeouts.
    if (!isDashboardRoute && !hasAuthCookie) {
        return response;
    }

    const supabase = createServerClient(
        supabaseUrl,
        supabaseKey,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value)
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // Fail-safe: Strict 2.5s timeout on auth check so Vercel Edge never exceeds
    // the invocation limit and causes 504 MIDDLEWARE_INVOCATION_TIMEOUT.
    let user = null;
    try {
        const authPromise = supabase.auth.getUser();
        const timeoutPromise = new Promise<{ data: { user: null }; error: Error }>((resolve) =>
            setTimeout(() => resolve({ data: { user: null }, error: new Error('Auth timeout') }), 2500)
        );
        const result = await Promise.race([authPromise, timeoutPromise]);
        user = result.data.user;
    } catch (err) {
        console.warn('Supabase middleware auth check failed or timed out:', err);
    }

    if (
        !user &&
        !request.nextUrl.pathname.startsWith('/login') &&
        !request.nextUrl.pathname.startsWith('/auth') &&
        isDashboardRoute
    ) {
        // no user on protected dashboard route, redirect to login page
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    return response
}

