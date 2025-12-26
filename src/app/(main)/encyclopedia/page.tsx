'use client';

import { Book } from 'lucide-react';

export default function EncyclopediaPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Book className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                    <h1 className="text-4xl font-bold mb-2">Encyclopedia</h1>
                    <p className="text-slate-300">Knowledge base coming soon</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Coming Soon!</h2>
                    <p className="text-lg text-slate-700 mb-8">
                        We're building a comprehensive encyclopedia of all topics covered in competitive exams.
                    </p>
                    <a href="/pakistan-studies" className="px-8 py-4 bg-indigo-700 text-white rounded-full font-bold hover:bg-indigo-800 inline-block">
                        Explore Subjects
                    </a>
                </div>
            </section>
        </main>
    );
}
