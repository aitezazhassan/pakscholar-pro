import { createClient } from '@/lib/supabase/server';
import { BookOpen, Trophy, Clock, Target, TrendingUp, Calendar, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getUserStats } from '@/app/actions/quiz';

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase?.auth.getUser() || { data: { user: null } };

    // Fetch real user statistics
    const statsResult = await getUserStats();
    const stats = statsResult.success ? statsResult.data : null;

    // Calculate study time in hours
    const studyTimeHours = stats ? (stats.totalStudyTimeMinutes / 60).toFixed(1) : '0.0';

    // Get today's goal progress
    const questionsGoal = stats?.todayGoals?.find(g => g.goal_type === 'questions_answered');
    const quizzesGoal = stats?.todayGoals?.find(g => g.goal_type === 'quizzes_taken');

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, {user?.user_metadata.full_name?.split(' ')[0] || 'Scholar'}! 👋
                </h1>
                <p className="text-gray-600 mt-2">
                    {stats && stats.totalQuizzes > 0
                        ? `You've taken ${stats.totalQuizzes} ${stats.totalQuizzes === 1 ? 'quiz' : 'quizzes'} with an average score of ${stats.averageScore}%`
                        : "Start your learning journey today by taking your first quiz!"}
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Topics Completed */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        {stats && stats.topicsCompleted > 0 && (
                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                Active
                            </span>
                        )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stats?.topicsCompleted || 0}</h3>
                    <p className="text-sm text-gray-600">Topics Completed</p>
                </div>

                {/* Average Score */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                            <Trophy className="w-6 h-6" />
                        </div>
                        {stats && stats.averageScore >= 80 && (
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                Excellent!
                            </span>
                        )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stats?.averageScore.toFixed(1) || '0'}%</h3>
                    <p className="text-sm text-gray-600">Average Score</p>
                </div>

                {/* Study Time */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{studyTimeHours}h</h3>
                    <p className="text-sm text-gray-600">Total Study Time</p>
                </div>

                {/* Daily Goal */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                            <Target className="w-6 h-6" />
                        </div>
                        {questionsGoal?.achieved && (
                            <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                ✓ Done
                            </span>
                        )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {questionsGoal?.current_value || 0}/{questionsGoal?.target_value || 50}
                    </h3>
                    <p className="text-sm text-gray-600">Questions Today</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                        {stats && stats.recentActivity.length > 0 && (
                            <Link
                                href="/dashboard/history"
                                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                            >
                                View All
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>

                    {stats && stats.recentActivity.length > 0 ? (
                        <div className="space-y-4">
                            {stats.recentActivity.map((activity: any, idx: number) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="p-2 bg-white rounded-lg">
                                        <Trophy className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 truncate">{activity.exam_title}</h3>
                                        <p className="text-sm text-gray-500">
                                            Score: <span className="font-medium text-gray-700">{activity.score_percentage}%</span>
                                        </p>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {new Date(activity.completed_at).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No activity yet</h3>
                            <p className="text-gray-500 mb-6">Start taking mock exams to see your progress here.</p>
                            <Link
                                href="/practice"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                            >
                                <BookOpen className="w-5 h-5" />
                                Browse Mock Exams
                            </Link>
                        </div>
                    )}
                </div>

                {/* Quick Actions & Goals */}
                <div className="space-y-6">
                    {/* Today's Goals */}
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                            <h3 className="font-bold text-gray-900">Today's Goals</h3>
                        </div>
                        <div className="space-y-3">
                            {/* Quizzes Goal */}
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-700 font-medium">Quizzes</span>
                                    <span className="text-gray-600">
                                        {quizzesGoal?.current_value || 0}/{quizzesGoal?.target_value || 3}
                                    </span>
                                </div>
                                <div className="h-2 bg-white rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500 transition-all duration-500"
                                        style={{
                                            width: `${Math.min(100, ((quizzesGoal?.current_value || 0) / (quizzesGoal?.target_value || 3)) * 100)}%`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Questions Goal */}
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-700 font-medium">Questions</span>
                                    <span className="text-gray-600">
                                        {questionsGoal?.current_value || 0}/{questionsGoal?.target_value || 50}
                                    </span>
                                </div>
                                <div className="h-2 bg-white rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 transition-all duration-500"
                                        style={{
                                            width: `${Math.min(100, ((questionsGoal?.current_value || 0) / (questionsGoal?.target_value || 50)) * 100)}%`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <Link
                                href="/practice"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                                    <BookOpen className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="font-medium text-gray-700 group-hover:text-gray-900">Take a Quiz</span>
                            </Link>
                            <Link
                                href="/dashboard/analytics"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                    <TrendingUp className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-700 group-hover:text-gray-900">View Analytics</span>
                            </Link>
                            <Link
                                href="/dashboard/bookmarks"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                                    <Award className="w-4 h-4 text-amber-600" />
                                </div>
                                <span className="font-medium text-gray-700 group-hover:text-gray-900">My Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
