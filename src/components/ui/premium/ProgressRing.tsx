'use client';

interface ProgressRingProps {
    percentage: number;
    size?: 'sm' | 'md' | 'lg';
    color?: 'emerald' | 'teal' | 'blue' | 'purple';
    label?: string;
    showPercentage?: boolean;
    className?: string;
}

const sizeClasses = {
    sm: { container: 'w-16 h-16', stroke: 4, text: 'text-xs' },
    md: { container: 'w-24 h-24', stroke: 6, text: 'text-sm' },
    lg: { container: 'w-32 h-32', stroke: 8, text: 'text-lg' },
};

const colorClasses = {
    emerald: 'text-emerald-600',
    teal: 'text-teal-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
};

export function ProgressRing({
    percentage,
    size = 'md',
    color = 'emerald',
    label,
    showPercentage = true,
    className = '',
}: ProgressRingProps) {
    const { container, stroke, text } = sizeClasses[size];
    const colorClass = colorClasses[color];

    // Calculate circle properties
    const radius = size === 'sm' ? 28 : size === 'md' ? 42 : 56;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className={`relative ${container}`}>
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-full h-full">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={stroke}
                        fill="none"
                        className="text-gray-200"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={stroke}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className={`${colorClass} transition-all duration-1000 ease-out`}
                    />
                </svg>

                {/* Percentage Text */}
                {showPercentage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`font-bold ${colorClass} ${text}`}>
                            {percentage}%
                        </span>
                    </div>
                )}
            </div>

            {/* Label */}
            {label && (
                <p className="mt-2 text-sm text-gray-600 text-center font-medium">
                    {label}
                </p>
            )}
        </div>
    );
}
