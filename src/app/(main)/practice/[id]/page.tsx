'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, List, Maximize2, X, Grid3x3 } from 'lucide-react';
import Link from 'next/link';
import { Swipeable } from '@/components/mobile/Swipeable';
import { BottomSheet } from '@/components/mobile/BottomSheet';
import { TouchButton } from '@/components/mobile/TouchButton';

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

export default function ExamPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;
    const [examData, setExamData] = useState<ExamData | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [showSubmitDialog, setShowSubmitDialog] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showQuestionSheet, setShowQuestionSheet] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Load exam data
    useEffect(() => {
        if (!id) {
            setError('No exam ID provided');
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`/data/mock-exams/${id}.json`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to load exam: ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                if (!data || !data.questions || data.questions.length === 0) {
                    throw new Error('Invalid exam data: No questions found');
                }
                setExamData(data);
                setTimeRemaining(data.duration * 60);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load exam:', err);
                setError(err.message || 'Failed to load exam data');
                setLoading(false);
            });
    }, [id]);

    // Timer
    useEffect(() => {
        if (!examData || timeRemaining <= 0) return;

        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [examData, timeRemaining]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const selectAnswer = (questionId: number, answerIndex: number) => {
        setAnswers({ ...answers, [questionId]: answerIndex });
    };

    const handleSubmit = () => {
        if (!examData) return;

        const results = {
            examId: id,
            answers,
            totalQuestions: examData.questions.length,
            timeSpent: examData.duration * 60 - timeRemaining
        };
        localStorage.setItem('exam-results', JSON.stringify(results));
        router.push(`/practice/${id}/results`);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleSwipeLeft = () => {
        if (examData && currentQuestion < examData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const goToQuestion = (index: number) => {
        setCurrentQuestion(index);
        setShowQuestionSheet(false);
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <div className="text-xl font-bold text-gray-900 mb-2">Loading exam...</div>
                    <p className="text-gray-600">Please wait</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
                <div className="max-w-md text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to Load Exam</h2>
                    <p className="text-gray-600 mb-8">{error}</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/practice">
                            <TouchButton>Back to Exams</TouchButton>
                        </Link>
                        <TouchButton variant="outline" onClick={() => window.location.reload()}>
                            Try Again
                        </TouchButton>
                    </div>
                </div>
            </div>
        );
    }

    // Exam not found
    if (!examData) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Exam not found</div>
                    <p className="text-gray-600 mb-6">The requested exam could not be loaded</p>
                    <Link href="/practice">
                        <TouchButton>Back to Exams</TouchButton>
                    </Link>
                </div>
            </div>
        );
    }

    // Safety check: ensure currentQuestion is within bounds
    if (currentQuestion >= examData.questions.length) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
                <div className="max-w-md text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Question Not Found</h2>
                    <p className="text-gray-600 mb-8">
                        The exam has {examData.questions.length} questions, but you're trying to access question {currentQuestion + 1}.
                    </p>
                    <Link href="/practice">
                        <TouchButton>Back to Exams</TouchButton>
                    </Link>
                </div>
            </div>
        );
    }

    const question = examData.questions[currentQuestion];

    // Additional safety check for the question object
    if (!question) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
                <div className="max-w-md text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Question</h2>
                    <p className="text-gray-600 mb-8">
                        Question {currentQuestion + 1} could not be loaded.
                    </p>
                    <Link href="/practice">
                        <TouchButton>Back to Exams</TouchButton>
                    </Link>
                </div>
            </div>
        );
    }

    const progress = ((Object.keys(answers).length / examData.questions.length) * 100).toFixed(0);
    const isAnswered = answers[question.id] !== undefined;

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 safe-bottom">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 safe-top">
                <div className="px-4 py-3">
                    {/* Top Row - Timer & Actions */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${timeRemaining < 300 ? 'bg-red-100' : 'bg-emerald-100'
                                }`}>
                                <Clock className={`w-4 h-4 ${timeRemaining < 300 ? 'text-red-600' : 'text-emerald-700'}`} />
                                <span className={`font-mono font-bold text-sm ${timeRemaining < 300 ? 'text-red-600' : 'text-emerald-700'
                                    }`}>
                                    {formatTime(timeRemaining)}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowQuestionSheet(true)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-target"
                            >
                                <Grid3x3 className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={toggleFullscreen}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-target hidden md:block"
                            >
                                <Maximize2 className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>Question {currentQuestion + 1} of {examData.questions.length}</span>
                            <span>{Object.keys(answers).length} answered</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Question Content - Swipeable */}
            <Swipeable
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
                className="pt-32 pb-24 px-4"
            >
                <div className="max-w-2xl mx-auto">
                    {/* Subject Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                            {question.subject}
                        </span>
                        <span className="text-sm text-gray-600">• {question.topic}</span>
                        {isAnswered && (
                            <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                        )}
                    </div>

                    {/* Question Card */}
                    <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 border border-gray-100">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                            {question.question}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="space-y-3">
                        {question.options.map((option, idx) => {
                            const isSelected = answers[question.id] === idx;
                            const optionLetter = String.fromCharCode(65 + idx);

                            return (
                                <button
                                    key={idx}
                                    onClick={() => selectAnswer(question.id, idx)}
                                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all touch-feedback ${isSelected
                                            ? 'border-emerald-500 bg-gradient-to-r from-emerald-50 to-emerald-100 shadow-md scale-[1.02]'
                                            : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm active:scale-[0.98]'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isSelected
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {optionLetter}
                                        </div>
                                        <span className={`flex-1 ${isSelected ? 'text-emerald-900 font-medium' : 'text-gray-900'
                                            }`}>
                                            {option}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Swipeable>

            {/* Fixed Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 safe-bottom">
                <div className="px-4 py-4">
                    <div className="max-w-2xl mx-auto flex items-center gap-3">
                        <TouchButton
                            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                            disabled={currentQuestion === 0}
                            variant="outline"
                            className="flex-1"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Previous
                        </TouchButton>

                        {currentQuestion === examData.questions.length - 1 ? (
                            <TouchButton
                                onClick={() => setShowSubmitDialog(true)}
                                className="flex-1"
                            >
                                Submit Exam
                            </TouchButton>
                        ) : (
                            <TouchButton
                                onClick={() => setCurrentQuestion(Math.min(examData.questions.length - 1, currentQuestion + 1))}
                                className="flex-1"
                            >
                                Next
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </TouchButton>
                        )}
                    </div>
                </div>
            </div>

            {/* Question Navigator Bottom Sheet */}
            <BottomSheet
                isOpen={showQuestionSheet}
                onClose={() => setShowQuestionSheet(false)}
                title="All Questions"
            >
                <div className="grid grid-cols-5 gap-3">
                    {examData.questions.map((q, idx) => {
                        const isAnswered = answers[q.id] !== undefined;
                        const isCurrent = idx === currentQuestion;

                        return (
                            <button
                                key={q.id}
                                onClick={() => goToQuestion(idx)}
                                className={`aspect-square rounded-xl font-bold text-sm transition-all touch-feedback ${isCurrent
                                        ? 'bg-emerald-600 text-white shadow-lg scale-110'
                                        : isAnswered
                                            ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                                            : 'bg-gray-100 text-gray-600 border-2 border-gray-200'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        );
                    })}
                </div>
            </BottomSheet>

            {/* Submit Confirmation Dialog */}
            {showSubmitDialog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl animate-slide-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Exam?</h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Total Questions:</span>
                                <span className="font-semibold">{examData.questions.length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Answered:</span>
                                <span className="font-semibold text-emerald-600">{Object.keys(answers).length}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Unanswered:</span>
                                <span className="font-semibold text-red-600">
                                    {examData.questions.length - Object.keys(answers).length}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to submit? You won't be able to change your answers.
                        </p>
                        <div className="flex gap-3">
                            <TouchButton
                                variant="outline"
                                onClick={() => setShowSubmitDialog(false)}
                                className="flex-1"
                            >
                                Cancel
                            </TouchButton>
                            <TouchButton
                                onClick={handleSubmit}
                                className="flex-1"
                            >
                                Submit
                            </TouchButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
