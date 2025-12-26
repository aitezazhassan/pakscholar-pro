import Link from 'next/link';
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">PakScholar Pro</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering Pakistani students with free, high-quality resources for competitive exams. Built with ❤️ for the nation.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Subjects</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/pakistan-studies" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Pakistan Studies</Link></li>
                            <li><Link href="/islamic-studies" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Islamic Studies</Link></li>
                            <li><Link href="/mathematics" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Mathematics</Link></li>
                            <li><Link href="/english" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>English</Link></li>
                            <li><Link href="/science" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>General Science</Link></li>
                            <li><Link href="/current-affairs" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Current Affairs</Link></li>
                        </ul>
                    </div>

                    {/* Exams & Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Exams</h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li><Link href="/exams/ppsc" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>PPSC Guide</Link></li>
                            <li><Link href="/exams/fpsc" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>FPSC Guide</Link></li>
                            <li><Link href="/exams/css" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>CSS Guide</Link></li>
                        </ul>

                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/practice" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Practice Tests</Link></li>
                            <li><Link href="/past-papers" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Past Papers</Link></li>
                            <li><Link href="/resources" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Study Resources</Link></li>
                        </ul>
                    </div>

                    {/* Company & Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>About Us</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>How It Works</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>FAQ</Link></li>
                        </ul>

                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Terms</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-slate-800 pt-8 pb-8 mb-8">
                    <div className="max-w-md">
                        <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                        <p className="text-sm text-slate-400 mb-4">Get exam updates, study tips, and new resources delivered to your inbox.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                            <button className="px-6 py-2 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-slate-500">
                        © 2025 PakScholar Pro. Made with ❤️ in Pakistan 🇵🇰
                    </p>
                    <div className="flex gap-6">
                        <Link href="/sitemap-page" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
                        <Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookies</Link>
                        <Link href="/help" className="hover:text-emerald-400 transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
