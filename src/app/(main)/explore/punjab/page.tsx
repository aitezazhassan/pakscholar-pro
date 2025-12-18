'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Users, TrendingUp, BookOpen, GraduationCap, Landmark, Factory } from 'lucide-react';
import PakistanMap from '@/components/maps/PakistanMap';
import { punjabData } from '@/lib/mapData/provinces/punjab-full';

export default function PunjabPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'geography' | 'admin' | 'economy' | 'culture' | 'education' | 'sites'>('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'geography', label: 'Geography', icon: MapPin },
        { id: 'admin', label: 'Administrative', icon: Landmark },
        { id: 'economy', label: 'Economy', icon: TrendingUp },
        { id: 'culture', label: 'Culture', icon: Users },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'sites', label: 'Historical Sites', icon: Factory }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link
                        href="/explore"
                        className="group mb-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Geography Lab
                    </Link>
                    <div>
                        <div className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                            Province of Pakistan
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900">Punjab</h1>
                        <p className="mt-2 text-lg text-slate-600">{punjabData.basic.meaning}</p>
                    </div>

                    {/* Key Stats Bar */}
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Capital</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{punjabData.basic.capital}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Population</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{punjabData.basic.population}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">Area</div>
                            <div className="mt-1 text-lg font-bold text-slate-900">{punjabData.basic.area}</div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-xs text-slate-600">GDP Share</div>
                            <div className="mt-1 text-lg font-bold text-emerald-600">{punjabData.economy.gdpContribution}</div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mt-6 flex gap-2 overflow-x-auto">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === tab.id
                                            ? 'bg-emerald-600 text-white shadow-lg'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">About Punjab</h2>
                                <p className="mb-4 leading-relaxed text-slate-700">
                                    Punjab, meaning "Land of Five Rivers," is Pakistan's most populous province and largest contributor to the national economy.
                                    With a rich history spanning over 5,000 years, Punjab has been the cradle of ancient civilizations including the Indus Valley Civilization.
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    The province is characterized by its fertile plains, making it the agricultural heartland of Pakistan. It produces the majority
                                    of the nation's wheat, rice, and cotton, earning it the title of "breadbasket of Pakistan."
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 text-xl font-bold text-slate-900">Quick Facts</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {punjabData.quickFacts.map((fact, index) => (
                                        <div key={index} className="flex items-start gap-2 rounded-lg bg-emerald-50 p-3">
                                            <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                                            <p className="text-sm text-slate-700">{fact}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="mb-4 font-bold text-slate-900">Major Cities</h3>
                                <div className="space-y-3">
                                    {punjabData.majorCities.map((city, index) => (
                                        <div key={index} className="rounded-lg border border-slate-100 p-3">
                                            <div className="mb-1 flex items-center justify-between">
                                                <span className="font-semibold text-slate-900">{city.name}</span>
                                                <span className="text-xs font-medium text-emerald-600">{city.population}</span>
                                            </div>
                                            <div className="text-xs text-slate-600">{city.nickname}</div>
                                            <div className="mt-1 text-xs text-slate-500">{city.famous}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* GEOGRAPHY TAB */}
                {activeTab === 'geography' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Geographic Features</h2>

                            <div className="mb-6 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-3 font-semibold text-slate-900">Borders</h3>
                                    <div className="space-y-2">
                                        {Object.entries(punjabData.geography.borders).map(([direction, border]) => (
                                            <div key={direction} className="flex justify-between text-sm">
                                                <span className="font-medium capitalize text-slate-700">{direction}:</span>
                                                <span className="text-slate-600">{border}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3 font-semibold text-slate-900">Climate</h3>
                                    <div className="space-y-2">
                                        {Object.entries(punjabData.geography.climate).map(([key, value]) => (
                                            <div key={key} className="flex justify-between text-sm">
                                                <span className="font-medium capitalize text-slate-700">{key}:</span>
                                                <span className="text-slate-600">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">The Five Rivers</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {punjabData.geography.rivers.map((river, index) => (
                                        <div key={index} className="rounded-lg bg-blue-50 p-4">
                                            <div className="mb-1 font-bold text-blue-900">{river.name}</div>
                                            <div className="text-xs text-blue-700">Length: {river.length}</div>
                                            <div className="text-xs text-blue-600">{river.flows || river.tributary || river.formed || river.city || river.border}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-slate-900">Natural Features</h3>
                                <div className="flex flex-wrap gap-2">
                                    {punjabData.geography.naturalFeatures.map((feature, index) => (
                                        <span key={index} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ADMINISTRATIVE TAB */}
                {activeTab === 'admin' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Administrative Structure</h2>

                            <div className="mb-6 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-lg bg-emerald-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-emerald-900">{punjabData.administrative.totalDivisions}</div>
                                    <div className="text-sm text-emerald-700">Divisions</div>
                                </div>
                                <div className="rounded-lg bg-blue-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-900">{punjabData.administrative.totalDistricts}</div>
                                    <div className="text-sm text-blue-700">Districts</div>
                                </div>
                                <div className="rounded-lg bg-purple-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-purple-900">{punjabData.administrative.currentGovernment.assembly}</div>
                                    <div className="text-sm text-purple-700">Assembly Seats</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Divisions</h3>
                                <div className="grid gap-3 sm:grid-cols-3">
                                    {punjabData.administrative.divisions.map((division, index) => (
                                        <div key={index} className="rounded-lg border border-slate-200 p-3">
                                            <div className="font-semibold text-slate-900">{division.name}</div>
                                            <div className="text-xs text-slate-600">{division.districts} districts</div>
                                            <div className="text-xs text-slate-500">HQ: {division.headquarters}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Current Government (2024)</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-lg bg-slate-50 p-4">
                                        <div className="text-xs text-slate-600">Chief Minister</div>
                                        <div className="mt-1 font-bold text-slate-900">{punjabData.administrative.currentGovernment.chiefMinister}</div>
                                    </div>
                                    <div className="rounded-lg bg-slate-50 p-4">
                                        <div className="text-xs text-slate-600">Governor</div>
                                        <div className="mt-1 font-bold text-slate-900">{punjabData.administrative.currentGovernment.governor}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-slate-900">All {punjabData.administrative.totalDistricts} Districts</h3>
                                <div className="flex flex-wrap gap-2">
                                    {punjabData.administrative.districtsList.map((district, index) => (
                                        <span key={index} className="rounded bg-slate-100 px-3 py-1 text-sm text-slate-700">
                                            {district}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ECONOMY TAB */}
                {activeTab === 'economy' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Economic Profile</h2>

                            <div className="mb-6 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-lg bg-emerald-50 p-4">
                                    <div className="text-xs text-emerald-700">GDP Contribution</div>
                                    <div className="mt-1 text-2xl font-bold text-emerald-900">{punjabData.economy.gdpContribution}</div>
                                </div>
                                <div className="rounded-lg bg-blue-50 p-4">
                                    <div className="text-xs text-blue-700">GDP Per Capita</div>
                                    <div className="mt-1 text-2xl font-bold text-blue-900">{punjabData.economy.gdpPerCapita}</div>
                                </div>
                                <div className="rounded-lg bg-purple-50 p-4">
                                    <div className="text-xs text-purple-700">Major Sector</div>
                                    <div className="mt-1 text-2xl font-bold text-purple-900">Services 55%</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Agriculture</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <h4 className="mb-2 text-sm font-medium text-slate-700">Major Crops</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {punjabData.economy.agriculture.majorCrops.map((crop, index) => (
                                                <span key={index} className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-900">
                                                    {crop}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-sm font-medium text-slate-700">Production Share</h4>
                                        <div className="space-y-2">
                                            {Object.entries(punjabData.economy.agriculture.production).map(([crop, share]) => (
                                                <div key={crop} className="flex justify-between text-sm">
                                                    <span className="capitalize text-slate-700">{crop}:</span>
                                                    <span className="font-semibold text-green-600">{share}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Major Industries</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {Object.entries(punjabData.economy.industry).map(([industry, description]) => (
                                        <div key={industry} className="rounded-lg bg-blue-50 p-4">
                                            <div className="mb-1 font-semibold capitalize text-blue-900">{industry}</div>
                                            <div className="text-xs text-blue-700">{description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-slate-900">Major Exports</h3>
                                <div className="space-y-2">
                                    {punjabData.economy.exports.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 rounded-lg bg-amber-50 p-3">
                                            <div className="h-2 w-2 rounded-full bg-amber-600" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CULTURE TAB */}
                {activeTab === 'culture' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Culture & Heritage</h2>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Languages</h3>
                                <div className="space-y-3">
                                    {punjabData.culture.languages.map((lang, index) => (
                                        <div key={index} className="rounded-lg bg-purple-50 p-4">
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="font-semibold text-purple-900">{lang.name}</span>
                                                <span className="text-sm font-medium text-purple-600">{lang.speakers} speakers</span>
                                            </div>
                                            {lang.dialects && (
                                                <div className="flex flex-wrap gap-1">
                                                    {lang.dialects.map((dialect, idx) => (
                                                        <span key={idx} className="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-700">
                                                            {dialect}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-3 font-semibold text-slate-900">Festivals</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {punjabData.culture.festivals.map((festival, index) => (
                                            <span key={index} className="rounded-full bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-900">
                                                {festival}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3 font-semibold text-slate-900">Famous Cuisine</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {punjabData.culture.cuisine.map((dish, index) => (
                                            <span key={index} className="rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-900">
                                                {dish}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-slate-900">Handicrafts</h3>
                                <div className="flex flex-wrap gap-2">
                                    {punjabData.culture.handicrafts.map((craft, index) => (
                                        <span key={index} className="rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-900">
                                            {craft}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* EDUCATION TAB */}
                {activeTab === 'education' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Education System</h2>

                            <div className="mb-6 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-lg bg-emerald-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-emerald-900">{punjabData.education.literacy}</div>
                                    <div className="text-sm text-emerald-700">Overall Literacy</div>
                                </div>
                                <div className="rounded-lg bg-blue-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-blue-900">{punjabData.education.male}</div>
                                    <div className="text-sm text-blue-700">Male Literacy</div>
                                </div>
                                <div className="rounded-lg bg-purple-50 p-4 text-center">
                                    <div className="text-3xl font-bold text-purple-900">{punjabData.education.female}</div>
                                    <div className="text-sm text-purple-700">Female Literacy</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-slate-900">Educational Infrastructure</h3>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-lg bg-slate-50 p-4">
                                        <div className="text-2xl font-bold text-slate-900">{punjabData.education.totalUniversities}</div>
                                        <div className="text-sm text-slate-600">Universities</div>
                                    </div>
                                    <div className="rounded-lg bg-slate-50 p-4">
                                        <div className="text-2xl font-bold text-slate-900">{punjabData.education.colleges}</div>
                                        <div className="text-sm text-slate-600">Colleges</div>
                                    </div>
                                    <div className="rounded-lg bg-slate-50 p-4">
                                        <div className="text-2xl font-bold text-slate-900">{punjabData.education.schools}</div>
                                        <div className="text-sm text-slate-600">Schools</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 font-semibold text-slate-900">Major Universities</h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {punjabData.education.universities.map((university, index) => (
                                        <div key={index} className="rounded-lg bg-blue-50 p-3">
                                            <div className="text-sm font-medium text-blue-900">{university}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* HISTORICAL SITES TAB */}
                {activeTab === 'sites' && (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Historical Sites & Monuments</h2>

                            <div className="grid gap-4 md:grid-cols-2">
                                {punjabData.historicalSites.map((site, index) => (
                                    <div key={index} className="rounded-lg border border-slate-200 p-4">
                                        <div className="mb-2 flex items-start justify-between">
                                            <h3 className="font-bold text-slate-900">{site.name}</h3>
                                            {site.unesco === 'Yes' && (
                                                <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-900">
                                                    UNESCO
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-2 text-xs font-medium text-slate-600">{site.period}</div>
                                        <p className="text-sm text-slate-700">{site.significance}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
