import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* About Section */}
                    <div className="md:col-span-2">
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

                    {/* Practice */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold">Practice</h4>
                        <ul className="space-y-3">
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
                            <li>
                                <Link href="/rapid-quiz" className="text-sm text-gray-300 transition-colors hover:text-white">
                                    Topic Quizzes
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
