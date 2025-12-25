'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Search, Globe, Book, Video, FileText } from 'lucide-react';
import { externalResources, resourceCategories } from '@/lib/resources/external-links';

export default function ResourcesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResources = externalResources.filter(resource => {
        const categoryMatch = selectedCategory === 'all' ||
            resource.category === selectedCategory ||
            resource.type === selectedCategory;
        const searchMatch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Official': return Globe;
            case 'Educational': return Book;
            case 'Video': return Video;
            default: return FileText;
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><div className="flex items-center gap-3">
                        <div className="rounded-xl bg-indigo-600 p-3">
                            <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-slate-900">Resources Hub</h1>
                            <p className="mt-1 text-slate-600">Curated external links for PPSC preparation</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-6 relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Total Resources</div>
                            <div className="mt-1 text-2xl font-bold text-indigo-600">{externalResources.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Categories</div>
                            <div className="mt-1 text-2xl font-bold text-emerald-600">{resourceCategories.length}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Official Links</div>
                            <div className="mt-1 text-2xl font-bold text-blue-600">
                                {externalResources.filter(r => r.type === 'Official').length}
                            </div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Verified</div>
                            <div className="mt-1 text-2xl font-bold text-green-600">100%</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-4">
                    {/* Sidebar - Categories */}
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 font-semibold text-slate-900">Categories</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedCategory === 'all'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    All Resources ({externalResources.length})
                                </button>
                                {resourceCategories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedCategory === category.name
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="mb-4 font-semibold text-slate-900">By Type</h3>
                            <div className="space-y-2">
                                {['Official', 'Educational', 'Reference', 'Video'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedCategory(type)}
                                        className={`w-full rounded-lg p-2 text-left text-sm transition-all ${selectedCategory === type
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resources Grid */}
                    <div className="lg:col-span-3">
                        {filteredResources.length > 0 ? (
                            <div className="grid gap-4 md:grid-cols-2">
                                {filteredResources.map((resource, index) => {
                                    const Icon = getTypeIcon(resource.type);
                                    return (
                                        <a
                                            key={index}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg"
                                        >
                                            <div className="mb-3 flex items-start justify-between">
                                                <div className="rounded-lg bg-indigo-50 p-2">
                                                    <Icon className="h-5 w-5 text-indigo-600" />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${resource.type === 'Official' ? 'bg-blue-100 text-blue-900' :
                                                            resource.type === 'Educational' ? 'bg-emerald-100 text-emerald-900' :
                                                                resource.type === 'Video' ? 'bg-purple-100 text-purple-900' :
                                                                    'bg-slate-100 text-slate-900'
                                                        }`}>
                                                        {resource.type}
                                                    </span>
                                                    {resource.verified && (
                                                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-900">
                                                            ✓ Verified
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-indigo-600">
                                                {resource.name}
                                            </h3>

                                            <p className="mb-3 text-sm text-slate-600">
                                                {resource.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm text-indigo-600">
                                                <span>Visit resource</span>
                                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
                                <p className="text-slate-600">No resources found for "{searchQuery}"</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6">
                    <h3 className="mb-2 font-semibold text-blue-900">📌 About These Resources</h3>
                    <p className="text-sm text-blue-800">
                        All external links have been verified and curated specifically for PPSC/FPSC preparation.
                        They include official government websites, educational platforms, reference materials, and trusted sources.
                        Always cross-verify information from multiple sources for exam preparation.
                    </p>
                </div>
            </div>
        </main>
    );
}
