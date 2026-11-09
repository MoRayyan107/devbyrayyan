import { cvs } from './portfolioData';
import { Arrow } from './portfolio';

export function CvLink() {
  return (
    <a className="text-link cv-link" href={cvs[0].url} download>
      Download CV <Arrow direction="down" />
    </a>
  );
}
