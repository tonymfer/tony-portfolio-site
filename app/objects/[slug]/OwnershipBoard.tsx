import type { Ownership } from "../../data";

export function OwnershipBoard({ ownership }: { ownership?: Ownership }) {
  if (!ownership) return null;
  return (
    <section
      className="ownership-board"
      id="ownership"
      aria-label="Ownership and role boundaries"
    >
      <div>
        <p className="case-kicker">Ownership</p>
        <h2>What I owned, and where the line was.</h2>
      </div>
      <div className="ownership-grid">
        <div className="ownership-cell">
          <span>My role</span>
          <strong>{ownership.role}</strong>
        </div>
        <div className="ownership-cell">
          <span>Team context</span>
          <p>{ownership.team}</p>
        </div>
        <div className="ownership-cell wide">
          <span>What I directly owned</span>
          <ul>
            {ownership.owned.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
        <div className="ownership-cell">
          <span>What I influenced</span>
          <ul>
            {ownership.influenced.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
        <div className="ownership-cell">
          <span>Proof</span>
          <p>{ownership.proof}</p>
        </div>
      </div>
    </section>
  );
}
