import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
    title: 'General Knowledge MCQs - PPSC Practice Questions',
    description: 'Practice 50+ General Knowledge MCQs for PPSC exams. Questions on world geography, famous personalities, important dates, inventions, and international organizations.',
    keywords: ['GK MCQs', 'General Knowledge questions', 'PPSC GK test', 'World Geography MCQs'],
};

export default function GeneralKnowledgeMCQs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'General Knowledge', href: '/subjects/general-knowledge' },
                    { label: 'MCQs' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">General Knowledge MCQs</h1>
                    <p className="text-lg text-slate-600">Practice questions to test your knowledge</p>
                </div>

                <MCQPractice subject="general-knowledge" />
            </div>
        </div>
    );
}
