import { Tags, Arrow } from './portfolio';
import { github, games } from './portfolioData';
import { VaultGuardSketch } from './VaultGuardSketch';

const base = import.meta.env.BASE_URL;

export function Projects() {
  return (
    <section id="work" className="work wrap" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 id="work-title">Selected work.</h2>
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
          <p className="vault-evidence">
            Load-tested locally with Locust up to 500 concurrent simulated users. The case
            study shows the results, including the failures I still need to diagnose.
          </p>
        </div>
        <div className="vault-actions">
          <Tags
            items={['Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'React / TypeScript']}
          />
          <a className="button" href={`${base}vaultguard.html`}>
            Behind VaultGuard <Arrow />
          </a>
          <p className="project-status">Personal learning project · local testing</p>
        </div>
        <VaultGuardSketch />
      </article>

      <h3 className="more-heading">More projects</h3>
      <ul className="project-rows">
        <li className="also-built">
          <span className="eyebrow">In progress · dissertation</span>
          <div>
            <h4>Java Code Linter</h4>
            <p>A static analysis tool for Java, built for my dissertation.</p>
          </div>
          <Tags items={['Java', 'Developer tooling']} />
          <div className="row-links">
            <a
              className="text-link"
              href={`${github}/linter-CS408`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Java Code Linter source on GitHub"
            >
              Source <Arrow />
            </a>
          </div>
        </li>
        <li className="also-built">
          <span className="eyebrow">Earlier work</span>
          <div>
            <h4>Distributed Chat Server</h4>
            <p>A Discord-inspired system. The foundation VaultGuard grew from.</p>
          </div>
          <Tags items={['Java', 'Sockets', 'Concurrency']} />
          <div className="row-links">
            <a
              className="text-link"
              href={`${github}/Discord`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Distributed Chat Server source on GitHub"
            >
              Source <Arrow />
            </a>
          </div>
        </li>
        {games.map((game) => (
          <li id={game.slug} className="also-built" key={game.slug}>
            <span className="eyebrow">Team hackathon</span>
            <div>
              <h4>{game.name}</h4>
              <p>{game.description}</p>
              {game.role && <p className="row-role">{game.role}</p>}
            </div>
            <p className="row-meta">{game.label}</p>
            <div className="row-links">
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
          </li>
        ))}
      </ul>
    </section>
  );
}
