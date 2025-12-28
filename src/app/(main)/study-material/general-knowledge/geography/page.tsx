import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, Globe, Compass, Waves, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Geography - Complete PPSC Study Guide | Physical, Human & Economic Geography',
    description: 'Master Geography for PPSC exams. Solar System, Mass Movements, Ocean Currents, Economic Sectors, Environmental Determinism vs Possibilism. PMS level content with MCQs.',
};

export default function GeographyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/study-material" className="hover:text-blue-600">Study Material</Link>
                        <span>/</span>
                        <Link href="/study-material/general-knowledge" className="hover:text-blue-600">General Knowledge</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Geography</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            PMS 2023 Level
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            High Importance
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Geography - Complete Guide
                    </h1>
                    <p className="text-xl text-blue-50">
                        Physical, Human & Economic Geography with detailed explanations and practice MCQs
                    </p>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Quick Navigation */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        Topics Covered
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            { icon: Globe, text: 'Solar System & Planets' },
                            { icon: Compass, text: 'Mass Movements' },
                            { icon: Waves, text: 'Atmospheric Humidity & Condensation' },
                            { icon: Waves, text: 'Ocean Currents (Pacific)' },
                            { icon: Users, text: 'Environmental Determinism vs Possibilism' },
                            { icon: Users, text: 'Economic Sectors (Primary, Secondary, Tertiary)' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <item.icon className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 1: Physical Geography */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Part 1: Physical Geography</h2>
                    </div>

                    {/* Solar System */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Sun and the Solar System</h3>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p className="text-amber-900 font-medium">
                                PMS 2023 Question: Describe the function of the Sun as a dominant body of the solar system and briefly survey each of the sun's planets.
                            </p>
                        </div>

                        <h4 className="text-lg font-bold text-gray-900 mb-3">Functions of the Sun:</h4>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div><strong>Gravitational Anchor:</strong> Contains 99.86% of total solar system mass, governing all planetary orbits</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div><strong>Energy Source:</strong> Nuclear fusion (hydrogen → helium) radiates energy driving Earth's climate and weather</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div><strong>Photosynthesis Driver:</strong> Primary energy source for all food chains on Earth</div>
                            </li>
                        </ul>

                        <h4 className="text-lg font-bold text-gray-900 mb-3">The Planets:</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Planet</th>
                                        <th className="px-4 py-2 text-left">Key Facts</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm">
                                    <tr><td className="px-4 py-2 font-medium">Mercury</td><td className="px-4 py-2">Smallest, closest to Sun, extreme temperature fluctuations, no atmosphere</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Venus</td><td className="px-4 py-2">"Earth's Twin" (similar size), hottest planet, runaway greenhouse effect</td></tr>
                                    <tr><td className="px-4 py-2 font-medium">Earth</td><td className="px-4 py-2">Only planet with known life, nitrogen-oxygen atmosphere, liquid water</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Mars</td><td className="px-4 py-2">"Red Planet" (iron oxide), largest volcano Olympus Mons</td></tr>
                                    <tr><td className="px-4 py-2 font-medium">Jupiter</td><td className="px-4 py-2">Largest planet, gas giant, Great Red Spot storm, moon Ganymede</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Saturn</td><td className="px-4 py-2">Famous ring system (ice/rock), density lower than water</td></tr>
                                    <tr><td className="px-4 py-2 font-medium">Uranus</td><td className="px-4 py-2">Ice giant, blue-green (methane), rotates on its side</td></tr>
                                    <tr className="bg-gray-50"><td className="px-4 py-2 font-medium">Neptune</td><td className="px-4 py-2">Farthest planet, ice giant, supersonic winds</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mass Movement */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mass Movement (Mass Wasting)</h3>

                        <p className="text-gray-700 mb-4">
                            <strong>Definition:</strong> Downslope movement of rock, regolith, and soil under gravity's direct influence—without a transporting medium like wind, water, or ice.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-50 rounded-xl p-4">
                                <h4 className="font-bold text-red-900 mb-2">Falls</h4>
                                <p className="text-sm text-gray-700"><strong>Rockfall:</strong> Rapid free-fall from steep cliffs</p>
                                <p className="text-sm text-gray-600"><em>Cause: Frost wedging (freeze-thaw cycles)</em></p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-4">
                                <h4 className="font-bold text-orange-900 mb-2">Slides</h4>
                                <p className="text-sm text-gray-700"><strong>Landslide/Slump:</strong> Material moves along slip plane</p>
                                <p className="text-sm text-gray-600"><em>Cause: Heavy rain, earthquakes, unstable slopes</em></p>
                            </div>
                            <div className="bg-amber-50 rounded-xl p-4">
                                <h4 className="font-bold text-amber-900 mb-2">Flows</h4>
                                <p className="text-sm text-gray-700"><strong>Mudflow/Earthflow:</strong> Material + water moves like fluid</p>
                                <p className="text-sm text-gray-600"><em>Cause: Heavy rains in semi-arid regions, volcanic lahars</em></p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-4">
                                <h4 className="font-bold text-green-900 mb-2">Creep</h4>
                                <p className="text-sm text-gray-700"><strong>Soil Creep:</strong> Extremely slow, gradual movement</p>
                                <p className="text-sm text-gray-600"><em>Cause: Expansion/contraction from wetting/drying</em></p>
                            </div>
                        </div>
                    </div>

                    {/* Atmospheric Humidity */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Atmospheric Humidity</h3>

                        <div className="space-y-4 mb-4">
                            <div className="bg-blue-50 rounded-lg p-4">
                                <h4 className="font-bold text-blue-900">Absolute Humidity</h4>
                                <p className="text-sm text-gray-700">Mass of water vapor per volume of air (g/m³). Changes with air expansion/contraction.</p>
                            </div>
                            <div className="bg-cyan-50 rounded-lg p-4">
                                <h4 className="font-bold text-cyan-900">Specific Humidity</h4>
                                <p className="text-sm text-gray-700">Mass of water vapor per mass of air (g/kg). Remains constant regardless of volume.</p>
                            </div>
                            <div className="bg-teal-50 rounded-lg p-4">
                                <h4 className="font-bold text-teal-900">Relative Humidity (RH)</h4>
                                <p className="text-sm text-gray-700">Actual vapor ÷ Maximum vapor at that temperature × 100%. Most commonly used measure.</p>
                            </div>
                        </div>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                            <h4 className="font-bold text-purple-900 mb-2">Condensation Process</h4>
                            <p className="text-sm text-gray-700">Occurs when air cools to <strong>Dew Point</strong> (RH = 100%) in the presence of <strong>Condensation Nuclei</strong> (dust, salt particles).</p>
                            <p className="text-sm text-gray-600 mt-2">Forms: Clouds, Fog, Dew, Frost</p>
                        </div>
                    </div>

                    {/* Ocean Currents */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pacific Ocean Currents</h3>

                        <h4 className="text-lg font-bold text-gray-900 mb-3">Factors Creating Currents:</h4>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Wind:</strong> Trade Winds and Westerlies drag surface water</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Coriolis Effect:</strong> Deflects currents right (N. Hemisphere) / left (S. Hemisphere)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Thermohaline Circulation:</strong> Temperature and salinity differences drive deep currents</span>
                            </li>
                        </ul>

                        <h4 className="text-lg font-bold text-gray-900 mb-3">Major Currents:</h4>
                        <div className="space-y-2">
                            {[
                                { name: 'North Equatorial Current', desc: 'E→W, driven by Trade Winds', temp: 'Warm' },
                                { name: 'Kuroshio Current (Japan)', desc: 'Northward along Japan coast', temp: 'Warm' },
                                { name: 'North Pacific Current', desc: 'W→E toward North America', temp: 'Warm' },
                                { name: 'California Current', desc: 'Southward along US West Coast', temp: 'Cold' },
                                { name: 'Peru/Humboldt Current', desc: 'Northward along South America, rich fisheries', temp: 'Cold' },
                            ].map((current, idx) => (
                                <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${current.temp === 'Warm' ? 'bg-red-50' : 'bg-blue-50'}`}>
                                    <div>
                                        <span className="font-bold text-gray-900">{current.name}</span>
                                        <span className="text-sm text-gray-600 ml-2">{current.desc}</span>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${current.temp === 'Warm' ? 'bg-red-200 text-red-800' : 'bg-blue-200 text-blue-800'}`}>
                                        {current.temp}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Human Geography */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-8 h-8 text-green-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Part 2: Human & Economic Geography</h2>
                    </div>

                    {/* Determinism vs Possibilism */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Determinism vs Possibilism</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 rounded-xl p-5">
                                <h4 className="text-xl font-bold text-red-900 mb-3">Environmental Determinism</h4>
                                <p className="text-gray-700 mb-3">Physical environment strictly controls human behavior, culture, and development.</p>
                                <p className="text-sm text-gray-600 mb-2"><strong>Perspective:</strong> "Nature is the master"</p>
                                <div className="bg-white rounded-lg p-3 mt-3">
                                    <p className="text-sm text-gray-700"><strong>Example:</strong> Theory that tropical climates make people "lazy" (discredited)</p>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-5">
                                <h4 className="text-xl font-bold text-green-900 mb-3">Environmental Possibilism</h4>
                                <p className="text-gray-700 mb-3">Environment sets limits, but humans overcome them through technology and ingenuity.</p>
                                <p className="text-sm text-gray-600 mb-2"><strong>Perspective:</strong> "Nature offers possibilities, humans choose"</p>
                                <div className="bg-white rounded-lg p-3 mt-3">
                                    <p className="text-sm text-gray-700"><strong>Examples:</strong> Israel's desert agriculture, Swiss Alpine tunnels</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p className="text-amber-900">
                                <strong>Neodeterminism (Stop & Go Determinism):</strong> Proposed by Griffith Taylor. Nature sets limits (traffic lights), but humans determine the speed.
                            </p>
                        </div>
                    </div>

                    {/* Economic Sectors */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Sectors</h3>

                        <div className="space-y-4">
                            <div className="bg-amber-50 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                                    <h4 className="text-xl font-bold text-amber-900">Primary Sector (Extraction)</h4>
                                </div>
                                <p className="text-gray-700 mb-2">Direct extraction of raw materials from earth.</p>
                                <p className="text-sm text-gray-600"><strong>Examples:</strong> Agriculture, fishing, mining, forestry</p>
                                <p className="text-sm text-gray-600"><strong>Workers:</strong> "Red Collar" (outdoor work)</p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                                    <h4 className="text-xl font-bold text-blue-900">Secondary Sector (Manufacturing)</h4>
                                </div>
                                <p className="text-gray-700 mb-2">Processing raw materials into finished goods.</p>
                                <p className="text-sm text-gray-600"><strong>Examples:</strong> Textile mills, automobile assembly, construction</p>
                                <p className="text-sm text-gray-600"><strong>Workers:</strong> "Blue Collar"</p>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                                    <h4 className="text-xl font-bold text-purple-900">Tertiary Sector (Services)</h4>
                                </div>
                                <p className="text-gray-700 mb-2">Providing services to support production and consumers.</p>
                                <p className="text-sm text-gray-600"><strong>Examples:</strong> Banking, education, transport, healthcare</p>
                                <p className="text-sm text-gray-600"><strong>Workers:</strong> "White Collar"</p>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-4 text-sm">
                                <p className="text-gray-700"><strong>Additional:</strong> Quaternary (Information/R&D - "Gold Collar") and Quinary (High-level decision making) sectors exist in modern classifications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Points */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Points for PPSC</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            'Venus = "Earth\'s Twin" (size), hottest planet',
                            'Jupiter has the Great Red Spot storm',
                            'Hygrometer measures atmospheric humidity',
                            'Deposition = vapor → ice directly (frost)',
                            'Humboldt/Peru Current = cold, causes fog',
                            'Neodeterminism = "Stop and Go Determinism"',
                            'Primary sector = Red Collar workers',
                            'Bangladesh = largest Jute producer',
                            'Push factors drive people away (war, persecution)',
                            'Mercantilism = accumulate gold, exports > imports',
                        ].map((point, index) => (
                            <div key={index} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-gray-200">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{point}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practice MCQs */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-3xl p-8 text-center text-white mb-8">
                    <h2 className="text-2xl font-bold mb-4">Practice Geography MCQs</h2>
                    <p className="text-blue-50 mb-6">
                        Test your knowledge with 11+ geography MCQs from PMS 2023
                    </p>
                    <Link
                        href="/mcq-bank/geography"
                        className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
                    >
                        Start Practice →
                    </Link>
                </div>

                {/* Related Topics */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/study-material/general-knowledge/world-geography" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                            <span className="font-medium text-gray-900">Geographical Formations</span>
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </Link>
                        <Link href="/study-material/general-knowledge" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                            <span className="font-medium text-gray-900">Back to General Knowledge</span>
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </Link>
                    </div>
                </section>
            </article>
        </main>
    );
}
