import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle, Clock, FileText, HelpCircle, Lightbulb, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Help Center',
    description: 'Get help using PakScholar Pro - Guides, tutorials, study tips, and troubleshooting for PPSC/FPSC exam preparation.',
};

export default function HelpCenter() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Help Center
                    </h1>
                    <p className="text-xl text-gray-600">
                        Everything you need to succeed with PakScholar Pro
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Link
                        href="#getting-started"
                        className="group rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                    >
                        <Zap className="mb-3 h-8 w-8 text-[#01411C]" />
                        <h3 className="mb-2 font-semibold text-gray-900">Getting Started</h3>
                        <p className="text-sm text-gray-600">Begin your preparation journey</p>
                    </Link>

                    <Link
                        href="#study-tips"
                        className="group rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                    >
                        <Lightbulb className="mb-3 h-8 w-8 text-[#01411C]" />
                        <h3 className="mb-2 font-semibold text-gray-900">Study Tips</h3>
                        <p className="text-sm text-gray-600">Effective preparation strategies</p>
                    </Link>

                    <Link
                        href="#features"
                        className="group rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                    >
                        <Target className="mb-3 h-8 w-8 text-[#01411C]" />
                        <h3 className="mb-2 font-semibold text-gray-900">Features Guide</h3>
                        <p className="text-sm text-gray-600">How to use the platform</p>
                    </Link>

                    <Link
                        href="#troubleshooting"
                        className="group rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md"
                    >
                        <HelpCircle className="mb-3 h-8 w-8 text-[#01411C]" />
                        <h3 className="mb-2 font-semibold text-gray-900">Troubleshooting</h3>
                        <p className="text-sm text-gray-600">Solve common issues</p>
                    </Link>
                </div>

                {/* Getting Started */}
                <section id="getting-started" className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Getting Started</h2>

                    <div className="space-y-8">
                        <div className="rounded-lg border-2 border-gray-200 p-8">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                <BookOpen className="mb-2 inline-block h-6 w-6 text-[#01411C]" /> How to Navigate the Platform
                            </h3>
                            <div className="space-y-4 text-gray-700">
                                <p><strong>Homepage:</strong> Start here to see all available subjects and resources at a glance.</p>

                                <p><strong>Subject Pages:</strong> Click any subject (Pakistan Studies, Mathematics, etc.) to access comprehensive study materials for that topic.</p>

                                <p><strong>Practice Tests:</strong> Visit the Practice section to take mock exams, topic quizzes, and past papers.</p>

                                <p><strong>Resources:</strong> Find study notes, formula sheets, and other downloadable materials in the Resources section.</p>

                                <p><strong>Navigation Menu:</strong> Use the header menu to quickly jump between Subjects, Practice Tests, and Resources.</p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-8">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                <Target className="mb-2 inline-block h-6 w-6 text-[#01411C]" /> Creating Your Study Plan
                            </h3>
                            <ol className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">1</span>
                                    <span><strong>Identify Weak Areas:</strong> Take practice tests in different subjects to discover which topics need more focus.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">2</span>
                                    <span><strong>Set Daily Goals:</strong> Commit to studying specific subjects each day. Consistency is key for exam success.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">3</span>
                                    <span><strong>Review Systematically:</strong> Go through each subject's materials methodically before moving to the next.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">4</span>
                                    <span><strong>Practice Regularly:</strong> Take practice tests weekly to track progress and build exam confidence.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-sm font-bold text-white">5</span>
                                    <span><strong>Stay Updated:</strong> Check Current Affairs section monthly for latest events and developments.</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Study Tips */}
                <section id="study-tips" className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Study Tips & Strategies</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900">
                                <Clock className="mr-2 h-5 w-5 text-[#01411C]" />
                                Time Management
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Study in focused 45-minute blocks with 10-minute breaks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Prioritize difficult subjects when you're most alert</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Use early mornings for memorization tasks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Reserve evenings for revision and practice tests</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900">
                                <Lightbulb className="mr-2 h-5 w-5 text-[#01411C]" />
                                Effective Learning
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Take notes while studying to improve retention</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Teach concepts to others to solidify understanding</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Use mnemonics for memorizing lists and dates</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Review previous material before starting new topics</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900">
                                <FileText className="mr-2 h-5 w-5 text-[#01411C]" />
                                Exam Day Preparation
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Get 7-8 hours of sleep the night before</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Arrive at exam center 30 minutes early</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Read all instructions carefully before starting</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Manage time wisely; don't get stuck on one question</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900">
                                <Target className="mr-2 h-5 w-5 text-[#01411C]" />
                                Practice Strategies
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Solve past papers under timed conditions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Analyze mistakes to avoid repeating them</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Focus on understanding, not just memorizing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#01411C]" />
                                    <span>Take regular mock tests to build exam stamina</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Features Guide */}
                <section id="features" className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Features Guide</h2>

                    <div className="space-y-6">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Subject Pages</h3>
                            <p className="text-gray-700">
                                Each subject page contains comprehensive study materials organized by topics. Browse through content systematically, read explanations carefully, and use the resources provided to strengthen your understanding.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Practice Tests</h3>
                            <p className="text-gray-700">
                                Practice tests help you assess your preparation level. Some tests are timed to simulate real exam conditions, while others allow self-paced learning. After completing a test, review explanations for each question to understand concepts better.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Past Papers</h3>
                            <p className="text-gray-700">
                                Past papers show you the actual format and difficulty level of PPSC/FPSC exams. Use them to understand question patterns, practice time management, and identify frequently tested topics.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900">Current Affairs</h3>
                            <p className="text-gray-700">
                                Stay updated with monthly current affairs compilations covering national and international events. Regular review of this section is crucial for PPSC/FPSC success.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section id="troubleshooting" className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Troubleshooting</h2>

                    <div className="space-y-6">
                        <div className="rounded-lg border-l-4 border-[#01411C] bg-gray-50 p-6">
                            <h3 className="mb-2 font-semibold text-gray-900">Page not loading or loading slowly?</h3>
                            <p className="mb-2 text-gray-700">Try these solutions:</p>
                            <ul className="ml-6 list-disc space-y-1 text-gray-700">
                                <li>Check your internet connection</li>
                                <li>Refresh the page (Ctrl+R or Cmd+R)</li>
                                <li>Clear browser cache and cookies</li>
                                <li>Try a different browser (Chrome, Firefox, Edge)</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-l-4 border-[#01411C] bg-gray-50 p-6">
                            <h3 className="mb-2 font-semibold text-gray-900">Content not displaying correctly?</h3>
                            <p className="mb-2 text-gray-700">Solutions:</p>
                            <ul className="ml-6 list-disc space-y-1 text-gray-700">
                                <li>Update your browser to the latest version</li>
                                <li>Disable browser extensions temporarily</li>
                                <li>Try accessing from a different device</li>
                                <li>Contact support if issue persists</li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-l-4 border-[#01411C] bg-gray-50 p-6">
                            <h3 className="mb-2 font-semibold text-gray-900">Practice test not starting?</h3>
                            <p className="mb-2 text-gray-700">Troubleshooting steps:</p>
                            <ul className="ml-6 list-disc space-y-1 text-gray-700">
                                <li>Ensure JavaScript is enabled in your browser</li>
                                <li>Disable ad-blockers for our website</li>
                                <li>Clear browser cache and try again</li>
                                <li>Use a supported browser (Chrome, Firefox, Safari, Edge)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Still Need Help */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Still Need Help?</h3>
                    <p className="mb-6 text-gray-700">
                        Can't find what you're looking for? Check our FAQ or contact our support team.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/faq"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#01411C] bg-white px-8 py-3 font-semibold text-[#01411C] transition-all hover:bg-emerald-50"
                        >
                            View FAQ
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                        >
                            Contact Support
                        </Link>
                    </div>
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
