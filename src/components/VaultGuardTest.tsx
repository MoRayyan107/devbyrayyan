export function VaultGuardTest() {
  return (
    <section className="load-test" aria-labelledby="load-test-title">
      <span className="eyebrow">Local testing · recorded Locust results</span>
      <h3 id="load-test-title">What the local test showed.</h3>
      <p>
        I tested VaultGuard’s transaction endpoint with Locust, ramping up to 500
        concurrent simulated users. These figures cover the full run, including ramp-up
        and a temporary slowdown.
      </p>
      <p className="test-conditions">
        Test conditions: VaultGuard was tested locally on a single server, with Locust
        running on the same machine. Duration: 7 minutes 29 seconds, on 4 November 2026.
      </p>
      <dl className="test-observations">
        <div>
          <dt>Peak concurrent simulated users</dt>
          <dd>500</dd>
        </div>
        <div>
          <dt>Average throughput · full run</dt>
          <dd>495.72 requests / second</dd>
        </div>
        <div>
          <dt>Median response · p50</dt>
          <dd>420ms</dd>
        </div>
        <div>
          <dt>95th percentile · p95</dt>
          <dd>870ms</dd>
        </div>
        <div>
          <dt>HTTP 500 failures · full run</dt>
          <dd>1,250 (0.56%)</dd>
        </div>
      </dl>
      <p>
        A temporary slowdown exposed an issue I still need to diagnose. The system
        subsequently recovered while the sampled user count remained at 500.
      </p>
      <details className="test-detail">
        <summary>
          Test details &amp; investigation <span aria-hidden="true">+</span>
        </summary>
        <div className="disclosure-body">
          <dl className="test-observations">
            <div>
              <dt>Total requests</dt>
              <dd>222,965</dd>
            </div>
            <div>
              <dt>99th percentile · p99</dt>
              <dd>1,500ms</dd>
            </div>
            <div>
              <dt>Maximum recorded response</dt>
              <dd>11,286ms</dd>
            </div>
          </dl>
          <p>
            The report records all 1,250 HTTP 500 failures between 18:05:44 and 18:05:49
            UTC. Those timestamps describe when errors were recorded; they don’t establish
            the full duration or cause of the slowdown.
          </p>
          <p>
            My next step is to repeat the test with backend logs and resource
            measurements, and check transaction correctness separately from HTTP
            responses. One local run does not establish maximum capacity.
          </p>
        </div>
      </details>
      {/* The load explorer remains deferred until comparable results at
          50, 100 and 200 concurrent simulated users are supplied. */}
    </section>
  );
}
