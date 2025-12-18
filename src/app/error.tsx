'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="max-w-md text-center">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                    <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
                <h2 className="mb-4 font-playfair text-3xl font-bold text-slate-900">
                    Something Went Wrong
                </h2>
                <p className="mb-8 text-slate-600">
                    We apologize for the inconvenience. Please try again or return to the
                    homepage.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button variant="primary" size="large" onClick={reset}>
                        Try Again
                    </Button>
                    <Button variant="outline" size="large" onClick={() => (window.location.href = '/')}>
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
