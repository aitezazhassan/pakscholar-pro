'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { makePage } from '@keystatic/next/ui/app';
import keystaticConfig from '../../../../keystatic.config';

const KeystaticPage = makePage(keystaticConfig);

export default function AuthenticatedKeystatic() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Check if already authenticated
        const auth = sessionStorage.getItem('keystatic_auth');
        if (auth === 'true') {
            // Delay to avoid sync setState warning
            setTimeout(() => setIsAuthenticated(true), 0);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple password check - in production use proper auth
        if (password === 'admin123') {
            sessionStorage.setItem('keystatic_auth', 'true');
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                    <h1 className="mb-6 text-center font-playfair text-3xl font-bold text-slate-900">
                        Admin Login
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-oxford-600 focus:outline-none focus:ring-2 focus:ring-oxford-600"
                                placeholder="Enter admin password"
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-oxford-900 px-4 py-2 font-medium text-white transition-colors hover:bg-oxford-800"
                        >
                            Login
                        </button>
                        <p className="text-center text-sm text-slate-600">
                            Default password: <code className="rounded bg-slate-100 px-2 py-1">admin123</code>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    return <KeystaticPage />;
}
