import { Metadata } from 'next';
import { AppleBadge } from '@/components/ui/AppleBadge';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
  title: 'Mathematics MCQs - PPSC Practice Questions | PakScholar Pro',
  description:
    'Practice 30+ Quantitative Ability and Mathematics MCQs for PPSC exams. Questions on ratios, ages, work-rate, speed-distance, and percentages.',
};

export default function MathematicsMCQs() {
  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <AppleBadge variant="amber" size="sm" className="mb-3">
            QUANTITATIVE ABILITY MODULE
          </AppleBadge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Mathematics & Ability MCQs
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Step-by-step solved questions on ratios, age problems, work-rate equations, and percentages.
          </p>
        </div>

        <MCQPractice subject="mathematics" />
      </div>
    </div>
  );
}
