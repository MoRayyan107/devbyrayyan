import { Brand } from './Brand';
import { Arrow } from './portfolio';
import { GameArtwork } from './GameArtwork';
import type { GameProject } from './portfolioData';

const home = import.meta.env.BASE_URL;

export function GameProjectPage({ game }: { game: GameProject }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Brand href={home} />
        <a className="text-link" href={`${home}#${game.slug}`}>
          <Arrow direction="left" /> Back to work
        </a>
      </header>
      <main id="main" className="game-project-page wrap">
        <section className="case-intro" aria-labelledby="case-title">
          <span className="eyebrow">{game.label}</span>
          <h1 id="case-title">
            {game.name}
            <span>.</span>
          </h1>
          <p className="case-lead">{game.description}</p>
          <p className="project-context">{game.context}</p>
          <a className="button" href={game.url} target="_blank" rel="noopener noreferrer">
            Play {game.name} <Arrow />
          </a>
        </section>
        <GameArtwork game={game} />
        <section className="project-build" aria-labelledby="build-title">
          <span className="eyebrow">Team project</span>
          <h2 id="build-title">Behind the build.</h2>
          <dl className="project-build-notes">
            <div>
              <dt>My contribution</dt>
              <dd className="content-placeholder">
                [Confirm my specific contribution to {game.name}.]
              </dd>
            </div>
            <div>
              <dt>A decision I worked on</dt>
              <dd className="content-placeholder">
                [Add one design or engineering decision, why I made it, and what I
                learned.]
              </dd>
            </div>
          </dl>
        </section>
        <div className="case-return">
          <a className="button" href={`${home}#${game.slug}`}>
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
