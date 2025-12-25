'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Subjects', href: '/pakistan-studies' },
        { name: 'Practice Tests', href: '/practice' },
        { name: 'Resources', href: '/resources' },
        { name: 'About', href: '/resources' }
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="flex h-18 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="h-10 w-10 rounded-lg bg-[#01411C] flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
                                PS
                            </div>
                            <span className="text-xl font-bold text-gray-900">PakScholar Pro</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-xl md:hidden">
                        <div className="flex h-18 items-center justify-between border-b border-gray-200 px-6">
                            <span className="text-xl font-bold text-gray-900">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col p-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700 hover:text-[#01411C]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
