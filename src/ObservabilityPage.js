import React from 'react';

const observabilityLayers = [
  { title: 'Signals', description: 'Ingest delivery receipts, carrier replies, errors, and spend in seconds.', tag: 'Ingest' },
  { title: 'Detection', description: 'Machine-learning models classify anomalies and route alerts with context.', tag: 'Detect' },
  { title: 'Action', description: 'Trigger playbooks, reroute traffic, or notify stakeholders automatically.', tag: 'Act' },
];

const observabilityStreams = [
  { name: 'Latency Watch', detail: 'P95 and P99 views per operator with regional comparisons.' },
  { name: 'Delivery Lens', detail: 'DLR and conversion overlays down to sender ID and template.' },
  { name: 'Spend Radar', detail: 'Cost per channel with variance alerts and budget caps.' },
];

const observabilityStats = [
  { value: '120+', label: 'Signals monitored' },
  { value: '−55%', label: 'MTTR reduction' },
  { value: '−40%', label: 'Alert noise drop' },
];

function ObservabilityPage() {
  return (
    <div className="page-content observability-page">
      <section className="page-hero">
        <p className="eyebrow">Observability</p>
        <h1>Every message traced, alertable, and export-ready.</h1>
        <p>See message health like a NOC: delivery rates by operator, error taxonomies, fraud signals, and SLA dashboards that mirror your runbooks.</p>
      </section>

      <section className="observability-grid">
        {observabilityLayers.map((layer) => (
          <article key={layer.title} className="observability-card">
            <span className="pill">{layer.tag}</span>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
          </article>
        ))}
      </section>

      <section className="observability-stack">
        <div className="stack-visual">
          <div className="stack-ring outer" />
          <div className="stack-ring middle" />
          <div className="stack-ring inner">
            <span>Live Feed</span>
            <strong>2.1M</strong>
            <span>events / min</span>
          </div>
        </div>
        <div className="stack-details">
          <h2>Monitor once, broadcast everywhere</h2>
          <p>Latency, delivery, cost, fraud, and customer impact flow into dashboards, alerts, webhooks, and your warehouse.</p>
          <ul className="list">
            <li>PagerDuty, Slack, Teams, and webhook destinations</li>
            <li>Snowflake, BigQuery, and Redshift streaming connectors</li>
            <li>Custom error taxonomies mapped to carrier responses</li>
          </ul>
        </div>
      </section>

      <section className="observability-streams">
        {observabilityStreams.map((stream) => (
          <div key={stream.name} className="stream-card">
            <h4>{stream.name}</h4>
            <p>{stream.detail}</p>
          </div>
        ))}
      </section>

      <section className="observability-stats">
        {observabilityStats.map((stat) => (
          <div key={stat.label} className="metric-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ObservabilityPage;
