import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
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
      <body className={`${montserrat.variable} ${inter.variable} font-inter text-charcoal bg-white`}>
        {children}
      </body>
    </html>
  )
}
