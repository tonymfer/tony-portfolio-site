export type ProofPoint =
  string | { text: string; href?: string; sourceNeeded?: boolean };

export type Ownership = {
  role: string;
  team: string;
  owned: string[];
  influenced: string[];
  proof: string;
};

export type ProofDetail = { image: string; caption: string };

export type SubProject = {
  name: string;
  blurb: string;
  href?: string;
  image?: string;
  tags?: string[];
};

export type OrbitNode = {
  name: string;
  note: string;
  href: string;
  external?: boolean;
};
export type OrbitGroup = { anchor: OrbitNode; satellites: OrbitNode[] };
export type OrbitEra = { era: string; span: string; groups: OrbitGroup[] };

// Home hero receipt feed. Every value is a case claim, and each entry ties to a
// caseSlug so the pager can't drift from the evidence map; content.ts resolves the
// slugs and throws at build if one dangles (same guard as surfaces/deck).
export type PagerReceipt = { value: string; label: string; caseSlug: string };

export type CaseStudy = {
  slug: string;
  no: string;
  name: string;
  object: string;
  role: string;
  year: string;
  thread?: { label: string; slug: string };
  image: string;
  desc: string;
  tags: string[];
  proof: string;
  href: string;
  live?: string;
  primitive: string;
  artifact: string;
  proofPoints: ProofPoint[];
  right: string[];
  wrong: string[];
  next: string;
  fieldNotes?: Array<{ title: string; body: string }>;
  timeline?: Array<{
    date: string;
    title: string;
    href?: string;
    note?: string;
  }>;
  ownership?: Ownership;
  metricSource?: string;
  proofDetail?: ProofDetail[];
  subProjects?: SubProject[];
};

export const cases: CaseStudy[] = [
  {
    slug: "beeper",
    no: "A-01",
    name: "Beeper",
    object: "paid signal layer",
    role: "co-founder / product + front-end + growth",
    year: "2025–2026",
    image: "/proof/beeper-hardware.jpg",
    desc: "A Base-native paid attention product where users set an inbox price, earn for engagement, and unread messages can refund the sender.",
    tags: ["Base", "Farcaster", "paid attention", "BeeperX", "hardware"],
    proof: "44.8K users / 39.1% read rate / #3 mini app",
    href: "https://beep.works",
    live: "https://beep.works",
    primitive:
      "Attention is usually captured by platforms and spammed by senders. Beeper tests the opposite behavior: receivers own an inbox price, senders pay for signal, and ignored attention can refund instead of becoming another notification tax.",
    artifact:
      "A shipped Base mini-app, full sender flow, onchain reward/payment contracts, Beepi AI composition, BeeperX SDK/API, partner campaign rail, and physical pager roadmap.",
    metricSource:
      "Source: Base Batches 003 evidence bundle + public Beeper / Base APAC receipts. Definitions available on request.",
    proofPoints: [
      "44,850 total users and 32,793 active users in the Base Batches evidence bundle",
      "7,936 unique users and 5,675 transaction users in the last 28 days",
      "2,400 unique paid-message senders",
      "39.1% read rate — nearly 2x email, 8x push",
      // R4 sign-off (2026-07-16): these ship as source-pending until each has a
      // public receipt — on-chain (contract addresses), dashboard, and residency.
      {
        text: "1,215 repeat senders / 50.6% repeat retention",
        sourceNeeded: true,
      },
      { text: "106K+ battery check-ins", sourceNeeded: true },
      {
        text: "60+ Base mainnet contracts with 412K+ total transactions",
        sourceNeeded: true,
      },
      {
        text: "BeeperX SDK/API with 2,400+ API keys issued",
        sourceNeeded: true,
      },
      {
        text: "Live Beep Works website — retro CRT/pixel product surface",
        href: "https://beep.works/",
      },
      {
        text: "BEEP v2 paid-attention launch media",
        href: "https://x.com/beeponbase/status/2009487314708517220",
      },
      {
        text: "Base APAC founder/residency feature",
        href: "https://x.com/baseapac/status/2062479675461603777",
      },
      {
        text: "Base APAC Based Builders feature — paid attention onchain, TradeFish win, Base Camp 2025, Residency Batch 001, Base Batches 003",
        href: "https://x.com/baseapac/status/2076637652107882803",
      },
    ],
    proofDetail: [
      {
        image: "/proof/beep-v2.jpg",
        caption:
          "What this proves: the inbox-price mechanic shipped as a real product surface, not a pitch — BEEP v2 paid-attention launch.",
      },
      {
        image: "/proof/beeper-battery.png",
        caption:
          "What this proves: battery check-ins are a recurring on-chain engagement loop, not a one-time install spike — the public count receipt is still pending.",
      },
      {
        image: "/proof/baseapac-residency.jpg",
        caption:
          "What this proves: a public Base APAC feature covering the product and its traction — the Founders Residency invite itself ships as a receipt when public.",
      },
    ],
    ownership: {
      role: "Co-founder / product + front-end + growth",
      team: "Built together with a small founding team. Sungwoo led infrastructure, smart contracts, and backend; Mario led hardware engineering for the pager.",
      owned: [
        "Full front-end rebuild: compose, targeting, reward planning, quote, and onchain transaction flows",
        "Product design and interaction states across the sender flow",
        "Campaign mechanics and partner activation surfaces",
        "Copy, story, and the public proof layer",
        "Partner research and launch",
      ],
      influenced: [
        "Reward / payment contract behavior and settlement UX",
        "BeeperX SDK/API surface for agent access",
        "Physical pager product direction",
      ],
      proof:
        "Base Batches 003 evidence bundle + public Beeper / Base APAC receipts",
    },
    right: [
      "The incentive is clear: senders pay for signal, receivers get paid for attention, and unread messages can refund.",
      "The product found two wedges at once: consumer inbox pricing and partner mini-app distribution.",
      "The sender flow is a real product system, not a landing page: compose, targeting, missions, planning, quote, wallet, transaction, success/failure states.",
      "BeeperX extends the same attention rail to agents that need permissioned access to humans.",
    ],
    wrong: [
      "Some metric definitions still need cleanup before investor-grade charts, especially claim-like value fields.",
      "Paid attention still needs crisp non-crypto framing; outside Base/Farcaster, the refund loop must be explained in one interaction.",
      "Hardware makes the idea tangible, but also raises expectations around shipping, latency, battery, support, and reliability.",
      "Campaign memos are useful pipeline context, but many partner fields are unconfirmed and cannot be used as public proof.",
    ],
    next: "Turn the case page into a receipt-driven launch memo: show the inbox-price primitive, sender flow, onchain settlement, partner rank jumps, BeeperX agent rail, and hardware pager future without overloading the first screen.",
    // Canonical narrative-arc titles (Wall/Fork/Resolution/Impact) — the reference
    // arc that validates the template. Authored from already-sourced proofPoints
    // only; Tony signs off at the U8 checkpoint before ship. See narrative.ts.
    fieldNotes: [
      {
        title: "Wall",
        body: "Attention is captured by platforms and spammed by senders. The hard part of Beeper was never sending a paid message — it was making paid attention feel like a fair exchange instead of an ad product. If a receiver could not see why the loop was fair before the transaction, the whole thing read as one more spam surface.",
      },
      {
        title: "Fork",
        body: "I worked across product, front-end, and growth, and the recurring call was the same: hide the chain until it becomes proof. Compose, targeting, reward planning, quote and transaction states — every screen had to explain money, attention, and onchain settlement without making anyone read protocol copy. The better versions surfaced the chain only as a budget, a receipt, or a refund.",
      },
      {
        title: "Resolution",
        body: "The sender flow shipped as a real product system, not a landing page: compose, targets, missions, plan, confirm, and an onchain receipt, with a refund path for ignored messages. BeeperX extended the same attention rail to agents that need permissioned access to humans, and the Beep Works site became frontend proof — a custom pixel/CRT world that makes inbox pricing legible in one screen.",
      },
      {
        title: "Impact",
        body: "44,850 total users, 32,793 of them active, and a 39.1% read rate — nearly 2x email. 2,400 people paid to send a message, which is the loop actually working: senders paying for signal, receivers earning for attention. The deeper figures — battery check-ins, total transactions across Base mainnet contracts, repeat-sender retention, BeeperX API keys, and the Base APAC residency track — are real but still moving from internal dashboards to public receipts, so they ship as source-pending until each carries a link.",
      },
    ],
    timeline: [
      {
        date: "2025-11",
        title: "Beeper hardware waitlist",
        href: "https://x.com/tonymfer/status/1991792691198427618",
        note: "hardware for Farcaster, filtering noise and amplifying real signal on Base",
      },
      {
        date: "2025-12",
        title: "first 1,500 beepers",
        href: "https://x.com/beeponbase/status/1996137950258880592",
        note: "early waitlist / stress-test signal",
      },
      {
        date: "2025-12",
        title: "first 2,000 beepers",
        href: "https://x.com/beeponbase/status/1996397711621509132",
        note: "waitlist growth before closed beta",
      },
      {
        date: "2026-01",
        title: "top 5 miniapp signal",
        href: "https://x.com/beeponbase/status/2013170568611402151",
        note: "ranked near other leading Base miniapps without a token",
      },
      {
        date: "2026-01",
        title: "1,351 beepers answered stable vs degen",
        href: "https://x.com/beeponbase/status/2016108644400873672",
        note: "campaign mechanic + user response loop",
      },
      {
        date: "2026-02",
        title: "Brick Side Chat #67 with Steemhunt",
        href: "https://x.com/beeponbase/status/2027031289904447697",
        note: "contacts, BeeperX, BP rewards, and product overhaul",
      },
      {
        date: "2026-03",
        title: "Why Beeper",
        href: "https://x.com/beeponbase/status/2036694291121406201",
        note: "attention thesis: every app takes attention for free",
      },
      {
        date: "2026-05",
        title: "Farcon Rome NFC name tags",
        href: "https://x.com/beeponbase/status/2051536583317483582",
        note: "first offline experiment for attention/social identity",
      },
      {
        date: "2026-06",
        title: "Base APAC / Base Founders Residency feature",
        href: "https://x.com/baseapac/status/2062479675461603777",
        note: "external validation: hackathon wins, Base Camp support, flew from Korea to residency",
      },
      {
        date: "2026-07",
        title: "Base APAC / Celebrating Based Builders in APAC",
        href: "https://x.com/baseapac/status/2076637652107882803",
        note: "external builder profile: Beeper, TradeFish win, Base Camp 2025, Residency Batch 001, and Base Batches 003",
      },
    ],
  },
  {
    slug: "mint-club",
    no: "A-02",
    name: "Mint Club",
    object: "token product surfaces",
    role: "product + front-end / SDK + ecosystem UX",
    year: "2022–2026",
    image: "/proof/mint-cbbtc.png",
    desc: "Token-backed asset and bonding-curve product work: launch flows, child-token discovery, staking/reward surfaces, cross-chain swap UX, Base/mfer views, SDK demos, and Farcaster-native product surfaces.",
    tags: [
      "Mint Club",
      "Base",
      "bonding curves",
      "SDK",
      "token UX",
      "Farcaster",
    ],
    proof: "SDK / swap / staking / mfer-backed token / Base era",
    href: "https://x.com/tonymfer/status/1847218266793714078",
    live: "https://mint.club/cbbtc",
    primitive:
      "Mint Club’s hard problem was making token-backed markets and bonding curves feel like usable product surfaces instead of raw crypto mechanics. My work sat where primitives became interfaces: launch, swap, discover, stake, reward, and teach.",
    artifact:
      "Product/front-end surfaces and demos across Mint Club: token-backed asset pages, child/sibling token discovery, mfer/Base views, cross-chain swap UX, staking/reward pools, Mint Club SDK examples, Mintdrop, Brainlets, and Base/Farcaster surfaces including far.cards.",
    proofPoints: [
      {
        text: "BASE ERA in Mint Club — Base token featuring and child tokens backed by favorite Base tokens",
        href: "https://x.com/tonymfer/status/1847218266793714078",
      },
      {
        text: "Mint Club product update: mfer vision, event filtering, token detail sibling/child lookup",
        href: "https://x.com/tonymfer/status/1846169255483678765",
      },
      {
        text: "Mint Club child-token / mfer ecosystem update",
        href: "https://x.com/tonymfer/status/1857278167649759548",
      },
      {
        text: "Mintdrop metrics: $8K worth of child coins, 3,000 unique users, nearly 80,000 Base microtransactions",
        href: "https://x.com/tonymfer/status/1927199768100384856",
      },
      {
        text: "Brainlets — hand-drawn $BRAINLET site on Degen L3, built on Mint Club assets, still live",
        href: "https://www.brainlets.life/",
      },
      {
        text: "mint.club-v2-sdk commits by tonymfer",
        href: "https://github.com/Steemhunt/mint.club-v2-sdk/commits?author=tonymfer",
      },
      {
        text: "hunt-mint-swap commits by tonymfer",
        href: "https://github.com/Steemhunt/hunt-mint-swap/commits?author=tonymfer",
      },
    ],
    proofDetail: [
      {
        image: "/proof/mint-cbbtc.png",
        caption:
          "What this proves: bonding-curve / token-backing mechanics rendered as an operable product page — cbBTC token-backed surface I built the front-end for.",
      },
      {
        image: "/proof/mintdrop-metrics.png",
        caption:
          "What this proves: Mintdrop drove $8K in child coins, 3,000 users, and ~80K Base microtransactions — a growth loop, front-end fully mine.",
      },
    ],
    subProjects: [
      {
        name: "far.cards",
        blurb:
          "Physical-social Farcaster cards — NFC identity objects you can hand someone at an event. A Farcaster-native IRL surface built in the Mint Club / onchain-social orbit.",
        href: "https://x.com/tonymfer/status/2042628827059536214",
        image: "/proof/farcards-spread.png",
        tags: ["Farcaster", "NFC", "social object"],
      },
      {
        name: "Mintdrop",
        blurb:
          "Growth product built for Mint Club: a launcher for child coins on Base. Front-end fully mine; the project has since shut down, but the receipts stand: $8K child coins, 3,000 users, ~80K microtransactions.",
        href: "https://x.com/tonymfer/status/1927199768100384856",
        image: "/proof/mintdrop-metrics.png",
        tags: ["Base", "growth loop", "child tokens"],
      },
      {
        name: "Brainlets",
        blurb:
          "Hand-drawn meme token site for $BRAINLET on Degen L3, built on Mint Club assets during the Degen Chain wave — an interactive 'cut to start' brainlet world where the website itself carries the token narrative. Still live.",
        href: "https://www.brainlets.life/",
        image: "/proof/brainlets-site.png",
        tags: ["Degen L3", "token narrative", "interactive site"],
      },
    ],
    ownership: {
      role: "Product + front-end / SDK + ecosystem UX",
      team: "Small startup team; I led most front-end and app-layer surfaces. Deeper infra/contract work was shared with the core team.",
      owned: [
        "Most Mint Club front-end surfaces (if you use mint.club, most of the front-end is mine)",
        "Swap, staking, lockup, and airdrop tools",
        "Smart-contract ↔ front-end integration",
        "Backend data persistence and user dashboards",
        "mfer-backed token product — strongly led, including community activation and viral traction",
      ],
      influenced: [
        "Bonding-curve and token-backing product direction",
        "Base-era featuring and child-token discovery",
        "SDK examples and workshop apps",
      ],
      proof:
        "mint.club live surfaces, public Mint Club posts, and the GitHub commit trail",
    },
    right: [
      "The same product muscle repeated for years: turn bonding curves, token backing, swaps, staking, and reward mechanics into screens people could actually operate.",
      "Mint Club forced product clarity because the primitive is abstract; the interface had to show action, value, risk, and proof without protocol lectures.",
      "The Base/Farcaster push created a bridge from token infrastructure into social distribution and miniapp education.",
    ],
    wrong: [
      "A lot of the work is distributed across many surfaces and commits, so it needs an evidence trail rather than one clean launch page.",
      "Token dashboards can look like DeFi noise if the portfolio does not explain the user action and product intent.",
      "Some public posts prove launches and features, but exact ownership boundaries still need careful wording.",
    ],
    next: "Turn Mint Club into a real case study with three artifact strips: product surface, SDK/workshop app, and growth metrics. The page should show years of accumulated product work, not one screenshot.",
    fieldNotes: [
      {
        title: "My lane",
        body: "Product and front-end/app-layer work: surfaces, flows, demos, SDK examples, and the public language around making token mechanics usable.",
      },
      {
        title: "Repeated problem",
        body: "Every feature had the same job: make an abstract onchain mechanic legible enough for projects, holders, and builders to use without needing protocol context first.",
      },
      {
        title: "Proof shape",
        body: "The strongest evidence is not one metric. It is the combination of GitHub commits, product screenshots, Mint Club posts, Base-era updates, and workshop demos across multiple years.",
      },
    ],
    timeline: [
      {
        date: "2023",
        title: "Dixel / early Steemhunt repo work",
        href: "https://github.com/Steemhunt/dixel-v2-contract/commits?author=tonymfer",
        note: "early public GitHub trail",
      },
      {
        date: "2024-05 → 2025-08",
        title: "mint.club-v2-sdk commits",
        href: "https://github.com/Steemhunt/mint.club-v2-sdk/commits?author=tonymfer",
        note: "SDK / chain support / examples",
      },
      {
        date: "2024-07",
        title: "web3kaist-mintclub hook updates",
        href: "https://github.com/Steemhunt/web3kaist-mintclub/commits?author=tonymfer",
        note: "education/demo surface",
      },
      {
        date: "2024-08",
        title: "Cross-chain swap UX on Mint Club",
        note: "Base/mainnet/BNB/Arbitrum/Optimism/Degen/Blast/Zora bridge/swap/buy support",
      },
      {
        date: "2024-10",
        title: "mfer-backed token launch flow",
        href: "https://x.com/tonymfer/status/1843847067837575181",
        note: "instant launch of mfercoin-backed tokens",
      },
      {
        date: "2024-10",
        title: "mfer vision + child/sibling token lookup",
        href: "https://x.com/tonymfer/status/1846169255483678765",
        note: "event filtering + token detail discovery",
      },
      {
        date: "2024-10",
        title: "BASE ERA in Mint Club",
        href: "https://x.com/tonymfer/status/1847218266793714078",
        note: "Base token featuring + child tokens backed by favorite tokens",
      },
      {
        date: "2024-11",
        title: "Mint Club child-token / mfer ecosystem",
        href: "https://x.com/tonymfer/status/1857278167649759548",
        note: "ecosystem product update",
      },
      {
        date: "2025-03",
        title: "MT migration to Base",
        href: "https://x.com/tonymfer/status/1897555258370613683",
        note: "platform token migration from BNB Chain to Base",
      },
      {
        date: "2025-05",
        title: "Mintdrop metrics",
        href: "https://x.com/tonymfer/status/1927199768100384856",
        note: "$8K child coins / 3,000 users / ~80K Base microtransactions",
      },
      {
        date: "2025-07",
        title: "Mint Club featured in the Base app",
        href: "https://x.com/tonymfer/status/1950819973213171808",
        note: "token family model surfaced through Base app distribution",
      },
      {
        date: "2025-07 → 2025-09",
        title: "hunt-mint-swap commits",
        href: "https://github.com/Steemhunt/hunt-mint-swap/commits?author=tonymfer",
        note: "chain switching / miniapp fixes",
      },
      {
        date: "2025-08",
        title: "Mint Club staking pools + early projects",
        href: "https://x.com/tonymfer/status/1952262233846931909",
        note: "stake NFTs/tokens, earn yield, support 10 early projects",
      },
    ],
  },
  {
    slug: "hunt-town",
    no: "A-03",
    name: "Hunt Town",
    object: "builder community OS",
    role: "community product + launch loops",
    year: "2022–2026",
    image: "/proof/yonsei-workshop.jpg",
    desc: "Builder-community work around Hunt Town: ideathons, Discord showcases, fireside chats, Huntzy community ops, early project support, rewards setup, Base/Farcaster education, and Korea/global Web3 activation loops.",
    tags: [
      "Hunt Town",
      "builder education",
      "Korea",
      "Base",
      "Farcaster",
      "community",
    ],
    proof: "ideathons / fireside chats / Huntzy ops / project support",
    href: "https://x.com/tonymfer/status/1702607526666359007",
    live: "https://x.com/tonymfer/status/1965330528904827040",
    primitive:
      "Hunt Town was the community/product layer around shipping: helping builders understand the primitives, launch small projects, get feedback, and move from Discord/Farcaster attention into actual product usage.",
    artifact:
      "A long-running set of builder activations: Hunt Town ideathons, fireside chats, Huntzy community operations, Warpcast Tools showcases, early project support, Mint Club rewards setup, Base/MiniKit workshops, university sessions, and community launch loops.",
    proofPoints: [
      {
        text: "Hunt Town Ideathon builder/community event",
        href: "https://x.com/tonymfer/status/1702607526666359007",
      },
      {
        text: "Hunt Town pushing Base + Farcaster",
        href: "https://x.com/tonymfer/status/1965330537369010555",
      },
      {
        text: "Mint Club staking pools / backing 10 early projects with rewards + setup support",
        href: "https://x.com/tonymfer/status/1952262233846931909",
      },
      {
        text: "Dreamplus Gangnam / EwhaChain session building Zora-style social dApps with Mint Club SDK",
        href: "https://x.com/tonymfer/status/1965330540338577440",
      },
      {
        text: "Blockchain at Yonsei / Base MiniKit + Mint Club SDK workshop",
        href: "https://x.com/tonymfer/status/1965330528904827040",
      },
      { text: "Fireside chats hosted on YouTube", sourceNeeded: true },
      { text: "Huntzy community operation", sourceNeeded: true },
    ],
    ownership: {
      role: "Community product + launch loops",
      team: "Small startup; I ran community-product operations end to end.",
      owned: [
        "Events and ideathons",
        "Discord operations",
        "Early-project support and reward setup",
        "Workshops and builder education",
        "Content and fireside-chat hosting on YouTube",
        "Huntzy community operation",
      ],
      influenced: [
        "Base / Farcaster ecosystem direction",
        "Builder adoption loops and product feedback",
      ],
      proof: "Public event posts, workshop receipts, and fireside-chat videos",
    },
    right: [
      "The work connected product to people: workshops, showcases, launch help, rewards, and feedback loops made abstract Web3 primitives usable for builders.",
      "Hunt Town is strong career evidence because it shows repeated community-product execution, not just isolated coding tasks.",
      "Korea builder activations made the product language sharper: if people could not build with it live, the interface or docs were not clear enough.",
    ],
    wrong: [
      "Community/product work is easy to undersell because the artifact is distributed across posts, sessions, Discord, demos, and support work.",
      "A university/workshop photo proves activity, but the page needs more screenshots/receipts to show product depth.",
      "Fireside-chat videos and Huntzy proof still need to be collected and linked.",
    ],
    next: "Build Hunt Town as the community-product case: ideathon → project setup → reward mechanics → fireside chat → workshop → Base/Farcaster distribution. It should prove that I ran adoption loops, not just frontend screens.",
    fieldNotes: [
      {
        title: "My lane",
        body: "Community product, builder education, launch support, and product translation: helping projects and builders understand what to build with Mint Club/Hunt Town primitives — plus hosting fireside chats and running the Huntzy community.",
      },
      {
        title: "What changed",
        body: "I learned that product adoption often happens outside the product UI: workshops, demos, Discord help, fireside chats, and launch narratives can decide whether a primitive becomes used or ignored.",
      },
      {
        title: "Proof shape",
        body: "The evidence is a timeline: ideathons, fireside chats, Warpcast/Farcaster showcases, early project support, Base/MiniKit workshops, and public posts around pushing Hunt Town into new ecosystems.",
      },
    ],
    timeline: [
      {
        date: "2023-09",
        title: "Hunt Town Ideathon",
        href: "https://x.com/tonymfer/status/1702607526666359007",
        note: "builder/community event",
      },
      {
        date: "2023-09",
        title: "Hunt Town reached 3,000+ members",
        href: "https://x.com/tonymfer/status/1706641820351103415",
        note: "early community scale signal",
      },
      {
        date: "2023-10",
        title: "Made By Apes #00261",
        href: "https://x.com/tonymfer/status/1714194449520320772",
        note: "BAYC ecosystem recognition for Hunt Town",
      },
      {
        date: "2023-12",
        title: "BUILD Points launch",
        href: "https://x.com/tonymfer/status/1738036401684570461",
        note: "virtual token / contribution mechanic for builders",
      },
      {
        date: "2024-01",
        title: "Hunt Town near 5,000 members",
        href: "https://x.com/tonymfer/status/1749722230970617955",
        note: "community growth milestone",
      },
      {
        date: "2024-01",
        title: "Builder tools: URL shortener + QR generator",
        href: "https://x.com/tonymfer/status/1743090052165718060",
        note: "utility tooling for Web3 builders",
      },
      {
        date: "2024-02",
        title: "Building NFT / HUNT token mechanics",
        href: "https://x.com/tonymfer/status/1760874243707814382",
        note: "1,000 HUNT lock-up mechanics and community participation",
      },
      {
        date: "2024-09",
        title: "Warpcast Tools showcase in Hunt Town Discord",
        note: "community demo / Farcaster utility loop",
      },
      {
        date: "2024-10",
        title: "Base Around The World regional builder surface",
        href: "https://x.com/tonymfer/status/1842653058658156561",
        note: "Base buildathon/community discovery",
      },
      {
        date: "2025-08",
        title: "10 early projects backed with rewards + setup support",
        href: "https://x.com/tonymfer/status/1952262233846931909",
        note: "launch support + reward mechanics",
      },
      {
        date: "2025-08",
        title: "yeonstagram Base/social miniapp prototype",
        href: "https://github.com/Steemhunt/yeonstagram/commits?author=tonymfer",
        note: "Base/social workshop prototype",
      },
      {
        date: "2025-09",
        title: "ewhagram workshop project",
        href: "https://github.com/Steemhunt/ewhagram/commits?author=tonymfer",
        note: "Base MiniKit + Mint Club SDK social dApp",
      },
      {
        date: "2025-09",
        title: "Blockchain at Yonsei MiniKit session",
        href: "https://x.com/tonymfer/status/1965330528904827040",
        note: "cloned Zora-style Instagram using Base app MiniKit",
      },
      {
        date: "2025-09",
        title: "Hunt Town pushing Base + Farcaster",
        href: "https://x.com/tonymfer/status/1965330537369010555",
        note: "ecosystem direction public signal",
      },
      {
        date: "2025-09",
        title: "Dreamplus Gangnam / EwhaChain Mint Club SDK session",
        href: "https://x.com/tonymfer/status/1965330540338577440",
        note: "live builder education",
      },
      {
        date: "2026-01",
        title: "Hunt Town live event promoted through Beeper",
        note: "Beeper sent event to 768 users who set Signal Token to $HUNT",
      },
    ],
  },
  {
    slug: "tradefish",
    no: "A-04",
    name: "TradeFish",
    object: "agent reputation rail",
    role: "builder / product direction + front-end",
    year: "2026",
    image: "/proof/tradefish-base-update.jpg",
    desc: "A no-custody market-call system for AI agents: every prediction becomes a tracked position, resolved outcome, reputation update, and proof receipt.",
    tags: ["AI agents", "markets", "Base", "no custody"],
    proof: "1st — Base Agent Hackathon · Solana Malaysia Demo Day",
    href: "https://github.com/tonymfer/TradeFish",
    live: "https://github.com/tonymfer/TradeFish",
    primitive:
      "If agents give market advice, the useful artifact is not the message. It is the receipt: what they said, when, what happened, and whether their reputation should change.",
    artifact:
      "A scored market-call system with tracked predictions, no-custody constraints, Base Agent Hackathon proof, a Solana Demo Day pitch, and a public GitHub repo.",
    proofPoints: [
      {
        text: "1st place at Base Agent Hackathon",
        href: "https://x.com/daehan_base/status/2048044505413399038",
      },
      {
        text: "Public GitHub repo",
        href: "https://github.com/tonymfer/TradeFish",
      },
      {
        text: "Solana Demo Day signal",
        href: "https://x.com/SuperteamMY/status/2058865116985327891",
      },
      "Presented at Korea Base Hackathon and Solana Malaysia Demo Day",
      "No-custody positioning and reputation receipt model",
    ],
    ownership: {
      role: "Builder / product direction + front-end",
      team: "Hackathon team build; I owned the product-facing surface.",
      owned: [
        "Front-end",
        "Product direction",
        "Submission / story",
        "Live demo and stage presentations",
      ],
      influenced: ["No-custody agent-reputation model and scoring"],
      proof:
        "1st place Base Agent Hackathon; presented at Korea Base Hackathon and Solana Malaysia Demo Day; public GitHub repo",
    },
    right: [
      "The constraint is clear: agents can recommend, not custody funds.",
      "The product turns vague AI alpha into auditable outcomes.",
      "Hackathon framing made the proof easy to evaluate, and I pitched it on stage twice.",
    ],
    wrong: [
      "A reputation rail only matters if enough agents/users create repeated calls.",
      "The product has to simplify market concepts without making fake promises.",
      "Proof UI needs to be more visual than tables if it is going to spread.",
    ],
    next: "Build a public leaderboard of agent calls with one-tap replay: prediction, entry, result, score delta, and why the call was accepted.",
    fieldNotes: [
      {
        title: "Problem",
        body: "AI trading demos usually collapse into either vague alpha or unsafe automation. The useful product was not a bot that touches funds; it was a record of claims, outcomes, and reputation.",
      },
      {
        title: "Decision",
        body: "I kept the product signal-only and no-custody. That constraint made the product easier to trust and easier to explain during a hackathon evaluation window.",
      },
      {
        title: "What was hard",
        body: "The UI had to make prediction quality visible without turning into a table dump. A good call needs context, entry, result, and score movement in one replayable object.",
      },
      {
        title: "What I learned",
        body: "Agent products need boundaries before they need more autonomy. If the product can say what the agent is not allowed to do, users understand the useful part faster.",
      },
    ],
  },
  {
    slug: "base-world",
    no: "A-05",
    name: "Base World",
    object: "community map",
    role: "prototype / demo builder",
    year: "2025",
    thread: { label: "built for Hunt Town", slug: "hunt-town" },
    image: "/proof/base-world-launch.jpg",
    desc: "A living map of the Base ecosystem, built for the Hunt Town community — membership turned into a visual, explorable surface people can point to and belong to.",
    tags: ["Base", "community map", "grant", "ecosystem"],
    proof: "Base grant / Jesse Pollak shoutout",
    href: "https://x.com/tonymfer/status/1808470847469785334",
    live: "https://github.com/tonymfer/base-world",
    primitive:
      "Ecosystem membership is usually an invisible list. Base World turns it into a spatial object: a map you can explore, point to, and feel part of.",
    artifact:
      "A Base World community map that renders ecosystem membership as a visual surface, backed by a Base grant, a Jesse Pollak shoutout, a public repo, and launch media.",
    proofPoints: [
      {
        text: "Base World launch signal",
        href: "https://x.com/tonymfer/status/1808470847469785334",
      },
      { text: "Received a Base grant", sourceNeeded: true },
      { text: "Jesse Pollak shoutout tweet", sourceNeeded: true },
      {
        text: "Base World public repo",
        href: "https://github.com/tonymfer/base-world",
      },
    ],
    proofDetail: [
      {
        image: "/proof/base-world-launch.jpg",
        caption:
          "What this proves: ecosystem membership rendered as an explorable spatial surface — the Base World community map at launch.",
      },
    ],
    ownership: {
      role: "Prototype / demo builder",
      team: "Solo / small build.",
      owned: [
        "Community map interface and interaction",
        "Base ecosystem visual surface",
        "Launch and public build thread",
      ],
      influenced: ["Base community discovery UX"],
      proof:
        "Base grant + Jesse Pollak shoutout (proof pending) and the public base-world repo",
    },
    right: [
      "Base World gives the ecosystem a spatial object people can point to.",
      "It earned real validation: a Base grant and a Jesse Pollak shoutout.",
      "The map is more memorable than a directory or a dashboard.",
    ],
    wrong: [
      "Community maps can go stale without an update ritual.",
      "The object needs a reason to return, not just a reason to launch.",
      "Grant/shoutout proof still needs to be surfaced with links and screenshots.",
    ],
    next: "Give the map a living update loop: new projects, new members, and recent activity so the object stays worth revisiting.",
  },
  {
    slug: "taptato",
    no: "A-06",
    name: "TapTato",
    object: "playable wallet infra",
    role: "prototype / demo builder",
    year: "2025",
    image: "/proof/taptato.png",
    desc: "A zero-popup USDC potato game — wallet infrastructure (Base Sub Accounts) translated into a loop normal people can just tap.",
    tags: ["Base Sub Accounts", "USDC", "game", "wallet UX"],
    proof: "playable demo / public build thread",
    href: "https://x.com/tonymfer/status/1979189014386348271",
    live: "https://x.com/tonymfer/status/1979189014386348271",
    primitive:
      "Wallet infrastructure is hard to sell as infrastructure. It becomes easier to understand when the account abstraction is part of a game loop you can just tap.",
    artifact:
      "A playable potato game using Base Sub Accounts / USDC flows with a zero-popup wallet experience, shipped as a public build thread.",
    proofPoints: [
      {
        text: "TapTato public build thread",
        href: "https://x.com/tonymfer/status/1979189014386348271",
      },
      "USDC action without a wallet popup — account abstraction hidden inside a game loop",
      "Playable demo rather than a slide about Sub Accounts",
    ],
    proofDetail: [
      {
        image: "/proof/taptato.png",
        caption:
          "What this proves: Base Sub Accounts / USDC flows made tappable — wallet primitives inside a game, no popup tax.",
      },
    ],
    ownership: {
      role: "Prototype / demo builder",
      team: "Solo build.",
      owned: [
        "Playable USDC potato game",
        "Base Sub Accounts / zero-popup wallet flow",
        "Public build thread",
      ],
      influenced: ["Account-abstraction UX framing"],
      proof: "Public build thread and playable demo",
    },
    right: [
      "The game metaphor makes wallet primitives less intimidating.",
      "Zero-popup USDC is a real UX proof, not a mockup.",
      "The artifact is more memorable than a Sub Accounts explainer.",
    ],
    wrong: [
      "Playful infra can be dismissed as a toy if the real primitive is not explicit.",
      "Games need retention loops; demos only need clarity.",
      "The onchain action needs to stay visible enough to read as proof.",
    ],
    next: "Make every tap reveal the underlying primitive: account, balance, signer, transaction, and why zero-popup matters.",
  },
];

export const archive = [
  ["016", "solana paid-agent skill", "agent rails", "2026", "public repo"],
  ["015", "room-reader", "AI rehearsal", "2026", "public repo"],
  ["014", "TapTato", "game / wallet", "2025", "public post"],
  ["013", "Base World", "community map", "2025", "public repo"],
  ["012", "far.cards", "physical social", "2025", "public post"],
  ["011", "Mint Club Base era", "token UX", "2024–2025", "public posts"],
  ["010", "Mintdrop", "growth loop", "2025", "metric proof"],
  [
    "009",
    "Hunt Town / Ewhagram",
    "builder education",
    "2023–2025",
    "workshop proof",
  ],
  ["006", "Brainlets", "token narrative site", "2024", "live site"],
  ["005", "Beeper v1", "paid inbox", "2024", "public product"],
];

export const orbit: OrbitEra[] = [
  {
    era: "Company era — HUNT / Steemhunt",
    span: "2022–2026",
    groups: [
      {
        anchor: {
          name: "Mint Club",
          note: "token UX anchor — bonding curves turned into product surfaces",
          href: "/objects/mint-club",
        },
        satellites: [
          {
            name: "Mintdrop",
            note: "growth loop built for Mint Club — child coins on Base",
            href: "https://x.com/tonymfer/status/1927199768100384856",
            external: true,
          },
          {
            name: "far.cards",
            note: "IRL Farcaster surface grown out of the Mint Club orbit",
            href: "https://x.com/tonymfer/status/2042628827059536214",
            external: true,
          },
          {
            name: "Brainlets",
            note: "token narrative site on Mint Club assets — Degen L3 wave",
            href: "https://www.brainlets.life/",
            external: true,
          },
        ],
      },
      {
        anchor: {
          name: "Hunt Town",
          note: "builder community anchor — education, ops, activation",
          href: "/objects/hunt-town",
        },
        satellites: [
          {
            name: "Base World",
            note: "community map built for Hunt Town — Base grant",
            href: "/objects/base-world",
          },
        ],
      },
    ],
  },
  {
    era: "Independent era — built on the company years",
    span: "2025–2026",
    groups: [
      {
        anchor: {
          name: "Beeper",
          note: "paid attention — co-founded, hardware-backed proof",
          href: "/objects/beeper",
        },
        satellites: [],
      },
      {
        anchor: {
          name: "TradeFish",
          note: "agent reputation — 1st, Base Agent Hackathon",
          href: "/objects/tradefish",
        },
        satellites: [],
      },
      {
        anchor: {
          name: "TapTato",
          note: "wallet infra translated into a playable loop",
          href: "/objects/taptato",
        },
        satellites: [],
      },
    ],
  },
];

// Structured source for the HeroPager receipt feed (U4 renders `${value} / ${label}`).
// Every value traces to a case claim carried above; caseSlug is the provenance tie
// content.ts validates at build. No claim here that isn't already sourced in a case.
export const pagerReceipts: PagerReceipt[] = [
  { value: "44,850 USERS", label: "BEEPER", caseSlug: "beeper" },
  { value: "39.1% READ RATE", label: "2X EMAIL", caseSlug: "beeper" },
  { value: "412K+ TXNS", label: "BASE MAINNET", caseSlug: "beeper" },
  { value: "1ST", label: "BASE AGENT HACKATHON", caseSlug: "tradefish" },
  { value: "SOLANA MY DEMO DAY", label: "TRADEFISH", caseSlug: "tradefish" },
  { value: "$8K CHILD COINS", label: "MINTDROP", caseSlug: "mint-club" },
  { value: "3,000+ MEMBERS", label: "HUNT TOWN", caseSlug: "hunt-town" },
  { value: "106K+ CHECK-INS", label: "BEEPER", caseSlug: "beeper" },
  { value: "4 YRS", label: "MINT CLUB SURFACES", caseSlug: "mint-club" },
];
