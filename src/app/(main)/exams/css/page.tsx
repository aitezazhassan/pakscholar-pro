import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, BookOpen, GraduationCap, Target, Clock, AlertCircle, Award, Trophy } from 'lucide-react';

export const metadata: Metadata = {
    title: 'CSS Exam Information',
    description: 'Complete guide to CSS (Central Superior Services) exam - Pakistan\'s premier civil service exam pattern, eligibility, subjects, and preparation strategies.',
};

export default function CSSInfo() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        CSS Exam Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Central Superior Services - Pakistan's Premier Civil Service Exam
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="mb-12 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
                        <div>
                            <h3 className="mb-2 font-semibold text-gray-900">Important Notice</h3>
                            <p className="text-gray-700">
                                PakScholar Pro is an independent educational platform. We are NOT affiliated with, endorsed by, or connected to FPSC or the CSS examination authorities.
                                Always verify information from the official CSS portal: <a href="https://www.fpsc.gov.pk/css" target="_blank" rel="noopener noreferrer" className="font-medium text-[#01411C] hover:underline">fpsc.gov.pk/css</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* What is CSS */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">What is CSS?</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            The <strong>Central Superior Services (CSS)</strong> is Pakistan's most prestigious and competitive civil service examination, conducted annually by the Federal Public Service Commission (FPSC).
                        </p>
                        <p>
                            CSS officers occupy the highest administrative positions in Pakistan's civil bureaucracy, serving in elite groups like the District Management Group (DMG), Police Service of Pakistan (PSP), Foreign Service of Pakistan (FSP), and other specialized services.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2 mt-6">
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <Trophy className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Career Path</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• District Management Group (DMG)</li>
                                    <li>• Police Service of Pakistan (PSP)</li>
                                    <li>• Foreign Service of Pakistan (FSP)</li>
                                    <li>• Pakistan Customs Service</li>
                                    <li>• Pakistan Audit & Accounts Service</li>
                                    <li>• And 10+ other occupational groups</li>
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <Award className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Prestige & Opportunities</h3>
                                <p className="text-sm text-gray-700">
                                    CSS officers enjoy high status in society, excellent career prospects, opportunities to serve at national and international levels, and leadership roles in policymaking.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exam Pattern */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Exam Pattern & Structure</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">CSS Examination Stages</h3>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">1</span>
                                    <div>
                                        <strong className="text-gray-900">Written Examination (Compulsory Subjects):</strong>
                                        <p className="text-gray-700">600 marks total covering English Essay, English (Précis & Composition), Urdu (Essay), General Knowledge, Pakistan Affairs, and Islamic Studies/Ethics.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">2</span>
                                    <div>
                                        <strong className="text-gray-900">Written Examination (Optional Subjects):</strong>
                                        <p className="text-gray-700">600 marks total. Candidates select 3 subjects (200 marks each) from various groups including Sciences, Social Sciences, Humanities, etc.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">3</span>
                                    <div>
                                        <strong className="text-gray-900">Psychological Assessment (Test & Interview):</strong>
                                        <p className="text-gray-700">300 marks total. Assesses personality, aptitude, and suitability for civil service through tests and in-depth interviews.</p>
                                    </div>
                                </li>
                            </ol>
                            <div className="mt-4 rounded-lg bg-white p-4">
                                <p className="font-semibold text-gray-900">Total Marks: 1,500</p>
                                <p className="text-sm text-gray-600">Written (1,200) + Psychological & Interview (300)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compulsory Subjects */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Compulsory Subjects (600 Marks)</h2>
                    <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">English Essay (100 marks)</h3>
                                <p className="text-sm text-gray-700">Essay on current issues, critical thinking, analytical writing</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">English (Précis & Composition) (100 marks)</h3>
                                <p className="text-sm text-gray-700">Comprehension, précis writing, grammar, vocabulary</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">Urdu Essay (100 marks)</h3>
                                <p className="text-sm text-gray-700">Essay writing in Urdu on societal and national topics</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">General Knowledge (100 marks)</h3>
                                <p className="text-sm text-gray-700">Current affairs, world history, geography, science, IT</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">Pakistan Affairs (100 marks)</h3>
                                <p className="text-sm text-gray-700">History, geography, culture, politics, economy, current issues</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-4">
                                <h3 className="mb-2 font-semibold text-gray-900">Islamic Studies (100 marks)</h3>
                                <p className="text-sm text-gray-700">For Muslims: Quran, Hadith, Islamic history, jurisprudence<br /><span className="text-xs">Non-Muslims: Ethics (Ethics for Non-Muslims)</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Optional Subjects */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Optional Subjects (600 Marks)</h2>
                    <div className="space-y-4">
                        <div className="rounded-lg bg-gray-50 p-6">
                            <p className="mb-4 text-gray-700">
                                Candidates must choose <strong>3 subjects (200 marks each)</strong> from the following groups. Choose subjects you're most confident in and that align with your academic background.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="mb-2 font-semibold text-gray-900">Group I - Sciences</h4>
                                    <p className="text-sm text-gray-700">Mathematics, Physics, Chemistry, Statistics, Geology, Botany, Zoology, Applied Mathematics</p>
                                </div>

                                <div>
                                    <h4 className="mb-2 font-semibold text-gray-900">Group II - Social Sciences</h4>
                                    <p className="text-sm text-gray-700">Psychology, Geography, Sociology, Anthropology, Political Science, International Relations, Economics</p>
                                </div>

                                <div>
                                    <h4 className="mb-2 font-semibold text-gray-900">Group III - Humanities</h4>
                                    <p className="text-sm text-gray-700">History of Pakistan & India, History of Muslims, Philosophy, British History, European History, Persian, Arabic, English Literature</p>
                                </div>

                                <div>
                                    <h4 className="mb-2 font-semibold text-gray-900">Group IV - Professional</h4>
                                    <p className="text-sm text-gray-700">Law, Business Administration, Public Administration, Journalism & Mass Communication, Accountancy & Auditing, Computer Science</p>
                                </div>
                            </div>

                            <div className="mt-4 rounded-lg border-l-4 border-[#01411C] bg-white p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Strategy Tip:</strong> Choose subjects based on your academic background, interest level, and availability of quality study material. Diversifying across groups can be risky; focus on your strengths.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Eligibility Criteria</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Age Limit</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Minimum:</strong> 21 years</li>
                                <li>• <strong>Maximum:</strong> 30 years (as of 1st January)</li>
                                <li>• <strong>Relaxation for Disabled:</strong> +10 years (up to age 40)</li>
                                <li>• <strong>Note:</strong> Age is calculated as of 1st January of the exam year</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Educational Qualification</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Minimum:</strong> Bachelor's Degree (2nd Division/Grade C)</li>
                                <li>• From HEC-recognized university in Pakistan</li>
                                <li>• Foreign degrees must be equiv alent by HEC</li>
                                <li>• Optional subjects should align with academic background</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Nationality</h3>
                            <p className="text-gray-700">
                                Must be a Pakistani citizen. Dual nationals are not eligible for CSS examination.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Number of Attempts</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Maximum:</strong> 3 attempts (for most candidates)</li>
                                <li>• Counts from when you first appear, not apply</li>
                                <li>• Use attempts wisely with thorough preparation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Preparation */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Preparation Strategy</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                            <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900">
                                <Clock className="mr-2 h-6 w-6 text-[#01411C]" />
                                Recommended Timeline
                            </h3>
                            <div className="space-y-3 text-gray-700">
                                <p><strong>1-2 Years:</strong> Ideal preparation duration for CSS (seriously competitive exam)</p>
                                <p><strong>12-18 Months:</strong> Complete all compulsory + optional subjects, build strong foundation</p>
                                <p><strong>6-12 Months:</strong> Intensive revision, essay writing practice, current affairs focus</p>
                                <p><strong>3-6 Months:</strong> Past papers, mock tests, interview preparation, personality development</p>
                                <p><strong>Last Month:</strong> Final revision, confidence building, stress management</p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                                <Target className="mr-2 h-5 w-5 text-[#01411C]" />
                                CSS Success Strategies
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">1.</span>
                                    <span><strong>Master English:</strong> English Essay and Composition have the highest failure rate. Practice daily.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">2.</span>
                                    <span><strong>Choose Optional Subjects Wisely:</strong> Select based on strength, not perceived ease. Scoring matters more than topic.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">3.</span>
                                    <span><strong>Current Affairs is Crucial:</strong> Read quality newspapers daily (Dawn, The News), follow national/international issues</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">4.</span>
                                    <span><strong>Practice Essay Writing:</strong> Write at least 2-3 essays per week. Get feedback from mentors or seniors.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">5.</span>
                                    <span><strong>Develop Analytical Thinking:</strong> CSS tests critical thinking, not rote learning. Read, analyze, form opinions.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">6.</span>
                                    <span><strong>Join a Study Group:</strong> Discuss topics with peers, exchange notes, stay motivated</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">7.</span>
                                    <span><strong>Interview Preparation:</strong> Work on confidence, communication skills, personality development from day one</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Official Links */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Official Resources</h2>
                    <div className="space-y-4">
                        <a
                            href="https://www.fpsc.gov.pk/css"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">CSS Official Portal (FPSC)</h3>
                                <p className="text-sm text-gray-600">Applications, results, syllabus, and announcements</p>
                            </div>
                            <ExternalLink className="h-6 w-6 text-[#01411C]" />
                        </a>

                        <Link
                            href="/past-papers"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">CSS Past Papers</h3>
                                <p className="text-sm text-gray-600">Previous year questions for compulsory and optional subjects</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>

                        <Link
                            href="/pakistan-studies"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Study Materials</h3>
                                <p className="text-sm text-gray-600">Browse subject-wise resources for CSS preparation</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Begin Your CSS Journey</h3>
                    <p className="mb-6 text-gray-700">
                        CSS is challenging but achievable with dedicated preparation. Start building your foundation today.
                    </p>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        Start Preparing
                    </Link>
                </div>

                {/* Back Link */}
                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center font-medium text-[#01411C] hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
