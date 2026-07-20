"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  fieldSessions,
  homeCases,
  homeLedger,
  homeRetro,
  homeStrings,
  receiptLines,
  type HomeCase,
  type Lang,
  type RetroItem,
} from "./home-content";
import "./home.css";

// Home v4 — 통합. Layout and copy ported from the approved Claude Design file
// ("Home v4 통합.dc.html"). Client component: the EN/KR toggle and the
// scroll-triggered receipt are the only interactive state.

const stats: Array<[string, string]> = [
  ["1st", "Base Agent Hackathon — official"],
  ["Top 120", "of 1,170+ Base Batches — interview round"],
  ["’23–’26", "public shipping evidence · HUNT products"],
  ["6", "cases · one shared schema"],
];

function krClass(lang: Lang, base: string): string {
  return lang === "kr" ? `${base} kr` : base;
}

function CaseArticle({ item }: { item: HomeCase }) {
  return (
    <article className="v4-case">
      <span className="v4-no">{item.no}</span>
      <div className="v4-case-side">
        <div className="v4-case-thumb">
          <Image
            alt={`${item.name} proof`}
            src={item.image}
            fill
            sizes="(max-width: 860px) 320px, 260px"
          />
        </div>
        <span className={`v4-status v4-status-${item.tone}`}>
          {item.status}
        </span>
      </div>
      <div className="v4-case-main">
        <div className="v4-case-meta">
          <span>{item.kind}</span>
          <span>{item.role}</span>
          <span>{item.period}</span>
        </div>
        <h3>{item.name}</h3>
        <div className="v4-schema">
          <div className="v4-schema-row">
            <span className="v4-schema-label v4-label-green">Problem</span>
            <p className="v4-text-ink">{item.problem}</p>
          </div>
          <div className="v4-schema-row">
            <span className="v4-schema-label v4-label-blue">Owned</span>
            <p className="v4-text-muted">{item.owned}</p>
          </div>
          <div className="v4-schema-row">
            <span className="v4-schema-label v4-label-muted">Boundary</span>
            <p className="v4-text-muted v4-boundary">{item.boundary}</p>
          </div>
          <div className="v4-schema-row">
            <span className="v4-schema-label v4-label-green">Impact</span>
            <div className="v4-impact">
              {item.impact.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className="v4-schema-row">
            <span className="v4-schema-label v4-label-phosphor">Learned</span>
            <p className="v4-text-soft">{item.learned}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function RetroArticle({ item }: { item: RetroItem }) {
  return (
    <article className="v4-retro">
      <span className="v4-no">{item.no}</span>
      <div className="v4-retro-name">
        <strong>{item.name}</strong>
        <span>{item.year}</span>
        <span className="v4-retro-status">{item.status}</span>
      </div>
      <div className="v4-retro-body">
        <p className="v4-text-ink">
          <span className="v4-label-green">What worked</span>
          {item.worked}
        </p>
        <p className="v4-text-muted">
          <span className="v4-label-clay">Why it ended</span>
          {item.ended}
        </p>
        <p className="v4-text-soft">
          <span className="v4-label-phosphor">Carried forward</span>
          {item.lesson}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [printed, setPrinted] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  const strings = homeStrings[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "kr" ? "ko" : "en";
  }, [lang]);

  useEffect(() => {
    const node = receiptRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPrinted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="v4">
      <header className="v4-header">
        <a
          className="v4-brand"
          href="#top"
          aria-label="Tony Park portfolio home"
        >
          <span>Tony Park</span>
          <em>Product Engineer</em>
        </a>
        <nav className="v4-nav">
          <a href="#work">/work</a>
          <a href="#retro">/retro</a>
          <a href="#field">/field</a>
          <a href="#ledger">/ledger</a>
          <a href="#hire">/hire</a>
          <a href="/wiki">/index</a>
          <button
            className="v4-lang-toggle"
            onClick={() => setLang((prev) => (prev === "en" ? "kr" : "en"))}
            type="button"
          >
            {lang === "en" ? "EN → 한국어" : "한국어 → EN"}
          </button>
        </nav>
      </header>

      <section className="v4-hero" id="top">
        <div className="v4-hero-row">
          <div className="v4-hero-copy">
            <p className="v4-kicker">
              <span className="v4-led" aria-hidden="true" />
              TONY PARK / PRODUCT ENGINEER / EVERY CLAIM CARRIES ITS SOURCE
            </p>
            <h1 className={lang === "kr" ? "kr" : undefined}>
              {strings.heroTitle}
            </h1>
            <p className={krClass(lang, "v4-hero-sub")}>{strings.heroSub}</p>
          </div>
          <div className="v4-hero-visual">
            <div className="v4-hero-photo">
              <Image
                alt="Tony Park leading a Base MiniKit workshop at Yonsei University"
                src="/proof/tony-yonsei-hero.jpg"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 430px"
              />
              <span className="v4-photo-tag">
                Yonsei · Base MiniKit workshop · 2025
              </span>
            </div>
          </div>
        </div>
        <div className="v4-stats" aria-label="Career proof highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="v4-hero-actions" aria-label="Primary actions">
          <a className="v4-btn v4-btn-primary" href="#work">
            Selected work ↓
          </a>
          <a
            className="v4-btn v4-btn-ghost"
            href="mailto:tony.base.eth@gmail.com"
          >
            Email Tony ↗
          </a>
        </div>
      </section>

      <section className="v4-section" id="work">
        <div className="v4-section-head">
          <p>Selected Work</p>
          <span>
            same schema on every case — problem · owned · boundary · impact ·
            learned
          </span>
        </div>
        <div className="v4-case-list">
          {homeCases[lang].map((item) => (
            <CaseArticle item={item} key={item.no} />
          ))}
        </div>
      </section>

      <section className="v4-section" id="retro">
        <div className="v4-section-head v4-retro-head">
          <p>Postmortems</p>
          <span>things that worked, ended, and taught something</span>
        </div>
        <p className={krClass(lang, "v4-retro-intro")}>{strings.retroIntro}</p>
        <div className="v4-retro-list">
          {homeRetro[lang].map((item) => (
            <RetroArticle item={item} key={item.no} />
          ))}
        </div>
      </section>

      <section className="v4-field" id="field">
        <a
          className="v4-field-image"
          href="https://x.com/ewhachain/status/1966407486166139390"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Tony Park leading an EwhaChain MiniKit workshop"
            src="/proof/ewhachain-session-wide.jpg"
            fill
            sizes="100vw"
          />
          <span className="v4-field-tag">
            EWHA-CHAIN recap / Dreamplus Gangnam / Sep 2025 ↗
          </span>
        </a>
        <div className="v4-field-grid">
          <div>
            <p className="v4-field-label">Field record · verified sessions</p>
            <h2>Build the surface. Then teach people to ship with it.</h2>
          </div>
          <div>
            <p className={krClass(lang, "v4-field-body")}>
              {strings.fieldBody}
            </p>
            <div className="v4-sessions">
              {fieldSessions.map((session) => (
                <a
                  href={session.href}
                  key={session.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{session.label}</span>
                  <span>{session.date} ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v4-section" id="ledger">
        <div className="v4-section-head">
          <p>Public Ledger</p>
          <span>every row links to its receipt</span>
        </div>
        <div className="v4-ledger-list">
          {homeLedger.map((row) => (
            <a
              className="v4-ledger-row"
              href={row.href}
              key={row.no}
              target="_blank"
              rel="noreferrer"
            >
              <span className="v4-no">{row.no}</span>
              <h3>{row.name}</h3>
              <p className="v4-ledger-type">{row.type}</p>
              <p className="v4-ledger-year">{row.year}</p>
              <p className={`v4-ledger-status v4-tone-${row.tone}`}>
                {row.status} ↗
              </p>
            </a>
          ))}
        </div>
        <p className="v4-ledger-note">
          excluded on purpose — internal tools, private runtimes, and anything
          without a public receipt yet
        </p>
      </section>

      <section className="v4-hire" id="hire">
        <div>
          <p className="v4-field-label">Best fit · what to hire me for</p>
          <h2 className={lang === "kr" ? "kr" : undefined}>
            {strings.hireTitle}
          </h2>
          <p className={krClass(lang, "v4-hire-body")}>{strings.hireBody}</p>
          <p className={krClass(lang, "v4-hire-not")}>
            {strings.hireNotTargeting}
          </p>
          <div className="v4-hire-actions">
            <a className="v4-cta-primary" href="mailto:tony.base.eth@gmail.com">
              tony.base.eth@gmail.com ↗
            </a>
            <a
              className="v4-cta-ghost"
              href="https://x.com/tonymfer"
              target="_blank"
              rel="noreferrer"
            >
              @tonymfer ↗
            </a>
            <a
              className="v4-cta-ghost"
              href="https://github.com/tonymfer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <p className="v4-also-on">
            also on — Farcaster @to · tony.base.eth · LinkedIn /tonymfer
          </p>
        </div>
        <div className="v4-receipt-col" ref={receiptRef}>
          {printed ? (
            <div className="v4-receipt">
              <div className="v4-receipt-head">
                <strong>ATTENTION RECEIVED</strong>
                <span>TONY·PARK</span>
              </div>
              <div className="v4-receipt-lines">
                {receiptLines.map((line, index) => (
                  <div
                    className="v4-receipt-line"
                    key={line.label}
                    style={{ animationDelay: `${80 + index * 140}ms` }}
                  >
                    <span>{line.label}</span>
                    <span className={`v4-rc-${line.tone}`}>{line.value}</span>
                  </div>
                ))}
              </div>
              <div className="v4-receipt-foot">
                <span>*** THANK YOU FOR YOUR ATTENTION ***</span>
              </div>
            </div>
          ) : (
            <div className="v4-receipt-waiting">RECEIPT PRINTS ON ARRIVAL…</div>
          )}
          <p className="v4-receipt-tagline">
            the page practices what Beeper preaches
          </p>
        </div>
      </section>
    </main>
  );
}
