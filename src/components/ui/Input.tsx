import React from 'react';
import { cn } from '@/lib/cn';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    helperText?: string;
    label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, helperText, label, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        {label}
                        {props.required && <span className="ml-1 text-red-500">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'h-11 w-full rounded-lg border-2 px-3 text-slate-900 transition-all',
                        'placeholder:text-slate-400',
                        'focus:outline-none focus:ring-4',
                        error
                            ? 'border-red-500 ring-red-100 focus:border-red-500 focus:ring-red-100'
                            : 'border-slate-200 ring-oxford-100 focus:border-oxford-600 focus:ring-oxford-100',
                        'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-50',
                        className
                    )}
                    {...props}
                />
                {helperText && (
                    <p
                        className={cn(
                            'mt-1 text-sm',
                            error ? 'text-red-600' : 'text-slate-500'
                        )}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
