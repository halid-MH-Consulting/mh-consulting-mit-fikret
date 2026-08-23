import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'MH Consulting — Influencer Marketing for Travel Brands | Dubai',
  description:
    'MH Consulting is a Dubai-based influencer marketing agency turning creators into long-term brand partners. Specialists in travel, tourism, hotels, airlines, eSIM, VPN and travel tech. Working globally.',
  generator: 'v0.app',
  keywords: [
    'influencer marketing',
    'travel marketing',
    'creator agency',
    'Dubai agency',
    'brand partnerships',
    'tourism marketing',
  ],
  openGraph: {
    title: 'MH Consulting — Influencer Marketing for Travel Brands',
    description:
      'Dubai-based influencer marketing agency turning creators into long-term brand partners.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
