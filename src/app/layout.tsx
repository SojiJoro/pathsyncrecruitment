import '../app/globals.css';
import { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pathsyncrecruitment.com'),
  title: {
    default: 'PathSync | AI-Powered Cognitive Strengths Assessment Platform',
    template: '%s | PathSync',
  },
  description:
    'The cognitive strengths assessment platform built for neurodivergent-inclusive hiring. Help employers discover exceptional talent traditional recruitment misses.',
  keywords: [
    'cognitive assessment platform',
    'neurodivergent hiring',
    'neuroinclusive recruitment',
    'strengths-based assessment',
    'autism employment technology',
    'ADHD hiring solutions',
    'HR assessment tools',
    'recruitment technology',
    'ATS integration',
    'inclusive hiring platform',
  ],
  authors: [{ name: 'PathSync' }],
  creator: 'PathSync',
  publisher: 'PathSync',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.pathsyncrecruitment.com',
    siteName: 'PathSync',
    title: 'PathSync | AI-Powered Cognitive Strengths Assessment Platform',
    description:
      'The cognitive strengths assessment platform built for neurodivergent-inclusive hiring. Discover exceptional talent traditional recruitment misses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PathSync - Cognitive Strengths Assessment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pathsync',
    creator: '@pathsync',
    title: 'PathSync | AI-Powered Cognitive Strengths Assessment Platform',
    description:
      'The cognitive strengths assessment platform built for neurodivergent-inclusive hiring.',
    images: ['/twitter-card.png'],
  },
  alternates: {
    canonical: 'https://www.pathsyncrecruitment.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4A90E2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-size-normal">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AccessibilityProvider>
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>

          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
