import React from 'react';

const automationLayers = [
  {
    title: 'Journey Canvas',
    description: 'Drag, branch, and simulate flows with reusable modules, localization kits, and approval checkpoints.',
    tag: 'Visual builder',
  },
  {
    title: 'Decision Engine',
    description: 'Event-driven rules listen to signals, score audiences, and select the next-best channel automatically.',
    tag: 'Intelligence',
  },
  {
    title: 'Governance Mesh',
    description: 'Maker-checker workflows, quiet hours, and consent enforcement travel with every journey.',
    tag: 'Compliance',
  },
];

const automationTimeline = [
  { label: 'Listen', detail: 'Ingest webhooks, CRM events, and data warehouse syncs.' },
  { label: 'Decide', detail: 'Run experiments, AI copy tests, and channel scoring.' },
  { label: 'Deliver', detail: 'Trigger SMS, WhatsApp, Voice, Email, or Push with smart retries.' },
  { label: 'Observe', detail: 'Stream delivery, latency, and spend into dashboards or Snowflake.' },
];

const automationMetrics = [
  { value: '480', label: 'templates approved / week' },
  { value: '14d', label: 'average migration time' },
  { value: '35%', label: 'conversion lift with AI copy' },
];

const automationPlaybooks = [
  {
    title: 'Product & Growth',
    bullets: ['Launch onboarding journeys in under a week', 'Trigger experiments from feature flags', 'Score audiences by cohort health'],
  },
  {
    title: 'Ops & Support',
    bullets: ['Automate escalations across WhatsApp + Voice', 'Attach audit-ready logs to every change', 'Mirror incident runbooks with alerts'],
  },
  {
    title: 'Regulated Industries',
    bullets: ['Multi-level approvals with maker-checker', 'Regional consent + quiet hour enforcement', 'Full traceability for every rendition'],
  },
];

function AutomationPage() {
  return (
    <div className="page-content automation-page">
      <section className="page-hero">
        <p className="eyebrow">Automation</p>
        <h1>Blueprint journeys, enforce guardrails, and launch faster.</h1>
        <p>Enable marketing, product, and ops to collaborate in one canvas with approvals, testing, and governance built in.</p>
        <div className="page-hero-actions">
          <button className="btn-primary">Book a canvas demo</button>
          <button className="btn-secondary">Download playbooks</button>
        </div>
      </section>

      <section className="automation-layers">
        {automationLayers.map((layer) => (
          <article key={layer.title} className="automation-card">
            <span className="pill">{layer.tag}</span>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
          </article>
        ))}
      </section>

      <section className="automation-canvas">
        <div className="automation-canvas-info">
          <h2>Command center for every campaign</h2>
          <p>Simulate flows before launch, run team approvals, and connect data sources without leaving the canvas.</p>
          <ul className="list">
            <li>Reusable modules for OTP, lifecycle nudges, and customer care</li>
            <li>Pre-flight DLT and template validation with auto submissions</li>
            <li>Version history with instant rollback and diffing</li>
          </ul>
        </div>
        <div className="automation-canvas-board">
          <div className="canvas-node success">OTP Approved</div>
          <div className="canvas-node warning">Quiet Hours Flagged</div>
          <div className="canvas-node info">WhatsApp Promo Ready</div>
          <div className="canvas-connector" />
          <div className="canvas-status">
            <strong>Live runs</strong>
            <span>127 journeys · 3 regions</span>
          </div>
        </div>
      </section>

      <section className="automation-flow">
        {automationTimeline.map((step, index) => (
          <div key={step.label} className="flow-step-card">
            <span className="pill">{String(index + 1).padStart(2, '0')}</span>
            <h4>{step.label}</h4>
            <p>{step.detail}</p>
          </div>
        ))}
      </section>

      <section className="automation-metrics">
        {automationMetrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="automation-playbooks">
        {automationPlaybooks.map((playbook) => (
          <article key={playbook.title} className="playbook-card">
            <h3>{playbook.title}</h3>
            <ul>
              {playbook.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

export default AutomationPage;
