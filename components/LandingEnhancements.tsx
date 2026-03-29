'use client'

import { useCallback, useEffect } from 'react'

const SCROLL_MILESTONES = [25, 50, 75, 100]

export default function LandingEnhancements() {
  const resetBriefingModal = useCallback(() => {
    document.dispatchEvent(new Event('briefing:reset'))
  }, [])

  useEffect(() => {
    const modal = document.getElementById('modal')
    if (!modal) {
      return
    }

    const openModal = () => {
      console.log('Modal open')
      modal.classList.add('active')
      modal.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      console.log('Modal close')
      resetBriefingModal()
      modal.classList.remove('active')
      modal.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    const openButtons = document.querySelectorAll<HTMLElement>('[data-open-modal]')
    const closeButtons = document.querySelectorAll<HTMLElement>('[data-close-modal]')

    openButtons.forEach((button) => button.addEventListener('click', openModal))
    closeButtons.forEach((button) => button.addEventListener('click', closeModal))

    const overlayClick = (event: MouseEvent) => {
      if (event.target === modal) {
        closeModal()
      }
    }

    modal.addEventListener('click', overlayClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      openButtons.forEach((button) => button.removeEventListener('click', openModal))
      closeButtons.forEach((button) => button.removeEventListener('click', closeModal))
      modal.removeEventListener('click', overlayClick)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [resetBriefingModal])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const reached = new Set<number>()
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) {
        return
      }
      const percent = Math.min(100, Math.round((window.scrollY / maxScroll) * 100))
      SCROLL_MILESTONES.forEach((milestone) => {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone)
          console.log('Scroll depth:', milestone + '%')
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>('[data-cta]')
    const onClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement
      const placement = target.dataset.cta
      if (placement) {
        console.log('CTA clicked:', placement)
      }
    }

    buttons.forEach((button) => button.addEventListener('click', onClick))
    return () => buttons.forEach((button) => button.removeEventListener('click', onClick))
  }, [])

  return null
}
