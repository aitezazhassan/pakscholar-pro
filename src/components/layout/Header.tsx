'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
                        <nav className="hidden lg:flex items-center gap-8">
                            {/* Subjects Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                                    onMouseEnter={() => setActiveDropdown('subjects')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Subjects <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'subjects' && (
                                    <div
                                        className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('subjects')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {subjects.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[#01411C]"
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
                                    className="flex items-center gap-1 text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                                    onMouseEnter={() => setActiveDropdown('exams')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Exams <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'exams' && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('exams')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {exams.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[#01411C]"
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
                                    className="flex items-center gap-1 text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                                    onMouseEnter={() => setActiveDropdown('resources')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Resources <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'resources' && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('resources')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {resources.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[#01411C]"
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
                                    className="flex items-center gap-1 text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                                    onMouseEnter={() => setActiveDropdown('help')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Help <ChevronDown className="h-4 w-4" />
                                </button>
                                {activeDropdown === 'help' && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setActiveDropdown('help')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-2">
                                            {help.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-[#01411C]"
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
                                className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#01411C]"
                            >
                                About
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
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
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm overflow-y-auto bg-white shadow-xl lg:hidden">
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
                            {/* Subjects */}
                            <div className="border-b border-gray-100 pb-4">
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Subjects</h3>
                                {subjects.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-[#01411C]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Exams */}
                            <div className="border-b border-gray-100 py-4">
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Exams</h3>
                                {exams.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-[#01411C]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Resources */}
                            <div className="border-b border-gray-100 py-4">
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Resources</h3>
                                {resources.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-[#01411C]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Help */}
                            <div className="border-b border-gray-100 py-4">
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">Help</h3>
                                {help.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-[#01411C]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* About */}
                            <Link
                                href="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700 hover:text-[#01411C]"
                            >
                                About Us
                            </Link>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
