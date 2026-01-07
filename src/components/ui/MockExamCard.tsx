import Link from 'next/link';
import { Clock, Target, Users, Play } from 'lucide-react';

interface MockExamCardProps {
    title: string;
    description: string;
    href: string;
    duration: number; // minutes
    totalQuestions: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    attempts?: number;
    averageScore?: number;
    examType: 'PPSC' | 'Subject' | 'General';
}

export function MockExamCard({
    title,
    description,
    href,
    duration,
    totalQuestions,
    difficulty,
    attempts = 0,
    averageScore,
    examType,
}: MockExamCardProps) {
    const difficultyColors = {
        Easy: 'bg-green-500',
        Medium: 'bg-yellow-500',
        Hard: 'bg-red-500',
    };

    const examTypeColors = {
        PPSC: 'bg-emerald-100 text-emerald-700',
        Subject: 'bg-blue-100 text-blue-700',
        General: 'bg-purple-100 text-purple-700',
    };

    return (
        <Link href={href}>
            <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${examTypeColors[examType]}`}>
                                    {examType}
                                </span>
                                <div className={`w-2 h-2 rounded-full ${difficultyColors[difficulty]}`} />
                                <span className="text-xs font-medium text-slate-600">{difficulty}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
                </div>

                {/* Stats */}
                <div className="px-6 pb-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                            <Clock className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                            <div className="text-sm font-bold text-slate-900">{duration}m</div>
                            <div className="text-xs text-slate-500">Duration</div>
                        </div>
                        <div className="text-center">
                            <Target className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                            <div className="text-sm font-bold text-slate-900">{totalQuestions}</div>
                            <div className="text-xs text-slate-500">Questions</div>
                        </div>
                        <div className="text-center">
                            <Users className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                            <div className="text-sm font-bold text-slate-900">{attempts.toLocaleString()}</div>
                            <div className="text-xs text-slate-500">Attempts</div>
                        </div>
                    </div>

                    {/* Average Score */}
                    {averageScore !== undefined && (
                        <div className="mb-4">
                            <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-slate-600">Average Score</span>
                                <span className="font-semibold text-slate-900">{averageScore}%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                                    style={{ width: `${averageScore}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>Start Exam</span>
                    </button>
                </div>
            </div>
        </Link>
    );
}
