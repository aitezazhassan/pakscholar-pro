'use client';

import { Zap, Clock, Trophy } from 'lucide-react';

export default function RapidQuizPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-900 to-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Zap className="w-16 h-16 mx-auto mb-6 text-orange-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Rapid Quiz</h1>
                    <p className="text-xl text-slate-300">Quick-fire questions to test your knowledge</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Coming Soon!</h2>
                    <p className="text-lg text-slate-700 mb-12">We're working on an exciting rapid quiz feature. Stay tuned!</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-orange-50 rounded-2xl p-6">
                            <Clock className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2">Timed Questions</h3>
                            <p className="text-sm text-slate-700">Test under pressure</p>
                        </div>
                        <div className="bg-orange-50 rounded-2xl p-6">
                            <Trophy className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2">Leaderboards</h3>
                            <p className="text-sm text-slate-700">Compete with others</p>
                        </div>
                        <div className="bg-orange-50 rounded-2xl p-6">
                            <Zap className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                            <h3 className="font-bold text-slate-900 mb-2">Instant Results</h3>
                            <p className="text-sm text-slate-700">Get feedback immediately</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
