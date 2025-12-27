import { Map, Link as LinkIcon, BookOpen, Award, FileText, Settings, User } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';
import Link from 'next/link';

export default function SitemapPage() {
    const sections = [
        {
            title: 'Core Subjects',
            icon: BookOpen,
            links: [
                { name: 'Pakistan Studies', href: '/pakistan-studies' },
                { name: 'Islamic Studies', href: '/islamic-studies' },
                { name: 'Mathematics', href: '/mathematics' },
                { name: 'English Grammar', href: '/english' },
                { name: 'General Science', href: '/science' },
                { name: 'Current Affairs', href: '/current-affairs' },
            ]
        },
        {
            title: 'Exam Guides',
            icon: Award,
            links: [
                { name: 'PPSC Exam Guide', href: '/exams/ppsc' },
                { name: 'FPSC Exam Guide', href: '/exams/fpsc' },
                { name: 'CSS Exam Guide', href: '/exams/css' },
                { name: 'Mock Exams', href: '/practice' },
                { name: 'Past Papers', href: '/past-papers' },
            ]
        },
        {
            title: 'Explore Pakistan',
            icon: Map,
            links: [
                { name: 'National Overview', href: '/explore' },
                { name: 'Punjab Province', href: '/explore/punjab' },
                { name: 'Sindh Province', href: '/explore/sindh' },
                { name: 'KPK Province', href: '/explore/kpk' },
                { name: 'Balochistan Province', href: '/explore/balochistan' },
            ]
        },
        {
            title: 'Account & Support',
            icon: User,
            links: [
                { name: 'User Dashboard', href: '/dashboard' },
                { name: 'Help Center', href: '/help' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Contact Us', href: '/contact' },
            ]
        }
    ];

    return (
        <StandardPageLayout
            title="Sitemap"
            subtitle="A comprehensive directory of all pages and resources available on PakScholar Pro."
            icon={Map}
            themeColor="bg-slate-700"
        >
            <div className="grid md:grid-cols-2 gap-12">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                <section.icon className="w-6 h-6 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 italic font-serif">{section.title}</h2>
                        </div>
                        <ul className="space-y-4">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <Link
                                        href={link.href}
                                        className="text-lg text-slate-600 hover:text-emerald-600 flex items-center gap-2 group transition-all"
                                    >
                                        <LinkIcon className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 group-hover:scale-110 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </StandardPageLayout>
    );
}
