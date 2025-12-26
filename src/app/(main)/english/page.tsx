'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { TopicCard } from '@/components/ui/TopicCard';
import { SectionHeader, GradientCTA } from '@/components/ui/layout-components';

export default function EnglishPage() {
    const [activeTab, setActiveTab] = useState('grammar');

    const topics = [
        { id: 'grammar', icon: '📝', title: 'Grammar', desc: 'Tenses, Voice, Speech', count: 42 },
        { id: 'vocabulary', icon: '📚', title: 'Vocabulary', desc: 'Words, Synonyms, Antonyms', count: 65 },
        { id: 'idioms', icon: '💬', title: 'Idioms & Phrases', desc: 'Common Expressions', count: 38 },
        { id: 'precis', icon: '✍️', title: 'Précis Writing', desc: 'Summarization Skills', count: 25 },
        { id: 'comprehension', icon: '📖', title: 'Comprehension', desc: 'Reading & Analysis', count: 30 },
        { id: 'correction', icon: '🎯', title: 'Sentence Correction', desc: 'Error Spotting', count: 35 }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                icon="✍️"
                title="English Language"
                description="Perfect your grammar, expand vocabulary, and master précis writing for successful communication and exams."
                theme="purple"
                stats={[
                    { value: '235+', label: 'Topics' },
                    { value: '2000+', label: 'Words' },
                    { value: '500+', label: 'Idioms' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Master English"
                        subtitle="Complete coverage for all English sections including grammar, vocabulary, and composition."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                {...topic}
                                active={activeTab === topic.id}
                                onClick={() => setActiveTab(topic.id)}
                                theme="purple"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <GradientCTA
                title="Perfect Your English"
                subtitle="Build a strong vocabulary and master complex grammar rules with our expert-designed lessons."
                primaryBtnText="Start Learning"
                theme="purple"
            />
        </main>
    );
}
