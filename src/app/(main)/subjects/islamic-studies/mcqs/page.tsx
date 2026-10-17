import { Metadata } from 'next';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
  title: 'Islamic Studies MCQs - PPSC Practice Questions | PakScholar Pro',
  description:
    'Practice 40+ Islamic Studies MCQs for PPSC exams. Questions on Quranic sciences, Seerah, Ghazwat, and Hadith.',
};

export default function IslamicStudiesMCQs() {
  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <AppleBadge variant="blue" size="sm" className="mb-3">
            PPSC GENERAL ABILITY MODULE
          </AppleBadge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Islamic Studies MCQs
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Verified questions on Quranic facts, Ghazwat milestones, Seerah Nabawi (PBUH), and Sihah-e-Sitta.
          </p>
        </div>

        <MCQPractice subject="islamic-studies" />
      </div>
    </div>
  );
}
