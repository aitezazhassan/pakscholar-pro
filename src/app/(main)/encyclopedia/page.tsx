'use client';

import { useState } from 'react';
import { Shield, Map, Users, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { provinces } from '@/data/provinces';

const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'geography', label: 'Geography', icon: Map },
    { id: 'history', label: 'History', icon: Users },
    { id: 'economy', label: 'Economy', icon: TrendingUp }
];

export default function EncyclopediaPage() {
    const [selectedProvince, setSelectedProvince] = useState(provinces.punjab);
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Official Header */}
            <header className="border-b-4 border-emerald-950 bg-emerald-950">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-amber-400" />
                        <div>
                            <h1 className="text-xl font-bold text-white">GK Encyclopedia</h1>
                            <p className="text-sm text-emerald-200">Province Profiles & Constitutional Data</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Province Selector */}
                <div className="mb-6 flex gap-2">
                    {Object.values(provinces).map(province => (
                        <button
                            key={province.name}
                            onClick={() => setSelectedProvince(province)}
                            className={`rounded px-4 py-2 font-bold transition-all ${selectedProvince.name === province.name
                                    ? 'bg-emerald-950 text-white'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            {province.name}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                    {/* Main Content (3/4) */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Stats Grid (Wiki Infobox) */}
                        <div className="rounded-lg border border-slate-300 bg-white p-6">
                            <h2 className="mb-4 text-2xl font-bold text-slate-900">{selectedProvince.name}</h2>
                            <div className="grid gap-3 sm:grid-cols-4">
                                <div className="rounded bg-emerald-50 p-3">
                                    <div className="text-xs text-slate-600">Capital</div>
                                    <div className="mt-1 font-bold text-emerald-900">{selectedProvince.capital}</div>
                                </div>
                                <div className="rounded bg-blue-50 p-3">
                                    <div className="text-xs text-slate-600">Population</div>
                                    <div className="mt-1 font-bold text-blue-900">{selectedProvince.population}</div>
                                </div>
                                <div className="rounded bg-purple-50 p-3">
                                    <div className="text-xs text-slate-600">Area</div>
                                    <div className="mt-1 font-bold text-purple-900">{selectedProvince.area}</div>
                                </div>
                                <div className="rounded bg-amber-50 p-3">
                                    <div className="text-xs text-slate-600">Literacy</div>
                                    <div className="mt-1 font-bold text-amber-900">{selectedProvince.literacy}</div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="rounded-lg border border-slate-300 bg-white">
                            <div className="border-b border-slate-200 flex">
                                {tabs.map(tab => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 border-b-2 px-4 py-3 font-bold transition-colors ${activeTab === tab.id
                                                    ? 'border-emerald-950 text-emerald-950'
                                                    : 'border-transparent text-slate-600 hover:text-slate-900'
                                                }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="p-6">
                                {activeTab === 'overview' && (
                                    <div className="space-y-4">
                                        <p className="leading-relaxed text-slate-700">{selectedProvince.history.brief}</p>
                                        <div className="rounded bg-slate-100 p-4">
                                            <h4 className="mb-2 font-bold">Quick Facts</h4>
                                            <ul className="space-y-1 text-sm">
                                                <li>• {selectedProvince.districts} Districts</li>
                                                <li>• {selectedProvince.divisions.length} Divisions</li>
                                                <li>• GDP Contribution: {selectedProvince.economy.gdpContribution}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'geography' && (
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="mb-2 font-bold">Major Rivers</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProvince.geography.rivers.map(river => (
                                                    <span key={river} className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900">
                                                        {river}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-bold">Major Cities</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProvince.geography.majorCities.map(city => (
                                                    <span key={city} className="rounded bg-purple-100 px-3 py-1 text-sm font-medium text-purple-900">
                                                        {city}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'history' && (
                                    <div className="space-y-4">
                                        <h4 className="font-bold">Recent Governors</h4>
                                        <div className="space-y-2">
                                            {selectedProvince.history.governors.map(gov => (
                                                <div key={gov.name} className="flex justify-between rounded bg-slate-100 px-4 py-2">
                                                    <span className="font-medium">{gov.name}</span>
                                                    <span className="text-sm text-slate-600">{gov.period}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'economy' && (
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="mb-2 font-bold">Main Industries</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProvince.economy.mainIndustries.map(industry => (
                                                    <span key={industry} className="rounded bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="rounded bg-emerald-50 p-4">
                                            <div className="text-sm text-slate-600">GDP Contribution</div>
                                            <div className="mt-1 text-xl font-bold text-emerald-900">
                                                {selectedProvince.economy.gdpContribution}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar TOC (1/4) */}
                    <div className="space-y-4">
                        <div className="rounded-lg border border-slate-300 bg-white p-4">
                            <h3 className="mb-3 text-sm font-bold">Quick Navigation</h3>
                            <div className="space-y-1 text-sm">
                                <Link href="/explore" className="block rounded px-3 py-2 hover:bg-slate-100">
                                    Interactive Map →
                                </Link>
                                <Link href="/" className="block rounded px-3 py-2 hover:bg-slate-100">
                                    Back to Dashboard →
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-lg border border-slate-300 bg-white p-4">
                            <h3 className="mb-3 text-sm font-bold">All Provinces</h3>
                            <div className="space-y-1 text-sm">
                                {Object.values(provinces).map(prov => (
                                    <button
                                        key={prov.name}
                                        onClick={() => setSelectedProvince(prov)}
                                        className={`block w-full rounded px-3 py-2 text-left ${selectedProvince.name === prov.name ? 'bg-emerald-100 font-bold' : 'hover:bg-slate-100'
                                            }`}
                                    >
                                        {prov.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
