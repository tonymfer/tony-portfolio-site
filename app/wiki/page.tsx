import type { Metadata } from "next";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import { fieldEntries, resolvedPrimitives } from "../content";
import { archive, cases } from "../data";
import "./wiki.css";

const wikiSerif = Newsreader({
  variable: "--font-wiki-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tony Park Index",
  description:
    "A reference index of Tony Park's product engineering work, product primitives, public proof, and field notes.",
  alternates: { canonical: "/wiki" },
};

const sections = [
  ["summary", "Summary"],
  ["work", "Selected work"],
  ["primitives", "Primitive glossary"],
  ["company", "Company period"],
  ["field", "In the field"],
  ["proof", "Proof index"],
  ["contact", "Contact"],
];

function Citation({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      className="wiki-citation"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      [{children}]
    </a>
  );
}

export default function WikiPortfolio() {
  return (
    <main className={`wiki-page ${wikiSerif.variable}`}>
      <header className="wiki-masthead">
        <a className="wiki-wordmark" href="/wiki" aria-current="page">
          TONY PARK INDEX
        </a>
        <div className="wiki-issue">
          <span>Personal reference work</span>
          <span>Product Engineer</span>
          <span>2022—2026</span>
        </div>
        <nav aria-label="Wiki utility navigation">
          <a className="wiki-view-switch" href="/">
            Visual portfolio
          </a>
          <a href="/tony-resume.pdf">Résumé PDF</a>
          <a href="mailto:tony.base.eth@gmail.com">Contact</a>
        </nav>
      </header>

      <div className="wiki-shell">
        <aside className="wiki-sidebar">
          <div>
            <p>Contents</p>
            <nav aria-label="Article contents">
              {sections.map(([id, label], index) => (
                <a href={`#${id}`} key={id}>
                  <span>{index + 1}</span>
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="wiki-sidebar-note">
            <p>Article status</p>
            <strong>Living document</strong>
            <span>
              Claims link to public products, posts, repositories, workshops, or
              evidence bundles.
            </span>
          </div>
        </aside>

        <article className="wiki-article">
          <header className="wiki-article-head" id="summary">
            <div>
              <p className="wiki-breadcrumb">
                People / Product engineers / Tony Park
              </p>
              <h1>Tony Park</h1>
              <p className="wiki-deck">
                Product engineer working on interfaces for paid attention, token
                markets, wallet infrastructure, builder communities, and agent
                reputation.
              </p>
              <div className="wiki-actions">
                <a href="#work">Browse work ↓</a>
                <a href="mailto:tony.base.eth@gmail.com">Email Tony ↗</a>
              </div>
            </div>

            <figure className="wiki-infobox">
              <Image
                src="/proof/ewhachain-session-portrait.jpg"
                alt="Tony Park leading an EWHA-CHAIN MiniKit workshop"
                width={720}
                height={900}
                priority
              />
              <figcaption>
                Tony Park leading a hands-on MiniKit workshop at EWHA-CHAIN,
                2025.
              </figcaption>
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Product Engineer</dd>
                </div>
                <div>
                  <dt>Best fit</dt>
                  <dd>Founding product engineering</dd>
                </div>
                <div>
                  <dt>Handles</dt>
                  <dd>@tonymfer · tony.base.eth</dd>
                </div>
                <div>
                  <dt>Site</dt>
                  <dd>
                    <a href="https://tonypark.xyz">tonypark.xyz ↗</a>
                  </dd>
                </div>
              </dl>
            </figure>
          </header>

          <section className="wiki-section wiki-intro">
            <p>
              <strong>Tony Park</strong> builds product surfaces where the
              behavior is still unfamiliar. His work spans HUNT, Mint Club, Hunt
              Town, and Steemhunt; Beeper's paid-attention system; Base and
              Farcaster products; and AI-agent reputation experiments.
            </p>
            <p>
              The recurring job is translation: turn a primitive into an
              interface, make the constraint visible, ship the useful version,
              and attach public proof. Beeper reached{" "}
              <strong>44.8K users</strong> in the Base Batches 003 evidence
              bundle; TradeFish placed first in the Base Agent Hackathon.{" "}
              <Citation href="/objects/beeper">1</Citation>{" "}
              <Citation href="/objects/tradefish">2</Citation>
            </p>
          </section>

          <section className="wiki-section" id="work">
            <div className="wiki-section-title">
              <span>01</span>
              <div>
                <p>Selected work</p>
                <h2>Entries</h2>
              </div>
            </div>
            <div className="wiki-entry-list">
              {cases.map((item) => (
                <article className="wiki-entry" key={item.slug}>
                  <div className="wiki-entry-index">{item.no}</div>
                  <div className="wiki-entry-main">
                    <div>
                      <h3>
                        <a href={`/objects/${item.slug}`}>{item.name}</a>
                      </h3>
                      <span>{item.year}</span>
                    </div>
                    <p>{item.desc}</p>
                    <dl>
                      <div>
                        <dt>Primitive</dt>
                        <dd>{item.object}</dd>
                      </div>
                      <div>
                        <dt>Role</dt>
                        <dd>{item.role}</dd>
                      </div>
                      <div>
                        <dt>Evidence</dt>
                        <dd>{item.proof}</dd>
                      </div>
                    </dl>
                  </div>
                  <a
                    className="wiki-entry-image"
                    href={`/objects/${item.slug}`}
                    aria-label={`Open ${item.name} case`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name} product proof`}
                      width={560}
                      height={390}
                    />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="wiki-section" id="primitives">
            <div className="wiki-section-title">
              <span>02</span>
              <div>
                <p>Primitive glossary</p>
                <h2>What the interfaces had to explain</h2>
              </div>
            </div>
            <div className="wiki-glossary">
              {resolvedPrimitives.map((primitive) => (
                <div key={primitive.id}>
                  <dt>{primitive.name}</dt>
                  <dd>{primitive.definition}</dd>
                  <span>Example: {primitive.example}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="wiki-section" id="company">
            <div className="wiki-section-title">
              <span>03</span>
              <div>
                <p>Company period</p>
                <h2>HUNT → Mint Club → Hunt Town</h2>
              </div>
            </div>
            <div className="wiki-company-grid">
              <div className="wiki-company-lede">
                <strong>Oct 2022—Feb 2026</strong>
                <p>
                  Long-running product work across token-backed assets, bonding
                  curves, swaps, discovery, community tooling, builder support,
                  and ecosystem education.
                </p>
              </div>
              <ol>
                <li>
                  <span>2022—24</span>
                  <strong>Company surfaces</strong>
                  <p>
                    Made token and reward mechanics usable in live product
                    interfaces.
                  </p>
                </li>
                <li>
                  <span>2024—25</span>
                  <strong>Builder loops</strong>
                  <p>
                    SDK demos, early-project support, workshops, and community
                    activation.
                  </p>
                </li>
                <li>
                  <span>2025—26</span>
                  <strong>Paid attention</strong>
                  <p>
                    Moved from community and market surfaces into inbox pricing
                    and sender intent.
                  </p>
                </li>
                <li>
                  <span>2026</span>
                  <strong>Agent reputation</strong>
                  <p>
                    Applied the same proof discipline to AI-generated market
                    calls.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          <section className="wiki-section" id="field">
            <div className="wiki-section-title">
              <span>04</span>
              <div>
                <p>In the field</p>
                <h2>Products taught in rooms</h2>
              </div>
            </div>
            <figure className="wiki-field-figure">
              <Image
                src="/proof/ewhachain-session-wide.jpg"
                alt="EWHA-CHAIN first session with Tony Park presenting Base MiniKit and Mint Club SDK"
                width={1600}
                height={900}
              />
              <figcaption>
                EWHA-CHAIN First Session · Dreamplus Gangnam · Sep 2025{" "}
                <Citation href="https://x.com/ewhachain/status/1966407486166139390">
                  3
                </Citation>
              </figcaption>
            </figure>
            <div className="wiki-field-list">
              {fieldEntries.map((entry) => (
                <article key={entry.title}>
                  <span>{entry.date}</span>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.body}</p>
                  </div>
                  <a href={entry.href} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="wiki-section" id="proof">
            <div className="wiki-section-title">
              <span>05</span>
              <div>
                <p>Proof index</p>
                <h2>Smaller objects and public traces</h2>
              </div>
            </div>
            <div
              className="wiki-proof-table"
              role="table"
              aria-label="Public proof index"
            >
              <div className="wiki-proof-head" role="row">
                <span>No.</span>
                <span>Entry</span>
                <span>Type</span>
                <span>Year</span>
                <span>Status</span>
              </div>
              {archive.map(([no, name, type, year, status]) => (
                <div role="row" key={no}>
                  <span>{no}</span>
                  <strong>{name}</strong>
                  <span>{type}</span>
                  <span>{year}</span>
                  <span>{status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="wiki-section wiki-contact" id="contact">
            <div className="wiki-section-title">
              <span>06</span>
              <div>
                <p>Contact</p>
                <h2>Useful for teams building on new rails</h2>
              </div>
            </div>
            <p>
              Best suited to founding product engineering roles where strategy,
              interface craft, prototyping, shipping, and public proof need to
              live in one person.
            </p>
            <div>
              <a href="mailto:tony.base.eth@gmail.com">
                tony.base.eth@gmail.com
              </a>
              <a
                href="https://github.com/tonymfer"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="https://x.com/tonymfer" target="_blank" rel="noreferrer">
                X ↗
              </a>
              <a href="/tony-resume.pdf">Résumé PDF ↗</a>
            </div>
          </section>
        </article>
      </div>

      <footer className="wiki-footer">
        <strong>TONY PARK INDEX</strong>
        <span>Static personal reference · updated 2026</span>
        <a href="/">Return to visual portfolio ↑</a>
      </footer>
    </main>
  );
}
