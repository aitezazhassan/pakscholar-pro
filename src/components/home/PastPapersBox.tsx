'use client';

import React from 'react';
import { ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function PastPapersBox() {
  return (
    <Link href="/past-papers" className="block h-full group">
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-300" />

        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block">PPSC ARCHIVE</span>
              <span className="text-sm font-bold text-white tracking-tight">Past Papers</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-lg border border-white/10 bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Massive Hollow Text (Stroke typography) */}
        <div className="my-2 text-center py-2">
          <div
            className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-transparent select-none transition-all duration-300 group-hover:scale-105"
            style={{
              WebkitTextStroke: '2px rgba(16, 185, 129, 0.7)',
              textShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
              fontFamily: 'var(--font-jetbrains), monospace',
            }}
          >
            2025
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80 uppercase tracking-widest block -mt-1">
            SOLVED PAPERS BANK
          </span>
        </div>

        {/* Bottom Feature Badges */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1 text-zinc-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 50+ Verified Keys
          </span>
          <span className="text-emerald-400 font-semibold group-hover:underline">
            Download PDF &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
