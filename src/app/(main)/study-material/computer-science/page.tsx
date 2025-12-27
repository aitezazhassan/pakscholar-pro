import { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, FileSpreadsheet, Presentation, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Computer Science - PPSC Exam Preparation',
    description: 'Complete Computer Science study material for PPSC exams. MS Office, Internet, and Computer Fundamentals.',
};

const topics = [
    {
        id: 'ms-office',
        name: 'MS Office',
        icon: FileSpreadsheet,
        description: 'MS Word, Excel, PowerPoint - Features, Functions, Shortcuts',
        topics: 12,
        mcqs: 250,
        gradient: 'from-cyan-500 to-blue-600',
    },
    {
        id: 'internet',
        name: 'Internet Basics',
        icon: Globe,
        description: 'Web Browsers, Email, Search Engines, Social Media',
        topics: 8,
        mcqs: 150,
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        id: 'fundamentals',
        name: 'Computer Fundamentals',
        icon: Monitor,
        description: 'Hardware, Software, Operating Systems, Storage Devices',
        topics: 5,
        mcqs: 100,
        gradient: 'from-purple-500 to-pink-600',
    },
];

export default function ComputerSciencePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/study-material" className="inline-flex items-center gap-2 text-cyan-100 hover:text-white mb-6 transition-colors">
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        <span>Back to Study Material</span>
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Computer Science</h1>
                        <p className="text-xl text-cyan-50 mb-6">
                            Master essential computer skills for PPSC exams. MS Office, Internet, and fundamentals.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm text-cyan-100">Topics</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-sm text-cyan-100">MCQs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {topics.map((topic) => {
                        const Icon = topic.icon;
                        return (
                            <div key={topic.id} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:scale-105">
                                <div className={`w-14 h-14 bg-gradient-to-r ${topic.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.name}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{topic.description}</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <CheckCircle className="w-3 h-3 text-cyan-600" />
                                        <span>{topic.topics} Topics</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <CheckCircle className="w-3 h-3 text-cyan-600" />
                                        <span>{topic.mcqs} MCQs</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                                    Coming Soon
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
