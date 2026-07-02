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
    ]
  },
  {
    slug: "hunt-mintclub",
    no: "A-02",
    name: "HUNT / Mint Club",
    object: "company product surfaces",
    role: "core builder / product engineer",
    year: "2022–2026",
    image: "/proof/mintdrop-metrics.png",
    desc: "Long-running company work across token launch flows, staking and reward surfaces, yield dashboards, Base/Farcaster product views, and builder education.",
    tags: ["HUNT", "Mint Club", "Base", "Farcaster", "workshops"],
    proof: "4 years / product surfaces / builder education",
    href: "https://x.com/tonymfer/status/1965330528904827040",
    live: "https://x.com/tonymfer/status/1965330528904827040",
    primitive: "New token and community mechanics are easy to expose as raw finance UI and hard to make understandable. The work was to turn launch, staking, reward, and builder primitives into surfaces projects could actually operate.",
    artifact: "A set of company product surfaces and ecosystem work: token-backed asset flows, bonding-curve launch UX, staking pools, reward dashboards, Base/mfer views, Farcaster miniapp experiments, and Mint Club SDK workshops.",
    proofPoints: [
      "Long-running company work across HUNT / Mint Club / Hunt Town / Steemhunt",
      "Public GitHub evidence across Steemhunt repositories under Tony Park / tonymfer",
      { text: "Mint Club SDK / Base MiniKit workshop proof", href: "https://x.com/tonymfer/status/1965330528904827040" },
      "Supported early-stage project surfaces, token launch flows, staking/reward products, and builder education"
    ],
    right: [
      "The work gave me repetition: not one launch, but many passes at making token and community mechanics easier to use.",
      "Builder education forced the product language to become clearer. If a workshop audience could not follow the primitive, the interface was probably overcomplicated too.",
      "Working inside a company product stack made me better at incremental shipping, not just weekend prototypes."
    ],
    wrong: [
      "Some surfaces were hard to show publicly because the work was spread across company products, internal iterations, and ecosystem support.",
      "Token and reward products can become abstract quickly if the user cannot see the concrete action they are taking.",
      "The portfolio needs careful wording here: enough detail to show depth, without turning the homepage into a résumé timeline."
    ],
    next: "Turn the strongest company surfaces into a tighter artifact trail: launch flow, staking/reward dashboard, Base/Farcaster education, and what each taught me about simplifying new rails.",
    fieldNotes: [
      { title: "Problem", body: "Company product work is harder to show than a clean side project. The output is spread across product surfaces, support work, workshops, and incremental improvements rather than one dramatic launch page." },
      { title: "Constraint", body: "The useful framing is not ‘I worked at a company for four years.’ It is that I repeatedly worked on the same kind of problem: making token, reward, and community mechanics understandable enough for projects and builders to use." },
      { title: "What changed", body: "I became faster at separating the primitive from the interface. Token mechanics, staking, dashboards, and miniapps all need the same move: hide the machinery until the user needs control or proof." },
      { title: "What I learned", body: "A product surface earns trust through boring clarity. The more experimental the underlying rail is, the less the interface can afford to sound experimental." }
    ]
  },
  {
    slug: "tradefish",
    no: "A-03",
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
    no: "A-04",
    name: "far.cards",
    object: "IRL identity object",
    role: "prototype / growth artifact",
    year: "2026",
    image: "/proof/farcards-spread.png",
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
    no: "A-05",
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
  ["010", "Mintdrop", "growth loop", "2024", "career proof"],
  ["009", "Ewhagram", "miniapp education", "2024", "workshop proof"],
  ["005", "Beeper v1", "paid inbox", "2024", "public product"],
];
