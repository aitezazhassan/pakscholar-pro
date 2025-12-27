'use client';

import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);

            // Don't show if already dismissed
            const dismissed = localStorage.getItem('pwa-install-dismissed');
            if (!dismissed) {
                setShowPrompt(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShowPrompt(false);
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        localStorage.setItem('pwa-install-dismissed', 'true');
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-2xl p-4 z-50 animate-slide-up">
            <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
                <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                    <Download className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold mb-1">Install PakScholar Pro</h3>
                    <p className="text-sm text-emerald-50 mb-3">
                        Get quick access and work offline. Install our app for the best experience!
                    </p>
                    <button
                        onClick={handleInstall}
                        className="w-full bg-white text-emerald-700 font-semibold py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                        Install App
                    </button>
                </div>
            </div>
        </div>
    );
}
