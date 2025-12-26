'use client';

export default function EnglishPage() {
    const topics = [
        { icon: '📝', title: 'Grammar', desc: 'Tenses, Voice, Speech', count: 42 },
        { icon: '📚', title: 'Vocabulary', desc: 'Words, Synonyms, Antonyms', count: 65 },
        { icon: '💬', title: 'Idioms & Phrases', desc: 'Common Expressions', count: 38 },
        { icon: '✍️', title: 'Précis Writing', desc: 'Summarization Skills', count: 25 },
        { icon: '📖', title: 'Comprehension', desc: 'Reading & Analysis', count: 30 },
        { icon: '🎯', title: 'Sentence Correction', desc: 'Error Spotting', count: 35 }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-8xl mb-6">✍️</div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">English Language</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Perfect your grammar, expand vocabulary, and master précis writing for all exams
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">235+</div>
                            <div className="text-sm text-slate-300">Topics</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">2000+</div>
                            <div className="text-sm text-slate-300">Words</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-purple-400">500+</div>
                            <div className="text-sm text-slate-300">Idioms</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Master English</h2>
                        <p className="text-lg text-slate-600">Complete coverage for all English sections</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-5xl mb-4">{topic.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                                <p className="text-sm text-slate-600 mb-4">{topic.desc}</p>
                                <span className="text-xs font-semibold text-purple-700">{topic.count} lessons</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Perfect Your English</h2>
                    <p className="text-xl text-purple-100 mb-8">Build vocabulary and master grammar rules</p>
                    <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50">Start Learning</button>
                </div>
            </section>
        </main>
    );
}
