'use client';

import Link from 'next/link';
import { Globe, Calculator, BookOpen, FileText, Newspaper, ArrowRight } from 'lucide-react';

const subjects = [
  {
    title: 'Pakistan Studies',
    href: '/pakistan-studies',
    icon: Globe,
    description: 'History, geography, culture, and constitution of Pakistan',
    emoji: '🇵🇰'
  },
  {
    title: 'Islamic Studies',
    href: '/islamic-studies',
    icon: BookOpen,
    description: 'Quran, Hadith, Islamic history, and jurisprudence',
    emoji: '📖'
  },
  {
    title: 'Mathematics',
    href: '/mathematics',
    icon: Calculator,
    description: 'Arithmetic, algebra, geometry, and quantitative reasoning',
    emoji: '🔢'
  },
  {
    title: 'English',
    href: '/english',
    icon: FileText,
    description: 'Grammar, vocabulary, comprehension, and essay writing',
    emoji: '📝'
  },
  {
    title: 'General Science',
    href: '/science',
    icon: BookOpen,
    description: 'Physics, chemistry, biology, and everyday science',
    emoji: '🔬'
  },
  {
    title: 'Current Affairs',
    href: '/current-affairs',
    icon: Newspaper,
    description: 'National and international news, updated regularly',
    emoji: '🌍'
  },
];

const features = [
  {
    emoji: '📚',
    title: 'Authentic Content',
    description: 'Study materials created and reviewed by subject matter experts and experienced educators.'
  },
  {
    emoji: '✍️',
    title: 'Practice Tests',
    description: 'Realistic mock exams and topic-wise quizzes with detailed explanations for every answer.'
  },
  {
    emoji: '📄',
    title: 'Past Papers',
    description: 'Complete collection of previous year papers with solutions to understand exam patterns.'
  },
];

const resources = [
  {
    emoji: '📑',
    title: 'Study Notes',
    description: 'Comprehensive notes covering all exam topics',
    meta: 'PDF • Updated regularly',
    href: '/resources'
  },
  {
    emoji: '🧮',
    title: 'Formula Sheets',
    description: 'Quick reference for mathematics and science',
    meta: 'PDF • Printable',
    href: '/mathematics'
  },
  {
    emoji: '✓',
    title: 'MCQ Banks',
    description: 'Thousands of practice questions with solutions',
    meta: 'Interactive • Self-paced',
    href: '/practice'
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Master PPSC, FPSC & CSS Exams
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 sm:text-2xl">
              Comprehensive exam preparation with authentic study materials, practice tests, and past papers. Built by educators for serious students.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pakistan-studies"
                className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
              >
                Browse Subjects
              </Link>
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#01411C] bg-white px-8 py-4 text-lg font-semibold text-[#01411C] transition-all hover:bg-emerald-50"
              >
                Start Practice Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Core Subjects
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage of all PPSC/FPSC exam subjects
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                href={subject.href}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#01411C] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#01411C] scale-y-0 transition-transform group-hover:scale-y-100" />
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-3xl">
                  {subject.emoji}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {subject.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {subject.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why PakScholar Pro?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed in competitive exams
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-10 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Study Resources
            </h2>
            <p className="text-lg text-gray-600">
              Curated materials to support your preparation
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="flex gap-5 rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-[#01411C] hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-2xl">
                  {resource.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">
                    {resource.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {resource.meta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#01411C] to-[#0A6638] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
            Ready to Begin Your Preparation?
          </h2>
          <p className="mb-10 text-xl opacity-95">
            Access all study materials and practice tests completely free
          </p>
          <Link
            href="/pakistan-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#01411C] shadow-lg transition-all hover:bg-gray-100"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
