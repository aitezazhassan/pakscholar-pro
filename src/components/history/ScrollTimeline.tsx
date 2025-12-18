'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { EraCard } from './EraCard';

interface ScrollTimelineProps {
    events: Array<{
        year: number;
        title: string;
        description: string;
        primeMinister: string;
        president: string;
        keyEvents: string[];
        bgColor: string;
        side: 'left' | 'right';
    }>;
}

export function ScrollTimeline({ events }: ScrollTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative py-20">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-slate-200 md:block">
                <motion.div
                    className="h-full w-full origin-top bg-gradient-to-b from-oxford-900 to-oxford-600"
                    style={{ scaleY: scrollYProgress }}
                />
            </div>

            {/* Timeline Events */}
            <div className="space-y-0">
                {events.map((event, index) => (
                    <EraCard key={event.year} event={event} index={index} />
                ))}
            </div>
        </div>
    );
}
