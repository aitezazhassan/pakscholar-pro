import { Metadata } from 'next';
import { Target, FileText, Clock } from 'lucide-react';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Computer Science - PPSC Preparation | PakScholar Pro',
    description: 'Complete Computer Science preparation for PPSC exams. 30+ MCQs covering fundamentals, MS Office, internet basics, and programming.',
    keywords: ['Computer Science PPSC', 'CS MCQs', 'MS Office questions', 'Programming PPSC'],
};

export default function ComputerScienceHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Computer Science' }
                ]} />

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">Computer Science</h1>
                            <p className="text-slate-600">Fundamentals, MS Office, and programming basics</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-cyan-600 mb-1">30+</div>
                        <div className="text-sm text-slate-600">MCQs</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">5</div>
                        <div className="text-sm text-slate-600">Topics</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                        <div className="text-sm text-slate-600">Tutorials</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">8+</div>
                        <div className="text-sm text-slate-600">Past Papers</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/subjects/computer-science/mcqs" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Target className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Practice MCQs</h3>
                            <p className="text-slate-600 mb-4">30+ questions on CS fundamentals and MS Office</p>
                            <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Start Practice</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/computer-science/notes" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Study Notes</h3>
                            <p className="text-slate-600 mb-4">Comprehensive notes on all CS topics</p>
                            <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Read Notes</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/computer-science/tutorials" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Tutorials</h3>
                            <p className="text-slate-600 mb-4">15+ step-by-step tutorials and guides</p>
                            <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                                <span>View Tutorials</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/computer-science/past-papers" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Past Papers</h3>
                            <p className="text-slate-600 mb-4">8+ previous PPSC Computer Science papers</p>
                            <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Download Papers</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
