import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
    title: 'English MCQs - PPSC Practice Questions',
    description: 'Practice 35+ English MCQs for PPSC exams. Questions on grammar, vocabulary, idioms, and comprehension.',
    keywords: ['English MCQs', 'Grammar questions', 'Vocabulary test', 'PPSC English'],
};

export default function EnglishMCQs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'English', href: '/subjects/english' },
                    { label: 'MCQs' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">English MCQs</h1>
                    <p className="text-lg text-slate-600">Practice 35+ questions on grammar and vocabulary</p>
                </div>

                <MCQPractice subject="english" />
            </div>
        </div>
    );
}
