# 🏴‍☠️ Prompt Pirates

A scrappy crew of AI builders comparing notes, sharing loot, and shipping software at sea.

This repo is the crew's home base: a fun, **zero-infra static site** where people read the ship's log, browse the loot, meet the crew, and request to board.

## What's here

| File | What it is |
|------|------------|
| `index.html` | The Deck — landing page, crew bios, "Sign the Articles" join form |
| `log.html` | The Ship's Log — each voyage (meeting) distilled into takeaways + bounties |
| `treasure.html` | The Loot — tools, stacks, tactics, debates, reading list |
| `assets/style.css` | Pirate-themed design system (navy / brass / parchment) |
| `assets/main.js` | Join form → opens a pre-filled email (no backend) |

## Run it locally

It's plain HTML — just open `index.html` in a browser. Or serve it:

```bash
npx serve .        # or: python -m http.server
```

## Deploy (Vercel, ~1 min)

No build step. Push to GitHub, import the repo in Vercel, ship. Auto-deploys on every push.

```bash
git init && git add . && git commit -m "Maiden voyage"
# create a repo on GitHub, then:
git remote add origin <your-repo-url>
git push -u origin main
```

## Add a new voyage (after each meeting)

1. Drop the new write-up at the top of `log.html` (copy the parchment block, bump the voyage number).
2. Move any durable tools/tactics into `treasure.html` so the playbook compounds.
3. Update the crew cards in `index.html` as the crew grows.

## Make the join form real (optional)

`assets/main.js` currently opens a pre-filled email to the Quartermaster. To collect submissions instead, swap the `mailto:` for a [Formspree](https://formspree.io) endpoint or a Google Form link.

---

*Dead men tell no tales; living ones write skills.* ⚓
