import { Metadata } from 'next';
import Link from 'next/link';
import { Book, Globe2, Newspaper, Sparkles, Users, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'General Knowledge - PPSC Exam Preparation',
    description: 'Complete General Knowledge study material for PPSC exams. Pakistan Affairs, Current Affairs, World Geography, and more.',
};

const topics = [
    {
        id: 'pakistan-affairs',
        name: 'Pakistan Affairs',
        icon: Globe2,
        description: 'Constitution, Political System, Geography, Economy, Important Personalities',
        topics: 50,
        mcqs: 1000,
        color: 'emerald',
        gradient: 'from-emerald-500 to-green-600',
    },
    {
        id: 'current-affairs',
        name: 'Current Affairs',
        icon: Newspaper,
        description: 'Latest national and international events, monthly digests',
        topics: 20,
        mcqs: 400,
        color: 'blue',
        gradient: 'from-blue-500 to-cyan-600',
    },
    {
        id: 'world-geography',
        name: 'World Geography',
        icon: Globe2,
        description: 'Continents, Countries, Capitals, Rivers, Mountains',
        topics: 15,
        mcqs: 300,
        color: 'purple',
        gradient: 'from-purple-500 to-pink-600',
    },
    {
        id: 'everyday-science',
        name: 'Everyday Science',
        icon: Sparkles,
        description: 'Physics, Chemistry, Biology, Environmental Science',
        topics: 10,
        mcqs: 200,
        color: 'orange',
        gradient: 'from-orange-500 to-red-600',
    },
    {
        id: 'important-personalities',
        name: 'Important Personalities',
        icon: Users,
        description: 'National heroes, world leaders, scientists, authors',
        topics: 5,
        mcqs: 100,
        color: 'indigo',
        gradient: 'from-indigo-500 to-purple-600',
    },
];

export default function GeneralKnowledgePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/study-material"
                        className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        <span>Back to Study Material</span>
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            General Knowledge
                        </h1>
                        <p className="text-xl text-emerald-50 mb-6">
                            Master the most important section of PPSC exams. Comprehensive coverage of Pakistan Affairs, Current Affairs, and World Knowledge.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                <div className="text-2xl font-bold">100+</div>
                                <div className="text-sm text-emerald-100">Topics</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                <div className="text-2xl font-bold">2,000+</div>
                                <div className="text-sm text-emerald-100">MCQs</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                <div className="text-2xl font-bold">Daily</div>
                                <div className="text-sm text-emerald-100">Updates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose a Topic
                    </h2>
                    <p className="text-lg text-gray-600">
                        Select a topic to start learning
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic) => {
                        const Icon = topic.icon;
                        const isAvailable = topic.id === 'pakistan-affairs' || topic.id === 'world-geography';
                        const href = `/study-material/general-knowledge/${topic.id}`;

                        const cardContent = (
                            <>
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${topic.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {topic.name}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {topic.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                                        <span>{topic.topics} Topics</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                                        <span>{topic.mcqs} MCQs</span>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                {isAvailable ? (
                                    <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                                        <span>View Content</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                ) : (
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
                                        Coming Soon
                                    </div>
                                )}
                            </>
                        );

                        return isAvailable ? (
                            <Link
                                key={topic.id}
                                href={href}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-500 hover:scale-105 block"
                            >
                                {cardContent}
                            </Link>
                        ) : (
                            <div
                                key={topic.id}
                                className="group bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border-2 border-gray-100"
                            >
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Practice What You Learn
                    </h2>
                    <p className="text-xl text-emerald-50 mb-6 max-w-2xl mx-auto">
                        Test your knowledge with our comprehensive mock exams
                    </p>
                    <Link
                        href="/practice"
                        className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors"
                    >
                        Take Mock Exam
                    </Link>
                </div>
            </div>
        </main>
    );
}
