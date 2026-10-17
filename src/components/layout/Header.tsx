'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, X, LayoutDashboard, Search, Crown, Cpu, Target, Newspaper, Compass } from 'lucide-react';
import { User } from '@supabase/supabase-js';

interface HeaderProps {
    user?: User | null;
}

export default function Header({ user }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Mock Simulator', href: '/practice/mock-exams', icon: Target, badge: '-0.25' },
        { name: 'Math Lab', href: '/subjects/mathematics', icon: Cpu },
        { name: 'Current Affairs', href: '/current-affairs', icon: Newspaper, live: true },
        { name: 'Subjects', href: '/subjects', icon: BookOpen },
        { name: 'Past Papers', href: '/past-papers', icon: Compass },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
                    : 'bg-zinc-950/40 backdrop-blur-md border-b border-white/5'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 border border-emerald-400/30">
                            <BookOpen className="w-5 h-5 text-black" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                                PakScholar
                                <span className="text-emerald-400 font-mono text-sm sm:text-base px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                    PRO
                                </span>
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5 hidden sm:block">
                                CYBER-OFFICIAL EDITION
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                                        isActive
                                            ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                            : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    <span>{link.name}</span>
                                    {link.badge && (
                                        <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                            {link.badge}
                                        </span>
                                    )}
                                    {link.live && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/pro-pass"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all active:scale-95"
                        >
                            <Crown className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            <span>Elite Pass (PKR 999)</span>
                        </Link>

                        {user ? (
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-bold text-emerald-400 bg-zinc-900 border border-white/10 hover:border-emerald-500/40 transition-all"
                            >
                                <LayoutDashboard className="w-3.5 h-3.5" />
                                <span>Dashboard</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl text-xs font-mono font-bold shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/60 border border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Slide-down Drawer */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl border-t border-white/10"
                    style={{ top: '64px', height: 'calc(100vh - 64px)' }}
                >
                    <div className="flex flex-col h-full overflow-y-auto px-6 py-6 space-y-6">
                        {/* Elite Pass Banner */}
                        <Link
                            href="/pro-pass"
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                                    <Crown className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-white font-bold text-sm block">Upgrade to Elite Pass</span>
                                    <span className="text-[11px] font-mono text-amber-400">Full 100-Q Mocks + Verified Keys</span>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                                PKR 999
                            </span>
                        </Link>

                        {/* Navigation Items */}
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 pl-2">
                                Examination Navigation
                            </span>
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-200 hover:text-white hover:border-emerald-500/30 transition-all font-mono text-xs"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <Icon className="w-4 h-4 text-emerald-400" />
                                            <span>{link.name}</span>
                                        </div>
                                        {link.badge && (
                                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Auth / Account Actions */}
                        <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                            {user ? (
                                <Link
                                    href="/dashboard"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs font-mono"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span>Access Dashboard</span>
                                </Link>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="inline-flex items-center justify-center py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white font-mono text-xs font-semibold"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="inline-flex items-center justify-center py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
