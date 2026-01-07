'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    duration?: number;
}

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    duration = 600
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up':
                    return 'translateY(20px)';
                case 'down':
                    return 'translateY(-20px)';
                case 'left':
                    return 'translateX(20px)';
                case 'right':
                    return 'translateX(-20px)';
                default:
                    return 'none';
            }
        }
        return 'none';
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
        >
            {children}
        </div>
    );
}
