import { Metadata } from 'next';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
  title: 'Pakistan Studies MCQs - PPSC Practice Questions | PakScholar Pro',
  description:
    'Practice 40+ Pakistan Studies MCQs for PPSC exams. Questions on 1973 Constitution, history, geography, and demographics.',
  keywords: ['Pakistan Studies MCQs', 'Pakistan history questions', 'Constitution test', 'PPSC Pakistan Studies'],
};

export default function PakistanStudiesMCQs() {
  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <AppleBadge variant="emerald" size="sm" className="mb-3">
            PPSC GENERAL ABILITY MODULE
          </AppleBadge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Pakistan Studies MCQs
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            High-yield questions on the 1973 Constitution, pre-partition historical events, geography, and 2023 Digital Census.
          </p>
        </div>

        <MCQPractice subject="pakistan-studies" />
      </div>
    </div>
  );
}
