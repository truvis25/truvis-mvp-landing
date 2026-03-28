import {projectId} from '@/sanity/env'
import StudioClient from './StudioClient'

export default function StudioPage() {
  if (!projectId) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '600px',
          padding: '2rem',
          border: '1px solid #e5e5e5',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Sanity Studio Setup Required
          </h1>
          <p style={{marginBottom: '1rem', color: '#666'}}>
            The Sanity Studio is not yet configured. To use the CMS, you need to set up your Sanity project ID.
          </p>
          <div style={{
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Steps to configure:</p>
            <ol style={{paddingLeft: '1.5rem', lineHeight: '1.6'}}>
              <li>Create a Sanity project at <a href="https://www.sanity.io/manage" target="_blank" rel="noreferrer" style={{color: '#0066cc'}}>sanity.io/manage</a></li>
              <li>Copy your project ID from the project settings</li>
              <li>Add it to your environment:
                <pre style={{
                  marginTop: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  overflow: 'auto'
                }}>
                  NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
                </pre>
              </li>
              <li>Restart your development server</li>
            </ol>
          </div>
          <p style={{fontSize: '0.875rem', color: '#999'}}>
            Need help? Check the <a href="https://www.sanity.io/docs" target="_blank" rel="noreferrer" style={{color: '#0066cc'}}>Sanity documentation</a>
          </p>
        </div>
      </div>
    )
  }

  return <StudioClient />
}
