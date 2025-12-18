import React from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'primary',
            size = 'medium',
            isLoading = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxford-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

        const variantStyles = {
            primary:
                'bg-oxford-900 text-white shadow-sm hover:scale-[1.02] hover:shadow-md active:scale-[0.98]',
            secondary:
                'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300',
            outline:
                'border-2 border-oxford-900 bg-transparent text-oxford-900 hover:bg-oxford-50',
            ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
            danger:
                'bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800',
        };

        const sizeStyles = {
            small: 'h-9 px-3 text-sm gap-1',
            medium: 'h-11 px-4 text-base gap-2',
            large: 'h-12 px-6 text-lg gap-2',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <>
                        <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Loading...
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
