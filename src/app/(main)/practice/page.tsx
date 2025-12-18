'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Brain, Check, X, RefreshCw, Trophy } from 'lucide-react';

// This would normally fetch from the API, but for now we'll use placeholder
export default function PracticePage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

    // Placeholder MCQs - would be fetched from Keystatic
    const mcqs = [
        {
            question: 'The 18th Amendment to the Constitution of Pakistan was passed in which year?',
            options: ['2008', '2010', '2012', '2015'],
            correctAnswer: '2010',
            explanation: 'The 18th Amendment was passed unanimously by the National Assembly of Pakistan on April 8, 2010. It was a significant constitutional reform that devolved powers from the federal government to provincial governments.',
            category: 'Pakistan Affairs',
            difficulty: 'medium'
        },
        {
            question: 'What is the capital of Gilgit-Baltistan?',
            options: ['Skardu', 'Gilgit', 'Hunza', 'Chilas'],
            correctAnswer: 'Gilgit',
            explanation: 'Gilgit is the capital city of Gilgit-Baltistan region. It serves as the administrative headquarters and is strategically located on the Karakoram Highway.',
            category: 'General Knowledge',
            difficulty: 'easy'
        },
    ];

    const totalQuestions = mcqs.length;

    const handleAnswer = (answer: string) => {
        if (showFeedback) return;

        setSelectedAnswer(answer);
        setShowFeedback(true);

        if (answer === mcqs[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setScore(0);
        setAnsweredQuestions([]);
    };

    const isQuizComplete = currentQuestion === totalQuestions - 1 && showFeedback;
    const currentMCQ = mcqs[currentQuestion];

    if (isQuizComplete) {
        return (
            <div className="min-h-screen bg-slate-50 py-20">
                <div className="mx-auto max-w-2xl px-4">
                    <Card variant="elevated" padding="large" className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-oxford-100">
                                <Trophy className="h-10 w-10 text-oxford-900" />
                            </div>
                        </div>
                        <h2 className="mb-4 font-playfair text-4xl font-bold text-slate-900">
                            Quiz Complete!
                        </h2>
                        <p className="mb-8 text-xl text-slate-600">
                            You scored{' '}
                            <span className="font-bold text-oxford-900">
                                {score} out of {totalQuestions}
                            </span>{' '}
                            ({Math.round((score / totalQuestions) * 100)}%)
                        </p>
                        <Button variant="primary" size="large" onClick={handleReset}>
                            <RefreshCw className="h-5 w-5" />
                            Try Again
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-4 font-playfair text-4xl font-bold text-slate-900 md:text-5xl">
                        MCQ Practice
                    </h1>
                    <p className="text-lg text-slate-600">
                        Test your knowledge with interactive questions
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                        <span>
                            Question {currentQuestion + 1} of {totalQuestions}
                        </span>
                        <span>
                            Score: {score}/{answeredQuestions.length}
                        </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                            className="h-full bg-oxford-900 transition-all duration-300"
                            style={{
                                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <Card variant="elevated" padding="large" className="mb-6">
                    <div className="mb-4 flex items-center gap-2">
                        <Badge variant="primary" size="small">
                            {currentMCQ.category}
                        </Badge>
                        <Badge
                            variant={
                                currentMCQ.difficulty === 'easy'
                                    ? 'success'
                                    : currentMCQ.difficulty === 'medium'
                                        ? 'warning'
                                        : 'danger'
                            }
                            size="small"
                        >
                            {currentMCQ.difficulty}
                        </Badge>
                    </div>

                    <h2 className="mb-6 text-2xl font-semibold leading-relaxed text-slate-900">
                        {currentMCQ.question}
                    </h2>

                    <div className="space-y-3">
                        {currentMCQ.options.map((option, index) => {
                            const isSelected = option === selectedAnswer;
                            const isCorrect = option === currentMCQ.correctAnswer;
                            const showCorrectAnswer = showFeedback && isCorrect;
                            const showWrongAnswer = showFeedback && isSelected && !isCorrect;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    disabled={showFeedback}
                                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${showCorrectAnswer
                                            ? 'border-green-500 bg-green-50'
                                            : showWrongAnswer
                                                ? 'border-red-500 bg-red-50'
                                                : isSelected
                                                    ? 'border-oxford-600 bg-oxford-50'
                                                    : 'border-slate-200 bg-white hover:border-oxford-300'
                                        } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-slate-900">{option}</span>
                                        {showCorrectAnswer && (
                                            <Check className="h-5 w-5 text-green-600" />
                                        )}
                                        {showWrongAnswer && <X className="h-5 w-5 text-red-600" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Explanation */}
                    {showFeedback && (
                        <div className="mt-6 animate-slide-down rounded-lg bg-oxford-50 p-4">
                            <h3 className="mb-2 font-semibold text-oxford-900">
                                Explanation:
                            </h3>
                            <p className="leading-relaxed text-slate-700">
                                {currentMCQ.explanation}
                            </p>
                        </div>
                    )}
                </Card>

                {/* Next Button */}
                {showFeedback && currentQuestion < totalQuestions - 1 && (
                    <div className="flex justify-end">
                        <Button variant="primary" size="large" onClick={handleNext}>
                            Next Question →
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
