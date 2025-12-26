'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <Mail className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Contact Us</h1>
                    <p className="text-xl text-slate-300">Get in touch with our team</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none" />
                                <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"></textarea>
                                <button type="submit" className="w-full px-8 py-4 bg-emerald-700 text-white rounded-lg font-bold hover:bg-emerald-800 flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Email</h3>
                                        <p className="text-slate-700">support@pakscholarpro.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Location</h3>
                                        <p className="text-slate-700">Pakistan</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Response Time</h3>
                                    <p className="text-slate-700">We typically respond within 24-48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
