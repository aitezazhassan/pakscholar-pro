import { Metadata } from 'next';
import { Library, BookOpen, Calendar, Download } from 'lucide-react';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Resources - Blog, Study Plans & Downloads',
    description: '50+ blog articles, 10 study plans, and downloadable resources for PPSC exam preparation. Expert tips, strategies, and success stories.',
    keywords: ['PPSC blog', 'PPSC study plan', 'PPSC preparation tips', 'PPSC downloads'],
};

export default function ResourcesHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[{ label: 'Resources' }]} />

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 mb-6">
                        <Library className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Resources Hub
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Expert articles, proven study plans, and downloadable materials to accelerate your PPSC preparation
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                        <div className="text-sm text-slate-600">Blog Articles</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">10</div>
                        <div className="text-sm text-slate-600">Study Plans</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                        <div className="text-sm text-slate-600">Downloads</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">15K+</div>
                        <div className="text-sm text-slate-600">Readers</div>
                    </div>
                </div>

                {/* Main Resource Categories */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Blog */}
                    <Link href="/resources/blog" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Blog</h3>
                            <p className="text-slate-600 mb-6">
                                Expert articles on preparation strategies, subject tips, success stories, and current affairs
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>50+ Articles</span>
                                <span>•</span>
                                <span>4 Categories</span>
                            </div>
                            <div className="mt-6 inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Read Articles</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Study Plans */}
                    <Link href="/resources/study-plans" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Calendar className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Study Plans</h3>
                            <p className="text-slate-600 mb-6">
                                Structured study plans for 1-month, 3-month, and 6-month preparation timelines
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>10 Plans</span>
                                <span>•</span>
                                <span>All Levels</span>
                            </div>
                            <div className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                                <span>View Plans</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Downloads */}
                    <Link href="/resources/downloads" className="group">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Download className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Downloads</h3>
                            <p className="text-slate-600 mb-6">
                                Past papers, syllabus PDFs, formula sheets, cheat sheets, and more downloadable resources
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>25+ Files</span>
                                <span>•</span>
                                <span>Free PDFs</span>
                            </div>
                            <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                                <span>Browse Downloads</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Featured Content */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">New Content Every Week</h2>
                    <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                        Subscribe to get the latest articles, study tips, and exam updates delivered to your inbox
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50 w-full max-w-sm"
                        />
                        <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-lg hover:shadow-2xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
