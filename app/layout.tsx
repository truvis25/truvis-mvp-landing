import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'MVP in 6 Weeks | TruVis Tech',
  description:
    'Full-stack MVP development in 6 weeks. Fixed price. Production-ready. For startups in regulated sectors: corporate structure and regulatory pathway in parallel. UAE, UK, US, Africa.',
  openGraph: {
    title: 'MVP in 6 Weeks | TruVis Tech',
    description: 'Full-stack MVP development in 6 weeks. Fixed price. Production-ready.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-inter text-charcoal bg-white`}>
        {children}
      </body>
    </html>
  )
}
