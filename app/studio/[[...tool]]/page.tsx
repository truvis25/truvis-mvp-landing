 'use client'

import {NextStudio} from 'next-sanity/studio/client-component'
import {studioConfig} from '@/studio/config'

export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}
