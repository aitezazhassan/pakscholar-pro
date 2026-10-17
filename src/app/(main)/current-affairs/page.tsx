'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Flame,
  Globe,
  Share2,
  Bookmark,
  Sparkles,
  Calendar,
  CheckCircle2,
  Filter,
  TrendingUp,
} from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { CyberBadge } from '@/components/ui/CyberBadge';

interface EventItem {
  id: string;
  date: string;
  time: string;
  category: 'Pakistan Affairs' | 'Economy' | 'International' | 'Legal & Judiciary' | 'Science & Tech';
  title: string;
  summary: string;
  entities: string[];
  highYield: boolean;
  examAngle: string;
}

export default function CurrentAffairsStreamPage() {
  const [filter, setFilter] = useState<string>('all');

  const streamEvents: EventItem[] = [
    {
      id: 'ca-01',
      date: 'February 15, 2025',
      time: '14:30 PKT',
      category: 'Economy',
      title: 'PM Shehbaz Sharif approves National Digital Economic Framework with $10B IT export roadmap.',
      summary:
        'The Federal Cabinet chaired by Prime Minister Shehbaz Sharif formally ratified the five-year National Digital Economic Framework. The strategic policy targets raising Pakistan’s annual IT exports from the current $3.2B to $10B by FY2029 through tech special economic zones and digital freelance corridors.',
      entities: ['PM Shehbaz Sharif', 'National Digital Economic Framework', '$10B IT export', 'FY2029'],
      highYield: true,
      examAngle: 'PPSC Paper Q: Who launched the National Digital Economic Framework and what is the target year? (Answer: PM Shehbaz Sharif, 2029).',
    },
    {
      id: 'ca-02',
      date: 'February 12, 2025',
      time: '11:15 PKT',
      category: 'Legal & Judiciary',
      title: 'Supreme Court larger bench delivers decisive verdict on Article 63-A defecting votes review petition.',
      summary:
        'A five-member Supreme Court bench headed by the Chief Justice overturned the 2022 decision regarding Article 63-A of the Constitution of Pakistan, ruling that votes cast contrary to party directives during parliamentary voting must be counted.',
      entities: ['Supreme Court', 'Article 63-A', 'Constitution of Pakistan'],
      highYield: true,
      examAngle: 'PPSC General Knowledge Q: Which Article of the 1973 Constitution deals with disqualification on grounds of defection? (Answer: Article 63-A).',
    },
    {
      id: 'ca-03',
      date: 'February 08, 2025',
      time: '18:00 PKT',
      category: 'International',
      title: 'Shanghai Cooperation Organisation (SCO) Council of Heads of Government concludes with Islamabad Declaration.',
      summary:
        'The 23rd Council of Heads of Government (CHG) of the SCO held in Islamabad adopted the joint declaration on multilateral economic cooperation, energy grids, and digital cross-border trade settlements between member states.',
      entities: ['Shanghai Cooperation Organisation', 'SCO', 'Islamabad Declaration', '23rd Council of Heads of Government'],
      highYield: true,
      examAngle: 'FPSC/PPSC Q: Pakistan hosted which session of SCO Council of Heads of Government in Islamabad? (Answer: 23rd Meeting).',
    },
    {
      id: 'ca-04',
      date: 'January 28, 2025',
      time: '09:45 PKT',
      category: 'Pakistan Affairs',
      title: 'Maryam Nawaz Sharif launches "Apni Chhat, Apna Ghar" housing finance scheme across 42 Punjab districts.',
      summary:
        'Punjab Chief Minister Maryam Nawaz inaugurated the computerized ballot for the provincial interest-free loan program offering up to PKR 1.5 million for low-income citizens to construct homes.',
      entities: ['Maryam Nawaz Sharif', 'Apni Chhat, Apna Ghar', 'Punjab', 'PKR 1.5 million'],
      highYield: false,
      examAngle: 'PPSC Assistant Director Q: What is the maximum loan ceiling under Punjab’s "Apni Chhat, Apna Ghar" initiative? (Answer: 15 Lakh).',
    },
    {
      id: 'ca-05',
      date: 'January 15, 2025',
      time: '16:20 PKT',
      category: 'Economy',
      title: 'SBP keeps Policy Rate unchanged at 13.0% amid controlled inflation readings and stable current account.',
      summary:
        'The Monetary Policy Committee (MPC) of the State Bank of Pakistan announced the decision to maintain the benchmark interest rate, citing steady foreign exchange reserves and manageable core inflation.',
      entities: ['State Bank of Pakistan', 'SBP', 'Policy Rate', '13.0%'],
      highYield: true,
      examAngle: 'PPSC Commerce/Economics Q: Who chairs the Monetary Policy Committee of Pakistan? (Answer: Governor SBP).',
    },
  ];

  const floatingFacts = [
    { label: 'Current Army Chief', val: 'Gen. Asim Munir' },
    { label: 'Chief Justice of Pakistan', val: 'Justice Yahya Afridi' },
    { label: 'Chairman Senate', val: 'Yousaf Raza Gillani' },
    { label: 'Speaker National Assembly', val: 'Sardar Ayaz Sadiq' },
    { label: 'SBP Governor', val: 'Jameel Ahmad' },
    { label: 'UN Secretary General', val: 'António Guterres' },
  ];

  const filteredEvents =
    filter === 'all'
      ? streamEvents
      : streamEvents.filter((ev) => ev.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stream Header */}
        <div className="mb-10 pb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CyberBadge variant="emerald" size="sm" pulse>
                LIVE X-PRO FEED
              </CyberBadge>
              <span className="text-xs font-mono text-zinc-500">REAL-TIME EXAM INTEL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              Current Affairs Stream
            </h1>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Chronological live intelligence formatted for PPSC, FPSC & CSS exam prep with verified question angles.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 font-mono text-xs">
            {['all', 'Economy', 'Pakistan Affairs', 'Legal & Judiciary', 'International'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all capitalize ${
                  filter === cat
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout: Stream on Left, Floating Fact Pills on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ========================================================= */}
          {/* THE TIMELINE STREAM (Twitter/X Pro style) */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 relative">
            {/* Neon Vertical Timeline Guide Line */}
            <div className="absolute top-2 bottom-6 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/30 to-transparent shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

            <div className="space-y-8 pl-10 sm:pl-14">
              {filteredEvents.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Neon Dot on Timeline */}
                  <div className="absolute -left-10 sm:-left-14 top-5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-[0_0_10px_#10b981]" />

                  {/* Sticky Blurred Date Header */}
                  <div className="sticky top-20 z-10 py-1.5 mb-2 backdrop-blur-md bg-zinc-950/80 w-fit px-3 rounded-lg border border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400 shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-bold">{item.date}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400">{item.time}</span>
                  </div>

                  {/* Glassmorphic Event Card */}
                  <SpotlightCard className="p-5 sm:p-6 bg-zinc-900/40 border-white/10 hover:border-emerald-500/40 transition-all">
                    {/* Header tags */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
                        {item.category}
                      </span>
                      {item.highYield && (
                        <CyberBadge variant="amber" size="sm">
                          <Flame className="w-3 h-3 mr-1 inline" /> HIGH YIELD
                        </CyberBadge>
                      )}
                    </div>

                    {/* Title with Emerald Entity Highlight */}
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                      {item.title.split(new RegExp(`(${item.entities.join('|')})`, 'gi')).map((chunk, i) => {
                        const isEntity = item.entities.some(
                          (e) => e.toLowerCase() === chunk.toLowerCase()
                        );
                        return isEntity ? (
                          <span
                            key={i}
                            className="text-emerald-400 font-semibold underline decoration-emerald-500/40 underline-offset-4"
                          >
                            {chunk}
                          </span>
                        ) : (
                          chunk
                        );
                      })}
                    </h2>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-4">{item.summary}</p>

                    {/* Exam Angle Callout Box */}
                    <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-emerald-500/20 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>PROBABLE EXAM QUESTION</span>
                      </div>
                      <p className="text-zinc-300 leading-normal">{item.examAngle}</p>
                    </div>

                    {/* Bottom metadata tags */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span>Entities:</span>
                        {item.entities.slice(0, 2).map((entity) => (
                          <span
                            key={entity}
                            className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 text-[10px]"
                          >
                            {entity}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-emerald-400/80">Verified by Editorial Team</span>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* FLOATING FACT PILLS & WIDGETS SIDEBAR */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Top Fact Pills Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-white font-mono uppercase tracking-wider">
                  High-Yield Officials HUD
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-4">
                Active Pakistani dignitaries frequently asked in 2024–2025 PPSC one-paper tests:
              </p>

              <div className="space-y-2">
                {floatingFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/5 flex items-center justify-between text-xs font-mono hover:border-emerald-500/30 transition-colors"
                  >
                    <span className="text-zinc-400 text-[11px]">{fact.label}</span>
                    <span className="text-emerald-400 font-bold text-right">{fact.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Daily Quiz Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/60 to-zinc-950 border border-emerald-500/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-emerald-400 font-bold">DAILY FLASH QUIZ</span>
                <CyberBadge variant="emerald" size="sm">
                  1 QUESTION
                </CyberBadge>
              </div>
              <p className="text-sm font-semibold text-white mb-3">
                Who was appointed as the 29th Chief Justice of Pakistan in October 2024?
              </p>
              <div className="space-y-1.5 font-mono text-xs mb-4">
                {['Justice Yahya Afridi', 'Justice Mansoor Ali Shah', 'Justice Qazi Faez Isa'].map(
                  (opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => alert(idx === 0 ? 'Correct! (+1.00 Mark)' : 'Incorrect! (-0.25 Mark)')}
                      className="w-full text-left p-2.5 rounded-lg bg-zinc-950/70 border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all"
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  )
                )}
              </div>
              <p className="text-[11px] font-mono text-zinc-500 text-center">
                Click option to test your immediate recall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
