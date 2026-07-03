export type CaseStudy = {
  slug: string;
  no: string;
  name: string;
  object: string;
  role: string;
  year: string;
  image: string;
  desc: string;
  tags: string[];
  proof: string;
  href: string;
  live?: string;
  primitive: string;
  artifact: string;
  proofPoints: Array<string | { text: string; href: string }>;
  right: string[];
  wrong: string[];
  next: string;
  fieldNotes?: Array<{ title: string; body: string }>;
  timeline?: Array<{ date: string; title: string; href?: string; note?: string }>;
};

export const cases: CaseStudy[] = [
  {
    slug: "beeper",
    no: "A-01",
    name: "Beeper",
    object: "paid signal layer",
    role: "co-founder / product + front-end",
    year: "2025–2026",
    image: "/proof/beeper-hardware.jpg",
    desc: "A Base-native paid attention product where users set an inbox price, earn for engagement, and unread messages can refund the sender.",
    tags: ["Base", "Farcaster", "paid attention", "BeeperX", "hardware"],
    proof: "44.8K users / 39.1% read rate / #3 mini app",
    href: "https://beep.works",
    live: "https://beep.works",
    primitive: "Attention is usually captured by platforms and spammed by senders. Beeper tests the opposite behavior: receivers own an inbox price, senders pay for signal, and ignored attention can refund instead of becoming another notification tax.",
    artifact: "A shipped Base mini-app, full sender flow, onchain reward/payment contracts, Beepi AI composition, BeeperX SDK/API, partner campaign rail, and physical pager roadmap.",
    proofPoints: [
      "44,850 total users and 32,793 active users in the Base Batches evidence bundle",
      "7,936 unique users and 5,675 transaction users in the last 28 days",
      "2,400 unique paid-message senders; 1,215 repeat senders / 50.6% retention",
      "106K+ battery check-ins and 39.1% read rate — nearly 2x email, 8x push",
      "60+ Base mainnet contracts with 412K+ total transactions",
      "BeeperX SDK/API with 2,400+ API keys issued",
      { text: "BEEP v2 paid-attention launch media", href: "https://x.com/beeponbase/status/2009487314708517220" },
      { text: "Base APAC founder/residency feature", href: "https://x.com/baseapac/status/2062479675461603777" }
    ],
    right: [
      "The incentive is clear: senders pay for signal, receivers get paid for attention, and unread messages can refund.",
      "The product found two wedges at once: consumer inbox pricing and partner mini-app distribution.",
      "The sender flow is a real product system, not a landing page: compose, targeting, missions, planning, quote, wallet, transaction, success/failure states.",
      "BeeperX extends the same attention rail to agents that need permissioned access to humans."
    ],
    wrong: [
      "Some metric definitions still need cleanup before investor-grade charts, especially claim-like value fields.",
      "Paid attention still needs crisp non-crypto framing; outside Base/Farcaster, the refund loop must be explained in one interaction.",
      "Hardware makes the idea tangible, but also raises expectations around shipping, latency, battery, support, and reliability.",
      "Campaign memos are useful pipeline context, but many partner fields are unconfirmed and cannot be used as public proof."
    ],
    next: "Turn the case page into a receipt-driven launch memo: show the inbox-price primitive, sender flow, onchain settlement, partner rank jumps, BeeperX agent rail, and hardware pager future without overloading the first screen.",
    fieldNotes: [
      { title: "Problem", body: "The hard part was not sending a paid message. It was making paid attention feel like a fair exchange instead of an ad product. The refund loop had to be understandable before the transaction, or the product would feel like another spam surface." },
      { title: "My role", body: "I worked across product, front-end, and growth: the compose flow, targeting, reward planning, quote states, transaction states, partner campaign surfaces, and the public proof layer around the product." },
      { title: "Constraint", body: "The product had to explain money, attention, and onchain settlement without making the user read protocol copy. The better versions hid the chain until it became proof, budget, or a receipt." },
      { title: "What I learned", body: "New incentives need a one-screen explanation. If the user needs three paragraphs to understand why the loop is fair, the product has already lost momentum." }
    ],
    timeline: [
      { date: "2025-11", title: "Beeper hardware waitlist", href: "https://x.com/tonymfer/status/1991792691198427618", note: "hardware for Farcaster, filtering noise and amplifying real signal on Base" },
      { date: "2025-12", title: "first 1,500 beepers", href: "https://x.com/beeponbase/status/1996137950258880592", note: "early waitlist / stress-test signal" },
      { date: "2025-12", title: "first 2,000 beepers", href: "https://x.com/beeponbase/status/1996397711621509132", note: "waitlist growth before closed beta" },
      { date: "2026-01", title: "top 5 miniapp signal", href: "https://x.com/beeponbase/status/2013170568611402151", note: "ranked near other leading Base miniapps without a token" },
      { date: "2026-01", title: "1,351 beepers answered stable vs degen", href: "https://x.com/beeponbase/status/2016108644400873672", note: "campaign mechanic + user response loop" },
      { date: "2026-02", title: "Brick Side Chat #67 with Steemhunt", href: "https://x.com/beeponbase/status/2027031289904447697", note: "contacts, BeeperX, BP rewards, and product overhaul" },
      { date: "2026-03", title: "Why Beeper", href: "https://x.com/beeponbase/status/2036694291121406201", note: "attention thesis: every app takes attention for free" },
      { date: "2026-05", title: "Farcon Rome NFC name tags", href: "https://x.com/beeponbase/status/2051536583317483582", note: "first offline experiment for attention/social identity" },
      { date: "2026-06", title: "Base APAC / Base Founders Residency feature", href: "https://x.com/baseapac/status/2062479675461603777", note: "external validation: hackathon wins, Base Camp support, flew from Korea to residency" }
    ]
  },
  {
    slug: "mint-club",
    no: "A-02",
    name: "Mint Club",
    object: "token product surfaces",
    role: "product + front-end / SDK + ecosystem UX",
    year: "2022–2026",
    image: "/proof/mint-cbbtc.png",
    desc: "Token-backed asset and bonding-curve product work: launch flows, child-token discovery, staking/reward surfaces, cross-chain swap UX, Base/mfer views, and SDK demos.",
    tags: ["Mint Club", "Base", "bonding curves", "SDK", "token UX"],
    proof: "SDK / swap / child tokens / Base era",
    href: "https://x.com/tonymfer/status/1847218266793714078",
    live: "https://mint.club/cbbtc",
    primitive: "Mint Club’s hard problem was making token-backed markets and bonding curves feel like usable product surfaces instead of raw crypto mechanics. My work sat where primitives became interfaces: launch, swap, discover, stake, reward, and teach.",
    artifact: "Product/front-end surfaces and demos across Mint Club: token-backed asset pages, child/sibling token discovery, mfer/Base views, cross-chain swap UX, staking/reward pools, Mint Club SDK examples, and Base/Farcaster workshop apps.",
    proofPoints: [
      { text: "BASE ERA in Mint Club — Base token featuring and child tokens backed by favorite Base tokens", href: "https://x.com/tonymfer/status/1847218266793714078" },
      { text: "Mint Club product update: mfer vision, event filtering, token detail sibling/child lookup", href: "https://x.com/tonymfer/status/1846169255483678765" },
      { text: "Mint Club child-token / mfer ecosystem update", href: "https://x.com/tonymfer/status/1857278167649759548" },
      { text: "Mintdrop metrics: $8K worth of child coins, 3,000 unique users, nearly 80,000 Base microtransactions", href: "https://x.com/tonymfer/status/1927199768100384856" },
      { text: "mint.club-v2-sdk commits by tonymfer", href: "https://github.com/Steemhunt/mint.club-v2-sdk/commits?author=tonymfer" },
      { text: "hunt-mint-swap commits by tonymfer", href: "https://github.com/Steemhunt/hunt-mint-swap/commits?author=tonymfer" }
    ],
    right: [
      "The same product muscle repeated for years: turn bonding curves, token backing, swaps, staking, and reward mechanics into screens people could actually operate.",
      "Mint Club forced product clarity because the primitive is abstract; the interface had to show action, value, risk, and proof without protocol lectures.",
      "The Base/Farcaster push created a bridge from token infrastructure into social distribution and miniapp education."
    ],
    wrong: [
      "A lot of the work is distributed across many surfaces and commits, so it needs an evidence trail rather than one clean launch page.",
      "Token dashboards can look like DeFi noise if the portfolio does not explain the user action and product intent.",
      "Some public posts prove launches and features, but exact ownership boundaries still need careful wording."
    ],
    next: "Turn Mint Club into a real case study with three artifact strips: product surface, SDK/workshop app, and growth metrics. The page should show years of accumulated product work, not one screenshot.",
    fieldNotes: [
      { title: "My lane", body: "Product and front-end/app-layer work: surfaces, flows, demos, SDK examples, and the public language around making token mechanics usable." },
      { title: "Repeated problem", body: "Every feature had the same job: make an abstract onchain mechanic legible enough for projects, holders, and builders to use without needing protocol context first." },
      { title: "Proof shape", body: "The strongest evidence is not one metric. It is the combination of GitHub commits, product screenshots, Mint Club posts, Base-era updates, and workshop demos across multiple years." }
    ],
    timeline: [
      { date: "2023", title: "Dixel / early Steemhunt repo work", href: "https://github.com/Steemhunt/dixel-v2-contract/commits?author=tonymfer", note: "early public GitHub trail" },
      { date: "2024-05 → 2025-08", title: "mint.club-v2-sdk commits", href: "https://github.com/Steemhunt/mint.club-v2-sdk/commits?author=tonymfer", note: "SDK / chain support / examples" },
      { date: "2024-07", title: "web3kaist-mintclub hook updates", href: "https://github.com/Steemhunt/web3kaist-mintclub/commits?author=tonymfer", note: "education/demo surface" },
      { date: "2024-08", title: "Cross-chain swap UX on Mint Club", note: "Base/mainnet/BNB/Arbitrum/Optimism/Degen/Blast/Zora bridge/swap/buy support" },
      { date: "2024-10", title: "mfer-backed token launch flow", href: "https://x.com/tonymfer/status/1843847067837575181", note: "instant launch of mfercoin-backed tokens" },
      { date: "2024-10", title: "mfer vision + child/sibling token lookup", href: "https://x.com/tonymfer/status/1846169255483678765", note: "event filtering + token detail discovery" },
      { date: "2024-10", title: "BASE ERA in Mint Club", href: "https://x.com/tonymfer/status/1847218266793714078", note: "Base token featuring + child tokens backed by favorite tokens" },
      { date: "2024-11", title: "Mint Club child-token / mfer ecosystem", href: "https://x.com/tonymfer/status/1857278167649759548", note: "ecosystem product update" },
      { date: "2025-03", title: "MT migration to Base", href: "https://x.com/tonymfer/status/1897555258370613683", note: "platform token migration from BNB Chain to Base" },
      { date: "2025-05", title: "Mintdrop metrics", href: "https://x.com/tonymfer/status/1927199768100384856", note: "$8K child coins / 3,000 users / ~80K Base microtransactions" },
      { date: "2025-07", title: "Mint Club featured in the Base app", href: "https://x.com/tonymfer/status/1950819973213171808", note: "token family model surfaced through Base app distribution" },
      { date: "2025-07 → 2025-09", title: "hunt-mint-swap commits", href: "https://github.com/Steemhunt/hunt-mint-swap/commits?author=tonymfer", note: "chain switching / miniapp fixes" },
      { date: "2025-08", title: "Mint Club staking pools + early projects", href: "https://x.com/tonymfer/status/1952262233846931909", note: "stake NFTs/tokens, earn yield, support 10 early projects" }
    ]
  },
  {
    slug: "hunt-town",
    no: "A-03",
    name: "Hunt Town",
    object: "builder community OS",
    role: "community product + launch loops",
    year: "2022–2026",
    image: "/proof/yonsei-workshop.jpg",
    desc: "Builder-community work around Hunt Town: ideathons, Discord showcases, early project support, rewards setup, Base/Farcaster education, and Korea/global Web3 activation loops.",
    tags: ["Hunt Town", "builder education", "Korea", "Base", "Farcaster"],
    proof: "ideathons / workshops / early project support",
    href: "https://x.com/tonymfer/status/1702607526666359007",
    live: "https://x.com/tonymfer/status/1965330528904827040",
    primitive: "Hunt Town was the community/product layer around shipping: helping builders understand the primitives, launch small projects, get feedback, and move from Discord/Farcaster attention into actual product usage.",
    artifact: "A long-running set of builder activations: Hunt Town ideathons, Warpcast Tools showcases, early project support, Mint Club rewards setup, Base/MiniKit workshops, university sessions, and community launch loops.",
    proofPoints: [
      { text: "Hunt Town Ideathon builder/community event", href: "https://x.com/tonymfer/status/1702607526666359007" },
      { text: "Hunt Town pushing Base + Farcaster", href: "https://x.com/tonymfer/status/1965330537369010555" },
      { text: "Mint Club staking pools / backing 10 early projects with rewards + setup support", href: "https://x.com/tonymfer/status/1952262233846931909" },
      { text: "Dreamplus Gangnam / EwhaChain session building Zora-style social dApps with Mint Club SDK", href: "https://x.com/tonymfer/status/1965330540338577440" },
      { text: "Blockchain at Yonsei / Base MiniKit + Mint Club SDK workshop", href: "https://x.com/tonymfer/status/1965330528904827040" },
      "Birdclaw archive found 439 Mint Club / Hunt Town related tweets from 2023–2026"
    ],
    right: [
      "The work connected product to people: workshops, showcases, launch help, rewards, and feedback loops made abstract Web3 primitives usable for builders.",
      "Hunt Town is strong career evidence because it shows repeated community-product execution, not just isolated coding tasks.",
      "Korea builder activations made the product language sharper: if people could not build with it live, the interface or docs were not clear enough."
    ],
    wrong: [
      "Community/product work is easy to undersell because the artifact is distributed across posts, sessions, Discord, demos, and support work.",
      "A university/workshop photo proves activity, but the page needs more screenshots/receipts to show product depth.",
      "Need better official Hunt Town visual assets if this becomes a flagship case."
    ],
    next: "Build Hunt Town as the community-product case: ideathon → project setup → reward mechanics → workshop → Base/Farcaster distribution. It should prove that I did launch loops, not just frontend screens.",
    fieldNotes: [
      { title: "My lane", body: "Community product, builder education, launch support, and product translation: helping projects and builders understand what to build with Mint Club/Hunt Town primitives." },
      { title: "What changed", body: "I learned that product adoption often happens outside the product UI: workshops, demos, Discord help, and launch narratives can decide whether a primitive becomes used or ignored." },
      { title: "Proof shape", body: "The evidence is a timeline: ideathons, Warpcast/Farcaster showcases, early project support, Base/MiniKit workshops, and public posts around pushing Hunt Town into new ecosystems." }
    ],
    timeline: [
      { date: "2023-09", title: "Hunt Town Ideathon", href: "https://x.com/tonymfer/status/1702607526666359007", note: "builder/community event" },
      { date: "2023-09", title: "Hunt Town reached 3,000+ members", href: "https://x.com/tonymfer/status/1706641820351103415", note: "early community scale signal" },
      { date: "2023-10", title: "Made By Apes #00261", href: "https://x.com/tonymfer/status/1714194449520320772", note: "BAYC ecosystem recognition for Hunt Town" },
      { date: "2023-12", title: "BUILD Points launch", href: "https://x.com/tonymfer/status/1738036401684570461", note: "virtual token / contribution mechanic for builders" },
      { date: "2024-01", title: "Hunt Town near 5,000 members", href: "https://x.com/tonymfer/status/1749722230970617955", note: "community growth milestone" },
      { date: "2024-01", title: "Builder tools: URL shortener + QR generator", href: "https://x.com/tonymfer/status/1743090052165718060", note: "utility tooling for Web3 builders" },
      { date: "2024-02", title: "Building NFT / HUNT token mechanics", href: "https://x.com/tonymfer/status/1760874243707814382", note: "1,000 HUNT lock-up mechanics and community participation" },
      { date: "2024-09", title: "Warpcast Tools showcase in Hunt Town Discord", note: "community demo / Farcaster utility loop" },
      { date: "2024-10", title: "Base Around The World regional builder surface", href: "https://x.com/tonymfer/status/1842653058658156561", note: "Base buildathon/community discovery" },
      { date: "2025-08", title: "10 early projects backed with rewards + setup support", href: "https://x.com/tonymfer/status/1952262233846931909", note: "launch support + reward mechanics" },
      { date: "2025-08", title: "yeonstagram Base/social miniapp prototype", href: "https://github.com/Steemhunt/yeonstagram/commits?author=tonymfer", note: "Base/social workshop prototype" },
      { date: "2025-09", title: "ewhagram workshop project", href: "https://github.com/Steemhunt/ewhagram/commits?author=tonymfer", note: "Base MiniKit + Mint Club SDK social dApp" },
      { date: "2025-09", title: "Blockchain at Yonsei MiniKit session", href: "https://x.com/tonymfer/status/1965330528904827040", note: "cloned Zora-style Instagram using Base app MiniKit" },
      { date: "2025-09", title: "Hunt Town pushing Base + Farcaster", href: "https://x.com/tonymfer/status/1965330537369010555", note: "ecosystem direction public signal" },
      { date: "2025-09", title: "Dreamplus Gangnam / EwhaChain Mint Club SDK session", href: "https://x.com/tonymfer/status/1965330540338577440", note: "live builder education" },
      { date: "2026-01", title: "Hunt Town live event promoted through Beeper", note: "Beeper sent event to 768 users who set Signal Token to $HUNT" }
    ]
  },
  {
    slug: "tradefish",
    no: "A-04",
    name: "TradeFish",
    object: "agent reputation rail",
    role: "builder / product system",
    year: "2026",
    image: "/proof/tradefish-base-update.jpg",
    desc: "A no-custody market-call system for AI agents: every prediction becomes a tracked position, resolved outcome, reputation update, and proof receipt.",
    tags: ["AI agents", "markets", "Base", "no custody"],
    proof: "1st — Base Agent Hackathon",
    href: "https://github.com/tonymfer/TradeFish",
    live: "https://github.com/tonymfer/TradeFish",
    primitive: "If agents give market advice, the useful artifact is not the message. It is the receipt: what they said, when, what happened, and whether their reputation should change.",
    artifact: "A scored market-call system with tracked predictions, no-custody constraints, Base Agent Hackathon proof, and a public GitHub repo.",
    proofPoints: [
      { text: "1st place at Base Agent Hackathon", href: "https://x.com/daehan_base/status/2048044505413399038" },
      { text: "Public GitHub repo", href: "https://github.com/tonymfer/TradeFish" },
      { text: "Solana Demo Day signal", href: "https://x.com/SuperteamMY/status/2058865116985327891" },
      "No-custody positioning and reputation receipt model"
    ],
    right: ["The constraint is clear: agents can recommend, not custody funds.", "The product turns vague AI alpha into auditable outcomes.", "Hackathon framing made the proof easy to evaluate."],
    wrong: ["A reputation rail only matters if enough agents/users create repeated calls.", "The product has to simplify market concepts without making fake promises.", "Proof UI needs to be more visual than tables if it is going to spread."],
    next: "Build a public leaderboard of agent calls with one-tap replay: prediction, entry, result, score delta, and why the call was accepted.",
    fieldNotes: [
      { title: "Problem", body: "AI trading demos usually collapse into either vague alpha or unsafe automation. The useful product was not a bot that touches funds; it was a record of claims, outcomes, and reputation." },
      { title: "Decision", body: "I kept the product signal-only and no-custody. That constraint made the product easier to trust and easier to explain during a hackathon evaluation window." },
      { title: "What was hard", body: "The UI had to make prediction quality visible without turning into a table dump. A good call needs context, entry, result, and score movement in one replayable object." },
      { title: "What I learned", body: "Agent products need boundaries before they need more autonomy. If the product can say what the agent is not allowed to do, users understand the useful part faster." }
    ]
  },
  {
    slug: "far-cards",
    no: "A-05",
    name: "far.cards",
    object: "IRL identity object",
    role: "prototype / growth artifact",
    year: "2026",
    image: "/proof/farcards-proof.jpg",
    desc: "Physical-social Farcaster cards: NFC objects that turn online profiles into a thing you can hand someone at an event.",
    tags: ["Farcaster", "NFC", "social object"],
    proof: "physical cards / public launch media",
    href: "https://x.com/tonymfer/status/2042628827059536214",
    primitive: "Crypto identity is usually invisible until someone opens an app. far.cards makes identity a handoff object: profile, context, and social graph compressed into a card.",
    artifact: "Printed card sets, NFC/social mechanics, launch images, and a small IRL distribution object for Farcaster-native networking.",
    proofPoints: [
      "Physical far.cards spread in local proof assets",
      { text: "Public launch post", href: "https://x.com/tonymfer/status/2042628827059536214" },
      "NFC/IRL identity framing",
      "Event-ready object rather than abstract profile link"
    ],
    right: ["The card makes Farcaster identity instantly tangible.", "It works as a conversation starter, not just a QR replacement.", "The object has enough taste to be kept, photographed, and shared."],
    wrong: ["The value is highest at events, so distribution windows are narrow.", "NFC/QR behavior must be flawless or the magic disappears.", "It needs a stronger post-tap destination than a plain profile."],
    next: "Add a post-tap mini profile that shows why this person matters right now: recent casts, mutuals, project links, and follow action."
  },
  {
    slug: "taptato-base-world",
    no: "A-06",
    name: "TapTato / Base World",
    object: "playable infra",
    role: "prototype / demo builder",
    year: "2025",
    image: "/proof/taptato.png",
    desc: "A zero-popup USDC potato game plus a Base community map. Wallet and ecosystem primitives translated into interfaces normal people can touch.",
    tags: ["Base Sub Accounts", "USDC", "community map"],
    proof: "playable demo / public build thread",
    href: "https://x.com/tonymfer/status/1979189014386348271",
    primitive: "Wallet infrastructure is hard to sell as infrastructure. It becomes easier to understand when the account abstraction is part of a game loop or a community object.",
    artifact: "A playable potato game using Base Sub Accounts / USDC flows and a Base World community map that turns ecosystem membership into a visual surface.",
    proofPoints: [
      { text: "TapTato public build thread", href: "https://x.com/tonymfer/status/1979189014386348271" },
      { text: "Base World launch signal", href: "https://x.com/tonymfer/status/1808470847469785334" },
      "USDC action without wallet popup framing",
      { text: "Base World public repo", href: "https://github.com/tonymfer/base-world" }
    ],
    right: ["The game metaphor makes wallet primitives less intimidating.", "Base World gives the ecosystem a spatial object people can point to.", "Both artifacts are more memorable than docs or a demo dashboard."],
    wrong: ["Playful infra can be dismissed as a toy if the real primitive is not explicit.", "Games need retention loops; demos only need clarity.", "Community maps can go stale without an update ritual."],
    next: "Make every playful action reveal the underlying primitive: account, balance, signer, transaction, and why zero-popup matters."
  }
];

export const archive = [
  ["016", "solana paid-agent skill", "agent rails", "2026", "public repo"],
  ["015", "room-reader", "AI rehearsal", "2026", "public repo"],
  ["014", "TapTato", "game / wallet", "2025", "public post"],
  ["013", "Base World", "community map", "2025", "public repo"],
  ["012", "far.cards", "physical social", "2025", "public post"],
  ["011", "Mint Club Base era", "token UX", "2024–2025", "public posts"],
  ["010", "Mintdrop", "growth loop", "2025", "metric proof"],
  ["009", "Hunt Town / Ewhagram", "builder education", "2023–2025", "workshop proof"],
  ["005", "Beeper v1", "paid inbox", "2024", "public product"],
];
