import { HelpCircle } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function FAQPage() {
    const faqs = [
        {
            category: 'General Questions',
            questions: [
                { q: 'Is PakScholar Pro free?', a: 'Absolutely! Our mission is to democratize education. All study materials, practice tests, and guides are free for everyone.' },
                { q: 'Do I need an account to study?', a: 'You can browse most materials without an account. However, creating a free account allows you to track your progress and save test results.' },
                { q: 'Is the content up to date?', a: 'Yes, our team regularly updates syllabus-aligned content, especially our Current Affairs and Past Papers sections.' },
            ]
        },
        {
            category: 'Exams & Tests',
            questions: [
                { q: 'Which exams do you cover?', a: 'We primarily focus on PPSC, FPSC, CSS, and other competitive departmental exams for government jobs in Pakistan.' },
                { q: 'How do the practice tests work?', a: 'Our tests simulate the real exam environment with timed sessions and immediate result feedback with detailed explanations.' },
                { q: 'Can I download the materials?', a: 'Yes, many of our resources are available in PDF format for offline preparation.' },
            ]
        }
    ];

    return (
        <StandardPageLayout
            title="Help & FAQ"
            subtitle="Everything you need to know about using PakScholar Pro efficiently."
            icon={HelpCircle}
            themeColor="bg-blue-600"
        >
            <div className="space-y-12">
                {faqs.map((category, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-2 border-slate-100 italic font-serif">
                            {category.category}
                        </h2>
                        <div className="grid gap-6">
                            {category.questions.map((faq, qidx) => (
                                <div key={qidx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                                        <span className="text-blue-600 font-serif">Q:</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Still have questions?</h3>
                <p className="text-blue-700 mb-6 font-medium">Our support team is here to help you succeed.</p>
                <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10"
                >
                    Contact Support
                </a>
            </div>
        </StandardPageLayout>
    );
}
