# truvis-mvp-landing

Truvis tech - MVP Development

## CMS setup (Sanity)

This project now supports content editing via an embedded Sanity Studio at `/studio`.

### 1) Configure environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to the value in `.env.example`)

If these values are not set, the site falls back to built-in content so it still runs.

### 2) Start the app

```bash
npm run dev
```

Open:

- Landing page: `http://localhost:3000`
- CMS Studio: `http://localhost:3000/studio`

### 3) Create/edit landing content

In Studio, open the **Landing Page** singleton document and edit:

- headlines and paragraphs
- CTA text/links
- pricing content
- proof stats
- team members
- portfolio items
- comparison rows
- process steps
- footer content
- SEO fields
- images and alt text

### Future content models included

The schema also includes starter content types for:

- `blogPost`
- `servicePage`
- `caseStudy`
