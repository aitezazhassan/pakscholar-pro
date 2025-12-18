'use client';

import Link from 'next/link';
import { Newspaper, Calculator, BookOpen, FileText, ArrowRight, ChevronRight, MapPin, Globe } from 'lucide-react';

const stats = [
  { label: 'Practice Questions', value: '350+' },
  { label: 'Past Papers', value: '50+' },
  { label: 'Subject Areas', value: '9' },
  { label: 'Always Free', value: '100%' }
];

const modules = [
  {
    title: 'Geography',
    href: '/explore',
    icon: MapPin,
    description: '118 quiz questions, 4 province deep-dives, interactive maps & historical timeline',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    stats: '118 Questions'
  },
  {
    title: 'Mathematics',
    href: '/mathematics',
    icon: Calculator,
    description: '50+ problems with step-by-step solutions, formula sheets, and practice modes',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    stats: '50+ Problems'
  },
  {
    title: 'Current Affairs',
    href: '/current-affairs',
    icon: Newspaper,
    description: 'Monthly curated events from official sources with knowledge boxes',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    stats: '85+ Events'
  },
  {
    title: 'Pakistan Studies',
    href: '/pakistan-studies',
    icon: Globe,
    description: 'Constitution 1973, political system, amendments & national symbols',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    stats: '280 Articles'
  },
  {
    title: 'Islamic Studies',
    href: '/islamic-studies',
    icon: BookOpen,
    description: 'Quran, Hadith, Prophets, Five Pillars & Islamic history essentials',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    stats: 'Quran & Hadith'
  },
  {
    title: 'English Language',
    href: '/english',
    icon: FileText,
    description: 'Grammar rules, vocabulary, idioms & common errors for exam success',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    stats: '50+ Rules'
  },
  {
    title: 'General Science',
    href: '/science',
    icon: BookOpen,
    description: 'Physics, Chemistry, Biology basics & everyday science for PPSC',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    stats: '22+ Topics'
  },
  {
    title: 'Past Papers',
    href: '/past-papers',
    icon: FileText,
    description: 'PPSC/FPSC exam archives from 2020-2024 with search functionality',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    stats: '50+ Papers'
  },
  {
    title: 'Resources Hub',
    href: '/resources',
    icon: Globe,
    description: '35+ curated external links to official sites, study materials & videos',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    stats: '35+ Links'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Apple Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
              PakScholar Pro
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl text-slate-600 sm:text-2xl">
              Your complete resource hub for PPSC exam preparation.
            </p>
            <p className="mx-auto max-w-xl text-lg text-slate-500">
              Curated content. Practice tools. Comprehensive materials.
            </p>

            {/* Stats */}
            <div className="mt-16 flex justify-center gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-slate-900">
              Complete PPSC Preparation Platform
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need in one place
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Link
                  key={index}
                  href={module.href}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg hover:ring-slate-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`mb-4 inline-flex rounded-2xl ${module.bgColor} p-3`}>
                        <Icon className={`h-7 w-7 ${module.color}`} />
                      </div>
                      <h3 className="mb-2 text-2xl font-semibold text-slate-900">
                        {module.title}
                      </h3>
                      <div className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {module.stats}
                      </div>
                      <p className="mb-4 text-sm text-slate-600">
                        {module.description}
                      </p>
                      <div className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                        Explore
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-semibold text-slate-900">
              Everything you need to succeed
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Comprehensive resources designed specifically for PPSC and FPSC exam preparation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <div className="h-6 w-6 rounded-full bg-emerald-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Up to date</h3>
              <p className="text-slate-600">
                Monthly updates with the latest current affairs and exam patterns
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <div className="h-6 w-6 rounded-full bg-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Visual learning</h3>
              <p className="text-slate-600">
                Interactive tools and visual aids for better concept understanding
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <div className="h-6 w-6 rounded-full bg-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Free access</h3>
              <p className="text-slate-600">
                All resources available at no cost for Pakistani students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-semibold text-slate-900">
            Ready to start learning?
          </h2>
          <p className="mb-8 text-xl text-slate-600">
            Join thousands of students preparing for PPSC exams.
          </p>
          <Link
            href="/current-affairs"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          >
            Get started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
