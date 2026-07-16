"use client";

import { useEffect, useRef, useState } from "react";
import { pagerReceipts } from "./data";

// Receipts derive from data.ts (single source of truth for case claims) so the
// pager can never drift from the evidence map. Rendered `value / label`.
const RECEIPTS = pagerReceipts.map(
  (receipt) => `${receipt.value} / ${receipt.label}`,
);

const VISIBLE = 4;
const TYPE_MS = 34;
const HOLD_MS = 2200;

export function HeroPager() {
  const [lines, setLines] = useState<string[]>(RECEIPTS.slice(0, VISIBLE));
  const [typed, setTyped] = useState("");
  const nextIndex = useRef(VISIBLE);
  const charIndex = useRef(0);
  const advanceRef = useRef<() => void>(() => {});

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const commit = () => {
      const incoming = RECEIPTS[nextIndex.current % RECEIPTS.length];
      setLines((prev) => [...prev.slice(1), incoming]);
      setTyped("");
      charIndex.current = 0;
      nextIndex.current += 1;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      advanceRef.current = commit;
      return;
    }

    const tick = () => {
      const incoming = RECEIPTS[nextIndex.current % RECEIPTS.length];
      if (charIndex.current < incoming.length) {
        charIndex.current += 1;
        setTyped(incoming.slice(0, charIndex.current));
        timer = setTimeout(tick, TYPE_MS);
      } else {
        timer = setTimeout(() => {
          commit();
          timer = setTimeout(tick, TYPE_MS);
        }, HOLD_MS);
      }
    };

    advanceRef.current = () => {
      clearTimeout(timer);
      commit();
      timer = setTimeout(tick, TYPE_MS);
    };

    timer = setTimeout(tick, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pager-unit">
      <div
        className="pager"
        role="button"
        tabIndex={0}
        aria-label="Career proof feed — shipped-work receipts. Activate to show the next receipt."
        onClick={() => advanceRef.current()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            advanceRef.current();
          }
        }}
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
        live receipts from shipped work — tap to page ·{" "}
        <a href="#ledger">full public ledger</a>
      </p>
    </div>
  );
}
