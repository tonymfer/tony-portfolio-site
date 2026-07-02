import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { archive, cases as selected } from "./data";

const links = [
  ["X", "@tonymfer", "https://x.com/tonymfer"],
  ["GitHub", "tonymfer", "https://github.com/tonymfer"],
  ["Farcaster", "@to", "https://warpcast.com/tony"],
  ["ENS", "tony.base.eth", "https://etherscan.io/name-lookup-search?id=tony.base.eth"],
  ["Email", "hello@tony.works", "mailto:hello@tony.works"],
];


const proofTypes = [
  ["Prototype", "test the product shape early"],
  ["Build", "ship an interface, repo, demo, or launch"],
  ["Grow", "get it into builders’ hands"],
  ["Clarify", "constraints, proof, QA, postmortem"],
];

const artifactWall = [
  ["/proof/beeper-hardware.jpg", "Beeper hardware", "paid attention"],
  ["/proof/farcards-spread.png", "far.cards spread", "IRL identity"],
  ["/proof/tradefish-base-update.jpg", "TradeFish proof", "agent rail"],
  ["/proof/taptato.png", "TapTato", "playable infra"],
];


const notes = [
  ["Primitive", "What new behavior, market, or workflow did this test?"],
  ["Artifact", "What exists now: product, hardware, repo, demo, workshop, post, or proof link?"],
  ["Proof", "What public evidence says it was real? Links, numbers, screenshots, awards, usage."],
  ["Friction", "Where did users, infra, liquidity, taste, or distribution break?"],
  ["Next bet", "What would I change if I rebuilt it with one more week?"],
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
  { title: "Base APAC day-in-life", copy: "Beeper field signal", href: "https://x.com/baseapac/status/2062896272944845048", image: "/proof/baseapac-residency.jpg" },
  { title: "Yonsei miniapp workshop", copy: "Base MiniKit / Mint Club education", href: "https://x.com/tonymfer/status/1965330528904827040", image: "/proof/yonsei-workshop.jpg" },
  { title: "Base World launch", copy: "community map video receipt", href: "https://x.com/tonymfer/status/1808470847469785334", image: "/proof/base-world-launch.jpg" },
  { title: "TapTato gameplay", copy: "wallet infra as playable loop", href: "https://x.com/tonymfer/status/1979189014386348271", image: "/proof/taptato-video.jpg" },
  { title: "BEEP v2", copy: "paid attention launch media", href: "https://x.com/beeponbase/status/2009487314708517220", image: "/proof/beep-v2.jpg" },
];

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
          <em>Product Engineer / Prototyper</em>
        </a>
        <nav>
          <a href="#objects">/work</a>
          <a href="#video">/video</a>
          <a href="#about">/about</a>
          <a href="#contact">/contact</a>
        </nav>
      </header>
      <nav className="mobile-dock" aria-label="Mobile quick navigation">
        <a href="#top">Tony</a>
        <a href="#objects">Work</a>
        <a href="#video">Video</a>
        <a href="#about">About</a>
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
          <p className="kicker">TONY PARK / PRODUCT ENGINEER / PROTOTYPER</p>
          <h1>Early ideas into usable systems.</h1>
          <p className="subcopy">
            Beeper, TradeFish, far.cards, TapTato, and Base/Farcaster products backed by public proof.
          </p>
          <div className="archive-label">
            <span>Work Archive</span>
            <p>selected products, demos, video clips, and postmortems from shipped experiments.</p>
          </div>
          <div className="proof-types snap-rail" aria-label="Work modes">
            {proofTypes.map(([name, copy]) => (
              <div key={name}>
                <strong>{name}</strong>
                <span>{copy}</span>
              </div>
            ))}
          </div>
          <div className="artifact-wall" aria-label="Proof artifact preview">
            {artifactWall.map(([src, label, kind], index) => (
              <div className="artifact-tile" data-index={String(index + 1).padStart(2, "0")} key={src}>
                <Image alt={label} src={src} width={520} height={360} />
                <span>{kind}</span>
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
                <div className="proof-line"><span>receipt</span>{work.proof}</div>
                <div className="chips">
                  {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="ledger" id="ledger">
        <div className="section-head ledger-head">
          <p>Public Ledger</p>
          <span>only sourced or linkable work</span>
        </div>
        <div className="ledger-list">
          {archive.map(([no, name, type, year, status]) => (
            <div className="ledger-row" key={no}>
              <span>{no}</span>
              <h3>{name}</h3>
              <p>{type}</p>
              <p>{year}</p>
              <p>{status}</p>
            </div>
          ))}
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

      <section className="format" id="format">
        <div className="format-visual">
          <Image alt="Beeper v2 proof still" src="/proof/beep-v2.jpg" width={900} height={650} />
          <div className="stamp">FIELD NOTE</div>
        </div>
        <div>
          <p className="kicker">case notes</p>
          <h2>Each case shows what shipped, what worked, and what I would change.</h2>
          <p className="format-copy">I keep the writing practical: the product behavior tested, the artifact that exists, the public proof, the friction, and the next bet.</p>
          <div className="note-list">
            {notes.map(([title, copy]) => (
              <div className="note-row" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
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
