import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Target, ArrowRight, Sparkles } from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'Pakistan Studies - PPSC Preparation | PakScholar Pro',
  description:
    'Complete Pakistan Studies preparation for PPSC exams: 1973 Constitution, pre-partition history, economy, and demographics.',
};

export default function PakistanStudiesHub() {
  const topics = [
    { title: '1973 Constitution & Amendments', count: '15+ MCQs', desc: 'Articles 58(2)(b), 62, 63-A, 18th & 25th Amendments, and Senate composition' },
    { title: 'Pre-Partition Historical Milestones', count: '12+ MCQs', desc: '1857 War of Independence, Aligarh Movement, 1940 Lahore Resolution, 3rd June Plan' },
    { title: 'Geography & River Systems', count: '10+ MCQs', desc: 'Indus Waters Treaty 1960, major dams, mountain passes (Khyber, Bolan), glaciers' },
    { title: 'Demographics & Provincial Gazette', count: '8+ MCQs', desc: '7th Digital Census 2023, literacy figures, assembly seats, provincial leadership' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <AppleBadge variant="emerald" size="sm">
              CORE CURRICULUM MODULE
            </AppleBadge>
            <span className="text-xs text-zinc-500">20% Exam Weightage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Pakistan Studies
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Essential preparation for the constitutional, historical, and demographic syllabus asked across all Punjab and Federal competitive exams.
          </p>
        </div>

        {/* Primary CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {/* Card 1: Practice Questions */}
          <Link href="/subjects/pakistan-studies/mcqs" className="group block">
            <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-[#0F5132]/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0F5132] dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200/50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                  Practice Pakistan Studies Questions
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Interactive practice with instant answer verification, constitutional references, and bookmarking.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">40+ Verified Questions</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-[#0F5132] flex items-center gap-1">
                  Start Practice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </AppleCard>
          </Link>

          {/* Card 2: Solve in Mock Simulator */}
          <Link href="/practice/mock-exams" className="group block">
            <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-[#0F5132]/40 transition-all bg-gradient-to-br from-emerald-50/30 via-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4 border border-amber-200/50">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                  Timed Mixed Mock Simulator
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Test your Pakistan Affairs speed alongside GK and Quantitative Ability under actual exam negative marking conditions.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-amber-700 dark:text-amber-400 font-semibold">-0.25 Penalty Mode</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-[#0F5132] flex items-center gap-1">
                  Launch Test <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </AppleCard>
          </Link>
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
                  <AppleBadge variant="neutral" size="sm">{t.count}</AppleBadge>
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
