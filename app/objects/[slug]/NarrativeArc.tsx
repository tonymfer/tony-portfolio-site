import type { CaseStudy } from "../../data";
import { NARRATIVE_KEYS, NARRATIVE_LABELS } from "./narrative";

// Typographic emphasis for the numbers already present in the authored copy —
// figures like 44,850 · 39.1% · 412K+ · 2x · $8K · 003 read as callouts. No new
// schema, no per-step metric mapping; the Impact step is where numerals live.
const METRIC = /(\$?\d[\d,.]*(?:%|\+|x|K\+?|M\+?)?)/;

function withCallouts(body: string) {
  return body.split(METRIC).map((part, index) =>
    index % 2 === 1 ? (
      <span className="metric-callout" key={index}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function NarrativeArc({
  notes,
}: {
  notes: NonNullable<CaseStudy["fieldNotes"]>;
}) {
  const bodyByKey = new Map(notes.map((note) => [note.title, note.body]));
  return (
    <section className="narrative-arc" id="arc" aria-label="How the work went">
      <div>
        <p className="case-kicker">The arc</p>
        <h2>How the work actually went.</h2>
      </div>
      <ol className="narrative-steps">
        {NARRATIVE_KEYS.map((key, index) => (
          <li className={`narrative-step step-${key.toLowerCase()}`} key={key}>
            <span className="narrative-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="narrative-copy">
              <p className="narrative-label">{NARRATIVE_LABELS[key]}</p>
              <p className="narrative-body">
                {withCallouts(bodyByKey.get(key) ?? "")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
