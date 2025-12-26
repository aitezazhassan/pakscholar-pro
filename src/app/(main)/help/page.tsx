'use client';

import { HelpCircle, BookOpen, Mail, MessageCircle } from 'lucide-react';

export default function HelpPage() {
    const helpTopics = [
        { icon: BookOpen, title: 'Getting Started', desc: 'Learn how to use PakScholar Pro effectively' },
        { icon: MessageCircle, title: 'Study Tips', desc: 'Best practices for exam preparation' },
        { icon: Mail, title: 'Contact Support', desc: 'Need help? Reach out to our team' }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <HelpCircle className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Help Center</h1>
                    <p className="text-xl text-slate-300">We're here to help you succeed</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {helpTopics.map((topic, idx) => {
                            const Icon = topic.icon;
                            return (
                                <div key={idx} className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100 hover:shadow-xl transition-all">
                                    <Icon className="w-12 h-12 text-purple-600 mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                                    <p className="text-slate-700">{topic.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
                    <p className="text-xl text-purple-100 mb-8">Contact us directly</p>
                    <a href="/contact" className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 inline-block">
                        Contact Support
                    </a>
                </div>
            </section>
        </main>
    );
}
