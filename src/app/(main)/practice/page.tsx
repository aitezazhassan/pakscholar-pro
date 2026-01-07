import { Metadata } from 'next';
import { Target, Clock, Trophy, TrendingUp } from 'lucide-react';
import { MockExamCard } from '@/components/ui/MockExamCard';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Practice - PPSC Mock Exams & Tests',
    description: '20+ mock exams for PPSC preparation. Full-length practice tests, subject-specific quizzes, and timed practice sessions with instant results.',
    keywords: ['PPSC mock exam', 'PPSC practice test', 'PPSC online test', 'mock test free'],
};

export default function PracticeHub() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BreadcrumbNav items={[{ label: 'Practice' }]} />

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Practice & Mock Exams
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Test your knowledge with full-length mock exams and targeted practice sessions
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                        <div className="text-sm text-slate-600">Mock Exams</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">1000+</div>
                        <div className="text-sm text-slate-600">Questions</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-1">8,500+</div>
                        <div className="text-sm text-slate-600">Attempts</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-1">78%</div>
                        <div className="text-sm text-slate-600">Avg Score</div>
                    </div>
                </div>

                {/* PPSC Mock Exams */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">PPSC Mock Exams</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <MockExamCard
                            title="PPSC Lecturer Mock Exam 01"
                            description="Full-length mock exam for PPSC Lecturer preparation"
                            href="/practice/mock-exams/ppsc-lecturer-01"
                            duration={180}
                            totalQuestions={100}
                            difficulty="Medium"
                            attempts={1250}
                            averageScore={75}
                            examType="PPSC"
                        />
                        <MockExamCard
                            title="PPSC Lecturer Mock Exam 02"
                            description="Advanced mock exam with challenging questions"
                            href="/practice/mock-exams/ppsc-lecturer-02"
                            duration={180}
                            totalQuestions={100}
                            difficulty="Hard"
                            attempts={980}
                            averageScore={68}
                            examType="PPSC"
                        />
                        <MockExamCard
                            title="PPSC Tehsildar Mock Exam"
                            description="Complete practice test for Tehsildar exam"
                            href="/practice/mock-exams/ppsc-tehsildar-01"
                            duration={120}
                            totalQuestions={100}
                            difficulty="Medium"
                            attempts={1500}
                            averageScore={72}
                            examType="PPSC"
                        />
                        <MockExamCard
                            title="PPSC Assistant Director Mock"
                            description="Full-length practice test for Assistant Director"
                            href="/practice/mock-exams/ppsc-assistant-director-01"
                            duration={150}
                            totalQuestions={100}
                            difficulty="Medium"
                            attempts={850}
                            averageScore={70}
                            examType="PPSC"
                        />
                    </div>
                </div>

                {/* Subject-Specific Tests */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Subject-Specific Tests</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <MockExamCard
                            title="General Knowledge Full Test"
                            description="Comprehensive test covering all GK topics"
                            href="/practice/mock-exams/general-knowledge-full"
                            duration={60}
                            totalQuestions={50}
                            difficulty="Medium"
                            attempts={2100}
                            averageScore={80}
                            examType="Subject"
                        />
                        <MockExamCard
                            title="Islamic Studies Full Test"
                            description="Complete Islamic Studies practice test"
                            href="/practice/mock-exams/islamic-studies-full"
                            duration={60}
                            totalQuestions={40}
                            difficulty="Easy"
                            attempts={1800}
                            averageScore={85}
                            examType="Subject"
                        />
                        <MockExamCard
                            title="Mathematics Full Test"
                            description="Challenging mathematics practice test"
                            href="/practice/mock-exams/mathematics-full"
                            duration={90}
                            totalQuestions={30}
                            difficulty="Hard"
                            attempts={950}
                            averageScore={62}
                            examType="Subject"
                        />
                        <MockExamCard
                            title="English Full Test"
                            description="Grammar, vocabulary, and comprehension test"
                            href="/practice/mock-exams/english-full"
                            duration={60}
                            totalQuestions={35}
                            difficulty="Medium"
                            attempts={1600}
                            averageScore={76}
                            examType="Subject"
                        />
                        <MockExamCard
                            title="Computer Science Full Test"
                            description="Complete CS fundamentals practice test"
                            href="/practice/mock-exams/computer-science-full"
                            duration={60}
                            totalQuestions={30}
                            difficulty="Medium"
                            attempts={1200}
                            averageScore={74}
                            examType="Subject"
                        />
                        <MockExamCard
                            title="Pakistan Studies Full Test"
                            description="History, geography, and current affairs test"
                            href="/practice/mock-exams/pakistan-studies-full"
                            duration={60}
                            totalQuestions={40}
                            difficulty="Easy"
                            attempts={1700}
                            averageScore={82}
                            examType="Subject"
                        />
                    </div>
                </div>

                {/* Quick Practice Options */}
                <div className="grid md:grid-cols-4 gap-6">
                    <Link href="/practice/topic-quiz" className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                        <Target className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Topic Quiz</h3>
                        <p className="text-sm text-slate-600">Practice specific topics</p>
                    </Link>
                    <Link href="/practice/timed-practice" className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                        <Clock className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Timed Practice</h3>
                        <p className="text-sm text-slate-600">Improve your speed</p>
                    </Link>
                    <Link href="/practice/random-quiz" className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
                        <Trophy className="w-8 h-8 text-purple-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Random Quiz</h3>
                        <p className="text-sm text-slate-600">Mixed questions</p>
                    </Link>
                    <Link href="/practice/wrong-answers-review" className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                        <TrendingUp className="w-8 h-8 text-orange-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Review Mistakes</h3>
                        <p className="text-sm text-slate-600">Learn from errors</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
