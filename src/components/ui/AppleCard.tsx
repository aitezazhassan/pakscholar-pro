'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AppleCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function AppleCard({
  children,
  className,
  hoverLift = true,
  ...props
}: AppleCardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -2, transition: { duration: 0.2, ease: 'easeOut' } } : undefined}
      whileTap={{ scale: 0.992 }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/[0.08]',
        'bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl',
        'shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-none',
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
