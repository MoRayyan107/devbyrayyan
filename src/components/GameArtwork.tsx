import { projectMedia } from './portfolioData';
import type { GameProject } from './portfolioData';

export function GameArtwork({ game }: { game: GameProject }) {
  const capture = projectMedia[game.className as 'zero' | 'duck'];
  return (
    <div className={`game-artwork ${game.className}`}>
      <div
        className="game-art"
        role="img"
        aria-label={`${game.name} ${capture ? 'gameplay capture' : 'project illustration'}`}
      >
        {capture ? (
          <img
            className="game-capture"
            src={capture}
            alt=""
            width="640"
            height="360"
            loading="lazy"
          />
        ) : (
          <>
            <span className="art-label">HACKATHON / TEAM PROJECT</span>
            <small className="illustration-label">PROJECT ILLUSTRATION</small>
            {game.className === 'zero' ? (
              <span className="vault-door" aria-hidden="true">
                <span />
              </span>
            ) : (
              <span className="game-symbol" aria-hidden="true">
                {game.symbol}
              </span>
            )}
            <span className="game-art-title">{game.art}</span>
            <span className="art-bottom">{game.line}</span>
          </>
        )}
      </div>
    </div>
  );
}
