import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-white">PakScholar Pro</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Pakistan's premier competitive exam preparation platform for PPSC, FPSC, and CSS.
                        </p>
                    </div>

                    {/* Exams */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Exams</h4>
                        <ul className="space-y-2 text-sm">
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
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
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

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>© 2025 PakScholar Pro. Made with ❤️ for Pakistani Students 🇵🇰</p>
                </div>
            </div>
        </footer>
    );
}
