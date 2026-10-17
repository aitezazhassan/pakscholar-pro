import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Target, ArrowRight } from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'English Language - PPSC Preparation | PakScholar Pro',
  description:
    'Complete English Language preparation for PPSC exams: prepositions, vocabulary synonyms/antonyms, idioms, and sentence correction.',
};

export default function EnglishHub() {
  const topics = [
    { title: 'Appropriate Prepositions', count: '12+ MCQs', desc: 'Prepositions after adjectives (senior to, prior to, abstain from, fond of)' },
    { title: 'Idioms & Phrasal Verbs', count: '10+ MCQs', desc: 'Frequently tested idioms in PPSC past papers with exact definitions' },
    { title: 'Synonyms & Antonyms', count: '8+ MCQs', desc: 'High-frequency GRE/CSS vocabulary words with contextual options' },
    { title: 'Sentence Correction & Grammar', count: '8+ MCQs', desc: 'Subject-verb agreement, neither/nor rules, conditional sentences, active/passive' },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <AppleBadge variant="neutral" size="sm">
              CORE CURRICULUM MODULE
            </AppleBadge>
            <span className="text-xs text-zinc-500">Cutoff Decider Section</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            English Language
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            English questions frequently determine merit in competitive exams. Master the high-yield rules of prepositions, idioms, and grammar conventions tested by the Commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <Link href="/subjects/english/mcqs" className="group block">
            <AppleCard className="p-7 h-full flex flex-col justify-between group-hover:border-purple-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 flex items-center justify-center mb-4 border border-purple-200/50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors mb-2">
                  Practice English Questions
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Interactive practice with instant rule explanations, past paper citations, and bookmarking.
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-purple-700 dark:text-purple-400 font-semibold">35+ Verified Questions</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-purple-700 flex items-center gap-1">
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
                  Test your English grammatical accuracy under pressure with official -0.25 negative marking penalization.
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
