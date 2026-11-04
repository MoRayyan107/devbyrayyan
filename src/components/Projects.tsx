import { Tags, Arrow } from './portfolio';
import { github, games, projectMedia } from './portfolioData';
export function Projects() {
  return (
    <>
      {' '}
      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A few things I’ve made</span>
            <h2 id="work-title">From my side of the keyboard.</h2>
          </div>
          <p>
            Some solo work, some team efforts.
            <br />
            The games are more fun if you try them.
          </p>
        </div>
        <article id="vaultguard" className="vault-card">
          <div className="vault-copy">
            <span className="eyebrow green">Personal project · fraud detection</span>
            <h3>VaultGuard</h3>
            <h4>
              What happens when a transaction <br />
              doesn’t look quite right?
            </h4>
            <p>
              I built an event pipeline, risk scoring, and a role-based dashboard to
              explore how suspicious transactions can be detected and investigated.
            </p>
            <Tags
              items={[
                'Spring Boot',
                'Kafka',
                'Redis',
                'PostgreSQL',
                'React / TypeScript',
              ]}
            />
            <a className="button" href={`${import.meta.env.BASE_URL}vaultguard.html`}>
              Read the case study & metrics <Arrow />
            </a>
            <p className="project-status">
              In progress. Paused while I focus on studies and my dissertation.
            </p>
          </div>
          <div className="project-visual">
            {projectMedia.dashboard ? (
              <figure className="dashboard-capture">
                <img
                  src={projectMedia.dashboard}
                  alt="VaultGuard role-based dashboard"
                  loading="lazy"
                />
                <figcaption>VaultGuard · development dashboard</figcaption>
              </figure>
            ) : (
              <div
                className="project-notebook"
                role="img"
                aria-label="Simplified flow: transactions, Kafka events, risk scoring, live updates"
              >
                <div className="notebook-heading">
                  VaultGuard <span>A few notes on the flow</span>
                </div>
                <div className="sketch-flow">
                  <div>01 · Incoming transactions</div>
                  <span>
                    <Arrow direction="down" />
                  </span>
                  <div>02 · Kafka event stream</div>
                  <span>
                    <Arrow direction="down" />
                  </span>
                  <div className="sketch-highlight">03 · Is this suspicious?</div>
                  <span>
                    <Arrow direction="down" />
                  </span>
                  <div>04 · Score it. Surface it.</div>
                </div>
                <p className="margin-note">
                  Keep the checks moving,
                  <br />
                  keep the service responsive.
                </p>
                <small>Architecture sketch · work in progress</small>
              </div>
            )}
          </div>
        </article>
        <div className="games-heading">
          <span className="eyebrow">And then there were the hackathons</span>
          <span>
            These you can play. <Arrow direction="down-left" />
          </span>
        </div>
        <div className="game-grid">
          {games.map((game) => (
            <article className={`game-card ${game.className}`} key={game.name}>
              <a
                className="game-art"
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play ${game.name} in a new tab`}
              >
                <span className="art-label">INTERACTIVE / HACKATHON GAME</span>
                {projectMedia[game.className as 'zero' | 'duck'] ? (
                  <img
                    className="game-capture"
                    src={projectMedia[game.className as 'zero' | 'duck']!}
                    alt={`${game.name} gameplay`}
                    loading="lazy"
                  />
                ) : game.className === 'zero' ? (
                  <span className="vault-door" aria-hidden="true">
                    <span />
                  </span>
                ) : (
                  <span className="game-symbol" aria-hidden="true">
                    {game.symbol}
                  </span>
                )}
                <span className="game-art-title">{game.art}</span>
                <span className="art-bottom">
                  {game.line}
                  <span>▶ PLAY</span>
                </span>
                <small className="illustration-label">PROJECT ILLUSTRATION</small>
              </a>
              <div className="game-content">
                <a
                  className="play-link"
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play it live <Arrow />
                </a>
                <span className="eyebrow">{game.label}</span>
                <div className="game-title">
                  <h3>{game.name}</h3>
                </div>
                <p>{game.description}</p>
                <details>
                  <summary>
                    Behind the build <span>+</span>
                  </summary>
                  <p>{game.story}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <div className="also-built">
          <span className="eyebrow">An earlier project</span>
          <div>
            <h3>Distributed Chat Server</h3>
            <p>A Discord-inspired system. The foundation VaultGuard grew from.</p>
          </div>
          <Tags items={['Java', 'Sockets', 'Concurrency']} />
          <a
            href={`${github}/Discord`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Distributed Chat Server source"
          >
            <Arrow />
          </a>
        </div>
        <div className="also-built">
          <span className="eyebrow green">On my desk right now</span>
          <div>
            <h3>Code Linter</h3>
            <p>I’m building a linter in Java. Still a work in progress.</p>
          </div>
          <Tags items={['Java', 'Developer tooling', 'In progress']} />
          <a
            href={`${github}/linter-CS408`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the in-progress code linter on GitHub"
          >
            <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
