'use client';

import { Cookie } from 'lucide-react';

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Cookie className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                    <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
                    <p className="text-slate-300">How we use cookies</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
                    <h2>What Are Cookies?</h2>
                    <p>Cookies are small text files stored on your device when you visit our website.</p>

                    <h2>How We Use Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Remember your preferences</li>
                        <li>Analyze website traffic and usage</li>
                        <li>Improve user experience</li>
                    </ul>

                    <h2>Types of Cookies We Use</h2>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                    </ul>

                    <h2>Managing Cookies</h2>
                    <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>

                    <h2>Third-Party Cookies</h2>
                    <p>We may use third-party services (like Google Analytics) that set their own cookies.</p>
                </div>
            </section>
        </main>
    );
}
