import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for PakScholar Pro - How we collect, use, and protect your personal information in accordance with Pakistani law and international best practices.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="text-lg text-gray-600">
                        Last Updated: December 26, 2025
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Introduction</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform at pakscholar-pro.vercel.app (the "Platform").
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            By accessing or using PakScholar Pro, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Platform.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Information We Collect</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">2.1 Personal Information</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Create an account (name, email address, password)</li>
                            <li>Contact us through our support form (name, email, message content)</li>
                            <li>Subscribe to our newsletter or updates (email address)</li>
                            <li>Participate in surveys or provide feedback</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">2.2 Usage Data</h3>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We automatically collect certain information when you visit and use the Platform, including:
                        </p>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Study progress and performance data (quiz scores, time spent, topics completed)</li>
                            <li>Device information (browser type, operating system, screen resolution)</li>
                            <li>Log data (IP address, access times, pages viewed)</li>
                            <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">2.3 Information We Do NOT Collect</h3>
                        <p className="leading-relaxed text-gray-700">
                            We do not collect:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>National Identity Card (CNIC) numbers</li>
                            <li>Financial or payment information (our service is free)</li>
                            <li>Sensitive personal data (health, religious beliefs, political views)</li>
                            <li>Information from children under 13 without parental consent</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li><strong>Account Management:</strong> To create and manage your user account</li>
                            <li><strong>Educational Services:</strong> To provide study materials, track progress, and personalize your learning experience</li>
                            <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                            <li><strong>Platform Improvement:</strong> To analyze usage patterns and improve our content and features</li>
                            <li><strong>Security:</strong> To protect against fraud, abuse, and unauthorized access</li>
                            <li><strong>Legal Compliance:</strong> To comply with applicable Pakistani laws and regulations</li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Information Sharing and Disclosure</h2>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">4.1 We DO Share Information With:</h3>
                        <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate the Platform (hosting, analytics, email services)</li>
                            <li><strong>Legal Authorities:</strong> When required by Pakistani law or government authorities</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition (with notice to users)</li>
                        </ul>

                        <h3 className="mb-3 text-xl font-semibold text-gray-800">4.2 We DO NOT:</h3>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Sell or rent your personal information to third parties</li>
                            <li>Share your data with advertisers or marketers</li>
                            <li>Disclose your study performance to educational institutions without consent</li>
                            <li>Use your information for purposes other than stated in this policy</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Data Security</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We implement appropriate technical and organizational security measures to protect your personal information, including:
                        </p>
                        <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Encryption of data in transit (HTTPS/SSL)</li>
                            <li>Secure password storage (hashing and salting)</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Secure data storage practices</li>
                        </ul>
                        <p className="leading-relaxed text-gray-700">
                            However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Your Privacy Rights</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                            <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                            <li><strong>Object:</strong> Object to certain types of data processing</li>
                        </ul>
                        <p className="mt-4 leading-relaxed text-gray-700">
                            To exercise these rights, please contact us at: <a href="mailto:privacy@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">privacy@pakscholarpro.com</a>
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Cookies and Tracking Technologies</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We use cookies and similar tracking technologies to enhance your experience. For detailed information, please see our <Link href="/cookies" className="font-medium text-[#01411C] hover:underline">Cookie Policy</Link>.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            You can control cookies through your browser settings. Note that disabling cookies may affect Platform functionality.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Data Retention</h2>
                        <p className="leading-relaxed text-gray-700">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by Pakistani law. When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are legally required to retain it.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Children's Privacy</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13 without parental consent.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at <a href="mailto:privacy@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">privacy@pakscholarpro.com</a>, and we will delete such information.
                        </p>
                    </section>

                    {/* International Users */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">10. International Data Transfers</h2>
                        <p className="leading-relaxed text-gray-700">
                            Your information may be transferred to and processed in countries other than Pakistan where our service providers are located. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </section>

                    {/* Pakistani Law */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Compliance with Pakistani Law</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            PakScholar Pro complies with applicable Pakistani laws and regulations, including:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Prevention of Electronic Crimes Act (PECA), 2016</li>
                            <li>Pakistan Telecommunication Authority (PTA) regulations</li>
                            <li>Relevant provisions of the Constitution of Pakistan</li>
                        </ul>
                        <p className="mt-4 leading-relaxed text-gray-700">
                            We also follow international best practices inspired by GDPR to ensure robust data protection.
                        </p>
                    </section>

                    {/* Third-Party Links */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Third-Party Links</h2>
                        <p className="leading-relaxed text-gray-700">
                            Our Platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">13. Changes to This Privacy Policy</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by:
                        </p>
                        <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
                            <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                            <li>Sending an email notification to registered users (for significant changes)</li>
                            <li>Displaying a prominent notice on the Platform</li>
                        </ul>
                        <p className="leading-relaxed text-gray-700">
                            Your continued use of the Platform after such changes constitutes acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">14. Contact Us</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <p className="mb-2 font-semibold text-gray-900">PakScholar Pro</p>
                            <p className="mb-1 text-gray-700">Email: <a href="mailto:privacy@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">privacy@pakscholarpro.com</a></p>
                            <p className="mb-1 text-gray-700">Support: <a href="mailto:support@pakscholarpro.com" className="font-medium text-[#01411C] hover:underline">support@pakscholarpro.com</a></p>
                            <p className="text-gray-700">Website: <Link href="/contact" className="font-medium text-[#01411C] hover:underline">Contact Form</Link></p>
                        </div>
                    </section>

                    {/* Acceptance */}
                    <section className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Acceptance of This Policy</h2>
                        <p className="leading-relaxed text-gray-700">
                            By using PakScholar Pro, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree, please discontinue use of the Platform immediately.
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
