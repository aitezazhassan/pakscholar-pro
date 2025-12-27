import { Search, BookOpen, CheckCircle, Award } from 'lucide-react';
import StandardPageLayout from '@/components/layout/StandardPageLayout';

export default function HowItWorksPage() {
    const steps = [
        {
            title: 'Explore Subjects',
            description: 'Dive into our curated database of Pakistan Studies, Islamic Studies, Mathematics, and more. All content is mapped to official PPSC/FPSC syllabi.',
            icon: Search,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            title: 'Master the Content',
            description: 'Study interactive notes and detailed topic breakdowns. Our resources are optimized for quick retention and deep understanding.',
            icon: BookOpen,
            color: 'text-emerald-500',
            bgColor: 'bg-emerald-50'
        },
        {
            title: 'Test Your Knowledge',
            description: 'Take subject-specific practice tests and full-length mock exams. Get instant feedback and identify your weak areas.',
            icon: CheckCircle,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50'
        },
        {
            title: 'Achieve Success',
            description: 'Track your improvement over time and walk into your exam hall with the confidence of a Pro.',
            icon: Award,
            color: 'text-amber-500',
            bgColor: 'bg-amber-50'
        }
    ];

    return (
        <StandardPageLayout
            title="How It Works"
            subtitle="Your step-by-step roadmap to mastering competitive exams in Pakistan."
            icon={Award}
            themeColor="bg-purple-600"
        >
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-slate-100 hidden md:block"></div>

                <div className="space-y-16">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start group">
                                {/* Number Circle */}
                                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 items-center justify-center text-2xl font-black text-slate-300 group-hover:border-purple-200 group-hover:text-purple-500 transition-all z-10 shadow-sm">
                                    {idx + 1}
                                </div>

                                <div className={`${step.bgColor} rounded-3xl p-8 flex-1 border border-transparent group-hover:border-slate-200 transition-all shadow-sm group-hover:shadow-md`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-xl bg-white shadow-sm ${step.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 font-serif italic">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4 italic font-serif">Ready to start your journey?</h2>
                    <p className="text-purple-200 mb-8 max-w-xl mx-auto">
                        Thousands of students are already using PakScholar Pro to prepare for their future. Join them today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/signup" className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/40">
                            Create Free Account
                        </a>
                        <a href="/explore" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                            Explore Resources
                        </a>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
