import Link from 'next/link';
import { GraduationCap, Github, Crown, Target, BookOpen, Newspaper, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFD] dark:bg-[#0A0A0C] text-zinc-600 dark:text-zinc-400 py-16 sm:py-20 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-14 text-xs">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 group w-fit">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0F5132] to-[#15803d] rounded-lg flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                PakScholar<span className="text-[#0F5132] dark:text-emerald-400">Pro</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xs">
              Pakistan’s premier competitive examination preparation engine. Built for rigorous merit-based achievement across PPSC, FPSC, and Federal civil service exams.
            </p>
          </div>

          {/* Examination Engines */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Examination Engines
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/practice/mock-exams"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  PPSC Full-Length Mock (-0.25)
                </Link>
              </li>
              <li>
                <Link
                  href="/subjects/mathematics"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Quantitative & Ability Solver
                </Link>
              </li>
              <li>
                <Link
                  href="/current-affairs"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Monthly Current Affairs Stream
                </Link>
              </li>
              <li>
                <Link
                  href="/past-papers"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  2020–2025 Solved Past Papers
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Core Subjects
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/subjects/general-knowledge" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  General Knowledge & Geography
                </Link>
              </li>
              <li>
                <Link href="/subjects/pakistan-studies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Pakistan Studies & Constitution
                </Link>
              </li>
              <li>
                <Link href="/subjects/islamic-studies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Islamic Studies & History
                </Link>
              </li>
              <li>
                <Link href="/subjects/english" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  English Vocabulary & Idioms
                </Link>
              </li>
              <li>
                <Link href="/subjects/computer-science" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Computer Science & MS Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership & Integrity */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Membership
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/pro-pass" className="text-amber-700 dark:text-amber-400 font-semibold hover:underline">
                  Upgrade to Elite Pass (PKR 999)
                </Link>
              </li>
              <li>
                <span className="text-zinc-600 dark:text-zinc-300">JazzCash • Easypaisa • Raast</span>
              </li>
              <li>
                <Link href="/help" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Student Verification Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/[0.06] dark:border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-300">
          <p>© 2025–2026 PakScholar Pro. All examination past papers verified against official keys.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap-page" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
