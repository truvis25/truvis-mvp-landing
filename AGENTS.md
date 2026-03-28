# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14 static landing page** (TruVis Tech MVP Development) with no backend, no database, and no external service dependencies.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at `http://localhost:3000`) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Notes

- There are no automated tests configured (no test script in `package.json`).
- The only interactive element is a `ContactForm` component that logs submissions to `console.log`; there is no backend API.
- Lint produces one expected warning about custom fonts in `app/layout.tsx` (`@next/next/no-page-custom-font`); this is pre-existing and not a blocker.
- No environment variables or `.env` files are required.
