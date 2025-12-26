'use client';

export default function PunjabPage() {
    const facts = [
        { label: 'Capital', value: 'Lahore' },
        { label: 'Population', value: '110+ Million' },
        { label: 'Area', value: '205,344 km²' },
        { label: 'Language', value: 'Punjabi, Urdu' }
    ];

    const cities = ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot'];
    const landmarks = ['Badshahi Mosque', 'Lahore Fort', 'Shalimar Gardens', 'Minar-e-Pakistan', 'Rohtas Fort'];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-900 to-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="text-8xl mb-6">🌾</div>
                    <h1 className="text-5xl font-bold mb-4 font-serif">Punjab</h1>
                    <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                        The Land of Five Rivers - Pakistan's most populous and agricultural heartland
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quick Facts</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {facts.map((fact, idx) => (
                            <div key={idx} className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-100 text-center">
                                <div className="text-sm text-amber-700 font-semibold mb-1">{fact.label}</div>
                                <div className="text-2xl font-bold text-slate-900">{fact.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Major Cities</h3>
                            <div className="flex flex-wrap gap-3">
                                {cities.map((city) => (
                                    <span key={city} className="px-4 py-2 bg-white rounded-full border-2 border-slate-200 text-slate-700">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Famous Landmarks</h3>
                            <ul className="space-y-2">
                                {landmarks.map((landmark) => (
                                    <li key={landmark} className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                        {landmark}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-amber-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Learn More About Punjab</h2>
                    <p className="text-xl text-amber-100 mb-8">Important for Pakistan Studies & General Knowledge</p>
                </div>
            </section>
        </main>
    );
}
