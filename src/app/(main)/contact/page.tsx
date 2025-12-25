'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to a backend
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Contact Us</h1>
                    <p className="text-xl text-gray-600">
                        We're here to help! Reach out with any questions or feedback.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Get in Touch</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <Mail className="h-6 w-6 text-[#01411C]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                                    <p className="mb-1 text-gray-700">
                                        <a href="mailto:support@pakscholarpro.com" className="text-[#01411C] hover:underline">
                                            support@pakscholarpro.com
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600">For general inquiries and support</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <MessageSquare className="h-6 w-6 text-[#01411C]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Feedback</h3>
                                    <p className="mb-1 text-gray-700">
                                        <a href="mailto:feedback@pakscholarpro.com" className="text-[#01411C] hover:underline">
                                            feedback@pakscholarpro.com
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600">Share your suggestions and ideas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                    <Clock className="h-6 w-6 text-[#01411C]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Response Time</h3>
                                    <p className="text-gray-700">We typically respond within 24-48 hours</p>
                                    <p className="text-sm text-gray-600">Monday to Friday, 9 AM - 6 PM PKT</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div className="mt-8 rounded-lg bg-emerald-50 p-6">
                            <h3 className="mb-2 font-semibold text-gray-900">Have a quick question?</h3>
                            <p className="mb-4 text-gray-700">
                                Check our FAQ page for instant answers to common questions.
                            </p>
                            <Link
                                href="/resources"
                                className="inline-flex items-center font-medium text-[#01411C] hover:underline"
                            >
                                View FAQ →
                            </Link>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Send a Message</h2>

                        {submitted ? (
                            <div className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-8 text-center">
                                <div className="mb-4 text-5xl">✓</div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-700">
                                    Thank you for contacting us. We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="mb-2 block font-medium text-gray-900">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#01411C] focus:outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block font-medium text-gray-900">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#01411C] focus:outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block font-medium text-gray-900">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#01411C] focus:outline-none"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="content">Content Question</option>
                                        <option value="technical">Technical Issue</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block font-medium text-gray-900">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-[#01411C] focus:outline-none"
                                        placeholder="Tell us how we can help..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-600">
                                    * Required fields. We respect your privacy. See our{' '}
                                    <Link href="/privacy" className="font-medium text-[#01411C] hover:underline">
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </form>
                        )}
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
