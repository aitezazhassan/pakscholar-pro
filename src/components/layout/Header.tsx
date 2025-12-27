'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, X, User as UserIcon, LayoutDashboard, Search } from 'lucide-react';
import { NavDropdown, MobileMenuLink } from '@/components/ui/nav-components';
import { User } from '@supabase/supabase-js';

interface HeaderProps {
    user?: User | null;
}

export default function Header({ user }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'
            }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl shadow-lg flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-xl font-extrabold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'
                            }`}>
                            PakScholar<span className="text-emerald-500">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        <NavDropdown
                            id="subjects"
                            label="Subjects"
                            items={subjects}
                            activeId={activeDropdown}
                            scrolled={scrolled}
                            onMouseEnter={setActiveDropdown}
                            onMouseLeave={() => setActiveDropdown(null)}
                        />
                        <NavDropdown
                            id="exams"
                            label="Exams"
                            items={exams}
                            activeId={activeDropdown}
                            scrolled={scrolled}
                            onMouseEnter={setActiveDropdown}
                            onMouseLeave={() => setActiveDropdown(null)}
                        />
                        <NavDropdown
                            id="resources"
                            label="Resources"
                            items={resources}
                            activeId={activeDropdown}
                            scrolled={scrolled}
                            onMouseEnter={setActiveDropdown}
                            onMouseLeave={() => setActiveDropdown(null)}
                        />

                        {/* Direct Links */}
                        <Link
                            href="/explore"
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${scrolled
                                ? 'text-slate-700 hover:bg-slate-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Explore 🇵🇰
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button className={`p-2 rounded-full transition-all duration-300 ${scrolled ? 'text-slate-500 hover:bg-slate-100 hover:text-emerald-600' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                            <Search className="w-5 h-5" />
                        </button>

                        {user ? (
                            <Link
                                href="/dashboard"
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${scrolled
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700'
                                    : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
                                    }`}
                            >
                                <LayoutDashboard className="w-4 h-4" />
                                <span>Dashboard</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100 hover:text-emerald-700'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`} style={{ top: '80px', height: 'calc(100vh - 80px)' }}>
                <div className="flex flex-col h-full overflow-y-auto px-6 py-8 space-y-8">
                    {/* Groups */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Subjects</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {subjects.map(item => (
                                    <MobileMenuLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </MobileMenuLink>
                                ))}
                            </div>
                        </div>

                        {/* ... (Other sections unchanged if desired, but updating footer for auth) ... */}
                        {/* Shortening replacement for brevity if needed, but I will replace the whole component to be safe */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Exams</h3>
                            <div className="space-y-1">
                                {exams.map(item => (
                                    <MobileMenuLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </MobileMenuLink>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Resources</h3>
                            <div className="space-y-1">
                                {resources.map(item => (
                                    <MobileMenuLink key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </MobileMenuLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-8 border-t border-slate-100 space-y-4">
                        {user ? (
                            <MobileMenuLink href="/dashboard" primary onClick={() => setMobileMenuOpen(false)}>
                                Go to Dashboard
                            </MobileMenuLink>
                        ) : (
                            <>
                                <MobileMenuLink href="/login" onClick={() => setMobileMenuOpen(false)}>
                                    Log in
                                </MobileMenuLink>
                                <div className="pt-4">
                                    <MobileMenuLink href="/signup" primary onClick={() => setMobileMenuOpen(false)}>
                                        Sign up
                                    </MobileMenuLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
