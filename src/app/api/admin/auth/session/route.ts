import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/admin/session';

export async function GET(request: NextRequest) {
    const response = NextResponse.json({ isLoggedIn: false });
    const session = await getIronSession<SessionData>(request, response, sessionOptions);

    return NextResponse.json({
        isLoggedIn: session.isLoggedIn || false,
        username: session.username || null,
    });
}
