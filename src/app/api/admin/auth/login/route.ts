import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData, ADMIN_PASSWORD } from '@/lib/admin/session';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        // Verify password
        if (password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { success: false, message: 'Invalid password' },
                { status: 401 }
            );
        }

        // Create session
        const response = NextResponse.json({ success: true });
        const session = await getIronSession<SessionData>(request, response, sessionOptions);

        session.isLoggedIn = true;
        session.username = 'admin';
        await session.save();

        return response;
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Login failed' },
            { status: 500 }
        );
    }
}
