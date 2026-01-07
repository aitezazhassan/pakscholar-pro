'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
}

export function CountUp({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = '',
    decimals = 0
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const startValue = 0;
                    const endValue = end;

                    const animate = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentValue = startValue + (endValue - startValue) * easeOutQuart;

                        setCount(currentValue);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(endValue);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration, hasAnimated]);

    const formattedCount = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString();

    return (
        <span ref={countRef} className={className}>
            {prefix}{formattedCount}{suffix}
        </span>
    );
}
