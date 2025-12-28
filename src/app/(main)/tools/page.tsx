import { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, BookOpen, FileText, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Student Tools - CGPA Calculator, Exam Prep Tools | PakScholar Pro',
    description: 'Free student tools for PPSC exam preparation. CGPA Calculator, Grade Calculator, Study Planner, and more useful utilities.',
};

const tools = [
    {
        id: 'cgpa-calculator',
        name: 'CGPA Calculator',
        description: 'Calculate your Cumulative GPA instantly with detailed semester-wise breakdown',
        icon: Calculator,
        gradient: 'from-emerald-500 to-teal-600',
        href: '/tools/cgpa-calculator',
        stats: '12,500+ calculations',
        isNew: true,
    },
    {
        id: 'grade-calculator',
        name: 'Grade Calculator',
        description: 'Convert marks to grades and calculate GPA for individual subjects',
        icon: FileText,
        gradient: 'from-blue-500 to-cyan-600',
        href: '/tools/grade-calculator',
        stats: 'Coming Soon',
        isNew: false,
        comingSoon: true,
    },
    {
        id: 'study-planner',
        name: 'Study Planner',
        description: 'Create personalized study schedules for PPSC exam preparation',
        icon: Clock,
        gradient: 'from-purple-500 to-pink-600',
        href: '/tools/study-planner',
        stats: 'Coming Soon',
        isNew: false,
        comingSoon: true,
    },
    {
        id: 'notes-generator',
        name: 'Notes Generator',
        description: 'Generate study notes from topics using AI assistance',
        icon: Sparkles,
        gradient: 'from-orange-500 to-red-600',
        href: '/tools/notes-generator',
        stats: 'Coming Soon',
        isNew: false,
        comingSoon: true,
    },
];

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Student Tools
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Free utilities to help you track progress, calculate grades, and plan your study schedule
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 md:gap-12">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-emerald-400">{tools.length}</div>
                                <div className="text-slate-400">Tools</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-400">Free</div>
                                <div className="text-slate-400">Always</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-purple-400">Fast</div>
                                <div className="text-slate-400">Results</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose a Tool
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Select a tool to get started. More tools are being added regularly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {tools.map((tool) => {
                        const Icon = tool.icon;
                        const isAvailable = !tool.comingSoon;

                        const content = (
                            <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 transition-all duration-300 ${isAvailable ? 'hover:shadow-2xl hover:border-transparent hover:scale-105 cursor-pointer' : 'opacity-70'
                                }`}>
                                {/* Badge */}
                                {tool.isNew && (
                                    <span className="absolute -top-2 -right-2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        NEW
                                    </span>
                                )}
                                {tool.comingSoon && (
                                    <span className="absolute -top-2 -right-2 px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full shadow-lg">
                                        SOON
                                    </span>
                                )}

                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${tool.gradient} rounded-xl flex items-center justify-center mb-4 ${isAvailable ? 'group-hover:scale-110' : ''} transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-medium ${tool.comingSoon ? 'text-gray-400' : 'text-emerald-600'}`}>
                                        {tool.stats}
                                    </span>

                                    {isAvailable && (
                                        <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                                            <span>Open</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                        return isAvailable ? (
                            <Link key={tool.id} href={tool.href} className="group">
                                {content}
                            </Link>
                        ) : (
                            <div key={tool.id}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Practice?
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                        Use our MCQ Bank and Mock Exams to prepare for PPSC exams
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/mcq-bank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                            MCQ Bank
                        </Link>
                        <Link
                            href="/practice"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            Mock Exams
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
