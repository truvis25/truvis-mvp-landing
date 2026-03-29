import './globals.css'
import Script from 'next/script'

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
        <Script
          id="hubspot-forms-v2"
          strategy="afterInteractive"
          src="https://js-eu1.hsforms.net/forms/embed/v2.js"
        />
        {children}
      </body>
    </html>
  )
}
