import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Target, ArrowRight } from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'Islamic Studies - PPSC Preparation | PakScholar Pro',
  description:
    'Complete Islamic Studies preparation for PPSC exams: Quranic sciences, Seerah, Ghazwat, Caliphate, and Hadith.',
};

export default function IslamicStudiesHub() {
  const topics = [
    { title: 'Quranic Sciences & Revelation', count: '12+ MCQs', desc: 'Makki/Madani Surahs, Bismillah rules, compilation of Quran, and Sajdah ayat' },
    { title: 'Seerah Nabawi (PBUH) & Treaties', count: '10+ MCQs', desc: 'Treaty of Hudaibiyah (6 A.H.), Meesaq-e-Madina, Conquest of Mecca, Farewell Pilgrimage' },
    { title: 'Major Ghazwat & Battles', count: '10+ MCQs', desc: 'Badr (2 A.H.), Uhud (3 A.H.), Ahzab/Khandaq (5 A.H.), and Tabuk (9 A.H.)' },
    { title: 'Hadith & Sihah-e-Sitta', count: '8+ MCQs', desc: 'Six authentic books of Hadith, Sahih Bukhari, Sahih Muslim, and prominent Sahaba' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <AppleBadge variant="blue" size="sm">
              CORE CURRICULUM MODULE
            </AppleBadge>
            <span className="text-xs text-zinc-500">Essential Scoring Section</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Islamic Studies
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            High-yield questions on Quranic facts, Ghazwat timelines, Seerah milestones, and Islamic jurisprudence frequently asked in PPSC general ability papers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <Link href="/subjects/islamic-studies/mcqs" className="group block">
            <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-blue-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4 border border-blue-200/50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mb-2">
                  Practice Islamic Studies Questions
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Interactive practice with instant answer verification, authentic references, and bookmarking.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-blue-700 dark:text-blue-400 font-semibold">40+ Verified Questions</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-blue-700 flex items-center gap-1">
                  Start Practice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
                  Timed Mixed Mock Simulator
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Test your Islamic Studies accuracy alongside GK and English under actual negative marking conditions.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">-0.25 Penalty Mode</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-[#0F5132] flex items-center gap-1">
                  Launch Test <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </AppleCard>
          </Link>
        </div>

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
