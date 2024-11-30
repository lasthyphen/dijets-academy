import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { PHProvider } from './providers'
import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { baseUrl, createMetadata } from '@/utils/metadata';
import Chatbot from '@/components/chatbot';

export const metadata = createMetadata({
  title: {
    template: '%s | Dijets Academy',
    default: 'Dijets Academy',
  },

  // area for improvement: add page specific metadata
  description: 'The Learning Platform for the Dijets Ecosystem',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <PHProvider>
        <body className="flex min-h-screen flex-col">
          <RootProvider>{children}</RootProvider>
        </body>
      </PHProvider>
    </html>
  );
}
