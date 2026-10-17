import { Metadata } from 'next';
import Link from 'next/link';
import { Award, BookOpen, FileText, ArrowRight, Target, Sparkles } from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'General Knowledge - PPSC Preparation | PakScholar Pro',
  description:
    'Complete General Knowledge preparation for PPSC exams: world geography, straits, capitals, leaders, and international treaties.',
};

export default function GeneralKnowledgeHub() {
  const topics = [
    { title: 'World Geography & Straits', count: '15+ MCQs', desc: 'Bering Strait, Gibraltar, Malacca, Suez & Panama Canals' },
    { title: 'World Capitals & Currencies', count: '12+ MCQs', desc: 'Central Asian capitals, European Union, and South Asian currencies' },
    { title: 'International Organizations', count: '10+ MCQs', desc: 'UNSC composition, ICJ, IMF, World Bank, and SCO treaties' },
    { title: 'Physical Geography & Deserts', count: '8+ MCQs', desc: 'Sahara, Gobi, Atacama, major global rivers and deepest lakes' },
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
            <span className="text-xs text-zinc-500">20% to 30% Exam Weightage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            General Knowledge
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Master the most expansive section of the PPSC General Ability paper. Includes verified questions on physical geography, geopolitical treaties, and international organizations.
          </p>
        </div>

        {/* Primary CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {/* Card 1: Practice Questions */}
          <Link href="/subjects/general-knowledge/mcqs" className="group block">
            <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-[#0F5132]/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0F5132] dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200/50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                  Practice GK Question Bank
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Interactive practice with instant answer keys, official PPSC past paper citations, and bookmarking.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">50+ Verified Questions</span>
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
                  Timed GK Speed Sprint
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Test your GK reflexes under the official -0.25 negative marking rules in the timed simulator room.
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
