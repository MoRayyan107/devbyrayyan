import { Arrow } from './portfolio';

export function Certificates() {
  return (
    <aside id="Certificates" className="learning-note" aria-label="Additional learning">
      <div>
        <span className="eyebrow">Additional learning</span>
        <p>JPMorgan Chase &amp; Co. · Forage software engineering job simulation</p>
      </div>
      <a
        className="text-link"
        href={`${import.meta.env.BASE_URL}assets/ForageJPMC_Certificate.webp`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View certificate <Arrow />
      </a>
    </aside>
  );
}
