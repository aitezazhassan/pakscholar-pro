import { Metadata } from 'next';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { FileText, Clock, Users, Target, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'PPSC Lecturer Exam - Complete Preparation Guide',
    description: 'Complete guide for PPSC Lecturer exam preparation. Eligibility, syllabus, exam pattern, preparation strategy, and mock tests.',
    keywords: ['PPSC Lecturer', 'Lecturer exam preparation', 'PPSC Lecturer syllabus', 'Lecturer exam pattern'],
};

export default function PPSCLecturerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[
                    { label: 'Exams', href: '/exams' },
                    { label: 'PPSC', href: '/exams/ppsc' },
                    { label: 'Lecturer' }
                ]} />

                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">PPSC Lecturer Exam</h1>
                    <p className="text-xl text-emerald-100 mb-6">Complete preparation guide for PPSC Lecturer positions</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/practice/mock-exams/ppsc-lecturer-01" className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
                            Take Mock Exam
                        </Link>
                        <Link href="/subjects" className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-all border border-emerald-500">
                            Browse Subjects
                        </Link>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">3 hours</div>
                        <div className="text-sm text-slate-600">Duration</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">100</div>
                        <div className="text-sm text-slate-600">Questions</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">60%</div>
                        <div className="text-sm text-slate-600">Passing Score</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900">2,500+</div>
                        <div className="text-sm text-slate-600">Applicants</div>
                    </div>
                </div>

                {/* Eligibility */}
                <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Eligibility Criteria</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-slate-700">Master's Degree (16 years of education) in relevant subject</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-slate-700">Age: 21-35 years (relaxation for government employees)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-slate-700">Pakistani nationality or domicile of Punjab</span>
                        </li>
                    </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Exam Pattern</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-900">General Knowledge</span>
                            <span className="text-emerald-600 font-bold">20 MCQs</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-900">Islamic Studies</span>
                            <span className="text-emerald-600 font-bold">15 MCQs</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-900">Pakistan Studies</span>
                            <span className="text-emerald-600 font-bold">15 MCQs</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-900">Subject-Specific</span>
                            <span className="text-emerald-600 font-bold">50 MCQs</span>
                        </div>
                    </div>
                </div>

                {/* Preparation Strategy */}
                <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preparation Strategy</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">First 2 Months</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Complete all subject topics</li>
                                <li>• Practice 50+ MCQs per subject</li>
                                <li>• Make comprehensive notes</li>
                                <li>• Focus on weak areas</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Last Month</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Take 10+ mock exams</li>
                                <li>• Revise all formulas & dates</li>
                                <li>• Practice time management</li>
                                <li>• Review past papers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/subjects" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                        <BookOpen className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Study Subjects</h3>
                        <p className="text-sm text-slate-600">Access all 6 subjects with MCQs</p>
                    </Link>
                    <Link href="/practice/mock-exams" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                        <Target className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Mock Exams</h3>
                        <p className="text-sm text-slate-600">Practice with full-length tests</p>
                    </Link>
                    <Link href="/resources/study-plans" className="bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
                        <FileText className="w-8 h-8 text-purple-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Study Plans</h3>
                        <p className="text-sm text-slate-600">Follow structured preparation</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
