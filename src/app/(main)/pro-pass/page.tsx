'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Check,
  Zap,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Copy,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { CyberBadge } from '@/components/ui/CyberBadge';

export default function ProPassPage() {
  const [selectedPlan, setSelectedPlan] = useState<'3month' | 'lifetime'>('3month');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const comparison = [
    { feature: 'Daily Free MCQs', free: '30 Questions', pro: 'Unlimited 10,000+' },
    { feature: 'Full 100-Question Timed Mock Simulator', free: '1 Test / week', pro: 'Unlimited Mocks' },
    { feature: 'Official -0.25 Negative Marking Engine', free: 'Basic Score', pro: 'Detailed HUD & Merit Rank' },
    { feature: 'Weakness Diagnostic Telemetry', free: '✕', pro: 'Subject-by-subject breakdown' },
    { feature: 'All Solved Past Papers (2020–2025 PDFs)', free: 'Watermarked sample', pro: 'Direct Clean Downloads' },
    { feature: 'Math Lab Step-by-Step Solver', free: 'Limited Presets', pro: 'Full Custom Equation Solver' },
    { feature: 'Direct WhatsApp Doubt Priority Support', free: '✕', pro: 'Direct Instructor Chat' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <CyberBadge variant="amber" size="md" pulse className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline" /> PAKSCHOLAR ELITE PASS
          </CyberBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Invest in Your BPS-17 / BPS-18 Appointment
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            A single mark difference decides between merit selection and waiting another year. Master negative marking with elite simulation.
          </p>
        </div>

        {/* Pricing Cards Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Plan 1: 3-Month Sprint */}
          <div
            onClick={() => setSelectedPlan('3month')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative border ${
              selectedPlan === '3month'
                ? 'bg-zinc-900 border-amber-400 shadow-2xl shadow-amber-500/10'
                : 'bg-zinc-900/50 border-white/10 hover:border-white/20'
            }`}
          >
            {selectedPlan === '3month' && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider">
                MOST POPULAR
              </span>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">3-Month Exam Sprint</h3>
                <p className="text-xs text-zinc-400">Perfect for upcoming PPSC / FPSC test dates</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center border-amber-400">
                {selectedPlan === '3month' && <div className="w-3 h-3 rounded-full bg-amber-400" />}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-white font-mono">PKR 999</span>
              <span className="text-sm text-zinc-500 line-through font-mono">PKR 3,500</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                SAVE 70%
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-mono mb-4">
              Access all 100-Question Mock Simulators, Negative Marking analysis, and PDF Past Paper Downloads for 90 days.
            </p>
          </div>

          {/* Plan 2: 1-Year / Lifetime Master Pass */}
          <div
            onClick={() => setSelectedPlan('lifetime')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative border ${
              selectedPlan === 'lifetime'
                ? 'bg-zinc-900 border-emerald-400 shadow-2xl shadow-emerald-500/10'
                : 'bg-zinc-900/50 border-white/10 hover:border-white/20'
            }`}
          >
            {selectedPlan === 'lifetime' && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider">
                BEST VALUE
              </span>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Full Year Career Pass</h3>
                <p className="text-xs text-zinc-400">Complete prep for multiple recruitment tests</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center border-emerald-400">
                {selectedPlan === 'lifetime' && <div className="w-3 h-3 rounded-full bg-emerald-400" />}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-white font-mono">PKR 1,499</span>
              <span className="text-sm text-zinc-500 line-through font-mono">PKR 6,000</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                SAVE 75%
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-mono mb-4">
              Full 365 days of unrestricted access including all future 2025 question bank updates and WhatsApp mentorship.
            </p>
          </div>
        </div>

        {/* Payment Account Cards */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Direct Payment Channels (JazzCash / Easypaisa / Raast)
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Total payable amount: <strong className="text-white">{selectedPlan === '3month' ? 'PKR 999' : 'PKR 1,499'}</strong>
              </p>
            </div>
            <CyberBadge variant="emerald" size="sm">
              INSTANT ACTIVATION
            </CyberBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs mb-6">
            {/* Account 1 */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-zinc-500 text-[10px] block">JAZZCASH / EASYPAISA</span>
                <span className="text-white font-bold text-base">0300 1234567</span>
                <span className="text-zinc-400 text-[11px] block">Account Title: Aitezaz Hassan</span>
              </div>
              <button
                onClick={() => copyToClipboard('03001234567', 'mobile')}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                title="Copy number"
              >
                {copiedKey === 'mobile' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Account 2 */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-zinc-500 text-[10px] block">RAAST ID (ALL BANK APPS)</span>
                <span className="text-white font-bold text-base">03001234567</span>
                <span className="text-zinc-400 text-[11px] block">Instant 0% Fee Transfer</span>
              </div>
              <button
                onClick={() => copyToClipboard('03001234567', 'raast')}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                title="Copy Raast ID"
              >
                {copiedKey === 'raast' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Verification */}
          <a
            href={`https://wa.me/923001234567?text=Assalam-o-Alaikum!%20I%20have%20transferred%20${selectedPlan === '3month' ? 'PKR%20999' : 'PKR%201,499'}%20for%20the%20PakScholar%20Pro%20Pass.%20Attached%20is%20my%20payment%20slip.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all active:scale-95 font-mono"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Payment Slip on WhatsApp for Instant Access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl">
          <h2 className="text-lg font-bold text-white mb-6 font-mono">Free Tier vs. Elite Pass</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 font-mono text-xs">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Free Access</th>
                  <th className="py-3 px-4 text-amber-400 font-bold">Elite Pass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-zinc-400">{row.free}</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
