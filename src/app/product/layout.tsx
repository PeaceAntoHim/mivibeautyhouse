import GoogleAnalytics from '@/utils/GoogleAnalytics'
import '../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

  export const metadata = {
    title: "Mivi Beauty House - Produk Kecantikan Terbaik",
    viewport: "width=device-width, initial-scale=1.0",
    description: "Mivi Beauty House menawarkan berbagai produk dan layanan kecantikan terbaik. Kunjungi kami untuk produk kecantikan berkualitas tinggi dan layanan kecantikan profesional.",
    keywords: "Mivi Beauty House, produk kecantikan, layanan kecantikan, berkualitas tinggi, profesional",
    author: "Mivi Beauty House",
    robots: "index, follow",
    googlebot: "index, follow",
    path: "product",
  };

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
