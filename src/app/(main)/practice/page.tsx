'use client';

import Link from 'next/link';
import { Clock, FileText, Award, ArrowRight } from 'lucide-react';

const mockExams = [
    {
        id: 'pms-160',
        title: 'PMS Model Paper 160',
        description: 'Complete 100-question mock exam covering all major subjects for PMS preparation',
        questions: 100,
        duration: 120,
        subjects: ['General Knowledge', 'Pakistan Affairs', 'Geography', 'Science', 'Computer', 'Math'],
        difficulty: 'Intermediate'
    }
];

export default function PracticePage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Mock Exams 📝
                    </h1>
                    <p className="text-lg text-gray-700">
                        Take full-length practice exams, get instant results with detailed explanations, and track your progress.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Timed Practice</h3>
                        <p className="text-sm text-gray-700">Real exam conditions with countdown timer</p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Instant DMC</h3>
                        <p className="text-sm text-gray-700">Detailed Marks Card with breakdown</p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Answer Key</h3>
                        <p className="text-sm text-gray-700">Detailed explanations for every question</p>
                    </div>
                </div>

                {/* Mock Exams List */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Mock Exams</h2>

                    <div className="space-y-6">
                        {mockExams.map((exam) => (
                            <div key={exam.id} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exam.title}</h3>
                                        <p className="text-gray-700">{exam.description}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                                        {exam.difficulty}
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FileText className="w-4 h-4" />
                                        <span>{exam.questions} Questions</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>{exam.duration} Minutes</span>
                                    </div>
                                </div>

                                {/* Subjects */}
                                <div className="mb-6">
                                    <div className="text-sm text-gray-600 mb-2">Subjects Covered:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {exam.subjects.map((subject) => (
                                            <span
                                                key={subject}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                                            >
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={`/practice/${exam.id}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5"
                                >
                                    <span>Start Exam</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Help Note */}
                <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100">
                    <h3 className="font-bold text-emerald-900 mb-2">💡 How It Works</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ Click "Start Exam" to begin</li>
                        <li>✅ Answer all questions within the time limit</li>
                        <li>✅ Submit to get instant DMC with score breakdown</li>
                        <li>✅ Review detailed answers and explanations</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
