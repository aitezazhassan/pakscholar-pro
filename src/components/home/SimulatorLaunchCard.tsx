'use client';

import React from 'react';
import { Target, Timer, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { AppleBadge } from '@/components/ui/AppleBadge';

export function SimulatorLaunchCard() {
  return (
    <div className="relative h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-[#0F5132] dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">EXAM ENGINE</span>
              <h3 className="font-semibold text-base text-zinc-900 dark:text-white tracking-tight">
                100-Q Mock Simulator
              </h3>
            </div>
          </div>
          <AppleBadge variant="amber" size="sm">
            -0.25 Penalty
          </AppleBadge>
        </div>

        <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
          Simulate the official PPSC examination environment. 90 minutes, 100 mixed MCQs across all core subjects with real-time negative marking calculations.
        </p>

        {/* Feature stats */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="p-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <Timer className="w-3.5 h-3.5 mx-auto mb-1 text-[#0F5132] dark:text-emerald-400" />
            <span className="text-zinc-500 dark:text-zinc-400 text-[10px] block font-medium">Duration</span>
            <span className="text-zinc-900 dark:text-white font-semibold text-xs">90 Min</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <ShieldCheck className="w-3.5 h-3.5 mx-auto mb-1 text-amber-600 dark:text-amber-400" />
            <span className="text-zinc-500 dark:text-zinc-400 text-[10px] block font-medium">Marking</span>
            <span className="text-zinc-900 dark:text-white font-semibold text-xs">Official</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
            <Trophy className="w-3.5 h-3.5 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
            <span className="text-zinc-500 dark:text-zinc-400 text-[10px] block font-medium">Percentile</span>
            <span className="text-zinc-900 dark:text-white font-semibold text-xs">Live Rank</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
        <Link
          href="/practice/mock-exams"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F5132] hover:bg-[#0c4128] text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.99] group"
        >
          <span>Launch Simulator</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
