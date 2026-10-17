import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { MCQPractice } from '@/components/quiz/MCQPractice';

export const metadata: Metadata = {
    title: 'Computer Science MCQs - PPSC Practice Questions',
    description: 'Practice 30+ Computer Science MCQs for PPSC exams. Questions on fundamentals, MS Office, internet basics, and programming.',
    keywords: ['CS MCQs', 'Computer Science questions', 'MS Office test', 'PPSC CS'],
};

export default function ComputerScienceMCQs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Computer Science', href: '/subjects/computer-science' },
                    { label: 'MCQs' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Computer Science MCQs</h1>
                    <p className="text-lg text-slate-600">Practice 30+ questions on CS fundamentals</p>
                </div>

                <MCQPractice subject="computer-science" />
            </div>
        </div>
    );
}
