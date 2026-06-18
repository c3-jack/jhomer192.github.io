# Creative personal sites — research for replication

Goal: figure out what makes gracejuan.com great, then catalog comparable sites whose moves we can steal for `jhomer192.github.io` (Astro).

## 1. gracejuan.com — forensic teardown

Hosted at `grace-wj.github.io`, plain HTML/CSS/vanilla JS. No framework, no build step. ~250 lines of CSS and ~170 lines of JS do all the work. The whole thing fits on one screen but feels considered.

### Anatomy

- **Single 46rem column**, centered. Sticky header band, optional sticky-bottom footer (injected by `footer.js` on every page except home).
- **Nav as personal canon**: Home / Projects / Writing / **Design / Reading / Quotes**. The last three are the tell — having Reading and Quotes as first-class destinations is what makes the site feel like a *person*, not a résumé.
- **Two content lists on the homepage** — recent projects + recent writing — rendered client-side from `projects.js` and `posts.js` (each declares a `window.PROJECTS` / `window.POSTS` array). Minimum-viable CMS: edit a JS file, push.
- **`a[data-todo] { display: none }`** — unfinished links ship as stubs and get revealed by removing one attribute. Lets her wire the skeleton up first, fill in content later.

### Typography

- **EB Garamond** for body and headings (serif, 25px body) + **JetBrains Mono** for metadata (years, dates, captions, footer) at 0.78rem in muted grey. That contrast — big warm serif against tiny mechanical mono — does most of the design work.
- **Lowercase prose**, uppercase bold serif for the nav.
- `html { font-size: 17.75px }` — single root knob. Bumping that scales the entire site uniformly (column width too). Nav pinned in px so it doesn't grow with it.

### Color

```
--fg:    #1a1a1a   (near-black)
--bg:    #fcfcfa   (warm off-white, slightly cream)
--muted: #8a8a86   (warm grey for mono metadata)
--rule:  #e8e8e4   (hairline borders)
```

Paper-y. Calm. Not white-white — the bg has a tiny warm cast which is most of what makes it feel hand-made.

### The two distinctive flourishes

**1. The morphing wordmark (the showstopper).** Eight hand-lettered SVG versions of "grace juan". Clicking the masthead warps between them using `<feTurbulence>` + `<feDisplacementMap>`. The choreography:

- **Click**: 700ms morph. Displacement ramps 0 → 90 → 0 (peak at the midpoint). The image source is swapped at peak distortion (p=0.5), so you never see the cut — it dissolves through noise.
- **Hover/focus shimmer**: low-amplitude living noise (scale 11, breathing amplitude + drifting frequency). Subtle "this is alive" feedback. Eases in on enter, eases out on leave, then self-stops the rAF loop.
- **One-time post-load wobble**: 620ms low-amplitude pulse ~900ms after load, so touch users (no hover) still get the affordance hint.
- **All three respect `prefers-reduced-motion`**: morph degrades to opacity crossfade, shimmer/wobble skipped entirely.
- Eight `FILLS` constants per-design correct mobile fit (each lettering sits differently inside the shared viewBox); computed once in devtools, hardcoded so first paint is correct.

The trick that makes it work: it's a *real, hand-drawn* personal mark — the technical effect serves the craft, not the other way around. Eight versions because she *drew* eight versions.

**2. The "highlighter" link hover.**

```css
a:hover {
  background: var(--fg);
  color: var(--bg);
  box-shadow: 0.15em 0 0 var(--fg), -0.15em 0 0 var(--fg);
}
```

Inverts the link to a black block with a slight rectangular extension past the text on each side. Reads like a marker stroke. Cheap, unmistakable, used everywhere. Same treatment applies to nav.

### Why the whole thing works

Not novelty — *editorial restraint with one earned flourish*. The serif/mono pair, the warm paper bg, the narrow column, Reading + Quotes as nav items, all signal a person with taste who reads books. Then one piece of craft (the hand-drawn morphing mark) you can interact with. Everything else gets out of its way.

---

## 2. Moves worth stealing (ranked by effort:impact)

| # | Move | Effort | Why it lands |
|---|---|---|---|
| 1 | Serif body + mono metadata pair (Garamond/JetBrains, or Source Serif/IBM Plex Mono) | trivial | Most of the "feels designed" effect comes from this one decision |
| 2 | Warm off-white bg (`#fcfcfa` ish), near-black fg, warm grey muted | trivial | Stops the site feeling like a default Tailwind page |
| 3 | Nav-as-personal-canon: include Reading/Quotes/Now/Bookshelf/etc. alongside Projects/Writing | low | Shifts you from "résumé" to "person" |
| 4 | Single root rem knob; everything (column, headings, body, gaps) sized in rem | low | One slider tunes the whole site |
| 5 | Marker-highlighter link hover (the box-shadow trick) | trivial | Distinctive, doesn't need a library |
| 6 | `a[data-todo]` stub-and-fill workflow | trivial | Ship the structure, content lands later |
| 7 | One earned interactive flourish on the masthead (warp wordmark, animated mark, hand-drawn signature that wiggles) | high | The thing people remember — but only one |
| 8 | Tiny static data files (`projects.js` / `posts.js`) instead of a CMS | low | Edit-push workflow, version-controlled, fast |
| 9 | Hand-drawn or hand-lettered identity asset somewhere prominent | medium (drawing skill) | Single biggest "this is a person" signal |
| 10 | `prefers-reduced-motion` honored on every animation | low | Tablestakes; gracejuan does it perfectly |

---

## 3. Comparable creative personal sites (curated)

Grouped by what specifically to steal from each.

### Same DNA as gracejuan (editorial, serif, taste-forward)

- **[Tom MacWright — macwright.com](https://macwright.com/)** — Closest analog. Long-running personal site, serif typography, *Reading* page is a 20-year canon (`macwright.com/reading`), *Recipes*, *Music*, *Now*. Steal: how to structure a long-form reading list that doesn't feel like a Goodreads dump.
- **[Patrick Collison — patrickcollison.com](https://patrickcollison.com/)** — Severe restraint. Black on white, Times-y serif, the famous `bookshelf`, `Questions`, `Fast`, `Conversations`. Steal: idiosyncratic *evergreen pages* (Fast, Questions) rather than just a blog.
- **[Maggie Appleton — maggieappleton.com](https://maggieappleton.com/)** — Digital garden, hand-illustrated everything, "epistemic status" badges on essays, *Notes* + *Essays* + *Patterns* + *Talks* split. Steal: hand-drawn illustration as identity, garden-style content tiers.
- **[Gwern — gwern.net](https://gwern.net/)** — Long-form essayist canon. Brutalist serif. Steal: how to make a 1500-word essay feel like *the* page on a topic.
- **[Robin Sloan — robinsloan.com](https://www.robinsloan.com/)** — Novelist-grade tone, newsletter-driven, personal. Steal: copy that sounds like a person wrote it.

### One earned interactive flourish (the gracejuan move)

- **[Linus Lee — thesephist.com](https://thesephist.com/)** — Sub-projects are interactive in-browser demos. Steal: homepage as a *menu of things you can poke at*.
- **[Bartosz Ciechanowski — ciechanow.ski](https://ciechanow.ski/)** — Gold standard. Whole interactive essays on gears, GPS, naval architecture. Steal: aspirational ceiling. At minimum, one homepage flourish that's *crafted*, not bought.
- **[Cassie Evans — cassie.codes](https://www.cassie.codes/)** — SVG animation everywhere, hand-drawn feel, conversational copy. Closest spiritual cousin to gracejuan's wordmark approach. Steal: SVG-first animation thinking, GSAP for the harder stuff.
- **[Josh Comeau — joshwcomeau.com](https://www.joshwcomeau.com/)** — Playful interactive hovers, custom cursor on links, animated micro-illustrations. Steal: every interactive element has a little squish/bounce.
- **[Lynn Fisher — lynnandtonic.com](https://lynnandtonic.com/)** — Re-skins her site annually as a themed art piece. Steal: the *idea* of treating the site itself as a yearly art project. Look at her [archive](https://lynnandtonic.com/archive/).
- **[Bruno Simon — bruno-simon.com](https://bruno-simon.com/)** — WebGL drivable portfolio. Almost certainly too much, but worth seeing what the ceiling looks like.

### Identity / wordmark inspiration (for the masthead slot)

- **[Devine Lu Linvega — wiki.xxiivv.com](https://wiki.xxiivv.com/)** — Personal sigil + custom typeface, whole site is a hand-rolled wiki. Steal: *sigil as identity* — a single hand-drawn mark that recurs.
- **[Andy Matuschak — andymatuschak.org](https://andymatuschak.org/)** — Stacked-pane note transclusion ("Andy mode"). Distinctive enough that the *navigation model itself* is the brand. Steal: room for the homepage to be *structurally* novel, not just visually.
- **[Robb Knight — rknight.me](https://rknight.me/)** — Indieweb. *Now*, *Bookmarks*, *Books*, *Music*, *Movies* all as first-class sections. Steal: indieweb instinct to publish *what you consume* alongside what you make.

### Developer portfolios that nailed minimalism (for the projects page)

- **[Dennis Snellenberg — dennissnellenberg.com](https://dennissnellenberg.com/)** — Loading screen that greets in a different language each load, then a clean grid. Steal: small surprise on load.
- **[Brittany Chiang — brittanychiang.com](https://brittanychiang.com/)** — Single-page dev portfolio benchmark. Steal: nothing visually (over-copied), but how she structures *Work / Writing / About* into one scroll.
- **[Lee Robinson — leerob.io](https://leerob.io/)** — `/snippets`, `/dashboard` with live stats, `/uses`. Steal: the *uses* page (hardware/software I run) — canonical "person" page + bottom-of-funnel SEO.

### Generative / playful

- **[George Francis — georgefrancis.dev](https://georgefrancis.dev/)** — Generative SVG everywhere, every section breaks the grid. Steal: generative blobs/shapes as section dividers instead of `<hr>`.
- **[Amelia Wattenberger — wattenberger.com](https://wattenberger.com/)** — Interactive data viz essays. Steal: an essay can have a chart you can drag.
- **[Rauno Freiberg — rauno.me](https://rauno.me/)** — Crisp interaction details, every hover considered. Steal: the level of care on *every* micro-interaction.

---

## 4. Recommendation for jhomer192.github.io

Given your existing Astro setup, the high-leverage path:

1. **Typography swap first** (1 hour). EB Garamond + JetBrains Mono via `@fontsource`. Set the warm bg. Single root rem knob. This alone gets ~60% of the gracejuan feel.
2. **Restructure nav around personal canon** (1 hour). Add at least one of: `/reading`, `/now`, `/uses`, `/quotes`. Pick the one you'd actually maintain — a stale Reading page is worse than no Reading page.
3. **Steal the marker-highlighter link hover** (10 minutes). Drop-in CSS.
4. **Ship the skeleton with `data-todo` stubs.** All pages live and linked even if half are placeholders.
5. **Pick *one* flourish for the masthead** and commit a week to it:
   - **A wiggly hand-drawn wordmark** ("Jack Homer" in your handwriting, SVG, the gracejuan warp). Highest payoff. Requires you to draw 4–8 versions on iPad/paper and trace to SVG (Illustrator's Image Trace or `potrace`).
   - **A generative mark** — animated SVG that draws itself, e.g. a stylized "JH" monogram with subtle living shimmer. Lower craft barrier.
   - **A semantic flourish** tied to one of your projects (bracketeering bracket fills in, fashion-swipe card flick on the avatar). Risk: feels like a demo, not a mark.

The thing that matters most is the *one* flourish has to be *yours* — not pulled off a template. The whole reason gracejuan's site works is the wordmark is hand-lettered, not generated.

---

## 5. Files in gracejuan.com worth reading directly

- `https://gracejuan.com/style.css` (~250 lines) — the whole design system fits in one file
- `https://gracejuan.com/wordmark.js` (~170 lines) — extremely well-commented; the comments alone are a tutorial on building one earned flourish
- `https://gracejuan.com/projects.js` / `posts.js` — the "CMS"

All publicly viewable.
