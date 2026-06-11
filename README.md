# 🏴‍☠️ Prompt Pirates

A small crew of AI builders comparing notes and shipping software. This repo is the crew's home — a simple, zero-infra static site.

## Structure

| File | What it is |
|------|------------|
| `index.html` | Landing page — intro, meeting-minutes index, "request to board" |
| `meetings/voyage-01.html` | A meeting written up as a short **white paper**, ending in a **Treasure** box of key lessons |
| `assets/style.css` | Clean, readable design system (paper + navy/brass, ~70ch reading column) |

## Add a new meeting

1. Copy `meetings/voyage-01.html` to `meetings/voyage-02.html`.
2. Update the header (`Voyage II`, date, attendees), the numbered sections, and the **Treasure** box (aim for ~3–5 distilled lessons).
3. Add a row to the `.minutes` list in `index.html` pointing to the new page.

## Run locally

Plain HTML — open `index.html`, or serve it:

```bash
npx serve .        # or: python -m http.server
```

## Deploy (Vercel)

No build step. Import the repo in Vercel and ship; every push auto-deploys.

---

*Dead men tell no tales; living ones write skills.* ⚓
