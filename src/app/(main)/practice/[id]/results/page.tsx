'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { Award, CheckCircle, XCircle, Home, RefreshCw } from 'lucide-react';

interface ExamData {
    id: string;
    title: string;
    duration: number;
    totalQuestions: number;
    passingScore: number;
    questions: Array<{
        id: number;
        question: string;
        options: string[];
        correctAnswer: number;
        subject: string;
        topic: string;
        explanation: string;
    }>;
}

interface Results {
    examId: string;
    answers: Record<number, number>;
    totalQuestions: number;
    timeSpent: number;
}

export default function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [examData, setExamData] = useState<ExamData | null>(null);
    const [results, setResults] = useState<Results | null>(null);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('exam-results');
        if (stored) {
            setResults(JSON.parse(stored));
        }

        fetch(`/data/mock-exams/${params.id}.json`)
            .then(res => res.json())
            .then(data => setExamData(data))
            .catch(err => console.error('Failed to load exam:', err));
    }, [params.id]);

    if (!results || !examData) {
        return (
            <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Loading results...</p>
                </div>
            </div>
        );
    }

    // Calculate score
    let correctAnswers = 0;
    let unanswered = 0;
    const subjectScores: Record<string, { correct: number; total: number }> = {};

    examData.questions.forEach((q) => {
        const userAnswer = results.answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;

        if (userAnswer === undefined) {
            unanswered++;
        } else if (isCorrect) {
            correctAnswers++;
        }

        // Track by subject
        if (!subjectScores[q.subject]) {
            subjectScores[q.subject] = { correct: 0, total: 0 };
        }
        subjectScores[q.subject].total++;
        if (isCorrect) {
            subjectScores[q.subject].correct++;
        }
    });

    const score = ((correctAnswers / results.totalQuestions) * 100).toFixed(2);
    const passed = correctAnswers >= examData.passingScore;

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className={`border-b-4 ${passed ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-500' : 'bg-gradient-to-br from-gray-50 to-white border-gray-400'}`}>
                <div className="max-w-5xl mx-auto px-4 py-12 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? 'bg-emerald-600' : 'bg-gray-600'}`}>
                        <Award className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {passed ? '🎉 Congratulations!' : 'Keep Practicing!'}
                    </h1>
                    <p className="text-lg text-gray-700">
                        {examData.title} - Results
                    </p>
                </div>
            </div>

            {/* DMC - Detailed Marks Card */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Score Overview */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className={`rounded-2xl p-6 text-center border-2 ${passed ? 'bg-emerald-50 border-emerald-500' : 'bg-gray-50 border-gray-300'}`}>
                        <div className={`text-4xl font-bold mb-2 ${passed ? 'text-emerald-700' : 'text-gray-700'}`}>
                            {score}%
                        </div>
                        <div className="text-sm text-gray-600">Your Score</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                            {correctAnswers}
                        </div>
                        <div className="text-sm text-gray-600">Correct</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200">
                        <div className="text-4xl font-bold text-red-600 mb-2">
                            {results.totalQuestions - correctAnswers - unanswered}
                        </div>
                        <div className="text-sm text-gray-600">Incorrect</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200">
                        <div className="text-4xl font-bold text-gray-600 mb-2">
                            {unanswered}
                        </div>
                        <div className="text-sm text-gray-600">Unanswered</div>
                    </div>
                </div>

                {/* Subject Wise Breakdown */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Subject-wise Performance</h2>
                    <div className="space-y-4">
                        {Object.entries(subjectScores).map(([subject, scores]) => {
                            const percentage = ((scores.correct / scores.total) * 100).toFixed(0);
                            return (
                                <div key={subject} className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-gray-900">{subject}</span>
                                            <span className="text-sm text-gray-600">
                                                {scores.correct}/{scores.total} ({percentage}%)
                                            </span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-600 transition-all duration-500"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Time Stats */}
                <div className="bg-emerald-50 rounded-2xl border-2 border-emerald-100 p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Time Spent</div>
                            <div className="text-2xl font-bold text-emerald-900">{formatTime(results.timeSpent)}</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Total Duration</div>
                            <div className="text-2xl font-bold text-gray-900">{examData.duration} minutes</div>
                        </div>
                    </div>
                </div>

                {/* Toggle Answers Button */}
                <div className="text-center mb-8">
                    <button
                        onClick={() => setShowAnswers(!showAnswers)}
                        className="px-8 py-4 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg"
                    >
                        {showAnswers ? 'Hide Detailed Answers' : 'View Detailed Answers'}
                    </button>
                </div>

                {/* Detailed Answers */}
                {showAnswers && (
                    <div className="space-y-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Answer Key with Explanations</h2>
                        {examData.questions.map((q, idx) => {
                            const userAnswer = results.answers[q.id];
                            const isCorrect = userAnswer === q.correctAnswer;
                            const wasAnswered = userAnswer !== undefined;

                            return (
                                <div key={q.id} className={`rounded-2xl border-2 p-6 ${!wasAnswered ? 'bg-gray-50 border-gray-300' :
                                    isCorrect ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'
                                    }`}>
                                    {/* Question Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <span className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full">
                                                Question {idx + 1}
                                            </span>
                                            <div className="mt-2 text-sm text-gray-600">
                                                <span className="font-semibold">{q.subject}</span> • {q.topic}
                                            </div>
                                        </div>
                                        {wasAnswered && (
                                            isCorrect ?
                                                <CheckCircle className="w-6 h-6 text-green-600" /> :
                                                <XCircle className="w-6 h-6 text-red-600" />
                                        )}
                                    </div>

                                    {/* Question */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{q.question}</h3>

                                    {/* Options */}
                                    <div className="space-y-2 mb-4">
                                        {q.options.map((option, optIdx) => {
                                            const isUserAnswer = userAnswer === optIdx;
                                            const isCorrectOption = optIdx === q.correctAnswer;

                                            return (
                                                <div
                                                    key={optIdx}
                                                    className={`p-3 rounded-lg border-2 ${isCorrectOption ? 'bg-green-50 border-green-500' :
                                                        isUserAnswer && !isCorrect ? 'bg-red-50 border-red-500' :
                                                            'bg-white border-gray-200'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrectOption ? 'bg-green-600 text-white' :
                                                            isUserAnswer && !isCorrect ? 'bg-red-600 text-white' :
                                                                'bg-gray-200 text-gray-700'
                                                            }`}>
                                                            {String.fromCharCode(65 + optIdx)}
                                                        </span>
                                                        <span className="text-gray-900">{option}</span>
                                                        {isCorrectOption && (
                                                            <span className="ml-auto text-xs font-semibold text-green-600">✓ Correct</span>
                                                        )}
                                                        {isUserAnswer && !isCorrect && (
                                                            <span className="ml-auto text-xs font-semibold text-red-600">✗ Your Answer</span>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Explanation */}
                                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                                        <div className="flex items-start gap-2">
                                            <span className="font-semibold text-emerald-900 text-sm">Explanation:</span>
                                            <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center pt-8 border-t-2 border-gray-200">
                    <Link
                        href="/practice"
                        className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Practice</span>
                    </Link>

                    <Link
                        href={`/practice/${params.id}`}
                        className="flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg"
                    >
                        <RefreshCw className="w-5 h-5" />
                        <span>Retake Exam</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
