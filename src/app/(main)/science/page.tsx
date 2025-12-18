'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Atom, Beaker, Heart, Lightbulb, Award } from 'lucide-react';
import {
    allScienceTopics,
    scienceCategories,
    physicsTopics,
    chemistryTopics,
    biologyTopics,
    everydayScience,
    famousScientists,
    majorInventions
} from '@/lib/scienceData/general-science';

export default function SciencePage() {
    const [activeTab, setActiveTab] = useState<'physics' | 'chemistry' | 'biology' | 'everyday' | 'scientists'>('physics');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const getTabData = () => {
        switch (activeTab) {
            case 'physics': return physicsTopics;
            case 'chemistry': return chemistryTopics;
            case 'biology': return biologyTopics;
            case 'everyday': return everydayScience;
            default: return [];
        }
    };

    const tabData = getTabData();

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/" className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Dashboard
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-cyan-600 p-3">
                            <Atom className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">General Science</h1>
                            <p className="mt-1 text-slate-600">Physics, Chemistry, Biology & Everyday Science</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Total Topics</div>
                            <div className="mt-1 text-2xl font-bold text-cyan-600">{allScienceTopics.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Scientists</div>
                            <div className="mt-1 text-2xl font-bold text-emerald-600">{famousScientists.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Inventions</div>
                            <div className="mt-1 text-2xl font-bold text-purple-600">{majorInventions.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Categories</div>
                            <div className="mt-1 text-2xl font-bold text-blue-600">{scienceCategories.length}</div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {[
                            { id: 'physics', label: 'Physics', icon: Atom },
                            { id: 'chemistry', label: 'Chemistry', icon: Beaker },
                            { id: 'biology', label: 'Biology', icon: Heart },
                            { id: 'everyday', label: 'Everyday Science', icon: Lightbulb },
                            { id: 'scientists', label: 'Scientists & Inventions', icon: Award }
                        ].map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                            ? 'bg-cyan-600 text-white shadow-lg'
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
                {/* TOPIC TABS */}
                {activeTab !== 'scientists' && (
                    <div className="space-y-4">
                        {tabData.map((topic) => (
                            <div key={topic.id} className="rounded-xl border border-slate-200 bg-white p-6">
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{topic.topic}</h3>
                                        <div className="mt-1 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-900">
                                            {topic.subject}
                                        </div>
                                    </div>
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${topic.importance === 'Critical' ? 'bg-red-100 text-red-900' :
                                            topic.importance === 'High' ? 'bg-amber-100 text-amber-900' :
                                                'bg-blue-100 text-blue-900'
                                        }`}>
                                        {topic.importance}
                                    </span>
                                </div>

                                <div className="mb-3 rounded-lg bg-cyan-50 p-4">
                                    <div className="mb-1 text-xs font-semibold text-cyan-900">CONCEPT:</div>
                                    <p className="text-sm text-cyan-800">{topic.concept}</p>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-1 text-xs font-semibold text-slate-900">EXPLANATION:</div>
                                    <p className="text-sm text-slate-700">{topic.explanation}</p>
                                </div>

                                {topic.formula && (
                                    <div className="mb-3 rounded-lg bg-purple-50 p-3">
                                        <div className="mb-1 text-xs font-semibold text-purple-900">FORMULA:</div>
                                        <code className="text-sm font-mono text-purple-800">{topic.formula}</code>
                                    </div>
                                )}

                                {topic.example && (
                                    <div className="rounded-lg bg-emerald-50 p-3">
                                        <div className="mb-1 text-xs font-semibold text-emerald-900">EXAMPLE:</div>
                                        <p className="text-sm text-emerald-800">{topic.example}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* SCIENTISTS TAB */}
                {activeTab === 'scientists' && (
                    <div className="grid gap-8">
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Famous Scientists</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                {famousScientists.map((scientist, index) => (
                                    <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                                        <h3 className="mb-2 text-lg font-bold text-slate-900">{scientist.name}</h3>
                                        <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900">
                                            {scientist.field}
                                        </div>
                                        <p className="mb-2 text-sm text-slate-700">{scientist.contribution}</p>
                                        <div className="text-xs text-slate-600">Era: {scientist.era}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Major Inventions</h2>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {majorInventions.map((item, index) => (
                                    <div key={index} className="rounded-xl border border-amber-200 bg-white p-6">
                                        <h3 className="mb-2 font-bold text-amber-900">{item.invention}</h3>
                                        <div className="mb-1 text-sm text-slate-700">
                                            <span className="font-semibold">Inventor:</span> {item.inventor}
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            <span className="font-semibold">Year:</span> {item.year}
                                        </div>
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
