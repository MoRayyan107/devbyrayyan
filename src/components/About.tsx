import { Tags } from './portfolio';
import { stacks } from './portfolioData';
export function About() {
  return (
    <>
      {' '}
      <section id="about" className="about wrap" aria-labelledby="about-title">
        <div>
          <span className="eyebrow">A little about me</span>
          <h2 id="about-title">
            Curious about
            <br />
            what makes
            <br />
            <span>things tick.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Rayyan, an MEng Computer Science student at the University of Strathclyde,
            graduating in 2028. I’m drawn to the systems that make finance work: the flow
            of data, the edge cases, and decisions that need to happen in milliseconds.
          </p>
          <p>
            I like to understand a system before I start writing code. Once it runs, I
            want to know where it struggles. That’s usually where I learn the most.
          </p>
          <Tags items={stacks} />
          <div className="experience">
            <div>
              <span>01</span>
              <p>
                <strong>University of Strathclyde</strong>MEng Computer Science ·
                graduating 2028
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Hackathons, with a team</strong>StrathHack 2026 · GUTS
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Projects beyond the coursework</strong>Distributed systems · fraud
                detection · games
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
