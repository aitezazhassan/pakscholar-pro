import Link from 'next/link';
import { Clock, Users, Target, TrendingUp } from 'lucide-react';

interface ExamCardProps {
    title: string;
    description: string;
    href: string;
    examType: string;
    eligibility: string;
    duration: string;
    totalQuestions: number;
    passingScore: number;
    successRate?: number;
    applicants?: number;
}

export function ExamCard({
    title,
    description,
    href,
    examType,
    eligibility,
    duration,
    totalQuestions,
    passingScore,
    successRate,
    applicants,
}: ExamCardProps) {
    return (
        <Link href={href}>
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <div className="text-xs font-medium text-emerald-100 mb-1">{examType}</div>
                            <h3 className="text-xl font-bold group-hover:scale-105 transition-transform">{title}</h3>
                        </div>
                        {successRate && (
                            <div className="text-right">
                                <div className="text-2xl font-bold">{successRate}%</div>
                                <div className="text-xs text-emerald-100">Success Rate</div>
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-emerald-50 line-clamp-2">{description}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Eligibility */}
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Eligibility</div>
                        <div className="text-sm text-slate-700">{eligibility}</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <div>
                                <div className="text-xs text-slate-500">Duration</div>
                                <div className="text-sm font-semibold text-slate-900">{duration}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-slate-400" />
                            <div>
                                <div className="text-xs text-slate-500">Questions</div>
                                <div className="text-sm font-semibold text-slate-900">{totalQuestions}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-slate-400" />
                            <div>
                                <div className="text-xs text-slate-500">Passing</div>
                                <div className="text-sm font-semibold text-slate-900">{passingScore}%</div>
                            </div>
                        </div>
                        {applicants && (
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" />
                                <div>
                                    <div className="text-xs text-slate-500">Applicants</div>
                                    <div className="text-sm font-semibold text-slate-900">{applicants.toLocaleString()}</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
                            <span>View Details</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
