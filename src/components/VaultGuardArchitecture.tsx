// Confirmed with Rayyan, 14 November 2026. Update this if the backend changes.
const requestPath = [
  {
    title: 'Authenticate',
    tech: 'JWT · secure cookie',
    text: 'The request carries a JWT in a secure, same-site cookie.',
  },
  {
    title: 'Rate limit',
    tech: 'Bucket4j · Redis',
    text: 'Requests are rate limited by Bucket4j, with buckets held in Redis.',
  },
  {
    title: 'Save',
    tech: 'PostgreSQL',
    text: 'The transaction is written to the database first.',
  },
  {
    title: 'Publish',
    tech: 'Kafka',
    text: 'An event announces the new transaction.',
  },
  {
    title: 'Respond',
    tech: '201 Created',
    text: 'The bank hears back without waiting for the risk check.',
  },
];

const riskPath = [
  {
    title: 'Consume',
    tech: 'Kafka consumer',
    text: 'The same application picks up the event.',
  },
  {
    title: 'Check history',
    tech: 'Redis',
    text: 'How often this user has transacted, and whether the location change is possible (impossible travel).',
  },
  {
    title: 'Score',
    tech: 'Threshold 0.7',
    text: 'A risk score above 0.7 flags the transaction for review.',
  },
  {
    title: 'Record',
    tech: 'PostgreSQL',
    text: 'The score and outcome are saved to a RiskManagement record.',
  },
  {
    title: 'Review',
    tech: 'React dashboard',
    text: 'Transactions and risk results are shown behind role-based access.',
  },
];

function Lane({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; tech: string; text: string }[];
}) {
  return (
    <div className="lane">
      <h3 className="lane-title">{title}</h3>
      <ol className="sketch-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="sketch-index">0{index + 1}</span>
            <strong>{step.title}</strong>
            <span className="sketch-tech">{step.tech}</span>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function VaultGuardArchitecture() {
  return (
    <section className="case-architecture" aria-labelledby="architecture-title">
      <span className="eyebrow">How it’s built</span>
      <h2 id="architecture-title">Accept first, check risk after.</h2>
      <p>
        VaultGuard is a single Spring Boot application. A payment is saved and published,
        and the bank gets <code>201 Created</code> straight away. A Kafka consumer in the
        same application checks risk afterwards, so the request never waits on scoring.
        The trade-off is deliberate: a payment can be accepted first and flagged later.
      </p>
      <figure className="system-sketch architecture">
        <figcaption>
          Inside VaultGuard
          <span>One Spring Boot application · PostgreSQL, Kafka and Redis alongside</span>
        </figcaption>
        <Lane title="Request path · while the bank waits" steps={requestPath} />
        <p className="lane-handoff">
          The Kafka event from step 04 starts the second path.
        </p>
        <Lane title="Risk path · after the response" steps={riskPath} />
      </figure>
    </section>
  );
}
