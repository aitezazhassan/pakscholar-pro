'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

interface TableOfContentsProps {
    headings: { id: string; text: string; level: number }[];
    className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
    const [activeId, setActiveId] = React.useState<string>('');

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0% -80% 0%' }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className={cn('sticky top-24 hidden lg:block', className)}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    On This Page
                </h4>
                <ul className="space-y-2">
                    {headings.map(({ id, text, level }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleClick(id)}
                                className={cn(
                                    'block w-full text-left text-sm transition-colors',
                                    level === 3 && 'pl-4',
                                    activeId === id
                                        ? 'font-medium text-oxford-900'
                                        : 'text-slate-600 hover:text-oxford-700'
                                )}
                            >
                                {text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
