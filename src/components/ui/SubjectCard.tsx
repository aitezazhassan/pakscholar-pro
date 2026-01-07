import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    color: string;
    mcqCount: number;
    topicCount: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    progress?: number;
}

export function SubjectCard({
    title,
    description,
    href,
    icon: Icon,
    color,
    mcqCount,
    topicCount,
    difficulty,
    progress = 0,
}: SubjectCardProps) {
    const difficultyColors = {
        Easy: 'bg-green-100 text-green-700',
        Medium: 'bg-yellow-100 text-yellow-700',
        Hard: 'bg-red-100 text-red-700',
    };

    return (
        <Link href={href}>
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Color Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${color}`} />

                {/* Content */}
                <div className="p-6">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${color} bg-opacity-10 flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                                {title}
                            </h3>
                            <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-slate-900">{mcqCount}</span>
                            <span className="text-slate-600">MCQs</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-slate-900">{topicCount}</span>
                            <span className="text-slate-600">Topics</span>
                        </div>
                        <div className="ml-auto">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
                                {difficulty}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    {progress > 0 && (
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-slate-600">Progress</span>
                                <span className="font-semibold text-slate-900">{progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${color} transition-all duration-500`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
