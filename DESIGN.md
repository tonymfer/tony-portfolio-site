# DESIGN.md — TokenWorks-style experimental archive

## Direction

Tony-specific proof archive: keep the experimental archive discipline Tony liked from TokenWorks, but remove the TokenWorks clone smell by using Tony's own artifact taxonomy — products, primitives, receipts, scars, and next bets. "Primitive Archive" is a framing layer, not the primary personal brand.

## Visual rules

- Dark CRT-terminal base (Terminal Receipts). Color comes from phosphor-green chrome, Base-blue links, and real proof thumbnails.
- Big blunt editorial tagline, bottom-weighted on desktop.
- Small mono metadata/contact stack.
- Numbered selected works and archive rows.
- Thin dividers, strong grid alignment, lots of breathing room.
- Interactive feel: understated hover previews, not scrolljacking or 3D.
- Avoid Impeccable slop tells: no gradient text, no nested cards, no repeated section eyebrows, no hero metric template smell, no side-stripe borders, no decorative stripe fields unless they clarify proof media.
- Proof images must be large enough to function as evidence, not just texture.

## Palette (Terminal Receipts)

- Ground: #0c0e0b CRT-black (`--bg`), #05070a cool floor (`--bg-2`)
- Ink: #e9efe0 phosphor-bone (`--ink`); muted #99a48d; faint #616b57
- Hairline: rgba(233,239,224,.13) light-alpha on dark (`--line`)
- Accent split: phosphor-green #63e187 (`--green`, structural chrome — receipt chips, markers, timestamps) + Base-blue #4f80ff (`--accent`, links/interactive only)
- Panels: near-black lifts (rgba(233,239,224,.05–.11)) defined by hairlines, not fill lightness
- Texture: dot-matrix phosphor grid + CRT scanlines + screen-curvature vignette (`body::before`/`::after`)
- Dark is deliberate: the site extends the HeroPager's LCD DNA so the whole page reads as one lit receipts machine. Avoid the generic crypto dark-site clone by anchoring on the pager, phosphor chrome, and receipt-tape texture — not neon-on-black.
- The wiki shares this exact ground via its own `--wiki-*` tokens.

## Type (mono-forward)

- IBM Plex Mono (`--font-geist-mono`) for body, UI, metadata, indexes, dates, tags — the terminal workhorse.
- Bricolage Grotesque (`--font-display`) for big display headlines — grotesk-vs-mono contrast.
- Doto (`--font-lcd`) only on the HeroPager receipt screen.
- The wiki keeps a serif display (`--font-wiki-serif`) as its reference-document voice on the same dark ground.
- Tight tracking for headings; comfortable leading for notes. Headings stay roman — no italic headers.

## Components

- Header: compact brand + path + links.
- Link matrix: label/value pairs like X, GitHub, Farcaster, Ethereum, Inquire.
- Selected row: index, project title, descriptor, tags, hover image/proof cue.
- Archive row: dense artifact log with date/type/status.
- Field note: case-study skeleton: Overview, Idea, Built, Proof, Right, Wrong.

## Anti-clone constraints

- Do not copy TokenWorks logo or exact tagline.
- Make Tony an individual product engineer, not a faceless collective.
- Keep AI-agent/workflow artifacts visible beside onchain social.
- No fake code snippets or re-drawn browser/IDE chrome (traffic-light dots, fake URL bars). The terminal aesthetic is the real design language — the LCD pager is a signature interaction, not fake chrome faking a screenshot.

## Quality gates

- Hero should read in 5 seconds: Tony Park, Product Engineer, 4+ year company spine, live receipts (the pager feed), and direct CTA.
- Selected Works should feel curated, not card spam.
- Archive should reframe scattered projects as a shipping record.
- Mobile should preserve hierarchy without microscopic metadata.
- Build must pass `npm run build`; screenshots captured before delivery.
