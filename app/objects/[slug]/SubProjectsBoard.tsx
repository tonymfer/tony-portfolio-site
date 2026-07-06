import type { SubProject } from "../../data";

export function SubProjectsBoard({
  subProjects,
}: {
  subProjects?: SubProject[];
}) {
  if (!subProjects) return null;
  return (
    <section className="subprojects-board">
      <div>
        <p className="case-kicker">Surfaces in this orbit</p>
        <h2>Related product surfaces I built.</h2>
      </div>
      <div className="subproject-grid">
        {subProjects.map((sub) => (
          <a
            className="subproject"
            href={sub.href}
            target="_blank"
            rel="noreferrer"
            key={sub.name}
          >
            {sub.image && <img alt={`${sub.name} preview`} src={sub.image} />}
            <h3>{sub.name} ↗</h3>
            <p>{sub.blurb}</p>
            {sub.tags && (
              <div className="chips">
                {sub.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
