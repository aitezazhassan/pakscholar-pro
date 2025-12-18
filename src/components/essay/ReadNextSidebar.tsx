import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Calendar, Clock } from 'lucide-react';

interface RelatedEssay {
    slug: string;
    entry: {
        title: string;
        excerpt: string;
        category: string;
        publishedDate?: string;
    };
}

interface ReadNextSidebarProps {
    essays: RelatedEssay[];
}

export function ReadNextSidebar({ essays }: ReadNextSidebarProps) {
    if (essays.length === 0) return null;

    return (
        <aside className="mt-12 border-t border-slate-200 pt-8 lg:mt-0 lg:border-t-0 lg:pt-0">
            <div className="lg:sticky lg:top-24">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">Read Next</h3>
                <div className="space-y-4">
                    {essays.map((essay) => (
                        <Link key={essay.slug} href={`/essays/${essay.slug}`}>
                            <Card variant="hover" padding="medium" className="h-full">
                                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-oxford-600">
                                    {essay.entry.category.replace('-', ' ')}
                                </div>
                                <h4 className="mb-2 font-playfair text-lg font-semibold text-slate-900 line-clamp-2">
                                    {essay.entry.title}
                                </h4>
                                <p className="mb-3 text-sm text-slate-600 line-clamp-2">
                                    {essay.entry.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>
                                            {essay.entry.publishedDate
                                                ? new Date(essay.entry.publishedDate).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                })
                                                : 'Recently'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>5 min</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
