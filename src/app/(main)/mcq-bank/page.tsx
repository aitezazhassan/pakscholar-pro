import { Metadata } from 'next';
import Link from 'next/link';
import { Book, Globe, Cpu, Calculator, Languages, Sparkles, Newspaper, FlaskConical, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MCQ Bank - Practice by Subject | PPSC Preparation',
    description: 'Practice MCQs by subject for PPSC exams. General Knowledge, Geography, Science, Computer, Mathematics, and more. Track your progress and master each topic.',
};

const subjects = [
    {
        id: 'general-knowledge',
        name: 'General Knowledge',
        icon: Globe,
        description: 'History, Personalities, Economics, Literature, Awards, International Relations',
        questionCount: 28,
        topics: ['History', 'Personalities', 'Economics', 'Literature', 'Awards', 'International Relations'],
        gradient: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-50',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
    {
        id: 'geography',
        name: 'Geography',
        icon: Globe,
        description: 'Pakistan Geography, Physical Geography, Countries, Climate, Plate Tectonics',
        questionCount: 32,
        topics: ['Pakistan Geography', 'Physical Geography', 'Countries', 'Climate'],
        gradient: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        id: 'everyday-science',
        name: 'Everyday Science',
        icon: FlaskConical,
        description: 'Biology, Chemistry, Physics, Environment, Technology, Health',
        questionCount: 18,
        topics: ['Biology', 'Chemistry', 'Physics', 'Environment'],
        gradient: 'from-purple-500 to-pink-600',
        bgColor: 'bg-purple-50',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
    },
    {
        id: 'pakistan-affairs',
        name: 'Pakistan Affairs',
        icon: Book,
        description: 'Constitution, Politics, History, Culture, Economy, Government',
        questionCount: 9,
        topics: ['Constitution', 'Politics', 'History', 'Culture'],
        gradient: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
    },
    {
        id: 'current-affairs',
        name: 'Current Affairs',
        icon: Newspaper,
        description: 'World Events, Leaders, Conflicts, International Organizations',
        questionCount: 5,
        topics: ['World Events', 'Leaders', 'International'],
        gradient: 'from-orange-500 to-red-600',
        bgColor: 'bg-orange-50',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
    },
    {
        id: 'computer',
        name: 'Computer',
        icon: Cpu,
        description: 'MS Office, AI, Software, Hardware, Internet, Shortcuts',
        questionCount: 12,
        topics: ['MS Office', 'AI', 'Software', 'Hardware'],
        gradient: 'from-cyan-500 to-blue-600',
        bgColor: 'bg-cyan-50',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
    },
    {
        id: 'mathematics',
        name: 'Mathematics',
        icon: Calculator,
        description: 'Arithmetic, Algebra, Geometry, Ratio, Problem Solving',
        questionCount: 9,
        topics: ['Arithmetic', 'Algebra', 'Geometry', 'Ratio'],
        gradient: 'from-red-500 to-orange-600',
        bgColor: 'bg-red-50',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
    },
    {
        id: 'english',
        name: 'English',
        icon: Book,
        description: 'Vocabulary, Analogy, Grammar, Sentence Correction',
        questionCount: 5,
        topics: ['Vocabulary', 'Analogy', 'Grammar'],
        gradient: 'from-indigo-500 to-purple-600',
        bgColor: 'bg-indigo-50',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
    },
    {
        id: 'islamic-studies',
        name: 'Islamic Studies',
        icon: Sparkles,
        description: 'Basic Islamic Knowledge, Quran, Prophets, Important Dates',
        questionCount: 3,
        topics: ['Basic Knowledge', 'Quran', 'History'],
        gradient: 'from-teal-500 to-green-600',
        bgColor: 'bg-teal-50',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
    },
    {
        id: 'urdu',
        name: 'Urdu',
        icon: Languages,
        description: 'Grammar (قواعد), Vocabulary, Muhawarat',
        questionCount: 5,
        topics: ['Grammar', 'Vocabulary', 'Muhawarat'],
        gradient: 'from-pink-500 to-purple-600',
        bgColor: 'bg-pink-50',
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
    },
];

const totalQuestions = subjects.reduce((sum, s) => sum + s.questionCount, 0);

export default function MCQBankPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            MCQ Bank
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Practice subject-wise MCQs to master each topic. All questions sourced from past PPSC exams with detailed explanations.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 md:gap-12">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400">200+</div>
                                <div className="text-slate-400">Total MCQs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-400">{subjects.length}</div>
                                <div className="text-slate-400">Subjects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-purple-400">2</div>
                                <div className="text-slate-400">Exams</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subjects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose a Subject
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Select a subject to practice MCQs. Each question comes with a detailed explanation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject) => {
                        const Icon = subject.icon;
                        return (
                            <Link
                                key={subject.id}
                                href={`/mcq-bank/${subject.id}`}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:scale-105"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${subject.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {subject.name}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {subject.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        <span>{subject.questionCount} MCQs</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                                        <span>{subject.topics.length} Topics</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                                    <span>Start Practice</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How MCQ Bank Works</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-emerald-600">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Subject</h3>
                            <p className="text-gray-600">Select the subject you want to practice from above</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Practice MCQs</h3>
                            <p className="text-gray-600">Answer questions and see detailed explanations</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Track Progress</h3>
                            <p className="text-gray-600">Monitor your improvement over time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready for a Full Mock Exam?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Test yourself with complete PPSC mock exams under timed conditions
                    </p>
                    <Link
                        href="/practice"
                        className="inline-block px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-colors"
                    >
                        Take Mock Exam
                    </Link>
                </div>
            </div>
        </main>
    );
}
