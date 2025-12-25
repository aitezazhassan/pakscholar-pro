import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'Cookie Policy for PakScholar Pro - Information about how we use cookies and similar tracking technologies on our platform.',
};

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                <div className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Cookie Policy</h1>
                    <p className="text-lg text-gray-600">Last Updated: December 26, 2025</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. What Are Cookies?</h2>
                        <p className="leading-relaxed text-gray-700">
                            Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. How We Use Cookies</h2>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">2.1 Essential Cookies</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">Required for Platform functionality:</p>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li>User authentication and session management</li>
                            <li>Security and fraud prevention</li>
                            <li>Load balancing</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">2.2 Analytics Cookies</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">Help us understand how users interact with the Platform:</p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Page views and navigation patterns</li>
                            <li>Study progress and feature usage</li>
                            <li>Performance monitoring</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Managing Cookies</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You can control cookies through your browser settings. Note that disabling cookies may affect Platform functionality.
                        </p>
                        <div className="rounded-lg bg-emerald-50 p-6">
                            <p className="font-semibold text-gray-900">Browser Help Links:</p>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                                <li>Firefox: Settings → Privacy & Security</li>
                                <li>Safari: Preferences → Privacy</li>
                            </ul>
                        </div>
                    </section>

                    <section className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                        <p className="leading-relaxed text-gray-700">
                            For more information about how we collect and use your data, please see our <Link href="/privacy" className="font-medium text-[#01411C] hover:underline">Privacy Policy</Link>.
                        </p>
                    </section>
                </div>

                <div className="mt-12">
                    <Link href="/" className="inline-flex items-center font-medium text-[#01411C] hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
