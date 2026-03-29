import type { FooterContent } from '@/lib/landing-page/types'

interface FooterProps {
  content: FooterContent
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-charcoal text-white/50 py-8 px-8 text-center text-[13px]">
      <strong className="text-white/80">{content.companyName}</strong>
      {' '}{content.tagline}
      &nbsp;·&nbsp;
      {content.motto}
      &nbsp;·&nbsp;
      © {new Date().getFullYear()} {content.copyrightPrefix}
    </footer>
  )
}
