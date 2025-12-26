'use client';

import { FileText } from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
                    <p className="text-slate-300">Last updated: January 2025</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
                    <h2>Acceptance of Terms</h2>
                    <p>By accessing PakScholar Pro, you agree to these Terms of Service. If you disagree with any part, please do not use our website.</p>

                    <h2>Use of Services</h2>
                    <p>Our services are provided free of charge for educational purposes. You agree to:</p>
                    <ul>
                        <li>Use the website for lawful purposes only</li>
                        <li>Not copy or redistribute our content without permission</li>
                        <li>Not attempt to hack or disrupt our services</li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>All content on PakScholar Pro is owned by us or our content suppliers. Unauthorized use is prohibited.</p>

                    <h2>Disclaimer</h2>
                    <p>Educational content is provided "as is" without warranties. We are not affiliated with PPSC, FPSC, or CSS examination boards.</p>

                    <h2>Limitation of Liability</h2>
                    <p>We are not liable for any damages arising from your use of our website or reliance on our content.</p>

                    <h2>Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes.</p>

                    <h2>Contact</h2>
                    <p>Questions about Terms? Email: support@pakscholarpro.com</p>
                </div>
            </section>
        </main>
    );
}
