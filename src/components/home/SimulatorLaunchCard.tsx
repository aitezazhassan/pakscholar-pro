'use client';

import React from 'react';
import { Target, Timer, Zap, ShieldAlert, ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import { CyberBadge } from '@/components/ui/CyberBadge';

export function SimulatorLaunchCard() {
  return (
    <div className="relative h-full flex flex-col justify-between overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Target className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block">EXAM ENGINE</span>
              <h3 className="font-bold text-white tracking-tight">100-Q Mock Simulator</h3>
            </div>
          </div>
          <CyberBadge variant="amber" size="sm">
            -0.25 NEGATIVE
          </CyberBadge>
        </div>

        <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
          Simulate the real PPSC examination environment. 90 minutes, 100 mixed MCQs (GK, Math, English, Pak Studies, Islamiyat, Science) with official negative marking.
        </p>

        {/* Feature telemetry grid */}
        <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs text-center">
          <div className="p-2 rounded-lg bg-zinc-950/70 border border-white/5">
            <Timer className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
            <span className="text-zinc-400 text-[10px] block">DURATION</span>
            <span className="text-white font-bold">90 Min</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-950/70 border border-white/5">
            <Zap className="w-3.5 h-3.5 mx-auto mb-1 text-amber-400" />
            <span className="text-zinc-400 text-[10px] block">CUTOFF</span>
            <span className="text-white font-bold">50% Min</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-950/70 border border-white/5">
            <Trophy className="w-3.5 h-3.5 mx-auto mb-1 text-cyan-400" />
            <span className="text-zinc-400 text-[10px] block">RANKING</span>
            <span className="text-white font-bold">Live Percentile</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/5">
        <Link
          href="/practice/mock-exams"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-black font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/20 transition-all active:scale-95 group"
        >
          <span>Launch Full Test Simulator</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
