import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KENZ Knot — Heritage, tied by hand',
  description:
    'Handmade Korean Maedeup knots with Egyptian heritage-inspired details. Bracelets, charms and ornaments from EGP 150 to 450, made to order in Egypt.',
  generator: 'v0.app',
  keywords: [
    'KENZ',
    'maedeup',
    'Korean knot',
    'handmade jewellery Egypt',
    'knot bracelet',
    'bag charm',
    'norigae',
  ],
  openGraph: {
    title: 'KENZ Knot — Heritage, tied by hand',
    description:
      'Where Korean Maedeup meets Egyptian heritage-inspired details. Handmade pieces from EGP 150 to 450.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/kenz-favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/kenz-favicon.ico', sizes: 'any' },
    ],
    apple: '/kenz-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf7ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
