import React, { useState } from 'react';
import ContactModal from './ContactModal';

const platformStats = [
  { value: '10B+', label: 'messages / month' },
  { value: '700+', label: 'direct carrier links' },
  { value: '99.99%', label: 'uptime SLA' },
];

const apiChannels = ['SMS', 'WhatsApp', 'Voice', 'RCS', 'Email', 'Push'];

const platformModules = [
  {
    label: 'Journeys',
    title: 'Visual orchestration canvas',
    description: 'Drag, drop, and branch across channels with approvals, localization, and throttling baked in.',
    bullets: ['Omnichannel rules & quiet hours', 'Maker-checker governance', 'Reusable kits & journeys'],
  },
  {
    label: 'Intelligence',
    title: 'Predictive engagement & AI content',
    description: 'Smart channel selection, AI copy testing, and anomaly detection that continuously optimizes performance.',
    bullets: ['Intent-aware fallbacks', 'Copy studio with guardrails', 'Fraud & spam controls'],
  },
  {
    label: 'Platform',
    title: 'Unified API + SDK layer',
    description: 'Consistent REST + Webhook contracts, sandbox environments, and typed SDKs for every stack.',
    bullets: ['OpenAPI 3.0 spec', 'Webhooks with signatures', 'CLI & Terraform providers'],
  },
  {
    label: 'Observability',
    title: 'Full-stack telemetry',
    description: 'Delivery, latency, spend, and anomaly dashboards with long-term retention and exports.',
    bullets: ['Live DLR heatmaps', 'Noise-tuned alerting', 'Snowflake/Redshift streaming'],
  },
];

const reliabilityHighlights = [
  {
    title: 'Global mesh network',
    description: '65+ direct carrier partnerships, smart routing, and sub-second failover to keep messages flowing.',
    metrics: [
      { label: 'Active routes', value: '2,400+' },
      { label: 'Edge POPs', value: '18' },
    ],
  },
  {
    title: 'Security & compliance',
    description: 'Zero-trust architecture with encryption everywhere, fine-grained roles, and audit-ready logging.',
    metrics: [
      { label: 'Certifications', value: 'SOC 2 · ISO 27001 · GDPR · HIPAA' },
    ],
  },
];

const capabilityHighlights = [
  { title: 'Smart retries & cost controls', description: 'ML-powered retries learn from geography, price, and carrier behavior to hit SLA and budget targets.' },
  { title: 'Dedicated onboarding pods', description: 'Sender verification, number porting, and routing audits handled by a squad that ships in weeks—not months.' },
  { title: 'Lifecycle automation', description: 'Event-driven APIs trigger the next-best action while respecting regional consent and quiet hour policies.' },
];

const codeSnippet = `POST https://api.valuereach.com/v1/messages
{
  "to": ["+14155551234"],
  "channels": ["sms", "whatsapp"],
  "template": "otp_login",
  "data": { "code": "483921", "ttl": "2m" },
  "preferences": { "failoverWindowSeconds": 60 }
}`;

function PlatformPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="page-content platform-page">
        <section className="page-hero">
          <p className="eyebrow">Unified CPaaS Platform</p>
          <h1>All channels, intelligence, and observability in one stack.</h1>
          <p>
            Replace fragmented vendors with a single API, orchestration canvas, and telemetry layer. Design journeys, ship smarter campaigns, and trust the infrastructure that
            already moves billions of messages every month.
          </p>
          <div className="page-hero-actions">
            <button className="btn-primary" onClick={() => setShowContact(true)}>
              See platform demo
            </button>
            <button className="btn-secondary">Explore API reference</button>
          </div>
        </section>

        <section className="stat-grid">
          {platformStats.map(stat => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="split-panel developer-panel">
          <div className="glow-card">
            <h2>One API, every channel</h2>
            <p>Use one consistent payload and auth model for SMS, WhatsApp, Voice, RCS, Email, and Push.</p>
            <div className="channel-chip-row" style={{ margin: '16px 0' }}>
              {apiChannels.map(channel => (
                <span key={channel} className="channel-chip">
                  {channel}
                </span>
              ))}
            </div>
            <ul className="list">
              <li>Carrier-direct routes in 190+ countries with smart failover</li>
              <li>Bring-your-own numbers and sender IDs with managed onboarding</li>
              <li>Consistent delivery receipts, metadata, and error taxonomies</li>
            </ul>
          </div>
          <div className="code-card">
            <div className="code-toolbar">
              <span className="code-lang">REST</span>
              <span className="pill">messages.json</span>
            </div>
            <pre className="code-snippet">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </section>

        <section className="channel-matrix">
          {platformModules.map(module => (
            <article key={module.title} className="channel-card">
              <div className="channel-card-header">
                <span className="pill">{module.label}</span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <ul>
                {module.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="split-panel">
          {reliabilityHighlights.map(highlight => (
            <div key={highlight.title} className="glow-card">
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
              <div className="stat-grid compact" style={{ marginTop: 16 }}>
                {highlight.metrics.map(metric => (
                  <div key={metric.label} className="stat-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="info-grid">
          {capabilityHighlights.map(capability => (
            <article key={capability.title} className="info-card">
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </section>
      </div>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to unify channels?</h2>
          <p>Get instant API access with our free tier and scale with a routing plan engineered for your volumes.</p>
          <div className="page-hero-actions" style={{ marginTop: 32 }}>
            <button className="btn-primary" onClick={() => setShowContact(true)}>
              Create free account
            </button>
            <button className="btn-secondary">Talk to sales</button>
          </div>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}

export default PlatformPage;
