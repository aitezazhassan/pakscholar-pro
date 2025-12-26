'use client';

import Link from 'next/link';
import { Folder, FileText } from 'lucide-react';

export default function SitemapPage() {
    const sections = [
        {
            title: 'Main Pages',
            links: [
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'FAQ', href: '/faq' },
                { name: 'How It Works', href: '/how-it-works' }
            ]
        },
        {
            title: 'Subjects',
            links: [
                { name: 'Pakistan Studies', href: '/pakistan-studies' },
                { name: 'Islamic Studies', href: '/islamic-studies' },
                { name: 'Mathematics', href: '/mathematics' },
                { name: 'English', href: '/english' },
                { name: 'General Science', href: '/science' },
                { name: 'Current Affairs', href: '/current-affairs' }
            ]
        },
        {
            title: 'Exams',
            links: [
                { name: 'PPSC Guide', href: '/exams/ppsc' },
                { name: 'FPSC Guide', href: '/exams/fpsc' },
                { name: 'CSS Guide', href: '/exams/css' }
            ]
        },
        {
            title: 'Explore Pakistan',
            links: [
                { name: 'Overview', href: '/explore' },
                { name: 'Punjab', href: '/explore/punjab' },
                { name: 'Sindh', href: '/explore/sindh' },
                { name: 'KPK', href: '/explore/kpk' },
                { name: 'Balochistan', href: '/explore/balochistan' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Practice Tests', href: '/practice' },
                { name: 'Past Papers', href: '/past-papers' },
                { name: 'Resources Hub', href: '/resources' }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Folder className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                    <h1 className="text-4xl font-bold mb-2">Sitemap</h1>
                    <p className="text-slate-300">Browse all pages on PakScholar Pro</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-emerald-600" />
                                    {section.title}
                                </h2>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-slate-700 hover:text-emerald-600 transition-colors">
                                                → {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
