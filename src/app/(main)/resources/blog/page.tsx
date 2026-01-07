import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Blog - PPSC Exam Preparation Tips & Strategies',
    description: 'Expert articles on PPSC exam preparation, study tips, success stories, and current affairs updates.',
    keywords: ['PPSC blog', 'exam preparation tips', 'PPSC success stories', 'study strategies'],
};

export default function BlogHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Resources', href: '/resources' },
                    { label: 'Blog' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog & Articles</h1>
                    <p className="text-lg text-slate-600">Expert tips, strategies, and success stories</p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
                    <p className="text-slate-600 mb-4">50+ blog articles coming soon</p>
                    <p className="text-sm text-slate-500">Categories: Preparation Strategies, Subject Tips, Success Stories, Current Affairs</p>
                </div>
            </div>
        </div>
    );
}
