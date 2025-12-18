import React from 'react';
import { cn } from '@/lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'bordered' | 'hover';
    padding?: 'none' | 'small' | 'medium' | 'large';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            className,
            variant = 'default',
            padding = 'medium',
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = 'rounded-lg bg-white transition-all duration-200';

        const variantStyles = {
            default: 'border border-slate-200',
            elevated: 'shadow-medium',
            bordered: 'border-2 border-slate-300',
            hover:
                'border border-slate-200 hover:shadow-lg hover:scale-[1.01] cursor-pointer',
        };

        const paddingStyles = {
            none: 'p-0',
            small: 'p-4',
            medium: 'p-6',
            large: 'p-8',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    paddingStyles[padding],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };
