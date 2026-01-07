import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Mathematics MCQs - PPSC Practice Questions',
    description: 'Practice 30+ Mathematics MCQs for PPSC exams. Questions on algebra, arithmetic, geometry, ratios, and percentages.',
    keywords: ['Math MCQs', 'Mathematics questions', 'PPSC math test', 'Algebra MCQs'],
};

export default function MathematicsMCQs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Mathematics', href: '/subjects/mathematics' },
                    { label: 'MCQs' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Mathematics MCQs</h1>
                    <p className="text-lg text-slate-600">Practice 30+ challenging mathematics questions</p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
                    <p className="text-slate-600 mb-4">MCQ practice interface coming soon</p>
                    <p className="text-sm text-slate-500">This page will feature interactive MCQ questions with instant feedback</p>
                </div>
            </div>
        </div>
    );
}
