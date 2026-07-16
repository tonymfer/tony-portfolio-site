---
title: Dark-reskinning a token-driven CSS site — what a :root flip carries and what it doesn't
date: 2026-07-16
category: best-practices
module: portfolio-design-system
problem_type: best_practice
component: frontend_stimulus
severity: medium
applies_when:
  - "Flipping a token-driven CSS site between light and dark (or any wholesale palette change)"
  - "The codebase mixes CSS custom-property tokens with hardcoded rgba() panel fills"
  - "The project ships more than one independently-scoped design system (a route with its own token block)"
  - "A texture/overlay layer uses mix-blend-mode tuned for the old ground"
tags:
  - dark-mode
  - css-design-tokens
  - reskin
  - nextjs
  - mix-blend-mode
  - playwright-flake
related_components:
  - documentation
  - testing_framework
---

# Dark-reskinning a token-driven CSS site — what a :root flip carries and what it doesn't

## Context

The portfolio (`tonymfer/tony-portfolio-site`, Next.js App Router) shipped a wholesale light→dark
redesign — the "Terminal Receipts" skin — flipping a warm sage-paper editorial ground to a dark
CRT-terminal ground while keeping structure, content, and the passing Playwright gate untouched.

The site is token-driven: colors are CSS custom properties in `app/globals.css` `:root`
(`--bg`, `--ink`, `--line`, `--accent`, `--green`, …). The instinct was "flip the token values and
you're done." That instinct is ~90% right and 100% a trap for the last 10%. This documents where a
`:root` flip carries the reskin and the four places it silently does not — so the next palette change
(or a second theme) doesn't re-discover them by hand.

Historical note: the original system was _deliberately_ built light. The prior design plan locked a
warm-paper editorial palette (`--bg #f3efe6`, a dedicated `--paper` panel token), and a code-review
sign-off explicitly recorded "no dark mode, no fake terminal" as a design guard. This reskin
intentionally reverses that guard — it is a direction change, not just a palette swap. (session history)

## Guidance

A token-value flip at `:root` carries every declaration that reads a token by name — usually the
large majority of a mature stylesheet. Re-derive the token _definitions_ coherently (dark ground →
light-alpha lines, phosphor-bone ink, lifted accents for contrast) and most of the site inverts for
free. Then handle the four things a flip provably does **not** carry:

1. **Hardcoded `rgba(255,255,255,α)` "raised paper" panel fills.** A light theme lifts cards by
   painting them _lighter_ than the paper ground. On a dark ground the same white-alpha renders as
   muddy mid-grey — visible but wrong. These fills bypass the token block, so the `:root` flip can't
   touch them. Re-derive them to a low light-alpha in the ink hue
   (`rgba(233,239,224,0.05–0.11)`) so panels read as near-black lifts defined by their hairline
   borders, not by fill lightness. In this codebase there were ~40 of them across ~25 selectors, and
   `replace_all` on each distinct alpha string (`0.22`, `0.24`, `0.28`, hover `0.34–0.42`, …) was the
   fast, safe pass. **These fills are not stragglers — they were a consciously-accepted house pattern**
   (a project-standards review previously flagged raw `rgba(255,255,255,.22)` on `.mechanic-card` /
   `.video-card` and resolved it _no-change_ because it matched the dominant convention). That is
   exactly why the flip only carries ~90%. (session history)

2. **`mix-blend-mode` inverts on a dark ground.** `multiply` (used to sit a texture/noise over a
   _light_ paper) darkens toward black and goes invisible on near-black. Switch texture layers to
   `normal`/`screen`, and drive them with light-colored ink (`rgba(141,255,122,0.05)` dot-matrix,
   low-alpha scanlines) instead of dark ink. The old `body::before` used `multiply` + dark noise; it
   had to be rebuilt as a phosphor dot-matrix + scanline + vignette with no blend inversion.

3. **A second, independently-scoped design system is untouched by the global reskin.** The `/wiki`
   route carries its own token surface (`--wiki-*` in `app/wiki/wiki.css`) plus a
   `body:has(.wiki-page){ background: … }` override. Because it never reads `globals.css` tokens, the
   `:root` flip left it fully light — a jarring light-encyclopedia jump from the dark portfolio. It
   needed its own parallel token pass (same anchor palette, its own token block). This isn't an
   accident: `/wiki` was imported from a different git lineage as-is, so it arrived with its own
   design system. **Grep for every `:root` / scoped token block and every `body:has(...)` /
   route-scoped background override before declaring a reskin done.** (session history)

4. **Dark-assuming elements can lose contrast, and light-assuming borders can vanish.** Hardcoded
   dark-ink lines/shadows (`rgba(17,17,15,α)`) become invisible on dark (harmless — most borders are
   token-driven via `--line`), but audit for any that were load-bearing. Conversely, elements that
   were _already_ dark in the light era (here: an LCD-green-on-black receipt pager) may now blend into
   the dark ground and need a bezel/glow to stay distinct. (session history)

Verify visually across **every** major surface, not just the hero — the muddy-panel and
untouched-subsystem failures only show up mid-scroll and on secondary routes.

## Why This Matters

The `:root`-flip-only mental model ("it's all tokens, just change the values") ships a reskin that
looks 90% converted and 10% broken: muddy grey cards, an invisible texture layer, and a whole route
still in the old skin. Each of those reads as "unfinished," and on a hiring portfolio the cost is
credibility. Knowing the four failure classes up front turns a multi-hour bug hunt into a targeted
grep-and-replace pass, and makes a _second_ theme (or a light/dark toggle) tractable because you
already know which surfaces bypass the token layer.

It also protects the invariants: the whole reskin here was a **skin-layer-only** change (tokens,
background, texture, fonts) that kept structure, content, and the 37-test smoke gate green. Treating
it as token+texture surgery rather than a component rewrite is what made that possible.

## When to Apply

- Any light↔dark flip, or a large palette change, on a CSS-custom-property design system.
- Before shipping a reskin: grep the stylesheet for `rgba(255, 255, 255,` / `#fff`, for every
  `:root` and scoped token block, and for `mix-blend-mode` and `body:has(`.
- When a project has multiple design systems (per-route token blocks, an embedded docs/wiki theme).

## Examples

**Panel fill — before (light house pattern) → after (dark lift):**

```css
/* light theme: card is lighter than the sage paper */
.mechanic-card {
  background: rgba(255, 255, 255, 0.22);
}

/* dark reskin: near-black lift, defined by its hairline border, not by lightness */
.mechanic-card {
  background: rgba(233, 239, 224, 0.05);
}
```

**Texture layer — before (multiply on light) → after (no blend on dark):**

```css
/* light: dark noise multiplied onto warm paper */
body::before {
  background-image: url(noise);
  mix-blend-mode: multiply;
  opacity: 0.07;
}

/* dark: phosphor dot-matrix + scanlines, normal blend, light ink */
body::before {
  background-image:
    radial-gradient(
      circle at 1px 1px,
      rgba(141, 255, 122, 0.05) 1px,
      transparent 0
    ),
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.22) 0 1px,
      transparent 1px 3px
    );
  background-size:
    22px 22px,
    100% 3px;
}
```

**The second design system the global flip missed:**

```css
/* app/wiki/wiki.css — its own token block + body override, invisible to a globals.css :root flip */
:root {
  --wiki-paper: #0c0e0b;
  --wiki-ink: #e9efe0; /* … re-derived in parallel … */
}
body:has(.wiki-page) {
  background: var(--wiki-paper);
}
```

## Related

- Project memory `portfolio-gate-cold-flakiness.md`: the Playwright smoke test that navigates to
  `/wiki` flakes on a cold `.next` compile (~30s `waitForURL` timeout) but passes warm — the warm
  re-run is the true signal. Two `/wiki`-navigating tests widen this surface; scope new guards to
  home-only where the static source scan already covers the route. (auto memory [claude])
- Project memory `portfolio-source-of-truth.md`: the `/wiki` route + its independent design system,
  and the Playwright suite, were adopted from the mac-mini "hallmark" line during the two-line
  unification — which is why they carry their own conventions. (auto memory [claude])
