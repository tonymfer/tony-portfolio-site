---
title: "feat: Portfolio upgrade — product-judgment positioning, equal case grid, ownership proof"
type: feat
status: active
date: 2026-07-06
origin: Feedback/portfolio-qa-question-list-2026-07-04.md + Feedback/portfolio-tony-answers-2026-07-04.md (rsynced to /Users/tomo/portfolio-source/Feedback)
---

# feat: Portfolio upgrade — product-judgment positioning, equal case grid, ownership proof

## Overview

Upgrade Tony Park's existing Next.js App Router portfolio (`app/`, data-driven from `app/data.ts`) so it proves a **Product Engineer with market/product/design/branding judgment + execution** — not a "web developer who codes frontends." The change is driven by the 2026-07-04 QA pass and Tony's direct answers. Work spans four surfaces: the content model (`app/data.ts`), the homepage (`app/page.tsx`), the case template (`app/objects/[slug]/CaseMotion.tsx`), and the design system (`app/globals.css`). We keep the warm-paper editorial "Primitive Archive" aesthetic and upgrade within it — no restyle to generic.

The site was acquired from the mac mini (`tonydip-macmini` via Tailscale) at commit `dd9ff69` (6 commits ahead of GitHub origin). Baseline `npm run build` passes and all 7 object routes render. Additional proof material is mined from `/Users/tomo/portfolio-source/` (screenshots, tweet media, evidence bundles) and, when needed, from the mac mini `Career/Outputs/` + `Projects/Beeper/` folders over SSH.

## Problem Frame

The current site already looks good and is not generic — but the QA verdict (see origin) is: **the design is fine; the positioning is too abstract.** Current hero reads "Early primitives into shipped product loops," which Tony felt was surface-level. His real edge (his own words): reading market/trend/need, product planning, design taste, branding, and product direction, then shipping proof. The portfolio must make that legible to its **primary reader: a founder hiring a founding/product engineer**, with **job/hiring conversion** as the primary goal.

Secondary problems from the QA pass: a loud "flagship" Beeper treatment that reads as show-off; structural misfit (far.cards as an equal standalone case; TapTato and Base World fused into one card); no explicit "hire me for" block; no "how I work" narrative; proof images that read as texture rather than evidence; a real mobile bottom-dock overlap bug; and public copy that violates Tony's evidence discipline (the "55 commits across 6 repos" claim).

## Requirements Trace

- **R1** — Hero re-positions to market-sense → product/brand → interface → ship-proof. Title stays "Product Engineer." (origin: answers §Positioning, §Revised direction)
- **R2** — De-emphasize the loud Beeper flagship; move to a calmer, near-equal object grid (Beeper first because current/proof-dense, not "crowned"). (origin: answers §Case structure feedback)
- **R3** — far.cards moves under Mint Club as a Farcaster product surface, not an independent equal case. (origin: answers §far.cards)
- **R4** — TapTato and Base World split into two separate cases; Base World surfaces its Base grant + Jesse Pollak shoutout (proof pending → source-needed placeholders). (origin: answers §TapTato/Base World)
- **R5** — Add an explicit "Best fit / hire me for" hiring CTA block (founding/product engineer; AI×Web3, Base/Farcaster, consumer crypto UX, devtools, agent workflows). (origin: QA §P0 Hiring CTA)
- **R6** — Add a "How I work" module (primitive → prototype → interface → distribution → proof → postmortem; agent-augmented QA/build velocity). (origin: QA §P1)
- **R7** — Per-case ownership boundaries (My role / Team context / What I owned / What I influenced / Proof) to cut overclaim and raise trust. (origin: QA §P1, answers §ownership per company)
- **R8** — Beeper metrics carry a source/definition cue. (origin: QA §P0 Beeper metrics source)
- **R9** — Proof images upgraded from "texture" to "evidence" via detail strips + "what this proves" captions. (origin: QA §P0 Mint Club proof image)
- **R10** — Fix the mobile bottom-dock overlap over the "Work Archive" content. (origin: QA §P0 mobile dock)
- **R11** — Evidence hygiene: remove "55 commits" public claim; do not imply Tony engineered hardware; keep hidden-ledger rules. (origin: EVIDENCE-MAP.md, answers §public claim caution)
- **R12** — Verification: `npm run build` passes; all object routes 200 (now 7 → 8 after the split, minus 1 merge for far.cards); before/after screenshots.

## Scope Boundaries

- **Not** a visual re-theme. Keep tokens: `--bg #f3efe6`, `--ink #11110f`, `--accent #2858e8`, Geist Sans/Mono + Space Grotesk. (origin: DESIGN.md)
- **Not** a framework migration or dependency overhaul. Same Next.js App Router + motion/react + gsap stack.
- **Not** inventing metrics. Only claims backed by `EVIDENCE-MAP.md` "safe claims" or public receipts ship; everything pending from Tony is a labeled source-needed placeholder, never a fabricated number.
- **No** deploy/push in this plan's scope — the pipeline handles PR/preview; production promotion stays Tony's call.
- Base World grant amount / Jesse Pollak tweet URL are **deferred** to Tony (placeholders now).

## Context & Research

### Relevant Code and Patterns

- `app/data.ts` — single source of truth. `CaseStudy` type (slug, no, name, object, role, year, image, desc, tags, proof, href, live?, primitive, artifact, proofPoints[], right[], wrong[], next, fieldNotes?[], timeline?[]) and `cases[]` (6 cases) + `archive[]` (public ledger rows). All content flows from here.
- `app/page.tsx` — homepage. Sections: topbar + `mobile-dock`, `hero` (link-matrix / hero-copy / hero-visual artifact-wall / proof-types), `objects` (`flagship-object` for `selected[0]` + `support-list` for the rest), `ledger`, `company-work` (contains the "55 commits" line), `product-arc`, `video-receipts`, `format`, `about`, `footer`.
- `app/objects/[slug]/CaseMotion.tsx` — client case renderer. Beeper-specific hardcoded blocks (`beeperMetrics`, `beeperMechanic`, `beeperFlow`, `beeperPartners`, `beeperVideos`, gated by `isBeeper`) + generic blocks (primitive/artifact/receipt-board/field-notes/timeline/case-columns/next-bet) driven by `item`.
- `app/objects/[slug]/page.tsx` — `generateStaticParams()` maps `cases` → routes; `generateMetadata()` per case. **Route count auto-derives from `cases`.** Splitting/merging cases in `data.ts` automatically updates routes, sitemap (`app/sitemap.ts`), and static params — no separate routing edits.
- `app/layout.tsx` — global metadata (description mentions "far.cards, TapTato" — update after restructure).
- `app/globals.css` (722 lines) — all styling. `:root` tokens at top. Section classes mirror `page.tsx`/`CaseMotion.tsx` class names. `mobile-dock` + `case-mobile-dock` are the fixed bottom nav implicated in the overlap bug.

### Institutional Learnings

- `docs/solutions/` does not exist in this repo — no prior learnings to reuse. `EVIDENCE-MAP.md` and `PRODUCT.md`/`DESIGN.md` at repo root act as the local knowledge base and are treated as binding.

### External References / Content Sources (to mine during execution)

- `/Users/tomo/portfolio-source/Assets/v3-proof-2026-07-01/` — screenshots (`baseworld.png`, `base-globe.png`, `taptato.png`, `mint-cbbtc.png`) + tweet-media (far.cards `2042628827059536214-{1..4}`, Base World `1808470847469785334`, TapTato `1979189014386348271`, Beeper hardware/BEEP v2/Base APAC stills) + `tweets-json/` (source text/URLs) + `ASSET-MANIFEST.md`.
- `/Users/tomo/portfolio-source/Feedback/` — the two authoritative QA docs (origin).
- Existing `public/proof/` already has `farcards-spread.png`, `farcards-proof.jpg`, `base-world-launch.jpg`, `taptato.png`, `taptato-video.jpg`, `mint-cbbtc.png` — most split imagery already present locally.
- SSH (mac mini) on demand: `Projects/Beeper/Inputs/base-batches-003-application.md` (exact metrics + definitions), `Career/Outputs/mintclub-hunttown-evidence-2026-06-29.md` (Mint Club / Hunt Town ownership), `Career/Outputs/beeper-career-evidence-addendum-2026-07-01.md`.
- Design inspiration (do not copy, taste calibration only): `/Users/tomo/portfolio-source/References/screenshots-2026-06-30/` + `Mockups/tony-portfolio-visual-directions-2026-06-30.png`.

## Key Technical Decisions

- **Content-model-first.** Every structural change (split, merge, ownership, source cues) is expressed as data on `CaseStudy` in `app/data.ts`; components render generically. This keeps routes/sitemap/static-params auto-correct and avoids per-page hardcoding. New optional fields: `ownership?` (role/team/owned[]/influenced[]/proof), `proofDetail?` (image + "what this proves" caption strips), `metricSource?` (string cue), `subProjects?` (for far.cards-under-Mint-Club), `sourceNeeded?` (bool flag on placeholder proof points).
- **far.cards handling:** remove `far-cards` from `cases[]` as a standalone; represent it as a `subProjects` entry on the `mint-club` case (rendered as a "Farcaster product surface" strip on the Mint Club case page + a compact mention on the home grid). Preserve its proof images and X link. Its former archive row stays in the public ledger.
- **TapTato / Base World split:** replace the single `taptato-base-world` case with two cases: `taptato` (playable wallet-infra demo) and `base-world` (community map; Base grant + Jesse Pollak shoutout). Net route delta: +2 new, −1 combined, −1 far.cards = **8 object routes** total (beeper, mint-club, hunt-town, tradefish, base-world, taptato + the two existing that stay). Confirm final list in verification.
- **Equal grid over flagship:** replace `flagship-object` + `support-list` with a single uniform `object-grid` of equal cards; Beeper is simply first. Keep a subtle "current / most proof-dense" tag on Beeper rather than a "flagship case" crown. (origin: answers — avoid one-hero-trophy framing.)
- **Ownership rendered generically** from `item.ownership` on every case page, so trust-building is consistent and not Beeper-only.
- **Evidence discipline enforced in data, not just copy:** delete the "55 commits across 6 repos" string from `companySurfaces` in `page.tsx` and anywhere in `data.ts`; keep hardware attribution to product/co-founder framing (Mario = hardware engineer).
- **Placeholders are visibly labeled** (`sourceNeeded: true` → a muted "source pending" chip) so nothing reads as a fabricated claim and Tony can drop assets in later without code changes.

## Open Questions

### Resolved During Planning

- _Pull from GitHub or mac mini?_ → mac mini (local is 6 commits ahead of origin; GitHub is stale). Resolved: rsynced working tree + `.git`.
- _Keep flagship or equal grid?_ → equal grid (Tony explicitly questioned the flagship show-off feel; Tara recommended calm equal grid). Resolved.
- _Where does far.cards live?_ → under Mint Club (Tony: "far.cards is a Mint Club-adjacent Farcaster project"). Resolved.
- _Homepage title?_ → "Product Engineer" (Tony's pick); "Founding Product Engineer" used only in the best-fit block. Resolved.
- _Germany/EU angle?_ → keep career optionality but do not over-index the site on Germany. Resolved: no geo emphasis on the public site.

### Deferred to Implementation

- Exact new field names on `CaseStudy` and their TS shapes — finalize while editing `data.ts`.
- Whether ownership renders as a 5-cell grid or a labeled definition list — decide against the real content length per case during `CaseMotion.tsx` work.
- Base World grant amount + Jesse Pollak tweet URL — **deferred to Tony**; ship labeled placeholders.
- Final proof-image crops (zoom detail strips) — produced during execution from source-material stills; exact crop selection is an execution-time visual judgment.
- Any copy sourced from mac mini evidence bundles — pull the specific file during the unit that needs it, not upfront.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce._

```
app/data.ts  (source of truth)
  CaseStudy + new optional fields: ownership, proofDetail, metricSource, subProjects, sourceNeeded
  cases[]: beeper, mint-club(+far.cards subProject), hunt-town, tradefish, base-world(new), taptato(new)
        │
        ├──> app/objects/[slug]/page.tsx  → generateStaticParams()  → routes + sitemap auto-derive
        │
        ├──> app/objects/[slug]/CaseMotion.tsx  → renders ownership / proofDetail / metricSource generically
        │
        └──> app/page.tsx  → equal object-grid + hero rewrite + "Best fit" block + "How I work" module
                                     │
                                     └──> app/globals.css  → dock-overlap fix + new module styles (within existing tokens)
```

Route delta (from `cases[]` length change):
`far-cards` removed · `taptato-base-world` → `taptato` + `base-world` ⟹ **6 → 7** standalone cases → confirm exact prerender list at build.

## Implementation Units

Grouped into phases. Phases are dependency-ordered; units within a phase are mostly parallel-safe except where noted.

### Phase A — Content model & evidence hygiene (`app/data.ts`)

- [ ] **Unit A1: Extend `CaseStudy` type + evidence hygiene sweep**

**Goal:** Add optional fields powering the new modules and remove disallowed public claims.
**Requirements:** R7, R8, R9, R11.
**Dependencies:** None (first unit).
**Files:** Modify `app/data.ts`.
**Approach:** Add optional fields to `CaseStudy`: `ownership?: { role: string; team: string; owned: string[]; influenced: string[]; proof: string }`, `metricSource?: string`, `proofDetail?: Array<{ image: string; caption: string }>`, `subProjects?: Array<{ name: string; blurb: string; href?: string; image?: string }>`, and allow proof points to carry `sourceNeeded?: true`. Remove the "55 commits across 6 repos" string wherever it appears in `data.ts`. Verify no hardware-authorship phrasing on Beeper.
**Patterns to follow:** Existing `proofPoints` union (`string | { text; href }`) — extend it to `{ text; href?; sourceNeeded? }` without breaking string entries.
**Test scenarios:**

- Happy path: `npm run build` typechecks with the widened `CaseStudy` and existing cases still satisfy it (all new fields optional).
- Edge case: a `proofPoints` entry with `sourceNeeded: true` and no `href` renders without an anchor.
- Integration: grep confirms zero occurrences of "55 commits" across `app/`.
  **Verification:** Type compiles; existing 6 cases unchanged in output; no disallowed strings remain.

- [ ] **Unit A2: Split TapTato / Base World; relocate far.cards under Mint Club**

**Goal:** Restructure `cases[]` per R3/R4.
**Requirements:** R3, R4.
**Dependencies:** A1.
**Files:** Modify `app/data.ts`.
**Approach:** Replace the `taptato-base-world` entry with two: `taptato` (playable wallet-infra: Base Sub Accounts/USDC, `/proof/taptato.png`, TapTato thread) and `base-world` (community map: `/proof/base-world-launch.jpg` + new `baseworld.png`; proofPoints include Base grant + Jesse Pollak shoutout marked `sourceNeeded: true`; base-world repo link). Remove standalone `far-cards` from `cases[]`; add it as a `subProjects` entry on `mint-club` (name, blurb "Farcaster identity card / IRL object", far.cards X link, `/proof/farcards-spread.png`). Renumber `no` fields (A-01…A-0N) to stay sequential. Update `archive[]` rows if any duplicate the split (keep far.cards + Base World + TapTato ledger rows — they have public receipts).
**Patterns to follow:** Existing case object shape; keep `primitive`/`artifact`/`right`/`wrong`/`next` prose for each new case (reuse split-relevant halves of the old combined copy, tightened).
**Test scenarios:**

- Happy path: `generateStaticParams()` yields `base-world` and `taptato` routes; `/objects/base-world` and `/objects/taptato` build as static pages.
- Edge case: `/objects/taptato-base-world` (old slug) no longer generated — confirm it 404s (acceptable; no external inbound links besides internal, which we update) OR add a redirect if any internal reference remains.
- Edge case: `/objects/far-cards` no longer a standalone route; far.cards content still reachable on the Mint Club page.
- Integration: home grid renders the new count without a broken image (all referenced `/proof/*` exist).
  **Verification:** Build lists the new route set; no dangling internal `/objects/far-cards` or `/objects/taptato-base-world` links remain in `page.tsx`/`CaseMotion.tsx`.

- [ ] **Unit A3: Populate ownership, metric source, and proof-detail content**

**Goal:** Fill the new fields with evidence-safe content per case.
**Requirements:** R7, R8, R9.
**Dependencies:** A1, A2.
**Files:** Modify `app/data.ts`. (Mine `portfolio-source/` + mac mini evidence docs as needed.)
**Approach:** For each case add `ownership`: Beeper (owned: frontend, product flows, campaign mechanics, copy/story, design, partner research, launch; team: "Sungwoo — infra/contracts/backend"; proof: Base Batches bundle). Mint Club (owned: frontend, swap, staking, lockup, airdrop tools, SC↔FE integration, backend persistence, dashboards; strongly-led: mfer-backed token + community/viral; Mintdrop under Mint Club). Hunt Town (owned: events, Discord ops, project support, rewards, workshops, content, fireside chats, Huntzy community). TradeFish (owned: frontend, product direction, story/submission, demo; presented Korea Base Hackathon + Solana Malaysia Demo Day). Add `metricSource` to Beeper ("Source: Base Batches 003 evidence bundle + public Beeper/Base APAC receipts. Definitions on request."). Add `proofDetail` strips (2–3) to Beeper + Mint Club from existing `/proof` stills with "what this proves" captions.
**Patterns to follow:** `EVIDENCE-MAP.md` "safe claims" — every ownership line must be defensible; anything unconfirmed → omit or `sourceNeeded`.
**Test scenarios:**

- Happy path: each case object has an `ownership` block; Beeper has `metricSource`.
- Edge case: cases without a strong proofDetail image omit the field (no empty strip).
- Integration: no ownership line asserts a claim contradicting `EVIDENCE-MAP.md` "needs care" list (hardware authorship, waitlist tables, claim_like_* undefined).
  **Verification:** Content review against EVIDENCE-MAP; build passes.

### Phase B — Homepage restructure (`app/page.tsx`)

- [ ] **Unit B1: Hero rewrite + title/metadata**

**Goal:** Re-position hero to product-judgment angle (R1).
**Requirements:** R1, R11.
**Dependencies:** A-phase (copy references case set).
**Files:** Modify `app/page.tsx`, `app/layout.tsx`.
**Approach:** Replace `h1` "Early primitives into shipped product loops." with a market→product/brand→interface→proof line (e.g., "I read markets early, shape the product and brand, design the interface, and ship the proof."). Update kicker + topbar `em` ("Product Engineer / Prototyper" → "Product Engineer") and subcopy to name market-sense/product-direction/design/branding + Base/Farcaster/Mint Club/Beeper/TradeFish. Update `layout.tsx` `description`/OG/twitter copy to match and drop the stale "far.cards, TapTato" enumerations that no longer match the structure.
**Patterns to follow:** Existing `hero-copy` markup; keep `hero-proof` metric tiles (numbers still valid).
**Test scenarios:**

- Happy path: home renders new hero copy; topbar shows "Product Engineer".
- Edge case: no references to removed structure remain in metadata.
- Integration: OG/twitter description string length reasonable for cards (<200 chars).
  **Verification:** Visual check + build; metadata reflects new positioning.

- [ ] **Unit B2: Equal object grid (retire flagship)**

**Goal:** Replace flagship+support with a calm equal grid (R2).
**Requirements:** R2.
**Dependencies:** A2 (final case set).
**Files:** Modify `app/page.tsx` (+ styles in Phase D).
**Approach:** Remove `flagship-object` block and `flagshipMetrics`; render all `selected` cases through one `object-grid` map with uniform card markup (index `no`, thumb, meta, name, desc, role/proof, tags). Beeper carries a subtle `data-current` tag ("current · proof-dense") instead of a "flagship case" label. Keep section head but rename "Selected Objects" copy if it implies hierarchy.
**Patterns to follow:** Existing `object-row` markup for the uniform card; reuse its structure for all.
**Test scenarios:**

- Happy path: all cases render as equal cards; Beeper first, not enlarged.
- Edge case: grid handles 7 items without a lonely orphan card on desktop/mobile (Phase D handles responsive).
- Integration: every card links to a valid `/objects/<slug>` that exists in `cases`.
  **Verification:** No `flagship-*` classes remain referenced; visual parity check.

- [ ] **Unit B3: "Best fit / hire me for" block + "How I work" module**

**Goal:** Add hiring CTA (R5) and process narrative (R6).
**Requirements:** R5, R6.
**Dependencies:** B1.
**Files:** Modify `app/page.tsx` (+ styles in Phase D).
**Approach:** Add a `best-fit` block near the top objects area / about: headline "Best fit" + roles ("founding / product engineer — AI×Web3, Base/Farcaster, consumer crypto UX, devtools, agent workflows") + a direct email CTA. Add a `how-i-work` module: 6 labeled steps (Sense market → Prototype → Ship interface → Distribution loop → Collect proof → Postmortem/next bet) + a one-line note on agent-augmented QA/build velocity (framed as shipping velocity, not lore — per QA). Reuse the existing `proof-types`/`notes` data shapes where sensible; the current `proofTypes`/`notes` arrays can be repurposed/renamed.
**Patterns to follow:** Existing `about-grid` + `note-list` markup patterns.
**Test scenarios:**

- Happy path: both modules render with correct copy and a working `mailto:` CTA.
- Edge case: on mobile the how-i-work steps stack without overflow.
- Integration: "Best fit" role list matches the answers doc (founding/product engineer emphasis).
  **Verification:** Visual + build; recruiter can answer "what role do I contact for?" in one screen.

### Phase C — Case template (`app/objects/[slug]/CaseMotion.tsx`)

- [ ] **Unit C1: Generic ownership + metric-source + proof-detail rendering**

**Goal:** Render the new `data.ts` fields on every case page (R7, R8, R9).
**Requirements:** R7, R8, R9.
**Dependencies:** A3.
**Files:** Modify `app/objects/[slug]/CaseMotion.tsx` (+ styles in Phase D).
**Approach:** Add an `ownership-board` block (renders `item.ownership`: role, team context, owned list, influenced list, proof) shown when present, for all cases. Add a `metricSource` caption under the Beeper metric strip (and any case with `metricSource`). Add a `proofDetail` strip renderer (image + "what this proves" caption) for cases that define it. Render far.cards `subProjects` as a "Farcaster surfaces" strip on the Mint Club page. Keep existing Beeper-specific hardcoded blocks but ensure they coexist with the generic ownership block.
**Patterns to follow:** Existing `field-notes-board` / `receipt-board` section structure and `case-kicker` heading pattern; motion `whileInView` wrappers.
**Test scenarios:**

- Happy path: `/objects/beeper` shows ownership + metric source; `/objects/mint-club` shows ownership + far.cards subProjects strip.
- Edge case: a case without `ownership` (if any) renders no empty board.
- Edge case: `sourceNeeded` proof points render a muted "source pending" chip, no dead link.
- Integration: `prefers-reduced-motion` still disables gsap timeline (existing effect) with new nodes present.
  **Verification:** All object routes 200; new blocks appear only where data exists.

### Phase D — Design system polish (`app/globals.css`)

- [ ] **Unit D1: Fix mobile bottom-dock overlap**

**Goal:** Resolve the QA overlap bug (R10).
**Requirements:** R10.
**Dependencies:** None (can run early; independent of content).
**Files:** Modify `app/globals.css`.
**Approach:** Add bottom safe-area padding to the last content section / `main` on mobile equal to dock height (+ `env(safe-area-inset-bottom)`), and/or adjust `.mobile-dock` height/opacity/`z-index` so it never occludes the "Work Archive"/hero-visual content. Apply the same to `.case-mobile-dock` on case pages.
**Patterns to follow:** Existing mobile media queries in `globals.css`; existing dock rules.
**Test scenarios:**

- Edge case (primary): at 375px width, scrolling to the Work Archive / final section shows no content hidden behind the dock.
- Edge case: case pages' `case-mobile-dock` likewise clears the next-bet/footer content.
- Test expectation: verified visually via mobile screenshot (no unit test for CSS).
  **Verification:** Mobile screenshot before/after shows the overlap gone.

- [ ] **Unit D2: Styles for equal grid, hiring block, how-I-work, ownership, proof-detail**

**Goal:** Style all new/changed markup within existing tokens (R2, R5, R6, R7, R9).
**Requirements:** R2, R5, R6, R7, R9.
**Dependencies:** B2, B3, C1 (markup exists).
**Files:** Modify `app/globals.css`.
**Approach:** Add `.object-grid` (uniform responsive cards, replacing `.flagship-object`/`.support-list` specifics), `.best-fit`, `.how-i-work`, `.ownership-board`, `.proof-detail` rules using existing type scale, hairlines, `--accent`, and paper surfaces. Keep tight tracking on headings, comfortable leading on notes (DESIGN.md). Remove now-unused flagship CSS or leave inert (prefer remove to avoid dead code).
**Patterns to follow:** Existing section rhythm, `--line`/`--paper` usage, `snap-rail` for horizontal strips on mobile.
**Test scenarios:**

- Happy path: desktop + mobile render each new block with correct hierarchy and spacing.
- Edge case: equal grid reflows cleanly at 375 / 768 / 1280.
- Test expectation: verified visually (screenshots at 3 breakpoints).
  **Verification:** `design-review` skill pass + screenshots; no horizontal overflow; hero reads in ~5s (DESIGN.md quality gate).

### Phase E — Content mining & proof assets

- [ ] **Unit E1: Import additional proof imagery**

**Goal:** Ensure every new/updated block references a real, present image (R9, R4).
**Requirements:** R4, R9.
**Dependencies:** A2, A3.
**Files:** Add files under `public/proof/` (e.g., `baseworld.png` from source material if not already present); no code beyond `data.ts` references.
**Approach:** Copy needed stills from `/Users/tomo/portfolio-source/Assets/v3-proof-2026-07-01/` (e.g., `screenshots/baseworld.png`, far.cards tweet-media) into `public/proof/` with consistent naming; wire into `data.ts`. Pull any missing high-value still from the mac mini over SSH only if not already local.
**Patterns to follow:** Existing `public/proof/*` naming.
**Test scenarios:**

- Happy path: every `image`/`proofDetail.image`/`subProjects.image` path resolves (no 404 in build/`next/image`).
- Test expectation: none beyond asset-presence check.
  **Verification:** `find` confirms all referenced proof paths exist; build has no missing-image errors.

### Phase F — Verification

- [ ] **Unit F1: Build, routes, and visual verification**

**Goal:** Prove the upgrade is correct and regression-free (R12).
**Requirements:** R12.
**Dependencies:** All prior.
**Files:** None (verification only).
**Approach:** `npm run build`; enumerate generated `/objects/*` routes and confirm the intended set (beeper, mint-club, hunt-town, tradefish, base-world, taptato — far.cards folded into mint-club); run `next start`/dev and capture desktop + mobile screenshots of home + key case pages; run `design-review` for a QA pass; grep for disallowed strings ("55 commits") and dead internal links.
**Patterns to follow:** DESIGN.md quality gates (hero reads in 5s, curated not card-spam, mobile hierarchy preserved).
**Test scenarios:**

- Happy path: build passes; all intended routes prerender; robots/sitemap still valid.
- Edge case: old slugs (`far-cards`, `taptato-base-world`) return 404 with no internal links pointing at them.
- Integration: mobile dock no longer overlaps; ownership + best-fit + how-i-work visible.
  **Verification:** Green build + screenshot set + design-review sign-off; ready for PR/preview.

## System-Wide Impact

- **Interaction graph:** `data.ts` is imported by `page.tsx`, `objects/[slug]/page.tsx` (routes/metadata/static params), `sitemap.ts`. Changing `cases[]` cascades to routes + sitemap automatically — the main blast radius is "did every consumer handle the new/removed slugs?"
- **Error propagation:** Missing `/proof` images surface as build-time `next/image` errors — caught by F1. `sourceNeeded` placeholders must never render as live links.
- **State lifecycle risks:** None (static site, no persistence). gsap/motion effects must tolerate new DOM nodes and still honor `prefers-reduced-motion`.
- **API surface parity:** Old object slugs (`far-cards`, `taptato-base-world`) disappear — check `app/sitemap.ts`, any hardcoded links in `page.tsx`/`CaseMotion.tsx` (`back-link`, home grid hrefs) and the existing `hunt-mintclub` 307 redirect noted in QA. Add redirects only if an external inbound link is known.
- **Integration coverage:** Route generation + image resolution are the cross-layer behaviors unit-level checks won't prove — covered by the F1 build + route enumeration.
- **Unchanged invariants:** Design tokens, font setup, `robots.ts`/`sitemap.ts` mechanics, Beeper metric _numbers_, and the overall section order (beyond the objects restructure) stay as-is. This plan does not alter the build/deploy pipeline or dependencies.

## Risks & Dependencies

| Risk                                                            | Mitigation                                                                                                          |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Removing far.cards / combined slug breaks internal links or SEO | Enumerate + update all internal hrefs in F1; add redirects only if an external link is known; ledger rows retained. |
| Ownership copy overclaims and undermines trust                  | Every line checked against `EVIDENCE-MAP.md` "safe claims"; unconfirmed → `sourceNeeded` or omitted.                |
| Base World grant / Jesse Pollak proof not yet provided          | Ship labeled "source pending" placeholders; Tony fills later with zero code change.                                 |
| Equal-grid restyle regresses mobile hierarchy                   | Screenshots at 375/768/1280 + design-review before done; DESIGN.md mobile gate.                                     |
| Scope creep into a full re-theme                                | Scope boundary: tokens frozen; upgrade within the existing aesthetic only.                                          |
| Motion/gsap breakage with new nodes                             | Keep existing `prefers-reduced-motion` guard; verify case pages animate + degrade.                                  |

## Documentation / Operational Notes

- Update repo-root `EVIDENCE-MAP.md` "Archive cleanup" only if the ledger set changes; otherwise leave as the binding reference.
- No env vars, migrations, or infra changes. Deploy/preview handled by the surrounding pipeline; production promotion remains Tony's decision.
- Remaining Tony-supplied assets (Beeper dashboard/contract proof, Base Founders Residency invite, mfer-token tweets, fireside chat links, TradeFish demo video, Base World grant, Jesse Pollak tweet) tracked as `sourceNeeded` placeholders for a later pass.

## Sources & References

- **Origin documents:** `/Users/tomo/portfolio-source/Feedback/portfolio-qa-question-list-2026-07-04.md`, `/Users/tomo/portfolio-source/Feedback/portfolio-tony-answers-2026-07-04.md`
- Binding local knowledge: `EVIDENCE-MAP.md`, `PRODUCT.md`, `DESIGN.md` (repo root)
- Code: `app/data.ts`, `app/page.tsx`, `app/objects/[slug]/CaseMotion.tsx`, `app/objects/[slug]/page.tsx`, `app/layout.tsx`, `app/globals.css`
- Content mining: `/Users/tomo/portfolio-source/Assets/v3-proof-2026-07-01/` (+ mac mini `Projects/Beeper/`, `Career/Outputs/` via SSH)
- Upstream repo: `github.com/tonymfer/tony-portfolio-site` (local is ahead by 6 commits)
