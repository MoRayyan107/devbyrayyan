import { Arrow } from './portfolio';
import { email, github } from './portfolioData';
import { CvLink } from './CvLink';

export function Contact() {
  return (
    <section id="contact" className="contact wrap">
      <div className="contact-top">
        <span className="eyebrow">What’s next?</span>
        <a className="availability" href={email}>
          <i />
          Available for 2027 internships
        </a>
      </div>
      <h2 className="contact-title">
        Looking for a backend intern?
        <br />
        <em>Let’s talk.</em>
      </h2>
      <a className="button email-button" href={email}>
        rayyan.adhoni@outlook.com <Arrow />
      </a>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/mohammad-rayyan-adhoni"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Arrow />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow />
        </a>
        <CvLink />
      </div>
    </section>
  );
}
