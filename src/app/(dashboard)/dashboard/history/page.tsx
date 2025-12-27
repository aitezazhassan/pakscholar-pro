import { createClient } from '@/lib/supabase/server';
import { getQuizHistory } from '@/app/actions/quiz';
import { Trophy, Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default async function QuizHistoryPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase?.auth.getUser() || { data: { user: null } };

    // Fetch quiz history
    const historyResult = await getQuizHistory(50, 0);
    const quizzes = historyResult.success ? historyResult.data : [];

    // Group by exam type
    const groupedQuizzes = quizzes.reduce((acc: any, quiz: any) => {
        if (!acc[quiz.exam_id]) {
            acc[quiz.exam_id] = [];
        }
        acc[quiz.exam_id].push(quiz);
        return acc;
    }, {});

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Quiz History</h1>
                <p className="text-gray-600 mt-2">
                    Review all your past quiz attempts and track your progress over time
                </p>
            </header>

            {quizzes.length > 0 ? (
                <div className="space-y-8">
                    {/* Summary Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <Trophy className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-600">Total Quizzes</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">{quizzes.length}</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-600">Questions Answered</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">
                                {quizzes.reduce((sum: number, q: any) => sum + q.total_questions, 0)}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-indigo-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-600">Total Time</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">
                                {Math.floor(quizzes.reduce((sum: number, q: any) => sum + q.time_taken_seconds, 0) / 3600)}h
                            </p>
                        </div>
                    </div>

                    {/* Quiz History List */}
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900">All Attempts</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {quizzes.map((quiz: any) => (
                                <div key={quiz.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 mb-2">{quiz.exam_title}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Trophy className="w-4 h-4" />
                                                    <span className={`font-semibold ${quiz.score_percentage >= 80 ? 'text-emerald-600' :
                                                            quiz.score_percentage >= 60 ? 'text-blue-600' :
                                                                'text-amber-600'
                                                        }`}>
                                                        {quiz.score_percentage}%
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <FileText className="w-4 h-4" />
                                                    <span>{quiz.correct_answers}/{quiz.total_questions} correct</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{Math.floor(quiz.time_taken_seconds / 60)} min</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(quiz.completed_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {quiz.score_percentage === 100 && (
                                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                                                    Perfect!
                                                </span>
                                            )}
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${quiz.score_percentage >= 80 ? 'bg-emerald-100 text-emerald-700' :
                                                    quiz.score_percentage >= 60 ? 'bg-blue-100 text-blue-700' :
                                                        'bg-amber-100 text-amber-700'
                                                }`}>
                                                {quiz.score_percentage}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No quiz history yet</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Start taking mock exams to build your quiz history and track your progress over time.
                    </p>
                    <Link
                        href="/practice"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                    >
                        Browse Mock Exams
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            )}
        </div>
    );
}
