'use client';

import { useState } from 'react';
import { Calendar, Tag, ArrowLeft, Filter, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Import all months
import mar2025 from '@/data/current-affairs-2025-03.json';
import feb2025 from '@/data/current-affairs-2025-02.json';
import jan2025 from '@/data/current-affairs-2025-01.json';
import dec2024 from '@/data/current-affairs-2024-12.json';
import nov2024 from '@/data/current-affairs-2024-11.json';
import oct2024 from '@/data/current-affairs-2024-10.json';

const allMonths = [
    { id: '2025-03', data: mar2025 },
    { id: '2025-02', data: feb2025 },
    { id: '2025-01', data: jan2025 },
    { id: '2024-12', data: dec2024 },
    { id: '2024-11', data: nov2024 },
    { id: '2024-10', data: oct2024 }
];

const categoryGradients: Record<string, string> = {
    National: 'from-emerald-500 to-teal-600',
    International: 'from-blue-500 to-indigo-600',
    Economy: 'from-purple-500 to-pink-600',
    Education: 'from-amber-500 to-orange-600',
    Technology: 'from-cyan-500 to-blue-600',
    Sports: 'from-orange-500 to-red-600',
    Reports: 'from-slate-500 to-gray-600',
    Infrastructure: 'from-green-500 to-emerald-600',
    Obituary: 'from-rose-500 to-pink-600'
};

export default function CurrentAffairsPage() {
    const [selectedMonthId, setSelectedMonthId] = useState(allMonths[0].id);

    const selectedMonth = allMonths.find(m => m.id === selectedMonthId);
    const { month, days, knowledgeBoxes } = selectedMonth!.data;
    const totalEvents = days.reduce((sum, day) => sum + day.events.length, 0);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Modern Header */}
            <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link
                                href="/"
                                className="group mb-2 inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-white"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Dashboard
                            </Link>
                            <h1 className="text-3xl font-bold text-white">Current Affairs</h1>
                            <p className="mt-1 text-blue-200">{month}</p>
                        </div>
                        <select
                            value={selectedMonthId}
                            onChange={(e) => setSelectedMonthId(e.target.value)}
                            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-semibold text-white backdrop-blur-lg transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            {allMonths.map(m => (
                                <option key={m.id} value={m.id} className="bg-slate-900">{m.data.month}</option>
                            ))}
                        </select>
                    </div>

                    {/* Stats Pills */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-600/20 px-4 py-2 backdrop-blur-lg">
                            <span className="text-sm font-semibold text-emerald-300">{totalEvents} Events</span>
                        </div>
                        <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20 px-4 py-2 backdrop-blur-lg">
                            <span className="text-sm font-semibold text-blue-300">{days.length} Days</span>
                        </div>
                        <div className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 px-4 py-2 backdrop-blur-lg">
                            <span className="text-sm font-semibold text-purple-300">{knowledgeBoxes.length} Facts</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Feed - 2/3 */}
                    <div className="lg:col-span-2 space-y-6">
                        {days.map((day, dayIndex) => (
                            <div key={dayIndex} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
                                {/* Date Header */}
                                <div className="border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-emerald-400" />
                                        <span className="font-bold text-white">
                                            {new Date(day.date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Events */}
                                <div className="divide-y divide-white/5">
                                    {day.events.map((event, eventIndex) => (
                                        <div key={eventIndex} className="group p-6 transition-all hover:bg-white/5">
                                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                                <span className={`inline-block rounded-lg bg-gradient-to-r ${categoryGradients[event.category] || categoryGradients.National} px-3 py-1 text-xs font-bold text-white`}>
                                                    {event.category}
                                                </span>
                                                {event.tags && event.tags.map((tag, idx) => (
                                                    <span key={idx} className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-blue-200">
                                                        <Tag className="h-3 w-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="leading-relaxed text-white">
                                                {event.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar - 1/3 */}
                    <div className="space-y-6">
                        {/* Quick Facts */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                            <div className="mb-4 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-amber-400" />
                                <h3 className="font-bold text-white">Quick Facts</h3>
                            </div>
                            <div className="space-y-4">
                                {knowledgeBoxes.map((box, index) => (
                                    <div key={index} className="rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 p-4">
                                        <h4 className="mb-2 text-sm font-bold text-amber-300">{box.title}</h4>
                                        <p className="whitespace-pre-line text-xs leading-relaxed text-amber-100/80">
                                            {box.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Month Quick Nav */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                            <h3 className="mb-4 font-bold text-white">All Months</h3>
                            <div className="space-y-2">
                                {allMonths.map(m => (
                                    <button
                                        key={m.id}
                                        onClick={() => setSelectedMonthId(m.id)}
                                        className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${m.id === selectedMonthId
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                                                : 'bg-white/5 text-blue-200 hover:bg-white/10'
                                            }`}
                                    >
                                        {m.data.month}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
