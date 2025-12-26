'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const subjects = [
        { name: 'Pakistan Studies', href: '/pakistan-studies' },
        { name: 'Islamic Studies', href: '/islamic-studies' },
        { name: 'Mathematics', href: '/mathematics' },
        { name: 'English', href: '/english' },
        { name: 'General Science', href: '/science' },
        { name: 'Current Affairs', href: '/current-affairs' }
    ];

    const exams = [
        { name: 'PPSC Guide', href: '/exams/ppsc' },
        { name: 'FPSC Guide', href: '/exams/fpsc' },
        { name: 'CSS Guide', href: '/exams/css' }
    ];

    const resources = [
        { name: 'Practice Tests', href: '/practice' },
        { name: 'Past Papers', href: '/past-papers' },
        { name: 'Study Resources', href: '/resources' }
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
            }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'
                            }`}>
                            PakScholar Pro
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {/* Subjects Dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                                onMouseEnter={() => setActiveDropdown('subjects')}
                            >
                                Subjects <ChevronDown className="h-4 w-4" />
                            </button>
                            {activeDropdown === 'subjects' && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                                    onMouseEnter={() => setActiveDropdown('subjects')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {subjects.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Exams Dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                                onMouseEnter={() => setActiveDropdown('exams')}
                            >
                                Exams <ChevronDown className="h-4 w-4" />
                            </button>
                            {activeDropdown === 'exams' && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                                    onMouseEnter={() => setActiveDropdown('exams')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {exams.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative group">
                            <button
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                                onMouseEnter={() => setActiveDropdown('resources')}
                            >
                                Resources <ChevronDown className="h-4 w-4" />
                            </button>
                            {activeDropdown === 'resources' && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                                    onMouseEnter={() => setActiveDropdown('resources')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {resources.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Direct Links */}
                        <Link
                            href="/explore"
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled
                                    ? 'text-slate-700 hover:bg-slate-100'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Explore 🇵🇰
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled
                                    ? 'text-slate-700 hover:bg-slate-100'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/practice"
                            className="px-6 py-2 bg-emerald-700 text-white rounded-full text-sm font-semibold hover:bg-emerald-800 transition-all hover:shadow-lg"
                        >
                            Start Learning
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
                    <div className="px-4 py-6 space-y-4">
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Subjects</p>
                            {subjects.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-slate-700 hover:text-emerald-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Exams</p>
                            {exams.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-slate-700 hover:text-emerald-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Resources</p>
                            {resources.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-slate-700 hover:text-emerald-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-slate-200 space-y-2">
                            <Link
                                href="/explore"
                                className="block py-2 text-slate-700 hover:text-emerald-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Explore Pakistan 🇵🇰
                            </Link>
                            <Link
                                href="/contact"
                                className="block py-2 text-slate-700 hover:text-emerald-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/practice"
                                className="block w-full py-3 bg-emerald-700 text-white rounded-full text-center font-semibold hover:bg-emerald-800 transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Start Learning
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
