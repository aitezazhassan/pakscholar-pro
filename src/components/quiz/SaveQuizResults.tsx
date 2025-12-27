'use client';

import { useEffect, useState } from 'react';
import { saveQuizAttempt, type QuizAttemptData } from '@/app/actions/quiz';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface SaveQuizResultsProps {
    examId: string;
    examTitle: string;
    totalQuestions: number;
    correctAnswers: number;
    scorePercentage: number;
    timeTakenSeconds: number;
    answersData: QuizAttemptData['answersData'];
}

export function SaveQuizResults({
    examId,
    examTitle,
    totalQuestions,
    correctAnswers,
    scorePercentage,
    timeTakenSeconds,
    answersData
}: SaveQuizResultsProps) {
    const [saved, setSaved] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Only save once
        if (saved) return;

        const saveResults = async () => {
            try {
                const result = await saveQuizAttempt({
                    examId,
                    examTitle,
                    totalQuestions,
                    correctAnswers,
                    scorePercentage,
                    timeTakenSeconds,
                    answersData
                });

                if (result.success) {
                    setSaved(true);

                    // Show achievement toast if perfect score
                    if (scorePercentage === 100) {
                        toast.success('🎉 Perfect Score! Achievement Unlocked!', {
                            duration: 5000,
                            position: 'top-center',
                        });
                    } else if (scorePercentage >= 90) {
                        toast.success('🌟 Excellent work! Keep it up!', {
                            duration: 4000,
                        });
                    }
                } else {
                    console.error('Failed to save quiz results:', result.error);
                }
            } catch (error) {
                console.error('Error saving quiz results:', error);
            }
        };

        saveResults();
    }, [examId, examTitle, totalQuestions, correctAnswers, scorePercentage, timeTakenSeconds, answersData, saved]);

    return null; // This is a utility component with no UI
}
