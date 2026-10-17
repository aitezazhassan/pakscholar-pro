'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { AppleBadge } from '@/components/ui/AppleBadge';

interface MathLabWidgetProps {
  compact?: boolean;
}

export function MathLabWidget({ compact = false }: MathLabWidgetProps) {
  const [ratioA, setRatioA] = useState<number>(3);
  const [ratioB, setRatioB] = useState<number>(5);
  const [totalValue, setTotalValue] = useState<number>(240);

  const totalParts = Math.max(1, (Number(ratioA) || 0) + (Number(ratioB) || 0));
  const partVal = (Number(totalValue) || 0) / totalParts;
  const shareA = Math.round((Number(ratioA) || 0) * partVal);
  const shareB = Math.round((Number(ratioB) || 0) * partVal);

  const percentA = Math.round(((Number(ratioA) || 0) / totalParts) * 100);
  const percentB = 100 - percentA;

  const presets = [
    { a: 2, b: 3, total: 500, label: 'Work Share (2:3)' },
    { a: 3, b: 5, total: 240, label: 'Age Problem (3:5)' },
    { a: 4, b: 7, total: 1100, label: 'Capital Split (4:7)' },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/30">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base text-zinc-900 dark:text-white tracking-tight">
                  Math Problem Solver
                </h3>
                <AppleBadge variant="amber" size="sm">
                  Interactive
                </AppleBadge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">PPSC Quantitative Ratio Engine</p>
            </div>
          </div>

          <button
            onClick={() => {
              const next = presets[Math.floor(Math.random() * presets.length)];
              setRatioA(next.a);
              setRatioB(next.b);
              setTotalValue(next.total);
            }}
            title="Load random scenario"
            className="p-1.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean Apple Bar Visualization */}
        <div className="mb-4 p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-black/[0.04] dark:border-white/[0.05]">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0F5132] dark:bg-emerald-400" />
              Share A: <strong className="text-zinc-900 dark:text-white">{shareA}</strong> ({percentA}%)
            </span>
            <span className="flex items-center gap-1.5">
              Share B: <strong className="text-zinc-900 dark:text-white">{shareB}</strong> ({percentB}%)
              <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
            </span>
          </div>

          <div className="h-3 w-full rounded-full bg-zinc-200/70 dark:bg-zinc-800 overflow-hidden flex p-0.5">
            <motion.div
              className="h-full rounded-l-full bg-[#0F5132] dark:bg-emerald-500"
              animate={{ width: `${percentA}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            />
            <motion.div
              className="h-full rounded-r-full bg-amber-500 dark:bg-amber-400"
              animate={{ width: `${percentB}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            />
          </div>
        </div>

        {/* Minimalist Inputs */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
          <div>
            <label className="block text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              Ratio A
            </label>
            <input
              type="number"
              min="1"
              max="99"
              value={ratioA}
              onChange={(e) => setRatioA(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-white dark:bg-zinc-800/80 border border-black/[0.08] dark:border-white/[0.1] focus:border-[#0F5132] dark:focus:border-emerald-500 rounded-lg px-2.5 py-1.5 text-zinc-900 dark:text-white text-center font-semibold focus:outline-none focus:ring-1 focus:ring-[#0F5132]/30"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              Ratio B
            </label>
            <input
              type="number"
              min="1"
              max="99"
              value={ratioB}
              onChange={(e) => setRatioB(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-white dark:bg-zinc-800/80 border border-black/[0.08] dark:border-white/[0.1] focus:border-amber-500 dark:focus:border-amber-400 rounded-lg px-2.5 py-1.5 text-zinc-900 dark:text-white text-center font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500/30"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              Total Sum
            </label>
            <input
              type="number"
              min="1"
              value={totalValue}
              onChange={(e) => setTotalValue(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-white dark:bg-zinc-800/80 border border-black/[0.08] dark:border-white/[0.1] focus:border-zinc-400 dark:focus:border-zinc-500 rounded-lg px-2.5 py-1.5 text-zinc-900 dark:text-white text-center font-semibold focus:outline-none focus:ring-1 focus:ring-zinc-400/30"
            />
          </div>
        </div>

        {/* Elegant Answer Display */}
        <div className="p-3.5 rounded-xl bg-[#FBFBFD] dark:bg-zinc-800/40 border border-black/[0.06] dark:border-white/[0.08] mb-2">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-2">
            <span>Result Breakdown</span>
            <span className="font-mono text-[11px] text-[#0F5132] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/30">
              1 unit = {partVal.toFixed(1)}
            </span>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block font-medium">Part A Value</span>
              <span className="text-2xl font-bold tracking-tight text-[#0F5132] dark:text-emerald-400">
                {shareA}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block font-medium">Part B Value</span>
              <span className="text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-400">
                {shareB}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-2.5 border-t border-black/[0.05] dark:border-white/[0.06]">
        <Link
          href="/subjects/mathematics"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0F5132] dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors group"
        >
          <span>120+ Math Past Paper Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
