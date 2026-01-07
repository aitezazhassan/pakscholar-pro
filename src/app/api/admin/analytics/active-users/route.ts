import { NextResponse } from 'next/server';

// In-memory storage for active users (in production, use Redis or database)
const activeUsers = new Map<string, number>();

export async function GET() {
    // Clean up old entries (users inactive for more than 5 minutes)
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    for (const [key, timestamp] of activeUsers.entries()) {
        if (timestamp < fiveMinutesAgo) {
            activeUsers.delete(key);
        }
    }

    return NextResponse.json({
        activeUsers: activeUsers.size,
        timestamp: Date.now(),
    });
}

export async function POST(request: Request) {
    try {
        const { userId } = await request.json();
        const sessionId = userId || `user_${Date.now()}_${Math.random()}`;

        // Update timestamp for this user
        activeUsers.set(sessionId, Date.now());

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
