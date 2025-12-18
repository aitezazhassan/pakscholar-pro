import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getAllEssays } from '@/lib/keystatic/reader';
import { Calendar, Clock, User, BookOpen } from 'lucide-react';

export default async function EssaysPage() {
    const essays = await getAllEssays();

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-playfair text-5xl font-bold text-slate-900 md:text-6xl">
                        Academic Essays
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Comprehensive guides for competitive exam preparation
                    </p>
                </div>

                {/* Essays Grid */}
                {essays.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {essays.map((essay) => (
                            <Link key={essay.slug} href={`/essays/${essay.slug}`}>
                                <Card variant="hover" padding="none" className="h-full overflow-hidden">
                                    {/* Cover Image */}
                                    {essay.entry.coverImage && (
                                        <div className="aspect-video w-full overflow-hidden bg-slate-200">
                                            <img
                                                src={essay.entry.coverImage}
                                                alt={essay.entry.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <Badge variant="primary" size="small" className="mb-3">
                                            {essay.entry.category.replace('-', ' ').toUpperCase()}
                                        </Badge>

                                        {/* Title */}
                                        <h2 className="mb-3 font-playfair text-2xl font-semibold text-slate-900 line-clamp-2">
                                            {essay.entry.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="mb-4 text-slate-600 line-clamp-3">
                                            {essay.entry.excerpt}
                                        </p>

                                        {/* Metadata */}
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                <span>{essay.entry.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {essay.entry.publishedDate
                                                        ? new Date(essay.entry.publishedDate).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                        })
                                                        : 'Published'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>12 min read</span>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        {essay.entry.tags && essay.entry.tags.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {essay.entry.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="py-20 text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                            <BookOpen className="h-10 w-10 text-slate-400" />
                        </div>
                        <h3 className="mb-2 font-playfair text-2xl font-semibold text-slate-900">
                            No Essays Yet
                        </h3>
                        <p className="mb-6 text-slate-600">
                            Start creating essays from the admin panel
                        </p>
                        <Link
                            href="/keystatic"
                            className="inline-flex items-center gap-2 rounded-lg bg-oxford-900 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
                        >
                            Go to Admin
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
