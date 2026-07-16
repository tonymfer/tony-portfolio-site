import Image from "next/image";
import type { CaseStudy } from "../../data";

// Hero strip carries only the metrics with a clean public/evidence-bundle
// footing. On-chain, dashboard, and residency figures ship as "source pending"
// on the proof board (data.ts) until each has a public receipt — R4 sign-off.
const beeperMetrics = [
  ["44.8K", "total users"],
  ["32.8K", "active users"],
  ["39.1%", "read rate"],
  ["2.4K", "paid senders"],
];

const beeperMechanic = [
  [
    "Sender pays",
    "Signal starts with a real cost instead of another free notification.",
  ],
  [
    "Receiver prices",
    "Humans set the inbox price that makes interruption worthwhile.",
  ],
  [
    "Engage → earn",
    "Attention becomes a reward event, not a platform-captured leak.",
  ],
  [
    "Ignore → refund",
    "Unread messages can return value instead of becoming spam residue.",
  ],
];

const beeperFlow = [
  "Compose",
  "Targets",
  "Missions",
  "Plan",
  "Confirm",
  "Final tx",
];

const beeperFrontendProof = [
  [
    "Art direction",
    "Custom pixel/CRT system, green-on-black signal language, dithered hardware object, and a coherent product world instead of a template.",
  ],
  [
    "Responsive craft",
    "Desktop splits the value prop and hardware artifact; mobile keeps brand, CTA, metrics, proof tags, and the device visual readable in one narrow flow.",
  ],
  [
    "Product clarity",
    "The page explains the core behavior in one sentence: attach money, set your price, unread messages auto-refund.",
  ],
  [
    "Interaction surface",
    "Clear app/video CTAs, marquee protocol cues, metric strip, and stateful beeper screens turn the frontend into product proof.",
  ],
];

const beeperPartners = [
  ["Signet", "#120", "#6"],
  ["ReviewMe", "#34", "#6"],
  ["imagineclub", "#219", "#36"],
  ["TYSM", "#23", "#5"],
];

const beeperVideos = [
  {
    title: "Base APAC cold plunge",
    copy: "founder story / residency signal",
    href: "https://x.com/baseapac/status/2062479675461603777",
    image: "/proof/baseapac-cold-plunge.jpg",
    width: 675,
    height: 1200,
  },
  {
    title: "Base APAC day-in-life",
    copy: "Beeper in the residency field",
    href: "https://x.com/baseapac/status/2062896272944845048",
    image: "/proof/baseapac-residency.jpg",
    width: 675,
    height: 1200,
  },
  {
    title: "Beeper hardware proof",
    copy: "mini app moving toward a real pager",
    href: "https://x.com/tonymfer/status/1991792691198427618",
    image: "/proof/beeper-hardware.jpg",
    width: 1024,
    height: 1024,
  },
  {
    title: "BEEP v2 launch",
    copy: "paid-attention media artifact",
    href: "https://x.com/beeponbase/status/2009487314708517220",
    image: "/proof/beep-v2.jpg",
    width: 1200,
    height: 799,
  },
];

// Beeper is the only case with these bespoke sections. They live at three distinct
// positions in the case layout, so BeeperExtras exposes them via a `slot` and
// self-guards on slug — the parent stays free of `isBeeper &&` branches and simply
// drops a slot wherever the section belongs.
type BeeperSlot = "metrics" | "mechanic" | "media";

export function BeeperExtras({
  item,
  slot,
}: {
  item: CaseStudy;
  slot: BeeperSlot;
}) {
  if (item.slug !== "beeper") return null;

  if (slot === "metrics") {
    return (
      <div className="case-metric-strip" aria-label="Beeper traction metrics">
        {beeperMetrics.map(([value, label]) => (
          <div className="metric-chip" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (slot === "mechanic") {
    return (
      <>
        <section className="mechanic-board" id="primitive">
          <div>
            <p className="case-kicker">Mechanic</p>
            <h2>Money changes the message.</h2>
          </div>
          <div className="mechanic-grid">
            {beeperMechanic.map(([title, copy]) => (
              <div className="mechanic-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flow-board">
          <div>
            <p className="case-kicker">Sender flow</p>
            <h2>From intent to onchain receipt.</h2>
          </div>
          <div className="flow-rail" aria-label="Beeper sender flow">
            {beeperFlow.map((step, index) => (
              <div className="flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (slot === "media") {
    return (
      <>
        <section className="frontend-proof-board" id="frontend">
          <div>
            <p className="case-kicker">Frontend proof</p>
            <h2>
              The website is part of the product, not a wrapper around it.
            </h2>
            <p className="frontend-proof-copy">
              I designed and built the Beep Works surface as a full product
              artifact: pixel typography, CRT scanlines, responsive layout, live
              CTAs, metrics, protocol tags, and a hardware-like visual system
              that makes paid attention feel tangible.
            </p>
          </div>
          <div className="frontend-proof-grid">
            <a
              className="frontend-shot desktop-shot"
              href="https://beep.works/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Beep Works desktop homepage screenshot"
                src="/proof/beepworks-home-desktop.png"
                width={1440}
                height={1200}
                sizes="(max-width: 880px) 100vw, 60vw"
              />
              <span>desktop homepage / live site ↗</span>
            </a>
            <a
              className="frontend-shot mobile-shot"
              href="https://beep.works/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Beep Works mobile homepage screenshot"
                src="/proof/beepworks-home-mobile.png"
                width={390}
                height={1200}
                sizes="(max-width: 880px) 250px, 25vw"
              />
              <span>mobile responsive proof ↗</span>
            </a>
            <div className="frontend-craft-list">
              {beeperFrontendProof.map(([title, copy]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-board">
          <div>
            <p className="case-kicker">Partner rail</p>
            <h2>Campaigns should move rank, not just impressions.</h2>
          </div>
          <div className="partner-grid">
            {beeperPartners.map(([name, from, to]) => (
              <div className="partner-card" key={name}>
                <span>{name}</span>
                <strong>
                  {from} → {to}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <section className="video-board">
          <div>
            <p className="case-kicker">Video receipts</p>
            <h2>
              Use X videos as public proof; host clips only after rights/file
              cleanup.
            </h2>
          </div>
          <div className="video-grid">
            {beeperVideos.map((video) => (
              <a
                className="video-card"
                href={video.href}
                target="_blank"
                rel="noreferrer"
                key={video.href}
              >
                <Image
                  alt={`${video.title} video still`}
                  src={video.image}
                  width={video.width}
                  height={video.height}
                  sizes="(max-width: 880px) 100vw, 44vw"
                />
                <span>Watch on X ↗</span>
                <h3>{video.title}</h3>
                <p>{video.copy}</p>
              </a>
            ))}
          </div>
        </section>
      </>
    );
  }

  return null;
}
