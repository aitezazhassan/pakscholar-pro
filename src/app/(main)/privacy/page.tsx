import { Shield } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function PrivacyPage() {
    return (
        <StandardPageLayout
            title="Privacy Policy"
            subtitle="How we protect and handle your data at PakScholar Pro."
            icon={Shield}
            themeColor="bg-emerald-600"
            lastUpdated="Last updated: January 2025"
        >
            <h2>Introduction</h2>
            <p>PakScholar Pro is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our platform.</p>

            <h2>Information We Collect</h2>
            <p>We collect minimal information required to provide a functional and optimized experience:</p>
            <ul>
                <li><strong>Usage Data:</strong> Pages visited, time spent, and interaction patterns.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, and IP address for security.</li>
                <li><strong>Cookies:</strong> Essential and analytical cookies to remember your preferences and analyze traffic.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>Your data is used solely for the following purposes:</p>
            <ul>
                <li>To maintain and improve our study resources.</li>
                <li>To personalize your learning journey and dashboard content.</li>
                <li>To monitor and prevent fraudulent or unauthorized access.</li>
                <li>To analyze platform usage trends and optimize performance.</li>
            </ul>

            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. Your account credentials are encrypted and stored securely using Supabase Auth technologies.</p>

            <h2>Third-Party Services</h2>
            <p>We may use trusted third-party services like Google Analytics to understand how users interact with our site. These services have their own privacy policies regarding data handling.</p>

            <h2>Your Rights</h2>
            <p>You have the right to access, update, or delete your account information at any time via your Dashboard settings. For complete data deletion requests, please contact our support team.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please reach out to us at: <strong>privacy@pakscholarpro.com</strong></p>
        </StandardPageLayout>
    );
}
