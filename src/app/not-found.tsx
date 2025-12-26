import Link from 'next/link';
import { Home, BookOpen } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center bg-white">
            <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:px-8">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-[#01411C] sm:text-[12rem]">404</h1>
                </div>

                {/* Message */}
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Page Not Found
                </h2>
                <p className="mt-6 text-base leading-7 text-slate-600">Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.</p>

                {/* Action Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#01411C] px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0A6638] hover:shadow-lg"
                    >
                        <Home className="h-5 w-5" />
                        Go to Homepage
                    </Link>
                    <Link
                        href="/pakistan-studies"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-[#01411C] bg-white px-8 py-4 font-semibold text-[#01411C] transition-all hover:bg-emerald-50"
                    >
                        <BookOpen className="h-5 w-5" />
                        Browse Subjects
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-16">
                    <h3 className="mb-6 text-xl font-semibold text-gray-900">Popular Pages</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Link
                            href="/practice"
                            className="rounded-lg border-2 border-gray-200 p-6 text-left transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <h4 className="mb-2 font-semibold text-gray-900">Practice Tests</h4>
                            <p className="text-sm text-gray-600">Take mock exams and quizzes</p>
                        </Link>
                        <Link
                            href="/resources"
                            className="rounded-lg border-2 border-gray-200 p-6 text-left transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <h4 className="mb-2 font-semibold text-gray-900">Resources</h4>
                            <p className="text-sm text-gray-600">Study notes and materials</p>
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-lg border-2 border-gray-200 p-6 text-left transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <h4 className="mb-2 font-semibold text-gray-900">About Us</h4>
                            <p className="text-sm text-gray-600">Learn about PakScholar Pro</p>
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-lg border-2 border-gray-200 p-6 text-left transition-all hover:border-[#01411C] hover:shadow-md"
                        >
                            <h4 className="mb-2 font-semibold text-gray-900">Contact</h4>
                            <p className="text-sm text-gray-600">Get in touch with us</p>
                        </Link>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-12 rounded-lg bg-gray-50 p-6">
                    <p className="text-gray-700">
                        Need help finding something?{' '}
                        <Link href="/contact" className="font-medium text-[#01411C] hover:underline">
                            Contact us
                        </Link>{' '}
                        and we'll be happy to assist you.
                    </p>
                </div>
            </div>
        </main>
    );
}
