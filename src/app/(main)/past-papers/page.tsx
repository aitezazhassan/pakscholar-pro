'use client';

import { FileText, Download, Calendar } from 'lucide-react';

export default function PastPapersPage() {
    const papers = [
        { exam: 'PPSC', year: 2024, subject: 'General Knowledge', questions: 100 },
        { exam: 'FPSC', year: 2024, subject: 'Pakistan Studies', questions: 100 },
        { exam: 'CSS', year: 2023, subject: 'Essay', questions: 1 },
        { exam: 'PPSC', year: 2023, subject: 'Islamic Studies', questions: 100 }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <FileText className="w-16 h-16 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Past Papers</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Practice with actual exam questions from previous years
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {papers.map((paper, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">{paper.exam}</span>
                                    <span className="text-sm text-slate-500 flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {paper.year}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{paper.subject}</h3>
                                <p className="text-slate-600 mb-4">{paper.questions} Questions</p>
                                <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-amber-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">More Papers Coming Soon</h2>
                    <p className="text-xl text-amber-100 mb-8">
                        We're constantly adding new past papers to help you prepare
                    </p>
                </div>
            </section>
        </main>
    );
}
