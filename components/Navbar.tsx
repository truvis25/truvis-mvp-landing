'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { NavbarContent } from '@/lib/landing-page/types'

interface NavbarProps {
  content: NavbarContent
}

export default function Navbar({ content }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeCta, setActiveCta] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const heroBtn = document.querySelector('.hero-cta')
    const navBtn = document.querySelector('.nav-cta')
    if (!heroBtn || !navBtn) {
      return
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setActiveCta(!entry.isIntersecting)
      },
      { threshold: 0 },
    )
    heroObserver.observe(heroBtn)
    return () => heroObserver.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'scrolled bg-white/95 backdrop-blur-md border-b border-divider'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container w-full flex items-center justify-between">
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
          <button
            type="button"
            data-open-modal
            data-cta="nav"
            className={`btn nav-cta ${activeCta ? 'active' : ''}`}
          >
            {content.ctaText}
          </button>
        </div>
      </div>
    </nav>
  )
}
