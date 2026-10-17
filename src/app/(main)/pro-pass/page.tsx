'use client';

import React, { useState } from 'react';
import {
  Crown,
  Check,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Copy,
  CheckCircle2,
  ArrowRight,
  CheckCheck,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export default function ProPassPage() {
  const [selectedPlan, setSelectedPlan] = useState<'3month' | 'lifetime'>('3month');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const comparison = [
    { feature: 'Daily Practice MCQs', free: '30 Questions / Day', pro: 'Unlimited 10,000+' },
    { feature: 'Full 100-Question Timed Mock Simulator', free: '1 Test / Month', pro: 'Unlimited Full Mocks' },
    { feature: 'Official -0.25 Negative Marking Engine', free: 'Basic Total', pro: 'Detailed Scorecard & Percentile' },
    { feature: 'Weakness Diagnostic Analysis', free: '—', pro: 'Subject-by-subject breakdown' },
    { feature: 'Solved Past Papers Archive (2018–2025)', free: 'Sample Questions', pro: 'Complete Original Keys' },
    { feature: 'Quantitative Math Problem Solver', free: 'Basic Presets', pro: 'Full Interactive Calculations' },
    { feature: 'Priority WhatsApp Doubt Assistance', free: '—', pro: 'Direct Mentorship Support' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AppleBadge variant="amber" size="md" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline" /> PAKSCHOLAR ELITE PASS
          </AppleBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Invest in Your Competitive Merit
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A single mark difference determines your final merit ranking. Train with official negative marking simulators, verified question banks, and complete solved past papers.
          </p>
        </div>

        {/* Pricing Cards Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Plan 1: 3-Month Sprint */}
          <div
            onClick={() => setSelectedPlan('3month')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-200 relative border ${
              selectedPlan === '3month'
                ? 'bg-white dark:bg-zinc-900 border-[#0F5132] dark:border-emerald-500 shadow-md ring-2 ring-[#0F5132]/20 dark:ring-emerald-500/20'
                : 'bg-white/80 dark:bg-zinc-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
            }`}
          >
            {selectedPlan === '3month' && (
              <span className="absolute -top-3 right-6">
                <AppleBadge variant="emerald" size="sm">
                  MOST POPULAR
                </AppleBadge>
              </span>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">3-Month Exam Sprint</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Targeted preparation for upcoming test dates</p>
              </div>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#0F5132] dark:border-emerald-400">
                {selectedPlan === '3month' && <div className="w-2.5 h-2.5 rounded-full bg-[#0F5132] dark:bg-emerald-400" />}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-mono">
                PKR 999
              </span>
              <span className="text-xs text-zinc-400 line-through font-mono">PKR 3,500</span>
              <AppleBadge variant="amber" size="sm">
                Save 70%
              </AppleBadge>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Full access to all 100-Question Mock Simulators, Negative Marking analytics, and complete past paper keys for 90 days.
            </p>
          </div>

          {/* Plan 2: 1-Year Career Pass */}
          <div
            onClick={() => setSelectedPlan('lifetime')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-200 relative border ${
              selectedPlan === 'lifetime'
                ? 'bg-white dark:bg-zinc-900 border-[#0F5132] dark:border-emerald-500 shadow-md ring-2 ring-[#0F5132]/20 dark:ring-emerald-500/20'
                : 'bg-white/80 dark:bg-zinc-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15]'
            }`}
          >
            {selectedPlan === 'lifetime' && (
              <span className="absolute -top-3 right-6">
                <AppleBadge variant="amber" size="sm">
                  BEST VALUE
                </AppleBadge>
              </span>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Full Year Career Pass</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Comprehensive prep across all recruitment tests</p>
              </div>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#0F5132] dark:border-emerald-400">
                {selectedPlan === 'lifetime' && <div className="w-2.5 h-2.5 rounded-full bg-[#0F5132] dark:bg-emerald-400" />}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-mono">
                PKR 1,499
              </span>
              <span className="text-xs text-zinc-400 line-through font-mono">PKR 6,000</span>
              <AppleBadge variant="emerald" size="sm">
                Save 75%
              </AppleBadge>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              365 days of unrestricted access including all future 2025 question additions and direct WhatsApp mentorship.
            </p>
          </div>
        </div>

        {/* Payment Account Cards */}
        <AppleCard hoverLift={false} className="p-6 sm:p-8 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0F5132] dark:text-emerald-400" />
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                  Payment Accounts (JazzCash / Easypaisa / Raast)
                </h2>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Selected plan payable amount: <strong className="text-zinc-900 dark:text-white font-mono">{selectedPlan === '3month' ? 'PKR 999' : 'PKR 1,499'}</strong>
              </p>
            </div>
            <AppleBadge variant="emerald" size="sm" dot>
              Instant Verification
            </AppleBadge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
            {/* Account 1 */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400 block">
                  JazzCash & Easypaisa
                </span>
                <span className="text-base font-bold text-zinc-900 dark:text-white font-mono">
                  0300 1234567
                </span>
                <span className="text-[11px] text-zinc-500 block">Account Title: PakScholar Official</span>
              </div>
              <button
                onClick={() => copyToClipboard('03001234567', 'mobile')}
                className="p-2 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 transition-colors"
                title="Copy number"
              >
                {copiedKey === 'mobile' ? (
                  <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Account 2 */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-blue-700 dark:text-blue-400 block">
                  Raast ID (All Banking Apps)
                </span>
                <span className="text-base font-bold text-zinc-900 dark:text-white font-mono">
                  03001234567
                </span>
                <span className="text-[11px] text-zinc-500 block">Instant Zero-Fee Transfer</span>
              </div>
              <button
                onClick={() => copyToClipboard('03001234567', 'raast')}
                className="p-2 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 transition-colors"
                title="Copy Raast ID"
              >
                {copiedKey === 'raast' ? (
                  <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Verification */}
          <a
            href={`https://wa.me/923001234567?text=Assalam-o-Alaikum!%20I%20have%20transferred%20${selectedPlan === '3month' ? 'PKR%20999' : 'PKR%201,499'}%20for%20the%20PakScholar%20Elite%20Pass.%20Attached%20is%20my%20payment%20slip.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Payment Screenshot via WhatsApp (5-Min Activation)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </AppleCard>

        {/* Detailed Comparison Table */}
        <AppleCard hoverLift={false} className="p-6 sm:p-8">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white mb-4">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.08] text-zinc-500 dark:text-zinc-400 text-xs">
                  <th className="py-3 px-4 font-medium">Feature</th>
                  <th className="py-3 px-4 font-medium">Free Access</th>
                  <th className="py-3 px-4 font-bold text-[#0F5132] dark:text-emerald-400">Elite Pass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] text-xs">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.02]">
                    <td className="py-3 px-4 text-zinc-900 dark:text-white font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-zinc-500 dark:text-zinc-400">{row.free}</td>
                    <td className="py-3 px-4 text-[#0F5132] dark:text-emerald-400 font-semibold">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AppleCard>
      </div>
    </div>
  );
}
