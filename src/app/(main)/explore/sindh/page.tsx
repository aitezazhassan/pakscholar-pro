'use client';

export default function SindhPage() {
    const facts = [
        { label: 'Capital', value: 'Karachi' },
        { label: 'Population', value: '48+ Million' },
        { label: 'Area', value: '140,914 km²' },
        { label: 'Language', value: 'Sindhi, Urdu' }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="text-8xl mb-6">🏛️</div>
                    <h1 className="text-5xl font-bold mb-4 font-serif">Sindh</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        The cradle of Indus Valley Civilization and economic hub of Pakistan
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quick Facts</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {facts.map((fact, idx) => (
                            <div key={idx} className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100 text-center">
                                <div className="text-sm text-blue-700 font-semibold mb-1">{fact.label}</div>
                                <div className="text-2xl font-bold text-slate-900">{fact.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Discover Sindh</h2>
                    <p className="text-xl text-blue-100 mb-8">Rich history from Mohenjo-Daro to modern Karachi</p>
                </div>
            </section>
        </main>
    );
}
