'use client';

import { BookOpen, Search, CheckCircle, Award } from 'lucide-react';

export default function HowItWorksPage() {
    const steps = [
        {
            number: 1,
            title: 'Browse Subjects',
            description: 'Explore our comprehensive collection of study materials for Pakistan Studies, Islamic Studies, Math, English, Science, and Current Affairs.',
            icon: Search
        },
        {
            number: 2,
            title: 'Learn & Practice',
            description: 'Study the topics, solve practice questions, and take mock exams to test your knowledge.',
            icon: BookOpen
        },
        {
            number: 3,
            title: 'Track Progress',
            description: 'Monitor your performance, identify weak areas, and improve consistently.',
            icon: CheckCircle
        },
        {
            number: 4,
            title: 'Ace Your Exam',
            description: 'Walk into your PPSC, FPSC, or CSS exam with confidence and achieve your goals.',
            icon: Award
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="text-8xl mb-6">🚀</div>
                    <h1 className="text-5xl font-bold mb-4 font-serif">How It Works</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Your step-by-step guide to exam success with PakScholar Pro
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className={`flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl ${step.number === 1 ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
                                            step.number === 2 ? 'bg-gradient-to-br from-emerald-600 to-emerald-800' :
                                                step.number === 3 ? 'bg-gradient-to-br from-purple-600 to-purple-800' :
                                                    'bg-gradient-to-br from-amber-600 to-amber-800'
                                        }`}>
                                        {step.number}
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                                            <Icon className="w-8 h-8 text-slate-600" />
                                            <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                                        </div>
                                        <p className="text-lg text-slate-700">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Join thousands of students preparing for success
                    </p>
                    <a href="/pakistan-studies" className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 inline-block">
                        Start Learning Now
                    </a>
                </div>
            </section>
        </main>
    );
}
