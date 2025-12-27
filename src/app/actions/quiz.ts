'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface QuizAttemptData {
    examId: string;
    examTitle: string;
    totalQuestions: number;
    correctAnswers: number;
    scorePercentage: number;
    timeTakenSeconds: number;
    answersData: {
        questionId: number;
        userAnswer: string;
        correctAnswer: string;
        isCorrect: boolean;
        timeSpent?: number;
    }[];
}

/**
 * Save a quiz attempt to the database
 */
export async function saveQuizAttempt(data: QuizAttemptData) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated' };
    }

    try {
        const { data: attempt, error } = await supabase
            .from('quiz_attempts')
            .insert({
                user_id: user.id,
                exam_id: data.examId,
                exam_title: data.examTitle,
                total_questions: data.totalQuestions,
                correct_answers: data.correctAnswers,
                score_percentage: data.scorePercentage,
                time_taken_seconds: data.timeTakenSeconds,
                answers_data: data.answersData,
            })
            .select()
            .single();

        if (error) throw error;

        // Update daily goal for quizzes taken
        await updateDailyGoal(user.id, 'quizzes_taken', 1);

        // Update daily goal for questions answered
        await updateDailyGoal(user.id, 'questions_answered', data.totalQuestions);

        // Check for achievements
        await checkAndAwardAchievements(user.id, data);

        revalidatePath('/dashboard');

        return { success: true, data: attempt };
    } catch (error: any) {
        console.error('Error saving quiz attempt:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Get user's quiz history
 */
export async function getQuizHistory(limit = 10, offset = 0) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured', data: [] };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated', data: [] };
    }

    try {
        const { data, error } = await supabase
            .from('quiz_attempts')
            .select('*')
            .eq('user_id', user.id)
            .order('completed_at', { ascending: false })
            .range(offset, offset + limit - 1);

        if (error) throw error;

        return { success: true, data: data || [] };
    } catch (error: any) {
        console.error('Error fetching quiz history:', error);
        return { success: false, error: error.message, data: [] };
    }
}

/**
 * Get user statistics
 */
export async function getUserStats() {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured', data: null };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated', data: null };
    }

    try {
        // Get quiz statistics
        const { data: quizStats, error: quizError } = await supabase
            .from('quiz_attempts')
            .select('score_percentage, time_taken_seconds, completed_at')
            .eq('user_id', user.id);

        if (quizError) throw quizError;

        // Get study session statistics
        const { data: studyStats, error: studyError } = await supabase
            .from('study_sessions')
            .select('duration_minutes')
            .eq('user_id', user.id);

        if (studyError) throw studyError;

        // Get progress statistics
        const { data: progressStats, error: progressError } = await supabase
            .from('user_progress')
            .select('completion_percentage, subject')
            .eq('user_id', user.id);

        if (progressError) throw progressError;

        // Calculate statistics
        const totalQuizzes = quizStats?.length || 0;
        const averageScore = totalQuizzes > 0
            ? quizStats!.reduce((sum, q) => sum + q.score_percentage, 0) / totalQuizzes
            : 0;

        const totalStudyTime = studyStats?.reduce((sum, s) => sum + s.duration_minutes, 0) || 0;

        const topicsCompleted = progressStats?.filter(p => p.completion_percentage === 100).length || 0;

        // Get today's goals
        const today = new Date().toISOString().split('T')[0];
        const { data: todayGoals } = await supabase
            .from('daily_goals')
            .select('*')
            .eq('user_id', user.id)
            .eq('goal_date', today);

        // Get recent activity
        const { data: recentQuizzes } = await supabase
            .from('quiz_attempts')
            .select('exam_title, score_percentage, completed_at')
            .eq('user_id', user.id)
            .order('completed_at', { ascending: false })
            .limit(5);

        return {
            success: true,
            data: {
                totalQuizzes,
                averageScore: Math.round(averageScore * 10) / 10,
                totalStudyTimeMinutes: totalStudyTime,
                topicsCompleted,
                todayGoals: todayGoals || [],
                recentActivity: recentQuizzes || [],
            }
        };
    } catch (error: any) {
        console.error('Error fetching user stats:', error);
        return { success: false, error: error.message, data: null };
    }
}

/**
 * Update daily goal progress
 */
async function updateDailyGoal(userId: string, goalType: string, increment: number) {
    const supabase = await createClient();
    if (!supabase) return;

    const today = new Date().toISOString().split('T')[0];

    try {
        // Get or create today's goal
        const { data: existingGoal } = await supabase
            .from('daily_goals')
            .select('*')
            .eq('user_id', userId)
            .eq('goal_type', goalType)
            .eq('goal_date', today)
            .single();

        if (existingGoal) {
            // Update existing goal
            const newValue = existingGoal.current_value + increment;
            const achieved = newValue >= existingGoal.target_value;

            await supabase
                .from('daily_goals')
                .update({
                    current_value: newValue,
                    achieved: achieved
                })
                .eq('id', existingGoal.id);
        } else {
            // Create new goal with default target
            const defaultTargets: Record<string, number> = {
                'quizzes_taken': 3,
                'questions_answered': 50,
                'topics_completed': 5,
                'study_time': 60
            };

            await supabase
                .from('daily_goals')
                .insert({
                    user_id: userId,
                    goal_type: goalType,
                    target_value: defaultTargets[goalType] || 10,
                    current_value: increment,
                    goal_date: today,
                    achieved: increment >= (defaultTargets[goalType] || 10)
                });
        }
    } catch (error) {
        console.error('Error updating daily goal:', error);
    }
}

/**
 * Check and award achievements
 */
async function checkAndAwardAchievements(userId: string, quizData: QuizAttemptData) {
    const supabase = await createClient();
    if (!supabase) return;

    try {
        // Get total quizzes taken
        const { data: attempts } = await supabase
            .from('quiz_attempts')
            .select('id, score_percentage')
            .eq('user_id', userId);

        const totalQuizzes = attempts?.length || 0;
        const perfectScores = attempts?.filter(a => a.score_percentage === 100).length || 0;

        // Achievement: First Quiz
        if (totalQuizzes === 1) {
            await awardAchievement(userId, 'first_quiz', 'First Steps', 'Completed your first quiz!');
        }

        // Achievement: 10 Quizzes
        if (totalQuizzes === 10) {
            await awardAchievement(userId, 'quiz_master_10', 'Quiz Master', 'Completed 10 quizzes!');
        }

        // Achievement: Perfect Score
        if (quizData.scorePercentage === 100) {
            await awardAchievement(userId, 'perfect_score', 'Perfectionist', 'Achieved a perfect score!');
        }

        // Achievement: 5 Perfect Scores
        if (perfectScores === 5) {
            await awardAchievement(userId, 'perfect_streak_5', 'Excellence', 'Achieved 5 perfect scores!');
        }
    } catch (error) {
        console.error('Error checking achievements:', error);
    }
}

/**
 * Award an achievement to a user
 */
async function awardAchievement(userId: string, type: string, title: string, description: string) {
    const supabase = await createClient();
    if (!supabase) return;

    try {
        await supabase
            .from('user_achievements')
            .insert({
                user_id: userId,
                achievement_type: type,
                achievement_title: title,
                achievement_description: description
            });
    } catch (error) {
        // Ignore duplicate achievement errors
        console.log('Achievement already exists or error:', error);
    }
}

/**
 * Update user progress for a topic
 */
export async function updateUserProgress(subject: string, topic: string, completionPercentage: number) {
    const supabase = await createClient();

    if (!supabase) {
        return { success: false, error: 'Database not configured' };
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, error: 'User not authenticated' };
    }

    try {
        // Determine mastery level based on completion
        let masteryLevel = 'beginner';
        if (completionPercentage >= 90) masteryLevel = 'expert';
        else if (completionPercentage >= 70) masteryLevel = 'advanced';
        else if (completionPercentage >= 40) masteryLevel = 'intermediate';

        const { error } = await supabase
            .from('user_progress')
            .upsert({
                user_id: user.id,
                subject,
                topic,
                completion_percentage: completionPercentage,
                mastery_level: masteryLevel,
                last_accessed: new Date().toISOString()
            }, {
                onConflict: 'user_id,subject,topic'
            });

        if (error) throw error;

        revalidatePath('/dashboard');

        return { success: true };
    } catch (error: any) {
        console.error('Error updating user progress:', error);
        return { success: false, error: error.message };
    }
}
