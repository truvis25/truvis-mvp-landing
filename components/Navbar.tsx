'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
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
        TruVis Tech
      </Link>

      <div className="flex items-center gap-8">
        <Link
          href="#process"
          className={`hidden md:block text-sm font-medium transition-colors duration-200 hover:text-azure ${
            scrolled ? 'text-slate-500' : 'text-white/70'
          }`}
        >
          How It Works
        </Link>
        <Link
          href="#team"
          className={`hidden md:block text-sm font-medium transition-colors duration-200 hover:text-azure ${
            scrolled ? 'text-slate-500' : 'text-white/70'
          }`}
        >
          Team
        </Link>
        <Link
          href="#portfolio"
          className={`hidden md:block text-sm font-medium transition-colors duration-200 hover:text-azure ${
            scrolled ? 'text-slate-500' : 'text-white/70'
          }`}
        >
          Portfolio
        </Link>
        <a href="#contact" className="btn-primary">
          Schedule a Briefing
        </a>
      </div>
    </nav>
  )
}
