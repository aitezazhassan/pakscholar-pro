import { ScrollTimeline } from '@/components/history/ScrollTimeline';
import { timelineEvents } from '@/lib/mapData/timeline';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export const metadata = {
    title: 'Constitutional Timeline | Pakistan History | PakScholar Pro',
    description: 'Explore Pakistan\'s constitutional and political history from 1947 to present through an interactive scrolling timeline.',
};

export default function TimelinePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <Link
                    href="/"
                    className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-oxford-900"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <div className="mb-12 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-oxford-900 to-oxford-700 text-white shadow-hard">
                            <Clock className="h-8 w-8" />
                        </div>
                    </div>

                    <h1 className="mb-4 font-playfair text-4xl font-bold text-slate-900 md:text-5xl">
                        Constitutional Timeline
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Journey through Pakistan's constitutional and political history from independence in 1947 to the present day. Scroll to explore key moments that shaped the nation.
                    </p>
                </div>

                {/* Timeline */}
                <ScrollTimeline events={timelineEvents} />

                {/* Footer Note */}
                <div className="mt-12 rounded-xl bg-white p-6 text-center shadow-soft">
                    <p className="text-slate-600">
                        This timeline highlights major constitutional milestones in Pakistan's history. For more detailed information on specific events, explore our{' '}
                        <Link href="/essays" className="font-medium text-oxford-900 underline">
                            essay collection
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
