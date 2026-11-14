import { VaultGuardTest } from './VaultGuardTest';
import { Arrow, Tags } from './portfolio';
import { github } from './portfolioData';
import { Brand } from './Brand';
import { TransactionFlow } from './TransactionFlow';
import { VaultGuardArchitecture } from './VaultGuardArchitecture';

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
            A project exploring transaction processing and separate risk checks. Here’s
            the idea behind it, what local testing suggests, and what I still need to
            investigate.
          </p>
          <Tags
            items={['Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'React / TypeScript']}
          />
          <p className="case-status">
            A personal learning project. It has not been deployed to real users.
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
        <section className="case-approach story-grid" aria-label="Problem and approach">
          <div>
            <span className="eyebrow">The problem</span>
            <h2>Spot risk. Keep the flow.</h2>
            <p>
              How can a transaction-processing system accept a payment while a separate
              worker checks its risk? I wanted to understand how those pieces fit
              together.
            </p>
          </div>
          <div>
            <span className="eyebrow">The approach</span>
            <h2>Separate the work.</h2>
            <p>
              A single Spring Boot application uses PostgreSQL, Kafka and Redis to explore
              event-driven risk checking, with a role-based dashboard for reviewing
              transaction and risk data.
            </p>
            <p>
              Live notifications are deferred. Further down, an interactive simulation
              follows one payment through the flow.
            </p>
          </div>
        </section>
        <VaultGuardArchitecture />
        <section id="transaction-flow" className="case-flow" aria-labelledby="flow-title">
          <div className="case-flow-intro">
            <span className="eyebrow">Follow a transaction</span>
            <h2 id="flow-title">From payment to risk check.</h2>
            <p>
              Choose a normal or suspicious example to walk through the four stages. Open
              the technical detail for a closer look at the implementation.
            </p>
          </div>
          <TransactionFlow />
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
