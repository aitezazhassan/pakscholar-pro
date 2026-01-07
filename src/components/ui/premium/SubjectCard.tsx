'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
    name: string;
    icon: LucideIcon;
    mcqCount: number;
    progress?: number;
    gradient: string;
    href: string;
    isNew?: boolean;
    className?: string;
}

export function SubjectCard({
    name,
    icon: Icon,
    mcqCount,
    progress = 0,
    gradient,
    href,
    isNew = false,
    className = '',
}: SubjectCardProps) {
    return (
        <Link
            href={href}
            className={`
        group relative overflow-hidden rounded-2xl p-6
        bg-white border-2 border-gray-100
        hover:border-transparent hover:shadow-xl
        transition-all duration-300 hover:-translate-y-2
        ${className}
      `}
            style={{
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            }}
            onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            }}
        >
            {/* Gradient Background */}
            <div className={`
        absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 
        group-hover:opacity-10 transition-opacity duration-300
      `} />

            {/* New Badge */}
            {isNew && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    NEW
                </span>
            )}

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className={`
          w-14 h-14 mb-4 bg-gradient-to-br ${gradient} rounded-xl 
          flex items-center justify-center
          group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
        `}>
                    <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Subject Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {name}
                </h3>

                {/* MCQ Count */}
                <p className="text-sm text-gray-600 mb-4">
                    {mcqCount} MCQs Available
                </p>

                {/* Progress Bar */}
                {progress > 0 && (
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span className="font-semibold">{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-emerald-600 transition-colors">
                    <span>Start Practice</span>
                    <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Border Gradient on Hover */}
            <div className={`
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 pointer-events-none
        bg-gradient-to-br ${gradient} p-[2px]
      `}>
                <div className="w-full h-full bg-white rounded-2xl" />
            </div>
        </Link>
    );
}
