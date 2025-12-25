'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correct: string;
    explanation: string;
}

const sections = {
    'General Knowledge': [
        {
            id: 1,
            question: 'Where is the Kala Pani Jail located?',
            options: ['Lakshadweep Islands', 'Andaman Islands', 'Mauritius', 'Sri Lanka'],
            correct: 'B',
            explanation: 'The Kala Pani Jail, officially known as the Cellular Jail, is located in Port Blair, part of the Andaman and Nicobar Islands, India.'
        },
        {
            id: 7,
            question: 'The ongoing Israel-Palestine crisis resulted from which 1947 Decision?',
            options: ['The Balfour Declaration', 'The UN Partition Plan for Palestine', 'The creation of the State of Israel', 'The Sykes-Picot Agreement'],
            correct: 'B',
            explanation: 'The crisis has its roots in the UN General Assembly Resolution 181, adopted on November 29, 1947, proposing division of British Mandate Palestine.'
        },
        {
            id: 9,
            question: 'THALNOVA is a project of which sector?',
            options: ['Energy', 'Agriculture', 'Business', 'Healthcare'],
            correct: 'A',
            explanation: 'ThalNova is a 330MW lignite-fired power plant at Thar Coal Block-II in Sindh, part of CPEC.'
        },
        // Add more questions here - showing abbreviated version
    ],
    'Pakistan Affairs': [
        {
            id: 44,
            question: 'The first Muslim ruler to introduce price control in the sub-continent was:',
            options: ['Alauddin Khilji', 'Babar', 'Sher Shah Suri', 'Balban'],
            correct: 'A',
            explanation: 'Alauddin Khilji introduced the system of price control.'
        },
    ],
    'Current Affairs': [
        {
            id: 54,
            question: 'Cyril Ramaphosa is the president of which country?',
            options: ['Nigeria', 'Ghana', 'Kenya', 'South Africa'],
            correct: 'D',
            explanation: 'Cyril Ramaphosa is the President of South Africa.'
        },
    ],
    'Geography': [
        {
            id: 58,
            question: 'What is a peninsula?',
            options: ['A landmass surrounded by water on three sides', 'A landmass surrounded by water on all sides', 'Type of mountain range', 'A small island'],
            correct: 'A',
            explanation: 'A peninsula is a landmass surrounded by water on three sides.'
        },
    ],
    'Everyday Science': [
        {
            id: 76,
            question: 'A solar cell converts solar energy into:',
            options: ['Chemical energy', 'Electrical energy', 'Thermal energy', 'Kinetic energy'],
            correct: 'B',
            explanation: 'Solar cells convert solar energy directly into electrical energy.'
        },
    ],
    'Computer': [
        {
            id: 90,
            question: 'What is the use of a firewall in a computer?',
            options: ['To recover lost data', 'Protect against unauthorized access and threats', 'To increase processing speed', 'Monitor website traffic'],
            correct: 'B',
            explanation: 'A firewall protects against unauthorized access and security threats.'
        },
    ],
    'Mathematics': [
        {
            id: 95,
            question: 'If the mean of 7 terms is 40, the sum of the terms will be:',
            options: ['280', '400', '320', '140'],
            correct: 'A',
            explanation: 'Sum = Mean × Number of terms = 40 × 7 = 280'
        },
    ],
};

export default function PMSModelPaperPage() {
    const [expandedSections, setExpandedSections] = useState<string[]>(['General Knowledge']);

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        PMS Model Paper 160
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Detailed explanatory notes with 100 questions across 7 subjects.
                        Study the correct answers and understand the reasoning behind them to succeed in your exam.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-emerald-50 rounded-2xl p-4 text-center border-2 border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-700">100</div>
                        <div className="text-sm text-gray-600">Questions</div>
                    </div>
                    <div className="bg-emerald-50 rounded-2xl p-4 text-center border-2 border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-700">7</div>
                        <div className="text-sm text-gray-600">Subjects</div>
                    </div>
                    <div className="bg-emerald-50 rounded-2xl p-4 text-center border-2 border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-700">PMS</div>
                        <div className="text-sm text-gray-600">Level</div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-4">
                    {Object.entries(sections).map(([sectionName, questions]) => {
                        const isExpanded = expandedSections.includes(sectionName);

                        return (
                            <div key={sectionName} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                                {/* Section Header */}
                                <button
                                    onClick={() => toggleSection(sectionName)}
                                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                            <span className="text-emerald-700 font-bold">{questions.length}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">{sectionName}</h2>
                                    </div>
                                    {isExpanded ? (
                                        <ChevronUp className="w-6 h-6 text-gray-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-600" />
                                    )}
                                </button>

                                {/* Questions */}
                                {isExpanded && (
                                    <div className="bg-gray-50 p-6 space-y-6">
                                        {questions.map((q) => (
                                            <div key={q.id} className="bg-white rounded-xl p-6 border border-gray-200">
                                                {/* Question */}
                                                <div className="mb-4">
                                                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-2">
                                                        Question {q.id}
                                                    </span>
                                                    <h3 className="text-lg font-semibold text-gray-900">{q.question}</h3>
                                                </div>

                                                {/* Options */}
                                                <div className="space-y-2 mb-4">
                                                    {q.options.map((option, idx) => {
                                                        const optionLetter = String.fromCharCode(65 + idx);
                                                        const isCorrect = optionLetter === q.correct;

                                                        return (
                                                            <div
                                                                key={idx}
                                                                className={`flex items-center gap-3 p-3 rounded-lg border-2 ${isCorrect
                                                                        ? 'bg-emerald-50 border-emerald-500'
                                                                        : 'bg-white border-gray-200'
                                                                    }`}
                                                            >
                                                                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect
                                                                        ? 'bg-emerald-500 text-white'
                                                                        : 'bg-gray-200 text-gray-700'
                                                                    }`}>
                                                                    {optionLetter}
                                                                </span>
                                                                <span className={isCorrect ? 'text-emerald-900 font-medium' : 'text-gray-700'}>
                                                                    {option}
                                                                </span>
                                                                {isCorrect && (
                                                                    <CheckCircle className="ml-auto w-5 h-5 text-emerald-600" />
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Explanation */}
                                                <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                                    <div className="flex items-start gap-2">
                                                        <span className="font-semibold text-emerald-900 text-sm">Explanation:</span>
                                                        <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Note */}
                <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-100">
                    <h3 className="font-bold text-emerald-900 mb-2">📚 Study Note</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        This is a comprehensive model paper covering all major subjects.
                        Expand each section to practice questions and understand detailed explanations.
                        Keep practicing consistently to build a solid foundation for exam success!
                    </p>
                </div>
            </div>
        </main>
    );
}
