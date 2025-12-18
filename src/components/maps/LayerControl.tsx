'use client';

import { useState } from 'react';
import { Layers, Droplets, Route, Mountain as MountainIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface LayerControlProps {
    layers: {
        rivers: boolean;
        cpec: boolean;
        mountains: boolean;
    };
    onToggleLayer: (layer: keyof typeof layers) => void;
}

export function LayerControl({ layers, onToggleLayer }: LayerControlProps) {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute right-4 top-4 z-10 rounded-xl bg-white p-4 shadow-hard"
        >
            <h3 className="mb-3 text-sm font-semibold text-slate-900">Map Layers</h3>

            <div className="space-y-2">
                <LayerToggle
                    icon={<Droplets className="h-4 w-4" />}
                    label="Rivers"
                    isActive={layers.rivers}
                    onClick={() => onToggleLayer('rivers')}
                    color="blue"
                />

                <LayerToggle
                    icon={<Route className="h-4 w-4" />}
                    label="CPEC Route"
                    isActive={layers.cpec}
                    onClick={() => onToggleLayer('cpec')}
                    color="orange"
                />

                <LayerToggle
                    icon={<MountainIcon className="h-4 w-4" />}
                    label="Mountains"
                    isActive={layers.mountains}
                    onClick={() => onToggleLayer('mountains')}
                    color="gray"
                />
            </div>
        </motion.div>
    );
}

interface LayerToggleProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
    color: 'blue' | 'orange' | 'gray';
}

function LayerToggle({ icon, label, isActive, onClick, color }: LayerToggleProps) {
    const colors = {
        blue: 'bg-blue-100 text-blue-700 border-blue-300',
        orange: 'bg-orange-100 text-orange-700 border-orange-300',
        gray: 'bg-slate-100 text-slate-700 border-slate-300',
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                'flex w-full items-center gap-2 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all',
                isActive
                    ? colors[color]
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            )}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
