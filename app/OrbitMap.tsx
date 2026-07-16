import { orbit } from "./data";

export function OrbitMap() {
  return (
    <section className="orbit-map" id="orbit">
      <div className="section-head">
        <p>Orbit Map</p>
        <span>
          nothing here is random — every surface was built for something
        </span>
      </div>
      <div className="orbit-body">
        {orbit.map((era) => (
          <div className="orbit-era" key={era.era}>
            <p className="orbit-era-label">
              <span>{era.era}</span>
              <span>{era.span}</span>
            </p>
            {era.groups.map((group) => (
              <div
                className={
                  group.satellites.length
                    ? "orbit-group"
                    : "orbit-group orbit-solo"
                }
                key={group.anchor.name}
              >
                <a
                  className="orbit-node orbit-anchor"
                  href={group.anchor.href}
                  target={group.anchor.external ? "_blank" : undefined}
                  rel={group.anchor.external ? "noreferrer" : undefined}
                >
                  <span className="orbit-rail" aria-hidden="true" />
                  <strong>{group.anchor.name}</strong>
                  <em>{group.anchor.note}</em>
                  <i>{group.anchor.external ? "proof ↗" : "case →"}</i>
                </a>
                {group.satellites.map((sat, index) => (
                  <a
                    className="orbit-node orbit-sat"
                    data-last={
                      index === group.satellites.length - 1 ? "true" : undefined
                    }
                    href={sat.href}
                    target={sat.external ? "_blank" : undefined}
                    rel={sat.external ? "noreferrer" : undefined}
                    key={sat.name}
                  >
                    <span className="orbit-rail" aria-hidden="true" />
                    <strong>{sat.name}</strong>
                    <em>{sat.note}</em>
                    <i>{sat.external ? "proof ↗" : "case →"}</i>
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="orbit-note">
        Satellites were built for their anchors, not as side quests — the anchor
        pages carry the receipts.
      </p>
    </section>
  );
}
