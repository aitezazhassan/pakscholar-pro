import React from 'react';
import { cn } from '@/lib/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'text' | 'rect' | 'circle';
    width?: string;
    height?: string;
}

const Skeleton = ({
    className,
    variant = 'rect',
    width,
    height,
    style,
    ...props
}: SkeletonProps) => {
    const variantStyles = {
        text: 'h-4 w-full rounded',
        rect: 'w-full rounded-lg',
        circle: 'rounded-full',
    };

    return (
        <div
            className={cn('skeleton bg-slate-200', variantStyles[variant], className)}
            style={{
                width: width || undefined,
                height: height || (variant === 'circle' ? width : undefined),
                ...style,
            }}
            {...props}
        />
    );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
