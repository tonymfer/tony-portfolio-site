import Image from "next/image";
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
            <div className="proof-detail-media">
              <Image
                alt={entry.caption}
                src={entry.image}
                fill
                sizes="(max-width: 880px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <figcaption>{entry.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
