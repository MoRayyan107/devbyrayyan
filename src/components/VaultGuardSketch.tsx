// Homepage summary of VaultGuardArchitecture. Keep the two consistent.
const steps = [
  {
    title: 'Receive',
    tech: 'Spring Boot API',
    text: 'A bank submits a payment to VaultGuard.',
  },
  {
    title: 'Save & publish',
    tech: 'PostgreSQL · Kafka',
    text: 'The payment is saved, then published to Kafka. The bank gets 201 Created straight away.',
  },
  {
    title: 'Check risk',
    tech: 'Kafka consumer · Redis',
    text: 'Transaction frequency and impossible travel are checked. Scores above 0.7 are flagged.',
  },
  {
    title: 'Review',
    tech: 'React dashboard',
    text: 'Transactions and risk results are shown behind role-based access.',
  },
];

export function VaultGuardSketch() {
  return (
    <figure className="system-sketch">
      <figcaption>
        How a payment moves
        <span>Simplified. The case study walks through each stage.</span>
      </figcaption>
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
    </figure>
  );
}
