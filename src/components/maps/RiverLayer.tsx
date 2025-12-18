'use client';

import { motion } from 'framer-motion';

interface RiverLayerProps {
    rivers: Array<{
        name: string;
        path: string;
        color: string;
        origin: string;
        length: string;
    }>;
    isVisible: boolean;
    onHover?: (river: any) => void;
}

export function RiverLayer({ rivers, isVisible, onHover }: RiverLayerProps) {
    if (!isVisible) return null;

    return (
        <g className="rivers-layer">
            {rivers.map((river, index) => (
                <motion.path
                    key={river.name}
                    d={river.path}
                    stroke={river.color}
                    strokeWidth={3}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: index * 0.3,
                        ease: "easeInOut"
                    }}
                    onMouseEnter={() => onHover?.(river)}
                    className="cursor-pointer hover:stroke-[5]"
                />
            ))}
        </g>
    );
}
