import { Tags, Arrow } from './portfolio';
import { github, games } from './portfolioData';
import { GameArtwork } from './GameArtwork';

export function Projects() {
  return (
    <section id="work" className="work wrap" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">A few things I’ve made</span>
          <h2 id="work-title">Selected work.</h2>
        </div>
        <p>Personal projects and things built with a team.</p>
      </div>
      <article id="vaultguard" className="vault-card">
        <div className="vault-copy">
          <span className="eyebrow green">Personal project · fraud detection</span>
          <h3>VaultGuard</h3>
          <p>
            An event pipeline, risk scoring and a role-based dashboard, exploring how
            suspicious transactions can be detected and investigated.
          </p>
        </div>
        <div className="vault-actions">
          <Tags items={['Spring Boot', 'Kafka', 'PostgreSQL', 'React / TypeScript']} />
          <a className="button" href={`${import.meta.env.BASE_URL}vaultguard.html`}>
            Behind VaultGuard <Arrow />
          </a>
          <p className="project-status">Personal learning project · local testing</p>
        </div>
      </article>
      <div className="game-grid">
        {games.map((game) => (
          <article
            id={game.slug}
            className={`game-card ${game.className}`}
            key={game.name}
          >
            <GameArtwork game={game} />
            <div className="game-content">
              <span className="eyebrow">{game.label}</span>
              <div className="game-title">
                <h3>{game.name}</h3>
              </div>
              <p>{game.summary}</p>
              <div className="project-links">
                <a
                  className="text-link"
                  href={`${import.meta.env.BASE_URL}${game.slug}.html`}
                >
                  About {game.name} <Arrow />
                </a>
                <a
                  className="text-link"
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Play ${game.name} in a new tab`}
                >
                  Play <Arrow />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="also-built">
        <span className="eyebrow">Earlier work</span>
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
        <span className="eyebrow">In progress</span>
        <div>
          <h3>Java Code Linter</h3>
          <p>My dissertation project.</p>
        </div>
        <Tags items={['Java', 'Developer tooling']} />
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
  );
}
