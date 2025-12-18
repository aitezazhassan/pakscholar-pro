'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen, Brain, FileText, MapPin, Clock, Settings } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from '../ui/Button';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Current Affairs', href: '/current-affairs' },
        { name: 'Mathematics', href: '/mathematics' },
        { name: 'Encyclopedia', href: '/encyclopedia' },
        { name: 'English', href: '/english' },
        { name: 'Past Papers', href: '/past-papers' },
        { name: 'Maps', href: '/explore' }
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 font-playfair text-xl font-bold text-oxford-900 transition-colors hover:text-oxford-700 md:text-2xl"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-oxford-900 text-white">
                                PS
                            </span>
                            <span className="hidden sm:inline">PakScholar Pro</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-base font-medium text-secondary-700 transition-colors hover:text-primary-900 hover:underline hover:decoration-2 hover:underline-offset-4"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm animate-slide-down bg-white shadow-hard md:hidden">
                        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-6">
                            <Link href="/" className="flex items-center space-x-2">
                                <BookOpen className="h-6 w-6 text-primary-900" />
                                <span className="hidden text-xl font-bold text-primary-900 sm:inline">
                                    PakScholar Pro
                                </span>
                                <span className="text-xs text-secondary-600 hidden md:inline">| PPSC Prep</span>
                            </Link>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2 p-6">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-oxford-900"
                            >
                                Home
                            </Link>

                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-base font-medium text-secondary-700 transition-colors hover:bg-secondary-100 hover:text-primary-900"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="my-4 border-t border-slate-200" />

                            <Link href="/keystatic" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" size="medium" className="w-full">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Admin
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </>
            )}

            {/* Spacer to prevent content from going under fixed header */}
            <div className="h-16 md:h-20" />
        </>
    );
}
