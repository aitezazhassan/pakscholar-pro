'use client';

import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Share2,
  Check,
  X,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

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
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  const streamEvents: EventItem[] = [
    {
      id: 'ca-01',
      date: 'February 15, 2025',
      time: '14:30 PKT',
      category: 'Economy',
      title: 'PM Shehbaz Sharif approves National Digital Economic Framework with $10B IT export roadmap.',
      summary:
        'The Federal Cabinet formally ratified the five-year National Digital Economic Framework. The strategic policy targets raising Pakistan’s annual IT exports from $3.2B to $10B by FY2029 through technology special economic zones and digital freelance corridors.',
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

  const dignitaries = [
    { label: 'Chief of Army Staff', val: 'Gen. Asim Munir' },
    { label: 'Chief Justice of Pakistan', val: 'Justice Yahya Afridi' },
    { label: 'Chairman Senate', val: 'Yousaf Raza Gillani' },
    { label: 'Speaker National Assembly', val: 'Sardar Ayaz Sadiq' },
    { label: 'Governor State Bank', val: 'Jameel Ahmad' },
    { label: 'UN Secretary-General', val: 'António Guterres' },
  ];

  const filteredEvents =
    filter === 'all'
      ? streamEvents
      : streamEvents.filter((ev) => ev.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stream Header */}
        <div className="mb-10 pb-6 border-b border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AppleBadge variant="emerald" size="sm" dot>
                Live Editorial Stream
              </AppleBadge>
              <span className="text-xs text-zinc-500">2024–2025 Exam Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Current Affairs Digest
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Chronological developments formatted strictly for PPSC, FPSC & CSS examinations with verified question angles.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            {['all', 'Economy', 'Pakistan Affairs', 'Legal & Judiciary', 'International'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all capitalize ${
                  filter === cat
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* THE TIMELINE STREAM */}
          <div className="lg:col-span-8 relative">
            {/* Subtle Hairline Timeline Spine */}
            <div className="absolute top-4 bottom-6 left-3 sm:left-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            <div className="space-y-8 pl-8 sm:pl-10">
              {filteredEvents.map((item) => (
                <div key={item.id} className="relative">
                  {/* Subtle Bullet Dot */}
                  <div className="absolute -left-8 sm:-left-10 top-5 w-2.5 h-2.5 rounded-full bg-[#0F5132] dark:bg-emerald-400 ring-4 ring-[#FBFBFD] dark:ring-[#0A0A0C]" />

                  {/* Date Pill */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-[#0F5132] dark:text-emerald-400" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>

                  {/* Apple Card */}
                  <AppleCard hoverLift={false} className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {item.category}
                      </span>
                      {item.highYield && (
                        <AppleBadge variant="amber" size="sm">
                          High Yield
                        </AppleBadge>
                      )}
                    </div>

                    <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-2 leading-snug">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Probable Exam Question */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30 text-xs">
                      <div className="flex items-center gap-1.5 text-[#0F5132] dark:text-emerald-400 font-semibold mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Probable Exam Question</span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.examAngle}</p>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <span>Keywords:</span>
                        {item.entities.slice(0, 3).map((entity) => (
                          <span
                            key={entity}
                            className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                          >
                            {entity}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#0F5132] dark:text-emerald-400 font-medium">Verified by Editorial Desk</span>
                    </div>
                  </AppleCard>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            {/* High-Yield Dignitaries Card */}
            <AppleCard hoverLift={false} className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">
                  Key Dignitaries & Appointments
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                Active Pakistani leadership frequently queried in 2024–2025 examinations:
              </p>

              <div className="space-y-2 text-xs">
                {dignitaries.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between"
                  >
                    <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium">{fact.label}</span>
                    <span className="text-zinc-900 dark:text-white font-semibold text-right">{fact.val}</span>
                  </div>
                ))}
              </div>
            </AppleCard>

            {/* Daily Flash Recall Card */}
            <AppleCard hoverLift={false} className="p-5 bg-gradient-to-br from-emerald-50/40 via-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#0F5132] dark:text-emerald-400">DAILY FLASH QUESTION</span>
                <AppleBadge variant="emerald" size="sm">
                  Instant Test
                </AppleBadge>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                Who was sworn in as the 29th Chief Justice of Pakistan in October 2024?
              </p>
              <div className="space-y-2 text-xs mb-3">
                {[
                  { id: 0, text: 'Justice Yahya Afridi', correct: true },
                  { id: 1, text: 'Justice Mansoor Ali Shah', correct: false },
                  { id: 2, text: 'Justice Qazi Faez Isa', correct: false },
                ].map((opt) => {
                  const isChosen = quizAnswer === opt.id;
                  const isCorrect = opt.correct;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setQuizAnswer(opt.id)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs font-medium flex items-center justify-between ${
                        quizAnswer === null
                          ? 'bg-white dark:bg-zinc-800/80 border-black/[0.06] dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 hover:border-black/[0.15]'
                          : isChosen && isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-300'
                          : isChosen && !isCorrect
                          ? 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/50 dark:text-rose-300'
                          : isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-300'
                          : 'opacity-50 border-transparent bg-zinc-50 dark:bg-zinc-800/30'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {quizAnswer !== null && (
                        <span>
                          {opt.correct ? (
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : isChosen ? (
                            <X className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center">
                Select an option to test your immediate recall.
              </p>
            </AppleCard>
          </div>
        </div>
      </div>
    </div>
  );
}
