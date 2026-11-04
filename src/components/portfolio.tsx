export function Arrow({
  direction = 'up-right',
}: {
  direction?: 'up-right' | 'left' | 'down' | 'down-left';
}) {
  const paths = {
    'up-right': 'M6 18 18 6M6 6h12v12',
    left: 'M19 12H5m7-7-7 7 7 7',
    down: 'M12 5v14m-7-7 7 7 7-7',
    'down-left': 'M18 6 6 18M6 6v12h12',
  };
  return (
    <svg
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
export const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">
    {items.map((t) => (
      <span key={t}>{t}</span>
    ))}
  </div>
);
