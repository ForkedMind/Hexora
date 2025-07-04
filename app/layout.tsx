import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppProviders } from '@/components/providers/app-providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hexora.io'),
  title: {
    default: 'Hexora - Build. Contribute. Earn.',
    template: '%s | Hexora',
  },
  description: 'Transform your code into real-world impact through Hexora\'s tokenized collaboration engine. Join the future of Web3 community-driven development.',
  keywords: [
    'Web3',
    'DAO',
    'Blockchain',
    'Development',
    'Community',
    'Tokenization',
    'Collaboration',
    'DeFi',
    'Smart Contracts',
    'Open Source',
  ],
  authors: [{ name: 'Hexora Team', url: 'https://hexora.io' }],
  creator: 'Hexora',
  publisher: 'Hexora',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hexora.io',
    siteName: 'Hexora',
    title: 'Hexora - Web3 Community Platform',
    description: 'Transform your code into real-world impact through tokenized collaboration.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hexora Platform - Build. Contribute. Earn.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexora - Build. Contribute. Earn.',
    description: 'Transform your code into real-world impact through tokenized collaboration.',
    images: ['/og-image.jpg'],
    creator: '@hexora_io',
  },
  icons: {
    icon: [
      { 
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><image href="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" width="32" height="32" style="filter: brightness(1.3) contrast(1.2) saturate(1.4) hue-rotate(15deg);"/></svg>', 
        sizes: '32x32', 
        type: 'image/svg+xml' 
      },
      { 
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><image href="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" width="16" height="16" style="filter: brightness(1.3) contrast(1.2) saturate(1.4) hue-rotate(15deg);"/></svg>', 
        sizes: '16x16', 
        type: 'image/svg+xml' 
      },
    ],
    apple: [
      { 
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><image href="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" width="180" height="180" style="filter: brightness(1.3) contrast(1.2) saturate(1.4) hue-rotate(15deg);"/></svg>', 
        sizes: '180x180', 
        type: 'image/svg+xml' 
      },
    ],
    other: [
      { 
        rel: 'mask-icon', 
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><image href="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" width="32" height="32" style="filter: brightness(1.3) contrast(1.2) saturate(1.4) hue-rotate(15deg);"/></svg>', 
        color: '#00FFC6' 
      },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1D37' },
  ],
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.ibb.co" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}