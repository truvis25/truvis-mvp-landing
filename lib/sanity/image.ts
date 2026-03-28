import createImageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url'
import {projectId, dataset} from '@/sanity/env'

const builder =
  projectId && dataset
    ? createImageUrlBuilder({
        projectId,
        dataset,
      })
    : null

export function urlForImage(source?: SanityImageSource): string | undefined {
  if (!source || !builder) {
    return undefined
  }

  return builder.image(source).auto('format').fit('max').url()
}
