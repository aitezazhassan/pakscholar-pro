'use client';

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatCardProps {
    value: string | number;
    label: string;
    icon: LucideIcon;
    trend?: string;
    gradient?: 'emerald' | 'teal' | 'amber' | 'blue' | 'purple';
    animated?: boolean;
    className?: string;
}

const gradientClasses = {
    emerald: 'from-emerald-500 to-teal-600',
    teal: 'from-teal-500 to-cyan-600',
    amber: 'from-amber-500 to-orange-600',
    blue: 'from-blue-500 to-cyan-600',
    purple: 'from-purple-500 to-pink-600',
};

export function StatCard({
    value,
    label,
    icon: Icon,
    trend,
    gradient = 'emerald',
    animated = true,
    className = '',
}: StatCardProps) {
    return (
        <div
            className={`
        relative overflow-hidden rounded-2xl p-6 
        bg-gradient-to-br ${gradientClasses[gradient]}
        text-white shadow-xl
        ${animated ? 'hover-lift hover-glow' : ''}
        ${className}
      `}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between">
                <div>
                    <p className="text-white/80 text-sm font-medium mb-1">{label}</p>
                    <p className="text-4xl md:text-5xl font-bold">{value}</p>
                    {trend && (
                        <p className="text-white/90 text-sm mt-2 font-medium">
                            {trend}
                        </p>
                    )}
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                </div>
            </div>
        </div>
    );
}
