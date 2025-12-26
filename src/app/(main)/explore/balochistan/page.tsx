'use client';

export default function BalochistanPage() {
    const facts = [
        { label: 'Capital', value: 'Quetta' },
        { label: 'Population', value: '12+ Million' },
        { label: 'Area', value: '347,190 km²' },
        { label: 'Language', value: 'Balochi, Urdu' }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-900 to-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="text-8xl mb-6">🏜️</div>
                    <h1 className="text-5xl font-bold mb-4 font-serif">Balochistan</h1>
                    <p className="text-xl text-rose-100 max-w-2xl mx-auto">
                        Pakistan's largest province by area - Rich in natural resources
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quick Facts</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {facts.map((fact, idx) => (
                            <div key={idx} className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-100 text-center">
                                <div className="text-sm text-rose-700 font-semibold mb-1">{fact.label}</div>
                                <div className="text-2xl font-bold text-slate-900">{fact.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-rose-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Discover Balochistan</h2>
                    <p className="text-xl text-rose-100 mb-8">Land of ancient civilizations and natural beauty</p>
                </div>
            </section>
        </main>
    );
}
