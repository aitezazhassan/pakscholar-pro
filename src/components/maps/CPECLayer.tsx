'use client';

import { motion } from 'framer-motion';

interface CPECLayerProps {
    route: {
        name: string;
        mainRoute: string;
        start: string;
        end: string;
        sezs: Array<{ name: string; coordinates: [number, number]; type?: string }>;
    };
    isVisible: boolean;
    onSEZClick?: (sez: any) => void;
}

export function CPECLayer({ route, isVisible, onSEZClick }: CPECLayerProps) {
    if (!isVisible) return null;

    return (
        <g className="cpec-layer">
            {/* Main CPEC Route */}
            <motion.path
                d={route.mainRoute}
                stroke="#F97316"
                strokeWidth={4}
                fill="none"
                strokeDasharray="10 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="drop-shadow-lg"
            />

            {/* Glowing effect */}
            <motion.path
                d={route.mainRoute}
                stroke="#FFA500"
                strokeWidth={8}
                fill="none"
                opacity={0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="blur-sm"
            />

            {/* SEZ Markers */}
            {route.sezs.map((sez, index) => (
                <g key={sez.name}>
                    <motion.circle
                        cx={sez.coordinates[0]}
                        cy={sez.coordinates[1]}
                        r={0}
                        fill="#F97316"
                        initial={{ r: 0 }}
                        animate={{ r: 0.3 }}
                        transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
                        onClick={() => onSEZClick?.(sez)}
                        className="cursor-pointer hover:fill-orange-600"
                    />
                    <motion.circle
                        cx={sez.coordinates[0]}
                        cy={sez.coordinates[1]}
                        r={0}
                        fill="none"
                        stroke="#F97316"
                        strokeWidth={0.1}
                        initial={{ r: 0, opacity: 1 }}
                        animate={{ r: 0.6, opacity: 0 }}
                        transition={{
                            delay: 1 + index * 0.3,
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                    />
                </g>
            ))}
        </g>
    );
}
