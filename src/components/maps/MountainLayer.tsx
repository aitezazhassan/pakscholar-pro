'use client';

import { Mountain } from 'lucide-react';

interface MountainLayerProps {
    mountains: Array<{
        name: string;
        coordinates: [number, number];
        height: string;
        range: string;
    }>;
    isVisible: boolean;
    onMountainClick?: (mountain: any) => void;
}

export function MountainLayer({ mountains, isVisible, onMountainClick }: MountainLayerProps) {
    if (!isVisible) return null;

    return (
        <g className="mountains-layer">
            {mountains.map((mountain) => (
                <g
                    key={mountain.name}
                    transform={`translate(${mountain.coordinates[0]}, ${mountain.coordinates[1]})`}
                    onClick={() => onMountainClick?.(mountain)}
                    className="cursor-pointer"
                >
                    {/* Mountain icon */}
                    <foreignObject x={-0.3} y={-0.6} width={0.6} height={0.6}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Mountain className="h-full w-full text-slate-700 transition-colors hover:text-oxford-900" />
                        </div>
                    </foreignObject>

                    {/* Mountain label */}
                    <text
                        y={0.8}
                        textAnchor="middle"
                        className="fill-slate-700 text-[0.35px] font-semibold"
                    >
                        {mountain.name}
                    </text>
                </g>
            ))}
        </g>
    );
}
