"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { CaseStudy } from "../../data";

const beeperMetrics = [
  ["44.8K", "total users"],
  ["39.1%", "read rate"],
  ["50.6%", "repeat senders"],
  ["106K+", "check-ins"],
  ["412K+", "Base txs"],
];

const beeperMechanic = [
  ["Sender pays", "Signal starts with a real cost instead of another free notification."],
  ["Receiver prices", "Humans set the inbox price that makes interruption worthwhile."],
  ["Engage → earn", "Attention becomes a reward event, not a platform-captured leak."],
  ["Ignore → refund", "Unread messages can return value instead of becoming spam residue."],
];

const beeperFlow = ["Compose", "Targets", "Missions", "Plan", "Confirm", "Final tx"];

const beeperPartners = [
  ["Signet", "#120", "#6"],
  ["ReviewMe", "#34", "#6"],
  ["imagineclub", "#219", "#36"],
  ["TYSM", "#23", "#5"],
];

const beeperVideos = [
  { title: "Base APAC cold plunge", copy: "founder story / residency signal", href: "https://x.com/baseapac/status/2062479675461603777", image: "/proof/baseapac-cold-plunge.jpg" },
  { title: "Base APAC day-in-life", copy: "Beeper in the residency field", href: "https://x.com/baseapac/status/2062896272944845048", image: "/proof/baseapac-residency.jpg" },
  { title: "Beeper hardware proof", copy: "mini app moving toward a real pager", href: "https://x.com/tonymfer/status/1991792691198427618", image: "/proof/beeper-hardware.jpg" },
  { title: "BEEP v2 launch", copy: "paid-attention media artifact", href: "https://x.com/beeponbase/status/2009487314708517220", image: "/proof/beep-v2.jpg" },
];

export function CaseMotion({ item }: { item: CaseStudy }) {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const isBeeper = item.slug === "beeper";

  useEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup: (() => void) | undefined;
    import("gsap").then(({ gsap }) => {
      if (!rootRef.current) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(".case-kicker, .case-title, .case-subcopy, .case-meta-card, .metric-chip", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72, ease: "power3.out", stagger: 0.055 });
        gsap.fromTo(".receipt-row, .mechanic-card, .flow-step, .video-card", { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.48, ease: "power2.out", stagger: 0.035, delay: 0.18 });
      }, rootRef);
      cleanup = () => ctx.revert();
    });
    return () => cleanup?.();
  }, []);

  return (
    <section className="case-page" ref={rootRef}>
      <a className="back-link" href="/#objects">← Primitive Archive</a>
      <nav className="case-mobile-dock" aria-label="Case sections">
        <a href="#primitive">Prim</a>
        <a href="#proof">Proof</a>
        <a href="#scars">Scars</a>
        <a href="#next">Next</a>
      </nav>
      <div className="case-hero">
        <div className="case-copy">
          <p className="case-kicker">{item.no} / {item.object} / {item.year}</p>
          <h1 className="case-title">{item.name}</h1>
          <p className="case-subcopy">{item.desc}</p>
          {isBeeper && (
            <div className="case-metric-strip" aria-label="Beeper traction metrics">
              {beeperMetrics.map(([value, label]) => (
                <div className="metric-chip" key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          )}
          <div className="case-tags">
            {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <motion.div className="case-image-wrap" style={isBeeper ? { y: imageY, scale: imageScale } : undefined}>
          <img alt={`${item.name} proof`} src={item.image} />
          <div className="case-image-caption">{item.proof}</div>
        </motion.div>
      </div>

      <div className="case-meta-grid">
        <div className="case-meta-card"><span>role</span><strong>{item.role}</strong></div>
        <div className="case-meta-card"><span>object</span><strong>{item.object}</strong></div>
        <div className="case-meta-card"><span>receipt</span><strong>{item.proof}</strong></div>
        <div className="case-meta-card"><span>external</span><a href={item.live || item.href} target="_blank" rel="noreferrer">open proof ↗</a></div>
      </div>

      <div className="case-body">
        {isBeeper && (
          <>
            <section className="mechanic-board" id="primitive">
              <div>
                <p className="case-kicker">Mechanic</p>
                <h2>Money changes the message.</h2>
              </div>
              <div className="mechanic-grid">
                {beeperMechanic.map(([title, copy]) => (
                  <div className="mechanic-card" key={title}><h3>{title}</h3><p>{copy}</p></div>
                ))}
              </div>
            </section>

            <section className="flow-board">
              <div>
                <p className="case-kicker">Sender flow</p>
                <h2>From intent to onchain receipt.</h2>
              </div>
              <div className="flow-rail" aria-label="Beeper sender flow">
                {beeperFlow.map((step, index) => <div className="flow-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}
              </div>
            </section>
          </>
        )}

        {!isBeeper && (
          <motion.article className="case-section" id="primitive" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>
            <span>01</span>
            <h2>Primitive</h2>
            <p>{item.primitive}</p>
          </motion.article>
        )}
        <motion.article className="case-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>
          <span>{isBeeper ? "03" : "02"}</span>
          <h2>Artifact</h2>
          <p>{item.artifact}</p>
        </motion.article>

        <section className="receipt-board" id="proof">
          <div>
            <p className="case-kicker">Proof / Traction</p>
            <h2>Receipts before adjectives.</h2>
          </div>
          <div className="receipt-list">
            {item.proofPoints.map((point, index) => {
              const text = typeof point === "string" ? point : point.text;
              const href = typeof point === "string" ? undefined : point.href;
              return (
                <motion.div className="receipt-row" key={text} whileHover={{ x: 6 }}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {href ? <a href={href} target="_blank" rel="noreferrer">{text} ↗</a> : <p>{text}</p>}
                </motion.div>
              );
            })}
          </div>
        </section>

        {item.fieldNotes && (
          <section className="field-notes-board">
            <div>
              <p className="case-kicker">Field notes</p>
              <h2>What was hard, what changed, and what I learned.</h2>
            </div>
            <div className="field-note-list">
              {item.fieldNotes.map((note) => (
                <article className="field-note" key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {item.timeline && (
          <section className="timeline-board">
            <div>
              <p className="case-kicker">Receipt timeline</p>
              <h2>Company years, visible in public receipts.</h2>
            </div>
            <div className="timeline-list">
              {item.timeline.map((entry) => (
                <article className="timeline-row" key={`${entry.date}-${entry.title}`}>
                  <span>{entry.date}</span>
                  <div>
                    {entry.href ? <a href={entry.href} target="_blank" rel="noreferrer">{entry.title} ↗</a> : <strong>{entry.title}</strong>}
                    {entry.note && <p>{entry.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {isBeeper && (
          <>
            <section className="partner-board">
              <div>
                <p className="case-kicker">Partner rail</p>
                <h2>Campaigns should move rank, not just impressions.</h2>
              </div>
              <div className="partner-grid">
                {beeperPartners.map(([name, from, to]) => <div className="partner-card" key={name}><span>{name}</span><strong>{from} → {to}</strong></div>)}
              </div>
            </section>

            <section className="video-board">
              <div>
                <p className="case-kicker">Video receipts</p>
                <h2>Use X videos as public proof; host clips only after rights/file cleanup.</h2>
              </div>
              <div className="video-grid">
                {beeperVideos.map((video) => <a className="video-card" href={video.href} target="_blank" rel="noreferrer" key={video.href}><img alt={`${video.title} video still`} src={video.image} /><span>Watch on X ↗</span><h3>{video.title}</h3><p>{video.copy}</p></a>)}
              </div>
            </section>
          </>
        )}

        <div className="case-columns" id="scars">
          <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
            <p className="case-kicker">What went right</p>
            <ul>{item.right.map((line) => <li key={line}>{line}</li>)}</ul>
          </motion.section>
          <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: .05 }}>
            <p className="case-kicker">What went wrong</p>
            <ul>{item.wrong.map((line) => <li key={line}>{line}</li>)}</ul>
          </motion.section>
        </div>

        <motion.section className="next-bet" id="next" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
          <p className="case-kicker">Next bet</p>
          <h2>{item.next}</h2>
        </motion.section>
      </div>
    </section>
  );
}
