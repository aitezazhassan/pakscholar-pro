import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'World Geography: Geographical Formations - PPSC Preparation',
    description: 'Master geographical formations for PPSC exams. Learn about Isthmus, Strait, Island, Lake, and Peninsula with memory tricks and practice MCQs.',
};

export default function GeographicalFormationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/study-material" className="hover:text-emerald-600">Study Material</Link>
                        <span>/</span>
                        <Link href="/study-material/general-knowledge" className="hover:text-emerald-600">General Knowledge</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Geographical Formations</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            World Geography
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            Medium Difficulty
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Geographical Formations
                    </h1>
                    <p className="text-xl text-emerald-50">
                        Master the 5 key geographical formations with memory tricks and exam-focused MCQs
                    </p>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Quick Facts */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-emerald-600" />
                        Quick Facts
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>5 major geographical formations are key for PPSC exams</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>They work in pairs of opposites for easy memorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>Isthmus & Strait are "connectors" (land vs water)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>Island & Lake are "the surrounded" (land in water vs water in land)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>Peninsula is the "almost-island" (3 sides water, 1 side land)</span>
                        </li>
                    </ul>
                </div>

                {/* Introduction */}
                <section className="prose prose-lg max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Geography is a high-scoring section in PPSC exams, and understanding geographical formations is essential. You don't need to be a scientist; you just need to understand the shapes on the map. This topic covers 5 major formations that frequently appear in competitive exams. The key to mastering them is understanding their relationships as pairs of opposites, making them much easier to remember and apply during exams.
                    </p>
                </section>

                {/* The Connectors */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Connectors: Isthmus & Strait</h2>

                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Isthmus (The Land Bridge)</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Definition:</strong> An Isthmus is a narrow strip of land that connects two larger landmasses and separates two bodies of water.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p className="text-blue-900">
                                <strong>Memory Trick:</strong> Think of it as a bridge made of mud and rock. If you walk across it, you have water on your left and right.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-gray-900 mb-2">Key Example - Isthmus of Panama:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Connects North America to South America</li>
                                <li>Separates the Atlantic Ocean from the Pacific Ocean</li>
                                <li>Home to the Panama Canal</li>
                                <li>Approximately 80 km (50 miles) wide at its narrowest point</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Strait (The Water Channel)</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Definition:</strong> A Strait is a narrow passage of water connecting two large bodies of water and separating two landmasses.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p className="text-blue-900">
                                <strong>Memory Trick:</strong> It is the exact opposite of an Isthmus. It is a "shortcut" for ships through water.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-gray-900 mb-2">Key Examples:</p>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium text-gray-900">Strait of Malacca:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                        <li>The longest strait in the world (800 km)</li>
                                        <li>Separates Malaysia and Indonesia</li>
                                        <li>Connects Indian Ocean to Pacific Ocean</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Bering Strait:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                        <li>Separates Asia (Russia) from North America (USA/Alaska)</li>
                                        <li>Approximately 85 km wide</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                            <thead className="bg-emerald-600 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left font-semibold">Feature</th>
                                    <th className="px-6 py-3 text-left font-semibold">Isthmus</th>
                                    <th className="px-6 py-3 text-left font-semibold">Strait</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Material</td>
                                    <td className="px-6 py-4 text-gray-700">Land</td>
                                    <td className="px-6 py-4 text-gray-700">Water</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Connects</td>
                                    <td className="px-6 py-4 text-gray-700">2 Landmasses</td>
                                    <td className="px-6 py-4 text-gray-700">2 Bodies of Water</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Separates</td>
                                    <td className="px-6 py-4 text-gray-700">2 Bodies of Water</td>
                                    <td className="px-6 py-4 text-gray-700">2 Landmasses</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Example</td>
                                    <td className="px-6 py-4 text-gray-700">Panama</td>
                                    <td className="px-6 py-4 text-gray-700">Malacca</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* The Surrounded */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Surrounded: Island & Lake</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Island (Land in Water)</h3>
                            <p className="text-gray-700 mb-3">
                                A piece of land completely surrounded by water on all sides.
                            </p>
                            <div className="bg-purple-50 rounded-lg p-3 mb-3">
                                <p className="text-sm text-purple-900">
                                    <strong>Example:</strong> Greenland - World's largest island
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lake (Water in Land)</h3>
                            <p className="text-gray-700 mb-3">
                                A body of water completely surrounded by land on all sides.
                            </p>
                            <div className="bg-cyan-50 rounded-lg p-3 mb-3">
                                <p className="text-sm text-cyan-900">
                                    <strong>Example:</strong> Caspian Sea - World's largest lake
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Peninsula */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The "Almost-Island": Peninsula</h2>

                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                        <p className="text-gray-700 mb-4">
                            <strong>Definition:</strong> A piece of land surrounded by water on three sides but connected to the mainland on the fourth side.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                            <p className="text-orange-900">
                                <strong>Etymology:</strong> From Latin <em>Paene</em> (almost) + <em>Insula</em> (island) = "Almost Island"
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-gray-900 mb-2">Arabian Peninsula - World's Largest:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Includes: Saudi Arabia, Yemen, Oman, UAE, Qatar, Bahrain, Kuwait</li>
                                <li>Area: approximately 3.2 million km²</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Key Points */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Points to Remember</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Isthmus = Land connector (connects lands, separates waters)',
                            'Strait = Water connector (connects waters, separates lands)',
                            'Island = Land surrounded by water (Greenland is largest)',
                            'Lake = Water surrounded by land (Caspian Sea is largest)',
                            'Peninsula = Almost an island (Arabian Peninsula is largest)',
                            'Panama Isthmus connects North and South America',
                            'Strait of Malacca is world\'s longest strait (800 km)',
                            'Caspian Sea is called a "sea" but is actually a lake',
                            'Lake Superior is largest freshwater lake by area',
                            'Australia is a continent, not an island',
                        ].map((point, index) => (
                            <div key={index} className="flex items-start gap-2 bg-white rounded-lg p-4 border border-gray-200">
                                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{point}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practice MCQs Notice */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 text-center text-white mb-8">
                    <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
                    <p className="text-emerald-50 mb-6">
                        Test your knowledge with 12 PPSC-oriented MCQs
                    </p>
                    <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                        Practice MCQs Coming Soon
                    </div>
                </div>

                {/* Related Topics */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/study-material/general-knowledge" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all">
                            <span className="font-medium text-gray-900">Back to General Knowledge</span>
                            <ArrowRight className="w-5 h-5 text-emerald-600" />
                        </Link>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                            <span className="font-medium text-gray-500">More topics coming soon</span>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
