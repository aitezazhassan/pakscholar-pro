'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Cpu,
  ArrowRight,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { CurrentAffairsHeroBox } from '@/components/home/CurrentAffairsHeroBox';
import { MathLabWidget } from '@/components/math/MathLabWidget';
import { PunjabCommandBox } from '@/components/home/PunjabCommandBox';
import { PastPapersBox } from '@/components/home/PastPapersBox';
import { SimulatorLaunchCard } from '@/components/home/SimulatorLaunchCard';
import { ProPassHeroCard } from '@/components/home/ProPassHeroCard';

export default function BentoHomepage() {
  const subjects = [
    {
      title: 'General Knowledge',
      slug: 'general-knowledge',
      count: '50+ MCQs',
      topics: 'World Geography, Capitals, Treaties & Organizations',
      difficulty: 'High Yield',
      icon: Award,
      href: '/subjects/general-knowledge/mcqs',
      color: 'text-[#0F5132] bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/30',
    },
    {
      title: 'Mathematics & Ability',
      slug: 'mathematics',
      count: '30+ MCQs',
      topics: 'Ratios, Ages, Speed-Distance, Work-Rate, Algebra',
      difficulty: 'Core Filter',
      icon: TrendingUp,
      href: '/subjects/mathematics/mcqs',
      color: 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200/50 dark:border-amber-800/30',
    },
    {
      title: 'Pakistan Studies',
      slug: 'pakistan-studies',
      count: '40+ MCQs',
      topics: 'Constitutional History, 1947–2025, Economy & Demographics',
      difficulty: 'High Yield',
      icon: ShieldCheck,
      href: '/subjects/pakistan-studies/mcqs',
      color: 'text-[#0F5132] bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/30',
    },
    {
      title: 'Islamic Studies',
      slug: 'islamic-studies',
      count: '40+ MCQs',
      topics: 'Quranic Sciences, Seerah, Ghazwat, Islamic Jurisprudence',
      difficulty: 'Essential',
      icon: BookOpen,
      href: '/subjects/islamic-studies/mcqs',
      color: 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 border-blue-200/50 dark:border-blue-800/30',
    },
    {
      title: 'English Language',
      slug: 'english',
      count: '35+ MCQs',
      topics: 'Prepositions, Idioms, Sentence Correction, Synonyms',
      difficulty: 'Cutoff Decider',
      icon: BookOpen,
      href: '/subjects/english/mcqs',
      color: 'text-purple-700 bg-purple-50 dark:bg-purple-950/40 border-purple-200/50 dark:border-purple-800/30',
    },
    {
      title: 'Computer Science',
      slug: 'computer-science',
      count: '30+ MCQs',
      topics: 'MS Office, Shortcuts, Networking, Hardware & Security',
      difficulty: 'High Scoring',
      icon: Cpu,
      href: '/subjects/computer-science/mcqs',
      color: 'text-cyan-700 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200/50 dark:border-cyan-800/30',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Top Telemetry & Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-sm text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F5132] dark:bg-emerald-400" />
            </span>
            <span>PPSC 2025 Calendar:</span>
            <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">Active Testing Season</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#0F5132] dark:text-emerald-400" />
              <strong className="text-zinc-800 dark:text-zinc-200">14,800+</strong> Candidates Preparing
            </span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Official Negative Marking (-0.25)
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12 max-w-3xl">
          <AppleBadge variant="emerald" size="md" className="mb-4">
            PAKISTAN EXAM PREPARATION SUITE
          </AppleBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4 leading-[1.12]">
            Precision intelligence for{' '}
            <span className="text-[#0F5132] dark:text-emerald-400">
              PPSC & FPSC Exams.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Designed for serious aspirants. Zero distraction, official <strong className="text-zinc-900 dark:text-white font-mono">-0.25</strong> negative marking simulators, dynamic quantitative reasoning solvers, and verified solved past papers.
          </p>
        </div>

        {/* ========================================================= */}
        {/* THE BENTO GRID DASHBOARD */}
        {/* ========================================================= */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0F5132] dark:bg-emerald-400" />
              <h2 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                Exam Preparation Command Center
              </h2>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Live Solvers & Archives</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(230px,auto)]">
            {/* Box 1: Large Current Affairs Box (2x2 on desktop) */}
            <AppleCard className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6">
              <CurrentAffairsHeroBox />
            </AppleCard>

            {/* Box 2: Tall Math Lab Box (1x2 on desktop) */}
            <AppleCard className="md:col-span-1 lg:col-span-1 md:row-span-2 p-6">
              <MathLabWidget />
            </AppleCard>

            {/* Box 3: Past Papers Archive Box (1x1) */}
            <AppleCard className="md:col-span-1 lg:col-span-1 p-5">
              <PastPapersBox />
            </AppleCard>

            {/* Box 4: Exam Simulator Launch Card (1x1) */}
            <AppleCard className="md:col-span-1 lg:col-span-1 p-5">
              <SimulatorLaunchCard />
            </AppleCard>

            {/* Box 5: Wide Provincial Almanac Box (2x1) */}
            <AppleCard className="md:col-span-2 lg:col-span-2 p-6">
              <PunjabCommandBox />
            </AppleCard>

            {/* Box 6: Elite Pass Membership Card (2x1) */}
            <AppleCard className="md:col-span-1 lg:col-span-2 p-6 bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/30 dark:from-zinc-900/90 dark:via-zinc-900 dark:to-zinc-900/60">
              <ProPassHeroCard />
            </AppleCard>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE SUBJECT MATRIX */}
        {/* ========================================================= */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Core Subject Curriculum
                </h2>
                <AppleBadge variant="neutral" size="sm">
                  6 Key Modules
                </AppleBadge>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                PPSC 100-mark general ability syllabus broken down into high-yield topic banks
              </p>
            </div>

            <Link
              href="/subjects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F5132] dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
            >
              <span>View All Subject Notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link key={sub.slug} href={sub.href} className="group block">
                  <AppleCard className="p-5 h-full flex flex-col justify-between group-hover:border-[#0F5132]/30 dark:group-hover:border-emerald-500/30 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className={`p-2.5 rounded-xl border ${sub.color} group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <AppleBadge variant="neutral" size="sm">
                          {sub.difficulty}
                        </AppleBadge>
                      </div>

                      <h3 className="font-semibold text-base text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                        {sub.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                        {sub.topics}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">{sub.count}</span>
                      <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium">
                        Practice <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </AppleCard>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ARCHITECTURE & METHODOLOGY */}
        {/* ========================================================= */}
        <section className="mb-12">
          <AppleCard hoverLift={false} className="p-8 sm:p-10 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
            <div className="max-w-2xl">
              <AppleBadge variant="emerald" size="sm" className="mb-3">
                SYSTEM ARCHITECTURE
              </AppleBadge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-3 tracking-tight">
                Refinement is Speed. Precision is Mastery.
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Competitive exams in Pakistan are decided by negative marking discipline. PakScholar Pro trains your exam reflexes with exact timer penalties, instant feedback, and clean distraction-free study spaces.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/60 border border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-[#0F5132] dark:text-emerald-400 font-bold block text-base">&lt; 30ms</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium">Instant Interaction</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/60 border border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-amber-700 dark:text-amber-400 font-bold block text-base">-0.25</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium">Official Penalty Engine</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/60 border border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block text-base">PWA Ready</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium">Android App Packaging</span>
                </div>
              </div>
            </div>
          </AppleCard>
        </section>
      </div>
    </div>
  );
}
