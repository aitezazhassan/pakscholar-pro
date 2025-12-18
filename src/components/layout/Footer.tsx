import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="rounded-lg bg-blue-600 p-2">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-semibold text-slate-900">PakScholar Pro</span>
                        </div>
                        <p className="mb-4 max-w-md text-sm leading-relaxed text-slate-600">
                            Comprehensive PPSC exam preparation resources. Curated content, practice tools, and study materials for Pakistani students.
                        </p>
                        <div className="text-xs text-slate-500">© 2025 PakScholar Pro</div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-900">Study</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/current-affairs" className="text-slate-600 hover:text-slate-900">
                                    Current Affairs
                                </Link>
                            </li>
                            <li>
                                <Link href="/mathematics" className="text-slate-600 hover:text-slate-900">
                                    Mathematics
                                </Link>
                            </li>
                            <li>
                                <Link href="/encyclopedia" className="text-slate-600 hover:text-slate-900">
                                    Encyclopedia
                                </Link>
                            </li>
                            <li>
                                <Link href="/past-papers" className="text-slate-600 hover:text-slate-900">
                                    Past Papers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-900">Tools</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/explore" className="text-slate-600 hover:text-slate-900">
                                    Interactive Map
                                </Link>
                            </li>
                            <li>
                                <Link href="/english" className="text-slate-600 hover:text-slate-900">
                                    English Writing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
