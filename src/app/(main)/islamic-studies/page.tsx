'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

export default function IslamicStudiesPage() {
    const [activeTab, setActiveTab] = useState('quran');

    const topics = [
        { id: 'quran', icon: '📖', title: 'Holy Quran', desc: 'Surahs, Verses & Themes', count: 38 },
        { id: 'hadith', icon: '📜', title: 'Hadith', desc: 'Sahih & Authentic Narrations', count: 42 },
        { id: 'history', icon: '🕌', title: 'Islamic History', desc: 'From Prophet to Modern Era', count: 35 },
        { id: 'fiqh', icon: '⚖️', title: 'Fiqh', desc: 'Islamic Jurisprudence', count: 28 },
        { id: 'caliphate', icon: '👑', title: 'Caliphate', desc: 'Khilafat Rashida & Beyond', count: 24 },
        { id: 'contributions', icon: '🌟', title: 'Contributions', desc: 'Science, Art & Philosophy', count: 30 }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="☪️"
                title="Islamic Studies"
                description="Comprehensive study of Quran, Hadith, Islamic History, and Muslim contributions to civilization."
                theme="emerald"
                stats={[
                    { value: '197+', label: 'Topics Covered' },
                    { value: '600+', label: 'Questions' },
                    { value: '40+', label: 'Past Papers' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Explore Topics"
                        subtitle="Detailed lessons on Quranic studies, Seerah, and Islamic jurisprudence."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="emerald"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Master Islamic Studies"
                subtitle="Excel in PPSC, FPSC, and CSS Islamic Studies papers with our comprehensive guides."
                primaryBtnText="Start Learning Free"
                theme="emerald"
            />
        </main>
    );
}
