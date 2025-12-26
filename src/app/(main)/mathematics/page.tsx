'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

export default function MathematicsPage() {
    const [activeTab, setActiveTab] = useState('algebra');

    const topics = [
        { id: 'algebra', icon: '➕', title: 'Algebra', desc: 'Linear, Quadratic Equations', count: 45 },
        { id: 'statistics', icon: '📊', title: 'Statistics', desc: 'Mean, Median, Mode, SD', count: 32 },
        { id: 'geometry', icon: '📐', title: 'Geometry', desc: 'Shapes, Angles, Theorems', count: 38 },
        { id: 'number-theory', icon: '🔢', title: 'Number Theory', desc: 'Factors, Multiples, Primes', count: 28 },
        { id: 'ratios', icon: '📈', title: 'Ratios & Proportion', desc: 'Direct, Inverse Variation', count: 35 },
        { id: 'series', icon: '⚡', title: 'Series & Sequences', desc: 'AP, GP, Special Series', count: 30 }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="📐"
                title="Mathematics"
                description="Master algebra, statistics, geometry, and key mathematical concepts with step-by-step problem solving."
                theme="blue"
                stats={[
                    { value: '208+', label: 'Topics' },
                    { value: '1000+', label: 'Problems' },
                    { value: '100+', label: 'Formulas' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Topics & Formulas"
                        subtitle="Everything you need to excel in general mathematics and quantitative reasoning."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="blue"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Master Mathematics"
                subtitle="Practice 1000+ problems with detailed step-by-step solutions to build your confidence."
                primaryBtnText="Start Practicing"
                theme="blue"
            />
        </main>
    );
}
