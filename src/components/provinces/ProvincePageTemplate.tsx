'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Users, TrendingUp, BookOpen, GraduationCap, Landmark, Factory } from 'lucide-react';

interface ProvinceData {
    basic: any;
    geography: any;
    administrative: any;
    majorCities: any[];
    economy: any;
    culture: any;
    historicalSites: any[];
    education: any;
    infrastructure?: any;
    quickFacts: string[];
}

interface ProvincePageProps {
    data: ProvinceData;
    colorScheme: 'emerald' | 'blue' | 'purple' | 'amber';
}

export default function ProvincePageTemplate({ data, colorScheme }: ProvincePageProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'geography' | 'admin' | 'economy' | 'culture' | 'education' | 'sites'>('overview');

    const colors = {
        emerald: { primary: 'emerald-600', light: 'emerald-50', dark: 'emerald-900', medium: 'emerald-700' },
        blue: { primary: 'blue-600', light: 'blue-50', dark: 'blue-900', medium: 'blue-700' },
        purple: { primary: 'purple-600', light: 'purple-50', dark: 'purple-900', medium: 'purple-700' },
        amber: { primary: 'amber-600', light: 'amber-50', dark: 'amber-900', medium: 'amber-700' }
    };

    const c = colors[colorScheme];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'geography', label: 'Geography', icon: MapPin },
        { id: 'admin', label: 'Administrative', icon: Landmark },
        { id: 'economy', label: 'Economy', icon: TrendingUp },
        { id: 'culture', label: 'Culture', icon: Users },
        { id: 'education', label: 'Education', icon: GraduationCat },
        { id: 'sites', label: 'Historical Sites', icon: Factory }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/explore" className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Geography Lab
                    </Link>
                    <div>
                        <div className={`mb-2 inline-block rounded-full bg-${c.light} px-3 py-1 text-xs font-semibold text-${c.dark}`}>
                            Province of Pakistan
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900">{data.basic.name}</h1>
                        <p className="mt-2 text-lg text-slate-600">{data.basic.meaning}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Capital</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{data.basic.capital}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Population</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{data.basic.population}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Area</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{data.basic.area}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">GDP Share</div>
                            <div className={`mt-1 text-lg font-bold text-${c.primary}`}>{data.economy.gdpContribution}</div>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                            ? `bg-${c.primary} text-white shadow-lg`
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
                {/* OVERVIEW */}
                {activeTab === 'overview' && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">Quick Facts</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {data.quickFacts.map((fact: string, index: number) => (
                                        <div key={index} className={`flex items-start gap-2 rounded-lg bg-${c.light} p-3`}>
                                            <div className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-${c.primary}`} />
                                            <p className="text-sm text-slate-700">{fact}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 font-bold text-slate-900">Major Cities</h3>
                                <div className="space-y-3">
                                    {data.majorCities.map((city: any, index: number) => (
                                        <div key={index} className="rounded-lg border border-slate-100 p-3">
                                            <div className="mb-1 flex items-center justify-between">
                                                <span className="font-semibold text-slate-900">{city.name}</span>
                                                <span className={`text-xs font-medium text-${c.primary}`}>{city.population}</span>
                                            </div>
                                            {city.nickname && <div className="text-xs text-slate-600">{city.nickname}</div>}
                                            <div className="mt-1 text-xs text-slate-500">{city.famous}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other tabs follow similar pattern... */}
                {activeTab !== 'overview' && (
                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                        <p className="text-slate-600">Content for {activeTab} tab</p>
                    </div>
                )}
            </div>
        </main>
    );
}
