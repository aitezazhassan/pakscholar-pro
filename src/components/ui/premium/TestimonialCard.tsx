'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    rating: number;
    avatar?: string;
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    role,
    rating,
    avatar,
    className = '',
}: TestimonialCardProps) {
    return (
        <div className={`
      relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100
      hover:shadow-xl transition-all duration-300
      ${className}
    `}>
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-6xl text-emerald-100 font-serif leading-none">
                "
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                {avatar ? (
                    <img
                        src={avatar}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                        {author.charAt(0)}
                    </div>
                )}
                <div>
                    <p className="font-semibold text-gray-900">{author}</p>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
        </div>
    );
}
