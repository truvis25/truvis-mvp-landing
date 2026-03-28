import {createClient} from '@sanity/client'
import {apiVersion, dataset, projectId} from '@/sanity/env'

export const hasSanityConfig = Boolean(projectId)

export const sanityClient = hasSanityConfig
  ? createClient({
      apiVersion,
      dataset,
      projectId: projectId as string,
      useCdn: true,
      perspective: 'published',
    })
  : null
