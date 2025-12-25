'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
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

    const help = [
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' }
    ];

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-gray-900">PakScholar Pro</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* Subjects Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                                    onMouseEnter={() => setActiveDropdown('subjects')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Subjects <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'subjects' && (
                                    <div
                                        className="absolute left-0 mt-2 w-56 rounded-2xl bg-white shadow-xl ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('subjects')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {subjects.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Exams Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                                    onMouseEnter={() => setActiveDropdown('exams')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Exams <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'exams' && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 rounded-2xl bg-white shadow-xl ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('exams')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {exams.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                                    onMouseEnter={() => setActiveDropdown('resources')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Resources <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'resources' && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 rounded-2xl bg-white shadow-xl ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('resources')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {resources.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Help Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                                    onMouseEnter={() => setActiveDropdown('help')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Help <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'help' && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-xl ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('help')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {help.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* About Link */}
                            <Link
                                href="/about"
                                className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                            >
                                About
                            </Link>

                            {/* CTA Button */}
                            <Link
                                href="/pakistan-studies"
                                className="px-5 py-2 bg-emerald-700 text-white text-sm font-medium rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-200"
                            >
                                Start Learning
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm overflow-y-auto bg-white shadow-xl lg:hidden">
                        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
                            <span className="text-xl font-bold text-gray-900">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col p-6 space-y-6">
                            {/* Subjects */}
                            <div>
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Subjects</h3>
                                <div className="space-y-2">
                                    {subjects.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 pl-4 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Exams */}
                            <div>
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Exams</h3>
                                <div className="space-y-2">
                                    {exams.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 pl-4 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Resources</h3>
                                <div className="space-y-2">
                                    {resources.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 pl-4 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Help */}
                            <div>
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Help</h3>
                                <div className="space-y-2">
                                    {help.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 pl-4 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* About */}
                            <Link
                                href="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                            >
                                About Us
                            </Link>

                            {/* CTA Button */}
                            <Link
                                href="/pakistan-studies"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full px-5 py-3 bg-emerald-700 text-white text-sm font-medium rounded-full text-center hover:bg-emerald-800 transition-colors"
                            >
                                Start Learning
                            </Link>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
