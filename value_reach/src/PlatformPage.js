import React, { useState } from 'react';
import ContactModal from './ContactModal';
import PageHeroVisual from './PageHeroVisual';

const platformStats = [
  { value: '10B+', label: 'messages / month' },
  { value: '700+', label: 'direct carrier links' },
  { value: 'Tier-1', label: 'network status' },
];

const apiChannels = ['Bulk SMS', 'WhatsApp', 'Voice', 'RCS', 'Email', 'Viber'];

const platformModules = [
  {
    label: 'Connectivity',
    title: 'Tier-1 Global Gateway',
    description: 'Bypass aggregators with direct carrier-grade connectivity that ensures zero-hop delivery and lowest latency.',
    bullets: ['700+ direct carrier binds', 'Local termination in 190+ countries', 'Custom TPS throttling control'],
  },
  {
    label: 'Throughput',
    title: 'Engineered for Bulk Scale',
    description: 'Our cloud-native gateway handles massive bursts and promotional spikes without dropping a single frame.',
    bullets: ['Elastic capacity scaling', 'Multi-region delivery nodes', 'Intelligent traffic balancing'],
  },
  {
    label: 'API',
    title: 'Programmable Bulk Core',
    description: 'One REST payload for millions of messages. Simple, robust, and documented for rapid high-volume integration.',
    bullets: ['OpenAPI 3.0 specs', 'Webhooks with HMAC signing', 'Sandbox testing environments'],
  },
  {
    label: 'Trust',
    title: 'Governance & Compliance',
    description: 'Navigating DLT, 10DLC, and GDPR is built into our core, so your bulk campaigns stay safe and deliverable.',
    bullets: ['Managed sender registration', 'Automated opt-out handling', 'ISO 27001 & SOC2 infrastructure'],
  },
];

const reliabilityHighlights = [
  {
    title: 'Direct carrier backbone',
    description: 'We operate our own Tier-1 infrastructure, giving you full control over routing, quality, and cost at scale.',
    metrics: [
      { label: 'Direct routes', value: '700+' },
      { label: 'Network POPs', value: '18' },
    ],
  },
  {
    title: 'Bulk security suite',
    description: 'Advanced fraud protection and heuristic-based pumping filters protect your high-volume budget daily.',
    metrics: [
      { label: 'Compliance', value: 'DLT · GDPR · HIPAA' },
    ],
  },
];

const capabilityHighlights = [
  { title: 'Dynamic route optimization', description: 'ML-powered pathfinding constantly switches to the most stable and cost-effective route for every bulk send.' },
  { title: 'Global 10DLC & Shortcodes', description: 'Immediate provisioning of dedicated long codes, shortcodes, and toll-free numbers across all major regions.' },
  { title: 'Lifecycle bulk automation', description: 'Trigger massive-scale event-driven campaigns while respecting regional quiet hours and consent policies.' },
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
        <section className="page-hero page-hero-split">
          <div className="page-hero-copy">
            <p className="eyebrow">Smart Workflow Platform</p>
            <h1>All channels, workflow intelligence, and observability in one stack.</h1>
            <p>
              Replace fragmented vendors with a single API, orchestration canvas, and telemetry layer.
              Design smart workflows, ship better campaigns, and trust the infrastructure that already
              moves billions of messages every month.
            </p>
            <div className="page-hero-actions">
              <button className="btn-primary" onClick={() => setShowContact(true)}>
                See platform demo
              </button>
              <button className="btn-secondary">Explore API reference</button>
            </div>
          </div>
          <PageHeroVisual
            image="/assets/hero.png"
            alt="Platform dashboard illustration"
            badge="Platform overview"
            statA={{ value: '10B+', label: 'messages / month' }}
            statB={{ value: '99.99%', label: 'uptime SLA' }}
          />
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
