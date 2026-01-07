import Link from 'next/link';
import { BookOpen, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group w-fit" aria-label="PakScholar Pro Home">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">PakScholar Pro</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-xs">
                            Empowering Pakistani students with free, high-quality resources for competitive exams. Built with ❤️ for the nation.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com/pakscholarpro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Facebook"
                                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a
                                href="https://twitter.com/pakscholarpro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Twitter"
                                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a
                                href="https://linkedin.com/company/pakscholarpro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on LinkedIn"
                                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a
                                href="https://github.com/aitezazhassan/pakscholar-pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View source code on GitHub"
                                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest pl-1 border-l-2 border-emerald-500">Subjects</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/pakistan-studies" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Pakistan Studies</Link></li>
                            <li><Link href="/islamic-studies" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Islamic Studies</Link></li>
                            <li><Link href="/mathematics" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Mathematics</Link></li>
                            <li><Link href="/english" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">English</Link></li>
                            <li><Link href="/science" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">General Science</Link></li>
                            <li><Link href="/current-affairs" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Current Affairs</Link></li>
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest pl-1 border-l-2 border-emerald-500">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/exams/ppsc" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">PPSC Guide</Link></li>
                            <li><Link href="/study-material" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Study Material</Link></li>
                            <li><Link href="/practice" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Mock Exams</Link></li>
                            <li><Link href="/past-papers" className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center gap-2">Past Papers</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest pl-1 border-l-2 border-emerald-500">Stay Updated</h4>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">Get exam updates, study tips, and new resources delivered to your inbox.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email address for newsletter"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                            <button
                                type="button"
                                aria-label="Subscribe to newsletter"
                                className="w-full px-6 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium">
                    <p className="text-slate-500 text-center md:text-left">
                        © 2025 PakScholar Pro. Made with ❤️ in Pakistan 🇵🇰
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-slate-500">
                        <Link href="/sitemap-page" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookies</Link>
                        <Link href="/help" className="hover:text-emerald-400 transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
