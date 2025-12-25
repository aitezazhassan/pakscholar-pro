'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Scale, Flag, Users, ExternalLink } from 'lucide-react';
import { constitutionParts, criticalArticles, majorAmendments, nationalSymbols, politicalSystem } from '@/lib/pakStudiesData/constitution';

export default function PakistanStudiesPage() {
    const [activeTab, setActiveTab] = useState<'constitution' | 'amendments' | 'political' | 'symbols'>('constitution');

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><div className="flex items-center gap-3">
                        <div className="rounded-xl bg-emerald-600 p-3">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">Pakistan Studies</h1>
                            <p className="mt-1 text-slate-600">Constitution, History & Political System</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {[
                            { id: 'constitution', label: 'Constitution 1973', icon: Scale },
                            { id: 'amendments', label: 'Amendments', icon: BookOpen },
                            { id: 'political', label: 'Political System', icon: Users },
                            { id: 'symbols', label: 'National Symbols', icon: Flag }
                        ].map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                            ? 'bg-emerald-600 text-white shadow-lg'
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

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* CONSTITUTION TAB */}
                {activeTab === 'constitution' && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h2 className="mb-6 text-2xl font-bold text-slate-900">Constitution of Pakistan 1973</h2>

                                {/* Parts Overview */}
                                <div className="mb-8">
                                    <h3 className="mb-4 text-lg font-semibold text-slate-900">12 Parts, 280 Articles</h3>
                                    <div className="space-y-3">
                                        {constitutionParts.map((part, index) => (
                                            <div key={index} className="rounded-lg border border-slate-200 p-4">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <span className="font-semibold text-slate-900">Part {part.number}: {part.name}</span>
                                                    <span className="text-sm text-slate-600">Articles {part.articles}</span>
                                                </div>
                                                <p className="text-sm text-slate-600">{part.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Critical Articles */}
                                <div>
                                    <h3 className="mb-4 text-lg font-semibold text-slate-900">Critical Articles for PPSC</h3>
                                    <div className="space-y-3">
                                        {criticalArticles.map((article, index) => (
                                            <div key={index} className="rounded-lg bg-emerald-50 p-4">
                                                <div className="mb-2 flex items-start justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="rounded bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white">
                                                            Article {article.number}
                                                        </span>
                                                        <span className="font-semibold text-emerald-900">{article.title}</span>
                                                    </div>
                                                    <span className={`text-xs font-semibold ${article.importance === 'Critical' ? 'text-red-600' : 'text-amber-600'
                                                        }`}>
                                                        {article.importance}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-emerald-800">{article.summary}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                                <h3 className="mb-4 font-semibold text-emerald-900">Quick Facts</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                                        <span className="text-emerald-700">Enacted:</span>
                                        <span className="font-semibold text-emerald-900">14 Aug 1973</span>
                                    </div>
                                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                                        <span className="text-emerald-700">Total Articles:</span>
                                        <span className="font-semibold text-emerald-900">280</span>
                                    </div>
                                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                                        <span className="text-emerald-700">Total Parts:</span>
                                        <span className="font-semibold text-emerald-900">12</span>
                                    </div>
                                    <div className="flex justify-between border-b border-emerald-100 pb-2">
                                        <span className="text-emerald-700">Amendments:</span>
                                        <span className="font-semibold text-emerald-900">26</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-emerald-700">Nature:</span>
                                        <span className="font-semibold text-emerald-900">Written, Federal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 font-semibold text-slate-900">External Resources</h3>
                                <div className="space-y-3">
                                    <a
                                        href="http://www.na.gov.pk/uploads/documents/1333523681_951.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm text-blue-600 hover:bg-slate-100"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Official PDF (Parliament)
                                    </a>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Constitution_of_Pakistan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm text-blue-600 hover:bg-slate-100"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Wikipedia Article
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* AMENDMENTS TAB */}
                {activeTab === 'amendments' && (
                    <div className="rounded-xl border border-slate-200 bg-white p-6">
                        <h2 className="mb-6 text-2xl font-bold text-slate-900">Major Constitutional Amendments</h2>
                        <div className="space-y-6">
                            {majorAmendments.map((amendment, index) => (
                                <div key={index} className="rounded-lg border border-slate-200 p-6">
                                    <div className="mb-4 flex items-start justify-between">
                                        <div>
                                            <h3 className="mb-1 text-xl font-bold text-slate-900">{amendment.number} Amendment</h3>
                                            <p className="text-sm text-slate-600">Year: {amendment.year}</p>
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${amendment.impact === 'Critical' ? 'bg-red-100 text-red-900' : 'bg-amber-100 text-amber-900'
                                            }`}>
                                            {amendment.impact} Impact
                                        </span>
                                    </div>
                                    <p className="mb-4 text-slate-700">{amendment.significance}</p>
                                    <div>
                                        <h4 className="mb-2 text-sm font-semibold text-slate-900">Key Changes:</h4>
                                        <ul className="space-y-1">
                                            {amendment.keyChanges.map((change, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                                                    {change}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* POLITICAL SYSTEM TAB */}
                {activeTab === 'political' && (
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 text-xl font-bold text-slate-900">System Overview</h3>
                            <div className="space-y-3">
                                <div className="rounded-lg bg-slate-50 p-3">
                                    <div className="text-xs text-slate-600">Type</div>
                                    <div className="font-semibold text-slate-900">{politicalSystem.type}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-3">
                                    <div className="text-xs text-slate-600">Government</div>
                                    <div className="font-semibold text-slate-900">{politicalSystem.government}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-3">
                                    <div className="text-xs text-slate-600">Head of State</div>
                                    <div className="font-semibold text-slate-900">{politicalSystem.headOfState}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-3">
                                    <div className="text-xs text-slate-600">Head of Government</div>
                                    <div className="font-semibold text-slate-900">{politicalSystem.headOfGovernment}</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 text-xl font-bold text-slate-900">National Assembly</h3>
                            <div className="space-y-3">
                                {Object.entries(politicalSystem.nationalAssembly).map(([key, value]) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="capitalize text-slate-600">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        <span className="font-semibold text-slate-900">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 text-xl font-bold text-slate-900">Senate</h3>
                            <div className="space-y-3">
                                {Object.entries(politicalSystem.senate).map(([key, value]) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="capitalize text-slate-600">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        <span className="font-semibold text-slate-900">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 text-xl font-bold text-slate-900">Judiciary</h3>
                            <div className="space-y-3">
                                {Object.entries(politicalSystem.judiciary).map(([key, value]) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="capitalize text-slate-600">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        <span className="font-semibold text-slate-900">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* NATIONAL SYMBOLS TAB */}
                {activeTab === 'symbols' && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(nationalSymbols).map(([key, symbol]) => (
                            <div key={key} className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-3 text-lg font-semibold capitalize text-slate-900">{key}</h3>
                                <div className="space-y-2 text-sm">
                                    {Object.entries(symbol).map(([prop, value]) => (
                                        <div key={prop} className="flex flex-col">
                                            <span className="capitalize text-slate-600">{prop.replace(/([A-Z])/g, ' $1')}:</span>
                                            <span className="font-medium text-slate-900">{value as string}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
