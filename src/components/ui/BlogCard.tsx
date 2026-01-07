import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    href: string;
    category: string;
    author: string;
    publishedDate: string;
    readTime: number; // minutes
    image?: string;
}

export function BlogCard({
    title,
    excerpt,
    href,
    category,
    author,
    publishedDate,
    readTime,
    image,
}: BlogCardProps) {
    const categoryColors: Record<string, string> = {
        'Preparation': 'bg-emerald-100 text-emerald-700',
        'Subject Tips': 'bg-blue-100 text-blue-700',
        'Success Stories': 'bg-purple-100 text-purple-700',
        'Current Affairs': 'bg-orange-100 text-orange-700',
    };

    return (
        <Link href={href}>
            <article className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                {image && (
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
                                {category}
                            </span>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="p-6">
                    {!image && (
                        <div className="mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
                                {category}
                            </span>
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{readTime} min read</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
