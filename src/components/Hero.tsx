import { Arrow } from './portfolio';
import { email } from './portfolioData';
import { CvLink } from './CvLink';

export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-top">
        <span className="eyebrow">Rayyan Adhoni · Glasgow, Scotland</span>
        <a className="availability" href={email}>
          <i aria-hidden="true" /> Available for 2027 software engineering internships
        </a>
      </div>
      <h1 id="hero-title">
        I build backend systems in Java, then find out where they <span>break.</span>
      </h1>
      <div className="hero-bottom">
        <p>
          I’m an MEng Computer Science student at the University of Strathclyde,
          graduating in 2028. Right now that means event-driven services with Spring Boot
          and Kafka, and a Java linter for my dissertation.
        </p>
        <div className="hero-actions">
          <a className="button" href="#work">
            Explore my projects <Arrow direction="down" />
          </a>
          <CvLink />
        </div>
      </div>
    </section>
  );
}
