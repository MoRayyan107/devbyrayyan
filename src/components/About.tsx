import { Certificates } from './Certificates';

export function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-title">
      <div className="about-heading">
        <span className="eyebrow">A little about me</span>
        <h2 id="about-title">
          How I like
          <br />
          <span>to work.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I like to understand a system before writing code, then find where it struggles.
          At StrathHack 2026, working in a team of five under a strict deadline taught me
          to break big problems into smaller pieces, divide the work, and get to grips
          with unfamiliar technology.
        </p>
        <p>
          For a software engineering internship in 2027, I want to learn how teams
          maintain and monitor software that people rely on, and the engineering
          principles they use beyond what I’ve encountered in my side projects.
        </p>
        <dl className="right-now" aria-label="Right now">
          <div>
            <dt>Building</dt>
            <dd>A Java linter for my dissertation</dd>
          </div>
          <div>
            <dt>Learning</dt>
            <dd>Java APIs and AWS essentials</dd>
          </div>
        </dl>
        <Certificates />
      </div>
    </section>
  );
}
