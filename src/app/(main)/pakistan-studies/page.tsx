'use client';

import { useState } from 'react';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

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
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="🇵🇰"
                title="Pakistan Studies"
                description="Complete guide to Pakistan's history, geography, culture, and political development from 712 AD to present day"
                theme="emerald"
                stats={[
                    { value: '150+', label: 'Topics Covered' },
                    { value: '500+', label: 'Practice Questions' },
                    { value: '50+', label: 'Past Papers' }
                ]}
            />

            {/* Topics Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Explore Topics"
                        subtitle="Click on any topic to dive deep into the subject matter"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="emerald"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Papers Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Past Papers</h2>
                            <p className="text-slate-600 font-light text-lg">Practice with actual exam questions from previous years</p>
                        </div>
                        <button className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-emerald-500 hover:text-emerald-700 transition-all hover:shadow-lg active:scale-95">
                            View All Papers
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastPapers.map((paper, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                                        <FileText className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {paper.year}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1 text-lg">{paper.exam} Paper</h3>
                                <p className="text-sm text-slate-500 mb-6 font-medium">{paper.questions} Questions</p>
                                <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practice Preview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <SectionHeader
                            title="Quick Practice"
                            subtitle="Test your knowledge with these sample questions"
                        />

                        <div className="space-y-6 mb-12">
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
                                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-slate-900 mb-6 text-lg">{idx + 1}. {item.q}</h3>
                                    <div className="space-y-3">
                                        {item.options.map((opt, optIdx) => (
                                            <button
                                                key={optIdx}
                                                className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all duration-200 flex items-center group/opt"
                                            >
                                                <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-bold mr-4 group-hover/opt:bg-emerald-200 group-hover/opt:text-emerald-800 transition-colors">
                                                    {String.fromCharCode(65 + optIdx)}
                                                </span>
                                                <span className="font-medium text-slate-700 group-hover/opt:text-slate-900">{opt}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all hover:shadow-xl hover:shadow-emerald-600/20 inline-flex items-center gap-2 active:scale-95 duration-200">
                                Take Full Practice Test
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Master Pakistan Studies Today"
                subtitle="Join thousands of students preparing for PPSC, FPSC, and CSS exams with our comprehensive resources."
                primaryBtnText="Start Learning Free"
                secondaryBtnText="Download Study Guide"
                theme="emerald"
            />
        </main>
    );
}
