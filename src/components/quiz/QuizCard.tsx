'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { cn } from '@/lib/cn';

interface QuizCardProps {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    category: string;
    onAnswer: (isCorrect: boolean) => void;
    onNext: () => void;
}

export function QuizCard({
    question,
    options,
    correctAnswer,
    explanation,
    category,
    onAnswer,
    onNext,
}: QuizCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const controls = useAnimation();

    const handleAnswer = async (answer: string) => {
        if (selectedAnswer) return; // Already answered

        setSelectedAnswer(answer);
        const correct = answer === correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            // Correct answer - flip card
            setIsFlipped(true);
            onAnswer(true);
        } else {
            // Wrong answer - shake animation
            await controls.start({
                x: [-10, 10, -10, 10, -5, 5, 0],
                transition: { duration: 0.5 }
            });
            onAnswer(false);
        }
    };

    const handleNext = () => {
        setIsFlipped(false);
        setSelectedAnswer(null);
        setIsCorrect(false);
        onNext();
    };

    return (
        <motion.div
            className="relative mx-auto h-[500px] w-full max-w-2xl"
            animate={controls}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="relative h-full w-full"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Face */}
                <div
                    className={cn(
                        'absolute inset-0 rounded-2xl bg-white p-8 shadow-hard',
                        'backface-hidden'
                    )}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-block rounded-full bg-oxford-100 px-4 py-1 text-sm font-medium text-oxford-900">
                            {category}
                        </span>
                    </div>

                    {/* Question */}
                    <h2 className="mb-8 font-playfair text-2xl font-bold text-slate-900 md:text-3xl">
                        {question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-3">
                        {options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                disabled={!!selectedAnswer}
                                className={cn(
                                    'w-full rounded-xl border-2 p-4 text-left transition-all',
                                    'hover:shadow-medium disabled:cursor-not-allowed',
                                    selectedAnswer === option && isCorrect && 'border-green-500 bg-green-50',
                                    selectedAnswer === option && !isCorrect && 'border-red-500 bg-red-50',
                                    !selectedAnswer && 'border-slate-200 hover:border-oxford-600',
                                    selectedAnswer && selectedAnswer !== option && 'opacity-50'
                                )}
                                whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                                whileTap={{ scale: selectedAnswer ? 1 : 0.98 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 font-semibold',
                                        selectedAnswer === option && isCorrect && 'border-green-500 bg-green-500 text-white',
                                        selectedAnswer === option && !isCorrect && 'border-red-500 bg-red-500 text-white',
                                        !selectedAnswer && 'border-slate-300 text-slate-600'
                                    )}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className="text-lg text-slate-700">{option}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Wrong Answer Hint */}
                    {selectedAnswer && !isCorrect && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700"
                        >
                            <strong>Try again!</strong> The correct answer is: <strong>{correctAnswer}</strong>
                        </motion.div>
                    )}
                </div>

                {/* Back Face (Knowledge Nugget) */}
                <div
                    className={cn(
                        'absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white shadow-hard',
                        'backface-hidden'
                    )}
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="mb-6"
                    >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </motion.div>

                    <h3 className="mb-4 text-center font-playfair text-3xl font-bold">
                        Correct! 🎉
                    </h3>

                    {/* Knowledge Nugget */}
                    <div className="mb-8 max-w-lg text-center">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">
                            Knowledge Nugget
                        </p>
                        <p className="text-lg leading-relaxed">{explanation}</p>
                    </div>

                    {/* Next Button */}
                    <motion.button
                        onClick={handleNext}
                        className="rounded-xl bg-white px-8 py-3 font-semibold text-green-600 shadow-lg transition-transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Next Question →
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}
