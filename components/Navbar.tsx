'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { NavbarContent } from '@/lib/landing-page/types'

interface NavbarProps {
  content: NavbarContent
}

export default function Navbar({ content }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 h-[68px] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-divider'
          : 'bg-transparent'
      }`}
    >
      <Link
        href="#"
        className={`font-montserrat font-extrabold text-[17px] tracking-tight transition-colors duration-300 ${
          scrolled ? 'text-navy' : 'text-white'
        }`}
      >
        {content.brandName}
      </Link>

      <div className="flex items-center gap-8">
        {content.links.map((link) => (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            className={`hidden md:block text-sm font-medium transition-colors duration-200 hover:text-azure ${
              scrolled ? 'text-slate-500' : 'text-white/70'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a href={content.ctaHref} className="btn-primary">
          {content.ctaText}
        </a>
      </div>
    </nav>
  )
}
