import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'Downloads - Free PPSC Study Material & Past Papers',
    description: 'Download free PPSC past papers, syllabus PDFs, formula sheets, and study material.',
    keywords: ['PPSC downloads', 'past papers PDF', 'PPSC syllabus download', 'free study material'],
};

export default function DownloadsHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Resources', href: '/resources' },
                    { label: 'Downloads' }
                ]} />

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Downloads</h1>
                    <p className="text-lg text-slate-600">Free PDFs, past papers, and study material</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        'PPSC Past Papers',
                        'Syllabus PDFs',
                        'Formula Sheets',
                        'Cheat Sheets',
                        'Important Dates List',
                        'Vocabulary Lists',
                        'Current Affairs Monthly',
                        'Islamic Studies Notes',
                        'Pakistan Studies Maps'
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-slate-900 mb-2">{item}</h3>
                            <p className="text-sm text-slate-600">Coming soon</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
