import { useEffect, useRef, useState } from 'react';
import { Arrow } from './portfolio';
import { email, github } from './portfolioData';
import { CvLink } from './CvLink';

const address = email.replace('mailto:', '');

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copying = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    if (copying.current) return;
    copying.current = true;
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(address);
      if (mounted.current) {
        setCopyStatus('copied');
        timer.current = setTimeout(() => setCopyStatus('idle'), 2000);
      }
    } catch {
      if (mounted.current) setCopyStatus('failed');
    } finally {
      copying.current = false;
    }
  }

  return (
    <section id="contact" className="contact wrap" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact-title">
        Hiring an intern for 2027?
        <br />
        <em>Email me.</em>
      </h2>
      <div className="email-actions">
        <a className="button email-button" href={email}>
          {address}
          <Arrow />
        </a>
        <button type="button" className="text-button copy-email" onClick={copyEmail}>
          {copyStatus === 'copied' ? 'Copied' : 'Copy email'}
        </button>
      </div>
      <p className="copy-status" role="status" aria-live="polite">
        {copyStatus === 'copied'
          ? 'Email address copied.'
          : copyStatus === 'failed'
            ? 'Couldn’t copy automatically. Select and copy the address above.'
            : ''}
      </p>
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
