'use client';

export default function CurrentAffairsPage() {
    const topics = [
        { icon: '🌍', title: 'International', desc: 'Global Events & Relations', count: 52 },
        { icon: '🇵🇰', title: 'National', desc: 'Pakistan Affairs & Politics', count: 65 },
        { icon: '💼', title: 'Economy', desc: 'Markets, Trade & Finance', count: 38 },
        { icon: '🏆', title: 'Sports', desc: 'Major Events & Achievements', count: 28 },
        { icon: '🔬', title: 'Science & Tech', desc: 'Innovation & Discoveries', count: 35 },
        { icon: '🎬', title: 'Culture & Entertainment', desc: 'Arts, Media & Awards', count: 24 }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-8xl mb-6">📰</div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">Current Affairs</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Stay updated with latest national and international events for all competitive exams
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-rose-400">242+</div>
                            <div className="text-sm text-slate-300">Topics</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-rose-400">Daily</div>
                            <div className="text-sm text-slate-300">Updates</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-rose-400">2024</div>
                            <div className="text-sm text-slate-300">Coverage</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Categories</h2>
                        <p className="text-lg text-slate-600">Complete coverage of all current affairs</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border-2 border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-5xl mb-4">{topic.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                                <p className="text-sm text-slate-600 mb-4">{topic.desc}</p>
                                <span className="text-xs font-semibold text-rose-700">{topic.count} updates</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-rose-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Stay Current, Stay Ahead</h2>
                    <p className="text-xl text-rose-100 mb-8">Updated daily with latest affairs for your exam prep</p>
                    <button className="px-8 py-4 bg-white text-rose-900 rounded-full font-bold hover:bg-rose-50">View Latest Updates</button>
                </div>
            </section>
        </main>
    );
}
