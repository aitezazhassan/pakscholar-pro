'use client';

import { useState } from 'react';
import PakistanMap from '@/components/maps/PakistanMap';
import Link from 'next/link';
import { ArrowLeft, MapPin, Award, BookOpen, ChevronRight, Check, X, Clock, TrendingUp, Book } from 'lucide-react';
import {
    detailedProvinceStats,
    pakistanTimeline,
    comprehensiveFacts
} from '@/lib/mapData/comprehensive-data';
import {
    quizByCategory,
    quizStats
} from '@/lib/mapData/complete-quiz-bank';

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState<'explore' | 'learn' | 'quiz' | 'timeline' | 'facts'>('explore');
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [quizCategory, setQuizCategory] = useState<keyof typeof quizByCategory>('all');
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [factFilter, setFactFilter] = useState<'all' | 'Geography' | 'Population' | 'Water' | 'Mountains' | 'Economy'>('all');

    const currentQuizSet = quizByCategory[quizCategory];
    const currentQuestion = currentQuizSet[quizIndex];
    const filteredFacts = factFilter === 'all'
        ? comprehensiveFacts
        : comprehensiveFacts.filter(f => f.category === factFilter);

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);
        setShowExplanation(true);
        if (answer === currentQuestion.correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (quizIndex < currentQuizSet.length - 1) {
            setQuizIndex(quizIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-blue-600 p-3">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-semibold text-slate-900">Geography Learning Lab</h1>
                                <p className="mt-1 text-slate-600">Comprehensive Pakistan geography resource</p>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('explore')}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === 'explore'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <MapPin className="h-4 w-4" />
                            Interactive Map
                        </button>
                        <button
                            onClick={() => setActiveTab('learn')}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === 'learn'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <BookOpen className="h-4 w-4" />
                            Province Data
                        </button>
                        <button
                            onClick={() => setActiveTab('quiz')}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === 'quiz'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <Award className="h-4 w-4" />
                            Quiz ({quizStats.total} Qs)
                        </button>
                        <button
                            onClick={() => setActiveTab('timeline')}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === 'timeline'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <Clock className="h-4 w-4" />
                            Timeline
                        </button>
                        <button
                            onClick={() => setActiveTab('facts')}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === 'facts'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <Book className="h-4 w-4" />
                            Facts (100+)
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* EXPLORE TAB */}
                {activeTab === 'explore' && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <PakistanMap showCities={true} showProvinces={true} selectedProvince={selectedProvince} />
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 font-semibold text-slate-900">Select Province</h3>
                                <div className="space-y-2">
                                    {Object.entries(detailedProvinceStats).map(([key, province]) => (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedProvince(key === selectedProvince ? null : key)}
                                            className={`group flex w-full items-center justify-between rounded-lg p-3 text-left transition-all ${selectedProvince === key
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                                }`}
                                        >
                                            <span className="font-medium">{province.name}</span>
                                            <ChevronRight className="h-4 w-4" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedProvince && (
                                <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                                    <h3 className="mb-4 text-lg font-bold text-blue-900">
                                        {detailedProvinceStats[selectedProvince as keyof typeof detailedProvinceStats].name}
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        {Object.entries(detailedProvinceStats[selectedProvince as keyof typeof detailedProvinceStats])
                                            .filter(([key]) => !['name', 'economy', 'majorCities', 'majorCrops', 'industries', 'languages', 'historicalSites'].includes(key))
                                            .map(([key, value]) => (
                                                <div key={key} className="flex justify-between border-b border-blue-100 pb-1">
                                                    <span className="font-medium text-blue-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                    <span className="font-bold text-blue-900">{value as string}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* LEARN TAB */}
                {activeTab === 'learn' && (
                    <div className="grid gap-6 md:grid-cols-2">
                        {Object.entries(detailedProvinceStats).map(([key, province]) => (
                            <div key={key} className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 text-2xl font-bold text-slate-900">{province.name}</h3>

                                {/* Stats Grid */}
                                <div className="mb-6 grid grid-cols-2 gap-3">
                                    <div className="rounded-lg bg-emerald-50 p-3">
                                        <div className="text-xs text-emerald-700">Area</div>
                                        <div className="font-bold text-emerald-900">{province.area}</div>
                                    </div>
                                    <div className="rounded-lg bg-blue-50 p-3">
                                        <div className="text-xs text-blue-700">Population</div>
                                        <div className="font-bold text-blue-900">{province.population}</div>
                                    </div>
                                    <div className="rounded-lg bg-purple-50 p-3">
                                        <div className="text-xs text-purple-700">Literacy</div>
                                        <div className="font-bold text-purple-900">{province.literacy}</div>
                                    </div>
                                    <div className="rounded-lg bg-amber-50 p-3">
                                        <div className="text-xs text-amber-700">GDP Share</div>
                                        <div className="font-bold text-amber-900">{province.gdp}</div>
                                    </div>
                                </div>

                                {/* Major Cities */}
                                <div className="mb-4">
                                    <div className="mb-2 text-xs font-semibold text-slate-700">Major Cities</div>
                                    <div className="flex flex-wrap gap-2">
                                        {province.majorCities.map((city, idx) => (
                                            <span key={idx} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Industries */}
                                <div>
                                    <div className="mb-2 text-xs font-semibold text-slate-700">Industries</div>
                                    <div className="flex flex-wrap gap-2">
                                        {province.industries.map((industry, idx) => (
                                            <span key={idx} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-900">
                                                {industry}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* QUIZ TAB */}
                {activeTab === 'quiz' && (
                    <div className="mx-auto max-w-2xl">
                        {/* Category Selector */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            {['all', 'geography', 'cities', 'economy', 'history', 'constitution'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => { setQuizCategory(cat as any); resetQuiz(); }}
                                    className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all ${quizCategory === cat
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {cat} ({quizByCategory[cat as keyof typeof quizByCategory].length})
                                </button>
                            ))}
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="text-sm text-slate-600">
                                    Question {quizIndex + 1} of {currentQuizSet.length}
                                </div>
                                <div className="text-lg font-bold text-blue-600">
                                    Score: {score}/{currentQuizSet.length}
                                </div>
                            </div>

                            <div className="mb-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                {currentQuestion.category}
                            </div>
                            <h3 className="mb-6 text-xl font-semibold text-slate-900">{currentQuestion.question}</h3>

                            <div className="space-y-3">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => !selectedAnswer && handleAnswer(option)}
                                        disabled={selectedAnswer !== null}
                                        className={`flex w-full items-center justify-between rounded-lg p-4 text-left transition-all ${selectedAnswer === null
                                            ? 'bg-slate-50 hover:bg-slate-100'
                                            : option === currentQuestion.correct
                                                ? 'bg-green-100 ring-2 ring-green-500'
                                                : option === selectedAnswer
                                                    ? 'bg-red-100 ring-2 ring-red-500'
                                                    : 'bg-slate-50 opacity-50'
                                            }`}
                                    >
                                        <span className="font-medium">{option}</span>
                                        {selectedAnswer && option === currentQuestion.correct && <Check className="h-5 w-5 text-green-600" />}
                                        {selectedAnswer && option === selectedAnswer && option !== currentQuestion.correct && <X className="h-5 w-5 text-red-600" />}
                                    </button>
                                ))}
                            </div>

                            {showExplanation && (
                                <div className="mt-6 rounded-lg bg-blue-50 p-4">
                                    <div className="mb-1 text-sm font-semibold text-blue-900">Explanation:</div>
                                    <p className="text-sm text-blue-800">{currentQuestion.explanation}</p>
                                </div>
                            )}

                            {showExplanation && quizIndex < currentQuizSet.length - 1 && (
                                <button
                                    onClick={nextQuestion}
                                    className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                                >
                                    Next Question
                                </button>
                            )}

                            {showExplanation && quizIndex === currentQuizSet.length - 1 && (
                                <div className="mt-6 rounded-lg bg-green-50 p-6 text-center">
                                    <Award className="mx-auto mb-3 h-12 w-12 text-green-600" />
                                    <h4 className="mb-2 text-xl font-bold text-green-900">Quiz Complete!</h4>
                                    <p className="text-lg text-green-700">
                                        Score: <span className="font-bold">{score}/{currentQuizSet.length}</span>
                                        {' '}({Math.round((score / currentQuizSet.length) * 100)}%)
                                    </p>
                                    <button
                                        onClick={resetQuiz}
                                        className="mt-4 rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
                                    >
                                        Retake Quiz
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* TIMELINE TAB */}
                {activeTab === 'timeline' && (
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-slate-900">Pakistan Historical Timeline</h2>
                            <p className="text-slate-600">{pakistanTimeline.length} major events</p>
                        </div>
                        <div className="space-y-4">
                            {pakistanTimeline.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${item.importance === 'Critical' ? 'bg-red-600' : 'bg-blue-600'
                                            }`}>
                                            {item.year}
                                        </div>
                                        {index < pakistanTimeline.length - 1 && <div className="w-0.5 flex-1 bg-slate-200" />}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <div className="rounded-lg border border-slate-200 bg-white p-4">
                                            <div className="mb-1 flex items-center gap-2">
                                                <span className="text-xs font-semibold text-blue-600">{item.category}</span>
                                                <span className={`text-xs font-semibold ${item.importance === 'Critical' ? 'text-red-600' : 'text-amber-600'
                                                    }`}>
                                                    {item.importance}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-slate-900">{item.event}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FACTS TAB */}
                {activeTab === 'facts' && (
                    <div>
                        {/* Filter */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            {['all', 'Geography', 'Population', 'Water', 'Mountains', 'Economy'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setFactFilter(filter as any)}
                                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${factFilter === filter
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {filteredFacts.map((fact, index) => (
                                <div key={index} className="rounded-lg border border-slate-200 bg-white p-4">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-blue-600">{fact.category}</span>
                                        <span className={`text-xs font-semibold ${fact.difficulty === 'Basic' ? 'text-green-600' :
                                            fact.difficulty === 'Intermediate' ? 'text-amber-600' :
                                                'text-red-600'
                                            }`}>
                                            {fact.difficulty}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-700">{fact.fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
