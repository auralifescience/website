import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Aura Life Science | Cyanobacteria Biomanufacturing Platform',
  description: 'Revolutionary cyanobacteria-based biomanufacturing platform achieving 30-50x protein production increases with carbon-negative manufacturing.',
  keywords: 'biomanufacturing, cyanobacteria, sustainable manufacturing, protein production, carbon negative, biotech',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Aura Life Science',
    description: 'Revolutionary cyanobacteria biomanufacturing platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
