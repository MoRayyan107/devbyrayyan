import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

// Content stays visible without this enhancement. Each section only fades once.
export function Reveal({ children }: { children: ReactNode }) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = element.current;
    if (!node || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -24px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={element}>{children}</div>;
}
