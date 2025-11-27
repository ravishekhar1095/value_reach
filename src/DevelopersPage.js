import React from 'react';

const sdkStacks = [
  { name: 'Node & TS', description: 'Typed client, retries, webhook signature helpers.', tag: 'npm i @valuereach/sdk' },
  { name: 'Python', description: 'Async + sync clients, Celery tasks, pagination helpers.', tag: 'pip install valuereach' },
  { name: 'Java & Kotlin', description: 'Micronaut/Spring starters with circuit breakers.', tag: 'Maven Central' },
  { name: 'Go & Rust', description: 'Context-aware clients with HMAC signing.', tag: 'go get valuereach' },
];

const developerStats = [
  { value: '8 mins', label: 'avg. time to first send' },
  { value: '130+', label: 'open-source recipes' },
  { value: '24/7', label: 'community + L2 support' },
];

const developerTracks = [
  { title: 'Build', bullets: ['SDKs + OpenAPI 3.0', 'CLI & Terraform modules', 'Local sandbox + mock server'] },
  { title: 'Operate', bullets: ['Realtime logs + tracing', 'Config-as-code with approvals', 'Usage + spend webhooks'] },
  { title: 'Extend', bullets: ['Channel plugins', 'Custom routing adapters', 'Marketplace connectors'] },
];

const resourceLinks = [
  { title: 'API Reference', description: 'Searchable docs with live snippets and schema diffs.', action: 'Open Docs' },
  { title: 'Status & Changelog', description: 'Subscribe to releases, deprecations, and incidents.', action: 'View Status' },
  { title: 'Blueprints', description: 'Terraform modules and diagrams for common launches.', action: 'Download Kit' },
];

function DevelopersPage() {
  return (
    <div className="page-content developers-page">
      <section className="page-hero">
        <p className="eyebrow">Built for builders</p>
        <h1>Ship omnichannel journeys with fewer lines of code.</h1>
        <p>Modern SDKs, typed contracts, and tooling that plugs into your CI/CD. Start in the sandbox, promote to production with approvals, and trace every message down to the carrier hop.</p>
        <div className="page-hero-actions">
          <button className="btn-primary">Open API reference</button>
          <button className="btn-secondary">Download SDKs</button>
        </div>
      </section>

      <section className="stat-grid">
        {developerStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="developer-workbench">
        <div className="sdk-panel">
          <h2>Code with confidence</h2>
          <p>Use our OpenAPI 3.0 spec to generate strongly typed clients or start from the officially maintained SDKs.</p>
          <div className="sdk-grid">
            {sdkStacks.map((sdk) => (
              <div key={sdk.name} className="sdk-card">
                <div className="sdk-heading">
                  <h3>{sdk.name}</h3>
                  <span>{sdk.tag}</span>
                </div>
                <p>{sdk.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="code-card">
          <div className="code-toolbar">
            <span className="code-lang">TypeScript</span>
            <span className="pill">journey.ts</span>
          </div>
          <pre className="code-snippet">
            <code>{`import { Client } from '@valuereach/sdk';

const client = new Client({ apiKey: process.env.VR_KEY });

await client.messages.send({
  to: ['+14155551234'],
  channel: ['sms', 'whatsapp'],
  template: 'otp_login',
  data: { code: '483921', ttl: '2 minutes' },
  preferences: { failoverWindowSeconds: 60 }
});

client.webhooks.on('delivery.received', event => {
  console.log(\`DLR status: \${event.status}\`);
});`}</code>
          </pre>
        </div>
      </section>

      <section className="developer-tracks">
        {developerTracks.map((track) => (
          <article key={track.title} className="track-card">
            <h3>{track.title}</h3>
            <ul>
              {track.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resource-grid">
        {resourceLinks.map((resource) => (
          <div key={resource.title} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <button className="btn-secondary small">{resource.action}</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DevelopersPage;
