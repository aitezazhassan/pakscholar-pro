'use client';

import { useState, useEffect } from 'react';
import { MCQ } from '@/types/mcq';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface MCQPracticeProps {
    subject: string;
}

export function MCQPractice({ subject }: MCQPracticeProps) {
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load MCQ data
        fetch(`/data/mcqs/${subject}.json`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.questions);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading MCQs:', err);
                setLoading(false);
            });
    }, [subject]);

    const currentQuestion = questions[currentIndex];

    const handleAnswerSelect = (option: string) => {
        if (!isAnswered) {
            setSelectedAnswer(option);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            setIsAnswered(true);
            setShowExplanation(true);
            if (selectedAnswer === currentQuestion.correctAnswer) {
                setScore(score + 1);
            }
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
            setShowExplanation(false);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowExplanation(false);
        setScore(0);
    };

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p className="mt-4 text-slate-600">Loading questions...</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-slate-600">No questions available yet.</p>
            </div>
        );
    }

    const isCompleted = currentIndex === questions.length - 1 && isAnswered;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Question {currentIndex + 1} of {questions.length}</span>
                    <span>Score: {score}/{questions.length}</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-6">
                {/* Difficulty Badge */}
                <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            currentQuestion.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                        }`}>
                        {currentQuestion.difficulty}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">{currentQuestion.topic}</span>
                </div>

                {/* Question */}
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                    {currentQuestion.question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                    {Object.entries(currentQuestion.options).map(([key, value]) => {
                        const isSelected = selectedAnswer === key;
                        const isCorrectOption = key === currentQuestion.correctAnswer;
                        const showCorrect = isAnswered && isCorrectOption;
                        const showIncorrect = isAnswered && isSelected && !isCorrect;

                        return (
                            <button
                                key={key}
                                onClick={() => handleAnswerSelect(key)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showCorrect ? 'border-green-500 bg-green-50' :
                                        showIncorrect ? 'border-red-500 bg-red-50' :
                                            isSelected ? 'border-emerald-500 bg-emerald-50' :
                                                'border-slate-200 hover:border-slate-300 bg-white'
                                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${showCorrect ? 'bg-green-500 text-white' :
                                                showIncorrect ? 'bg-red-500 text-white' :
                                                    isSelected ? 'bg-emerald-500 text-white' :
                                                        'bg-slate-100 text-slate-700'
                                            }`}>
                                            {key}
                                        </span>
                                        <span className="text-slate-900">{value}</span>
                                    </div>
                                    {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                                    {showIncorrect && <XCircle className="w-6 h-6 text-red-500" />}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Submit Button */}
                {!isAnswered && (
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedAnswer}
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${selectedAnswer
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                    >
                        Submit Answer
                    </button>
                )}

                {/* Explanation */}
                {showExplanation && (
                    <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                        }`}>
                        <div className="flex items-start gap-3">
                            {isCorrect ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`font-semibold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                                    {isCorrect ? 'Correct!' : 'Incorrect'}
                                </h4>
                                <p className="text-sm text-slate-700">{currentQuestion.explanation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            {isAnswered && (
                <div className="flex gap-4">
                    {!isCompleted ? (
                        <button
                            onClick={handleNext}
                            className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2"
                        >
                            <span>Next Question</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <div className="flex-1 space-y-4">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl text-center">
                                <h3 className="text-2xl font-bold mb-2">Quiz Complete! 🎉</h3>
                                <p className="text-emerald-100">Your Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)</p>
                            </div>
                            <button
                                onClick={handleRestart}
                                className="w-full py-3 px-6 bg-white border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-5 h-5" />
                                <span>Restart Quiz</span>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
