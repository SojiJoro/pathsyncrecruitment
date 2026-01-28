import '../app/globals.css';
import { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pathsyncrecruitment.com'),
  title: {
    default: 'PathSync Recruitment | Neurodivergent Employment Platform',
    template: '%s | PathSync Recruitment',
  },
  description:
    'Transforming employment for neurodivergent talent through AI-powered matching and human-led support. Specialist recruitment for autism, ADHD, dyslexia, and more.',
  keywords: [
    'neurodivergent recruitment',
    'autism employment',
    'ADHD job support',
    'dyslexia workplace',
    'neuroinclusive hiring',
    'disability confident employer',
    'neurodiversity recruitment agency UK',
    'autistic job placement',
  ],
  authors: [{ name: 'PathSync Recruitment Ltd' }],
  creator: 'PathSync Recruitment Ltd',
  publisher: 'PathSync Recruitment Ltd',
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
    siteName: 'PathSync Recruitment',
    title: 'PathSync Recruitment | Neurodivergent Employment Platform',
    description:
      'Transforming employment for neurodivergent talent through AI-powered matching and human-led support.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PathSync Recruitment - Transforming Neurodivergent Employment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pathsyncrecruit',
    creator: '@pathsyncrecruit',
    title: 'PathSync Recruitment | Neurodivergent Employment Platform',
    description:
      'Transforming employment for neurodivergent talent through AI-powered matching and human-led support.',
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
