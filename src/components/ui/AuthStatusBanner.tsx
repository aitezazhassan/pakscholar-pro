'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function AuthStatusBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [missingKeys, setMissingKeys] = useState(false);

    useEffect(() => {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!url || !key || url === '' || key === '') {
            setMissingKeys(true);
            setIsVisible(true);
        }
    }, []);

    if (!isVisible || !missingKeys) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-8 md:max-w-md animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl shadow-2xl shadow-amber-900/10 backdrop-blur-sm border border-amber-200">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider">System Configuration Required</h3>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-amber-400 hover:text-amber-600 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-2 text-sm text-amber-700 leading-relaxed">
                            <p>
                                The authentication service is currently in <strong>Safe Mode</strong> because the Supabase Environment Variables are missing in Vercel.
                            </p>
                            <p className="mt-3 font-semibold underline">
                                Administrator Action Required:
                            </p>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-xs">
                                <li>Add <code>NEXT_PUBLIC_SUPABASE_URL</code></li>
                                <li>Add <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
                                <li>Redeploy the application</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
