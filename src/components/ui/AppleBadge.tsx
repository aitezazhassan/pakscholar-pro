import React from 'react';
import { cn } from '@/lib/utils';

interface AppleBadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'neutral' | 'blue';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export function AppleBadge({
  children,
  variant = 'emerald',
  size = 'md',
  dot = false,
  className,
}: AppleBadgeProps) {
  const variantStyles = {
    emerald:
      'bg-emerald-50 text-emerald-800 border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40',
    amber:
      'bg-amber-50 text-amber-800 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40',
    neutral:
      'bg-zinc-100 text-zinc-700 border-zinc-200/60 dark:bg-zinc-800/60 dark:text-zinc-300 dark:border-zinc-700/40',
    blue:
      'bg-blue-50 text-blue-800 border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/40',
  };

  const dotColor = {
    emerald: 'bg-emerald-600 dark:bg-emerald-400',
    amber: 'bg-amber-600 dark:bg-amber-400',
    neutral: 'bg-zinc-500 dark:bg-zinc-400',
    blue: 'bg-blue-600 dark:bg-blue-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border tracking-tight',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full inline-block', dotColor[variant])} />}
      {children}
    </span>
  );
}
