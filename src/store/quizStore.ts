import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizState {
    currentStreak: number;
    bestStreak: number;
    totalAnswered: number;
    correctAnswers: number;
    currentQuestionIndex: number;
    isQuizActive: boolean;

    // Actions
    incrementStreak: () => void;
    resetStreak: () => void;
    nextQuestion: () => void;
    startQuiz: () => void;
    endQuiz: () => void;
    resetStats: () => void;
}

export const useQuizStore = create<QuizState>()(
    persist(
        (set) => ({
            currentStreak: 0,
            bestStreak: 0,
            totalAnswered: 0,
            correctAnswers: 0,
            currentQuestionIndex: 0,
            isQuizActive: false,

            incrementStreak: () =>
                set((state) => {
                    const newStreak = state.currentStreak + 1;
                    return {
                        currentStreak: newStreak,
                        bestStreak: Math.max(state.bestStreak, newStreak),
                        correctAnswers: state.correctAnswers + 1,
                        totalAnswered: state.totalAnswered + 1,
                    };
                }),

            resetStreak: () =>
                set((state) => ({
                    currentStreak: 0,
                    totalAnswered: state.totalAnswered + 1,
                })),

            nextQuestion: () =>
                set((state) => ({
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                })),

            startQuiz: () =>
                set({
                    isQuizActive: true,
                    currentQuestionIndex: 0,
                    currentStreak: 0,
                }),

            endQuiz: () =>
                set({
                    isQuizActive: false,
                }),

            resetStats: () =>
                set({
                    currentStreak: 0,
                    bestStreak: 0,
                    totalAnswered: 0,
                    correctAnswers: 0,
                    currentQuestionIndex: 0,
                    isQuizActive: false,
                }),
        }),
        {
            name: 'pakscholar-quiz-storage',
        }
    )
);
