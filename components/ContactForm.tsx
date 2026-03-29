'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'

interface ContactFormProps {
  locationLabel?: string
}

interface HubSpotFormsApi {
  create: (options: {
    portalId: string
    formId: string
    region: string
    target: string
    formInstanceId: string
    cssClass: string
    onFormReady?: () => void
  }) => void
}

interface HubSpotWindow extends Window {
  hbspt?: {
    forms: HubSpotFormsApi
  }
}

const HUBSPOT_PORTAL_ID = '146661053'
const HUBSPOT_FORM_ID = '698de331-798f-4be7-99de-87e7c42938af'
const HUBSPOT_REGION = 'eu1'
const MAX_RETRIES = 40
const RETRY_MS = 150

export default function ContactForm({ locationLabel = 'landing_page' }: ContactFormProps) {
  const baseId = useId()
  const targetId = useMemo(() => `hubspot-form-${baseId.replace(/:/g, '')}`, [baseId])
  const hasCreatedFormRef = useRef(false)
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    if (hasCreatedFormRef.current) {
      return
    }

    const createForm = () => {
      const currentWindow = window as HubSpotWindow
      if (!currentWindow.hbspt?.forms?.create) {
        return false
      }

      currentWindow.hbspt.forms.create({
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        region: HUBSPOT_REGION,
        target: `#${targetId}`,
        formInstanceId: `${locationLabel}-${targetId}`,
        cssClass: 'hubspot-embedded-form',
        onFormReady: () => setLoadState('ready'),
      })

      hasCreatedFormRef.current = true
      return true
    }

    if (createForm()) {
      return
    }

    let retries = 0
    const interval = window.setInterval(() => {
      retries += 1
      if (createForm()) {
        window.clearInterval(interval)
        return
      }

      if (retries >= MAX_RETRIES) {
        window.clearInterval(interval)
        setLoadState('error')
      }
    }, RETRY_MS)

    return () => {
      window.clearInterval(interval)
    }
  }, [locationLabel, targetId])

  return (
    <div className="hubspot-form-wrapper">
      {loadState === 'loading' && (
        <p className="text-sm text-slate-500 mb-4">Loading secure briefing form...</p>
      )}
      {loadState === 'error' && (
        <p className="text-sm text-red-600 mb-4">
          The form failed to load. Please refresh the page and try again.
        </p>
      )}
      <div
        id={targetId}
        className={loadState === 'ready' ? '' : 'min-h-[220px]'}
      />
      <p className="text-xs text-slate-400 text-center leading-relaxed mt-3">
        No commitment. We&apos;ll confirm within 2 business days.
      </p>
    </div>
  )
}
