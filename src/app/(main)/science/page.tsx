'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

export default function SciencePage() {
    const [activeTab, setActiveTab] = useState('biology');

    const topics = [
        { id: 'biology', icon: '🔬', title: 'Biology', desc: 'Cells, Genetics, Evolution', count: 45 },
        { id: 'physics', icon: '⚡', title: 'Physics', desc: 'Motion, Energy, Waves', count: 42 },
        { id: 'chemistry', icon: '🧪', title: 'Chemistry', desc: 'Elements, Reactions, Bonds', count: 48 },
        { id: 'earth-science', icon: '🌍', title: 'Earth Science', desc: 'Geology, Climate, Rocks', count: 35 },
        { id: 'space', icon: '🚀', title: 'Space Science', desc: 'Solar System, Galaxies', count: 28 },
        { id: 'human-body', icon: '💊', title: 'Human Body', desc: 'Systems, Organs, Health', count: 38 }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="🔬"
                title="General Science"
                description="Master physics, chemistry, biology, and everyday science concepts for all competitive exams."
                theme="cyan"
                stats={[
                    { value: '236+', label: 'Topics' },
                    { value: '800+', label: 'Questions' },
                    { value: '60+', label: 'Diagrams' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Science Topics"
                        subtitle="Complete coverage of all science branches including key diagrams and concepts."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="cyan"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Excel in Science"
                subtitle="Simplify complex scientific concepts with our easy-to-understand guides and visual diagrams."
                primaryBtnText="Start Learning"
                theme="cyan"
            />
        </main>
    );
}
