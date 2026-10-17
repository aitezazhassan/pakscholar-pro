import React from 'react';
import { cn } from '@/lib/utils';

interface CyberBadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'cyan' | 'purple' | 'zinc';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export function CyberBadge({
  children,
  variant = 'emerald',
  size = 'md',
  pulse = false,
  className,
}: CyberBadgeProps) {
  const variantStyles = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-amber-500/10',
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-cyan-500/10',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-purple-500/10',
    zinc: 'text-zinc-400 bg-zinc-800/50 border-white/10 shadow-black/20',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs sm:text-sm px-3 py-1 gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border shadow-sm backdrop-blur-md transition-all',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              variant === 'amber' ? 'bg-amber-400' : 'bg-emerald-400'
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              variant === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
