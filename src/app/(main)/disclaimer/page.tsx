import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Disclaimer for PakScholar Pro - Important information about the educational nature of our platform and exam preparation services.',
};

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
                <div className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Disclaimer</h1>
                    <p className="text-lg text-gray-600">Last Updated: December 26, 2025</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Educational Purposes Only</h2>
                        <p className="leading-relaxed text-gray-700">
                            PakScholar Pro is an independent educational platform designed to assist students in preparing for PPSC, FPSC, CSS, and PMS examinations. Our study materials, practice tests, and resources are provided FOR EDUCATIONAL PURPOSES ONLY.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. No Official Affiliation</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            <strong>IMPORTANT:</strong> PakScholar Pro is NOT:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Affiliated with, endorsed by, or connected to PPSC (Punjab Public Service Commission)</li>
                            <li>Affiliated with, endorsed by, or connected to FPSC (Federal Public Service Commission)</li>
                            <li>Affiliated with, endorsed by, or connected to any other government examination body</li>
                            <li>An official exam preparation center or training institute</li>
                            <li>Authorized to issue certifications or exam-related credentials</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. No Guarantee of Results</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            While we strive to provide quality educational content, we make NO GUARANTEES about:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Exam success or passing scores</li>
                            <li>Selection in governmental positions</li>
                            <li>Interview call letters or final appointments</li>
                            <li>Specific outcomes from using our Platform</li>
                        </ul>
                        <p className="mt-4 leading-relaxed text-gray-700">
                            Your success depends on multiple factors including your effort, preparation strategy, and performance on actual exam day.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Content Accuracy</h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            We make reasonable efforts to ensure content accuracy, however:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700">
                            <li>Official exam patterns and syllabi may change without notice</li>
                            <li>Some content may become outdated over time</li>
                            <li>We recommend verifying all information from official sources</li>
                            <li>Current affairs content reflects information available at time of publication</li>
                        </ul>
                        <p className="mt-4 font-semibold text-gray-900">
                            Always check official PPSC/FPSC websites for the most current exam information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Use at Your Own Risk</h2>
                        <p className="leading-relaxed text-gray-700">
                            Use of PakScholar Pro is entirely at your own risk. We are not responsible for any consequences arising from reliance on our content or use of our Platform for exam preparation.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Not a Substitute for Official Materials</h2>
                        <p className="leading-relaxed text-gray-700">
                            Our Platform is designed to SUPPLEMENT your exam preparation, not replace official study materials, government-issued syllabi, or authorized preparation courses. We recommend using multiple study resources.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Third-Party Information</h2>
                        <p className="leading-relaxed text-gray-700">
                            Any links to external websites or references to third-party resources are provided for convenience only. We do not endorse or assume responsibility for external content.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Changes to Content</h2>
                        <p className="leading-relaxed text-gray-700">
                            We reserve the right to modify, update, or remove content at any time without notice. We are not obligated to keep content current or notify users of changes.
                        </p>
                    </section>

                    <section className="rounded-lg border-2 border-[#01411C] bg-emerald-50 p-6">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Important Notice</h2>
                        <p className="mb-3 leading-relaxed text-gray-700">
                            By using PakScholar Pro, you acknowledge and accept this disclaimer. If you do not agree, please discontinue use immediately.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            For detailed legal terms, see our <Link href="/terms" className="font-medium text-[#01411C] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="font-medium text-[#01411C] hover:underline">Privacy Policy</Link>.
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
