'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    FileText,
    Users,
    LogOut,
    Plus,
    BookOpen,
    Calculator,
    Loader2
} from 'lucide-react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminDashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    // Check authentication
    const { data: session, error } = useSWR('/api/admin/auth/session', fetcher);

    // Get active users count
    const { data: analytics } = useSWR('/api/admin/analytics/active-users', fetcher, {
        refreshInterval: 10000, // Refresh every 10 seconds
    });

    useEffect(() => {
        if (session && !session.isLoggedIn) {
            router.push('/admin081267');
        } else if (session) {
            setLoading(false);
        }
    }, [session, router]);

    const handleLogout = async () => {
        await fetch('/api/admin/auth/logout', { method: 'POST' });
        router.push('/admin081267');
        router.refresh();
    };

    if (loading || !session?.isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Header */}
            <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold">PakScholar Pro</h1>
                                <p className="text-xs text-slate-400">Admin Dashboard</p>
                            </div>
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center gap-4">
                            {/* Live Users */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-emerald-300 text-sm font-medium">
                                    {analytics?.activeUsers || 0} online
                                </span>
                            </div>

                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500">
                                    <Image
                                        src="/images/developer-portrait.jpg"
                                        alt="Admin"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-white text-sm font-medium hidden sm:block">Aitezaz</span>
                            </div>

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Welcome back, Aitezaz! 👋
                    </h2>
                    <p className="text-slate-400">
                        Manage your PPSC preparation platform from here
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <Users className="w-6 h-6 text-emerald-400" />
                            </div>
                            <span className="text-emerald-400 text-sm font-medium">Live</span>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">
                            {analytics?.activeUsers || 0}
                        </p>
                        <p className="text-slate-400 text-sm">Active Users</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">200+</p>
                        <p className="text-slate-400 text-sm">Total MCQs</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <Calculator className="w-6 h-6 text-purple-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">2</p>
                        <p className="text-slate-400 text-sm">Mock Exams</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-amber-400" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">12.5K</p>
                        <p className="text-slate-400 text-sm">Total Students</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/admin081267/content/mcq"
                            className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Plus className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Add MCQ</p>
                                    <p className="text-slate-400 text-sm">Create new question</p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/admin081267/content/exam"
                            className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Calculator className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Create Exam</p>
                                    <p className="text-slate-400 text-sm">Build mock exam</p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/"
                            target="_blank"
                            className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <LayoutDashboard className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">View Site</p>
                                    <p className="text-slate-400 text-sm">Open in new tab</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-400 text-sm">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span>System started successfully</span>
                                <span className="ml-auto">Just now</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400 text-sm">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span>Admin dashboard initialized</span>
                                <span className="ml-auto">Just now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
