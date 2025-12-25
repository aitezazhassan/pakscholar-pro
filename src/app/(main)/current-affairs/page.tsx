'use client';

import { useState } from 'react';
import { Calendar, Tag, ArrowLeft, Sparkles } from 'lucide-react';
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
    National: 'from-emerald-500 to-emerald-700',
    International: 'from-emerald-600 to-teal-700',
    Economy: 'from-emerald-500 to-teal-600',
    Education: 'from-emerald-600 to-green-700',
    Technology: 'from-teal-500 to-emerald-600',
    Sports: 'from-emerald-600 to-green-600',
    Reports: 'from-gray-600 to-gray-700',
    Infrastructure: 'from-green-600 to-emerald-700',
    Obituary: 'from-gray-500 to-gray-600'
};

export default function CurrentAffairsPage() {
    const [selectedMonthId, setSelectedMonthId] = useState(allMonths[0].id);

    const selectedMonth = allMonths.find(m => m.id === selectedMonthId);
    const { month, days, knowledgeBoxes } = selectedMonth!.data;
    const totalEvents = days.reduce((sum, day) => sum + day.events.length, 0);

    return (
        <main className="min-h-screen bg-white">
            {/* Modern Header */}
            <header className="border-b border-gray-200 bg-gradient-to-br from-emerald-50 to-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link
                                href="/"
                                className="group mb-2 inline-flex items-center gap-2 text-sm text-emerald-700 transition-colors hover:text-emerald-900 font-medium"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-900">Current Affairs 📰</h1>
                            <p className="mt-1 text-emerald-700 font-semibold">{month}</p>
                        </div>
                        <select
                            value={selectedMonthId}
                            onChange={(e) => setSelectedMonthId(e.target.value)}
                            className="rounded-2xl border-2 border-emerald-200 bg-white px-4 py-3 font-semibold text-gray-900 transition-all hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            {allMonths.map(m => (
                                <option key={m.id} value={m.id}>{m.data.month}</option>
                            ))}
                        </select>
                    </div>

                    {/* Stats Pills */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="rounded-full bg-emerald-100 px-4 py-2">
                            <span className="text-sm font-semibold text-emerald-700">{totalEvents} Events</span>
                        </div>
                        <div className="rounded-full bg-emerald-100 px-4 py-2">
                            <span className="text-sm font-semibold text-emerald-700">{days.length} Days</span>
                        </div>
                        <div className="rounded-full bg-emerald-100 px-4 py-2">
                            <span className="text-sm font-semibold text-emerald-700">{knowledgeBoxes.length} Quick Facts</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Feed - 2/3 */}
                    <div className="lg:col-span-2 space-y-6">
                        {days.map((day, dayIndex) => (
                            <div key={dayIndex} className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
                                {/* Date Header */}
                                <div className="border-b border-gray-200 bg-emerald-50 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-emerald-700" />
                                        <span className="font-bold text-gray-900">
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
                                <div className="divide-y divide-gray-100">
                                    {day.events.map((event, eventIndex) => (
                                        <div key={eventIndex} className="group p-6 transition-all hover:bg-gray-50">
                                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                                <span className={`inline-block rounded-lg bg-gradient-to-r ${categoryGradients[event.category] || categoryGradients.National} px-3 py-1 text-xs font-bold text-white`}>
                                                    {event.category}
                                                </span>
                                                {event.tags && event.tags.map((tag, idx) => (
                                                    <span key={idx} className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                                        <Tag className="h-3 w-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="leading-relaxed text-gray-700">
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
                        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-300">
                            <div className="mb-4 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-emerald-700" />
                                <h3 className="font-bold text-gray-900">Quick Facts</h3>
                            </div>
                            <div className="space-y-4">
                                {knowledgeBoxes.map((box, index) => (
                                    <div key={index} className="rounded-xl bg-emerald-50 p-4 border border-emerald-100">
                                        <h4 className="mb-2 text-sm font-bold text-emerald-900">{box.title}</h4>
                                        <p className="whitespace-pre-line text-xs leading-relaxed text-gray-700">
                                            {box.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Month Quick Nav */}
                        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-300">
                            <h3 className="mb-4 font-bold text-gray-900">All Months</h3>
                            <div className="space-y-2">
                                {allMonths.map(m => (
                                    <button
                                        key={m.id}
                                        onClick={() => setSelectedMonthId(m.id)}
                                        className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${m.id === selectedMonthId
                                            ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg hover:shadow-xl'
                                            : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
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
