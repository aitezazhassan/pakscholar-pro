import { Cookie, ShieldCheck, Eye, Scale } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function CookiesPage() {
    return (
        <StandardPageLayout
            title="Cookie Policy"
            subtitle="Understanding how we use cookies to provide a seamless and personalized experience."
            icon={Cookie}
            themeColor="bg-amber-600"
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 italic font-serif">What Are Cookies?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, keep you logged in, and analyze how you interact with our platform.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: ShieldCheck,
                            title: 'Essential Cookies',
                            desc: 'Technically necessary for the platform to function, such as authentication and security.'
                        },
                        {
                            icon: Eye,
                            title: 'Analytics Cookies',
                            desc: 'Help us understand anonymous usage patterns so we can improve our study materials.'
                        },
                        {
                            icon: Scale,
                            title: 'Preference Cookies',
                            desc: 'Allow the site to remember choices you make, like subject filters or UI settings.'
                        },
                        {
                            icon: Cookie,
                            title: 'Third-Party Cookies',
                            desc: 'Set by external services like Google Analytics for traffic measurement.'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 italic font-serif">Managing Your Preferences</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, delete existing ones, or receive notifications before a cookie is stored.
                    </p>
                    <p className="text-slate-500 font-medium bg-white p-4 rounded-xl inline-block border border-slate-200">
                        ⚠️ <strong>Note:</strong> Disabling essential cookies may prevent you from logging in or accessing your dashboard.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 italic font-serif">Contact for Privacy</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        If you have any questions regarding our use of cookies or our data protection practices, please contact us at <a href="mailto:privacy@pakscholarpro.com" className="text-amber-700 font-bold hover:underline">privacy@pakscholarpro.com</a>.
                    </p>
                </section>
            </div>
        </StandardPageLayout>
    );
}
