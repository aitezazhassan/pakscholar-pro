import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getEssayBySlug, getAllEssays, getEssaysByTags } from '@/lib/keystatic/reader';
import { Badge } from '@/components/ui/Badge';
import { KeyTakeaways } from '@/components/essay/KeyTakeaways';
import { ReadNextSidebar } from '@/components/essay/ReadNextSidebar';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    const essays = await getAllEssays();
    return essays.map((essay) => ({
        slug: essay.slug,
    }));
}

export default async function EssayDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const essay = await getEssayBySlug(slug);

    if (!essay) {
        notFound();
    }

    // Get related essays by tags
    const relatedEssays = essay.entry.tags
        ? await getEssaysByTags(essay.entry.tags, slug)
        : [];
    const readNext = relatedEssays.slice(0, 3);

    // Sample key takeaways (in production, these would come from frontmatter)
    const keyTakeaways = [
        essay.entry.title + ' is essential for competitive exam preparation',
        'Understanding the core concepts and their practical implications',
        'Historical context shapes current policies and practices',
        'Critical analysis and multiple perspectives are important',
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/essays"
                    className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-oxford-900"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Essays
                </Link>

                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {/* Category */}
                        <Badge variant="primary" size="medium" className="mb-4">
                            {essay.entry.category.replace('-', ' ').toUpperCase()}
                        </Badge>

                        {/* Title */}
                        <h1 className="mb-6 font-playfair text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                            {essay.entry.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="mb-8 text-xl leading-relaxed text-slate-600">
                            {essay.entry.excerpt}
                        </p>

                        {/* Metadata */}
                        <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-t border-slate-200 py-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span className="font-medium">{essay.entry.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                    {essay.entry.publishedDate
                                        ? new Date(essay.entry.publishedDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })
                                        : 'Published'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>12 min read</span>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <KeyTakeaways items={keyTakeaways} />

                        {/* Cover Image */}
                        {essay.entry.coverImage && (
                            <div className="mb-12 overflow-hidden rounded-lg shadow-medium">
                                <img
                                    src={essay.entry.coverImage}
                                    alt={essay.entry.title}
                                    className="h-auto w-full"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose-academic">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-slate-700">
                                    This is a comprehensive essay on {essay.entry.title.toLowerCase()}.
                                    The content covers multiple dimensions including historical context,
                                    current situation, and future implications for Pakistan's development.
                                </p>

                                <h2 className="mt-8 font-playfair text-3xl font-semibold text-slate-900">
                                    Introduction
                                </h2>

                                <p className="text-lg leading-relaxed text-slate-700">
                                    Understanding this topic is crucial for competitive exam preparation
                                    in Pakistan. This essay provides a detailed analysis of the subject
                                    matter, offering insights from various perspectives.
                                </p>

                                <h2 className="mt-8 font-playfair text-3xl font-semibold text-slate-900">
                                    Key Concepts
                                </h2>

                                <p className="text-lg leading-relaxed text-slate-700">
                                    The core concepts explored include policy frameworks, implementation
                                    challenges, and practical implications for governance and development.
                                </p>

                                <h2 className="mt-8 font-playfair text-3xl font-semibold text-slate-900">
                                    Analysis
                                </h2>

                                <p className="text-lg leading-relaxed text-slate-700">
                                    Critical analysis reveals both opportunities and challenges. Historical
                                    evolution has shaped current approaches, while future prospects require
                                    strategic planning and coordinated efforts.
                                </p>

                                <h2 className="mt-8 font-playfair text-3xl font-semibold text-slate-900">
                                    Conclusion
                                </h2>

                                <p className="text-lg leading-relaxed text-slate-700">
                                    This topic remains highly relevant for Pakistan's development agenda.
                                    Sustained attention from policymakers, researchers, and civil society
                                    is essential for achieving meaningful progress.
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        {essay.entry.tags && essay.entry.tags.length > 0 && (
                            <div className="mt-12 border-t border-slate-200 pt-8">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {essay.entry.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/essays?tag=${tag}`}
                                            className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-oxford-100 hover:text-oxford-900"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <ReadNextSidebar essays={readNext} />
                    </aside>
                </div>
            </div>
        </div>
    );
}
