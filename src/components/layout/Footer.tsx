import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {/* About Section - Spans 2 columns */}
                    <div className="sm:col-span-2">
                        <h3 className="mb-4 text-xl font-bold">PakScholar Pro</h3>
                        <p className="mb-6 leading-relaxed text-gray-300">
                            Pakistan's dedicated platform for PPSC, FPSC, and CSS exam preparation.
                            Committed to helping students achieve their career goals through quality education.
                        </p>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Subjects</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/pakistan-studies" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Pakistan Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/islamic-studies" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Islamic Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/mathematics" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Mathematics
                                </Link>
                            </li>
                            <li>
                                <Link href="/english" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    English
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Exams */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Exams</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/exams/ppsc" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    PPSC Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/exams/fpsc" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    FPSC Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/exams/css" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    CSS Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/practice" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Practice Tests
                                </Link>
                            </li>
                            <li>
                                <Link href="/past-papers" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Past Papers
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Study Materials
                                </Link>
                            </li>
                            <li>
                                <Link href="/current-affairs" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Current Affairs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Help Combined */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Company</h4>
                        <ul className="space-y-3 mb-6">
                            <li>
                                <Link href="/about" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <h4 className="mb-4 text-base font-semibold">Help</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/how-it-works" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Links Row */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                        <Link href="/privacy" className="transition-colors hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="transition-colors hover:text-white">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="transition-colors hover:text-white">
                            Cookie Policy
                        </Link>
                        <Link href="/disclaimer" className="transition-colors hover:text-white">
                            Disclaimer
                        </Link>
                        <Link href="/sitemap-page" className="transition-colors hover:text-white">
                            Sitemap
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © 2025 PakScholar Pro. Made in Pakistan 🇵🇰
                    </p>
                </div>
            </div>
        </footer>
    );
}
