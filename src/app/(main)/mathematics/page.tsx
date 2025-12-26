'use client';

export default function MathematicsPage() {
    const topics = [
        { icon: '➕', title: 'Algebra', desc: 'Linear, Quadratic Equations', count: 45 },
        { icon: '📊', title: 'Statistics', desc: 'Mean, Median, Mode, SD', count: 32 },
        { icon: '📐', title: 'Geometry', desc: 'Shapes, Angles, Theorems', count: 38 },
        { icon: '🔢', title: 'Number Theory', desc: 'Factors, Multiples, Primes', count: 28 },
        { icon: '📈', title: 'Ratios & Proportion', desc: 'Direct, Inverse Variation', count: 35 },
        { icon: '⚡', title: 'Series & Sequences', desc: 'AP, GP, Special Series', count: 30 }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-8xl mb-6">📐</div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">Mathematics</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Master algebra, statistics, geometry, and all math topics for competitive exams
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">208+</div>
                            <div className="text-sm text-slate-300">Topics</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">1000+</div>
                            <div className="text-sm text-slate-300">Problems</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-blue-400">100+</div>
                            <div className="text-sm text-slate-300">Formulas</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Topics & Formulas</h2>
                        <p className="text-lg text-slate-600">Everything you need to excel in mathematics</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-5xl mb-4">{topic.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                                <p className="text-sm text-slate-600 mb-4">{topic.desc}</p>
                                <span className="text-xs font-semibold text-blue-700">{topic.count} lessons</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Master Mathematics</h2>
                    <p className="text-xl text-blue-100 mb-8">Practice 1000+ problems with step-by-step solutions</p>
                    <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50">Start Practicing</button>
                </div>
            </section>
        </main>
    );
}
