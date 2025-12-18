'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, MessageCircle, Check, X } from 'lucide-react';
import { grammarRules, commonErrors, academicVocabulary, commonIdioms, oneWordSubstitutions } from '@/lib/englishData/grammar-vocabulary';

export default function EnglishPage() {
    const [activeTab, setActiveTab] = useState<'grammar' | 'errors' | 'vocabulary' | 'idioms' | 'substitutions'>('grammar');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

    const filteredGrammar = selectedDifficulty === 'all'
        ? grammarRules
        : grammarRules.filter(r => r.difficulty === selectedDifficulty);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/" className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Dashboard
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-purple-600 p-3">
                            <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">English Language</h1>
                            <p className="mt-1 text-slate-600">Grammar, Vocabulary & Communication Skills</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {[
                            { id: 'grammar', label: 'Grammar Rules' },
                            { id: 'errors', label: 'Common Errors' },
                            { id: 'vocabulary', label: 'Vocabulary' },
                            { id: 'idioms', label: 'Idioms & Phrases' },
                            { id: 'substitutions', label: 'One-Word Substitutions' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* GRAMMAR TAB */}
                {activeTab === 'grammar' && (
                    <div className="grid gap-8 lg:grid-cols-4">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 font-semibold text-slate-900">Difficulty</h3>
                            <div className="space-y-2">
                                {['all', 'Basic', 'Intermediate', 'Advanced'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedDifficulty(level)}
                                        className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedDifficulty === level
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {level === 'all' ? 'All Levels' : level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="space-y-4">
                                {filteredGrammar.map((rule) => (
                                    <div key={rule.id} className="rounded-xl border border-slate-200 bg-white p-6">
                                        <div className="mb-3 flex items-start justify-between">
                                            <h3 className="text-lg font-semibold text-slate-900">{rule.topic}</h3>
                                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${rule.difficulty === 'Basic' ? 'bg-green-100 text-green-900' :
                                                    rule.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-900' :
                                                        'bg-red-100 text-red-900'
                                                }`}>
                                                {rule.difficulty}
                                            </span>
                                        </div>

                                        <div className="mb-4 rounded-lg bg-purple-50 p-4">
                                            <div className="mb-1 text-xs font-semibold text-purple-900">RULE:</div>
                                            <p className="text-sm text-purple-800">{rule.rule}</p>
                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 text-xs font-semibold text-slate-900">EXAMPLES:</div>
                                            <ul className="space-y-1">
                                                {rule.examples.map((example, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <Check className="h-4 w-4 flex-shrink-0 text-green-600" />
                                                        {example}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {rule.commonError && (
                                            <div className="rounded-lg bg-red-50 p-3">
                                                <div className="mb-1 text-xs font-semibold text-red-900">COMMON ERROR:</div>
                                                <div className="flex items-center gap-2 text-sm text-red-800">
                                                    <X className="h-4 w-4" />
                                                    {rule.commonError}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* COMMON ERRORS TAB */}
                {activeTab === 'errors' && (
                    <div className="grid gap-4 md:grid-cols-2">
                        {commonErrors.map((item, index) => (
                            <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                                <div className="mb-3">
                                    <div className="mb-2 flex items-center gap-2 text-red-600">
                                        <X className="h-5 w-5" />
                                        <span className="font-semibold">Incorrect:</span>
                                    </div>
                                    <div className="rounded-lg bg-red-50 p-3 text-red-900">{item.error}</div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 flex items-center gap-2 text-green-600">
                                        <Check className="h-5 w-5" />
                                        <span className="font-semibold">Correct:</span>
                                    </div>
                                    <div className="rounded-lg bg-green-50 p-3 text-green-900">{item.correct}</div>
                                </div>

                                <div className="rounded-lg bg-blue-50 p-3">
                                    <div className="mb-1 text-xs font-semibold text-blue-900">EXPLANATION:</div>
                                    <p className="text-sm text-blue-800">{item.explanation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* VOCABULARY TAB */}
                {activeTab === 'vocabulary' && (
                    <div>
                        <div className="mb-6 text-center">
                            <h2 className="mb-2 text-2xl font-bold text-slate-900">Academic Vocabulary</h2>
                            <p className="text-slate-600">Essential words for PPSC preparation</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {academicVocabulary.map((word, index) => (
                                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                                    <h3 className="mb-2 text-lg font-bold text-purple-600">{word.word}</h3>
                                    <p className="mb-3 text-sm text-slate-700">{word.meaning}</p>

                                    {word.synonym && (
                                        <div className="mb-2 text-sm">
                                            <span className="font-semibold text-slate-900">Synonym:</span> {word.synonym}
                                        </div>
                                    )}

                                    {word.antonym && (
                                        <div className="mb-2 text-sm">
                                            <span className="font-semibold text-slate-900">Antonym:</span> {word.antonym}
                                        </div>
                                    )}

                                    <div className="mt-3 rounded-lg bg-slate-50 p-3">
                                        <div className="mb-1 text-xs font-semibold text-slate-700">EXAMPLE:</div>
                                        <p className="text-sm italic text-slate-600">"{word.example}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* IDIOMS TAB */}
                {activeTab === 'idioms' && (
                    <div>
                        <div className="mb-6 text-center">
                            <h2 className="mb-2 text-2xl font-bold text-slate-900">Common Idioms & Phrases</h2>
                            <p className="text-slate-600">Frequently asked in PPSC exams</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {commonIdioms.map((item, index) => (
                                <div key={index} className="rounded-xl border border-purple-200 bg-white p-6">
                                    <div className="mb-3 rounded-lg bg-purple-50 p-3">
                                        <h3 className="font-semibold text-purple-900">{item.idiom}</h3>
                                    </div>

                                    <div className="mb-3">
                                        <span className="text-sm font-semibold text-slate-900">Meaning:</span>
                                        <p className="text-sm text-slate-700">{item.meaning}</p>
                                    </div>

                                    <div className="rounded-lg bg-slate-50 p-3">
                                        <div className="mb-1 text-xs font-semibold text-slate-700">EXAMPLE:</div>
                                        <p className="text-sm italic text-slate-600">"{item.example}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ONE-WORD SUBSTITUTIONS TAB */}
                {activeTab === 'substitutions' && (
                    <div>
                        <div className="mb-6 text-center">
                            <h2 className="mb-2 text-2xl font-bold text-slate-900">One-Word Substitutions</h2>
                            <p className="text-slate-600">Express phrases with single words</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {oneWordSubstitutions.map((item, index) => (
                                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                                    <div className="mb-3 text-sm text-slate-700">{item.phrase}</div>
                                    <div className="rounded-lg bg-emerald-50 p-3">
                                        <div className="text-xs font-semibold text-emerald-900">ANSWER:</div>
                                        <div className="text-lg font-bold text-emerald-700">{item.word}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
