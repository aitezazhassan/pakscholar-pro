'use client';

import Link from 'next/link';
import { ExternalLink, BookOpen, Calendar, Users, Target, CheckCircle2 } from 'lucide-react';

export default function PPSCPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Dark Hero */}
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-2xl mb-6">
                        <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">PPSC Exam Guide</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Complete preparation guide for Punjab Public Service Commission exams
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">BPS 11-17</div>
                            <div className="text-sm text-slate-300">Job Grades</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">Monthly</div>
                            <div className="text-sm text-slate-300">New Posts</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">100-150</div>
                            <div className="text-sm text-slate-300">MCQs</div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://www.ppsc.gop.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30 transition-all"
                        >
                            <span>Visit Official PPSC Website</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Exam Structure</h2>
                        <p className="text-lg text-slate-600">Understanding the PPSC exam pattern</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-100">
                            <div className="text-4xl font-bold text-emerald-700 mb-2">Stage 1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Written Test</h3>
                            <p className="text-slate-700">MCQ-based exam covering general knowledge, subject-specific topics, and current affairs</p>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
                            <div className="text-4xl font-bold text-blue-700 mb-2">Stage 2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Physical/Skill Test</h3>
                            <p className="text-slate-700">For specific positions requiring fitness or technical skills (if applicable)</p>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100">
                            <div className="text-4xl font-bold text-purple-700 mb-2">Stage 3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Interview</h3>
                            <p className="text-slate-700">Final assessment of personality, knowledge, and suitability for the position</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Syllabus */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Syllabus Topics</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Pakistan Studies', topics: ['History (712 AD - Present)', 'Geography & Resources', 'Culture & Heritage', 'Constitution 1973'] },
                            { title: 'Islamic Studies', topics: ['Quran & Hadith', 'Islamic History', 'Fiqh Basics', 'Islamic Contributions'] },
                            { title: 'Current Affairs', topics: ['National Events', 'International Relations', 'Economy & Trade', 'Recent Developments'] },
                            { title: 'General Knowledge', topics: ['World Geography', 'Science & Technology', 'Famous Personalities', 'Organizations & Awards'] },
                            { title: 'English', topics: ['Grammar & Tenses', 'Vocabulary', 'Idioms & Phrases', 'Comprehension'] },
                            { title: 'Everyday Science', topics: ['Biology Basics', 'Physics Concepts', 'Chemistry Fundamentals', 'Health & Nutrition'] }
                        ].map((subject, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{subject.title}</h3>
                                <ul className="space-y-2">
                                    {subject.topics.map((topic, tidx) => (
                                        <li key={tidx} className="flex items-start gap-2 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Tips */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Success Strategy</h2>

                    <div className="space-y-6">
                        {[
                            { title: '3-6 Months Before', desc: 'Complete syllabus coverage, build foundation in all subjects' },
                            { title: '2-3 Months Before', desc: 'Intensive practice, solve past papers, identify weak areas' },
                            { title: '1 Month Before', desc: 'Revision + mock tests, time management practice' },
                            { title: '1 Week Before', desc: 'Final revision, stay calm, build confidence' }
                        ].map((tip, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                                    <p className="text-slate-700">{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for PPSC Success?</h2>
                    <p className="text-xl text-emerald-100 mb-8">Start your preparation with our comprehensive study materials</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pakistan-studies" className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50">
                            Browse Study Materials
                        </Link>
                        <Link href="/practice" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10">
                            Take Practice Tests
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
