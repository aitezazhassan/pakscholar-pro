import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, BookOpen, Users, GraduationCap, Target, Clock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PPSC Exam Information',
    description: 'Complete guide to PPSC (Punjab Public Service Commission) exams - Pattern, eligibility, syllabus, and preparation strategies for government jobs in Punjab.',
};

export default function PPSCInfo() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        PPSC Exam Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Punjab Public Service Commission - Your Complete Preparation Resource
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="mb-12 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
                        <div>
                            <h3 className="mb-2 font-semibold text-gray-900">Important Notice</h3>
                            <p className="text-gray-700">
                                PakScholar Pro is an independent educational platform. We are NOT affiliated with, endorsed by, or connected to PPSC (Punjab Public Service Commission).
                                Always verify information from the official PPSC website: <a href="https://www.ppsc.gop.pk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#01411C] hover:underline">ppsc.gop.pk</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* What is PPSC */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">What is PPSC?</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            The <strong>Punjab Public Service Commission (PPSC)</strong> is a constitutional body responsible for recruiting qualified candidates for various government positions in Punjab Province, Pakistan.
                        </p>
                        <p>
                            Established under Article 242 of the Constitution of Pakistan, PPSC conducts competitive examinations for posts in BPS-11 to BPS-17 and above in different Punjab government departments.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2 mt-6">
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <Users className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Job Categories</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Educational Services</li>
                                    <li>• Administrative Services</li>
                                    <li>• Health Services</li>
                                    <li>• Police Services</li>
                                    <li>• Technical & Engineering</li>
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <GraduationCap className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Importance</h3>
                                <p className="text-sm text-gray-700">
                                    PPSC jobs offer job security, competitive salaries, pension benefits, and career growth opportunities in Punjab's government sector.
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
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Typical PPSC Exam Stages</h3>
                            <ol className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">1</span>
                                    <div>
                                        <strong className="text-gray-900">Written Test (MCQs):</strong>
                                        <p className="text-gray-700">Multiple-choice questions covering general knowledge, relevant subjects, and job-specific topics. Usually 100-150 marks.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">2</span>
                                    <div>
                                        <strong className="text-gray-900">Physical/Skill Test:</strong>
                                        <p className="text-gray-700">For certain positions (Police, Sports, etc.). Candidates must meet fitness or skill requirements.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">3</span>
                                    <div>
                                        <strong className="text-gray-900">Interview:</strong>
                                        <p className="text-gray-700">Final stage where personality, knowledge, and suitability for the post are assessed. Usually 30-50 marks.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Scoring System</h3>
                            <p className="mb-3 text-gray-700">
                                The scoring varies by post, but typically:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Written Test:</strong> 70-85% weightage</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Interview:</strong> 15-30% weightage</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Negative Marking:</strong> Some tests have 0.25-0.5 marks deduction for wrong answers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Eligibility Criteria</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Age Limits</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>General Posts:</strong> 18-30 years</li>
                                <li>• <strong>Relaxation for Women:</strong> +5 years</li>
                                <li>• <strong>Relaxation for Disabled:</strong> +10 years</li>
                                <li>• <strong>Specific Posts:</strong> Varies (check advertisement)</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Educational Requirements</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>BPS-11 to 15:</strong> Bachelor's Degree (varies)</li>
                                <li>• <strong>BPS-16 to 17:</strong> Master's Degree or equivalent</li>
                                <li>• <strong>Technical Posts:</strong> Relevant technical qualifications</li>
                                <li>• <strong>Experience:</strong> Sometimes required for senior posts</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Domicile Requirements</h3>
                            <p className="text-gray-700">
                                Candidates must hold Punjab domicile for most posts. Some positions accept candidates from other provinces based on quotas.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Special Quotas</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Women Quota: 5-15%</li>
                                <li>• Minority Quota: 5%</li>
                                <li>• Disabled Quota: 2%</li>
                                <li>• Sports Quota: 2%</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Syllabus */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Syllabus Overview</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                <BookOpen className="mb-2 inline-block h-5 w-5 text-[#01411C]" /> Core Subjects (Common)</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Pakistan Studies (History, Geography, Culture)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Islamic Studies (Quran, Hadith, Islamic History)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Current Affairs (National & International)</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>General Knowledge</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>English (Grammar, Vocabulary, Comprehension)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Mathematics/Everyday Science (some posts)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Position-Specific Subjects</h3>
                            <p className="text-gray-700">
                                In addition to general subjects, candidates are tested on job-specific topics:
                            </p>
                            <ul className="mt-3 space-y-1 text-gray-700">
                                <li>• <strong>Educators:</strong> Pedagogy, Subject Matter (Science, Math, etc.)</li>
                                <li>• <strong>Accounts Officers:</strong> Accounting, Finance Principles</li>
                                <li>• <strong>Engineers:</strong> Engineering subjects (Civil, Electrical, etc.)</li>
                                <li>• <strong>Legal Positions:</strong> Law, Legal Procedures</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Preparation Strategy */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Preparation Strategy</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                            <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900">
                                <Clock className="mr-2 h-6 w-6 text-[#01411C]" />
                                Recommended Timeline
                            </h3>
                            <div className="space-y-3 text-gray-700">
                                <p><strong>3-6 Months Before:</strong> Complete syllabus coverage, subject-wise study</p>
                                <p><strong>2-3 Months Before:</strong> Revision + Practice tests, identify weak areas</p>
                                <p><strong>1 Month Before:</strong> Intensive revision, past papers, mock tests</p>
                                <p><strong>1 Week Before:</strong> Final revision, confidence building, exam strategies</p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                                <Target className="mr-2 h-5 w-5 text-[#01411C]" />
                                Success Tips
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">1.</span>
                                    <span><strong>Follow Official Syllabus:</strong> Always refer to the job advertisement for specific syllabus</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">2.</span>
                                    <span><strong>Practice MCQs Daily:</strong> Solve 50-100 MCQs per day from different subjects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">3.</span>
                                    <span><strong>Stay Updated:</strong> Read newspapers daily for Current Affairs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">4.</span>
                                    <span><strong>Use Past Papers:</strong> Understand question patterns from previous exams</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">5.</span>
                                    <span><strong>Time Management:</strong> Practice completing tests within the allocated time</span>
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
                            href="https://www.ppsc.gop.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">PPSC Official Website</h3>
                                <p className="text-sm text-gray-600">Latest advertisements, results, and announcements</p>
                            </div>
                            <ExternalLink className="h-6 w-6 text-[#01411C]" />
                        </a>

                        <Link
                            href="/past-papers"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Past Papers on PakScholar Pro</h3>
                                <p className="text-sm text-gray-600">Access our collection of PPSC past papers</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>

                        <Link
                            href="/pakistan-studies"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Study Materials</h3>
                                <p className="text-sm text-gray-600">Browse our subject-wise preparation resources</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready to Prepare for PPSC?</h3>
                    <p className="mb-6 text-gray-700">
                        Start your preparation journey with our comprehensive study materials and practice tests.
                    </p>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        Start Learning
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
