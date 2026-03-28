import type { Metadata } from 'next'
import './globals.css'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter text-charcoal bg-white">
        {children}
      </body>
    </html>
  )
}
