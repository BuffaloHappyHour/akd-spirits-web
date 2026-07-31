# AKD Spirits

Website shell for **AKD Spirits Ltd.**, a non-distiller producer (NDP)
whiskey company founded by Derek Accurso, Mike Kelly, and Tony DeYoung.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Pages

- `/` — Home
- `/our-story` — Founders + company story
- `/releases` — Barrel/release ledger (placeholder data, ready for real releases)
- `/contact` — Contact form, posts to `/api/contact`

## Design system

Tokens live in `app/globals.css`:

- **Colors** — deep forest green ground (`--bg`, `--bg-panel`) with a muted
  brass/gold accent (`--gold`, `--gold-bright`) and parchment text (`--cream`).
- **Type** — Fraunces (display serif) for headlines, Source Sans 3 for body
  copy, IBM Plex Mono for eyebrows/labels and the barrel-ledger data.
- **Signature element** — `components/LedgerTag.tsx`, a barrel-tag component
  styled like a warehouse ledger stamp (barrel no., proof, mash bill), used
  on the home page and the Releases page.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying (GitHub → Vercel, same as your other projects)

1. Create a new repo (e.g. under the same GitHub org as your other sites)
   and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial AKD Spirits site shell"
   git branch -M main
   git remote add origin <your-new-repo-url>
   git push -u origin main
   ```

2. In Vercel, "Add New… → Project", import the new repo. Vercel
   auto-detects Next.js — no build config changes needed.
3. Point `akdspirits.com` at the Vercel project under
   Project Settings → Domains.

## Next steps / things left as placeholders

- Release data in `app/releases/page.tsx` and the home page teaser is
  placeholder (`TBD` proof, mash bill, barrel numbers) — update once your
  first barrel is finalized.
- `/api/contact` currently just logs submissions. Wire it up to an email
  provider (you already have a Resend connector available) or your inbox
  of choice before launch.
- No photography yet — the design currently relies on type and the
  ledger-tag motif rather than imagery. Add barrel/warehouse photography
  to the hero and Our Story page when you have it.
- Age verification / responsible drinking gate is not yet implemented;
  add one before this goes live publicly.
