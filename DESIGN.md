# DESIGN.md — TokenWorks-style experimental archive

## Direction
Tony-specific proof archive: keep the experimental archive discipline Tony liked from TokenWorks, but remove the TokenWorks clone smell by using Tony's own artifact taxonomy — products, primitives, receipts, scars, and next bets. "Primitive Archive" is a framing layer, not the primary personal brand.

## Visual rules
- Monochrome/off-white base. Color comes mainly from real proof thumbnails.
- Big blunt editorial tagline, bottom-weighted on desktop.
- Small mono metadata/contact stack.
- Numbered selected works and archive rows.
- Thin dividers, strong grid alignment, lots of breathing room.
- Interactive feel: understated hover previews, not scrolljacking or 3D.
- Avoid Impeccable slop tells: no gradient text, no nested cards, no repeated section eyebrows, no hero metric template smell, no side-stripe borders, no decorative stripe fields unless they clarify proof media.
- Proof images must be large enough to function as evidence, not just texture.

## Palette
- Background: #f3f0e8 / #ebe6d9
- Ink: #101010
- Muted: #6f6a60
- Hairline: rgba(16,16,16,.16)
- Accent: #2f65ff used rarely for focus/hover/proof tags
- Dark mode avoided for this variant to prevent generic crypto dark-site clone.

## Type
- Geist Sans for large editorial text.
- Geist Mono for metadata, indexes, dates, tags.
- Tight tracking for headings; comfortable leading for notes.

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
- No fake code snippets/terminal panels.

## Quality gates
- Hero should read in 5 seconds: Tony Park, AI × Web3 Product Engineer, 4+ year company spine, flagship proof, and direct CTA.
- Selected Works should feel curated, not card spam.
- Archive should reframe scattered projects as a shipping record.
- Mobile should preserve hierarchy without microscopic metadata.
- Build must pass `npm run build`; screenshots captured before delivery.
