# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 14 (App Router) landing page for TruVis Tech MVP development services. No backend, database, or external services required.

### Key commands

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Prod server | `npm run start` (requires build first) |

### Notes

- There are no automated tests configured in this repo. Lint (`next lint`) is the only code-quality check.
- The single ESLint warning about custom fonts in `app/layout.tsx` is pre-existing and expected (Google Fonts loaded via `<link>` in the App Router layout).
- The contact/briefing form is client-side only; there is no backend handler — form submission does not send data anywhere.
