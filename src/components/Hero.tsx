import { Arrow } from './portfolio';
import { email } from './portfolioData';
import { CvLink } from './CvLink';
export function Hero() {
  return (
    <>
      {' '}
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-top">
          <span className="eyebrow">Rayyan Adhoni · Glasgow, Scotland</span>
          <a className="availability" href={email}>
            <i />
            Available for 2027 internships <Arrow />
          </a>
        </div>
        <h1 id="hero-title">
          Hi, I’m Rayyan.
          <br />I build the bits
          <br />
          <span>behind the scenes.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m a backend-focused CS student building{' '}
            <strong>fraud detection and distributed systems</strong>, with an interest in
            FinTech.<span>MEng · University of Strathclyde · Graduating 2028</span>
          </p>
          <div className="hero-conversion">
            <div className="hero-actions">
              <a className="button" href="#vaultguard">
                See VaultGuard <Arrow />
              </a>
              <CvLink />
            </div>
            <p className="proof">
              VaultGuard · local load test
              <br />
              <strong>495.72 req/s · 500 simulated users</strong>
              <br />
              <span className="proof-errors">
                0.56% HTTP 500 failures · details in case study
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
