'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, ArrowRight, RefreshCw, Cpu } from 'lucide-react';
import Link from 'next/link';

interface MathLabWidgetProps {
  compact?: boolean;
}

export function MathLabWidget({ compact = false }: MathLabWidgetProps) {
  const [ratioA, setRatioA] = useState<number>(3);
  const [ratioB, setRatioB] = useState<number>(5);
  const [totalValue, setTotalValue] = useState<number>(240);
  const [showFormula, setShowFormula] = useState(false);

  const totalParts = Math.max(1, (Number(ratioA) || 0) + (Number(ratioB) || 0));
  const partVal = (Number(totalValue) || 0) / totalParts;
  const shareA = Math.round((Number(ratioA) || 0) * partVal);
  const shareB = Math.round((Number(ratioB) || 0) * partVal);

  const percentA = Math.round(((Number(ratioA) || 0) / totalParts) * 100);
  const percentB = 100 - percentA;

  const presets = [
    { a: 2, b: 3, total: 500, label: 'Work Share (2:3)' },
    { a: 3, b: 5, total: 240, label: 'PPSC Age Problem (3:5)' },
    { a: 4, b: 7, total: 1100, label: 'Investment Split (4:7)' },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-white tracking-tight flex items-center gap-2">
                The Math Lab
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE SOLVER
                </span>
              </h3>
              <p className="text-xs text-zinc-400">PPSC High-Yield Ratio Engine</p>
            </div>
          </div>
          <button
            onClick={() => {
              const next = presets[(Math.floor(Math.random() * presets.length))];
              setRatioA(next.a);
              setRatioB(next.b);
              setTotalValue(next.total);
            }}
            title="Randomize Problem"
            className="p-1.5 rounded-lg border border-white/10 bg-zinc-800/60 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Spring Ratio Bar Visualization */}
        <div className="mb-5 p-3 rounded-xl bg-zinc-950/70 border border-white/5">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Share A: {percentA}% ({shareA})
            </span>
            <span className="text-amber-400 flex items-center gap-1">
              Share B: {percentB}% ({shareB})
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            </span>
          </div>

          {/* Animated Ratio Bar */}
          <div className="h-4 w-full rounded-full bg-zinc-900 overflow-hidden flex p-0.5 border border-white/10 shadow-inner">
            <motion.div
              className="h-full rounded-l-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              animate={{ width: `${percentA}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            />
            <motion.div
              className="h-full rounded-r-full bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              animate={{ width: `${percentB}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            />
          </div>
        </div>

        {/* Code Editor Style Inputs */}
        <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs">
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">RATIO_A</label>
            <input
              type="number"
              min="1"
              max="99"
              value={ratioA}
              onChange={(e) => setRatioA(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-zinc-950/90 border border-emerald-500/30 focus:border-emerald-400 rounded-lg px-2.5 py-1.5 text-emerald-400 font-mono text-center focus:outline-none focus:ring-1 focus:ring-emerald-400/50 shadow-inner"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">RATIO_B</label>
            <input
              type="number"
              min="1"
              max="99"
              value={ratioB}
              onChange={(e) => setRatioB(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-zinc-950/90 border border-amber-500/30 focus:border-amber-400 rounded-lg px-2.5 py-1.5 text-amber-400 font-mono text-center focus:outline-none focus:ring-1 focus:ring-amber-400/50 shadow-inner"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">TOTAL (Q)</label>
            <input
              type="number"
              min="1"
              value={totalValue}
              onChange={(e) => setTotalValue(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-zinc-950/90 border border-white/20 focus:border-emerald-400 rounded-lg px-2.5 py-1.5 text-white font-mono text-center focus:outline-none focus:ring-1 focus:ring-emerald-400/50 shadow-inner"
            />
          </div>
        </div>

        {/* Glowing Answer HUD */}
        <div className="p-3 rounded-xl bg-zinc-950/80 border border-emerald-500/20 mb-3 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">CALCULATED VALUE</span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              1 UNIT = {partVal.toFixed(1)}
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-zinc-500 font-mono block">A's SHARE</span>
              <span className="text-xl font-bold font-mono text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]">
                {shareA}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 font-mono block">B's SHARE</span>
              <span className="text-xl font-bold font-mono text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]">
                {shareB}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-2 border-t border-white/5">
        <Link
          href="/subjects/mathematics"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
        >
          <span>Explore 120+ Math Past Paper Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
