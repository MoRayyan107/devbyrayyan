import { cvs } from './portfolioData';
import { Arrow } from './portfolio';

export function CvLink() {
  return <div className="cv-downloads" role="group" aria-label="Download a CV">
    {cvs.map(cv => <a key={cv.url} className="text-link" href={cv.url} download>{cv.label} <Arrow /></a>)}
  </div>;
}
