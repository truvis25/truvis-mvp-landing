import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_PORTAL_ID = '146661053'
const HUBSPOT_FORM_ID = '698de331-798f-4be7-99de-87e7c42938af'
const HUBSPOT_REGION = 'eu1'
const HUBSPOT_SUBMIT_URL = `https://api-${HUBSPOT_REGION}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`

interface SubmissionPayload {
  name: string
  email: string
  company?: string
  build?: string
  phone?: string
}

interface HubSpotField {
  name: string
  value: string
}

function splitName(name: string) {
  const trimmed = name.trim()
  if (!trimmed) {
    return { firstName: '', lastName: '' }
  }

  const segments = trimmed.split(/\s+/)
  if (segments.length === 1) {
    return { firstName: segments[0], lastName: '' }
  }

  return {
    firstName: segments.slice(0, -1).join(' '),
    lastName: segments[segments.length - 1],
  }
}

function toHubSpotFields(payload: SubmissionPayload): HubSpotField[] {
  const { firstName, lastName } = splitName(payload.name)
  const fields: HubSpotField[] = [
    { name: 'firstname', value: firstName || payload.name.trim() },
    { name: 'lastname', value: lastName },
    { name: 'email', value: payload.email.trim() },
    { name: 'company', value: payload.company?.trim() || '' },
    { name: 'message', value: payload.build?.trim() || '' },
  ]

  if (payload.phone?.trim()) {
    fields.push({ name: 'phone', value: payload.phone.trim() })
  }

  return fields
}

export async function POST(request: NextRequest) {
  let payload: SubmissionPayload

  try {
    payload = (await request.json()) as SubmissionPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!payload.name?.trim() || !payload.email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const email = payload.email.trim()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const ipAddress =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    undefined

  try {
    const hsResponse = await fetch(HUBSPOT_SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields: toHubSpotFields(payload),
        context: {
          pageUri: request.headers.get('origin') || 'https://truvisintl.com',
          pageName: 'TruVis Tech MVP Landing Page',
          ipAddress,
        },
      }),
      cache: 'no-store',
    })

    if (!hsResponse.ok) {
      const hsErrorText = await hsResponse.text()
      console.error('HubSpot submission failed', hsResponse.status, hsErrorText)
      return NextResponse.json({ error: 'HubSpot submission failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('HubSpot submission error', error)
    return NextResponse.json({ error: 'Unable to submit at this time' }, { status: 502 })
  }
}
