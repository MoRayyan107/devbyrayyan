import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type Scenario = 'normal' | 'suspicious';
type Phase = 'idle' | 'running' | 'finished';

const stages = [
  { title: 'A payment comes in', caption: 'A bank submits a payment to VaultGuard.' },
  {
    title: 'Recorded and announced',
    caption: 'The payment is saved and announced for separate risk checking.',
  },
  {
    title: 'A separate worker checks risk',
    caption: 'The worker checks the payment for signs of risk.',
  },
  {
    title: 'The outcome is shown',
    caption: 'The example is marked as low risk or flagged for human review.',
  },
];

export function TransactionFlow() {
  const [scenario, setScenario] = useState<Scenario>('normal');
  const [phase, setPhase] = useState<Phase>('idle');
  const [stage, setStage] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const running = useRef(false);

  function cancelTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => () => cancelTimers(), []);

  function start() {
    if (running.current) return;
    cancelTimers();
    running.current = true;
    setStage(0);
    setPhase('running');
    for (let next = 1; next < stages.length; next += 1) {
      timers.current.push(setTimeout(() => setStage(next), next * 1000));
    }
    timers.current.push(
      setTimeout(() => {
        running.current = false;
        setPhase('finished');
      }, 4000),
    );
  }

  function reset() {
    cancelTimers();
    running.current = false;
    setStage(0);
    setPhase('idle');
  }

  const outcome =
    scenario === 'normal'
      ? 'This example is marked as low risk.'
      : 'This example is flagged for human review.';
  const announcement =
    phase === 'idle'
      ? 'Choose a transaction, then send it to follow the four stages.'
      : phase === 'running'
        ? `${scenario === 'normal' ? 'Normal' : 'Suspicious'} transaction simulation started. Following four stages.`
        : `${scenario === 'normal' ? 'Normal' : 'Suspicious'} transaction simulation complete. Payment submitted, saved and announced, then risk checked. ${outcome}`;

  return (
    <section className="transaction-demo" aria-label="VaultGuard transaction simulation">
      <div className="project-notebook">
        <div className="notebook-heading">
          VaultGuard<span>A few notes on the flow</span>
        </div>
        <p className="simulation-label">A simulation of the flow, not live data.</p>
        <div
          className={`flow-track flow-${phase}`}
          style={{ '--stage-index': stage } as CSSProperties}
        >
          <span className="flow-traveller" aria-hidden="true" />
          <ol className="flow-stages">
            {stages.map((item, index) => (
              <li
                key={item.title}
                className={`flow-stage ${phase !== 'idle' && stage === index ? 'is-active' : ''} ${phase !== 'idle' && stage > index ? 'is-complete' : ''}`}
                aria-current={phase === 'running' && stage === index ? 'step' : undefined}
              >
                <span className="stage-heading">
                  <span className="stage-index">0{index + 1}</span>
                  <strong>{item.title}</strong>
                </span>
                <p>{phase === 'finished' && index === 3 ? outcome : item.caption}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="margin-note">
          Follow one payment,
          <br />
          one step at a time.
        </p>
      </div>
      <div className="flow-controls">
        <fieldset disabled={phase === 'running'}>
          <legend>Try a transaction</legend>
          <label>
            <input
              type="radio"
              name="transaction-type"
              value="normal"
              checked={scenario === 'normal'}
              onChange={() => {
                reset();
                setScenario('normal');
              }}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              name="transaction-type"
              value="suspicious"
              checked={scenario === 'suspicious'}
              onChange={() => {
                reset();
                setScenario('suspicious');
              }}
            />
            Suspicious
          </label>
        </fieldset>
        <div className="flow-actions">
          <button
            type="button"
            className="button"
            aria-disabled={phase === 'running'}
            onClick={start}
          >
            {phase === 'running'
              ? 'Following transaction…'
              : phase === 'finished'
                ? 'Run again'
                : 'Send a transaction'}
          </button>
          <button type="button" className="text-button" onClick={reset}>
            Reset
          </button>
        </div>
        <p className="flow-status" role="status" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </div>
      <details className="flow-technical">
        <summary>
          Technical detail <span aria-hidden="true">+</span>
        </summary>
        <div className="disclosure-body">
          <p className="content-placeholder">
            Implementation details below need confirmation against the backend. The
            simulation uses preset outcomes and makes no network requests.
          </p>
          <ol>
            <li>
              <strong>Request.</strong> <code>processTransaction</code>, rate limited with
              Bucket4j. [Confirm current JWT authentication; API-key authentication is
              planned.]
            </li>
            <li>
              <strong>Persistence and event.</strong> PostgreSQL and Kafka. [Confirm
              write/publish order and the response returned to the bank.]
            </li>
            <li>
              <strong>Scoring.</strong> A consumer writes <code>riskScore</code>,{' '}
              <code>transactionStatus</code> and <code>resolvedAt</code> to a dedicated{' '}
              <code>RiskManagement</code> record. [Confirm rules, thresholds and the
              idempotency check for duplicate deliveries.]
            </li>
            <li>
              <strong>Dashboard.</strong> Transactions and risk data are shown behind
              role-based access. [Confirm status names.] Live notifications are deferred.
            </li>
          </ol>
        </div>
      </details>
    </section>
  );
}
