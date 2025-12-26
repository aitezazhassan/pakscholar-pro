'use client';

import Link from 'next/link';
import { MapPin, Users, Mountain, Book } from 'lucide-react';

export default function ExplorePage() {
    const provinces = [
        {
            name: 'Punjab',
            emoji: '🌾',
            capital: 'Lahore',
            population: '110M+',
            color: 'from-amber-900 to-slate-900',
            borderColor: 'border-amber-300',
            link: '/explore/punjab'
        },
        {
            name: 'Sindh',
            emoji: '🏛️',
            capital: 'Karachi',
            population: '48M+',
            color: 'from-blue-900 to-slate-900',
            borderColor: 'border-blue-300',
            link: '/explore/sindh'
        },
        {
            name: 'Khyber Pakhtunkhwa',
            emoji: '⛰️',
            capital: 'Peshawar',
            population: '35M+',
            color: 'from-emerald-900 to-slate-900',
            borderColor: 'border-emerald-300',
            link: '/explore/kpk'
        },
        {
            name: 'Balochistan',
            emoji: '🏜️',
            capital: 'Quetta',
            population: '12M+',
            color: 'from-rose-900 to-slate-900',
            borderColor: 'border-rose-300',
            link: '/explore/balochistan'
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Dark Hero */}
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-8xl mb-6">🇵🇰</div>
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">Explore Pakistan</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Discover the rich heritage, diverse culture, and geographical wonders of Pakistan's provinces
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">4</div>
                            <div className="text-sm text-slate-300">Provinces</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">220M+</div>
                            <div className="text-sm text-slate-300">Population</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
                            <div className="text-3xl font-bold text-emerald-400">75+ Years</div>
                            <div className="text-sm text-slate-300">Independence</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Provinces Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Provinces</h2>
                        <p className="text-lg text-slate-600">Explore the diversity of Pakistan</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {provinces.map((province) => (
                            <Link
                                key={province.name}
                                href={province.link}
                                className={`group relative overflow-hidden rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300`}
                                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${province.color} opacity-90`}></div>
                                <div className="relative z-10">
                                    <div className="text-6xl mb-4">{province.emoji}</div>
                                    <h3 className="text-3xl font-bold mb-2">{province.name}</h3>
                                    <div className="flex items-center gap-4 text-sm mb-4 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {province.capital}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {province.population}
                                        </span>
                                    </div>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full group-hover:bg-white/30 transition-all`}>
                                        <span>Explore {province.name}</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Pakistan at a Glance</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                            <Mountain className="w-12 h-12 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Geography</h3>
                            <p className="text-slate-700">From mighty K2 to Arabian Sea coastline, diverse landscapes</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                            <Book className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Culture</h3>
                            <p className="text-slate-700">Rich heritage with diverse languages, arts, and traditions</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                            <Users className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">People</h3>
                            <p className="text-slate-700">5th most populous country with vibrant multicultural society</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Learn More About Pakistan</h2>
                    <p className="text-xl text-emerald-100 mb-8">Essential knowledge for all competitive exams</p>
                    <Link href="/pakistan-studies" className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 inline-block">
                        Study Pakistan Studies
                    </Link>
                </div>
            </section>
        </main>
    );
}
