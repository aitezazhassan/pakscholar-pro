'use client';

import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                    <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
                    <p className="text-slate-300">Important information about our services</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
                    <h2>No Official Affiliation</h2>
                    <p>PakScholar Pro is an independent educational platform. We are NOT affiliated with, endorsed by, or officially connected to PPSC, FPSC, CSS, or any government examination board.</p>

                    <h2>Educational Purpose Only</h2>
                    <p>All content is provided for educational and informational purposes only. We do not guarantee exam success or specific results.</p>

                    <h2>Accuracy of Information</h2>
                    <p>While we strive for accuracy, we cannot guarantee that all information is complete, current, or error-free. Always verify important information from official sources.</p>

                    <h2>No Exam Guarantee</h2>
                    <p>Using our resources does not guarantee passing any examination. Your success depends on your own effort, preparation, and abilities.</p>

                    <h2>Official Sources</h2>
                    <p>For official exam information, syllabus, and notifications, always refer to:</p>
                    <ul>
                        <li>PPSC: ppsc.gop.pk</li>
                        <li>FPSC: fpsc.gov.pk</li>
                        <li>CSS: fpsc.gov.pk</li>
                    </ul>

                    <h2>Use at Your Own Risk</h2>
                    <p>Use of this website is at your own risk. We are not liable for any decisions made based on our content.</p>
                </div>
            </section>
        </main>
    );
}
