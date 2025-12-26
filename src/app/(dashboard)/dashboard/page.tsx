import { createClient } from '@/lib/supabase/server';
import { BookOpen, Trophy, Clock, Target } from 'lucide-react';

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, {user?.user_metadata.full_name?.split(' ')[0] || 'Scholar'}! 👋
                </h1>
                <p className="text-gray-600 mt-2">
                    Here's what's happening with your learning journey today.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            +2 this week
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">12</h3>
                    <p className="text-sm text-gray-600">Topics Completed</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                            <Trophy className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">85%</h3>
                    <p className="text-sm text-gray-600">Average Score</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">4.5h</h3>
                    <p className="text-sm text-gray-600">Study Time</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                            <Target className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">5/20</h3>
                    <p className="text-sm text-gray-600">Daily Goal</p>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No activity yet</h3>
                    <p className="text-gray-500 mb-4">Start taking mock exams to see your progress here.</p>
                </div>
            </div>
        </div>
    );
}
