'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, Star, Users, ExternalLink } from 'lucide-react';
import {
    importantSurahs,
    quranFacts,
    fivePillars,
    prophets,
    importantHadiths,
    islamicMonths,
    khulafaRashideen,
    islamicHistory
} from '@/lib/islamicStudiesData/islamic-knowledge';

export default function IslamicStudiesPage() {
    const [activeTab, setActiveTab] = useState<'quran' | 'hadith' | 'prophets' | 'pillars' | 'history'>('quran');

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/" className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Dashboard
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-green-600 p-3">
                            <Star className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">Islamic Studies</h1>
                            <p className="mt-1 text-slate-600">Quran, Hadith, Prophets & Islamic History</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {[
                            { id: 'quran', label: 'Quran', icon: BookOpen },
                            { id: 'hadith', label: 'Hadith', icon: Heart },
                            { id: 'prophets', label: 'Prophets', icon: Users },
                            { id: 'pillars', label: 'Five Pillars', icon: Star },
                            { id: 'history', label: 'Islamic History', icon: BookOpen }
                        ].map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                            ? 'bg-green-600 text-white shadow-lg'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* QURAN TAB */}
                {activeTab === 'quran' && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h2 className="mb-6 text-2xl font-bold text-slate-900">Important Surahs</h2>
                                <div className="space-y-4">
                                    {importantSurahs.map((surah) => (
                                        <div key={surah.number} className="rounded-lg border border-green-100 bg-green-50 p-4">
                                            <div className="mb-2 flex items-start justify-between">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="rounded bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                                                            {surah.number}
                                                        </span>
                                                        <h3 className="font-semibold text-green-900">{surah.name}</h3>
                                                        <span className="text-xl text-green-700">{surah.arabicName}</span>
                                                    </div>
                                                    <p className="mt-1 text-sm italic text-green-700">"{surah.meaning}"</p>
                                                </div>
                                                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${surah.revelation === 'Makki' ? 'bg-blue-100 text-blue-900' : 'bg-purple-100 text-purple-900'
                                                    }`}>
                                                    {surah.revelation}
                                                </span>
                                            </div>
                                            <p className="mb-2 text-sm text-green-800">{surah.importance}</p>
                                            <div className="text-xs text-green-700">Verses: {surah.verses}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h2 className="mb-4 text-xl font-bold text-slate-900">Islamic Calendar</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {islamicMonths.map((month) => (
                                        <div key={month.number} className="rounded-lg bg-slate-50 p-3">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-slate-900">{month.number}.</span>
                                                <span className="font-semibold text-slate-900">{month.name}</span>
                                            </div>
                                            <p className="mt-1 text-xs text-slate-600">{month.significance}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                                <h3 className="mb-4 font-semibold text-green-900">Quran Quick Facts</h3>
                                <div className="space-y-2 text-sm">
                                    {Object.entries(quranFacts).map(([key, value]) => (
                                        <div key={key} className="flex justify-between border-b border-green-100 pb-2">
                                            <span className="capitalize text-green-700">{key.replace(/([A-Z])/g, ' $1')}</span>
                                            <span className="font-semibold text-green-900">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 font-semibold text-slate-900">External Resources</h3>
                                <div className="space-y-3">
                                    <a href="https://quran.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm text-blue-600 hover:bg-slate-100">
                                        <ExternalLink className="h-4 w-4" />
                                        Quran.com (Full Quran)
                                    </a>
                                    <a href="https://sunnah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm text-blue-600 hover:bg-slate-100">
                                        <ExternalLink className="h-4 w-4" />
                                        Sunnah.com (Hadith)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* HADITH TAB */}
                {activeTab === 'hadith' && (
                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                        <h2 className="mb-6 text-2xl font-bold text-slate-900">Important Hadiths for PPSC</h2>
                        <div className="space-y-4">
                            {importantHadiths.map((hadith) => (
                                <div key={hadith.id} className="rounded-lg border border-slate-200 p-6">
                                    <div className="mb-3 flex items-start justify-between">
                                        <div>
                                            <span className="text-sm font-semibold text-blue-600">{hadith.book} #{hadith.hadithNumber}</span>
                                            <p className="text-xs text-slate-600">Narrator: {hadith.narrator}</p>
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${hadith.importance === 'Critical' ? 'bg-red-100 text-red-900' : 'bg-amber-100 text-amber-900'
                                            }`}>
                                            {hadith.importance}
                                        </span>
                                    </div>
                                    <p className="mb-3 italic text-slate-700">"{hadith.text}"</p>
                                    <div className="rounded-lg bg-blue-50 px-3 py-1 text-sm">
                                        <span className="font-semibold text-blue-900">Theme:</span> <span className="text-blue-700">{hadith.theme}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PROPHETS TAB */}
                {activeTab === 'prophets' && (
                    <div>
                        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <p className="text-sm text-blue-800">
                                <strong>25 Prophets (Anbiya)</strong> are mentioned by name in the Quran. All Muslims must believe in them.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {prophets.map((prophet, index) => (
                                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                                    <h3 className="mb-1 font-semibold text-slate-900">{prophet.name}</h3>
                                    <p className="mb-3 text-lg text-emerald-700">{prophet.arabicName}</p>
                                    {prophet.book && (
                                        <div className="mb-2 text-sm">
                                            <span className="font-semibold text-slate-700">Book:</span> {prophet.book}
                                        </div>
                                    )}
                                    <div className="mb-2 text-sm">
                                        <span className="font-semibold text-slate-700">People:</span> {prophet.people}
                                    </div>
                                    {prophet.miracle && (
                                        <div className="mb-2 text-sm">
                                            <span className="font-semibold text-slate-700">Miracle:</span> {prophet.miracle}
                                        </div>
                                    )}
                                    <p className="text-xs text-slate-600">{prophet.mentioned}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FIVE PILLARS TAB */}
                {activeTab === 'pillars' && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {fivePillars.map((pillar, index) => (
                            <div key={index} className="rounded-xl border border-green-200 bg-white p-6">
                                <div className="mb-3 flex items-center gap-2">
                                    <Star className="h-6 w-6 text-green-600" />
                                    <h3 className="text-xl font-bold text-green-900">{pillar.name}</h3>
                                </div>
                                <p className="mb-2 text-2xl text-green-700">{pillar.arabic}</p>
                                <p className="mb-3 text-sm italic text-green-800">{pillar.meaning}</p>
                                <p className="mb-3 text-sm text-slate-700">{pillar.description}</p>
                                <div className="rounded-lg bg-green-50 p-2 text-xs text-green-800">
                                    <strong>Importance:</strong> {pillar.importance}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* HISTORY TAB */}
                {activeTab === 'history' && (
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Khulafa-e-Rashideen</h2>
                            <div className="space-y-4">
                                {khulafaRashideen.map((caliph, index) => (
                                    <div key={index} className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                                        <h3 className="mb-1 font-semibold text-amber-900">{caliph.name}</h3>
                                        <p className="mb-2 text-sm text-amber-700">{caliph.title}</p>
                                        <p className="mb-3 text-xs text-amber-600">Period: {caliph.period}</p>
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-amber-900">Achievements:</span>
                                            <ul className="ml-4 mt-1 list-disc text-xs text-amber-800">
                                                {caliph.achievements.map((achievement, idx) => (
                                                    <li key={idx}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="text-xs text-amber-600">Death: {caliph.death}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Timeline of Events</h2>
                            <div className="space-y-3">
                                {islamicHistory.map((event, index) => (
                                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                                        <div className="font-semibold text-blue-600">{event.year} CE</div>
                                        <div className="text-sm text-slate-900">{event.event}</div>
                                        <div className="text-xs text-slate-600">{event.location}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
