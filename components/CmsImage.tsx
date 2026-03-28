import Image from 'next/image'
import type {CmsImageField} from '@/lib/landing-page/types'
import {urlForImage} from '@/lib/sanity/image'

interface CmsImageProps {
  value?: CmsImageField
  width: number
  height: number
  className?: string
  sizes?: string
}

export default function CmsImage({value, width, height, className, sizes}: CmsImageProps) {
  const src = value?.image ? urlForImage(value.image) : undefined

  if (!src) {
    return null
  }

  return (
    <Image
      src={src}
      alt={value?.alt || ''}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  )
}
