'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Target,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export default function PastPapersPage() {
  const [selectedCommission, setSelectedCommission] = useState<'all' | 'PPSC' | 'FPSC' | 'PMS'>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const papers = [
    {
      id: 'ppsc-ad-2024',
      title: 'Assistant Director (Local Government)',
      commission: 'PPSC',
      year: '2024',
      subject: 'General Ability (100 Marks)',
      questions: 100,
      answerKey: 'Verified by PPSC Desk',
      badge: 'Recent 2024',
    },
    {
      id: 'ppsc-tehsildar-2023',
      title: 'Tehsildar & Naib Tehsildar Exam',
      commission: 'PPSC',
      year: '2023',
      subject: 'General Knowledge & Pakistan Affairs',
      questions: 100,
      answerKey: 'Official Key Included',
      badge: 'High Yield',
    },
    {
      id: 'fpsc-inspector-2023',
      title: 'Inspector Customs & Preventive Officer',
      commission: 'FPSC',
      year: '2023',
      subject: 'General Ability, English & Customs Act',
      questions: 100,
      answerKey: 'Verified Key',
      badge: 'BPS-16',
    },
    {
      id: 'ppsc-si-2023',
      title: 'Sub-Inspector Punjab Police',
      commission: 'PPSC',
      year: '2023',
      subject: 'General Knowledge, Law & Computer Basics',
      questions: 100,
      answerKey: 'Official Key Included',
      badge: 'Service Quota',
    },
    {
      id: 'ppsc-asst-2023',
      title: 'Assistant (Services & General Admin Dept)',
      commission: 'PPSC',
      year: '2023',
      subject: 'General Ability & MS Office',
      questions: 100,
      answerKey: 'Verified Key',
      badge: 'BPS-16',
    },
    {
      id: 'ppsc-lecturer-2022',
      title: 'Lecturer Computer Science',
      commission: 'PPSC',
      year: '2022',
      subject: 'Subject (80%) + General Ability (20%)',
      questions: 100,
      answerKey: 'Official Key Included',
      badge: 'Higher Education',
    },
  ];

  const filteredPapers = papers.filter((p) => {
    const matchComm = selectedCommission === 'all' || p.commission === selectedCommission;
    const matchYear = selectedYear === 'all' || p.year === selectedYear;
    return matchComm && matchYear;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <AppleBadge variant="emerald" size="md" className="mb-4">
            SOLVED EXAM REPOSITORY
          </AppleBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Past Examination Papers
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Real competitive exam papers from the Punjab Public Service Commission and Federal Public Service Commission with official answer keys and step-by-step solutions.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
          {/* Commission Pills */}
          <div className="flex items-center p-0.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium">
            {(['all', 'PPSC', 'FPSC', 'PMS'] as const).map((comm) => (
              <button
                key={comm}
                onClick={() => setSelectedCommission(comm)}
                className={`px-3.5 py-1.5 rounded-lg capitalize transition-all ${
                  selectedCommission === comm
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {comm === 'all' ? 'All Commissions' : comm}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Filter Year:</span>
            {['all', '2024', '2023', '2022'].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  selectedYear === yr
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent font-medium'
                    : 'border-black/[0.06] dark:border-white/[0.08] hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {yr === 'all' ? 'All' : yr}
              </button>
            ))}
          </div>
        </div>

        {/* Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredPapers.map((paper) => (
            <AppleCard key={paper.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <AppleBadge variant={paper.commission === 'PPSC' ? 'emerald' : 'amber'} size="sm">
                      {paper.commission}
                    </AppleBadge>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {paper.year}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {paper.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1.5 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  {paper.subject}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#0F5132] dark:text-emerald-400 font-medium mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{paper.answerKey}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between gap-2">
                <Link
                  href="/practice/mock-exams"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F5132] dark:text-emerald-400 hover:text-emerald-800 transition-colors"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Solve in Simulator</span>
                </Link>

                <button
                  onClick={() => alert(`Starting download for ${paper.title} verified key PDF...`)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-50 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Key</span>
                </button>
              </div>
            </AppleCard>
          ))}
        </div>

        {/* Pro Pass Past Paper Archive Banner */}
        <AppleCard hoverLift={false} className="p-8 sm:p-10 bg-gradient-to-br from-amber-50/50 via-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <AppleBadge variant="amber" size="sm" className="mb-2">
              PRO ARCHIVE ACCESS
            </AppleBadge>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Need All 50+ Past Papers with Explanations?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Elite Pass members get instant direct downloads of every past paper since 2018 with complete verified official explanations and zero watermarks.
            </p>
          </div>

          <Link
            href="/pro-pass"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold shadow-sm hover:shadow transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Unlock All Past Papers (PKR 999)</span>
          </Link>
        </AppleCard>
      </div>
    </div>
  );
}
