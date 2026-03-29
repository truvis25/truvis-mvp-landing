const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-28'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'culu3ldn'

export {apiVersion, dataset, projectId}
