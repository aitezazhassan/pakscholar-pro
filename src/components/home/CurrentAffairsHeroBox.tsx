'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ArrowUpRight, Flame, Globe2, ShieldCheck, Calendar } from 'lucide-react';
import Link from 'next/link';
import { CyberBadge } from '@/components/ui/CyberBadge';

export function CurrentAffairsHeroBox() {
  const headlines = [
    {
      id: 1,
      date: 'Feb 15, 2025',
      title: 'PM Shehbaz Sharif approves National Digital Economic Framework with $10B IT export roadmap.',
      entities: ['PM Shehbaz Sharif', 'National Digital Economic Framework', '$10B IT export'],
      category: 'Economy',
      highYield: true,
    },
    {
      id: 2,
      date: 'Feb 12, 2025',
      title: 'Supreme Court bench announces landmark ruling on Article 63-A review petition.',
      entities: ['Supreme Court', 'Article 63-A'],
      category: 'Constitution & Law',
      highYield: true,
    },
    {
      id: 3,
      date: 'Feb 08, 2025',
      title: 'SCO Council of Foreign Ministers meeting concludes with Islamabad Declaration on regional connectivity.',
      entities: ['SCO Council', 'Islamabad Declaration'],
      category: 'International Affairs',
      highYield: false,
    },
  ];

  return (
    <div className="relative h-full flex flex-col justify-between overflow-hidden">
      {/* Dynamic Animated Mesh Gradient (Green / Teal / Deep Black) */}
      <div className="absolute -inset-10 -z-10 opacity-40">
        <div className="absolute top-0 -left-10 w-72 h-72 rounded-full bg-emerald-600/30 blur-[90px] animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-500/20 blur-[100px] animate-pulse"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <div>
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white tracking-tight">Current Affairs Stream</h3>
                <CyberBadge variant="emerald" size="sm" pulse>
                  LIVE WIRE
                </CyberBadge>
              </div>
              <p className="text-xs text-zinc-400">High-Yield PPSC/FPSC Pakistan & World Briefing</p>
            </div>
          </div>

          <Link
            href="/current-affairs"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10"
          >
            <span>Full Stream</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Headlines Feed */}
        <div className="space-y-3">
          {headlines.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 hover:border-emerald-500/30 transition-all duration-200 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {item.date}
                </span>
                <div className="flex items-center gap-1.5">
                  {item.highYield && (
                    <CyberBadge variant="amber" size="sm">
                      <Flame className="w-3 h-3 mr-0.5 inline" />
                      HIGH YIELD
                    </CyberBadge>
                  )}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/5">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Headline with entity highlighting */}
              <p className="text-sm font-medium text-zinc-200 leading-snug group-hover:text-white transition-colors">
                {item.title.split(new RegExp(`(${item.entities.join('|')})`, 'gi')).map((part, i) => {
                  const isEntity = item.entities.some(
                    (entity) => entity.toLowerCase() === part.toLowerCase()
                  );
                  return isEntity ? (
                    <span
                      key={i}
                      className="text-emerald-400 font-semibold underline decoration-emerald-500/30 underline-offset-2"
                    >
                      {part}
                    </span>
                  ) : (
                    part
                  );
                })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Facts Pill Footer */}
      <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 font-mono text-[11px]">Trending Entities:</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] border border-emerald-500/20 font-mono">
            SCO 2025
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-[11px] border border-white/5 font-mono">
            Article 63-A
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-[11px] border border-white/5 font-mono">
            IMF Review
          </span>
        </div>
        <span className="text-zinc-500 text-[11px] font-mono">Updated 2h ago</span>
      </div>
    </div>
  );
}
