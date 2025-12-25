import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Section - Spans 2 columns */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-white">PakScholar Pro</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Pakistan's premier competitive exam preparation platform.
                            Comprehensive resources for PPSC, FPSC, and CSS aspirants.
                        </p>
                        <p className="text-xs text-gray-500">
                            Made with ❤️ for Pakistani Students 🇵🇰
                        </p>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Subjects</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/pakistan-studies" className="hover:text-emerald-400 transition-colors">
                                    Pakistan Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/islamic-studies" className="hover:text-emerald-400 transition-colors">
                                    Islamic Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/mathematics" className="hover:text-emerald-400 transition-colors">
                                    Mathematics
                                </Link>
                            </li>
                            <li>
                                <Link href="/english" className="hover:text-emerald-400 transition-colors">
                                    English
                                </Link>
                            </li>
                            <li>
                                <Link href="/science" className="hover:text-emerald-400 transition-colors">
                                    General Science
                                </Link>
                            </li>
                            <li>
                                <Link href="/current-affairs" className="hover:text-emerald-400 transition-colors">
                                    Current Affairs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Exams & Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Exams</h4>
                        <ul className="space-y-2.5 text-sm mb-6">
                            <li>
                                <Link href="/exams/ppsc" className="hover:text-emerald-400 transition-colors">
                                    PPSC Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/exams/fpsc" className="hover:text-emerald-400 transition-colors">
                                    FPSC Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/exams/css" className="hover:text-emerald-400 transition-colors">
                                    CSS Guide
                                </Link>
                            </li>
                        </ul>

                        <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/practice" className="hover:text-emerald-400 transition-colors">
                                    Practice Tests
                                </Link>
                            </li>
                            <li>
                                <Link href="/past-papers" className="hover:text-emerald-400 transition-colors">
                                    Past Papers
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-emerald-400 transition-colors">
                                    Study Materials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore & Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Explore Pakistan</h4>
                        <ul className="space-y-2.5 text-sm mb-6">
                            <li>
                                <Link href="/explore" className="hover:text-emerald-400 transition-colors">
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore/punjab" className="hover:text-emerald-400 transition-colors">
                                    Punjab
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore/sindh" className="hover:text-emerald-400 transition-colors">
                                    Sindh
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore/kpk" className="hover:text-emerald-400 transition-colors">
                                    KPK
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore/balochistan" className="hover:text-emerald-400 transition-colors">
                                    Balochistan
                                </Link>
                            </li>
                        </ul>

                        <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-emerald-400 transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help & Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Help & Support</h4>
                        <ul className="space-y-2.5 text-sm mb-6">
                            <li>
                                <Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="hover:text-emerald-400 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                        </ul>

                        <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap-page" className="hover:text-emerald-400 transition-colors">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2025 PakScholar Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
