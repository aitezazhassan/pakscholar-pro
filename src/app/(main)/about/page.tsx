import { Target, Heart, Users, Award } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function AboutPage() {
    return (
        <StandardPageLayout
            title="About PakScholar Pro"
            subtitle="The definitive platform for quality exam preparation in Pakistan, built for students by scholars."
            icon={Target}
            themeColor="bg-emerald-600"
        >
            <div className="space-y-20">
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 italic font-serif">Mission & Vision</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            PakScholar Pro was founded on the belief that high-quality education and exam preparation should not be locked behind expensive paywalls. In a competitive landscape like Pakistan's civil services, access to accurate and timely information is the key differentiator.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our goal is to provide a comprehensive, free, and syllabus-aligned digital study hub that empowers every student to compete on a level playing field.
                        </p>
                    </div>
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                        <div className="space-y-8 relative z-10">
                            {[
                                { icon: Award, title: 'Academic Excellence', desc: 'Content curated by subject specialists.' },
                                { icon: Heart, title: 'Student First', desc: 'Free resources, forever. No hidden costs.' },
                                { icon: Users, title: 'Community Driven', desc: 'A growing platform for collective success.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        <item.icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 rounded-3xl p-12 border border-slate-100 italic">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-serif">Platform Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Students', value: '100K+' },
                            { label: 'MCQs', value: '15K+' },
                            { label: 'Past Papers', value: '500+' },
                            { label: 'Subjects', value: '12+' }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl font-black text-emerald-600 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900 font-serif italic">The Future of Learning</h2>
                    <p className="text-lg text-slate-600">
                        We are constantly evolving. From AI-driven performance analytics to real-time mock exam rankings, we are building the next generation of educational tools for Pakistani scholars.
                    </p>
                    <div className="pt-6">
                        <a href="/explore" className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-full font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/30">
                            Explore the Platform
                        </a>
                    </div>
                </section>
            </div>
        </StandardPageLayout>
    );
}
