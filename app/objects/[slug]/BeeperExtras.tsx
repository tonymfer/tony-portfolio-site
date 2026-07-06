import type { CaseStudy } from "../../data";

const beeperMetrics = [
  ["44.8K", "total users"],
  ["39.1%", "read rate"],
  ["50.6%", "repeat senders"],
  ["106K+", "check-ins"],
  ["412K+", "Base txs"],
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
  },
  {
    title: "Base APAC day-in-life",
    copy: "Beeper in the residency field",
    href: "https://x.com/baseapac/status/2062896272944845048",
    image: "/proof/baseapac-residency.jpg",
  },
  {
    title: "Beeper hardware proof",
    copy: "mini app moving toward a real pager",
    href: "https://x.com/tonymfer/status/1991792691198427618",
    image: "/proof/beeper-hardware.jpg",
  },
  {
    title: "BEEP v2 launch",
    copy: "paid-attention media artifact",
    href: "https://x.com/beeponbase/status/2009487314708517220",
    image: "/proof/beep-v2.jpg",
  },
];

// Beeper is the only case with these bespoke sections. They live at three
// distinct positions in the case layout, so BeeperExtras exposes them via a
// `slot` and self-guards on slug — the parent stays free of `isBeeper &&`
// branches and simply drops a slot wherever the section belongs.
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
                <img alt={`${video.title} video still`} src={video.image} />
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
