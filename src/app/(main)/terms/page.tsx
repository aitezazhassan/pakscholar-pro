import { FileText } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function TermsPage() {
    return (
        <StandardPageLayout
            title="Terms of Service"
            subtitle="The rules and guidelines for using PakScholar Pro."
            icon={FileText}
            themeColor="bg-blue-600"
            lastUpdated="Last updated: January 2025"
        >
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using PakScholar Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.</p>

            <h2>2. Use of Services</h2>
            <p>PakScholar Pro provides educational resources free of charge for personal, non-commercial use. You agree to use the services only for lawful purposes and in a way that does not infringe the rights of others.</p>
            <ul>
                <li><strong>Prohibited Conduct:</strong> You may not attempt to scrape, reverse-engineer, or disrupt any part of the service.</li>
                <li><strong>Content Integrity:</strong> You may not redistribute or sell any content found on this platform without explicit written consent.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>All materials on PakScholar Pro, including text, graphics, logos, and software, are the property of PakScholar Pro or its content suppliers and are protected by international copyright laws. Any unauthorized use of these materials may violate copyright, trademark, and other laws.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>The information provided on PakScholar Pro is for general educational purposes only. While we strive for accuracy, we make no warranties regarding the completeness or correctness of the content. We are not officially affiliated with PPSC, FPSC, CSS, or any other examination board.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall PakScholar Pro be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.</p>

            <h2>6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

            <h2>7. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at: <strong>legal@pakscholarpro.com</strong></p>
        </StandardPageLayout>
    );
}
