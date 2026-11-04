export function VaultGuardTest() {
  return <section className="load-test" aria-labelledby="load-test-title">
    <span className="eyebrow">Local load test · measured results</span>
    <h3 id="load-test-title">Putting the transaction endpoint under pressure.</h3>
    <p>I load tested VaultGuard’s transaction endpoint locally with 500 concurrent simulated users over 7 minutes 29 seconds. The run recorded 222,965 requests and averaged 495.72 requests per second. Median response time was 420ms and p95 was 870ms. There were 1,250 HTTP 500 failures (0.56%), concentrated in one brief burst; the backend subsequently recovered while the test remained at 500 simulated users.</p>
    <div className="test-columns">
      <div><h4>Test setup</h4><dl>
        <div><dt>Backend target</dt><dd><code>http://localhost:8080</code></dd></div>
        <div><dt>Concurrent simulated users</dt><dd>500</dd></div>
        <div><dt>Configured spawn rate</dt><dd>50 simulated users / second</dd></div>
        <div><dt>Duration</dt><dd>7 minutes 29 seconds</dd></div>
      </dl><p>The spawn rate controls how quickly simulated users join the test. It is distinct from throughput: the requests recorded per second.</p></div>
      <div><h4>Recorded results</h4><dl>
        <div><dt>Total requests</dt><dd>222,965</dd></div>
        <div><dt>Average throughput</dt><dd>495.72 requests / second</dd></div>
        <div><dt>HTTP 500 failures</dt><dd>1,250 (0.56%)</dd></div>
        <div><dt>Average response time</dt><dd>473.55ms</dd></div>
        <div><dt>Median / p50</dt><dd>420ms</dd></div>
        <div><dt>p95</dt><dd>870ms</dd></div>
        <div><dt>p99</dt><dd>1,500ms</dd></div>
        <div><dt>Maximum response time</dt><dd>11,286ms</dd></div>
      </dl></div>
    </div>
    <p className="test-endpoint">Endpoint: <code>POST /api/v1/process/fraudDetection/transaction</code></p>
    <p>In plain language: half the recorded responses took about 420ms or less, 95% took about 870ms or less, and 99% took about 1.5 seconds or less. The slowest recorded response took about 11.3 seconds.</p>
    <h4>What this exercise demonstrated</h4>
    <ul>
      <li>Exercised the local transaction endpoint with 500 concurrent simulated users, recording 222,965 requests over a 7-minute-29-second run.</li>
      <li>Measured average throughput of 495.72 requests per second, with a 420ms median and 870ms p95 response time.</li>
      <li>Identified a concentrated burst of 1,250 HTTP 500 failures (0.56%) and observed subsequent recovery while the test remained at 500 simulated users.</li>
    </ul>
    <h4>The failure burst, and what I’d check next</h4>
    <p>All recorded HTTP 500 failures occurred between 18:05:44 and 18:05:49. The HTML report contains no backend stack traces, so the root cause is not established. My next step is to repeat the test with timestamped backend logs and resource measurements, investigate the burst, and add checks for transaction correctness alongside HTTP responses.</p>
    <p className="test-limits">This is evidence from one local test, not a maximum-capacity measurement or an SLA guarantee. HTTP response results alone do not verify transaction correctness. Hardware specifications and the test tool were not supplied, so they are not assumed here.</p>
  </section>;
}
