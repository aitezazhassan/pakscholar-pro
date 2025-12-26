'use client';

import { Shield } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                    <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-slate-300">Last updated: January 2025</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
                    <h2>Introduction</h2>
                    <p>PakScholar Pro is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect minimal information:</p>
                    <ul>
                        <li>Usage data (pages visited, time spent)</li>
                        <li>Device information (browser type, IP address)</li>
                        <li>Cookies for analytics and functionality</li>
                    </ul>

                    <h2>How We Use Information</h2>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Improve our website and services</li>
                        <li>Analyze user behavior and preferences</li>
                        <li>Ensure website security</li>
                    </ul>

                    <h2>Data Security</h2>
                    <p>We implement appropriate security measures to protect your information. However, no internet transmission is 100% secure.</p>

                    <h2>Third-Party Services</h2>
                    <p>We may use third-party analytics services (Google Analytics) that collect information about your use of our website.</p>

                    <h2>Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. Contact us for any privacy concerns.</p>

                    <h2>Contact Us</h2>
                    <p>For privacy-related questions, email us at: support@pakscholarpro.com</p>
                </div>
            </section>
        </main>
    );
}
