import { Metadata } from 'next';
import { GraduationCap, FileText, Target, BookOpen, TrendingUp, Users } from 'lucide-react';
import { ExamCard } from '@/components/ui/ExamCard';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';

export const metadata: Metadata = {
    title: 'PPSC Exams - Complete Preparation Guide',
    description: 'Comprehensive guides for all PPSC exams including Lecturer, Tehsildar, Assistant Director, and more. Eligibility, syllabus, exam pattern, and preparation strategies.',
    keywords: ['PPSC exams', 'PPSC lecturer', 'PPSC tehsildar', 'PPSC preparation', 'Punjab Public Service Commission'],
};

export default function ExamsHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[{ label: 'Exams' }]} />

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-6">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        PPSC Exam Preparation
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Complete guides for all PPSC posts with eligibility criteria, exam patterns, syllabus, and preparation strategies
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">10+</div>
                        <div className="text-sm text-slate-600">Exam Posts</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                        <div className="text-sm text-slate-600">Success Rate</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">5,000+</div>
                        <div className="text-sm text-slate-600">Applicants</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">15</div>
                        <div className="text-sm text-slate-600">Study Guides</div>
                    </div>
                </div>

                {/* PPSC Exams */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular PPSC Posts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExamCard
                            title="PPSC Lecturer"
                            description="Complete preparation guide for PPSC Lecturer posts in various subjects"
                            href="/exams/ppsc/lecturer"
                            examType="PPSC"
                            eligibility="Master's Degree (16 years)"
                            duration="3 hours"
                            totalQuestions={100}
                            passingScore={60}
                            successRate={85}
                            applicants={2500}
                        />
                        <ExamCard
                            title="Assistant Director"
                            description="Comprehensive guide for PPSC Assistant Director examination"
                            href="/exams/ppsc/assistant-director"
                            examType="PPSC"
                            eligibility="Bachelor's Degree (16 years)"
                            duration="2.5 hours"
                            totalQuestions={100}
                            passingScore={60}
                            successRate={78}
                            applicants={1800}
                        />
                        <ExamCard
                            title="Tehsildar"
                            description="Everything you need to prepare for PPSC Tehsildar exam"
                            href="/exams/ppsc/tehsildar"
                            examType="PPSC"
                            eligibility="Bachelor's Degree"
                            duration="2 hours"
                            totalQuestions={100}
                            passingScore={60}
                            successRate={72}
                            applicants={3200}
                        />
                        <ExamCard
                            title="Subject Specialist"
                            description="Detailed guide for PPSC Subject Specialist positions"
                            href="/exams/ppsc/subject-specialist"
                            examType="PPSC"
                            eligibility="Master's Degree"
                            duration="3 hours"
                            totalQuestions={100}
                            passingScore={60}
                            successRate={80}
                        />
                        <ExamCard
                            title="Junior Clerk"
                            description="Preparation guide for PPSC Junior Clerk examination"
                            href="/exams/ppsc/junior-clerk"
                            examType="PPSC"
                            eligibility="Intermediate"
                            duration="2 hours"
                            totalQuestions={100}
                            passingScore={50}
                            successRate={65}
                        />
                        <ExamCard
                            title="Data Entry Operator"
                            description="Complete guide for PPSC Data Entry Operator exam"
                            href="/exams/ppsc/data-entry-operator"
                            examType="PPSC"
                            eligibility="Intermediate"
                            duration="2 hours"
                            totalQuestions={100}
                            passingScore={50}
                            successRate={70}
                        />
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <FileText className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Syllabus</h3>
                        <p className="text-sm text-slate-600 mb-4">Complete syllabus for all PPSC exams</p>
                        <a href="/exams/ppsc/syllabus" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                            View Syllabus →
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <Target className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Exam Pattern</h3>
                        <p className="text-sm text-slate-600 mb-4">Understand the exam structure and marking scheme</p>
                        <a href="/exams/ppsc/exam-pattern" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                            View Pattern →
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Preparation Strategy</h3>
                        <p className="text-sm text-slate-600 mb-4">Proven strategies to crack PPSC exams</p>
                        <a href="/exams/ppsc/preparation-strategy" className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                            View Strategy →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
