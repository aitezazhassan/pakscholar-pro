import { SessionOptions } from 'iron-session';

export interface SessionData {
    isLoggedIn: boolean;
    username: string;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long_for_security',
    cookieName: 'pakscholar_admin_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict' as const,
        maxAge: 60 * 60 * 24, // 24 hours
    },
};

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Change this!
