import GoogleAnalytics from '@/utils/GoogleAnalytics'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mivi Beauty House - Beauty Products and Services",
  viewport: "width=device-width, initial-scale=1.0",
  description: "Mivi Beauty House offers a wide range of beauty products and services. Visit us for high-quality beauty products and professional beauty services.",
  keywords: "Mivi Beauty House, beauty products, beauty services, high-quality, professional",
  author: "Mivi Beauty House",
  robots: "index, follow",
  "googlebot": "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
