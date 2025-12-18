import { SwipeQuiz } from '@/components/quiz/SwipeQuiz';
import { getAllMCQs } from '@/lib/keystatic/reader';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Rapid Fire Quiz | PakScholar Pro',
    description: 'Test your knowledge with our interactive rapid-fire quiz. Build your streak and master competitive exam topics!',
};

export default async function RapidQuizPage() {
    const mcqs = await getAllMCQs();

    // Shuffle MCQs for variety
    const shuffledMCQs = [...mcqs].sort(() => Math.random() - 0.5);

    if (mcqs.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-oxford-900"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="py-20 text-center">
                        <h1 className="mb-4 font-playfair text-3xl font-bold text-slate-900">
                            No Questions Available
                        </h1>
                        <p className="mb-8 text-slate-600">
                            Add MCQs through the admin panel to start the quiz.
                        </p>
                        <Link
                            href="/keystatic"
                            className="inline-block rounded-lg bg-oxford-900 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
                        >
                            Go to Admin
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-oxford-900"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <SwipeQuiz mcqs={shuffledMCQs} />
            </div>
        </div>
    );
}
