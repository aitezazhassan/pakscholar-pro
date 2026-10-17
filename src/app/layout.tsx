import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import AuthStatusBanner from '@/components/ui/AuthStatusBanner';
import { PWAInstaller } from '@/components/pwa/PWAInstaller';
import { InstallPrompt } from '@/components/pwa/InstallPrompt';
import StructuredData from '@/components/seo/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pakscholar-pro.vercel.app'),
  title: {
    default: 'PakScholar Pro - Pakistan\'s #1 Free PPSC Exam Preparation Platform',
    template: '%s | PakScholar Pro',
  },
  description:
    'Free PPSC exam preparation with 200+ MCQs, mock exams, and study material. Join 12,547 students preparing for PPSC Lecturer, Assistant Director, Tehsildar, and other competitive exams in Pakistan. 100% free, no premium walls.',
  keywords: [
    'PPSC exam preparation',
    'PPSC MCQs',
    'PPSC mock test',
    'Punjab Public Service Commission',
    'PPSC Lecturer exam',
    'PPSC Assistant Director',
    'Pakistan competitive exams',
    'free PPSC preparation',
    'PPSC past papers',
    'PPSC syllabus',
    'General Knowledge MCQs',
    'Geography MCQs Pakistan',
    'Computer Science MCQs',
    'Mathematics MCQs',
    'English MCQs PPSC',
    'Current Affairs Pakistan',
    'PPSC study material',
    'PPSC exam pattern',
    'PPSC online test',
    'PPSC practice questions'
  ],
  authors: [{ name: 'Aitezaz Hassan', url: 'https://pakscholar-pro.vercel.app' }],
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
    url: 'https://pakscholar-pro.vercel.app',
    siteName: 'PakScholar Pro',
    title: 'PakScholar Pro - Free PPSC Exam Preparation Platform',
    description:
      'Join 12,547 students preparing for PPSC exams with 200+ free MCQs, mock exams, and comprehensive study material. No premium walls, completely free.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PakScholar Pro - Pakistan\'s #1 PPSC Exam Preparation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PakScholar Pro - Free PPSC Exam Prep',
    description:
      'Free PPSC exam preparation with 200+ MCQs and mock exams. Join 12,547 students.',
    images: ['/og-image.png'],
    creator: '@pakscholarpro',
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
  alternates: {
    canonical: 'https://pakscholar-pro.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="font-sans antialiased">
        <StructuredData />
        <PWAInstaller />
        <Toaster position="top-right" />
        <AuthStatusBanner />
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
