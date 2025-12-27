'use client';

import { LucideIcon } from 'lucide-react';

interface StandardPageLayoutProps {
    title: string;
    subtitle?: string;
    icon: LucideIcon;
    iconColor?: string;
    themeColor?: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

export default function StandardPageLayout({
    title,
    subtitle,
    icon: Icon,
    iconColor = 'text-emerald-400',
    themeColor = 'bg-emerald-600',
    lastUpdated,
    children
}: StandardPageLayoutProps) {
    return (
        <main className="min-h-screen bg-white">
            {/* Dark Hero */}
            <section className="relative isolate overflow-hidden bg-slate-900 pt-32 pb-24">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff22_1px,#00091d_1px)] bg-[size:24px_24px] opacity-20"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className={`inline-flex items-center justify-center w-20 h-20 ${themeColor} rounded-2xl mb-8 shadow-2xl shadow-emerald-900/40`}>
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-serif italic">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                    {lastUpdated && (
                        <p className="mt-8 text-sm text-slate-400 font-medium uppercase tracking-widest">
                            {lastUpdated}
                        </p>
                    )}
                </div>
            </section>

            {/* Content Area */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
                    {children}
                </div>
            </section>
        </main>
    );
}
