'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { AppleBadge } from '@/components/ui/AppleBadge';

export function CurrentAffairsHeroBox() {
  const headlines = [
    {
      id: 1,
      date: 'Feb 15, 2025',
      title: 'Prime Minister approves National Digital Economic Framework targeting $10B IT exports by 2029.',
      category: 'Economy',
      highYield: true,
    },
    {
      id: 2,
      date: 'Feb 12, 2025',
      title: 'Supreme Court larger bench delivers decisive verdict on Article 63-A defection review petition.',
      category: 'Constitution & Law',
      highYield: true,
    },
    {
      id: 3,
      date: 'Feb 08, 2025',
      title: 'Islamabad Declaration adopted at the 23rd SCO Council of Heads of Government summit.',
      category: 'International',
      highYield: false,
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-[#0F5132] dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
              <Newspaper className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base text-zinc-900 dark:text-white tracking-tight">
                  Current Affairs Briefing
                </h3>
                <AppleBadge variant="emerald" size="sm" dot>
                  Live
                </AppleBadge>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">National & International Exam Digest</p>
            </div>
          </div>

          <Link
            href="/current-affairs"
            className="text-xs font-semibold text-[#0F5132] dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>View Stream</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Feed */}
        <div className="space-y-3">
          {headlines.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-xl bg-[#FBFBFD] dark:bg-zinc-800/40 border border-black/[0.04] dark:border-white/[0.05] hover:border-black/[0.1] dark:hover:border-white/[0.15] transition-all duration-200"
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-zinc-600 dark:text-zinc-300 font-mono text-[11px] flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-zinc-600 dark:text-zinc-300" />
                  {item.date}
                </span>
                <div className="flex items-center gap-2">
                  {item.highYield && (
                    <AppleBadge variant="amber" size="sm">
                      High Yield
                    </AppleBadge>
                  )}
                  <span className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium">{item.category}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Trending Pills */}
      <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-300">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px]">Trending:</span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px]">
            Article 63-A
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px]">
            SCO 2025
          </span>
        </div>
        <span className="text-[11px]">Updated 2h ago</span>
      </div>
    </div>
  );
}
