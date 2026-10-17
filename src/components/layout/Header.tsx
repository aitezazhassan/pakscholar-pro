'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  LayoutDashboard,
  Search,
  Crown,
  BookOpen,
  GraduationCap,
  Sparkles,
  FileText,
  Clock,
  Compass,
} from 'lucide-react';
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
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mock Exams', href: '/practice/mock-exams', badge: 'PPSC -0.25' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'Current Affairs', href: '/current-affairs' },
    { name: 'Past Papers', href: '/past-papers' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBFBFD]/85 dark:bg-[#0A0A0C]/85 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
          : 'bg-[#FBFBFD]/60 dark:bg-[#0A0A0C]/60 backdrop-blur-md border-b border-black/[0.03] dark:border-white/[0.04]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Refined Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0F5132] to-[#15803d] rounded-xl flex items-center justify-center shadow-sm border border-emerald-600/30 group-hover:scale-[1.03] transition-transform duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
                PakScholar
                <span className="text-[11px] font-semibold px-1.5 py-0.2 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                  PRO
                </span>
              </span>
              <span className="text-[10px] tracking-wide text-zinc-600 dark:text-zinc-300 uppercase font-medium hidden sm:block">
                Civil Service & Competitive Exams
              </span>
            </div>
          </Link>

          {/* Cupertino Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-zinc-900 dark:text-white bg-black/[0.06] dark:bg-white/[0.1] font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pro-pass"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/40 hover:bg-amber-100/80 dark:hover:bg-amber-950/70 transition-all shadow-sm active:scale-[0.98]"
            >
              <Crown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Elite Pass</span>
              <span className="text-[10px] opacity-75 font-mono">PKR 999</span>
            </Link>

            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-900 dark:text-white bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-all"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 bg-[#0F5132] hover:bg-[#0D442A] text-white rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98]"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Cupertino Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-[#FBFBFD]/95 dark:bg-[#0A0A0C]/95 backdrop-blur-2xl border-t border-black/[0.06] dark:border-white/[0.08]"
          style={{ top: '64px', height: 'calc(100vh - 64px)' }}
        >
          <div className="flex flex-col h-full overflow-y-auto px-6 py-6 space-y-6">
            {/* Elite Pass Card */}
            <Link
              href="/pro-pass"
              onClick={() => setMobileMenuOpen(false)}
              className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-700 dark:text-amber-300">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-900 dark:text-white font-bold text-sm block">
                    Upgrade to Elite Pass
                  </span>
                  <span className="text-xs text-amber-800 dark:text-amber-300">
                    Unlimited Full-Length Mocks + Keys
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-900 dark:text-amber-200 font-mono">
                PKR 999
              </span>
            </Link>

            {/* Nav Links */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 uppercase pl-3 block mb-2">
                Study & Examination Hubs
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Account / Action Area */}
            <div className="mt-auto pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
              {user ? (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F5132] text-white font-semibold text-sm shadow-sm"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Go to Dashboard</span>
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium text-sm border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center py-2.5 rounded-full bg-[#0F5132] text-white font-semibold text-sm shadow-sm"
                  >
                    Get Started
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
