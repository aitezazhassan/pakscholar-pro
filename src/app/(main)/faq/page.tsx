'use client';

import { HelpCircle, BookOpen, MessageSquare, Mail } from 'lucide-react';

export default function FAQPage() {
    const faqs = [
        {
            category: 'General',
            questions: [
                { q: 'Is PakScholar Pro free?', a: 'Yes! All our study materials, practice tests, and resources are completely free.' },
                { q: 'Do I need to create an account?', a: 'No account needed. Access all resources directly from our website.' },
            ]
        },
        {
            category: 'Exams',
            questions: [
                { q: 'Which exams are covered?', a: 'We cover PPSC, FPSC, CSS, and other major competitive exams in Pakistan.' },
                { q: 'Are past papers available?', a: 'Yes, we have extensive collection of past papers from recent years.' },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden bg-slate-900 pt-24 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
                    <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                    <h1 className="text-5xl font-bold mb-4 font-serif">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-300">Find answers to common questions</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {faqs.map((category, idx) => (
                        <div key={idx} className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((faq, qidx) => (
                                    <div key={qidx} className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
                                        <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                        <p className="text-slate-700">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
                    <p className="text-xl text-blue-100 mb-8">Contact our support team</p>
                    <a href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 inline-block">
                        Contact Us
                    </a>
                </div>
            </section>
        </main>
    );
}
