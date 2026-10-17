import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Cpu,
  ArrowRight,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { AppleCard } from '@/components/ui/AppleCard';
import { AppleBadge } from '@/components/ui/AppleBadge';

export const metadata: Metadata = {
  title: 'Subjects - PPSC & FPSC Core Modules | PakScholar Pro',
  description:
    'Comprehensive subject modules for PPSC competitive exams: General Knowledge, Pakistan Studies, Mathematics, Islamic Studies, English, and Computer Science.',
};

export default function SubjectsHub() {
  const subjects = [
    {
      title: 'General Knowledge',
      slug: 'general-knowledge',
      count: '50+ Verified Questions',
      topics: 'World Geography, Straits, Capitals, Leaders & Treaties',
      difficulty: 'High Yield',
      icon: Award,
      href: '/subjects/general-knowledge/mcqs',
      color: 'text-[#0F5132] bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/30',
    },
    {
      title: 'Mathematics & Ability',
      slug: 'mathematics',
      count: '30+ Solved Questions',
      topics: 'Ratios, Age Problems, Speed-Distance, Work-Rate, Percentages',
      difficulty: 'Core Decider',
      icon: TrendingUp,
      href: '/subjects/mathematics/mcqs',
      color: 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200/50 dark:border-amber-800/30',
    },
    {
      title: 'Pakistan Studies',
      slug: 'pakistan-studies',
      count: '40+ Verified Questions',
      topics: '1973 Constitution, Pre-Partition History, Economy, Demographics',
      difficulty: 'High Yield',
      icon: ShieldCheck,
      href: '/subjects/pakistan-studies/mcqs',
      color: 'text-[#0F5132] bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/30',
    },
    {
      title: 'Islamic Studies',
      slug: 'islamic-studies',
      count: '40+ Verified Questions',
      topics: 'Quranic Sciences, Seerah, Ghazwat, Caliphate & Fiqh',
      difficulty: 'Essential',
      icon: BookOpen,
      href: '/subjects/islamic-studies/mcqs',
      color: 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 border-blue-200/50 dark:border-blue-800/30',
    },
    {
      title: 'English Language',
      slug: 'english',
      count: '35+ Verified Questions',
      topics: 'Prepositions, Synonyms, Antonyms, Idioms, Sentence Correction',
      difficulty: 'Cutoff Decider',
      icon: BookOpen,
      href: '/subjects/english/mcqs',
      color: 'text-purple-700 bg-purple-50 dark:bg-purple-950/40 border-purple-200/50 dark:border-purple-800/30',
    },
    {
      title: 'Computer Science',
      slug: 'computer-science',
      count: '30+ Verified Questions',
      topics: 'MS Office, Shortcuts, Networking Protocols, Hardware & Security',
      difficulty: 'High Scoring',
      icon: Cpu,
      href: '/subjects/computer-science/mcqs',
      color: 'text-cyan-700 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200/50 dark:border-cyan-800/30',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <AppleBadge variant="emerald" size="md" className="mb-4">
            PPSC 100-MARK GENERAL ABILITY SYLLABUS
          </AppleBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Core Examination Modules
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Every PPSC one-paper test distributes questions across these six fundamental areas. Practice with verified past paper questions, official citations, and step-by-step solutions.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 text-center">
          <AppleCard hoverLift={false} className="p-4">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">Modules</span>
            <span className="text-2xl font-bold text-zinc-900 dark:text-white mt-1 block">6 Core Hubs</span>
          </AppleCard>
          <AppleCard hoverLift={false} className="p-4">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">Questions Bank</span>
            <span className="text-2xl font-bold text-[#0F5132] dark:text-emerald-400 mt-1 block">10,000+ MCQs</span>
          </AppleCard>
          <AppleCard hoverLift={false} className="p-4">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">Penalization</span>
            <span className="text-2xl font-bold text-amber-700 dark:text-amber-400 mt-1 block">-0.25 Marking</span>
          </AppleCard>
          <AppleCard hoverLift={false} className="p-4">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 block">Status</span>
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-1 block">2025 Syllabus</span>
          </AppleCard>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {subjects.map((sub) => {
            const Icon = sub.icon;
            return (
              <Link key={sub.slug} href={sub.href} className="group block">
                <AppleCard className="p-6 h-full flex flex-col justify-between group-hover:border-[#0F5132]/30 dark:group-hover:border-emerald-500/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl border ${sub.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <AppleBadge variant="neutral" size="sm">
                        {sub.difficulty}
                      </AppleBadge>
                    </div>

                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors mb-2">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                      {sub.topics}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[#0F5132] dark:text-emerald-400 font-semibold">{sub.count}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#0F5132] dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium">
                      Start Practice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </AppleCard>
              </Link>
            );
          })}
        </div>

        {/* Simulator CTA Banner */}
        <AppleCard hoverLift={false} className="p-8 sm:p-10 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <AppleBadge variant="emerald" size="sm" className="mb-2">
              EXAM HALL SIMULATION
            </AppleBadge>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Ready for the Full Mixed Test?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experience the actual 100-mark paper containing balanced questions from all subjects with official -0.25 negative marking.
            </p>
          </div>

          <Link
            href="/practice/mock-exams"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F5132] hover:bg-[#0c4128] text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Target className="w-4 h-4" />
            <span>Launch Exam Simulator</span>
          </Link>
        </AppleCard>
      </div>
    </div>
  );
}
