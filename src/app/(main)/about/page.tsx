import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about PakScholar Pro - Pakistan\'s dedicated free educational platform for PPSC, FPSC, and CSS exam preparation.',
};

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                <div className="mb-12 text-center">
                    <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">About PakScholar Pro</h1>
                    <p className="text-xl text-gray-600">
                        Free, Quality Education for Pakistani Students
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    {/* Mission */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro exists to democratize exam preparation in Pakistan. We believe that quality educational resources should be accessible to every student, regardless of their financial background.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            Our mission is to provide comprehensive, authentic, and up-to-date study materials for governmental exam aspirants completely free of charge, helping thousands of Pakistani students achieve their career goals in public service.
                        </p>
                    </section>

                    {/* Vision */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h2>
                        <p className="leading-relaxed text-gray-700">
                            To become Pakistan's most trusted educational platform for PPSC, FPSC, and CSS exam preparation, recognized for quality content, authenticity, and commitment to student success. We envision a future where every Pakistani student has equal access to excellent preparation resources.
                        </p>
                    </section>

                    {/* What We Offer */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">What We Offer</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">📚 Comprehensive Study Materials</h3>
                                <p className="text-gray-700">Curated content covering Pakistan Studies, Islamic Studies, Mathematics, English, General Science, and Current Affairs.</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">✍️ Practice Tests</h3>
                                <p className="text-gray-700">Realistic mock exams and topic-wise quizzes with detailed explanations.</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">📄 Past Papers</h3>
                                <p className="text-gray-700">Collection of previous year papers to understand exam patterns.</p>
                            </div>
                            <div className="rounded-lg border-2 border-gray-200 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">📖 Study Resources</h3>
                                <p className="text-gray-700">Notes, formula sheets, and reference materials for efficient preparation.</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Why Choose PakScholar Pro?</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white text-sm font-bold">✓</span>
                                <div>
                                    <strong className="text-gray-900">100% Free:</strong>
                                    <span className="text-gray-700"> All content and features are completely free. No hidden charges, ever.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white text-sm font-bold">✓</span>
                                <div>
                                    <strong className="text-gray-900">Authentic Content:</strong>
                                    <span className="text-gray-700"> Created by subject matter experts with deep knowledge of Pakistani exam systems.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white text-sm font-bold">✓</span>
                                <div>
                                    <strong className="text-gray-900">Regular Updates:</strong>
                                    <span className="text-gray-700"> Current affairs and content updated monthly to keep you informed.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white text-sm font-bold">✓</span>
                                <div>
                                    <strong className="text-gray-900">Pakistani Context:</strong>
                                    <span className="text-gray-700"> Content specifically designed for Pakistani governmental exams and cultural context.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white text-sm font-bold">✓</span>
                                <div>
                                    <strong className="text-gray-900">User-Friendly:</strong>
                                    <span className="text-gray-700"> Clean, professional interface designed for distraction-free learning.</span>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Values */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Core Values</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">🎯 Excellence</h3>
                                <p className="text-gray-700">We are committed to providing high-quality, accurate, and comprehensive educational content.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">🤝 Accessibility</h3>
                                <p className="text-gray-700">Education should be accessible to everyone, regardless of economic background.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">🇵🇰 Pakistani Pride</h3>
                                <p className="text-gray-700">We are proud to serve Pakistani students and contribute to national development.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">💡 Innovation</h3>
                                <p className="text-gray-700">Continuously improving our platform to meet evolving student needs.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">✨ Integrity</h3>
                                <p className="text-gray-700">Honest content, no false promises, transparent practices.</p>
                            </div>
                        </div>
                    </section>

                    {/* Independent Platform */}
                    <section className="mb-12 rounded-lg bg-gray-50 p-6">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Independent Educational Platform</h2>
                        <p className="mb-3 leading-relaxed text-gray-700">
                            PakScholar Pro is an independent educational initiative. We are not affiliated with, endorsed by, or connected to any governmental examination body including PPSC, FPSC, or CSS authorities.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            We encourage students to always verify information from official sources and use our platform as a supplementary study resource.
                        </p>
                    </section>

                    {/* Commitment */}
                    <section className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Our Commitment to You</h2>
                        <p className="leading-relaxed text-gray-700">
                            We are committed to maintaining the highest standards of educational excellence while keeping our platform completely free. Your success is our success, and we will continue to improve and expand our resources to serve Pakistani students better.
                        </p>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="mb-6 text-lg text-gray-700">Ready to start your preparation journey?</p>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        Browse Subjects
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
