import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Developer - Aitezaz Hassan',
    description: 'Developer profile - Private access',
    robots: 'noindex, nofollow',
};

export default function DeveloperPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md">
                {/* Private Badge */}
                <div className="flex justify-center mb-8 animate-slide-down-fade">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-xl rounded-full border border-emerald-500/20">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 text-sm font-medium">Private</span>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-black/50 animate-scale-in delay-100">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                                <Image
                                    src="/images/developer-portrait.jpg"
                                    alt="Aitezaz Hassan"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Aitezaz Hassan
                        </h1>
                        <p className="text-emerald-400 font-medium">
                            Developer
                        </p>
                    </div>

                    {/* Email */}
                    <div className="group">
                        <a
                            href="mailto:aitezazhassan260@gmail.com"
                            className="flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5 text-emerald-400" />
                            <span className="text-white group-hover:text-emerald-400 transition-colors">
                                aitezazhassan260@gmail.com
                            </span>
                        </a>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 text-center animate-fade-in delay-300">
                    <p className="text-slate-500 text-xs">
                        PakScholar Pro
                    </p>
                </div>
            </div>
        </main>
    );
}
