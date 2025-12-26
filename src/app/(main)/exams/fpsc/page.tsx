'use client';

import Link from 'next/link';
import { ExternalLink, BookOpen, Target, CheckCircle2 } from 'lucide-react';

export default function FPSCPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6">
                        <Target className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">FPSC Exam Guide</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Federal Public Service Commission - Your pathway to federal government jobs
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">BPS 14-20</div>
                            <div className="text-sm text-slate-300">Job Grades</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">Federal</div>
                            <div className="text-sm text-slate-300">Ministries</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">Nationwide</div>
                            <div className="text-sm text-slate-300">Opportunities</div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30">
                            <span>Visit FPSC Website</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Exam Pattern</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Written Test</h3>
                            <p className="text-slate-700">Comprehensive MCQs on general knowledge and subject-specific topics</p>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Psychological Test</h3>
                            <p className="text-slate-700">For certain positions (CSS, Officers, etc.)</p>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Interview</h3>
                            <p className="text-slate-700">Final assessment by expert panel</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Prepare for FPSC</h2>
                    <p className="text-xl text-blue-100 mb-8">Join federal service with comprehensive preparation</p>
                    <Link href="/pakistan-studies" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 inline-block">
                        Start Preparation
                    </Link>
                </div>
            </section>
        </main>
    );
}
