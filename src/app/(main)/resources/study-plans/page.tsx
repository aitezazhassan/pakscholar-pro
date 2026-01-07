import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Study Plans - PPSC Exam Preparation Plans',
    description: 'Structured study plans for PPSC exam preparation. 1-month, 3-month, and 6-month plans for different posts and experience levels.',
    keywords: ['PPSC study plan', 'exam preparation plan', 'PPSC schedule', '3 month study plan'],
};

export default function StudyPlansHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Resources', href: '/resources' },
                    { label: 'Study Plans' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Study Plans</h1>
                    <p className="text-lg text-slate-600">Structured preparation plans for PPSC success</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: '3-Month PPSC Lecturer', duration: '90 days', level: 'Comprehensive' },
                        { title: '6-Month Comprehensive', duration: '180 days', level: 'Detailed' },
                        { title: '1-Month Crash Course', duration: '30 days', level: 'Intensive' },
                        { title: 'Working Professional Plan', duration: 'Flexible', level: 'Part-time' },
                        { title: 'Subject-Wise: General Knowledge', duration: '4 weeks', level: 'Focused' },
                    ].map((plan, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                            <div className="flex gap-4 text-sm text-slate-600 mb-4">
                                <span>⏱️ {plan.duration}</span>
                                <span>📊 {plan.level}</span>
                            </div>
                            <p className="text-sm text-slate-600">Detailed day-by-day study schedule coming soon</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
