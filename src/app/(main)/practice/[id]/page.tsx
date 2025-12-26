'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface ExamData {
    id: string;
    title: string;
    duration: number;
    totalQuestions: number;
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

export default function ExamPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [examData, setExamData] = useState<ExamData | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [showSubmitDialog, setShowSubmitDialog] = useState(false);

    // Load exam data
    useEffect(() => {
        fetch(`/data/mock-exams/${params.id}.json`)
            .then(res => res.json())
            .then(data => {
                setExamData(data);
                setTimeRemaining(data.duration * 60);
            })
            .catch(err => console.error('Failed to load exam:', err));
    }, [params.id]);

    // Timer
    useEffect(() => {
        if (!examData || timeRemaining <= 0) return;

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [examData, timeRemaining]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const selectAnswer = (questionId: number, answerIndex: number) => {
        setAnswers({ ...answers, [questionId]: answerIndex });
    };

    const handleSubmit = () => {
        if (!examData) return;

        const results = {
            examId: params.id,
            answers,
            totalQuestions: examData.totalQuestions,
            timeSpent: examData.duration * 60 - timeRemaining
        };
        localStorage.setItem('exam-results', JSON.stringify(results));
        router.push(`/practice/${params.id}/results`);
    };

    if (!examData) {
        return (
            <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Loading exam...</div>
                    <p className="text-gray-600">Please wait</p>
                </div>
            </div>
        );
    }

    const question = examData.questions[currentQuestion];
    const progress = ((Object.keys(answers).length / examData.totalQuestions) * 100).toFixed(0);

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Top Bar - Timer & Progress */}
            <div className="fixed top-16 left-0 right-0 bg-white border-b-2 border-gray-200 z-40">
                <div className="max-w-5xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Timer */}
                        <div className="flex items-center gap-2">
                            <Clock className={`w-5 h-5 ${timeRemaining < 300 ? 'text-red-600' : 'text-emerald-700'}`} />
                            <span className={`font-mono font-bold ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-900'}`}>
                                {formatTime(timeRemaining)}
                            </span>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center gap-3">
                            <div className="text-sm text-gray-600">
                                {Object.keys(answers).length} / {examData.totalQuestions} answered
                            </div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-600 transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={() => setShowSubmitDialog(true)}
                            className="px-6 py-2 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-colors"
                        >
                            Submit Exam
                        </button>
                    </div>
                </div>
            </div>

            {/* Question Content */}
            <div className="max-w-5xl mx-auto px-4 py-8 mt-20">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                    {/* Question Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                Question {currentQuestion + 1} of {examData.totalQuestions}
                            </span>
                            <div className="mt-2 text-sm text-gray-600">
                                <span className="font-semibold">{question.subject}</span> • {question.topic}
                            </div>
                        </div>
                        {answers[question.id] !== undefined && (
                            <CheckCircle className="w-6 h-6 text-emerald-600" />
                        )}
                    </div>

                    {/* Question */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        {question.question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-4 mb-8">
                        {question.options.map((option, idx) => {
                            const isSelected = answers[question.id] === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => selectAnswer(question.id, idx)}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isSelected
                                            ? 'border-emerald-500 bg-emerald-50'
                                            : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${isSelected
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-gray-200 text-gray-700'
                                            }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className={isSelected ? 'text-emerald-900 font-medium' : 'text-gray-900'}>
                                            {option}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
                        <button
                            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                            disabled={currentQuestion === 0}
                            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span className="font-semibold">Previous</span>
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: Math.min(10, examData.totalQuestions) }, (_, i) => {
                                const questionNum = Math.floor((currentQuestion / 10)) * 10 + i;
                                if (questionNum >= examData.totalQuestions) return null;

                                return (
                                    <button
                                        key={questionNum}
                                        onClick={() => setCurrentQuestion(questionNum)}
                                        className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all ${questionNum === currentQuestion
                                                ? 'bg-emerald-700 text-white'
                                                : answers[examData.questions[questionNum].id] !== undefined
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {questionNum + 1}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentQuestion(Math.min(examData.totalQuestions - 1, currentQuestion + 1))}
                            disabled={currentQuestion === examData.totalQuestions - 1}
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <span>Next</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Submit Confirmation Dialog */}
            {showSubmitDialog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Exam?</h3>
                        <p className="text-gray-700 mb-6">
                            You have answered {Object.keys(answers).length} out of {examData.totalQuestions} questions.
                            {Object.keys(answers).length < examData.totalQuestions && (
                                <span className="block mt-2 text-amber-700 font-semibold">
                                    Warning: {examData.totalQuestions - Object.keys(answers).length} questions are unanswered.
                                </span>
                            )}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowSubmitDialog(false)}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Continue Exam
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex-1 px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition-colors"
                            >
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
