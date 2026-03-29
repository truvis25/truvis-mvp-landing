'use client'

import { FormEvent, useEffect, useState } from 'react'

export default function BriefingModal() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onClose = () => setSubmitted(false)
    document.addEventListener('briefing:reset', onClose)
    return () => document.removeEventListener('briefing:reset', onClose)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
  }

  return (
    <div className="modal-overlay" id="modal" aria-hidden="true">
      <div className="modal-panel">
        <button
          className="modal-close"
          type="button"
          data-close-modal
          aria-label="Close modal"
          onClick={handleReset}
        >
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 6-12 12" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </button>
        <div id="form-content" style={{ display: submitted ? 'none' : 'block' }}>
          <span className="section-eyebrow">TRUVIS TECH · BRIEFING REQUEST</span>
          <h3 className="font-montserrat font-bold text-[28px] text-navy mb-2">
            Schedule a 30-minute briefing
          </h3>
          <p className="text-[14px] text-slate-500 mb-6">We confirm within 2 business days.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="modal-label" htmlFor="modal-name">
                Full name
              </label>
              <input className="modal-input" id="modal-name" type="text" placeholder="Your name" required />
            </div>
            <div>
              <label className="modal-label" htmlFor="modal-email">
                Email address
              </label>
              <input
                className="modal-input"
                id="modal-email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="modal-label" htmlFor="modal-company">
                Company name
              </label>
              <input className="modal-input" id="modal-company" type="text" placeholder="Your company" />
            </div>
            <div>
              <label className="modal-label" htmlFor="modal-build">
                What are you building?
              </label>
              <textarea
                className="modal-input min-h-[110px] resize-y"
                id="modal-build"
                placeholder="Briefly describe your idea..."
              />
            </div>
            <button type="submit" className="modal-submit">
              Send Request →
            </button>
          </form>
        </div>
        <div id="form-success" style={{ display: submitted ? 'block' : 'none' }}>
          <div className="success-icon mb-4" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="font-montserrat font-bold text-[28px] text-navy mb-2">Request received.</h3>
          <p className="text-[14px] text-slate-500">We will be in touch within 2 business days.</p>
        </div>
      </div>
    </div>
  )
}
