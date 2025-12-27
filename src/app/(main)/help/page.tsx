import { HelpCircle, BookOpen, Mail, MessageCircle, Heart, Award } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function HelpPage() {
    return (
        <StandardPageLayout
            title="Help Center"
            subtitle="We're here to support your journey. Find answers, study tips, and expert guidance."
            icon={HelpCircle}
            themeColor="bg-purple-600"
        >
            <div className="space-y-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: BookOpen,
                            title: 'Getting Started',
                            desc: 'New to the platform? Learn how to navigate and use our resources effectively.',
                            theme: 'text-blue-600 bg-blue-50'
                        },
                        {
                            icon: MessageCircle,
                            title: 'Preparation Tips',
                            desc: 'Expert advice on tackling competitive exams like PPSC, FPSC, and CSS.',
                            theme: 'text-emerald-600 bg-emerald-50'
                        },
                        {
                            icon: Heart,
                            title: 'Our Mission',
                            desc: 'Understand why we provide free resources and how you can contribute.',
                            theme: 'text-rose-600 bg-rose-50'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.theme} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 italic font-serif">Need Personal Assistance?</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Our dedicated support team is available to help with technical issues, account recovery, or specific study inquiries.
                            </p>
                            <div className="flex gap-4">
                                <a href="/contact" className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Contact Support
                                </a>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-purple-400">
                                <Award className="w-5 h-5" />
                                Fast Response
                            </h3>
                            <p className="text-slate-400 font-medium mb-4">
                                Typical response time for support tickets:
                            </p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                    <span className="text-slate-200">Technical Help</span>
                                    <span className="font-bold text-emerald-400">Under 2h</span>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                    <span className="text-slate-200">Study Content</span>
                                    <span className="font-bold text-emerald-400">Under 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Community Resources</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Join our vibrant community of scholars on social media to stay updated with the latest exam results and announcements.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-bold hover:bg-slate-200 transition-colors">Facebook Group</a>
                        <a href="#" className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-bold hover:bg-slate-200 transition-colors">WhatsApp Channel</a>
                    </div>
                </section>
            </div>
        </StandardPageLayout>
    );
}
