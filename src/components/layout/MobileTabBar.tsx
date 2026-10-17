'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Target, Cpu, Newspaper, Crown } from 'lucide-react';

export function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Simulator', href: '/practice/mock-exams', icon: Target },
    { label: 'Math Lab', href: '/subjects/mathematics', icon: Cpu },
    { label: 'Affairs', href: '/current-affairs', icon: Newspaper },
    { label: 'Elite Pass', href: '/pro-pass', icon: Crown, highlight: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 safe-area-pb">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-emerald-400'
                  : tab.highlight
                  ? 'text-amber-400'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div
                className={`relative p-1 rounded-lg ${
                  isActive
                    ? 'bg-emerald-500/15'
                    : tab.highlight
                    ? 'bg-amber-500/10'
                    : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${tab.highlight ? 'animate-pulse' : ''}`} />
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                )}
              </div>
              <span className="text-[10px] font-mono font-medium tracking-tight">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
