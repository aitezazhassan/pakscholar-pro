'use client';

import { Calendar } from 'lucide-react';

export default function TimelinePage() {
    const milestones = [
        { year: '2024', event: 'PakScholar Pro Launched', desc: 'Platform goes live with initial content' },
        { year: '2024', event: 'Mock Exams Added', desc: 'Interactive practice tests introduced' },
        { year: '2024', event: 'Complete UI Redesign', desc: 'Modern, sleek interface rolled out' },
        { year: '2025', event: 'Growing Community', desc: 'Serving thousands of students' }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                    <h1 className="text-4xl font-bold mb-2">Our Journey</h1>
                    <p className="text-slate-300">Growing to serve Pakistani students</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0 w-20 text-center">
                                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                                        {milestone.year}
                                    </span>
                                </div>
                                <div className="flex-1 bg-slate-50 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.event}</h3>
                                    <p className="text-slate-700">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
