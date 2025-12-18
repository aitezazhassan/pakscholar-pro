'use client';

import { useState } from 'react';
import { Shield, Search, Download } from 'lucide-react';
import pastPapersData from '@/data/past-papers.json';

export default function PastPapersPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPapers = pastPapersData.filter(paper =>
        paper.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.year.toString().includes(searchQuery)
    );

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Official Header */}
            <header className="border-b-4 border-emerald-950 bg-emerald-950">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Shield className="h-6 w-6 text-amber-400" />
                            <div>
                                <h1 className="text-xl font-bold text-white">Past Papers Archive</h1>
                                <p className="text-sm text-emerald-200">PPSC/FPSC 2020-2024</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search exam, department, year..."
                                className="rounded border border-emerald-700 bg-emerald-900 py-2 pl-10 pr-4 text-sm text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-bold">{filteredPapers.length}</span> of{' '}
                        <span className="font-bold">{pastPapersData.length}</span> papers
                    </p>
                </div>

                {/* Dense Data Table */}
                <div className="overflow-hidden rounded-lg border-2 border-slate-300 bg-white">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 border-b-2 border-emerald-950 bg-emerald-950 px-4 py-3 text-sm font-bold text-white">
                        <div className="col-span-5">Exam Name</div>
                        <div className="col-span-1">Year</div>
                        <div className="col-span-3">Department</div>
                        <div className="col-span-2">Subjects</div>
                        <div className="col-span-1 text-center">Download</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-slate-200">
                        {filteredPapers.length === 0 ? (
                            <div className="px-4 py-8 text-center text-slate-600">
                                No papers found for "{searchQuery}"
                            </div>
                        ) : (
                            filteredPapers.map((paper, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-12 gap-4 px-4 py-3 text-sm hover:bg-slate-50"
                                >
                                    <div className="col-span-5 font-medium text-slate-900">
                                        {paper.examName}
                                    </div>
                                    <div className="col-span-1">
                                        <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-900">
                                            {paper.year}
                                        </span>
                                    </div>
                                    <div className="col-span-3 text-slate-700">{paper.department}</div>
                                    <div className="col-span-2">
                                        <div className="flex flex-wrap gap-1">
                                            {paper.subjects.slice(0, 2).map((subject, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                                                >
                                                    {subject}
                                                </span>
                                            ))}
                                            {paper.subjects.length > 2 && (
                                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                                                    +{paper.subjects.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-center">
                                        <button className="inline-flex items-center gap-1 rounded bg-amber-600 px-3 py-1 text-xs font-bold text-white hover:bg-amber-700">
                                            <Download className="h-3 w-3" />
                                            PDF
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
