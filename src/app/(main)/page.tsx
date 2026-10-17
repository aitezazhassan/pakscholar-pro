'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Cpu,
  Newspaper,
  BookOpen,
  Award,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  Flame,
  Clock,
  Sparkles,
  Users,
} from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { CyberBadge } from '@/components/ui/CyberBadge';
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
      topics: 'Geography, Capitals, Leaders',
      difficulty: 'High Yield',
      accent: 'emerald',
      icon: Award,
      href: '/subjects/general-knowledge/mcqs',
    },
    {
      title: 'Mathematics & Ability',
      slug: 'mathematics',
      count: '30+ MCQs',
      topics: 'Ratios, Ages, Work-Rate, Algebra',
      difficulty: 'Hard (Math Lab)',
      accent: 'amber',
      icon: TrendingUp,
      href: '/subjects/mathematics/mcqs',
    },
    {
      title: 'Pakistan Studies',
      slug: 'pakistan-studies',
      count: '40+ MCQs',
      topics: 'Constitution, 1947–2025, Economy',
      difficulty: 'High Yield',
      accent: 'emerald',
      icon: ShieldCheck,
      href: '/subjects/pakistan-studies/mcqs',
    },
    {
      title: 'Islamic Studies',
      slug: 'islamic-studies',
      count: '40+ MCQs',
      topics: 'Quran, Battles, Seerah, Fiqh',
      difficulty: 'Moderate',
      accent: 'cyan',
      icon: BookOpen,
      href: '/subjects/islamic-studies/mcqs',
    },
    {
      title: 'English Language',
      slug: 'english',
      count: '35+ MCQs',
      topics: 'Idioms, Prepositions, Analogies',
      difficulty: 'Frequent Cutoff',
      accent: 'purple',
      icon: BookOpen,
      href: '/subjects/english/mcqs',
    },
    {
      title: 'Computer Science',
      slug: 'computer-science',
      count: '30+ MCQs',
      topics: 'MS Office, Shortcuts, Networks',
      difficulty: 'High Scoring',
      accent: 'cyan',
      icon: Cpu,
      href: '/subjects/computer-science/mcqs',
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Background Cyber Grid & Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Telemetry / Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-lg text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-400">PPSC 2025 Calendar:</span>
            <span className="text-emerald-400 font-bold">ACTIVE BENCHMARKING</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-white">14,890</strong> Aspirants Preparing
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Daily Negative Marking Engine
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12 max-w-3xl">
          <CyberBadge variant="emerald" size="sm" pulse className="mb-4">
            PAKISTAN'S FIRST CYBER-OFFICIAL EXAM PLATFORM
          </CyberBadge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Precision Intelligence for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              PPSC & FPSC Exams
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Engineered with Linear-speed zero latency, real <strong className="text-zinc-200 font-mono">-0.25</strong> negative marking simulators, dynamic math visualization, and high-yield verified questions.
          </p>
        </div>

        {/* ========================================================= */}
        {/* THE BENTO GRID DASHBOARD */}
        {/* ========================================================= */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Command Center Bento Grid
            </h2>
            <span className="text-xs font-mono text-zinc-500">Live Telemetry HUD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(220px,auto)]">
            {/* Box 1: Large Current Affairs Box (2x2 on desktop) */}
            <SpotlightCard
              className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6"
              spotlightColor="rgba(16, 185, 129, 0.15)"
            >
              <CurrentAffairsHeroBox />
            </SpotlightCard>

            {/* Box 2: Tall Math Lab Box (1x2 on desktop) */}
            <SpotlightCard
              className="md:col-span-1 lg:col-span-1 md:row-span-2 p-6"
              spotlightColor="rgba(245, 158, 11, 0.12)"
              glowColor="rgba(245, 158, 11, 0.3)"
            >
              <MathLabWidget />
            </SpotlightCard>

            {/* Box 3: Small Past Papers Box (1x1) */}
            <SpotlightCard
              className="md:col-span-1 lg:col-span-1 p-5"
              spotlightColor="rgba(16, 185, 129, 0.18)"
            >
              <PastPapersBox />
            </SpotlightCard>

            {/* Box 4: Exam Simulator Launch Card (1x1) */}
            <SpotlightCard
              className="md:col-span-1 lg:col-span-1 p-5"
              spotlightColor="rgba(16, 185, 129, 0.18)"
            >
              <SimulatorLaunchCard />
            </SpotlightCard>

            {/* Box 5: Wide Punjab & Pakistan Command Center (2x1) */}
            <SpotlightCard
              className="md:col-span-2 lg:col-span-2 p-6"
              spotlightColor="rgba(16, 185, 129, 0.15)"
            >
              <PunjabCommandBox />
            </SpotlightCard>

            {/* Box 6: Elite Pass Hero Card (1x1 or 2x1 on wide) */}
            <SpotlightCard
              className="md:col-span-1 lg:col-span-2 p-6 border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-amber-950/20"
              spotlightColor="rgba(245, 158, 11, 0.2)"
              glowColor="rgba(245, 158, 11, 0.4)"
            >
              <ProPassHeroCard />
            </SpotlightCard>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE SUBJECT MATRIX */}
        {/* ========================================================= */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                Core Subject Matrix
                <CyberBadge variant="zinc" size="sm">
                  6 SPECIALIZED HUBS
                </CyberBadge>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                PPSC 100-Mark General Ability Breakdown with instant question banks
              </p>
            </div>

            <Link
              href="/subjects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
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
                  <SpotlightCard className="p-5 h-full flex flex-col justify-between group-hover:border-emerald-500/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-zinc-950 border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/5">
                          {sub.difficulty}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-white group-hover:text-emerald-400 transition-colors mb-1">
                        {sub.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mb-3">{sub.topics}</p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-semibold">{sub.count}</span>
                      <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                        Practice <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* THE "WHY CYBER-OFFICIAL" ARCHITECTURE BANNER */}
        {/* ========================================================= */}
        <section className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-emerald-950/30 border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl">
            <CyberBadge variant="emerald" size="sm" pulse className="mb-3">
              ZERO LATENCY ARCHITECTURE
            </CyberBadge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Speed is Luxury. Accuracy is Non-Negotiable.
            </h2>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Every PPSC exam paper is won or lost in the negative marking margin. PakScholar Pro trains your reflexes with real -0.25 penalization, Raycast-fast responsiveness, and local font fidelity.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="text-emerald-400 font-bold block text-sm">&lt; 30ms</span>
                <span className="text-zinc-500 text-[11px]">Instant Interaction</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="text-amber-400 font-bold block text-sm">-0.25</span>
                <span className="text-zinc-500 text-[11px]">Official Penalty</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <span className="text-cyan-400 font-bold block text-sm">PWA 100%</span>
                <span className="text-zinc-500 text-[11px]">Android App Ready</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
