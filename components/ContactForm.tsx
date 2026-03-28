'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  build: string
}

interface ContactFormProps {
  dark?: boolean
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    build: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('TruVis Tech — Briefing request submitted:', formData)
    setSubmitted(true)
  }

  const labelClass = `block text-sm font-semibold mb-1.5 ${dark ? 'text-white/80' : 'text-charcoal'}`
  const inputClass = `w-full px-4 py-3 rounded-md font-inter text-[14.5px] text-charcoal bg-white border border-divider focus:outline-none focus:border-azure transition-colors placeholder:text-slate-400`

  if (submitted) {
    return (
      <div className="text-center py-10 px-4">
        <div className="text-5xl mb-5">✓</div>
        <h3 className={`font-montserrat font-bold text-2xl mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
          Request received.
        </h3>
        <p className={dark ? 'text-white/60 leading-relaxed' : 'text-slate-500 leading-relaxed'}>
          We&apos;ll be in touch within 2 business days to confirm a time.
          <br />
          If you have urgent questions, reach us at{' '}
          <strong className={dark ? 'text-white/80' : 'text-navy'}>truvisintl.com</strong>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="build" className={labelClass}>
          What are you building?
        </label>
        <textarea
          id="build"
          name="build"
          value={formData.build}
          onChange={handleChange}
          placeholder="Briefly describe your product or idea…"
          rows={3}
          className={`${inputClass} resize-y min-h-[80px]`}
        />
      </div>

      <button
        type="submit"
        className="btn-primary btn-lg w-full justify-center mt-2"
      >
        Send Briefing Request →
      </button>

      <p className="text-xs text-slate-400 text-center leading-relaxed">
        No commitment. We&apos;ll confirm within 2 business days.
      </p>
    </form>
  )
}
