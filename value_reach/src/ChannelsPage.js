import React from 'react';
import ChannelBrandLogo from './ChannelBranding';
import PageHeroVisual from './PageHeroVisual';

const channels = [
  { key: 'sms', name: 'Bulk SMS', color: 'var(--accent)', description: 'Tier-1 direct routes for mission-critical OTPs and mass promotional alerts.', coords: { top: '10%', left: '50%' } },
  { key: 'whatsapp', name: 'WhatsApp', color: '#25D366', description: 'Official Meta BSP integration for high-volume enterprise notification flows.', coords: { top: '30%', left: '80%' } },
  { key: 'voice', name: 'Bulk Voice', color: '#7C3AED', description: 'Automated global alerts, IVR, and SIP trunking for massive scale outreach.', coords: { top: '70%', left: '65%' } },
  { key: 'email', name: 'Bulk Email', color: '#F97316', description: 'High-reputation SMTP relay and API for transactional and marketing volumes.', coords: { top: '50%', left: '25%' } },
  { key: 'rcs', name: 'RCS Business', color: '#8B5CF6', description: 'Rich cards, verified branding, and actionable messaging for mass Android campaigns.', coords: { top: '20%', left: '25%' } },
];

const flows = [
  { title: 'Acquire & onboard', steps: ['WhatsApp welcome', 'SMS OTP', 'Email receipt'] },
  { title: 'Support & retain', steps: ['Bot triage', 'Agent takeover', 'Voice escalation'] },
  { title: 'Engage & upsell', steps: ['RCS promo', 'WhatsApp follow-up', 'Email summary'] },
];

const channelMetrics = [
  { label: '700+', detail: 'Carrier & OTT connections' },
  { label: '190+', detail: 'Countries covered' },
  { label: '24/7', detail: 'NOC & support' },
];

const channelCaseStudies = [
  { company: 'MercuryPay', summary: 'Cut CAC 32% by blending WhatsApp commerce + SMS offers.', logo: '/assets/logos1.png' },
  { company: 'Helios Bank', summary: 'Unified alerts across SMS, RCS, and Email with full audit trails.', logo: '/assets/logos2.png' },
];

function ChannelsPage() {
  return (
    <div className="page-content channels-page">
      <section className="page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">Channels</p>
          <h1>Coordinate every conversation from one mission control.</h1>
          <p>Orchestrate SMS, WhatsApp, Voice, RCS, and Email using a single API with shared routing, analytics, and governance.</p>
          <div className="page-hero-actions">
            <button className="btn-primary">View channel docs</button>
            <button className="btn-secondary">Get routing audit</button>
          </div>
        </div>
        <PageHeroVisual
          image="/assets/features.png"
          alt="Channel orchestration illustration"
          badge="All channels"
          statA={{ value: '5', label: 'core channels' }}
          statB={{ value: '190+', label: 'countries' }}
        />
      </section>

      <section className="channel-radar">
        <div className="radar-hero">
          <div className="radar-core">
            <div className="radar-lines" />
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="radar-node"
                style={{ borderColor: channel.color, top: channel.coords.top, left: channel.coords.left }}
              >
                <ChannelBrandLogo brandKey={channel.key} size={22} className="channel-node-logo" />
              </div>
            ))}
          </div>
        </div>
        <div className="radar-legend">
          {channels.map((channel) => (
            <div key={channel.name} className="radar-legend-card">
              <div className="legend-head">
                <span className="pill" style={{ background: channel.color }}>{channel.name}</span>
                <ChannelBrandLogo brandKey={channel.key} size={20} className="legend-brand-logo" />
              </div>
              <p>{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flow-map">
        {flows.map((flow) => (
          <div key={flow.title} className="flow-card">
            <h3>{flow.title}</h3>
            <div className="flow-steps">
              {flow.steps.map((step) => (
                <span key={step} className="flow-step">
                  {step}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="channels-observability">
        <div className="stack-card">
          <h2>Observability baked in</h2>
          <p>Latency, delivery, and spend overlays for every channel, with alerts that route to your NOC, Slack, or PagerDuty.</p>
          <div className="stack-stat">
            <strong>190+</strong>
            <span>Carrier routes</span>
          </div>
          <div className="stack-stat">
            <strong>&lt;50ms</strong>
            <span>Global latency</span>
          </div>
        </div>
        <div className="stack-chart">
          <div className="chart-line" />
          <div className="chart-line" />
          <div className="chart-line" />
        </div>
      </section>

      <section className="channel-metrics">
        {channelMetrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <strong>{metric.label}</strong>
            <span>{metric.detail}</span>
          </div>
        ))}
      </section>

      <section className="channel-cases">
        {channelCaseStudies.map((caseStudy) => (
          <article key={caseStudy.company} className="case-card">
            <strong>{caseStudy.company}</strong>
            <p>{caseStudy.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ChannelsPage;
