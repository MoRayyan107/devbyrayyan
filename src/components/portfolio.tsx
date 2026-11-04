export const Arrow = () => <span aria-hidden="true">↗</span>;
export const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">
    {items.map((t) => (
      <span key={t}>{t}</span>
    ))}
  </div>
);
