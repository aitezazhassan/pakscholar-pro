'use client';

import { Users } from 'lucide-react';

export default function TeamPage() {
    const team = [
        { name: 'Development Team', role: 'Building the platform', icon: '👨‍💻' },
        { name: 'Content Team', role: 'Creating educational resources', icon: '📚' },
        { name: 'Support Team', role: 'Helping students succeed', icon: '💬' }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Users className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Our Team</h1>
                    <p className="text-xl text-slate-300">Dedicated to your success</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-blue-50 rounded-2xl p-8 text-center border-2 border-blue-100">
                                <div className="text-6xl mb-4">{member.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                                <p className="text-slate-700">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
                    <p className="text-xl text-blue-100 mb-8">Help us empower Pakistani students</p>
                    <a href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 inline-block">
                        Get in Touch
                    </a>
                </div>
            </section>
        </main>
    );
}
