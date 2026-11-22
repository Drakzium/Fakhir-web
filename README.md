# Fakhir.dev — Personal Developer Portfolio

Cinematic personal portfolio for Fakhir — web, software, AI exploration, bots, Discord, and Roblox.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Editable content

Update these files instead of hunting through components:

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Name, hero copy, about, philosophy, stats |
| `src/data/contact.ts` | Email, WhatsApp, Discord |
| `src/data/socials.ts` | Social links (`enabled: true` + real URL to show) |
| `src/data/projects.ts` | Projects, filters, live/GitHub URLs |
| `src/data/skills.ts` | Toolkit cards |
| `src/data/capabilities.ts` | What I Build cards |
| `src/data/aiLab.ts` | AI Lab topics |
| `src/data/navigation.ts` | Nav anchors |

## Notes

- Contact form validates locally, then opens a `mailto:` draft (no fake success).
- Unconfigured socials stay hidden until you set `enabled: true` and a real `href`.
- Custom cursor is desktop-only and respects `prefers-reduced-motion`.
