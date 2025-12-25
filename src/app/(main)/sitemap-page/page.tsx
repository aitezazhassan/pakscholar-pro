import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap',
    description: 'Complete sitemap of PakScholar Pro - Find all pages, subjects, resources, and information organized in one place.',
};

export default function Sitemap() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Sitemap</h1>
                    <p className="text-xl text-gray-600">
                        Complete navigation to all pages on PakScholar Pro
                    </p>
                </div>

                {/* Sitemap */}
                <div className="space-y-12">
                    {/* Subjects */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">📚 Subjects</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/pakistan-studies" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Pakistan Studies
                            </Link>
                            <Link href="/islamic-studies" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Islamic Studies
                            </Link>
                            <Link href="/mathematics" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Mathematics
                            </Link>
                            <Link href="/english" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                English
                            </Link>
                            <Link href="/science" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                General Science
                            </Link>
                            <Link href="/current-affairs" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Current Affairs
                            </Link>
                        </div>
                    </section>

                    {/* Practice & Tests */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">✍️ Practice & Tests</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/practice" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Practice Tests
                            </Link>
                            <Link href="/past-papers" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Past Papers
                            </Link>
                            <Link href="/rapid-quiz" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Rapid Quiz
                            </Link>
                        </div>
                    </section>

                    {/* Resources */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">📖 Resources</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/resources" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Study Resources
                            </Link>
                            <Link href="/encyclopedia" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Encyclopedia
                            </Link>
                            <Link href="/timeline" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Timeline
                            </Link>
                            <Link href="/essays" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Essays
                            </Link>
                        </div>
                    </section>

                    {/* Explore */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">🗺️ Explore Pakistan</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/explore" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Explore Pakistan Overview
                            </Link>
                            <Link href="/explore/punjab" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Punjab
                            </Link>
                            <Link href="/explore/sindh" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Sindh
                            </Link>
                            <Link href="/explore/kpk" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Khyber Pakhtunkhwa
                            </Link>
                            <Link href="/explore/balochistan" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Balochistan
                            </Link>
                        </div>
                    </section>

                    {/* Exams Information */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">📝 Exams Information</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/exams/ppsc" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                PPSC Exam Guide
                            </Link>
                            <Link href="/exams/fpsc" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                FPSC Exam Guide
                            </Link>
                            <Link href="/exams/css" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                CSS Exam Guide
                            </Link>
                        </div>
                    </section>

                    {/* About & Company */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">ℹ️ About & Company</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/about" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                About Us
                            </Link>
                            <Link href="/team" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Our Team
                            </Link>
                            <Link href="/how-it-works" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                How It Works
                            </Link>
                            <Link href="/contact" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Contact Us
                            </Link>
                        </div>
                    </section>

                    {/* Help & Support */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">❓ Help & Support</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/faq" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Frequently Asked Questions
                            </Link>
                            <Link href="/help" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Help Center
                            </Link>
                        </div>
                    </section>

                    {/* Legal & Policies */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">⚖️ Legal & Policies</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Link href="/privacy" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Cookie Policy
                            </Link>
                            <Link href="/disclaimer" className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#01411C] hover:bg-emerald-50">
                                Disclaimer
                            </Link>
                        </div>
                    </section>
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
