'use client';

import Link from 'next/link';
import { ExternalLink, Award, BookOpen } from 'lucide-react';

export default function CSSPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-2xl mb-6">
                        <Award className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">CSS Exam Guide</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Central Superior Services - Pakistan's most prestigious civil service exam
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">12</div>
                            <div className="text-sm text-slate-300">Papers</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">1200</div>
                            <div className="text-sm text-slate-300">Total Marks</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">BPS-17</div>
                            <div className="text-sm text-slate-300">Entry Grade</div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30">
                            <span>Visit FPSC for CSS</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Exam Structure</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Compulsory Papers (600 marks)</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Essay</li>
                                <li>• English (Précis & Composition)</li>
                                <li>• General Knowledge</li>
                                <li>• Current Affairs</li>
                                <li>• Pakistan Affairs</li>
                                <li>• Islamic Studies/Ethics</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Optional Papers (600 marks)</h3>
                            <p className="text-slate-700 mb-3">Choose 6 subjects from:</p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Political Science, Economics</li>
                                <li>• International Relations</li>
                                <li>• History, Literature</li>
                                <li>• Law, Psychology, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Aspire for CSS Excellence</h2>
                    <p className="text-xl text-purple-100 mb-8">Pakistan's premier administrative service awaits you</p>
                    <Link href="/pakistan-studies" className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 inline-block">
                        Begin CSS Preparation
                    </Link>
                </div>
            </section>
        </main>
    );
}
