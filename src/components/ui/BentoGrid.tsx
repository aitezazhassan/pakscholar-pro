'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

interface BentoGridProps {
    className?: string;
    children?: React.ReactNode;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div className={cn('grid auto-rows-[22rem] grid-cols-3 gap-4', className)}>
            {children}
        </div>
    );
}

interface BentoCardProps {
    className?: string;
    title: string;
    description?: string;
    href?: string;
    icon?: React.ReactNode;
    count?: number;
    variant?: 'default' | 'primary' | 'success';
    children?: React.ReactNode;
}

export function BentoCard({
    className,
    title,
    description,
    href,
    icon,
    count,
    variant = 'default',
    children,
}: BentoCardProps) {
    const variants = {
        default: 'bg-white border-slate-200 hover:border-oxford-300',
        primary: 'bg-gradient-to-br from-oxford-900 to-oxford-700 text-white border-oxford-600',
        success: 'bg-gradient-to-br from-emerald-900 to-emerald-700 text-white border-emerald-600',
    };

    const Tag = href ? 'a' : 'div';

    return (
        <Tag
            href={href}
            className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-hard',
                variants[variant],
                className
            )}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {icon && <div className="mb-4 text-4xl">{icon}</div>}

                <h3 className={cn(
                    'font-playfair text-2xl font-bold',
                    variant === 'default' ? 'text-slate-900' : 'text-white'
                )}>
                    {title}
                </h3>

                {description && (
                    <p className={cn(
                        'mt-2 text-sm',
                        variant === 'default' ? 'text-slate-600' : 'text-white/80'
                    )}>
                        {description}
                    </p>
                )}

                {count !== undefined && (
                    <div className={cn(
                        'mt-4 text-4xl font-bold',
                        variant === 'default' ? 'text-oxford-900' : 'text-white'
                    )}>
                        {count}+
                    </div>
                )}
            </div>

            {/* Arrow Icon */}
            {href && (
                <div className={cn(
                    'absolute bottom-6 right-6 transition-transform group-hover:translate-x-1',
                    variant === 'default' ? 'text-oxford-600' : 'text-white/60'
                )}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {children}
        </Tag>
    );
}
