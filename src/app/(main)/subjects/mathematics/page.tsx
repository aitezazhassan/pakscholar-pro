import { Metadata } from 'next';
import { TrendingUp, FileText, Clock } from 'lucide-react';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mathematics - PPSC Preparation | PakScholar Pro',
    description: 'Complete Mathematics preparation for PPSC exams. 30+ MCQs covering algebra, arithmetic, geometry, ratios, and percentages.',
    keywords: ['Mathematics PPSC', 'Math MCQs', 'Algebra questions', 'Arithmetic PPSC'],
};

export default function MathematicsHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Subjects', href: '/subjects' },
                    { label: 'Mathematics' }
                ]} />

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">Mathematics</h1>
                            <p className="text-slate-600">Algebra, arithmetic, geometry, and more</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">30+</div>
                        <div className="text-sm text-slate-600">MCQs</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">5</div>
                        <div className="text-sm text-slate-600">Topics</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                        <div className="text-sm text-slate-600">Formulas</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">10+</div>
                        <div className="text-sm text-slate-600">Past Papers</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/subjects/mathematics/mcqs" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Practice MCQs</h3>
                            <p className="text-slate-600 mb-4">30+ challenging mathematics questions</p>
                            <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Start Practice</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/mathematics/formulas" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Formula Sheet</h3>
                            <p className="text-slate-600 mb-4">All essential formulas in one place</p>
                            <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                                <span>View Formulas</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/mathematics/notes" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Study Notes</h3>
                            <p className="text-slate-600 mb-4">Detailed notes with solved examples</p>
                            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Read Notes</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <Link href="/subjects/mathematics/past-papers" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all h-full">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Past Papers</h3>
                            <p className="text-slate-600 mb-4">10+ previous PPSC mathematics papers</p>
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
