import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, BookOpen, Target, ArrowRight, Calculator } from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { MathLabWidget } from '@/components/math/MathLabWidget';

export const metadata: Metadata = {
  title: 'Mathematics & Quantitative Ability - PPSC Preparation | PakScholar Pro',
  description:
    'Complete Mathematics & Quantitative Ability preparation for PPSC exams: ratios, age problems, work-rate, speed-distance, and percentages.',
};

export default function MathematicsHub() {
  const topics = [
    { title: 'Ratio & Proportions', count: '10+ MCQs', desc: 'Work sharing ratios, investment splits, and age proportions' },
    { title: 'Time & Work Equations', count: '8+ MCQs', desc: 'Man-days calculations, pipes and cisterns, joint work rates' },
    { title: 'Percentages & Profit-Loss', count: '8+ MCQs', desc: 'Price increase vs consumption reduction formula, simple interest' },
    { title: 'Speed, Distance & Trains', count: '6+ MCQs', desc: 'Train passing poles/bridges, relative speed, and unit conversion (km/h to m/s)' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <AppleBadge variant="amber" size="sm">
              QUANTITATIVE REASONING MODULE
            </AppleBadge>
            <span className="text-xs text-zinc-500">Decisive Cutoff Section</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Mathematics & Ability
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Quantitative questions frequently decide the merit cutoff in PPSC exams. Master the fundamental problem types with step-by-step logic and the interactive ratio solver.
          </p>
        </div>

        {/* Math Lab Interactive Tool + Practice CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left: Interactive Math Lab Tool */}
          <div className="lg:col-span-5">
            <AppleCard hoverLift={false} className="p-6 h-full">
              <MathLabWidget />
            </AppleCard>
          </div>

          {/* Right: Practice CTA Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <Link href="/subjects/mathematics/mcqs" className="group block">
              <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-amber-500/40 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4 border border-amber-200/50">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-2">
                    Practice Math Past Paper MCQs
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    Solve real quantitative questions from previous Assistant Director, Tehsildar, and Lecturer tests with detailed formula explanations.
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-amber-700 dark:text-amber-400 font-semibold">30+ Solved Questions</span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-amber-700 flex items-center gap-1">
                    Start Math Practice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </AppleCard>
            </Link>

            <Link href="/practice/mock-exams" className="group block">
              <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-[#0F5132]/40 transition-all bg-gradient-to-br from-emerald-50/30 via-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0F5132] dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200/50">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                    Timed Quantitative Speed Test
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    Practice mental calculations against the clock under official -0.25 negative marking penalties.
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">-0.25 Penalty Mode</span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-[#0F5132] flex items-center gap-1">
                    Launch Simulator <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </AppleCard>
            </Link>
          </div>
        </div>

        {/* Topics Breakdown */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
            Curriculum Breakdown & Topic Coverage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((t, idx) => (
              <AppleCard hoverLift={false} key={idx} className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">{t.title}</h3>
                  <AppleBadge variant="amber" size="sm">{t.count}</AppleBadge>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{t.desc}</p>
              </AppleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
