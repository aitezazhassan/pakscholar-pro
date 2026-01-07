import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Calendar, User, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Developer Info - PakScholar Pro',
    description: 'Developer and owner information',
    robots: 'noindex, nofollow', // Prevent search engine indexing
};

export default function DeveloperPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 text-sm font-medium">Private Access Only</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Developer Information
                    </h1>
                    <p className="text-slate-300 text-lg">
                        PakScholar Pro - Owner & Developer
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                    {/* Profile Section */}
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1">
                                    <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center">
                                        <User className="w-16 h-16 text-emerald-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Aitezaz Hassan
                                </h2>
                                <p className="text-emerald-400 text-lg font-medium mb-6">
                                    Founder & Lead Developer
                                </p>

                                {/* Details Grid */}
                                <div className="space-y-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
                                            <a
                                                href="mailto:aitezazhassan260@gmail.com"
                                                className="text-white hover:text-emerald-400 transition-colors"
                                            >
                                                aitezazhassan260@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wide">Location</p>
                                            <p className="text-white">Bhowana, District Chiniot, Punjab</p>
                                        </div>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wide">Date of Birth</p>
                                            <p className="text-white">2nd November, 2002</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10"></div>

                    {/* Additional Info */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-xl font-bold text-white mb-6">About the Developer</h3>
                        <div className="space-y-4 text-slate-300">
                            <p className="leading-relaxed">
                                Aitezaz Hassan is the founder and lead developer of PakScholar Pro,
                                a comprehensive PPSC exam preparation platform designed to help thousands
                                of Pakistani students achieve their career goals.
                            </p>
                            <p className="leading-relaxed">
                                With a passion for education and technology, Aitezaz created this platform
                                to provide free, high-quality resources to PPSC aspirants across Pakistan.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">2024</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide">Founded</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">12K+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide">Students</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">200+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide">MCQs</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide">Free</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 bg-white/5 border-t border-white/10">
                        <p className="text-center text-slate-400 text-sm">
                            This page is private and not accessible to the public
                        </p>
                    </div>
                </div>

                {/* Domicile Certificate Reference */}
                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        Information verified from Certificate of Domicile
                        <br />
                        <span className="text-slate-500">CHN-8-2025-1275 | Issued: 22-8-2025</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
