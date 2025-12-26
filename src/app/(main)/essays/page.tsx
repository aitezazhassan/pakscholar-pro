'use client';

import { FileEdit } from 'lucide-react';

export default function EssaysPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <FileEdit className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                    <h1 className="text-4xl font-bold mb-2">Essays & Writing</h1>
                    <p className="text-slate-300">Master essay writing for competitive exams</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Coming Soon!</h2>
                    <p className="text-lg text-slate-700 mb-8">
                        Sample essays, writing tips, and comprehensive guides for CSS and other exams.
                    </p>
                    <a href="/exams/css" className="px-8 py-4 bg-pink-700 text-white rounded-full font-bold hover:bg-pink-800 inline-block">
                        View CSS Guide
                    </a>
                </div>
            </section>
        </main>
    );
}
