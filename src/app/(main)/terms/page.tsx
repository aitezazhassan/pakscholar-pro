import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for PakScholar Pro - User agreement, permitted uses, and legal terms governing your use of our educational platform.',
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Terms of Service</h1>
                    <p className="text-lg text-gray-600">
                        Last Updated: December 26, 2025
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Welcome to PakScholar Pro. These Terms of Service ("Terms") govern your access to and use of our educational platform at pakscholar-pro.vercel.app (the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE PLATFORM.
                        </p>
                    </section>

                    {/* Eligibility */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Eligibility</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            To use PakScholar Pro, you must:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Be at least 13 years of age (or have parental/guardian consent if under 18)</li>
                            <li>Be capable of forming a binding contract under Pakistani law</li>
                            <li>Not be prohibited from using the Platform under Pakistani or any applicable law</li>
                            <li>Provide accurate and complete information during registration</li>
                        </ul>
                    </section>

                    {/* Account */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. User Accounts</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">3.1 Account Creation</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You may need to create an account to access certain features. When creating an account, you must:
                        </p>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Provide accurate, current, and complete information</li>
                            <li>Maintain and update your information to keep it accurate</li>
                            <li>Keep your password secure and confidential</li>
                            <li>Notify us immediately of any unauthorized use of your account</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">3.2 Account Responsibility</h3>
                        <p className="leading-relaxed text-gray-700">
                            You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to maintain account security.
                        </p>
                    </section>

                    {/* Permitted Use */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Permitted Use</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You may use PakScholar Pro for the following purposes:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Personal, non-commercial educational purposes</li>
                            <li>Preparing for PPSC, FPSC, CSS, and PMS governmental exams</li>
                            <li>Accessing study materials, practice tests, and educational resources</li>
                            <li>Tracking your study progress and performance</li>
                        </ul>
                    </section>

                    {/* Prohibited Use */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Prohibited Use</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You agree NOT to:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Copy, distribute, or sell our content without written permission</li>
                            <li>Use automated tools (bots, scrapers) to access the Platform</li>
                            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                            <li>Upload malicious code, viruses, or harmful content</li>
                            <li>Harass, abuse, or harm other users</li>
                            <li>Impersonate any person or entity</li>
                            <li>Use the Platform for any illegal purpose under Pakistani law</li>
                            <li>Interfere with or disrupt the Platform's operation</li>
                            <li>Remove copyright, trademark, or proprietary notices</li>
                            <li>Create derivative works without permission</li>
                            <li>Use content for commercial training or resale</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Intellectual Property Rights</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">6.1 Our Content</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            All content on PakScholar Pro, including but not limited to text, graphics, logos, images, study materials, practice tests, software, and compilations, is the property of PakScholar Pro or its content providers and is protected by Pakistani and international copyright laws.
                        </p>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">6.2 Limited License</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal educational purposes only. This license does not include:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>The right to download or store content (except temporary caching)</li>
                            <li>Commercial use or redistribution</li>
                            <li>Modification or derivative works</li>
                            <li>Removal of copyright or proprietary notices</li>
                        </ul>
                    </section>

                    {/* User Content */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. User-Generated Content</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            If you submit feedback, suggestions, or other content to us:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>You retain ownership of your content</li>
                            <li>You grant us a worldwide, royalty-free license to use, modify, and distribute such content for improving the Platform</li>
                            <li>You represent that you have the right to submit such content</li>
                            <li>You agree that your content does not violate any third-party rights</li>
                        </ul>
                    </section>

                    {/* Free Service */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Free Educational Service</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro is provided FREE of charge to Pakistani students. We reserve the right to:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Modify, suspend, or discontinue any part of the Platform at any time</li>
                            <li>Change these Terms with notice to users</li>
                            <li>Introduce premium features in the future (with advance notice)</li>
                        </ul>
                    </section>

                    {/* Disclaimers */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Disclaimers</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">9.1 Educational Purposes</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro is an independent educational platform. We are NOT:
                        </p>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Officially affiliated with PPSC, FPSC, or any government examination body</li>
                            <li>Authorized to guarantee exam success or results</li>
                            <li>Responsible for changes to official exam patterns or syllabi</li>
                            <li>A substitute for official study materials or exam preparation courses</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">9.2 Accuracy of Content</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of content. Users should verify information from official sources.
                        </p>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">9.3 "As Is" Provision</h3>
                        <p className="leading-relaxed text-gray-700">
                            THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Limitation of Liability</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            TO THE MAXIMUM EXTENT PERMITTED BY PAKISTANI LAW:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>PakScholar Pro shall not be liable for any indirect, incidental, special, or consequential damages</li>
                            <li>Our liability shall not exceed the amount paid by you (if any) for using the Platform</li>
                            <li>We are not responsible for any damages arising from unauthorized access to your account</li>
                            <li>We are not liable for technical failures, interruptions, or data loss</li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Termination</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">11.1 By You</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You may terminate your account at any time by contacting us or using account settings.
                        </p>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">11.2 By Us</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We may suspend or terminate your account immediately, without notice, if you:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Violate these Terms</li>
                            <li>Engage in fraudulent or illegal activity</li>
                            <li>Abuse the Platform or other users</li>
                            <li>Provide false information</li>
                        </ul>
                    </section>

                    {/* Dispute Resolution */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Dispute Resolution</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Any disputes arising from these Terms or your use of the Platform shall be:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>First attempted to be resolved through good faith negotiation</li>
                            <li>If unresolved, submitted to mediation or arbitration in Pakistan</li>
                            <li>Governed by the laws of the Islamic Republic of Pakistan</li>
                            <li>Subject to the exclusive jurisdiction of courts in Pakistan</li>
                        </ul>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">13. Governing Law</h2>
                        <p className="leading-relaxed text-gray-700">
                            These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without regard to conflict of law principles. You agree to submit to the jurisdiction of Pakistani courts.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">14. Changes to Terms</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We reserve the right to modify these Terms at any time. We will notify users of material changes by:
                        </p>
                        <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Posting updated Terms with a new "Last Updated" date</li>
                            <li>Sending email notification to registered users</li>
                            <li>Displaying a prominent notice on the Platform</li>
                        </ul>
                        <p className="leading-relaxed text-gray-700">
                            Your continued use after changes constitutes acceptance of the modified Terms.
                        </p>
                    </section>

                    {/* Severability */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">15. Severability</h2>
                        <p className="leading-relaxed text-gray-700">
                            If any provision of these Terms is found to be unenforceable or invalid under Pakistani law, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
                        </p>
                    </section>

                    {/* Entire Agreement */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">16. Entire Agreement</h2>
                        <p className="leading-relaxed text-gray-700">
                            These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and PakScholar Pro regarding the use of the Platform.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">17. Contact Information</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            For questions about these Terms, please contact us:
                        </p>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <p className="mb-2 font-semibold text-gray-900">PakScholar Pro</p>
                            <p className="mb-1 text-gray-700">Email: <a href="mailto:legal@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">legal@pakscholarpro.com</a></p>
                            <p className="mb-1 text-gray-700">Support: <a href="mailto:support@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">support@pakscholarpro.com</a></p>
                            <p className="text-gray-700">Website: <Link href="/contact" className="font-medium text-[#01411C] hover:underline">Contact Form</Link></p>
                        </div>
                    </section>

                    {/* Acceptance */}
                    <section className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Acknowledgment</h2>
                        <p className="leading-relaxed text-gray-700">
                            BY USING PAKSCHOLAR PRO, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE, YOU MUST NOT USE THE PLATFORM.
                        </p>
                    </section>
                </div>

                {/* Back Link */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center font-medium text-[#01411C] hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
