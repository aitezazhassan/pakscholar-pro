'use client';

import React from 'react';
import { ArrowUpRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { AppleBadge } from '@/components/ui/AppleBadge';

export function PastPapersBox() {
  return (
    <Link href="/past-papers" className="block h-full group">
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30 group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">PPSC ARCHIVE</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">Past Papers</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-800/80 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Apple Style Editorial Highlight */}
        <div className="my-3 text-center py-2">
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white block group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors">
            2018–2025
          </span>
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 block mt-1">
            Complete Solved Past Papers Bank
          </span>
        </div>

        {/* Bottom Feature Badges */}
        <div className="pt-2.5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F5132] dark:text-emerald-400" /> 50+ Verified Keys
          </span>
          <span className="text-[#0F5132] dark:text-emerald-400 font-semibold group-hover:underline">
            Download PDF
          </span>
        </div>
      </div>
    </Link>
  );
}
