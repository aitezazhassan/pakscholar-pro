import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="text-center">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-oxford-100">
                    <FileQuestion className="h-12 w-12 text-oxford-900" />
                </div>
                <h1 className="mb-4 font-playfair text-6xl font-bold text-slate-900">
                    404
                </h1>
                <h2 className="mb-4 text-2xl font-semibold text-slate-700">
                    Page Not Found
                </h2>
                <p className="mb-8 text-slate-600">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <Button variant="primary" size="large">
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
