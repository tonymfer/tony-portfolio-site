"use client";

import { useEffect, useRef, useState } from "react";

const RECEIPTS = [
  "44,850 USERS / BEEPER",
  "39.1% READ RATE / 2X EMAIL",
  "412K+ TXNS / BASE MAINNET",
  "1ST / BASE AGENT HACKATHON",
  "$8K CHILD COINS / MINTDROP",
  "3,000+ MEMBERS / HUNT TOWN",
  "106K+ CHECK-INS / BEEPER",
  "4 YRS / MINT CLUB SURFACES",
];

const VISIBLE = 4;
const TYPE_MS = 34;
const HOLD_MS = 2200;

export function HeroPager() {
  const [lines, setLines] = useState<string[]>(RECEIPTS.slice(0, VISIBLE));
  const [typed, setTyped] = useState("");
  const nextIndex = useRef(VISIBLE);
  const charIndex = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const incoming = RECEIPTS[nextIndex.current % RECEIPTS.length];
      if (charIndex.current < incoming.length) {
        charIndex.current += 1;
        setTyped(incoming.slice(0, charIndex.current));
        timer = setTimeout(tick, TYPE_MS);
      } else {
        timer = setTimeout(() => {
          setLines((prev) => [...prev.slice(1), incoming]);
          setTyped("");
          charIndex.current = 0;
          nextIndex.current += 1;
          timer = setTimeout(tick, TYPE_MS);
        }, HOLD_MS);
      }
    };

    timer = setTimeout(tick, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pager-unit">
      <div
        className="pager"
        aria-label="Career proof feed — shipped-work receipts"
      >
        <div className="pager-top">
          <span className="pager-led" aria-hidden="true" />
          <span className="pager-brand">TONY·PARK</span>
          <span className="pager-grille" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="pager-screen" role="log" aria-live="off">
          <div className="pager-screen-head">
            <span>PROOF FEED</span>
            <span>{RECEIPTS.length} MSGS</span>
          </div>
          <ul>
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="pager-typing">
              {typed}
              <span className="pager-cursor" aria-hidden="true" />
            </li>
          </ul>
        </div>
        <div className="pager-bottom">
          <span className="pager-model">RCV-2026 · RECEIPT UNIT</span>
          <span className="pager-keys" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <p className="pager-caption">
        live receipts from shipped work —{" "}
        <a href="#ledger">full public ledger</a>
      </p>
    </div>
  );
}
