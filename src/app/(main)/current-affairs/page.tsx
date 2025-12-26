'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

export default function CurrentAffairsPage() {
    const [activeTab, setActiveTab] = useState('international');

    const topics = [
        { id: 'international', icon: '🌍', title: 'International', desc: 'Global Events & Relations', count: 52 },
        { id: 'national', icon: '🇵🇰', title: 'National', desc: 'Pakistan Affairs & Politics', count: 65 },
        { id: 'economy', icon: '💼', title: 'Economy', desc: 'Markets, Trade & Finance', count: 38 },
        { id: 'sports', icon: '🏆', title: 'Sports', desc: 'Major Events & Achievements', count: 28 },
        { id: 'science-tech', icon: '🔬', title: 'Science & Tech', desc: 'Innovation & Discoveries', count: 35 },
        { id: 'culture', icon: '🎬', title: 'Culture & Entertainment', desc: 'Arts, Media & Awards', count: 24 }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="📰"
                title="Current Affairs"
                description="Stay updated with latest national and international events, economic developments, and global politics for all competitive exams."
                theme="rose"
                stats={[
                    { value: '242+', label: 'Topics' },
                    { value: 'Daily', label: 'Updates' },
                    { value: '2024', label: 'Coverage' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Categories"
                        subtitle="Detailed coverage of political, economic, and social developments."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="rose"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Stay Current, Stay Ahead"
                subtitle="Daily news analysis and monthly digests to keep you ahead in your exam preparation."
                primaryBtnText="View Latest Updates"
                theme="rose"
            />
        </main>
    );
}
