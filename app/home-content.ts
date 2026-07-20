// Home v4 — 통합. Content ported verbatim from the approved Claude Design file
// ("Home v4 통합.dc.html"). Bilingual: the language toggle swaps EN/KR blocks.
// Wiki (`/wiki`) and case pages (`/objects/*`) keep their own copy in data.ts/content.ts.

export type Lang = "en" | "kr";

export type StatusTone = "live" | "active" | "proto";

export interface ImpactLink {
  label: string;
  href: string;
}

export interface HomeCase {
  no: string;
  name: string;
  image: string;
  status: string;
  tone: StatusTone;
  kind: string;
  role: string;
  period: string;
  problem: string;
  owned: string;
  boundary: string;
  impact: ImpactLink[];
  learned: string;
}

export interface RetroItem {
  no: string;
  name: string;
  year: string;
  status: string;
  worked: string;
  ended: string;
  lesson: string;
}

export type LedgerTone = "green" | "rec" | "clay";

export interface LedgerRow {
  no: string;
  name: string;
  type: string;
  year: string;
  status: string;
  tone: LedgerTone;
  href: string;
}

export interface FieldSession {
  label: string;
  date: string;
  href: string;
}

export interface HomeStrings {
  heroTitle: string;
  heroSub: string;
  retroIntro: string;
  fieldBody: string;
  hireTitle: string;
  hireBody: string;
  hireNotTargeting: string;
}

export const homeStrings: Record<Lang, HomeStrings> = {
  en: {
    heroTitle:
      "I build products where the market is early and the interface is still undefined.",
    heroSub:
      "I read the signal, shape the product and brand, ship the usable surface, and find the first distribution loop — across onchain consumer products, AI-agent tools, and builder platforms. Team boundaries and receipts stated on every case.",
    retroIntro:
      "Not failures — resolved experiments. Each one is recorded with what actually happened and why it ended, because the reasoning is part of the work.",
    fieldBody:
      "Live sessions where builders shipped with Base MiniKit and the Mint Club SDK — friction in the room went back into the product. Every session below has a public link.",
    hireTitle: "Product teams working before the playbook exists.",
    hireBody:
      "Hire me when you need someone who can read an early market, shape the product and interface, build the frontend, work across APIs and transaction states, find the first distribution loop, and document what actually changed.",
    hireNotTargeting:
      "Not targeting: hardware engineering lead · protocol/contract lead · pure backend infra lead · custody system owner.",
  },
  kr: {
    heroTitle:
      "시장이 아직 플레이북을 갖기 전에, 사용할 수 있는 제품을 만듭니다.",
    heroSub:
      "시그널을 읽고, 제품과 브랜드를 빚고, 사용 가능한 인터페이스와 첫 배포 루프까지 만듭니다 — 온체인 컨슈머 제품, AI 에이전트 도구, 빌더 플랫폼을 가로질러. 모든 케이스에 팀 경계와 근거를 함께 적었습니다.",
    retroIntro:
      "실패가 아니라 끝난 실험들입니다. 실제로 무슨 일이 있었고 왜 끝났는지를 함께 기록합니다 — 그 판단 과정도 작업의 일부니까.",
    fieldBody:
      "빌더들이 Base MiniKit과 Mint Club SDK로 직접 출시해본 라이브 세션들 — 현장의 마찰은 다시 제품으로 돌아갔습니다. 아래 모든 세션에 공개 링크가 있습니다.",
    hireTitle: "플레이북이 생기기 전에 움직이는 프로덕트 팀.",
    hireBody:
      "얼리 마켓을 읽고, 제품과 인터페이스를 빚고, 프론트엔드를 만들고, API와 트랜잭션 상태를 가로지르고, 첫 배포 루프를 찾고, 무엇이 바뀌었는지 기록하는 사람이 필요할 때 저를 부르세요.",
    hireNotTargeting:
      "지향하지 않는 역할: 하드웨어 엔지니어링 리드 · 프로토콜/컨트랙트 리드 · 순수 백엔드 인프라 리드 · 커스터디 시스템 오너.",
  },
};

export const homeCases: Record<Lang, HomeCase[]> = {
  en: [
    {
      no: "01",
      name: "Mint Club",
      image: "/proof/mint-cbbtc.png",
      status: "LIVE · COMPANY",
      tone: "live",
      kind: "token product surfaces",
      role: "product + frontend",
      period: "public evidence 2024–2026",
      problem:
        "Bonding curves, token families, staking, and swaps are abstract and risk-heavy. The job was making launch, trade, discover, and stake operable without protocol lectures.",
      owned:
        "Most of the web frontend and app-layer surfaces: launch flows, cross-chain swap UX, staking, lockups, airdrops, token-family discovery, contract↔frontend integration, dashboards, SDK demos.",
      boundary:
        "Sebastian Kim led the smart-contract / backend specialty. Small startup team.",
      impact: [
        {
          label: "Featured in the Base app",
          href: "https://x.com/tonymfer/status/1950819973213171808",
        },
        {
          label: "Cross-chain swap — 8 chains",
          href: "https://x.com/tonymfer/status/1823638585255633040",
        },
        {
          label: "Token-family discovery",
          href: "https://x.com/tonymfer/status/1846169255483678765",
        },
        {
          label: "10 early projects supported",
          href: "https://x.com/tonymfer/status/1952262233846931909",
        },
        {
          label: "SDK commits",
          href: "https://github.com/Steemhunt/mint.club-v2-sdk",
        },
      ],
      learned:
        "Action clarity beats protocol novelty — a primitive becomes a product when the UI shows action, value, and risk in one screen.",
    },
    {
      no: "02",
      name: "Beeper",
      image: "/proof/beeper-hardware.jpg",
      status: "OPEN · FOUNDER",
      tone: "active",
      kind: "paid attention on Base/Farcaster",
      role: "co-founder · product / frontend / growth",
      period: "2025 → now",
      problem:
        "Inboxes externalize interruption cost. Beeper lets receivers price their inbox, pays for engagement, and refunds ignored messages — fair exchange, not spam.",
      owned:
        "Product direction, full sender flow (compose→targets→missions→plan→confirm), campaign mechanics, copy & story, CRT visual system, partner research, launch & growth.",
      boundary:
        "Sungwoo led infrastructure, contracts, and backend. Mario (Hyung Kyu Choi) led hardware engineering.",
      impact: [
        {
          label: "4,000 beepers pre-launch",
          href: "https://x.com/tonymfer/status/1992891139305992376",
        },
        {
          label: "400 spots claimed in 2 min",
          href: "https://x.com/tonymfer/status/2003720035416887476",
        },
        {
          label: "Top 120 / 1,170+ Base Batches — interview round",
          href: "https://x.com/tonymfer/status/2049718062560182312",
        },
        {
          label: "Base Founders Residency 001",
          href: "https://x.com/tonymfer/status/2057749264412127621",
        },
        {
          label: "Base APAC feature",
          href: "https://x.com/baseapac/status/2062479675461603777",
        },
        { label: "beep.works", href: "https://beep.works" },
      ],
      learned:
        "Hide the chain until it becomes proof — a budget, a receipt, or a refund. That's when users stop asking what a wallet is.",
    },
    {
      no: "03",
      name: "TradeFish",
      image: "/proof/tradefish-base-update.jpg",
      status: "ACTIVE · RESEARCH",
      tone: "active",
      kind: "agent reputation layer · no custody",
      role: "product direction + frontend",
      period: "2026",
      problem:
        "Trading-agent calls are unverifiable noise. TradeFish timestamps every call, settles it deterministically, and turns outcomes into reputation — no custody, no auto-execution.",
      owned:
        "Frontend, product direction, submission story, stage demos; heavy commit history across the survival engine, dashboard, and waitlist repos.",
      boundary:
        "Teammate research/backend contributions are real; PR-level ownership map is kept honest. Hackathon prototype and current research system are separate eras.",
      impact: [
        {
          label: "1st — Base Agent Hackathon (official)",
          href: "https://x.com/daehan_base/status/2048044510643724793",
        },
        {
          label: "Winner interview — Base Korea",
          href: "https://x.com/daehan_base/status/2057721632693813286",
        },
        {
          label: "Superteam MY × Solana demo day",
          href: "https://x.com/SuperteamMY/status/2054545718271213820",
        },
        {
          label: "Survival engine — 1,054 tests passing",
          href: "https://github.com/tradefish-fun/tradefish-survival-engine",
        },
        {
          label: "Operator dashboard repo",
          href: "https://github.com/tradefish-fun/tradefish-dashboard",
        },
      ],
      learned:
        "Agent products need boundaries before autonomy — the no-custody line is what made it easy to trust and easy to judge.",
    },
    {
      no: "04",
      name: "Hunt Town",
      image: "/proof/yonsei-workshop.jpg",
      status: "COMPANY · 4 YRS",
      tone: "live",
      kind: "builder adoption as a product loop",
      role: "community product + launch loops",
      period: "joined Oct 2022 → now",
      problem:
        "A product existing doesn't make builders use it. The real loop is idea → setup → reward → showcase → feedback — and someone has to run it.",
      owned:
        "Events and ideathons, Discord operations, project support and reward setup, workshops and content, fireside chat hosting, Huntzy community operation.",
      boundary:
        "Member growth belongs to the whole team — I ran the adoption loop, not a solo growth claim.",
      impact: [
        {
          label: "Ideathon — field proof",
          href: "https://x.com/tonymfer/status/1702607526666359007",
        },
        {
          label: "3,000+ community signal",
          href: "https://x.com/tonymfer/status/1706891994793193517",
        },
        {
          label: "768 targeted recipients via Beeper",
          href: "https://x.com/tonymfer/status/2011144428979900913",
        },
        {
          label: "Warpcast Tools showcase",
          href: "https://x.com/tonymfer/status/1831306138887102828",
        },
      ],
      learned:
        "Adoption happens outside the product UI — demos, Discord support, and launch narratives decide usage.",
    },
    {
      no: "05",
      name: "TapTato",
      image: "/proof/taptato.png",
      status: "PROTOTYPE · PUBLIC",
      tone: "proto",
      kind: "wallet infra as a playable loop",
      role: "prototype · product + build",
      period: "2025 · Base Builder Quest #11",
      problem:
        "Account abstraction and server wallets mean nothing to consumers as tech descriptions. A plant/harvest USDC game makes zero-popup UX something you feel.",
      owned:
        "The prototype end-to-end as shipped: game loop, Base Sub Accounts + CDP Server Wallets integration, USDC plant/harvest actions, onboarding.",
      boundary:
        "Zero smart contracts by design; custody/signer boundary documented rather than hidden.",
      impact: [
        { label: "Playable demo", href: "https://taptato.vercel.app/" },
        { label: "Public repo", href: "https://github.com/tonymfer/taptato" },
        {
          label: "Launch post",
          href: "https://x.com/tonymfer/status/1979189014386348271",
        },
      ],
      learned:
        "A playful demo should hide the primitive during play and show it again in the receipt.",
    },
    {
      no: "06",
      name: "Base World",
      image: "/proof/base-world-launch.jpg",
      status: "PROTOTYPE · 2024",
      tone: "proto",
      kind: "ecosystem as an explorable map",
      role: "prototype · community product",
      period: "2024",
      problem:
        "Base/Farcaster communities read as directories. A spatial, explorable map gives membership something to point at and belong to.",
      owned:
        "Prototype and community product contribution: world/country exploration, community discovery, clap/cast interactions.",
      boundary:
        "Team split source-pending; the Base Builder Grant is confirmed — official wave 18, Oct 2024.",
      impact: [
        {
          label: "Base Builder Grant — official",
          href: "https://x.com/base/status/1840853298842386924",
        },
        {
          label: "Launch video",
          href: "https://x.com/tonymfer/status/1808470847469785334",
        },
        {
          label: "Public repo",
          href: "https://github.com/tonymfer/base-world",
        },
      ],
      learned:
        "A community map needs a maintenance ritual, not just a launch — visual objects decay without an update loop.",
    },
  ],
  kr: [
    {
      no: "01",
      name: "Mint Club",
      image: "/proof/mint-cbbtc.png",
      status: "LIVE · 회사",
      tone: "live",
      kind: "토큰 프로덕트 표면",
      role: "프로덕트 + 프론트엔드",
      period: "공개 증거 2024–2026",
      problem:
        "본딩 커브, 토큰 패밀리, 스테이킹, 스왑은 추상적이고 리스크가 큽니다. 프로토콜 강의 없이 런칭·거래·탐색·스테이킹을 조작 가능하게 만드는 게 일이었습니다.",
      owned:
        "웹 프론트엔드와 앱 레이어 대부분: 런칭 플로우, 크로스체인 스왑 UX, 스테이킹, 락업, 에어드랍, 토큰 패밀리 탐색, 컨트랙트↔FE 통합, 대시보드, SDK 데모.",
      boundary:
        "스마트 컨트랙트/백엔드 전문 영역은 Sebastian Kim이 리드. 작은 스타트업 팀.",
      impact: [
        {
          label: "Base 앱 피처링",
          href: "https://x.com/tonymfer/status/1950819973213171808",
        },
        {
          label: "크로스체인 스왑 — 8개 체인",
          href: "https://x.com/tonymfer/status/1823638585255633040",
        },
        {
          label: "토큰 패밀리 탐색",
          href: "https://x.com/tonymfer/status/1846169255483678765",
        },
        {
          label: "초기 프로젝트 10팀 지원",
          href: "https://x.com/tonymfer/status/1952262233846931909",
        },
        {
          label: "SDK 커밋",
          href: "https://github.com/Steemhunt/mint.club-v2-sdk",
        },
      ],
      learned:
        "프로토콜의 새로움보다 행동의 명료함 — 행동·가치·리스크가 한 화면에 보일 때 프리미티브는 제품이 된다.",
    },
    {
      no: "02",
      name: "Beeper",
      image: "/proof/beeper-hardware.jpg",
      status: "OPEN · 파운더",
      tone: "active",
      kind: "Base/Farcaster 페이드 어텐션",
      role: "공동창업 · 프로덕트/프론트엔드/그로스",
      period: "2025 → 현재",
      problem:
        "인박스는 방해 비용을 외부화합니다. Beeper는 받는 사람이 인박스에 가격을 매기고, 참여에 보상하고, 무시된 메시지는 환불합니다 — 스팸이 아니라 공정한 교환.",
      owned:
        "프로덕트 방향, 발신 플로우 전체(작성→타겟→미션→플랜→확정), 캠페인 메커닉, 카피·스토리, CRT 비주얼 시스템, 파트너 리서치, 런칭·그로스.",
      boundary:
        "인프라·컨트랙트·백엔드는 Sungwoo, 하드웨어 엔지니어링은 Mario(최형규)가 리드.",
      impact: [
        {
          label: "런칭 전 4,000 비퍼",
          href: "https://x.com/tonymfer/status/1992891139305992376",
        },
        {
          label: "400자리 2분 마감",
          href: "https://x.com/tonymfer/status/2003720035416887476",
        },
        {
          label: "Base Batches 1,170+팀 중 톱120 — 인터뷰 라운드",
          href: "https://x.com/tonymfer/status/2049718062560182312",
        },
        {
          label: "Base Founders Residency 001",
          href: "https://x.com/tonymfer/status/2057749264412127621",
        },
        {
          label: "Base APAC 피처",
          href: "https://x.com/baseapac/status/2062479675461603777",
        },
        { label: "beep.works", href: "https://beep.works" },
      ],
      learned:
        "체인은 증거가 될 때까지 숨겨라 — 예산, 영수증, 환불로 보일 때 사용자는 지갑이 뭔지 묻지 않는다.",
    },
    {
      no: "03",
      name: "TradeFish",
      image: "/proof/tradefish-base-update.jpg",
      status: "ACTIVE · 리서치",
      tone: "active",
      kind: "에이전트 평판 레이어 · 무수탁",
      role: "프로덕트 방향 + 프론트엔드",
      period: "2026",
      problem:
        "트레이딩 에이전트의 콜은 검증 불가능한 노이즈입니다. TradeFish는 모든 콜에 타임스탬프를 찍고, 결정적으로 정산하고, 결과를 평판으로 만듭니다 — 수탁도 자동 실행도 없이.",
      owned:
        "프론트엔드, 프로덕트 방향, 제출 스토리, 무대 데모. 서바이벌 엔진·대시보드·웨이트리스트 리포에 걸친 커밋 히스토리.",
      boundary:
        "팀원의 리서치/백엔드 기여도 실재 — PR 단위 소유권은 정직하게 관리. 해커톤 프로토타입과 현재 리서치 시스템은 별개의 시대.",
      impact: [
        {
          label: "Base Agent 해커톤 1위 (공식)",
          href: "https://x.com/daehan_base/status/2048044510643724793",
        },
        {
          label: "우승 인터뷰 — Base Korea",
          href: "https://x.com/daehan_base/status/2057721632693813286",
        },
        {
          label: "Superteam MY × Solana 데모데이",
          href: "https://x.com/SuperteamMY/status/2054545718271213820",
        },
        {
          label: "서바이벌 엔진 — 테스트 1,054개 통과",
          href: "https://github.com/tradefish-fun/tradefish-survival-engine",
        },
        {
          label: "오퍼레이터 대시보드",
          href: "https://github.com/tradefish-fun/tradefish-dashboard",
        },
      ],
      learned:
        "에이전트 제품은 자율성보다 경계가 먼저 — 무수탁 선언이 신뢰와 평가를 동시에 쉽게 만들었다.",
    },
    {
      no: "04",
      name: "Hunt Town",
      image: "/proof/yonsei-workshop.jpg",
      status: "회사 · 4년",
      tone: "live",
      kind: "빌더 채택을 제품 루프로",
      role: "커뮤니티 프로덕트 + 런칭 루프",
      period: "2022년 10월 합류 → 현재",
      problem:
        "제품이 존재한다고 빌더가 쓰지는 않습니다. 진짜 루프는 아이디어 → 셋업 → 리워드 → 쇼케이스 → 피드백 — 누군가 이걸 돌려야 합니다.",
      owned:
        "이벤트·아이디어톤, 디스코드 운영, 프로젝트 지원·리워드 설계, 워크숍·콘텐츠, 파이어사이드 챗 호스팅, Huntzy 커뮤니티 운영.",
      boundary:
        "멤버 성장은 팀 전체의 것 — 저는 채택 루프를 돌렸지, 성장을 단독 주장하지 않습니다.",
      impact: [
        {
          label: "아이디어톤 현장 증거",
          href: "https://x.com/tonymfer/status/1702607526666359007",
        },
        {
          label: "커뮤니티 3,000+ 시그널",
          href: "https://x.com/tonymfer/status/1706891994793193517",
        },
        {
          label: "Beeper로 768명 타겟 캠페인",
          href: "https://x.com/tonymfer/status/2011144428979900913",
        },
        {
          label: "Warpcast Tools 쇼케이스",
          href: "https://x.com/tonymfer/status/1831306138887102828",
        },
      ],
      learned:
        "채택은 제품 UI 밖에서 일어난다 — 데모, 디스코드 지원, 런칭 내러티브가 사용을 결정한다.",
    },
    {
      no: "05",
      name: "TapTato",
      image: "/proof/taptato.png",
      status: "프로토타입 · 공개",
      tone: "proto",
      kind: "지갑 인프라를 플레이 루프로",
      role: "프로토타입 · 프로덕트 + 빌드",
      period: "2025 · Base Builder Quest #11",
      problem:
        "어카운트 앱스트랙션과 서버 월렛은 기술 설명으로는 소비자에게 아무 의미가 없습니다. 심고-수확하는 USDC 게임이 제로-팝업 UX를 몸으로 느끼게 합니다.",
      owned:
        "출시된 프로토타입 전체: 게임 루프, Base Sub Accounts + CDP Server Wallets 통합, USDC 심기/수확 액션, 온보딩.",
      boundary:
        "의도적으로 스마트 컨트랙트 없음. 커스터디/서명자 경계는 숨기지 않고 문서화.",
      impact: [
        { label: "플레이 가능한 데모", href: "https://taptato.vercel.app/" },
        { label: "공개 리포", href: "https://github.com/tonymfer/taptato" },
        {
          label: "런칭 포스트",
          href: "https://x.com/tonymfer/status/1979189014386348271",
        },
      ],
      learned:
        "장난스러운 데모는 플레이 중엔 프리미티브를 숨기고, 영수증에서 다시 보여줘야 한다.",
    },
    {
      no: "06",
      name: "Base World",
      image: "/proof/base-world-launch.jpg",
      status: "프로토타입 · 2024",
      tone: "proto",
      kind: "생태계를 탐험 가능한 지도로",
      role: "프로토타입 · 커뮤니티 프로덕트",
      period: "2024",
      problem:
        "Base/Farcaster 커뮤니티는 디렉토리로만 보입니다. 공간적이고 탐험 가능한 지도는 멤버십에 가리킬 수 있는 대상과 소속감을 줍니다.",
      owned:
        "프로토타입·커뮤니티 프로덕트 기여: 월드/국가 탐험, 커뮤니티 발견, 클랩/캐스트 인터랙션.",
      boundary:
        "팀 구성은 source-pending; Base 빌더 그랜트는 공식 확인됨 — 18차 웨이브, 2024년 10월.",
      impact: [
        {
          label: "Base 빌더 그랜트 — 공식",
          href: "https://x.com/base/status/1840853298842386924",
        },
        {
          label: "런칭 비디오",
          href: "https://x.com/tonymfer/status/1808470847469785334",
        },
        {
          label: "공개 리포",
          href: "https://github.com/tonymfer/base-world",
        },
      ],
      learned:
        "커뮤니티 지도는 런칭이 아니라 유지 의식이 필요하다 — 업데이트 루프 없는 비주얼 오브젝트는 낡는다.",
    },
  ],
};

export const homeRetro: Record<Lang, RetroItem[]> = {
  en: [
    {
      no: "P-01",
      name: "Mintdrop",
      year: "2025",
      status: "WORKED, THEN SHUT DOWN",
      worked:
        "A child-coin launcher for Farcaster with a real self-sustaining loop — self-reported $8K in child coins, 3,000 users, ~80K Base microtransactions.",
      ended:
        "Retired when team priorities shifted; the loop had no long-term home surface to live in. Shutdown date and full reasoning being documented.",
      lesson:
        "A growth loop needs a home surface to survive. The receipts stand either way — and so does the postmortem.",
    },
    {
      no: "P-02",
      name: "Chatcasso",
      year: "2022",
      status: "WON, THEN THE CATEGORY LEFT",
      worked:
        "1st place, BNB Chain Hackathon (Lifestyle in Web3) — prompt → artwork → contract → mint, built before prompt-to-onchain was a category.",
      ended:
        "The category arrived years later without us in it — we had the product instinct but no distribution loop to carry the timing.",
      lesson:
        "Too early without a carrier resolves the same as wrong. Every bet since ships with its distribution plan.",
    },
  ],
  kr: [
    {
      no: "P-01",
      name: "Mintdrop",
      year: "2025",
      status: "성공 후 종료",
      worked:
        "Farcaster용 자식 코인 런처, 실제로 돌아간 자생 루프 — 자체 공개 기준 자식 코인 $8K, 유저 3,000명, Base 마이크로트랜잭션 ~80K.",
      ended:
        "팀 우선순위가 바뀌며 종료. 루프가 오래 살 수 있는 홈 표면이 없었습니다. 종료 시점과 상세한 이유는 문서화 진행 중.",
      lesson:
        "그로스 루프는 홈 표면이 있어야 산다. 그래도 영수증은 남는다 — 포스트모템도 함께.",
    },
    {
      no: "P-02",
      name: "Chatcasso",
      year: "2022",
      status: "우승, 그리고 카테고리는 떠났다",
      worked:
        "BNB Chain 해커톤 1위 (Lifestyle in Web3) — 프롬프트 → 아트워크 → 컨트랙트 → 민팅. prompt-to-onchain이 카테고리가 되기 전에 만들었다.",
      ended:
        "카테고리는 몇 년 뒤에 진짜로 왔다 — 우리 없이. 제품 직감은 있었지만 타이밍을 실어 나를 배포 루프가 없었다.",
      lesson:
        "운반체 없는 '너무 이름'은 '틀림'과 같은 값으로 정산된다. 이후의 모든 베팅에는 배포 계획이 함께 나간다.",
    },
  ],
};

export const homeLedger: LedgerRow[] = [
  {
    no: "16",
    name: "solana paid-agent skill",
    type: "agent rails",
    year: "2026",
    status: "PUBLIC REPO",
    tone: "green",
    href: "https://github.com/tonymfer/solana-paid-agent-skill",
  },
  {
    no: "15",
    name: "room-reader",
    type: "AI rehearsal",
    year: "2026",
    status: "PUBLIC REPO",
    tone: "green",
    href: "https://github.com/tonymfer/room-reader",
  },
  {
    no: "14",
    name: "TradeFish",
    type: "agent reputation",
    year: "2026",
    status: "1ST · OFFICIAL",
    tone: "green",
    href: "https://x.com/daehan_base/status/2048044510643724793",
  },
  {
    no: "13",
    name: "Beeper",
    type: "paid attention",
    year: "2025→",
    status: "OPEN · LIVE",
    tone: "rec",
    href: "https://beep.works",
  },
  {
    no: "12",
    name: "TapTato",
    type: "game / wallet UX",
    year: "2025",
    status: "PLAYABLE",
    tone: "green",
    href: "https://taptato.vercel.app/",
  },
  {
    no: "11",
    name: "Mintdrop",
    type: "growth loop",
    year: "2025",
    status: "SHUT DOWN · P-01",
    tone: "clay",
    href: "https://x.com/tonymfer/status/1927199768100384856",
  },
  {
    no: "10",
    name: "far.cards",
    type: "physical social",
    year: "2024–25",
    status: "TEAM ARTIFACT",
    tone: "green",
    href: "https://x.com/tonymfer/status/2042628827059536214",
  },
  {
    no: "09",
    name: "Base World",
    type: "community map",
    year: "2024",
    status: "BASE GRANT · OFFICIAL",
    tone: "green",
    href: "https://x.com/base/status/1840853298842386924",
  },
  {
    no: "08",
    name: "Mint Club Base era",
    type: "token UX",
    year: "2024–25",
    status: "PUBLIC POSTS",
    tone: "green",
    href: "https://x.com/tonymfer/status/1847218266793714078",
  },
  {
    no: "07",
    name: "Ewhagram / workshops",
    type: "builder education",
    year: "2025",
    status: "PUBLIC REPO",
    tone: "green",
    href: "https://github.com/Steemhunt/ewhagram",
  },
  {
    no: "06",
    name: "Hunt Town ideathon",
    type: "adoption loop",
    year: "2023",
    status: "PUBLIC POSTS",
    tone: "green",
    href: "https://x.com/tonymfer/status/1702607526666359007",
  },
  {
    no: "05",
    name: "Mint Club V2 beta",
    type: "token products",
    year: "2024",
    status: "PUBLIC POST",
    tone: "green",
    href: "https://x.com/tonymfer/status/1752969640878469434",
  },
  {
    no: "04",
    name: "PerSecond",
    type: "payment streams",
    year: "2023",
    status: "2ND · APTOS SEOUL",
    tone: "green",
    href: "https://github.com/ggomaeng/persecond",
  },
  {
    no: "03",
    name: "Chatcasso",
    type: "AI × NFT",
    year: "2022",
    status: "1ST · P-02",
    tone: "green",
    href: "https://x.com/tonymfer/status/1605157110227931136",
  },
  {
    no: "02",
    name: "Hunt Town relaunch",
    type: "community",
    year: "2022",
    status: "PUBLIC POST",
    tone: "green",
    href: "https://x.com/tonymfer/status/1597880340521316352",
  },
  {
    no: "01",
    name: "HUNT / Steemhunt",
    type: "company spine",
    year: "2021→26",
    status: "CASE 01·04",
    tone: "green",
    href: "https://x.com/tonymfer",
  },
];

export const fieldSessions: FieldSession[] = [
  {
    label: "MiniKit session host — introduced by Mint Club official",
    date: "Aug 2025",
    href: "https://x.com/tonymfer/status/1952969999225897136",
  },
  {
    label: "Blockchain at Yonsei — Base MiniKit workshop lead",
    date: "Sep 2025",
    href: "https://x.com/tonymfer/status/1965330528904827040",
  },
  {
    label: "EWHA-CHAIN × Dreamplus — Mint Club SDK session",
    date: "Sep 2025",
    href: "https://x.com/tonymfer/status/1965330540338577440",
  },
  {
    label: "Base APAC — Based Builders feature",
    date: "Jul 2026",
    href: "https://x.com/baseapac/status/2076637652107882803",
  },
  {
    label: "Base Founders Residency Batch 001 — Beeper",
    date: "May 2026",
    href: "https://x.com/tonymfer/status/2057749264412127621",
  },
];

export interface ReceiptLine {
  label: string;
  value: string;
  tone: "ok" | "warn" | "next";
}

export const receiptLines: ReceiptLine[] = [
  { label: "TIME SPENT", value: "~90 SEC", tone: "ok" },
  { label: "CASES REVIEWED", value: "6 · ONE SCHEMA", tone: "ok" },
  { label: "TEAM BOUNDARIES", value: "STATED", tone: "ok" },
  { label: "POSTMORTEMS", value: "DISCLOSED", tone: "warn" },
  { label: "REFUND", value: "NOT REQUESTED", tone: "ok" },
  { label: "NEXT ACTION", value: "EMAIL TONY →", tone: "next" },
];
