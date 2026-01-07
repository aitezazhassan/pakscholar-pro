import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Mock Exams - PPSC Practice Tests',
    description: 'Full-length PPSC mock exams for all posts. Practice with timed tests and instant results.',
    keywords: ['PPSC mock exam', 'practice test', 'online test free', 'PPSC mock test'],
};

export default function MockExamsHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Practice', href: '/practice' },
                    { label: 'Mock Exams' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Mock Exams</h1>
                    <p className="text-lg text-slate-600">Full-length practice tests for PPSC preparation</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        'PPSC Lecturer Mock 01',
                        'PPSC Lecturer Mock 02',
                        'PPSC Tehsildar Mock',
                        'PPSC Assistant Director Mock',
                        'General Knowledge Full Test',
                        'Islamic Studies Full Test',
                        'Mathematics Full Test',
                        'English Full Test',
                        'Computer Science Full Test',
                        'Pakistan Studies Full Test'
                    ].map((exam, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{exam}</h3>
                            <div className="flex gap-4 text-sm text-slate-600 mb-4">
                                <span>⏱️ 60-180 min</span>
                                <span>📝 30-100 MCQs</span>
                            </div>
                            <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                                Start Exam
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
