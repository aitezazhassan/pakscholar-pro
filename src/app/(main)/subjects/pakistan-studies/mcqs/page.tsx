import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
    title: 'Pakistan Studies MCQs - PPSC Practice Questions',
    description: 'Practice 40+ Pakistan Studies MCQs for PPSC exams. Questions on history, geography, constitution, economy, and current affairs.',
    keywords: ['Pakistan Studies MCQs', 'Pakistan history questions', 'Constitution test', 'PPSC Pakistan Studies'],
};

export default function PakistanStudiesMCQs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Pakistan Studies', href: '/subjects/pakistan-studies' },
                    { label: 'MCQs' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Pakistan Studies MCQs</h1>
                    <p className="text-lg text-slate-600">Practice 40+ questions on Pakistan's history and geography</p>
                </div>

                <MCQPractice subject="pakistan-studies" />
            </div>
        </div>
    );
}
