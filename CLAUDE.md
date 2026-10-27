# CLAUDE.md — TonyCloses.com

Single-page Astro 5 static site for Tony Long II, a remote high-ticket closer (warm-lead, commission-only, marketing/SaaS founders). Hosted on Cloudflare Pages at https://tonycloses.com. The immediate goal of the page is to get a founder to book a 15-minute call; the long-term goal is to carry Tony up to $10–20K/month closing for marketing and AI-integration founders (see section 0). Treat every change as something a stranger will judge Tony on.

---

## 0. Purpose: why this site exists

This site is Tony's launchpad. It exists to get him **started** (first closer gig, first commissions, first real results) and then **climb** to **$10–20K/month closing for marketing founders and AI-integration founders**. That income is the dream this build serves. Every decision should be judged by one question: *does this make it more likely a founder in those niches books a call, trusts Tony, and hires him?*

**The climb (use this to prioritize work):**

| Stage | Goal | What the site needs to do |
|---|---|---|
| 1. Start | Land the first commission-only gig; close the first deals | Convert warm outreach into booked calls. Be instantly credible and low-risk to hire |
| 2. Prove | Build a real record of closed deals | Make room for real evidence: actual testimonials, Loom call breakdown, deal counts Tony can back up |
| 3. Specialize | Own marketing founders and AI-integration founders | Sharpen positioning and language for those buyers; consider niche landing pages once there is proof |
| 4. Scale | $10–20K/month from 2+ clients, higher-ticket offers, better commission terms | Show a track record that lets Tony negotiate better splits, retainers, and bigger offers |

**How to apply this:**
- Default to changes that increase booked calls and employer trust: clearer offer, faster read, stronger proof, less friction, fast mobile load.
- Build things so they can grow with Tony. Add proof as it becomes real, keep the structure flexible (data in `site.ts`, sections as separate components), and avoid hacks that would need ripping out at Stage 2 or 3.
- Target buyers are founders of marketing agencies/businesses and founders integrating AI into their products or services. When Tony asks for copy or new pages, write for them: their pain is leads that don't close, a founder stuck on sales calls, and revenue stuck behind the founder's own time. The current page copy says marketing/SaaS; do not change the niche wording unless Tony tells you to.
- The $10–20K/month figure is Tony's **private goal**. It never appears on the site as a claim or promise.
- Suggest next-stage upgrades when they are genuinely useful (testimonial section once a real quote exists, Loom embed once there's a link, a niche page for AI-integration founders, a simple case-study page after real deals close). Propose them in one line and wait for Tony's yes. Don't build ahead of real proof.
- Credibility is the asset. A fake or stretched claim that gets caught can end a gig. Growth has to come from real results added over time (see section 4).

---

## 1. Git workflow (non-negotiable)

**After every completed update: build, commit, push. Do not wait to be asked.**

1. Run `npm run build`. If it fails, fix it. Never commit a broken build.
2. `git status` and `git diff --stat`. Read what you're about to commit.
3. Stage only intended files: `git add <paths>` (use `git add -A` only after confirming nothing unwanted is in the diff).
4. Commit with a Conventional Commit message that says what changed and why:
   - `feat: add testimonial section`
   - `fix: correct response-time font size`
   - `content: update FAQ answer on commission`
   - `style: tighten hero spacing on mobile`
   - `chore: bump astro`
5. `git push`. If the branch has no upstream: `git push -u origin HEAD`.
6. Report back in 2-3 lines: commit hash, what changed, whether the push succeeded.

Rules:
- One logical change per commit. Don't bundle unrelated edits.
- Never force push (`--force`, `--force-with-lease`) and never rewrite pushed history unless Tony explicitly says to.
- Work on `main` unless Tony says otherwise. Cloudflare Pages auto-deploys `main`, so a push is a live deploy. This is why the build must pass first.
- If there is no git remote, or push is rejected (auth, non-fast-forward), stop and tell Tony exactly what happened. Do not improvise around it.
- Never commit: `node_modules/`, `dist/`, `.astro/`, `.env*`, API keys, tokens, or anything personal that isn't already on the public page.
- If you are about to commit something outside the scope of what Tony asked, stop and ask.

---

## 2. Project map

```
src/data/site.ts          ← ALL copy lives here (hero, stats, FAQ, terms, socials, booking link, meta)
src/pages/index.astro     ← page assembly, section order
src/layouts/Layout.astro  ← <head>, SEO, Open Graph, Twitter card, canonical
src/components/*.astro    ← one component per section, scoped styles inside each
src/styles/global.css     ← design tokens, base, shared .btn / section styles
src/assets/               ← hero.jpg, headshot.jpg (optimized by astro:assets)
public/og.jpg             ← share card, must stay exactly 1200×630
public/favicon.svg
public/_headers           ← Cloudflare cache rules
```

Commands: `npm install`, `npm run dev` (localhost:4321), `npm run build` (output `dist/`), `npm run preview`.
Node 22 (see `.node-version`).

---

## 3. How to treat this build

**Copy is data, not code.** To change text, edit `src/data/site.ts`. Do not hardcode copy into components. If a new section needs copy, add it to `site.ts` first, then render it.

**Preserve the design.** Dark theme, tokens in `:root` of `global.css`:
`--bg #1A1D1F`, `--bg-raised #212427`, `--text #F2EFE9`, `--text-dim #9A9691`, `--accent #2FBF71`, `--line #33373A`.
- Use the tokens. Never introduce new hex colors without asking.
- Content column is 760px max (`.wrap`). System font stack. No new font files, no CSS frameworks, no UI libraries.
- Mobile breakpoint is 600px. Every change must be checked at ~375px and at desktop width.
- Keep it fast: static HTML, no client-side JS unless truly required. Avoid adding dependencies. Ask first.

**Components.** Scoped `<style>` in each component. Use `:global()` only for Astro `<Image>` output. Keep section order in `index.astro` intentional: banner → hero → track record → how I work → background → about → book CTA → terms → FAQ → footer.

**Images.** Always use `astro:assets` `<Image>` for photos in `src/assets/`. The hero is a 16:9 crop on desktop and 4:5 on mobile with `object-position: top`. Don't change that without checking the face and phone stay in frame. `public/og.jpg` must remain 1200×630 and be referenced by absolute URL (`https://tonycloses.com/og.jpg`).

**SEO and sharing.** Don't remove or break: `<title>`, meta description, canonical, Open Graph, Twitter `summary_large_image`, favicon. If you touch `Layout.astro`, verify these still render in `dist/index.html`.

**Accessibility.** Keep `alt` text on images, `aria-label` on icon-only links, visible focus states, semantic headings (one `h1`), and FAQ as native `<details>/<summary>`.

---

## 4. Hard content rules (do NOT change without Tony's explicit instruction)

These were decided deliberately by Tony. Do not "fix," soften, round, or second-guess them while editing something else:

- The sales and results figures on the page (track record stats, bio, FAQ). Leave them exactly as written in `site.ts`.
- Working hours: **8am–1pm ET**. Do not reintroduce "EST/PST coverage" anywhere, including meta tags.
- Positioning: American-born, native accent, US number, working US hours, based in Cebu.
- The booking link is `https://cal.com/tony-closes/15min`. Booking is a plain link button. No embedded calendar.
- Contact email is `book@tonycloses.com`.
- This is a **closer site only**. Do not mention or link ExpatBuildr services, consulting, website building, digital products, or trading. The social links currently point to ExpatBuildr handles. That's intentional; don't change them without being asked.
- **Do not invent proof.** No fake testimonials, logos, client names, screenshots, numbers, or Loom videos. If a section needs real input from Tony (Abesi's exact quote + permission, Loom link), leave it out and tell Tony what's missing. No hidden placeholder text in the page source either.

---

## 5. Before you call anything "done"

- [ ] `npm run build` passes with no errors
- [ ] `dist/index.html` exists and the page text matches intent
- [ ] Layout checked at mobile (~375px) and desktop
- [ ] No placeholder text, lorem ipsum, TODOs, or "example.com" in the output
- [ ] Meta/OG/canonical tags still present
- [ ] Change helps get a founder to book a call or trust Tony more (section 0)
- [ ] Changes committed and pushed (section 1)

---

## 6. How to communicate with Tony

- Be direct and brief. Say what you changed and what to look at. No long recaps.
- If a request would hurt conversions, hurt credibility, or break something above, say so in one or two lines and then do what he decides. He makes the call.
- If something is ambiguous and cheap to redo, make the best call and flag it. If it's ambiguous and risky (deleting, restructuring, new dependencies, anything affecting the live deploy), ask first.
- When he pastes a change list, do it in the order given and confirm each item.
- Deploying to Cloudflare Pages happens automatically on push to `main`. Remind him of that if a change is risky.
