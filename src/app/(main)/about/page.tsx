'use client';

import { Target, Heart, Users, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="text-8xl mb-6">🎓</div>
                    <h1 className="text-5xl font-bold mb-4 font-serif">About PakScholar Pro</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Empowering Pakistani students to achieve their dreams through free, quality education
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                PakScholar Pro was created with a simple yet powerful vision: to provide free, comprehensive, and high-quality educational resources to every student preparing for competitive exams in Pakistan.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We believe that education should be accessible to all, regardless of financial background. Every student deserves the opportunity to excel.
                            </p>
                        </div>
                        <div className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-100">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Target className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Excellence</h3>
                                        <p className="text-slate-700">Providing top-quality study materials</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Heart className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Accessibility</h3>
                                        <p className="text-slate-700">Completely free for all students</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Users className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Community</h3>
                                        <p className="text-slate-700">Supporting each other's success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="text-4xl font-bold text-emerald-700 mb-2">100K+</div>
                            <div className="text-slate-700">Students Helped</div>
                        </div>
                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="text-4xl font-bold text-blue-700 mb-2">10K+</div>
                            <div className="text-slate-700">Practice Questions</div>
                        </div>
                        <div className="text-center p-8 bg-slate-50 rounded-2xl">
                            <div className="text-4xl font-bold text-purple-700 mb-2">100%</div>
                            <div className="text-slate-700">Free Forever</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Award className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                    <h2 className="text-4xl font-bold mb-6">Join Thousands of Successful Students</h2>
                    <p className="text-xl text-emerald-100 mb-8">
                        Start your journey to success with PakScholar Pro today
                    </p>
                    <a href="/pakistan-studies" className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 inline-block">
                        Start Learning
                    </a>
                </div>
            </section>
        </main>
    );
}
