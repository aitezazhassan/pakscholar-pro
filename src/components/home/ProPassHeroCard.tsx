'use client';

import React, { useState } from 'react';
import { Crown, Check, Zap, Sparkles, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { CyberBadge } from '@/components/ui/CyberBadge';

export function ProPassHeroCard() {
  const [showModal, setShowModal] = useState(false);

  const perks = [
    'Unlimited 100-Question Timed Mock Tests',
    'Official Negative Marking (-0.25) Simulator',
    'Personal Weakness Diagnostic HUD',
    'All Solved PPSC/FPSC Past Papers (PDFs)',
    'Direct WhatsApp Doubt Resolution Support',
  ];

  return (
    <>
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Amber / Emerald Glow Gradient */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 block">MEMBERSHIP</span>
                <h3 className="font-bold text-white tracking-tight flex items-center gap-1.5">
                  PakScholar <span className="text-amber-400">Elite Pass</span>
                </h3>
              </div>
            </div>
            <CyberBadge variant="amber" size="sm">
              <Sparkles className="w-3 h-3 mr-1 inline" /> 70% OFF
            </CyberBadge>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-extrabold text-white font-mono">PKR 999</span>
            <span className="text-xs text-zinc-500 line-through font-mono">PKR 3,500</span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ONE-TIME / 3 MONTHS
            </span>
          </div>

          <ul className="space-y-1.5 text-xs text-zinc-300 mb-4">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-[10px]">
                  ✓
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button & Payment Icons */}
        <div className="pt-2 border-t border-white/5 space-y-2">
          <button
            onClick={() => setShowModal(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all active:scale-95 group"
          >
            <span>Upgrade to Elite Pass Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-zinc-500">
            <span>Instant Activation:</span>
            <span className="text-zinc-300 font-bold">JazzCash</span>
            <span>•</span>
            <span className="text-zinc-300 font-bold">Easypaisa</span>
            <span>•</span>
            <span className="text-zinc-300 font-bold">Raast</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-lg text-white">Upgrade to Elite Pass</h4>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
              Send <strong className="text-white">PKR 999</strong> via any of the accounts below, then send a screenshot of the receipt via WhatsApp for instant activation.
            </p>

            <div className="space-y-3 font-mono text-xs mb-5">
              <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 text-[10px] block">JAZZCASH / EASYPAISA</span>
                  <span className="text-white font-bold text-sm">0300 1234567</span>
                  <span className="text-zinc-400 text-[10px] block">Account Title: Aitezaz Hassan</span>
                </div>
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
                  ACTIVE
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 text-[10px] block">RAAST ID</span>
                  <span className="text-white font-bold text-sm">03001234567</span>
                  <span className="text-zinc-400 text-[10px] block">Instant Bank Transfer (0 Fee)</span>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                  0% FEE
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567?text=Hello%20PakScholar%20Pro!%20I%20have%20sent%20PKR%20999%20for%20the%20Elite%20Pass.%20Attached%20is%20my%20payment%20slip."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Receipt on WhatsApp</span>
            </a>

            <p className="text-[11px] text-zinc-500 text-center mt-3 font-mono">
              Account activated within 5–15 minutes after receipt verification.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
