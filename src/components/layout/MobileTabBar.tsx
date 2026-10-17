'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Target, BookOpen, Newspaper, Crown } from 'lucide-react';

export function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Exams', href: '/practice/mock-exams', icon: Target },
    { label: 'Subjects', href: '/subjects', icon: BookOpen },
    { label: 'Affairs', href: '/current-affairs', icon: Newspaper },
    { label: 'Elite Pass', href: '/pro-pass', icon: Crown, highlight: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FBFBFD]/92 dark:bg-[#0A0A0C]/92 backdrop-blur-2xl border-t border-black/[0.06] dark:border-white/[0.08] px-3 py-1.5 safe-area-pb">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all duration-150 active:scale-95 ${
                isActive
                  ? 'text-[#0F5132] dark:text-emerald-400 font-semibold'
                  : tab.highlight
                  ? 'text-amber-700 dark:text-amber-400 font-medium'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <div
                className={`p-1 rounded-lg ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60'
                    : tab.highlight
                    ? 'bg-amber-50 dark:bg-amber-950/40'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
