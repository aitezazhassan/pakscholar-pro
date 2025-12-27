'use client';

import { useEffect, useRef, useState } from 'react';

interface SwipeableProps {
    children: React.ReactNode;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
    className?: string;
}

export function Swipeable({
    children,
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    className = '',
}: SwipeableProps) {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(e.targetTouches[0].clientX);
        setIsSwiping(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isSwiping) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!isSwiping) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > threshold;
        const isRightSwipe = distance < -threshold;

        if (isLeftSwipe && onSwipeLeft) {
            onSwipeLeft();
        }

        if (isRightSwipe && onSwipeRight) {
            onSwipeRight();
        }

        setIsSwiping(false);
    };

    return (
        <div
            ref={elementRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={className}
        >
            {children}
        </div>
    );
}
