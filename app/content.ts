import { cases, pagerReceipts, type CaseStudy } from "./data";

// Cross-view facts shared by the visual home (`/`), the motion deck, and the index (`/wiki`).
// Route files must not re-declare primitives, surfaces, field entries, or deck annotations.
// Wording here is moved verbatim from the routes; editing copy is a separate change.

export type ProductPrimitive = {
  id: string;
  name: string;
  definition: string;
  exampleCaseSlug: string;
};

export type FieldEntry = {
  date: string;
  title: string;
  body: string;
  href: string;
  image?: string;
};

// `name`, `image`, and `live` are overrides: a surface can be branded or linked differently
// from its case (Beeper the case ships as the "Beep Works" surface). Unset fields fall back
// to the case entry.
export type ProductSurface = {
  caseSlug: string;
  primitiveId: string;
  name?: string;
  image?: string;
  copy: string;
  detail: string;
  live: string;
};

export type ProofDeckCard = {
  caseSlug: string;
  label: string;
  kind: string;
  proof: string;
  image?: string;
};

export function caseBySlug(slug: string): CaseStudy {
  const found = cases.find((item) => item.slug === slug);
  if (!found) throw new Error(`Unknown case slug: ${slug}`);
  return found;
}

export const primitives: ProductPrimitive[] = [
  {
    id: "paid-attention",
    name: "Paid attention",
    definition:
      "A receiver prices interruption; a sender pays for signal; ignored value can return instead of becoming notification residue.",
    exampleCaseSlug: "beeper",
  },
  {
    id: "token-backed-markets",
    name: "Token-backed markets",
    definition:
      "Bonding curves, backing assets, swaps, and token families expressed as inspectable product behavior.",
    exampleCaseSlug: "mint-club",
  },
  {
    id: "builder-community-os",
    name: "Builder community OS",
    definition:
      "Support, rewards, education, and public demo loops that help early builders move from idea to artifact.",
    exampleCaseSlug: "hunt-town",
  },
  {
    id: "agent-reputation",
    name: "Agent reputation",
    definition:
      "AI market calls become timestamped records with outcomes and score movement, without custody or trade execution.",
    exampleCaseSlug: "tradefish",
  },
  {
    id: "wallet-infrastructure",
    name: "Wallet infrastructure",
    definition:
      "Accounts and payments become understandable when the interface turns them into playable or social actions.",
    exampleCaseSlug: "taptato",
  },
];

export function primitiveById(id: string): ProductPrimitive {
  const found = primitives.find((item) => item.id === id);
  if (!found) throw new Error(`Unknown primitive id: ${id}`);
  return found;
}

export const productSurfaces: ProductSurface[] = [
  {
    caseSlug: "beeper",
    primitiveId: "paid-attention",
    name: "Beep Works",
    copy: "A custom pixel/CRT product world that makes inbox pricing, rewards, and refund-on-ignore understandable before the first transaction.",
    detail: "Art direction · responsive system · interaction states",
    live: "https://beep.works/",
  },
  {
    caseSlug: "mint-club",
    primitiveId: "token-backed-markets",
    copy: "Bonding curves, backing assets, swaps, and token families translated into a product surface people can inspect and operate.",
    detail: "Product UX · frontend · SDK surfaces",
    live: "https://mint.club/cbbtc",
  },
  {
    caseSlug: "tradefish",
    primitiveId: "agent-reputation",
    copy: "AI market calls turned into legible records: prediction, outcome, score movement, and proof without custody or execution theater.",
    detail: "System design · product boundary · hackathon winner",
    live: "https://github.com/tonymfer/TradeFish",
  },
  {
    caseSlug: "taptato",
    primitiveId: "wallet-infrastructure",
    copy: "Account and payment primitives made tangible through a playable USDC loop people could immediately touch — account abstraction hidden inside a game.",
    detail: "Prototype · wallet UX · public demo",
    live: "https://taptato.vercel.app/",
  },
];

export const proofDeck: ProofDeckCard[] = [
  {
    caseSlug: "beeper",
    label: "Beep Works",
    kind: "paid attention",
    proof: "44.8K users",
  },
  {
    caseSlug: "mint-club",
    label: "Mint Club",
    kind: "token UX",
    proof: "4+ company years",
  },
  {
    caseSlug: "hunt-town",
    label: "EWHA-CHAIN",
    kind: "builder education",
    proof: "MiniKit workshop",
    image: "/proof/ewhachain-session-portrait.jpg",
  },
  {
    caseSlug: "tradefish",
    label: "TradeFish",
    kind: "agent reputation",
    proof: "1st place",
  },
];

// The public field log: sourced rooms and residencies. The home page's video receipts are a
// separate, deliberately media-first presentation and keep their own wording.
export const fieldEntries: FieldEntry[] = [
  {
    date: "Sep 2025",
    title: "EWHA-CHAIN First Session",
    body: "Led a hands-on Base MiniKit and Mint Club SDK workshop for builders creating Zora-style SocialFi services.",
    href: "https://x.com/ewhachain/status/1966407486166139390",
    image: "/proof/ewhachain-session-wide.jpg",
  },
  {
    date: "Sep 2025",
    title: "Blockchain at Yonsei",
    body: "Ran a MiniKit product session translating wallet and social primitives into a buildable miniapp flow.",
    href: "https://x.com/tonymfer/status/1965330528904827040",
    image: "/proof/yonsei-workshop.jpg",
  },
  {
    date: "2026",
    title: "Base APAC Founders Residency",
    body: "Developed and demonstrated Beeper's paid-attention product loop with external ecosystem proof.",
    href: "https://x.com/baseapac/status/2062479675461603777",
    image: "/proof/baseapac-cold-plunge.jpg",
  },
  {
    date: "Jul 2026",
    title: "Base APAC Based Builders Feature",
    body: "Featured as the Korea-based builder behind Beeper, with public recognition for TradeFish, Base Camp 2025, Founders Residency Batch 001, and Base Batches 003.",
    href: "https://x.com/baseapac/status/2076637652107882803",
    image: "/proof/baseapac-builder-feature.jpg",
  },
];

// Resolved views. Building these at module load also asserts every slug and primitive id
// referenced above exists — a bad reference throws in dev, test, and build.
export const resolvedSurfaces = productSurfaces.map((surface) => {
  const study = caseBySlug(surface.caseSlug);
  return {
    ...surface,
    name: surface.name ?? study.name,
    image: surface.image ?? study.image,
    primitive: primitiveById(surface.primitiveId).name,
    caseHref: `/objects/${study.slug}`,
  };
});

export const resolvedProofDeck = proofDeck.map((card) => {
  const study = caseBySlug(card.caseSlug);
  return {
    ...card,
    image: card.image ?? study.image,
    href: `/objects/${study.slug}`,
  };
});

export const resolvedPrimitives = primitives.map((primitive) => ({
  ...primitive,
  example: caseBySlug(primitive.exampleCaseSlug).name,
}));

// The HeroPager feed lives in data.ts (single source of truth for case claims);
// resolving it here throws at build if a receipt cites a case that no longer exists.
export const resolvedPagerReceipts = pagerReceipts.map((receipt) => ({
  ...receipt,
  caseHref: `/objects/${caseBySlug(receipt.caseSlug).slug}`,
}));
