'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

interface KeyTakeawaysProps {
    items: string[];
    className?: string;
}

export function KeyTakeaways({ items, className }: KeyTakeawaysProps) {
    return (
        <div
            className={cn(
                'my-8 rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-blue-50 p-6 shadow-soft',
                className
            )}
        >
            <div className="mb-4 flex items-center gap-2">
                <svg
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
                <h3 className="font-semibold text-slate-900">Key Takeaways</h3>
            </div>

            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                        <span className="mt-1 flex-shrink-0 text-amber-600">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
