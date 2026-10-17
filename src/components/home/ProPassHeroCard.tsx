'use client';

import React, { useState } from 'react';
import { Crown, Check, ArrowRight, Copy, CheckCheck, MessageCircle, Sparkles } from 'lucide-react';
import { AppleBadge } from '@/components/ui/AppleBadge';

export function ProPassHeroCard() {
  const [showModal, setShowModal] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const perks = [
    'Unlimited 100-Question Timed Mock Exams',
    'Official Negative Marking (-0.25) Scorecard',
    'Complete Solved Past Papers with Explanations',
    'Personal Weakness Diagnostic Engine',
    'Direct WhatsApp Mentorship & Doubt Resolution',
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <>
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/30">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">MEMBERSHIP</span>
                <h3 className="font-semibold text-base text-zinc-900 dark:text-white tracking-tight">
                  PakScholar <span className="text-amber-700 dark:text-amber-400">Elite Pass</span>
                </h3>
              </div>
            </div>
            <AppleBadge variant="amber" size="sm">
              <Sparkles className="w-3 h-3 mr-1 inline" /> 70% Off
            </AppleBadge>
          </div>

          <div className="flex items-baseline gap-2 mb-3.5">
            <span className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-mono">
              PKR 999
            </span>
            <span className="text-xs text-zinc-400 line-through font-mono">PKR 3,500</span>
            <span className="text-[11px] font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/30">
              3-Month Access
            </span>
          </div>

          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 mb-4">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-[#0F5132] dark:text-emerald-400 flex items-center justify-center shrink-0 text-[10px]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button & Payment Icons */}
        <div className="pt-2 border-t border-black/[0.05] dark:border-white/[0.06] space-y-2">
          <button
            onClick={() => setShowModal(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.99] group"
          >
            <span>Activate Elite Pass</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Instant Access via</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">JazzCash</span>
            <span>•</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Easypaisa</span>
            <span>•</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Raast</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-900 p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-bold text-base text-zinc-900 dark:text-white">Activate PakScholar Elite Pass</h4>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white p-1 rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              Send <strong className="text-zinc-900 dark:text-white">PKR 999</strong> to any of the verified official accounts below, then send a screenshot via WhatsApp for instant activation within 5 minutes.
            </p>

            <div className="space-y-2.5 mb-4 text-xs">
              {/* JazzCash */}
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 block">
                    JazzCash Account
                  </span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-white text-sm">
                    0300-1234567
                  </span>
                  <span className="text-[11px] text-zinc-500 block">Title: PakScholar Official</span>
                </div>
                <button
                  onClick={() => handleCopy('03001234567', 'jazz')}
                  className="px-2.5 py-1.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 flex items-center gap-1"
                >
                  {copiedAccount === 'jazz' ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAccount === 'jazz' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Easypaisa */}
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">
                    Easypaisa Account
                  </span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-white text-sm">
                    0345-1234567
                  </span>
                  <span className="text-[11px] text-zinc-500 block">Title: PakScholar Official</span>
                </div>
                <button
                  onClick={() => handleCopy('03451234567', 'easy')}
                  className="px-2.5 py-1.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 flex items-center gap-1"
                >
                  {copiedAccount === 'easy' ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAccount === 'easy' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Raast IBAN */}
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-700 dark:text-blue-400 block">
                    Raast Instant ID
                  </span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-white text-sm">
                    03001234567
                  </span>
                  <span className="text-[11px] text-zinc-500 block">Instant Bank Transfer</span>
                </div>
                <button
                  onClick={() => handleCopy('03001234567', 'raast')}
                  className="px-2.5 py-1.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 flex items-center gap-1"
                >
                  {copiedAccount === 'raast' ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAccount === 'raast' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567?text=Hi%20PakScholar%20Team%2C%20I%20have%20transferred%20PKR%20999%20for%20the%20Elite%20Pass.%20Here%20is%20my%20screenshot%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wide shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp (Instant Activation)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
