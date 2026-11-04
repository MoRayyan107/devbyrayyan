import { VaultGuardTest } from './VaultGuardTest';
import { Arrow, Tags } from './portfolio';
import { github } from './portfolioData';
import { Brand } from './Brand';

const home = import.meta.env.BASE_URL;

export function VaultGuardPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Brand href={home} />
        <a className="text-link" href={`${home}#vaultguard`}>
          <Arrow direction="left" /> Back to work
        </a>
      </header>
      <main id="main" className="vaultguard-page wrap">
        <section className="case-intro" aria-labelledby="case-title">
          <span className="eyebrow">Personal project · fraud detection</span>
          <h1 id="case-title">
            Inside <span>VaultGuard.</span>
          </h1>
          <p className="case-lead">
            An event pipeline, risk scoring, and a role-based dashboard. Here’s how I
            built it, what the local test showed, and what I still need to investigate.
          </p>
          <Tags
            items={['Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'React / TypeScript']}
          />
          <p className="case-status">
            Development is halted while I focus on university work and my dissertation.
          </p>
          <a
            className="text-link"
            href={`${github}/VaultGuard`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the source <Arrow />
          </a>
        </section>
        <section className="case-metrics" aria-label="Local load-test highlights">
          <div>
            <span>Average throughput</span>
            <strong>
              495.72<small> req/s</small>
            </strong>
            <p>Across the recorded run</p>
          </div>
          <div>
            <span>Median response · p50</span>
            <strong>
              420<small> ms</small>
            </strong>
            <p>Half of recorded responses</p>
          </div>
          <div>
            <span>95th percentile · p95</span>
            <strong>
              870<small> ms</small>
            </strong>
            <p>95% of recorded responses</p>
          </div>
          <div className="case-metric-errors">
            <span>HTTP 500 failures</span>
            <strong>
              0.56<small>%</small>
            </strong>
            <p>1,250 requests · cause unconfirmed</p>
          </div>
        </section>
        <section className="case-approach story-grid" aria-label="Problem and approach">
          <div>
            <span className="eyebrow">THE PROBLEM</span>
            <h4>Spot risk. Keep the flow.</h4>
            <p>
              Transaction processing and fraud checks compete for time. The challenge:
              evaluate risk without bottlenecking the core banking service.
            </p>
          </div>
          <div>
            <span className="eyebrow">MY APPROACH</span>
            <h4>Decouple the work.</h4>
            <p>
              I built the backend around Spring Boot and Kafka, using event-driven
              processing for parallel risk scoring and WebSockets for live updates. Redis
              and PostgreSQL support the platform.
            </p>
          </div>
        </section>
        <VaultGuardTest />
        <div className="case-return">
          <a className="button" href={`${home}#work`}>
            <Arrow direction="left" /> Back to selected work
          </a>
          <a className="text-link" href={`${home}#contact`}>
            Get in touch <Arrow />
          </a>
        </div>
      </main>
      <footer className="wrap">
        <Brand href={home} />
        <p>© {new Date().getFullYear()} Mohammad Rayyan Adhoni</p>
        <p className="ai-note">This portfolio was built with AI assistance.</p>
      </footer>
    </>
  );
}
