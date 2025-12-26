'use client';

import { BookOpen, FileText, Download, ExternalLink, Search, Filter } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <BookOpen className="w-16 h-16 mx-auto mb-6 text-teal-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Resources Hub</h1>
                    <p className="text-xl text-slate-300">All study materials in one place</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-teal-50 rounded-2xl p-8 border-2 border-teal-100">
                            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Study Guides</h3>
                            <p className="text-slate-700 mb-4">Comprehensive notes for all subjects</p>
                            <a href="/pakistan-studies" className="text-teal-700 font-semibold hover:text-teal-800">
                                Browse Subjects →
                            </a>
                        </div>

                        <div className="bg-teal-50 rounded-2xl p-8 border-2 border-teal-100">
                            <FileText className="w-12 h-12 text-teal-600 mb-4" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Past Papers</h3>
                            <p className="text-slate-700 mb-4">Previous exam questions and answers</p>
                            <a href="/past-papers" className="text-teal-700 font-semibold hover:text-teal-800">
                                View Papers →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-teal-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Everything You Need</h2>
                    <p className="text-xl text-teal-100 mb-8">Comprehensive resources for exam success</p>
                </div>
            </section>
        </main>
    );
}
