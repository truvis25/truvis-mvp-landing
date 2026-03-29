import 'server-only'
import {createClient} from '@sanity/client'
import {apiVersion, dataset, projectId} from '@/studio/env'
import {token} from '@/studio/env.server'

export const sanityServerClient = projectId
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      token,
      useCdn: false,
      perspective: 'published',
    })
  : null
