'use client';

import { useState } from 'react';
import { BookOpen, FileText, Video, Download, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

export default function PakistanStudiesPage() {
    const [activeTab, setActiveTab] = useState('history');

    const topics = [
        { id: 'history', icon: '📜', title: 'History', desc: 'From 712 AD to Modern Pakistan', count: 45 },
        { id: 'geography', icon: '🗺️', title: 'Geography', desc: 'Physical & Human Geography', count: 32 },
        { id: 'culture', icon: '🎭', title: 'Culture', desc: 'Arts, Literature & Heritage', count: 28 },
        { id: 'economy', icon: '💰', title: 'Economy', desc: 'Industry, Agriculture & Trade', count: 24 },
        { id: 'constitution', icon: '⚖️', title: 'Constitution', desc: '1973 Constitution & Amendments', count: 19 },
        { id: 'foreign', icon: '🌍', title: 'Foreign Policy', desc: 'Relations & Diplomacy', count: 22 }
    ];

    const pastPapers = [
        { year: 2024, exam: 'PPSC', questions: 100, link: '#' },
        { year: 2023, exam: 'FPSC', questions: 100, link: '#' },
        { year: 2023, exam: 'PPSC', questions: 100, link: '#' },
        { year: 2022, exam: 'CSS', questions: 100, link: '#' }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Dark Hero Section */}
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-8xl mb-6">🇵🇰</div>
                        <h1 className="text-5xl font-bold text-white mb-4 font-serif">
                            Pakistan Studies
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Complete guide to Pakistan's history, geography, culture, and political development from 712 AD to present day
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-emerald-400">150+</div>
                                <div className="text-sm text-slate-300">Topics Covered</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-emerald-400">500+</div>
                                <div className="text-sm text-slate-300">Practice Questions</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-emerald-400">50+</div>
                                <div className="text-sm text-slate-300">Past Papers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Explore Topics</h2>
                        <p className="text-lg text-slate-600">Click on any topic to dive deep into the subject matter</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                className={`group text-left p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${activeTab === topic.id
                                        ? 'border-emerald-500 bg-emerald-50 shadow-xl'
                                        : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg'
                                    }`}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {topic.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${activeTab === topic.id ? 'text-emerald-900' : 'text-slate-900'
                                    }`}>
                                    {topic.title}
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">{topic.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-emerald-700">
                                        {topic.count} lessons
                                    </span>
                                    <ChevronRight className={`w-5 h-5 transition-all ${activeTab === topic.id ? 'text-emerald-700' : 'text-slate-400'
                                        }`} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Papers Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Past Papers</h2>
                            <p className="text-slate-600">Practice with actual exam questions from previous years</p>
                        </div>
                        <button className="px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition-all hidden md:block">
                            View All Papers
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastPapers.map((paper, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                                        <FileText className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                                        {paper.year}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{paper.exam} Paper</h3>
                                <p className="text-sm text-slate-500 mb-4">{paper.questions} Questions</p>
                                <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practice Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">Quick Practice</h2>
                            <p className="text-lg text-slate-600">Test your knowledge with these sample questions</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: 'When did Pakistan become a nuclear power?',
                                    options: ['1994', '1996', '1998', '2000'],
                                    correct: 2
                                },
                                {
                                    q: 'Which is the highest peak in Pakistan?',
                                    options: ['Nanga Parbat', 'K2', 'Rakaposhi', 'Gasherbrum'],
                                    correct: 1
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6">
                                    <h3 className="font-semibold text-slate-900 mb-4">{idx + 1}. {item.q}</h3>
                                    <div className="space-y-2">
                                        {item.options.map((opt, optIdx) => (
                                            <button
                                                key={optIdx}
                                                className="w-full text-left p-3 rounded-lg border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                                            >
                                                <span className="font-medium text-slate-700">{String.fromCharCode(65 + optIdx)}.</span> {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="px-8 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition-all hover:shadow-lg inline-flex items-center gap-2">
                                Take Full Practice Test
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Master Pakistan Studies Today</h2>
                    <p className="text-xl text-emerald-100 mb-8">
                        Join thousands of students preparing for PPSC, FPSC, and CSS exams
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all">
                            Start Learning Free
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                            Download Study Guide
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
