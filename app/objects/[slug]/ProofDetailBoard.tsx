import type { ProofDetail } from "../../data";

export function ProofDetailBoard({ detail }: { detail?: ProofDetail[] }) {
  if (!detail) return null;
  return (
    <section className="proof-detail-board">
      <div>
        <p className="case-kicker">Proof, up close</p>
        <h2>What the screenshots actually prove.</h2>
      </div>
      <div className="proof-detail-strip">
        {detail.map((entry) => (
          <figure className="proof-detail" key={entry.image}>
            <img alt={entry.caption} src={entry.image} />
            <figcaption>{entry.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
