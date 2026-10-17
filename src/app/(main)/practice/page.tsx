import { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Timer,
  Trophy,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  TrendingUp,
  ShieldCheck,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'Practice Hub - PPSC & FPSC Mock Exams | PakScholar Pro',
  description:
    'Practice with official negative marking simulators, full-length PPSC tests, and high-yield subject question sets.',
};

export default function PracticeHub() {
  const modes = [
    {
      title: 'Full PPSC Exam Simulator',
      description: '100 mixed MCQs simulating actual PPSC exam conditions with official -0.25 negative marking penalty.',
      duration: '90 Minutes',
      questions: '100 MCQs',
      badge: 'Official Simulator',
      href: '/practice/mock-exams',
      highlight: true,
    },
    {
      title: '10-Question Daily Sprint',
      description: 'High-intensity daily revision covering top-yield questions from recent competitive exams.',
      duration: '15 Minutes',
      questions: '10 MCQs',
      badge: 'Daily Reflex',
      href: '/practice/mock-exams',
      highlight: false,
    },
    {
      title: 'General Knowledge Drill',
      description: 'World geography, capitals, mountain ranges, straits, and international organizations.',
      duration: 'Untimed / Timed',
      questions: '50+ MCQs',
      badge: 'General Knowledge',
      href: '/subjects/general-knowledge/mcqs',
      highlight: false,
    },
    {
      title: 'Quantitative Math Lab',
      description: 'Step-by-step problem solver for ratios, age problems, work-rate, and percentages.',
      duration: 'Self-Paced',
      questions: '30+ MCQs',
      badge: 'Mathematics',
      href: '/subjects/mathematics/mcqs',
      highlight: false,
    },
    {
      title: 'Pakistan Studies Deep Dive',
      description: '1973 Constitution articles, historical milestones, economy, and 2023 Digital Census.',
      duration: 'Untimed / Timed',
      questions: '40+ MCQs',
      badge: 'Pakistan Studies',
      href: '/subjects/pakistan-studies/mcqs',
      highlight: false,
    },
    {
      title: 'English Language Mastery',
      description: 'Prepositions, vocabulary synonyms/antonyms, idioms, and sentence correction rules.',
      duration: 'Untimed / Timed',
      questions: '35+ MCQs',
      badge: 'English',
      href: '/subjects/english/mcqs',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <AppleBadge variant="emerald" size="md" className="mb-4">
            PRECISION PRACTICE SUITE
          </AppleBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Practice & Mock Test Hub
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Choose between full-length 100-mark examination simulations with authentic negative marking calculations, or target individual subject weaknesses.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {modes.map((mode, idx) => (
            <Link key={idx} href={mode.href} className="group block">
              <AppleCard
                className={`p-6 h-full flex flex-col justify-between transition-all ${
                  mode.highlight
                    ? 'border-[#0F5132]/40 bg-gradient-to-br from-emerald-50/40 via-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-md'
                    : 'group-hover:border-[#0F5132]/30 dark:group-hover:border-emerald-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <AppleBadge variant={mode.highlight ? 'emerald' : 'neutral'} size="sm">
                      {mode.badge}
                    </AppleBadge>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      {mode.duration}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">{mode.questions}</span>
                  <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium">
                    Start Test <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </AppleCard>
            </Link>
          ))}
        </div>

        {/* Official Rules Card */}
        <AppleCard hoverLift={false} className="p-8 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="max-w-2xl">
            <AppleBadge variant="amber" size="sm" className="mb-3">
              OFFICIAL COMMISSION CRITERIA
            </AppleBadge>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3">
              How PPSC Scoring Rules Work
            </h2>
            <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F5132] dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>+1.00 Mark:</strong> Awarded for every correct option selected.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>-0.25 Mark:</strong> Deducted for every incorrect option. Four incorrect answers wipe out one full correct mark.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  <strong>0.00 Marks:</strong> Questions left unattempted incur no penalty. Strategic skipping is key to securing top merit.
                </span>
              </p>
            </div>
          </div>
        </AppleCard>
      </div>
    </div>
  );
}
