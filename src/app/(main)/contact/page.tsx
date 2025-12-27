import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function ContactPage() {
    return (
        <StandardPageLayout
            title="Get in Touch"
            subtitle="Have questions about the platform or need study help? Our team is here for you."
            icon={MessageSquare}
            themeColor="bg-emerald-600"
        >
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Form Section */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 italic font-serif">Send a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">FullName</label>
                            <input
                                type="text"
                                placeholder="e.g. Ali Ahmed"
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="ali@example.com"
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea
                                placeholder="How can we help you?"
                                rows={5}
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3"
                        >
                            <Send className="w-6 h-6" />
                            Direct Message
                        </button>
                    </form>
                </div>

                {/* Info Section */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 italic font-serif">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-100 transition-colors">
                                    <Mail className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Email</h3>
                                    <p className="text-slate-600 font-medium">support@pakscholarpro.com</p>
                                    <p className="text-slate-400 text-sm mt-1">General inquiries & feedback</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Location</h3>
                                    <p className="text-slate-600 font-medium">Remote Team | Pakistan</p>
                                    <p className="text-slate-400 text-sm mt-1">Available across all timezones</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Active Support
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                            Our team typically responds within <strong>24 working hours</strong>. For urgent technical issues, please mention "URGENT" in the subject line.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">PPSC Expert</div>
                            <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Tech Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
