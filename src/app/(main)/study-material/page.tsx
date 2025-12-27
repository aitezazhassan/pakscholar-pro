import { Metadata } from 'next';
import Link from 'next/link';
import { Book, Globe, Languages, Calculator, Monitor, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Study Material - Complete PPSC Exam Preparation',
    description: 'Comprehensive study material for PPSC exams. Cover all subjects with detailed notes, MCQs, and practice questions.',
};

const subjects = [
    {
        id: 'general-knowledge',
        name: 'General Knowledge',
        icon: Globe,
        description: 'Pakistan Affairs, Current Affairs, World Geography, Everyday Science',
        topics: 100,
        mcqs: 2000,
        color: 'emerald',
        gradient: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'english',
        name: 'English',
        icon: Book,
        description: 'Grammar, Vocabulary, Comprehension, Essay Writing',
        topics: 50,
        mcqs: 1000,
        color: 'blue',
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'urdu',
        name: 'Urdu',
        icon: Languages,
        description: 'Grammar (قواعد), Comprehension, Essay Topics',
        topics: 30,
        mcqs: 500,
        color: 'purple',
        gradient: 'from-purple-500 to-pink-600',
    },
    {
        id: 'mathematics',
        name: 'Mathematics',
        icon: Calculator,
        description: 'Arithmetic, Algebra, Geometry, Statistics',
        topics: 40,
        mcqs: 800,
        color: 'orange',
        gradient: 'from-orange-500 to-red-600',
    },
    {
        id: 'computer-science',
        name: 'Computer Science',
        icon: Monitor,
        description: 'MS Office, Internet Basics, Computer Fundamentals',
        topics: 25,
        mcqs: 400,
        color: 'cyan',
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        id: 'islamic-studies',
        name: 'Islamic Studies',
        icon: Sparkles,
        description: 'Basic Islamic Knowledge, Important Dates, Personalities',
        topics: 20,
        mcqs: 300,
        color: 'green',
        gradient: 'from-green-500 to-emerald-600',
    },
];

const stats = [
    { label: 'Total Topics', value: '265+' },
    { label: 'Practice MCQs', value: '5,000+' },
    { label: 'Updated', value: 'Daily' },
];

export default function StudyMaterialPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Complete Study Material
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-3xl mx-auto">
                            Everything you need to ace PPSC exams. Comprehensive notes, practice MCQs, and expert guidance.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                                    <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm md:text-base text-emerald-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subjects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Subject
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Select a subject to access comprehensive study material, practice questions, and expert notes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {subjects.map((subject) => {
                        const Icon = subject.icon;
                        return (
                            <Link
                                key={subject.id}
                                href={`/study-material/${subject.id}`}
                                className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:scale-105"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${subject.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {subject.name}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {subject.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        <span>{subject.topics} Topics</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        <span>{subject.mcqs} MCQs</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                                    <span>Start Learning</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Our Study Material?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">PPSC Pattern Aligned</h3>
                            <p className="text-gray-600">Content structured according to official PPSC exam patterns</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Updates</h3>
                            <p className="text-gray-600">Content updated daily with latest current affairs and trends</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Practice MCQs</h3>
                            <p className="text-gray-600">Thousands of practice questions with detailed explanations</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Preparation?
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful candidates who prepared with PakScholar Pro
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/practice"
                            className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors"
                        >
                            Take Mock Exam
                        </Link>
                        <Link
                            href="/dashboard"
                            className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-colors"
                        >
                            View Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
