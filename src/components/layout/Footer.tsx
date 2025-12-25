import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {/* About Section */}
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

                    {/* Practice & Company combined for mobile */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Practice</h4>
                        <ul className="space-y-3 mb-6">
                            <li>
                                <Link href="/practice" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Mock Tests
                                </Link>
                            </li>
                            <li>
                                <Link href="/past-papers" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Past Papers
                                </Link>
                            </li>
                        </ul>

                        <h4 className="mb-4 text-base font-semibold">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © 2025 PakScholar Pro. Made in Pakistan 🇵🇰
                    </p>
                </div>
            </div>
        </footer>
    );
}
