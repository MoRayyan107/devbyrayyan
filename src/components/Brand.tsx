export function Brand({ href }: { href: string }) {
  return (
    <a className="wordmark site-brand" href={href}>
      <span className="brand-name">
        Rayyan<span className="brand-discipline">Engineering</span>
      </span>
    </a>
  );
}
