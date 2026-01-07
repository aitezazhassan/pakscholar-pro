import { Metadata } from 'next';
import { Award, FileText, Clock } from 'lucide-react';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pakistan Studies - PPSC Preparation | PakScholar Pro',
    description: 'Complete Pakistan Studies preparation for PPSC exams. 40+ MCQs covering history, geography, constitution, economy, and current affairs.',
    keywords: ['Pakistan Studies PPSC', 'Pakistan history', 'Constitution MCQs', 'Current affairs Pakistan'],
};

export default function PakistanStudiesHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Pakistan Studies' }
                ]} />

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">Pakistan Studies</h1>
                            <p className="text-slate-600">History, geography, constitution, and current affairs</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-green-600 mb-1">40+</div>
                        <div className="text-sm text-slate-600">MCQs</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">5</div>
                        <div className="text-sm text-slate-600">Topics</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                        <div className="text-sm text-slate-600">Essays</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                        <div className="text-sm text-slate-600">Past Papers</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/subjects/pakistan-studies/mcqs" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-green-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Practice MCQs</h3>
                            <p className="text-slate-600 mb-4">40+ questions on Pakistan's history and geography</p>
                            <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Start Practice</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/pakistan-studies/notes" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Study Notes</h3>
                            <p className="text-slate-600 mb-4">Comprehensive notes on 5 key topics</p>
                            <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Read Notes</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/pakistan-studies/essays" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sample Essays</h3>
                            <p className="text-slate-600 mb-4">10+ essays on Pakistan Studies topics</p>
                            <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                                <span>View Essays</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/pakistan-studies/past-papers" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Past Papers</h3>
                            <p className="text-slate-600 mb-4">15+ previous PPSC Pakistan Studies papers</p>
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
