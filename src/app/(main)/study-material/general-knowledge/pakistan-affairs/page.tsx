import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, Scale, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Constitution of Pakistan 1973 - Complete Study Guide | PPSC Preparation',
    description: 'Comprehensive guide to Pakistan\'s Constitution: Fundamental Rights, Parliament structure, Federal-Provincial relations, and recent amendments. Essential for PPSC exams.',
};

export default function ConstitutionPage() {
    const fundamentalRights = [
        { article: '9', title: 'Security of Person', desc: 'No person shall be deprived of life or liberty save in accordance with law' },
        { article: '10', title: 'Safeguards as to Arrest', desc: 'Right to be informed of grounds of arrest and consult a lawyer' },
        { article: '10A', title: 'Right to Fair Trial', desc: 'Every person has right to fair trial and due process' },
        { article: '11', title: 'Slavery Prohibited', desc: 'Slavery, forced labor, and child labor prohibited' },
        { article: '15', title: 'Freedom of Movement', desc: 'Every citizen has right to move freely throughout Pakistan' },
        { article: '16', title: 'Freedom of Assembly', desc: 'Right to assemble peacefully without arms' },
        { article: '17', title: 'Freedom of Association', desc: 'Right to form associations or unions' },
        { article: '19', title: 'Freedom of Speech', desc: 'Freedom of speech and expression, subject to reasonable restrictions' },
        { article: '19A', title: 'Right to Information', desc: 'Right to have access to information in public matters' },
        { article: '20', title: 'Freedom of Religion', desc: 'Right to profess, practice and propagate religion' },
        { article: '25', title: 'Equality of Citizens', desc: 'All citizens are equal before law' },
        { article: '25A', title: 'Right to Education', desc: 'Free and compulsory education for children aged 5-16' },
    ];

    const keyInstitutions = [
        { name: 'Majlis-e-Shoora (Parliament)', desc: 'Bicameral legislature: National Assembly + Senate' },
        { name: 'Supreme Court', desc: 'Apex court with original, appellate, and advisory jurisdiction' },
        { name: 'Federal Shariat Court', desc: 'Examines if laws are repugnant to Islam' },
        { name: 'Council of Common Interests', desc: 'Formulates policies on federal-provincial matters' },
        { name: 'National Economic Council', desc: 'Reviews economic condition and advises governments' },
        { name: 'Election Commission', desc: 'Organizes and conducts elections' },
    ];

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
                        <span className="text-gray-900 font-medium">Constitution of Pakistan</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            Pakistan Affairs
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            High Importance
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Constitution of Pakistan 1973
                    </h1>
                    <p className="text-xl text-blue-50">
                        Complete study guide covering Fundamental Rights, Parliament structure, Federal-Provincial relations, and key amendments
                    </p>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Quick Facts */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        Quick Facts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-gray-900">Adopted: April 10, 1973</p>
                                <p className="text-sm text-gray-600">Enforced: August 14, 1973</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-gray-900">Type: Federal Parliamentary</p>
                                <p className="text-sm text-gray-600">Islamic Republic</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-gray-900">Total Articles: 280+</p>
                                <p className="text-sm text-gray-600">12 Parts, 7 Schedules</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-gray-900">Major Amendments: 26</p>
                                <p className="text-sm text-gray-600">Latest: October 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Constitution of the Islamic Republic of Pakistan, 1973 is the supreme law of Pakistan. It defines the framework of government, establishes fundamental rights, and outlines the relationship between the state and citizens. As an Islamic Republic, Pakistan's Constitution reflects both democratic principles and Islamic values, making it unique among world constitutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The Constitution was unanimously adopted by the National Assembly on April 10, 1973, and came into effect on August 14, 1973 (Pakistan's Independence Day). It replaced the 1962 Constitution and restored parliamentary democracy after years of military rule. The Constitution has been amended 26 times to address evolving national needs while maintaining its core principles.
                        </p>
                    </div>
                </section>

                {/* Fundamental Rights */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Fundamental Rights (Part II)</h2>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 mb-6">
                        <h3 className="text-xl font-bold mb-2">Chapter 1: Articles 8-28</h3>
                        <p className="text-blue-50">
                            These rights are guaranteed to all citizens and cannot be abridged or taken away by the State except as provided by the Constitution itself.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {fundamentalRights.map((right) => (
                            <div key={right.article} className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:border-blue-500 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-700 font-bold text-sm">Art. {right.article}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-1">{right.title}</h4>
                                        <p className="text-sm text-gray-600">{right.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-900">
                            <strong>Important:</strong> Article 8 states that any law inconsistent with Fundamental Rights shall be void to the extent of such inconsistency.
                        </p>
                    </div>
                </section>

                {/* High Treason */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">High Treason (Article 6)</h2>
                    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4">Definition</h3>
                        <p className="text-gray-700 mb-4">
                            High treason is defined as any act of:
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">•</span>
                                <span className="text-gray-700">Abrogating the Constitution by use of force or show of force</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">•</span>
                                <span className="text-gray-700">Subverting the Constitution by unconstitutional means</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">•</span>
                                <span className="text-gray-700">Suspending or holding in abeyance the Constitution</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">•</span>
                                <span className="text-gray-700">Attempting or conspiring to commit any of the above acts</span>
                            </li>
                        </ul>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                                <strong>Punishment:</strong> Any person found guilty of high treason shall be punished as provided by an Act of Majlis-e-Shoora (Parliament).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Parliament Structure */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Majlis-e-Shoora (Parliament)</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">National Assembly</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Seats:</span>
                                    <span className="font-bold text-gray-900">342</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">General Seats:</span>
                                    <span className="font-bold text-gray-900">272</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">Women (Reserved):</span>
                                    <span className="font-bold text-gray-900">60</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Minorities (Reserved):</span>
                                    <span className="font-bold text-gray-900">10</span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                <strong>Basis:</strong> Population-based representation from provinces
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-indigo-200 p-6">
                            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Senate</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Seats:</span>
                                    <span className="font-bold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">Per Province:</span>
                                    <span className="font-bold text-gray-900">23</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                    <span className="text-gray-700">Federal Capital:</span>
                                    <span className="font-bold text-gray-900">4</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Term:</span>
                                    <span className="font-bold text-gray-900">6 years</span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                <strong>Basis:</strong> Equal representation for all provinces
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Key Differences</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">National Assembly:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Can be dissolved</li>
                                    <li>• Money Bills originate here</li>
                                    <li>• Elects Prime Minister</li>
                                    <li>• 5-year term</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Senate:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Cannot be dissolved</li>
                                    <li>• Reviews legislation</li>
                                    <li>• Elects Chairman</li>
                                    <li>• Continuous body (half elected every 3 years)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Institutions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Constitutional Institutions</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {keyInstitutions.map((inst, idx) => (
                            <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-5">
                                <h4 className="font-bold text-gray-900 mb-2">{inst.name}</h4>
                                <p className="text-sm text-gray-600">{inst.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Amendments */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Constitutional Amendments</h2>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                                    <span className="text-green-700 font-bold text-xl">18th</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Eighteenth Amendment (2010)</h3>
                                    <p className="text-gray-700 mb-3">
                                        Landmark amendment focused on devolution and provincial autonomy.
                                    </p>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="font-semibold text-green-900 mb-2">Key Changes:</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• Transferred 17 ministries to provinces</li>
                                            <li>• Renamed NWFP to Khyber Pakhtunkhwa</li>
                                            <li>• Provincial ownership of natural resources (Article 172)</li>
                                            <li>• Strengthened Council of Common Interests</li>
                                            <li>• Added Article 25A (Right to Education)</li>
                                            <li>• Removed President's power to dissolve National Assembly</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <span className="text-purple-700 font-bold text-xl">26th</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Twenty-Sixth Amendment (2024)</h3>
                                    <p className="text-gray-700 mb-3">
                                        Recent amendment restructuring the judiciary and judicial appointments.
                                    </p>
                                    <div className="bg-purple-50 rounded-lg p-4">
                                        <p className="font-semibold text-purple-900 mb-2">Key Changes:</p>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• Reconstituted Judicial Commission of Pakistan (JCP)</li>
                                            <li>• Capped Chief Justice tenure at 3 years</li>
                                            <li>• Removed Supreme Court's suo motu powers</li>
                                            <li>• Introduced "inefficiency" as ground for judge removal</li>
                                            <li>• Modified judicial appointment process</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Important Definitions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Terms & Definitions</h2>
                    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold">Term</th>
                                        <th className="px-6 py-3 text-left font-semibold">Definition</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        { term: 'The State', def: 'Federal Government, Parliament, Provincial Governments, Provincial Assemblies, and local authorities empowered to impose taxes' },
                                        { term: 'Money Bill', def: 'Bill dealing with taxes, Federal Consolidated Fund, borrowing of money, or other financial matters (Article 73)' },
                                        { term: 'Ordinance', def: 'Temporary law promulgated by President when Assembly not in session, must be approved by Parliament' },
                                        { term: 'Federal Consolidated Fund', def: 'Primary fund into which all federal revenues, loans, and loan repayments are paid' },
                                        { term: 'Objectives Resolution', def: 'Resolution of 1949, now Article 2A, proclaiming sovereignty belongs to Allah and setting Islamic-democratic principles' },
                                    ].map((item, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{item.term}</td>
                                            <td className="px-6 py-4 text-gray-700">{item.def}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Practice Notice */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-center text-white mb-8">
                    <h2 className="text-2xl font-bold mb-4">Test Your Knowledge</h2>
                    <p className="text-blue-50 mb-6">
                        Practice MCQs covering all aspects of the Constitution
                    </p>
                    <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                        Practice MCQs Coming Soon
                    </div>
                </div>

                {/* Related Topics */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/study-material/general-knowledge" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                            <span className="font-medium text-gray-900">Back to General Knowledge</span>
                            <ArrowRight className="w-5 h-5 text-blue-600" />
                        </Link>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                            <span className="font-medium text-gray-500">More Pakistan Affairs topics coming soon</span>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
