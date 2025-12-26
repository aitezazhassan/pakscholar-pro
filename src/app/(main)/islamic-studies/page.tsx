'use client';

import { useState } from 'react';
import { BookOpen, FileText, ChevronRight, Download } from 'lucide-react';

export default function IslamicStudiesPage() {
    const topics = [
        { id: 'quran', icon: '📖', title: 'Holy Quran', desc: 'Surahs, Verses & Themes', count: 38 },
        { id: 'hadith', icon: '📜', title: 'Hadith', desc: 'Sahih & Authentic Narrations', count: 42 },
        { id: 'history', icon: '🕌', title: 'Islamic History', desc: 'From Prophet to Modern Era', count: 35 },
        { id: 'fiqh', icon: '⚖️', title: 'Fiqh', desc: 'Islamic Jurisprudence', count: 28 },
        { id: 'caliphate', icon: '👑', title: 'Caliphate', desc: 'Khilafat Rashida & Beyond', count: 24 },
        { id: 'contributions', icon: '🌟', title: 'Contributions', desc: 'Science, Art & Philosophy', count: 30 }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Dark Hero */}
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-8xl mb-6">☪️</div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">Islamic Studies</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Comprehensive study of Quran, Hadith, Islamic History, and contributions to civilization
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">197+</div>
                            <div className="text-sm text-slate-300">Topics Covered</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">600+</div>
                            <div className="text-sm text-slate-300">Questions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">40+</div>
                            <div className="text-sm text-slate-300">Past Papers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Explore Topics</h2>
                        <p className="text-lg text-slate-600">Comprehensive coverage of all Islamic Studies topics</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic) => (
                            <div
                                key={topic.id}
                                className="group text-left p-8 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{topic.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                                <p className="text-sm text-slate-600 mb-4">{topic.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-emerald-700">{topic.count} lessons</span>
                                    <ChevronRight className="w-5 h-5 text-slate-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Master Islamic Studies</h2>
                    <p className="text-xl text-emerald-100 mb-8">Excel in PPSC, FPSC, and CSS Islamic Studies papers</p>
                    <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all">
                        Start Learning Free
                    </button>
                </div>
            </section>
        </main>
    );
}
