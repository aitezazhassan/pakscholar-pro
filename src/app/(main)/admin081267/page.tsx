import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Calendar, User, Shield, Code, Sparkles, Github, Linkedin, Award, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Developer Profile - Aitezaz Hassan',
    description: 'Developer and owner information - Private access only',
    robots: 'noindex, nofollow',
};

export default function DeveloperProfilePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-float"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

            <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Private Access Badge */}
                    <div className="flex justify-center mb-8 animate-slide-down-fade">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                            <Shield className="w-5 h-5 text-emerald-400" />
                            <span className="text-emerald-300 font-semibold">Private Developer Portal</span>
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Main Profile Card */}
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 animate-scale-in delay-100">
                        {/* Header Section with Gradient */}
                        <div className="relative h-48 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
                            <div className="absolute top-4 right-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                                    <Sparkles className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-medium">Founder</span>
                                </div>
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="relative px-8 pb-8">
                            {/* Profile Image - Overlapping header */}
                            <div className="flex flex-col md:flex-row gap-8 -mt-20 mb-8">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-800">
                                        <Image
                                            src="/images/developer-portrait.jpg"
                                            alt="Aitezaz Hassan"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center border-4 border-slate-900 shadow-lg">
                                        <Code className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="flex-1 pt-4">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        Aitezaz Hassan
                                    </h1>
                                    <p className="text-xl text-emerald-400 font-semibold mb-4">
                                        Founder & Lead Developer
                                    </p>
                                    <p className="text-slate-300 leading-relaxed max-w-2xl">
                                        Building Pakistan's premier PPSC exam preparation platform.
                                        Passionate about education technology and empowering students to achieve their dreams.
                                    </p>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Contact Info */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-emerald-400" />
                                        Contact Information
                                    </h3>

                                    <div className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                                        <a
                                            href="mailto:aitezazhassan260@gmail.com"
                                            className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <Mail className="w-4 h-4 text-emerald-400" />
                                            aitezazhassan260@gmail.com
                                        </a>
                                    </div>

                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Location</p>
                                        <div className="text-white flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-emerald-400" />
                                            Bhowana, District Chiniot, Punjab
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Date of Birth</p>
                                        <div className="text-white flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-emerald-400" />
                                            2nd November, 2002
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Info */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-emerald-400" />
                                        Professional Details
                                    </h3>

                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Role</p>
                                        <div className="text-white flex items-center gap-2">
                                            <Award className="w-4 h-4 text-emerald-400" />
                                            Founder & Lead Developer
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Occupation</p>
                                        <div className="text-white flex items-center gap-2">
                                            <Code className="w-4 h-4 text-emerald-400" />
                                            Student & Full-Stack Developer
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Domicile</p>
                                        <div className="text-white">
                                            <p className="text-sm">CHN-8-2025-1275</p>
                                            <p className="text-xs text-slate-400 mt-1">Issued: 22-8-2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Platform Stats */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-emerald-400" />
                                    Platform Impact
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-white mb-1">12,547</div>
                                        <div className="text-xs text-emerald-300 uppercase tracking-wide">Active Students</div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-white mb-1">200+</div>
                                        <div className="text-xs text-blue-300 uppercase tracking-wide">MCQ Questions</div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-white mb-1">95%</div>
                                        <div className="text-xs text-purple-300 uppercase tracking-wide">Success Rate</div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-500/30 text-center hover:scale-105 transition-transform">
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-xs text-amber-300 uppercase tracking-wide">Free Access</div>
                                    </div>
                                </div>
                            </div>

                            {/* Mission Statement */}
                            <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                                <h3 className="text-lg font-bold text-white mb-3">Mission</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    To democratize PPSC exam preparation by providing free, high-quality resources
                                    to every Pakistani student, regardless of their economic background. PakScholar Pro
                                    is built with the vision of making quality education accessible to all.
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-6 bg-white/5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-slate-400 text-sm">
                                🔒 This page is private and not publicly accessible
                            </p>
                            <div className="flex items-center gap-2 text-slate-500 text-xs">
                                <Shield className="w-4 h-4" />
                                <span>Verified Developer Profile</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Card */}
                    <div className="mt-6 text-center animate-fade-in delay-300">
                        <p className="text-slate-400 text-sm">
                            Information verified from Certificate of Domicile
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                            Document No: CHN-8-2025-1275 | Issued: 22nd August, 2025
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
