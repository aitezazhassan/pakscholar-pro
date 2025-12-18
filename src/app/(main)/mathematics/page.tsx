'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, ChevronRight, Check, X, BookOpen, Award, TrendingUp } from 'lucide-react';
import { arithmeticProblems, mathTopics } from '@/lib/mathData/arithmetic-problems';

export default function MathematicsPage() {
    const [selectedTopic, setSelectedTopic] = useState<string>('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showSolution, setShowSolution] = useState(false);
    const [mode, setMode] = useState<'browse' | 'practice'>('browse');
    const [score, setScore] = useState(0);

    // Filter problems
    const filteredProblems = arithmeticProblems.filter(problem => {
        const topicMatch = selectedTopic === 'all' || problem.subtopic === selectedTopic;
        const difficultyMatch = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
        return topicMatch && difficultyMatch;
    });

    const currentProblem = filteredProblems[currentProblemIndex];

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);
        setShowSolution(true);
        if (answer === currentProblem.correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextProblem = () => {
        if (currentProblemIndex < filteredProblems.length - 1) {
            setCurrentProblemIndex(currentProblemIndex + 1);
            setSelectedAnswer(null);
            setShowSolution(false);
        }
    };

    const resetPractice = () => {
        setCurrentProblemIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowSolution(false);
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

                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-blue-600 p-3">
                            <Calculator className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">Mathematics</h1>
                            <p className="mt-1 text-slate-600">Master mathematical concepts for PPSC exams</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Total Problems</div>
                            <div className="mt-1 text-2xl font-bold text-blue-600">{arithmeticProblems.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Topics</div>
                            <div className="mt-1 text-2xl font-bold text-emerald-600">{mathTopics.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Your Score</div>
                            <div className="mt-1 text-2xl font-bold text-purple-600">{score}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Accuracy</div>
                            <div className="mt-1 text-2xl font-bold text-amber-600">
                                {currentProblemIndex > 0 ? Math.round((score / currentProblemIndex) * 100) : 0}%
                            </div>
                        </div>
                    </div>

                    {/* Mode Toggle */}
                    <div className="mt-6 flex gap-2">
                        <button
                            onClick={() => setMode('browse')}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${mode === 'browse'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <BookOpen className="h-4 w-4" />
                            Browse Problems
                        </button>
                        <button
                            onClick={() => { setMode('practice'); resetPractice(); }}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${mode === 'practice'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <Award className="h-4 w-4" />
                            Practice Mode
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-4">
                    {/* Sidebar - Filters */}
                    <div className="space-y-6">
                        {/* Topic Filter */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 font-semibold text-slate-900">Topics</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedTopic('all')}
                                    className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedTopic === 'all'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    All Topics ({arithmeticProblems.length})
                                </button>
                                {mathTopics.map((topic) => (
                                    <button
                                        key={topic.name}
                                        onClick={() => setSelectedTopic(topic.name)}
                                        className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedTopic === topic.name
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {topic.name} ({topic.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Difficulty Filter */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 font-semibold text-slate-900">Difficulty</h3>
                            <div className="space-y-2">
                                {['all', 'Easy', 'Medium', 'Hard'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedDifficulty(level)}
                                        className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedDifficulty === level
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {level === 'all' ? 'All Levels' : level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Formula Reference */}
                        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                            <h3 className="mb-2 text-sm font-semibold text-blue-900">Quick Formula</h3>
                            {currentProblem?.formula && (
                                <p className="text-xs text-blue-700">{currentProblem.formula}</p>
                            )}
                        </div>
                    </div>

                    {/* Main Problem Area */}
                    <div className="lg:col-span-3">
                        {filteredProblems.length > 0 ? (
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                {/* Problem Header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <span className="text-sm text-slate-600">
                                            Problem {currentProblemIndex + 1} of {filteredProblems.length}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${currentProblem.difficulty === 'Easy' ? 'bg-green-100 text-green-900' :
                                                currentProblem.difficulty === 'Medium' ? 'bg-amber-100 text-amber-900' :
                                                    'bg-red-100 text-red-900'
                                            }`}>
                                            {currentProblem.difficulty}
                                        </span>
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900">
                                            {currentProblem.subtopic}
                                        </span>
                                    </div>
                                </div>

                                {/* Question */}
                                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                                    {currentProblem.question}
                                </h3>

                                {/* Options (if MCQ) */}
                                {currentProblem.options && (
                                    <div className="mb-6 space-y-3">
                                        {currentProblem.options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => !selectedAnswer && handleAnswer(option)}
                                                disabled={selectedAnswer !== null}
                                                className={`flex w-full items-center justify-between rounded-lg p-4 text-left transition-all ${selectedAnswer === null
                                                        ? 'bg-slate-50 hover:bg-slate-100'
                                                        : option === currentProblem.correctAnswer
                                                            ? 'bg-green-100 ring-2 ring-green-500'
                                                            : option === selectedAnswer
                                                                ? 'bg-red-100 ring-2 ring-red-500'
                                                                : 'bg-slate-50 opacity-50'
                                                    }`}
                                            >
                                                <span className="font-medium">{option}</span>
                                                {selectedAnswer && option === currentProblem.correctAnswer && (
                                                    <Check className="h-5 w-5 text-green-600" />
                                                )}
                                                {selectedAnswer && option === selectedAnswer && option !== currentProblem.correctAnswer && (
                                                    <X className="h-5 w-5 text-red-600" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Show Solution Button */}
                                {!showSolution && (
                                    <button
                                        onClick={() => setShowSolution(true)}
                                        className="mb-6 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                                    >
                                        Show Solution
                                    </button>
                                )}

                                {/* Solution */}
                                {showSolution && (
                                    <div className="mb-6 rounded-lg bg-blue-50 p-4">
                                        <h4 className="mb-2 text-sm font-semibold text-blue-900">Solution:</h4>
                                        <pre className="whitespace-pre-wrap text-sm text-blue-800">
                                            {currentProblem.solution}
                                        </pre>
                                        {currentProblem.formula && (
                                            <div className="mt-3 border-t border-blue-200 pt-3">
                                                <span className="text-xs font-semibold text-blue-900">Formula: </span>
                                                <span className="text-xs text-blue-700">{currentProblem.formula}</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Navigation */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => {
                                            if (currentProblemIndex > 0) {
                                                setCurrentProblemIndex(currentProblemIndex - 1);
                                                setSelectedAnswer(null);
                                                setShowSolution(false);
                                            }
                                        }}
                                        disabled={currentProblemIndex === 0}
                                        className="rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={nextProblem}
                                        disabled={currentProblemIndex === filteredProblems.length - 1}
                                        className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        Next Problem
                                    </button>
                                </div>

                                {/* Completion Message */}
                                {currentProblemIndex === filteredProblems.length - 1 && showSolution && (
                                    <div className="mt-6 rounded-lg bg-green-50 p-6 text-center">
                                        <Award className="mx-auto mb-3 h-12 w-12 text-green-600" />
                                        <h4 className="mb-2 text-xl font-bold text-green-900">Section Complete!</h4>
                                        <p className="text-green-700">
                                            You've completed all {filteredProblems.length} problems in this section.
                                        </p>
                                        <button
                                            onClick={resetPractice}
                                            className="mt-4 rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
                                        >
                                            Practice Again
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
                                <p className="text-slate-600">No problems found for selected filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
