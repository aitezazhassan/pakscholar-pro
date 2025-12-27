import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono, Noto_Nastaliq_Urdu } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import AuthStatusBanner from '@/components/ui/AuthStatusBanner';
import { PWAInstaller } from '@/components/pwa/PWAInstaller';
import { InstallPrompt } from '@/components/pwa/InstallPrompt';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  variable: '--font-noto-nastaliq',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pakscholar.pro'),
  title: {
    default: 'PakScholar Pro | PPSC Exam Preparation',
    template: '%s | PakScholar Pro',
  },
  description:
    'Official PPSC syllabus-aligned exam preparation. Current Affairs, Mathematics, General Knowledge, English, and Past Papers for Punjab Public Service Commission.',
  keywords: ['PPSC', 'Punjab Public Service Commission', 'Current Affairs', 'Mathematics', 'General Knowledge', 'English', 'Past Papers', 'Pakistan Geography', 'Exam Preparation', 'PPSC Syllabus'],
  authors: [{ name: 'PakScholar Pro Team' }],
  creator: 'PakScholar Pro',
  publisher: 'PakScholar Pro',
  manifest: '/manifest.json',
  themeColor: '#059669',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PakScholar Pro',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'PakScholar Pro',
    title: 'PakScholar Pro | PPSC Exam Preparation',
    description:
      'Official PPSC syllabus-aligned exam preparation for Punjab Public Service Commission.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PakScholar Pro | PPSC Prep',
    description:
      'Official PPSC exam preparation platform',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoNastaliq.variable}`}
    >
      <body className="font-sans antialiased">
        <PWAInstaller />
        <Toaster position="top-right" />
        <AuthStatusBanner />
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
