'use client';

interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export function TouchButton({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: TouchButtonProps) {
    const baseClasses = 'touch-feedback touch-target font-semibold rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
        outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm min-h-[44px]',
        md: 'px-6 py-3 text-base min-h-[48px]',
        lg: 'px-8 py-4 text-lg min-h-[52px]',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
