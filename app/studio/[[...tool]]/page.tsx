import {NextStudio} from 'next-sanity/studio'
import {studioConfig} from '@/studio/config'

export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}
