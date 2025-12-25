import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle, FileText, Target, TrendingUp, Users, Zap, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How It Works',
    description: 'Learn how to use PakScholar Pro effectively - Step-by-step guide to preparing for PPSC, FPSC, and CSS exams with our free educational platform.',
};

export default function HowItWorks() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        How PakScholar Pro Works
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Your complete guide to using our platform effectively for PPSC, FPSC, and CSS exam preparation
                    </p>
                </div>

                {/* Introduction */}
                <section className="mb-16">
                    <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Welcome to PakScholar Pro!</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro is a <strong>FREE educational platform</strong> designed specifically for Pakistani students preparing for government competitive exams. We provide comprehensive study materials, practice tests, and resources to help you succeed.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="flex items-center gap-2 text-gray-900">
                                <CheckCircle className="h-5 w-5 text-[#01411C]" />
                                <span className="font-semibold">100% Free</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-900">
                                <CheckCircle className="h-5 w-5 text-[#01411C]" />
                                <span className="font-semibold">No Registration Required*</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-900">
                                <CheckCircle className="h-5 w-5 text-[#01411C]" />
                                <span className="font-semibold">Regular Updates</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            *Some features may require account creation in the future for personalization
                        </p>
                    </div>
                </section>

                {/* Step-by-Step Guide */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">How to Use PakScholar Pro</h2>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-xl font-bold text-white">
                                1
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    <BookOpen className="mb-1 mr-2 inline-block h-6 w-6 text-[#01411C]" />
                                    Browse Subjects
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Start by exploring our six core subjects: <strong>Pakistan Studies</strong>, <strong>Islamic Studies</strong>, <strong>Mathematics</strong>, <strong>English</strong>, <strong>General Science</strong>, and <strong>Current Affairs</strong>. Each subject page contains comprehensive study materials organized by topics.
                                </p>
                                <Link
                                    href="/pakistan-studies"
                                    className="inline-flex items-center gap-2 font-medium text-[#01411C] hover:underline"
                                >
                                    Browse Subjects →
                                </Link>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-xl font-bold text-white">
                                2
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    <FileText className="mb-1 mr-2 inline-block h-6 w-6 text-[#01411C]" />
                                    Study the Materials
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Read through topic-wise content systematically. Our materials are curated specifically for PPSC, FPSC, and CSS exams. Take notes as you study to improve retention. Follow a consistent daily study schedule for best results.
                                </p>
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <p className="text-sm font-semibold text-gray-900">Study Tip:</p>
                                    <p className="text-sm text-gray-700">Focus on understanding concepts, not just memorizing facts. This will help you answer both MCQs and written questions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-xl font-bold text-white">
                                3
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    <Target className="mb-1 mr-2 inline-block h-6 w-6 text-[#01411C]" />
                                    Take Practice Tests
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Test your knowledge with our practice tests and quizzes. These include <strong>Mock Exams</strong>, <strong>Topic-Wise Tests</strong>, and <strong>Rapid Quizzes</strong>. Regular practice helps identify weak areas and builds exam confidence.
                                </p>
                                <Link
                                    href="/practice"
                                    className="inline-flex items-center gap-2 font-medium text-[#01411C] hover:underline"
                                >
                                    Start Practicing →
                                </Link>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-xl font-bold text-white">
                                4
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    <TrendingUp className="mb-1 mr-2 inline-block h-6 w-6 text-[#01411C]" />
                                    Review Past Papers
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Solve previous year papers to understand actual exam patterns. Past papers show you the type of questions asked, difficulty level, and time management requirements. This is crucial for exam success.
                                </p>
                                <Link
                                    href="/past-papers"
                                    className="inline-flex items-center gap-2 font-medium text-[#01411C] hover:underline"
                                >
                                    View Past Papers →
                                </Link>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-xl font-bold text-white">
                                5
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    <Zap className="mb-1 mr-2 inline-block h-6 w-6 text-[#01411C]" />
                                    Access Resources
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Supplement your learning with additional resources including study notes, formula sheets, and reference materials. Stay updated with monthly current affairs compilations for competitive advantage.
                                </p>
                                <Link
                                    href="/resources"
                                    className="inline-flex items-center gap-2 font-medium text-[#01411C] hover:underline"
                                >
                                    Browse Resources →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Overview */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Platform Features</h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <BookOpen className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">6 Core Subjects</h3>
                            <p className="text-sm text-gray-700">
                                Comprehensive coverage of Pakistan Studies, Islamic Studies, Mathematics, English, Science, and Current Affairs
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <Target className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Practice Tests</h3>
                            <p className="text-sm text-gray-700">
                                Mock exams, topic quizzes, and rapid tests to assess your preparation and build exam confidence
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <FileText className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Past Papers</h3>
                            <p className="text-sm text-gray-700">
                                Collection of previous PPSC and FPSC exam papers to understand patterns and practice timing
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <TrendingUp className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Current Affairs</h3>
                            <p className="text-sm text-gray-700">
                                Monthly updates on national and international events crucial for competitive exams
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <Award className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Exam Guides</h3>
                            <p className="text-sm text-gray-700">
                                Detailed information about PPSC, FPSC, and CSS exams including patterns and preparation strategies
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-[#01411C] hover:shadow-md">
                            <Users className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Support System</h3>
                            <p className="text-sm text-gray-700">
                                FAQ, Help Center, and contact support to answer your questions and guide your preparation
                            </p>
                        </div>
                    </div>
                </section>

                {/* Study Methodology */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Recommended Study Flow</h2>

                    <div className="rounded-lg bg-emerald-50 p-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-900">
                                    <Clock className="mr-2 h-6 w-6 text-[#01411C]" />
                                    Daily Study Routine
                                </h3>
                                <ol className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold text-[#01411C]">1.</span>
                                        <span><strong>Morning (2-3 hours):</strong> Study new topics from subject pages - focus on difficult subjects when you're most alert</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold text-[#01411C]">2.</span>
                                        <span><strong>Afternoon (1-2 hours):</strong> Review previous day's material and take notes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold text-[#01411C]">3.</span>
                                        <span><strong>Evening (1-2 hours):</strong> Practice tests and quizzes on topics you've studied</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 font-bold text-[#01411C]">4.</span>
                                        <span><strong>Night (30 mins):</strong> Read current affairs, review the day, plan tomorrow</span>
                                    </li>
                                </ol>
                            </div>

                            <div className="border-t-2 border-[#01411C] pt-6">
                                <h3 className="mb-3 text-lg font-semibold text-gray-900">Weekly Goals:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#01411C]" />
                                        <span>Complete at least 2 subjects per week (rotate subjects)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#01411C]" />
                                        <span>Take 2-3 practice tests to assess progress</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#01411C]" />
                                        <span>Solve at least 1 past paper under timed conditions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-[#01411C]" />
                                        <span>Review and revise weak areas identified through tests</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Best Practices for Success</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 font-semibold text-gray-900">DO:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Follow a consistent study schedule daily</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Take regular breaks to avoid burnout</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Practice MCQs regularly for speed and accuracy</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Review mistakes and learn from them</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Stay updated with current affairs monthly</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-600">✓</span>
                                    <span>Use official syllabus from PPSC/FPSC as reference</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <h3 className="mb-4 font-semibold text-gray-900">DON'T:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Rely solely on one resource - diversify your learning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Skip practice tests - they're crucial for assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Ignore weak subjects - work on them first</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Procrastinate - consistency beats last-minute cramming</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Study in isolation - join study groups for motivation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-red-600">✗</span>
                                    <span>Neglect your health - proper sleep and nutrition matter</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready to Start Your Preparation?</h3>
                    <p className="mb-6 text-gray-700">
                        Follow these steps, stay consistent, and success will follow. PakScholar Pro is here to support you every step of the way.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/pakistan-studies"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                        >
                            Start Learning Now
                        </Link>
                        <Link
                            href="/help"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#01411C] bg-white px-8 py-4 font-semibold text-[#01411C] transition-all hover:bg-emerald-50"
                        >
                            Need Help?
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
