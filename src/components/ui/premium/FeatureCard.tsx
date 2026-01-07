'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    gradient?: string;
    stats?: {
        label: string;
        value: string;
    };
    badge?: string;
    size?: 'default' | 'large';
    className?: string;
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    href,
    gradient = 'from-emerald-500 to-teal-600',
    stats,
    badge,
    size = 'default',
    className = '',
}: FeatureCardProps) {
    const isLarge = size === 'large';

    return (
        <Link
            href={href}
            className={`
        group relative overflow-hidden rounded-2xl p-6 
        bg-white border-2 border-gray-100
        hover:border-transparent hover:shadow-2xl
        transition-all duration-300 hover:-translate-y-1
        ${isLarge ? 'md:col-span-2 md:row-span-2 p-8' : ''}
        ${className}
      `}
        >
            {/* Gradient Background on Hover */}
            <div className={`
        absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 
        group-hover:opacity-5 transition-opacity duration-300
      `} />

            {/* Badge */}
            {badge && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    {badge}
                </span>
            )}

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className={`
          ${isLarge ? 'w-16 h-16 mb-6' : 'w-12 h-12 mb-4'}
          bg-gradient-to-br ${gradient} rounded-xl 
          flex items-center justify-center
          group-hover:scale-110 transition-transform duration-300
        `}>
                    <Icon className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
                </div>

                {/* Title */}
                <h3 className={`
          ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'} 
          font-bold text-gray-900 mb-2
          group-hover:text-transparent group-hover:bg-clip-text 
          group-hover:bg-gradient-to-r group-hover:${gradient}
          transition-all duration-300
        `}>
                    {title}
                </h3>

                {/* Description */}
                <p className={`
          ${isLarge ? 'text-base md:text-lg' : 'text-sm'} 
          text-gray-600 leading-relaxed
        `}>
                    {description}
                </p>

                {/* Stats */}
                {stats && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{stats.label}</span>
                            <span className="text-lg font-bold text-gray-900">{stats.value}</span>
                        </div>
                    </div>
                )}

                {/* Arrow */}
                <div className="mt-4 flex items-center text-gray-400 group-hover:text-emerald-600 transition-colors">
                    <span className="text-sm font-medium">Explore</span>
                    <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
