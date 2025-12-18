'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizCard } from './QuizCard';
import { StreakMeter } from './StreakMeter';
import { useQuizStore } from '@/store/quizStore';
import { Trophy, RefreshCw } from 'lucide-react';

interface MCQ {
    slug: string;
    entry: {
        question: string;
        optionA: string;
        optionB: string;
        optionC: string;
        optionD: string;
        correctAnswer: string;
        explanation: string;
        category: string;
    };
}

interface SwipeQuizProps {
    mcqs: MCQ[];
}

export function SwipeQuiz({ mcqs }: SwipeQuizProps) {
    const {
        currentQuestionIndex,
        currentStreak,
        totalAnswered,
        correctAnswers,
        incrementStreak,
        resetStreak,
        nextQuestion,
        startQuiz,
        endQuiz,
        isQuizActive,
    } = useQuizStore();

    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (hasStarted && !isQuizActive) {
            startQuiz();
        }
    }, [hasStarted, isQuizActive, startQuiz]);

    const currentMCQ = mcqs[currentQuestionIndex];
    const isComplete = currentQuestionIndex >= mcqs.length;

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            incrementStreak();
        } else {
            resetStreak();
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < mcqs.length - 1) {
            nextQuestion();
        } else {
            setHasStarted(false);
            endQuiz();
        }
    };

    const handleRestart = () => {
        setHasStarted(true);
        startQuiz();
    };

    if (!hasStarted || isComplete) {
        return (
            <div className="flex min-h-[600px] items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl text-center"
                >
                    {!hasStarted ? (
                        <>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="mb-8 flex justify-center"
                            >
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-oxford-900 to-oxford-700 text-5xl shadow-hard">
                                    🧠
                                </div>
                            </motion.div>

                            <h1 className="mb-4 font-playfair text-4xl font-bold text-slate-900">
                                Rapid Fire Quiz
                            </h1>
                            <p className="mb-8 text-lg text-slate-600">
                                Test your knowledge with our interactive quiz. Answer correctly to build your streak!
                            </p>

                            <div className="mb-8 grid grid-cols-3 gap-4">
                                <div className="rounded-xl bg-white p-4 shadow-soft">
                                    <div className="text-3xl font-bold text-oxford-900">{mcqs.length}</div>
                                    <div className="text-sm text-slate-600">Questions</div>
                                </div>
                                <div className="rounded-xl bg-white p-4 shadow-soft">
                                    <div className="text-3xl font-bold text-oxford-900">{useQuizStore.getState().bestStreak}</div>
                                    <div className="text-sm text-slate-600">Best Streak</div>
                                </div>
                                <div className="rounded-xl bg-white p-4 shadow-soft">
                                    <div className="text-3xl font-bold text-oxford-900">
                                        {totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%
                                    </div>
                                    <div className="text-sm text-slate-600">Accuracy</div>
                                </div>
                            </div>

                            <motion.button
                                onClick={() => setHasStarted(true)}
                                className="rounded-xl bg-oxford-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Quiz
                            </motion.button>
                        </>
                    ) : (
                        <>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="mb-8 flex justify-center"
                            >
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-hard">
                                    <Trophy className="h-12 w-12 text-white" />
                                </div>
                            </motion.div>

                            <h1 className="mb-4 font-playfair text-4xl font-bold text-slate-900">
                                Quiz Complete! 🎉
                            </h1>

                            <div className="mb-8 rounded-xl bg-white p-6 shadow-soft">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-3xl font-bold text-oxford-900">{correctAnswers}/{totalAnswered}</div>
                                        <div className="text-sm text-slate-600">Correct</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-oxford-900">{currentStreak > 0 ? currentStreak : useQuizStore.getState().bestStreak}</div>
                                        <div className="text-sm text-slate-600">Final Streak</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-oxford-900">
                                            {Math.round((correctAnswers / totalAnswered) * 100)}%
                                        </div>
                                        <div className="text-sm text-slate-600">Accuracy</div>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleRestart}
                                className="inline-flex items-center gap-2 rounded-xl bg-oxford-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RefreshCw className="h-5 w-5" />
                                Try Again
                            </motion.button>
                        </>
                    )}
                </motion.div>
            </div>
        );
    }

    if (!currentMCQ) return null;

    return (
        <div className="relative py-12">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                        <span>Question {currentQuestionIndex + 1} of {mcqs.length}</span>
                        <span>{Math.round(((currentQuestionIndex + 1) / mcqs.length) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <motion.div
                            className="h-full bg-gradient-to-r from-oxford-900 to-oxford-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIndex + 1) / mcqs.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </div>

            {/* Streak Meter */}
            <StreakMeter />

            {/* Quiz Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                >
                    <QuizCard
                        question={currentMCQ.entry.question}
                        options={[
                            currentMCQ.entry.optionA,
                            currentMCQ.entry.optionB,
                            currentMCQ.entry.optionC,
                            currentMCQ.entry.optionD,
                        ]}
                        correctAnswer={currentMCQ.entry[`option${currentMCQ.entry.correctAnswer}` as keyof typeof currentMCQ.entry] as string}
                        explanation={currentMCQ.entry.explanation}
                        category={currentMCQ.entry.category.replace('-', ' ').toUpperCase()}
                        onAnswer={handleAnswer}
                        onNext={handleNext}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
