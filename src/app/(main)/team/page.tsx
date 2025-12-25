import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Target, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Team',
    description: 'Meet the PakScholar Pro team - Dedicated educators and content creators committed to providing free quality education for Pakistani students.',
};

export default function OurTeam() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Our Team
                    </h1>
                    <p className="text-xl text-gray-600">
                        Passionate educators dedicated to your success
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="mb-16 rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Who We Are</h2>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        PakScholar Pro is built and maintained by a team of <strong>dedicated Pakistani educators</strong>, subject matter experts, and technical professionals who believe that quality education should be accessible to everyone.
                    </p>
                    <p className="leading-relaxed text-gray-700">
                        We're not a large corporation or commercial training institute. We're a <strong>mission-driven team</strong> passionate about helping Pakistani students succeed in competitive exams and achieve their career goals in public service.
                    </p>
                </div>

                {/* Team Values */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Core Values</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <Heart className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Student-First Approach</h3>
                            <p className="text-gray-700">
                                Every decision we make is guided by one question: "How does this benefit our students?" Your success is our success, and we're committed to providing resources that genuinely help you achieve your goals.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <Award className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Excellence in Education</h3>
                            <p className="text-gray-700">
                                We maintain high standards for our content. Every study material, practice test, and resource is carefully curated and reviewed to ensure accuracy, relevance, and quality that meets competitive exam standards.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <Target className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Accessibility & Inclusivity</h3>
                            <p className="text-gray-700">
                                Education should not be a privilege. That's why our platform is 100% free with no hidden charges. We believe every Pakistani student, regardless of economic background, deserves access to quality preparation resources.
                            </p>
                        </div>

                        <div className="rounded-lg border-2 border-gray-200 p-6">
                            <TrendingUp className="mb-4 h-10 w-10 text-[#01411C]" />
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Continuous Improvement</h3>
                            <p className="text-gray-700">
                                We constantly update our content based on exam pattern changes, student feedback, and educational best practices. Your input helps us improve and serve you better.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Team */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Content Creation & Expertise</h2>

                    <div className="space-y-6">
                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-900">
                                <BookOpen className="mr-2 h-6 w-6 text-[#01411C]" />
                                Subject Matter Experts
                            </h3>
                            <p className="mb-4 text-gray-700">
                                Our content is created by educators with <strong>extensive experience</strong> in their respective fields:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Pakistan Studies:</strong> Historians and Pakistan Affairs experts with advanced degrees</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Islamic Studies:</strong> Islamic scholars with expertise in Quran, Hadith, and Islamic history</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Mathematics:</strong> Mathematics professors and competitive exam trainers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>English:</strong> English literature specialists and language experts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>General Science:</strong> Science educators with teaching experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-[#01411C]">•</span>
                                    <span><strong>Current Affairs:</strong> Analysts who track national and international developments</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                            <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-900">
                                <Users className="mr-2 h-6 w-6 text-[#01411C]" />
                                Quality Assurance
                            </h3>
                            <p className="text-gray-700">
                                Every piece of content goes through multiple rounds of review before publication. We cross-check facts, verify sources, and ensure alignment with official PPSC/FPSC/CSS syllabi. Our goal is to provide you with trustworthy, accurate information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why We Do This */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Why We Created PakScholar Pro</h2>

                    <div className="rounded-lg border-2 border-gray-200 p-8">
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We've seen talented Pakistani students struggle with competitive exam preparation due to:
                        </p>
                        <ul className="mb-6 space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-[#01411C]">✗</span>
                                <span>Expensive coaching academies that many cannot afford</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#01411C]">✗</span>
                                <span>Scattered, unreliable study materials online</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#01411C]">✗</span>
                                <span>Lack of comprehensive, organized resources in one place</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-[#01411C]">✗</span>
                                <span>Limited access to quality practice tests and past papers</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed text-gray-700">
                            <strong>PakScholar Pro was born from a simple belief:</strong> Merit should determine success, not financial resources. We created this platform to level the playing field and give every Pakistani student a fair chance at success in competitive exams.
                        </p>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mb-16">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Commitment to You</h2>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white">✓</div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Always Free</h3>
                                <p className="text-gray-700">PakScholar Pro will remain free forever. No subscriptions, no paywalls, no hidden fees.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white">✓</div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Regular Updates</h3>
                                <p className="text-gray-700">We continuously update content based on exam pattern changes and current affairs developments.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white">✓</div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Quality Over Quantity</h3>
                                <p className="text-gray-700">We focus on providing accurate, relevant content rather than overwhelming you with unnecessary material.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#01411C] text-white">✓</div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Responsive Support</h3>
                                <p className="text-gray-700">We listen to your feedback and continuously improve based on your needs and suggestions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Us CTA */}
                <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Join Thousands of Students</h3>
                    <p className="mb-6 text-gray-700">
                        Be part of a growing community of Pakistani students preparing for government competitive exams with PakScholar Pro.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/pakistan-studies"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                        >
                            Start Learning
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#01411C] bg-white px-8 py-4 font-semibold text-[#01411C] transition-all hover:bg-emerald-50"
                        >
                            Contact Us
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
