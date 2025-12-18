'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, User, Users } from 'lucide-react';

interface EraCardProps {
    event: {
        year: number;
        title: string;
        description: string;
        primeMinister: string;
        president: string;
        keyEvents: string[];
        bgColor: string;
        side: 'left' | 'right';
    };
    index: number;
}

export function EraCard({ event, index }: EraCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [event.side === "left" ? -200 : 200, 0]
    );

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <div ref={ref} className="relative mb-24 flex items-center justify-center">
            {/* Timeline dot */}
            <motion.div
                className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-oxford-900 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            />

            {/* Card */}
            <motion.div
                style={{ x, opacity }}
                className={`w-full md:w-5/12 ${event.side === "right" ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
            >
                <motion.div
                    className="rounded-2xl bg-white p-6 shadow-hard transition-all hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                    style={{
                        borderLeft: `4px solid ${event.bgColor}`
                    }}
                >
                    {/* Year Badge */}
                    <div
                        className="mb-4 inline-block rounded-lg px-4 py-2 font-bold text-white"
                        style={{ backgroundColor: event.bgColor }}
                    >
                        {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 font-playfair text-2xl font-bold text-slate-900">
                        {event.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-slate-600">
                        {event.description}
                    </p>

                    {/* Leadership */}
                    <div className="mb-4 space-y-2 rounded-lg bg-slate-50 p-3">
                        <div className="flex items-start gap-2 text-sm">
                            <User className="mt-0.5 h-4 w-4 flex-shrink-0 text-oxford-600" />
                            <div>
                                <div className="font-medium text-slate-900">Prime Minister</div>
                                <div className="text-slate-600">{event.primeMinister}</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                            <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-oxford-600" />
                            <div>
                                <div className="font-medium text-slate-900">President</div>
                                <div className="text-slate-600">{event.president}</div>
                            </div>
                        </div>
                    </div>

                    {/* Key Events */}
                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-slate-900">Key Events</h4>
                        <ul className="space-y-1">
                            {event.keyEvents.map((keyEvent, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: event.bgColor }}></span>
                                    <span>{keyEvent}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
