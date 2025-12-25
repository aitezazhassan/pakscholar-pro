import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, BookOpen, Users, GraduationCap, Target, Clock, AlertCircle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: 'FPSC Exam Information',
    description: 'Complete guide to FPSC (Federal Public Service Commission) exams - Pattern, eligibility, syllabus, and preparation strategies for federal government jobs in Pakistan.',
};

export default function FPSCInfo() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        FPSC Exam Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Federal Public Service Commission - Your Path to Federal Service
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="mb-12 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
                        <div>
                            <h3 className="mb-2 font-semibold text-gray-900">Important Notice</h3>
                            <p className="text-gray-700">
                                PakScholar Pro is an independent educational platform. We are NOT affiliated with, endorsed by, or connected to FPSC (Federal Public Service Commission).
                                Always verify information from the official FPSC website: <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#01411C] hover:underline">fpsc.gov.pk</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* What is FPSC */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">What is FPSC?</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            The <strong>Federal Public Service Commission (FPSC)</strong> is a constitutional body responsible for recruiting qualified candidates for civil posts in the Federal Government of Pakistan.
                        </p>
                        <p>
                            Established under Articles 242-246 of the Constitution, FPSC conducts competitive examinations for BPS-11 to BPS-19 positions in federal ministries, divisions, and attached departments.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2 mt-6">
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <Briefcase className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Position Types</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Accounts & Audit Services</li>
                                    <li>• Customs & Excise</li>
                                    <li>• Postal Services</li>
                                    <li>• Foreign Service</li>
                                    <li>• Technical & Professional Posts</li>
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <GraduationCap className="mb-3 h-8 w-8 text-[#01411C]" />
                                <h3 className="mb-2 font-semibold text-gray-900">Career Opportunities</h3>
                                <p className="text-sm text-gray-700">
                                    FPSC offers national-level government positions with excellent benefits, job security, and opportunities to serve Pakistan at the federal level.
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
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Typical FPSC Exam Stages</h3>
                            <ol className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">1</span>
                                    <div>
                                        <strong className="text-gray-900">Written Test (MCQs):</strong>
                                        <p className="text-gray-700">Multiple-choice questions covering general knowledge, professional subjects, and job-relevant topics. Usually 100 marks.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">2</span>
                                    <div>
                                        <strong className="text-gray-900">Written Test (Descriptive):</strong>
                                        <p className="text-gray-700">For senior positions, descriptive/subjective written exams covering in-depth knowledge of the subject area.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">3</span>
                                    <div>
                                        <strong className="text-gray-900">Psychological Assessment:</strong>
                                        <p className="text-gray-700">Some positions (Foreign Service, etc.) include psychological testing and aptitude assessments.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">4</span>
                                    <div>
                                        <strong className="text-gray-900">Interview:</strong>
                                        <p className="text-gray-700">Final evaluation of personality, knowledge, and suitability. Commission members assess candidates' competence.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Marking Scheme</h3>
                            <p className="mb-3 text-gray-700">
                                The marking varies by position, but commonly:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Written (MCQs):</strong> 100 marks typically</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Written (Descriptive):</strong> Varies (100-300 marks)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Interview:</strong> 50-100 marks</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Negative Marking:</strong> Usually 0.25 marks per wrong answer in MCQs</span>
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
                            <h3 className="mb-3 font-semibold text-gray-900">Age Requirements</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>General Posts:</strong> 18-30 years</li>
                                <li>• <strong>BPS-17 & Above:</strong> Sometimes 21-30 years</li>
                                <li>• <strong>Relaxation (Women):</strong> +5 years</li>
                                <li>• <strong>Relaxation (Disabled):</strong> +10 years</li>
                                <li>• <strong>Specific Posts:</strong> Check job advertisement</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Qualifications</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>BPS-11 to 15:</strong> Bachelor's Degree minimum</li>
                                <li>• <strong>BPS-16 to 17:</strong> Master's Degree (2nd Division)</li>
                                <li>• <strong>BPS-18 to 19:</strong> Master's + relevant experience</li>
                                <li>• <strong>Technical Posts:</strong> Relevant professional degrees</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Nationality & Domicile</h3>
                            <p className="text-gray-700">
                                Candidates must be Pakistani citizens. Domicile from any province/territory of Pakistan is acceptable for federal posts, with provincial quotas applied.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 font-semibold text-gray-900">Special Quota Provisions</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Provincial Quota System applies</li>
                                <li>• Women Quota: 10%</li>
                                <li>• Minority Quota: 5%</li>
                                <li>• Disabled Persons: 2%</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Syllabus */}
                <section className="mb-12">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Syllabus Coverage</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                <BookOpen className="mb-2 inline-block h-5 w-5 text-[#01411C]" /> General Subjects (Common)
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Pakistan Affairs (History, Geography, Current Issues)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Islamic Studies/Ethics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Current Affairs (National & International)</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>General Knowledge & Everyday Science</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>English (Comprehension & Grammar)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#01411C]">✓</span>
                                        <span>Mathematics & Computer Science (some posts)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Professional/Technical Subjects</h3>
                            <p className="text-gray-700">
                                Based on the specific post, professional subjects are tested:
                            </p>
                            <ul className="mt-3 space-y-1 text-gray-700">
                                <li>• <strong>Accounts/Audit:</strong> Accounting, Auditing, Financial Management</li>
                                <li>• <strong>Customs/Excise:</strong> Import/Export Laws, Taxation</li>
                                <li>• <strong>Foreign Service:</strong> International Relations, Diplomacy, World Affairs</li>
                                <li>• <strong>Engineering:</strong> Relevant engineering disciplines</li>
                                <li>• <strong>Medical/Health:</strong> Medical subjects, Public Health</li>
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
                                <p><strong>6-12 Months:</strong> Ideal preparation time for most FPSC positions</p>
                                <p><strong>4-6 Months Before:</strong> Complete general subjects + professional subjects</p>
                                <p><strong>2-3 Months Before:</strong> Intensive practice + past papers + current affairs</p>
                                <p><strong>1 Month Before:</strong> Final revision, mock tests, interview preparation</p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                                <Target className="mr-2 h-5 w-5 text-[#01411C]" />
                                Key Success Strategies
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">1.</span>
                                    <span><strong>Understand Syllabus Thoroughly:</strong> Read job advertisement carefully for specific requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">2.</span>
                                    <span><strong>Focus on Professional Subjects:</strong> Give more weightage to job-specific subjects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">3.</span>
                                    <span><strong>Practice Past Papers:</strong> FPSC often repeats question patterns</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">4.</span>
                                    <span><strong>Current Affairs:</strong> Read newspapers daily (Dawn, The News, Express Tribune)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">5.</span>
                                    <span><strong>Interview Preparation:</strong> Practice with peers, stay updated on national/international issues</span>
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
                            href="https://www.fpsc.gov.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">FPSC Official Website</h3>
                                <p className="text-sm text-gray-600">Job advertisements, results, and important updates</p>
                            </div>
                            <ExternalLink className="h-6 w-6 text-[#01411C]" />
                        </a>

                        <Link
                            href="/past-papers"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">FPSC Past Papers</h3>
                                <p className="text-sm text-gray-600">Access our collection of previous exam papers</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>

                        <Link
                            href="/pakistan-studies"
                            className="flex items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Study Materials</h3>
                                <p className="text-sm text-gray-600">Browse subject-wise resources for FPSC preparation</p>
                            </div>
                            <span className="text-[#01411C]">→</span>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Start Your FPSC Preparation</h3>
                    <p className="mb-6 text-gray-700">
                        Access comprehensive study materials and practice tests for federal service exams.
                    </p>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        Begin Learning
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
