'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    subject: string;
    topic: string;
    explanation: string;
    source?: string;
}

interface ExamData {
    questions: Question[];
}

const subjectMeta: Record<string, { name: string; gradient: string }> = {
    'general-knowledge': { name: 'General Knowledge', gradient: 'from-emerald-600 to-teal-700' },
    'geography': { name: 'Geography', gradient: 'from-blue-600 to-cyan-700' },
    'everyday-science': { name: 'Everyday Science', gradient: 'from-purple-600 to-pink-700' },
    'pakistan-affairs': { name: 'Pakistan Affairs', gradient: 'from-green-600 to-emerald-700' },
    'current-affairs': { name: 'Current Affairs', gradient: 'from-orange-600 to-red-700' },
    'computer': { name: 'Computer', gradient: 'from-cyan-600 to-blue-700' },
    'mathematics': { name: 'Mathematics', gradient: 'from-red-600 to-orange-700' },
    'islamic-studies': { name: 'Islamic Studies', gradient: 'from-teal-600 to-green-700' },
    'urdu': { name: 'Urdu', gradient: 'from-pink-600 to-purple-700' },
};

// Map URL slugs to actual subject names in the data
const subjectNameMap: Record<string, string> = {
    'general-knowledge': 'General Knowledge',
    'geography': 'Geography',
    'everyday-science': 'Everyday Science',
    'pakistan-affairs': 'Pakistan Affairs',
    'current-affairs': 'Current Affairs',
    'computer': 'Computer',
    'mathematics': 'Mathematics',
    'english': 'English',
    'islamic-studies': 'Islamiat',
    'urdu': 'Urdu',
};

export default function SubjectPracticePage({ params }: { params: Promise<{ subject: string }> }) {
    const resolvedParams = use(params);
    const subject = resolvedParams.subject;
    const meta = subjectMeta[subject] || { name: 'Subject', gradient: 'from-gray-600 to-gray-700' };

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                // Load from multiple exam sources
                const examFiles = [
                    '/data/mock-exams/pms-2023.json',
                    '/data/mock-exams/sdeo-pera-2025.json'
                ];

                const allQuestions: Question[] = [];

                for (const file of examFiles) {
                    try {
                        const response = await fetch(file);
                        const data: ExamData = await response.json();
                        // Add source info to each question
                        const questionsWithSource = data.questions.map(q => ({
                            ...q,
                            source: file.includes('pms-2023') ? 'PMS 2023' : 'SDEO PERA 2025'
                        }));
                        allQuestions.push(...questionsWithSource);
                    } catch {
                        console.warn(`Failed to load ${file}`);
                    }
                }

                // Filter questions by subject
                const subjectName = subjectNameMap[subject];
                const filtered = allQuestions.filter(q => q.subject === subjectName);

                // Deduplicate by question text and assign unique IDs
                const unique = filtered.reduce((acc, q, idx) => {
                    if (!acc.some(existing => existing.question === q.question)) {
                        acc.push({ ...q, id: idx + 1 });
                    }
                    return acc;
                }, [] as Question[]);

                setQuestions(unique);
                setLoading(false);
            } catch {
                console.error('Failed to load questions');
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [subject]);

    const currentQuestion = questions[currentIndex];
    const isAnswered = selectedAnswer !== null;
    const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

    const handleAnswer = (optionIndex: number) => {
        if (isAnswered) return;
        setSelectedAnswer(optionIndex);
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(answers[questions[currentIndex + 1]?.id] ?? null);
            setShowExplanation(false);
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setSelectedAnswer(answers[questions[currentIndex - 1]?.id] ?? null);
            setShowExplanation(false);
        }
    };

    const resetPractice = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswers({});
    };

    // Calculate stats
    const answeredCount = Object.keys(answers).length;
    const correctCount = Object.entries(answers).filter(([id, ans]) => {
        const q = questions.find(q => q.id === parseInt(id));
        return q && q.correctAnswer === ans;
    }).length;

    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-gray-600">Loading questions...</div>
            </main>
        );
    }

    if (questions.length === 0) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">No Questions Found</h1>
                    <p className="text-gray-600 mb-6">No MCQs available for this subject yet.</p>
                    <Link href="/mcq-bank" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        ← Back to MCQ Bank
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Header */}
            <div className={`bg-gradient-to-r ${meta.gradient} text-white py-6`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/mcq-bank" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to MCQ Bank</span>
                    </Link>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">{meta.name} MCQs</h1>
                            <p className="text-white/80">
                                Question {currentIndex + 1} of {questions.length}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold">{answeredCount}</div>
                                <div className="text-xs text-white/70">Attempted</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-300">{correctCount}</div>
                                <div className="text-xs text-white/70">Correct</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Question */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
                    {/* Topic Badge */}
                    <div className="mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                            {currentQuestion.topic}
                        </span>
                    </div>

                    {/* Question Text */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                        {currentQuestion.question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-3">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = selectedAnswer === idx;
                            const isCorrectOption = idx === currentQuestion.correctAnswer;

                            let buttonClass = 'w-full text-left p-4 rounded-xl border-2 transition-all ';

                            if (isAnswered) {
                                if (isCorrectOption) {
                                    buttonClass += 'bg-green-50 border-green-500 text-green-800';
                                } else if (isSelected && !isCorrectOption) {
                                    buttonClass += 'bg-red-50 border-red-500 text-red-800';
                                } else {
                                    buttonClass += 'bg-gray-50 border-gray-200 text-gray-500';
                                }
                            } else {
                                buttonClass += 'bg-white border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer';
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={isAnswered}
                                    className={buttonClass}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isAnswered
                                            ? isCorrectOption
                                                ? 'bg-green-500 text-white'
                                                : isSelected
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                            : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {isAnswered && isCorrectOption ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : isAnswered && isSelected && !isCorrectOption ? (
                                                <XCircle className="w-5 h-5" />
                                            ) : (
                                                <span className="font-semibold">{String.fromCharCode(65 + idx)}</span>
                                            )}
                                        </div>
                                        <span className="font-medium pt-1">{option}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Explanation */}
                {isAnswered && (
                    <div className={`mb-6 rounded-2xl p-6 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-amber-50 border-2 border-amber-200'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                {isCorrect ? (
                                    <>
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <span className="font-bold text-green-800">Correct!</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-6 h-6 text-amber-600" />
                                        <span className="font-bold text-amber-800">Incorrect</span>
                                    </>
                                )}
                            </div>
                            <button
                                onClick={() => setShowExplanation(!showExplanation)}
                                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
                            >
                                {showExplanation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                {showExplanation ? 'Hide' : 'Show'} Explanation
                            </button>
                        </div>

                        {showExplanation && (
                            <div className="text-gray-700 leading-relaxed">
                                <p><strong>Correct Answer:</strong> {currentQuestion.options[currentQuestion.correctAnswer]}</p>
                                <p className="mt-2">{currentQuestion.explanation}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={prevQuestion}
                        disabled={currentIndex === 0}
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Previous
                    </button>

                    <button
                        onClick={resetPractice}
                        className="flex items-center gap-2 px-4 py-2 text-orange-600 hover:text-orange-700"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>

                    <button
                        onClick={nextQuestion}
                        disabled={currentIndex === questions.length - 1}
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Question Summary */}
                {answeredCount === questions.length && (
                    <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">🎉 Practice Complete!</h3>
                        <p className="text-emerald-50 mb-4">
                            You scored {correctCount} out of {questions.length} ({Math.round((correctCount / questions.length) * 100)}%)
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={resetPractice}
                                className="px-6 py-2 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50"
                            >
                                Practice Again
                            </button>
                            <Link
                                href="/mcq-bank"
                                className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700"
                            >
                                Try Another Subject
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
