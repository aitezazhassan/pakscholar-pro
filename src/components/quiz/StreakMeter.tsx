'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '@/store/quizStore';

export function StreakMeter() {
    const { currentStreak, bestStreak } = useQuizStore();

    return (
        <div className="fixed right-4 top-24 z-50">
            <motion.div
                className="rounded-xl bg-white p-4 shadow-hard"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                {/* Current Streak */}
                <div className="flex items-center gap-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStreak}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            className="text-4xl"
                        >
                            {currentStreak > 0 ? '🔥' : '❄️'}
                        </motion.div>
                    </AnimatePresence>

                    <div>
                        <motion.div
                            className="text-3xl font-bold text-oxford-900"
                            key={currentStreak}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentStreak}
                        </motion.div>
                        <div className="text-xs text-slate-500">Streak</div>
                    </div>
                </div>

                {/* Best Streak */}
                {bestStreak > 0 && (
                    <div className="mt-3 border-t border-slate-200 pt-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Best:</span>
                            <span className="font-semibold text-oxford-700">{bestStreak} 🏆</span>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
