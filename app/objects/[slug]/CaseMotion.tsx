"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { CaseStudy } from "../../data";
import { OwnershipBoard } from "./OwnershipBoard";
import { ProofDetailBoard } from "./ProofDetailBoard";
import { SubProjectsBoard } from "./SubProjectsBoard";
import { BeeperExtras } from "./BeeperExtras";

export function CaseMotion({ item }: { item: CaseStudy }) {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const isBeeper = item.slug === "beeper";

  useEffect(() => {
    if (
      !rootRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let cleanup: (() => void) | undefined;
    import("gsap").then(({ gsap }) => {
      if (!rootRef.current) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".case-kicker, .case-title, .case-subcopy, .case-meta-card, .metric-chip",
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.055,
          },
        );
        gsap.fromTo(
          ".receipt-row, .mechanic-card, .flow-step, .video-card",
          { x: -14, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.48,
            ease: "power2.out",
            stagger: 0.035,
            delay: 0.18,
          },
        );
      }, rootRef);
      cleanup = () => ctx.revert();
    });
    return () => cleanup?.();
  }, []);

  return (
    <section className="case-page" ref={rootRef}>
      <a className="back-link" href="/#objects">
        ← Primitive Archive
      </a>
      <nav className="case-mobile-dock" aria-label="Case sections">
        <a href="#primitive">Prim</a>
        <a href="#proof">Proof</a>
        <a href="#scars">Scars</a>
        <a href="#next">Next</a>
      </nav>
      <div className="case-hero">
        <div className="case-copy">
          <p className="case-kicker">
            {item.no} / {item.object} / {item.year}
          </p>
          <h1 className="case-title">{item.name}</h1>
          <p className="case-subcopy">{item.desc}</p>
          <BeeperExtras item={item} slot="metrics" />
          {item.metricSource && (
            <p className="metric-source">{item.metricSource}</p>
          )}
          <div className="case-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <motion.div
          className="case-image-wrap"
          style={isBeeper ? { y: imageY, scale: imageScale } : undefined}
        >
          <img alt={`${item.name} proof`} src={item.image} />
          <div className="case-image-caption">{item.proof}</div>
        </motion.div>
      </div>

      <div className="case-meta-grid">
        <div className="case-meta-card">
          <span>role</span>
          <strong>{item.role}</strong>
        </div>
        <div className="case-meta-card">
          <span>object</span>
          <strong>{item.object}</strong>
        </div>
        <div className="case-meta-card">
          <span>receipt</span>
          <strong>{item.proof}</strong>
        </div>
        <div className="case-meta-card">
          <span>external</span>
          <a href={item.live || item.href} target="_blank" rel="noreferrer">
            open proof ↗
          </a>
        </div>
      </div>

      <div className="case-body">
        <OwnershipBoard ownership={item.ownership} />
        <BeeperExtras item={item} slot="mechanic" />

        {!isBeeper && (
          <motion.article
            className="case-section"
            id="primitive"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span>01</span>
            <h2>Primitive</h2>
            <p>{item.primitive}</p>
          </motion.article>
        )}
        <motion.article
          className="case-section"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
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
              const pending =
                typeof point === "object" && Boolean(point.sourceNeeded);
              return (
                <motion.div
                  className="receipt-row"
                  key={`${index}-${text.slice(0, 24)}`}
                  whileHover={{ x: 6 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {href && !pending ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {text} ↗
                    </a>
                  ) : (
                    <p>
                      {text}
                      {pending && <em className="pending">source pending</em>}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        <ProofDetailBoard detail={item.proofDetail} />

        <SubProjectsBoard subProjects={item.subProjects} />

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
                <article
                  className="timeline-row"
                  key={`${entry.date}-${entry.title}`}
                >
                  <span>{entry.date}</span>
                  <div>
                    {entry.href ? (
                      <a href={entry.href} target="_blank" rel="noreferrer">
                        {entry.title} ↗
                      </a>
                    ) : (
                      <strong>{entry.title}</strong>
                    )}
                    {entry.note && <p>{entry.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <BeeperExtras item={item} slot="media" />

        <div className="case-columns" id="scars">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="case-kicker">What went right</p>
            <ul>
              {item.right.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="case-kicker">What went wrong</p>
            <ul>
              {item.wrong.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          className="next-bet"
          id="next"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="case-kicker">Next bet</p>
          <h2>{item.next}</h2>
        </motion.section>
      </div>
    </section>
  );
}
