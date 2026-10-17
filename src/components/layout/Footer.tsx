import Link from 'next/link';
import { BookOpen, Facebook, Twitter, Linkedin, Github, Crown, Cpu, Target, Newspaper, ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-16 sm:py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group w-fit" aria-label="PakScholar Pro Home">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300 border border-emerald-400/30">
                                <BookOpen className="w-5 h-5 text-black" aria-hidden="true" />
                            </div>
                            <span className="text-xl font-extrabold text-white tracking-tight">
                                PakScholar<span className="text-emerald-400">Pro</span>
                            </span>
                        </Link>
                        <p className="text-xs leading-relaxed text-zinc-400 font-normal max-w-xs">
                            Pakistan's premier Cyber-Official examination platform. Zero latency simulations, official -0.25 negative marking, and high-yield intelligence.
                        </p>
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/aitezazhassan/pakscholar-pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View source code on GitHub"
                                className="w-9 h-9 bg-zinc-900 border border-white/10 hover:bg-emerald-500 hover:border-emerald-400 hover:text-black text-zinc-300 rounded-xl flex items-center justify-center transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Examination Tools */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-widest pl-2 border-l-2 border-emerald-400">
                            Exam Simulators
                        </h4>
                        <ul className="space-y-3 text-xs font-mono">
                            <li>
                                <Link href="/practice/mock-exams" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                    <Target className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>PPSC Mock Simulator (-0.25)</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/subjects/mathematics" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                                    <span>The Math Lab Solver</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/current-affairs" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                    <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Current Affairs Live Stream</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/past-papers" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                                    <span>2020–2025 Past Paper Keys</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Elite Pass Membership */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-widest pl-2 border-l-2 border-amber-400">
                            Pro Membership
                        </h4>
                        <ul className="space-y-3 text-xs font-mono">
                            <li>
                                <Link href="/pro-pass" className="text-amber-400 font-bold hover:underline flex items-center gap-1.5">
                                    <Crown className="w-3.5 h-3.5" />
                                    <span>Upgrade to Elite Pass</span>
                                </Link>
                            </li>
                            <li><span className="text-zinc-500">PKR 999 (3-Month Access)</span></li>
                            <li><span className="text-zinc-500">Direct JazzCash / Easypaisa</span></li>
                            <li><span className="text-zinc-500">10,000+ Verified MCQ Keys</span></li>
                        </ul>
                    </div>

                    {/* Official Notice */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-widest pl-2 border-l-2 border-emerald-400">
                            Standards & Integrity
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-mono mb-4">
                            Questions and explanations adhere strictly to BISE, PPSC, and FPSC syllabi with verified answer keys.
                        </p>
                        <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-[11px] font-mono text-emerald-400">
                            ✓ PWA Offline Capable
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                    <p>© 2025–2026 PakScholar Pro. Built for Academic Excellence in Pakistan 🇵🇰</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                        <Link href="/help" className="hover:text-emerald-400 transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
