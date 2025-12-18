'use client';

import * as React from 'react';
import { Search, Command } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';

interface SearchHeroProps {
    placeholder?: string;
    className?: string;
}

export function SearchHero({
    placeholder = "Search 500+ essays, past papers, and MCQs...",
    className
}: SearchHeroProps) {
    const [query, setQuery] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    // Keyboard shortcut (Cmd/Ctrl + K)
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('search-input')?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className={cn('w-full', className)}>
            <form onSubmit={handleSearch} className="relative">
                {/* Search Icon */}
                <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="h-6 w-6" />
                </div>

                {/* Input */}
                <input
                    id="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className={cn(
                        'h-16 w-full rounded-2xl border-2 bg-white px-16 text-lg transition-all duration-200',
                        'placeholder:text-slate-400',
                        'focus:outline-none focus:ring-4',
                        isFocused
                            ? 'border-oxford-600 ring-oxford-100 shadow-hard'
                            : 'border-slate-200 shadow-medium hover:border-oxford-300'
                    )}
                />

                {/* Keyboard Shortcut Hint */}
                <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
                    <kbd className="hidden items-center gap-1 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-600 md:inline-flex">
                        <Command className="h-3 w-3" />K
                    </kbd>
                </div>
            </form>

            {/* Quick Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => router.push('/essays')}
                    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-oxford-100 hover:text-oxford-900"
                >
                    📚 Essays
                </button>
                <button
                    type="button"
                    onClick={() => router.push('/practice')}
                    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-oxford-100 hover:text-oxford-900"
                >
                    🧠 MCQs
                </button>
                <button
                    type="button"
                    onClick={() => router.push('/past-papers')}
                    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-oxford-100 hover:text-oxford-900"
                >
                    📄 Past Papers
                </button>
            </div>
        </div>
    );
}
