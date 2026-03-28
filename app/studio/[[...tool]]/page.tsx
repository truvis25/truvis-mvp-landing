import StudioClient from './StudioClient'
import {projectId, dataset, apiVersion} from '@/sanity/env'

function MissingConfig() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">Sanity Studio is not configured yet</h1>
        <p className="text-slate-600 mb-4">
          Add your Sanity environment variables in <code>.env.local</code>, then restart{' '}
          <code>npm run dev</code>.
        </p>
        <pre className="bg-slate-900 text-slate-100 text-sm rounded-md p-4 overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=${apiVersion}`}
        </pre>
        <p className="text-sm text-slate-500 mt-4">
          Current values: projectId=
          <code>{projectId || '(missing)'}</code>, dataset=<code>{dataset || '(missing)'}</code>
        </p>
      </div>
    </main>
  )
}

export default function StudioPage() {
  if (!projectId) {
    return <MissingConfig />
  }

  return <StudioClient />
}
