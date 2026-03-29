# truvis-mvp-landing

TruVis Tech MVP landing page (Next.js 14 App Router) with embedded Sanity Studio.

## Routing architecture

- Main landing page: `/`
- Sanity Studio only: `/studio`

The Studio is isolated to `app/studio/[[...tool]]` and configured with `basePath: '/studio'` so it cannot replace the main site root.

## Sanity project

- Project ID: `culu3ldn`
- Dataset: `production`

## Environment variables

Create `.env` in the project root:

- `SANITY_API_TOKEN` (server-side only, do not expose in browser/client code)

Optional public overrides:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` (defaults to `culu3ldn`)
- `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` (defaults to `2026-03-28`)

## Commands

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Start production server: `npm run start`
