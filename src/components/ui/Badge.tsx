import React from 'react';
import { cn } from '@/lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'primary', size = 'small', children, ...props }, ref) => {
        const baseStyles =
            'inline-flex items-center justify-center rounded-full font-medium';

        const variantStyles = {
            primary: 'bg-oxford-900 text-white',
            secondary: 'bg-slate-100 text-slate-700',
            success: 'bg-green-100 text-green-800',
            warning: 'bg-yellow-100 text-yellow-800',
            danger: 'bg-red-100 text-red-800',
        };

        const sizeStyles = {
            small: 'text-xs px-2 py-1',
            medium: 'text-sm px-3 py-1.5',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
