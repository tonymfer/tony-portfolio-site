import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { archive, cases as selected } from "./data";
import { FieldImageReveal, ProofDeck, Reveal } from "./HomeMotion";

const links = [
  ["X", "@tonymfer", "https://x.com/tonymfer"],
  ["GitHub", "tonymfer", "https://github.com/tonymfer"],
  ["Farcaster", "@to", "https://warpcast.com/to"],
  ["ENS", "tony.base.eth", "https://etherscan.io/name-lookup-search?id=tony.base.eth"],
  ["Email", "hello@tony.works", "mailto:hello@tony.works"],
];

const heroProof = [
  ["4+ yrs", "HUNT / Mint Club product surfaces"],
  ["44.8K", "Beeper users in evidence bundle"],
  ["412K+", "Base mainnet transactions"],
  ["1st", "Base Agent Hackathon — TradeFish"],
];


const proofTypes = [
  ["Product", "turn primitives into usable surfaces"],
  ["Build", "ship an interface, repo, demo, or launch"],
  ["Grow", "get it into builders’ hands"],
  ["Clarify", "constraints, proof, QA, postmortem"],
];

const flagship = selected[0];
const supportObjects = selected.slice(1);
const flagshipMetrics = [
  ["44.8K", "users"],
  ["39.1%", "read rate"],
  ["50.6%", "repeat senders"],
  ["106K+", "check-ins"],
  ["412K+", "txs"],
];

const videoReceipts = [
  { title: "Base APAC cold plunge", copy: "founder/residency video", href: "https://x.com/baseapac/status/2062479675461603777", image: "/proof/baseapac-cold-plunge.jpg" },
  { title: "Yonsei miniapp workshop", copy: "Base MiniKit / Mint Club education", href: "https://x.com/tonymfer/status/1965330528904827040", image: "/proof/yonsei-workshop.jpg" },
  { title: "BEEP v2", copy: "paid attention launch media", href: "https://x.com/beeponbase/status/2009487314708517220", image: "/proof/beep-v2.jpg" },
];

const companySurfaces = [
  "Mint Club token-backed assets, bonding curves, swaps, child-token discovery, and SDK demos",
  "Hunt Town ideathons, builder support, reward setup, Discord/Farcaster showcases, and workshops",
  "Steemhunt/Mint Club GitHub trail: 55 public commits across 6 repos under Tony Park / tonymfer",
  "Base/Farcaster expansion through MiniKit demos, Yonsei/EwhaChain sessions, and mfer/Base product views",
];

const productSurfaces = [
  {
    name: "Beep Works",
    primitive: "Paid attention",
    image: "/proof/beepworks-home-desktop.png",
    copy: "A custom pixel/CRT product world that makes inbox pricing, rewards, and refund-on-ignore understandable before the first transaction.",
    detail: "Art direction · responsive system · interaction states",
    live: "https://beep.works/",
    caseHref: "/objects/beeper",
  },
  {
    name: "Mint Club",
    primitive: "Token-backed markets",
    image: "/proof/mint-cbbtc.png",
    copy: "Bonding curves, backing assets, swaps, and token families translated into a product surface people can inspect and operate.",
    detail: "Product UX · frontend · SDK surfaces",
    live: "https://mint.club/cbbtc",
    caseHref: "/objects/mint-club",
  },
  {
    name: "TradeFish",
    primitive: "Agent reputation",
    image: "/proof/tradefish-base-update.jpg",
    copy: "AI market calls turned into legible records: prediction, outcome, score movement, and proof without custody or execution theater.",
    detail: "System design · product boundary · hackathon winner",
    live: "https://github.com/tonymfer/TradeFish",
    caseHref: "/objects/tradefish",
  },
  {
    name: "TapTato / Base World",
    primitive: "Wallet infrastructure",
    image: "/proof/taptato.png",
    copy: "Account and payment primitives made tangible through a playable USDC loop and a community map people could immediately touch.",
    detail: "Prototype · wallet UX · public demo",
    live: "https://taptato.vercel.app/",
    caseHref: "/objects/taptato-base-world",
  },
];

const productArc = [
  {
    period: "2022–2024",
    title: "Company foundation",
    copy: "Spent the early company years turning token-backed assets, bonding curves, staking, and reward mechanics into product surfaces.",
    proof: "Mint Club / Steemhunt",
  },
  {
    period: "2024–2025",
    title: "Base + builder loops",
    copy: "Separated Mint Club product work from Hunt Town community/product work: SDK demos, early-project support, and live builder sessions.",
    proof: "Mint Club / Hunt Town / Yonsei / EwhaChain",
  },
  {
    period: "2025–2026",
    title: "Paid attention",
    copy: "Built Beeper around inbox pricing, sender intent, partner growth rails, BeeperX, and hardware-backed public proof.",
    proof: "Beeper / Base Founders Residency",
  },
  {
    period: "2026",
    title: "Agent reputation",
    copy: "Built TradeFish as a no-custody record of AI market calls, resolved outcomes, and reputation movement.",
    proof: "Base Agent Hackathon / TradeFish",
  },
];

const primaryLedger = archive.slice(0, 5);
const secondaryLedger = archive.slice(5);

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="external" href={href} rel="noreferrer" target={href.startsWith("http") ? "_blank" : undefined}>
      {children}
      <ArrowUpRight size={13} weight="bold" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Tony Park portfolio home">
          <span>Tony Park</span>
          <em>AI × Web3 Product Engineer</em>
        </a>
        <nav>
          <a href="#objects">/work</a>
          <a href="#surfaces">/surfaces</a>
          <a href="#field">/field</a>
          <a href="#contact">/contact</a>
        </nav>
      </header>
      <nav className="mobile-dock" aria-label="Mobile quick navigation">
        <a href="#top">Tony</a>
        <a href="#objects">Work</a>
        <a href="#surfaces">Surfaces</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero" id="top">
        <div className="link-matrix" aria-label="Contact and public links">
          {links.map(([label, value, href]) => (
            <ExternalLink href={href} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </ExternalLink>
          ))}
        </div>

        <div className="hero-copy">
          <p className="kicker">TONY PARK / AI × WEB3 PRODUCT ENGINEER</p>
          <h1>Early primitives into shipped product loops.</h1>
          <p className="subcopy">
            I turn rough crypto and AI primitives into usable interfaces, launch loops, and public proof — across HUNT / Mint Club, Beeper, TradeFish, and Base/Farcaster products.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#objects">View selected work</a>
            <a href="/tony-resume.pdf">Download resume</a>
            <a href="mailto:hello@tony.works">Email Tony</a>
          </div>
          <div className="hero-proof" aria-label="Career proof highlights">
            {heroProof.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Proof artifact preview">
          <div className="archive-label">
            <span>Work Archive</span>
            <p>selected products, demos, video clips, and postmortems from shipped experiments.</p>
          </div>
          <ProofDeck />
          <div className="proof-types snap-rail" aria-label="Work modes">
            {proofTypes.map(([name, copy]) => (
              <div key={name}>
                <strong>{name}</strong>
                <span>{copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="objects" id="objects">
        <div className="section-head">
          <p>Selected Objects</p>
          <span>Work Archive / public proof first</span>
        </div>
        <a className="flagship-object" href={`/objects/${flagship.slug}`}>
          <div className="flagship-image">
            <Image alt={`${flagship.name} proof`} src={flagship.image} width={980} height={720} />
            <span>{flagship.no} / flagship case</span>
          </div>
          <div className="flagship-copy">
            <div className="object-meta">
              <span>{flagship.object}</span>
              <span>{flagship.role}</span>
              <span>{flagship.year}</span>
            </div>
            <h2>{flagship.name}</h2>
            <p>{flagship.desc}</p>
            <div className="flagship-metrics">
              {flagshipMetrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <div className="proof-line"><span>open case</span>{flagship.proof}</div>
          </div>
        </a>
        <div className="object-list support-list">
          {supportObjects.map((work) => (
            <a className="object-row" href={`/objects/${work.slug}`} key={work.no}>
              <span className="object-no">{work.no}</span>
              <div className="object-thumb">
                <Image alt={`${work.name} proof`} src={work.image} width={560} height={390} />
              </div>
              <div className="object-main">
                <div className="object-meta">
                  <span>{work.object}</span>
                  <span>{work.role}</span>
                  <span>{work.year}</span>
                </div>
                <h2>{work.name}</h2>
                <p>{work.desc}</p>
                <div className="role-proof">
                  <div><span>Role</span><strong>{work.role}</strong></div>
                  <div><span>Proof</span><strong>{work.proof}</strong></div>
                </div>
                <div className="proof-line"><span>receipt</span>{work.proof}</div>
                <div className="chips">
                  {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="product-surfaces" id="surfaces">
        <div className="surface-intro">
          <div>
            <p className="kicker">Product surfaces</p>
            <h2>The frontend is where a new primitive becomes obvious.</h2>
          </div>
          <p>
            I do not separate product thinking from interface craft. These surfaces had to make unfamiliar behavior legible: paying for attention, launching token-backed markets, evaluating AI calls, and using wallet infrastructure without reading protocol docs first.
          </p>
        </div>
        <div className="surface-grid">
          {productSurfaces.map((surface, index) => (
            <Reveal className={`surface-card surface-card-${index + 1}`} delay={index % 2 === 0 ? 0 : 0.08} key={surface.name}>
              <article>
              <a className="surface-image" href={surface.caseHref}>
                <Image alt={`${surface.name} product surface`} src={surface.image} width={980} height={720} />
                <span>{String(index + 1).padStart(2, "0")} / {surface.primitive}</span>
              </a>
              <div className="surface-copy">
                <p>{surface.primitive}</p>
                <h3>{surface.name}</h3>
                <strong>{surface.copy}</strong>
                <span>{surface.detail}</span>
                <div>
                  <a href={surface.caseHref}>View case →</a>
                  <a href={surface.live} target="_blank" rel="noreferrer">Open surface ↗</a>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ledger" id="ledger">
        <div className="section-head ledger-head">
          <p>Public Ledger</p>
          <span>only sourced or linkable work</span>
        </div>
        <div className="ledger-list">
          {primaryLedger.map(([no, name, type, year, status]) => (
            <div className="ledger-row" key={no}>
              <span>{no}</span>
              <h3>{name}</h3>
              <p>{type}</p>
              <p>{year}</p>
              <p>{status}</p>
            </div>
          ))}
        </div>
        <details className="ledger-more">
          <summary>Open full proof index <span>{secondaryLedger.length} more</span></summary>
          <div className="ledger-list">
            {secondaryLedger.map(([no, name, type, year, status]) => (
              <div className="ledger-row" key={no}>
                <span>{no}</span>
                <h3>{name}</h3>
                <p>{type}</p>
                <p>{year}</p>
                <p>{status}</p>
              </div>
            ))}
          </div>
        </details>
      </section>

      <section className="company-work" id="company">
        <div className="section-head">
          <p>Company Work</p>
          <span>HUNT / Mint Club / Hunt Town / Steemhunt · Oct 2021–Feb 2026</span>
        </div>
        <div className="company-panel">
          <div>
            <p className="kicker">Long-running product work</p>
            <h2>Four years inside live product surfaces.</h2>
          </div>
          <div className="company-copy">
            <p>
              At HUNT / Mint Club / Hunt Town, I worked across product engineering, front-end surfaces, ecosystem UX, and builder education. The throughline was making token, community, and reward mechanics understandable enough for real projects to use.
            </p>
            <div className="company-surfaces">
              {companySurfaces.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
        <div className="company-arc">
          <div className="section-head">
            <p>Product Arc</p>
            <span>how the work evolved</span>
          </div>
          <div className="arc-list">
            {productArc.map((item) => (
              <article className="arc-row" key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <strong>{item.proof}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="field-proof" id="field">
        <FieldImageReveal>
          <a className="field-image" href="https://x.com/ewhachain/status/1966407486166139390" target="_blank" rel="noreferrer">
            <Image alt="Tony Park leading an EwhaChain MiniKit workshop" src="/proof/ewhachain-session-wide.jpg" width={1600} height={900} />
            <span>EWHA-CHAIN / Dreamplus Gangnam / Sep 2025 ↗</span>
          </a>
        </FieldImageReveal>
        <div className="field-copy">
          <div>
            <p className="kicker">From screen to room</p>
            <h2>Build the surface. Then teach people to ship with it.</h2>
          </div>
          <div>
            <p>
              At EWHA-CHAIN’s first session, I led a hands-on workshop where builders used Base MiniKit and the Mint Club SDK to make Zora-style SocialFi services. The work did not stop at a polished interface: I translated the product model live, watched where builders got stuck, and turned that friction back into better demos and product language.
            </p>
            <div className="field-facts">
              <span><strong>Role</strong>Workshop lead / frontend engineer</span>
              <span><strong>Built with</strong>Base MiniKit + Mint Club SDK</span>
              <span><strong>Public proof</strong>EWHA-CHAIN session recap</span>
            </div>
          </div>
        </div>
      </section>

      <section className="video-receipts" id="video">
        <div className="section-head">
          <p>Video Receipts</p>
          <span>talks, demos, workshops, and launch clips hosted on X</span>
        </div>
        <div className="video-home-grid">
          {videoReceipts.map((item) => (
            <a className="video-home-card" href={item.href} target="_blank" rel="noreferrer" key={item.href}>
              <Image alt={`${item.title} video still`} src={item.image} width={560} height={360} />
              <span>watch on X ↗</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-portrait">
          <Image alt="Tony Park portrait" src="/tony-profile.png" width={520} height={520} />
        </div>
        <div className="about-copy">
          <p className="kicker">About Tony</p>
          <h2>Product engineering for new rails and early markets.</h2>
          <p>
            I work where the interface is still unclear: Base/Farcaster mini apps, paid attention, agent reputation, wallet UX, and builder-facing demos. My job is to make the behavior understandable, ship a usable surface, and prove what happened.
          </p>
          <div className="about-grid">
            <div><span>Best fit</span><strong>founding product engineer / AI x Web3 product teams</strong></div>
            <div><span>Proof</span><strong>Beeper traction, Base Agent Hackathon win, public workshops, video clips</strong></div>
            <div><span>Handles</span><strong>@tonymfer / tony.base.eth / @to</strong></div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="kicker">for teams building on new rails</p>
          <h2>prototype fast. ship the useful version. prove what changed.</h2>
          <a className="footer-cta" href="mailto:hello@tony.works">hello@tony.works ↗</a>
        </div>
        <div className="footer-links">
          <ExternalLink href="https://github.com/tonymfer">GitHub</ExternalLink>
          <ExternalLink href="https://x.com/tonymfer">X</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/tonymfer/">LinkedIn</ExternalLink>
          <a className="external" href="/tony-profile.pdf">PDF Profile</a>
        </div>
      </footer>
    </main>
  );
}
