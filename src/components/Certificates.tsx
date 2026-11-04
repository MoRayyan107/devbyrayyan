import { Arrow } from './portfolio';

export function Certificates() {
  const certificate = `${import.meta.env.BASE_URL}assets/ForageJPMC_Certificate.webp`;
  return (
    <section
      id="Certificates"
      className="certificates wrap"
      aria-labelledby="certificates-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">Learning beyond the coursework</span>
          <h2 id="certificates-title">Certificates &amp; practice.</h2>
        </div>
        <p>A little more context on what I’ve been learning.</p>
      </div>
      <a
        className="certificate-feature"
        href={certificate}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="certificate-preview">
          <img
            src={certificate}
            alt="JPMorgan Chase & Co. software engineering job simulation certificate from Forage"
            loading="lazy"
          />
        </div>
        <div className="certificate-copy">
          <span className="eyebrow">Forage · Job simulation</span>
          <h3>JPMorgan Chase &amp; Co.</h3>
          <p>Software Engineering</p>
          <p>A self-paced job simulation, completed through Forage.</p>
          <span className="certificate-action">
            View certificate <Arrow />
          </span>
        </div>
      </a>
    </section>
  );
}
