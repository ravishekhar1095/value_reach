import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ContactModal from './ContactModal';
import ChannelBrandLogo from './ChannelBranding';
import TestimonialCarousel from './components/ui/profile-card-testimonial-carousel';
import { GlobeCdn } from './components/ui/cobe-globe-cdn';

const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return { ref, count };
};

function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const heroHighlights = ['Carrier failover', 'AI-assisted routing', 'Audit-ready logs'];
  const trustStats = [
    { value: '12K+', label: 'Teams orchestrating journeys', caption: 'Across 90+ countries' },
    { value: '4.9/5', label: 'Average satisfaction on G2', caption: 'Based on verified buyers' },
    { value: '35%', label: 'Average cost savings year one', caption: 'Consolidated tooling' },
  ];
  const customerLogos = [
    { name: 'MercuryPay', industry: 'Fintech', metric: '−32% CAC', summary: 'Smarter OTP and onboarding journeys.', accent: 'var(--accent)' },
    { name: 'OrbitX', industry: 'Logistics', metric: '3x faster onboarding', summary: 'Fewer handoffs across customer touchpoints.', accent: '#22c55e' },
    { name: 'Helios Bank', industry: 'Financial Services', metric: '99.995% uptime', summary: 'Reliable alerts across critical service flows.', accent: '#f97316' },
    { name: 'Latitude Air', industry: 'Aviation', metric: '+48 NPS', summary: 'Travel updates that feel responsive and calm.', accent: '#8b5cf6' },
    { name: 'Northwind', industry: 'Retail', metric: 'Unified 6 channels', summary: 'One view across SMS, WhatsApp, RCS, email, and voice.', accent: '#ec4899' },
    { name: 'Nova Mobile', industry: 'Telecom', metric: 'Millions of users', summary: 'Scaled customer notifications without friction.', accent: '#06b6d4' },
  ];
  const capabilityTiles = [
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'SOC2 Type II certified, GDPR compliant, and end-to-end encrypted.',
    },
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description: 'Monitor delivery rates and engagement in real time.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Direct carrier connections in 190+ countries with local numbers.',
    },
  ];
  const workflowTimeline = [
    {
      title: 'Connect',
      description: 'Unify CRM, data warehouses, and APIs in minutes with pre-built connectors.',
      value: '8 min',
      label: 'Avg. setup',
    },
    {
      title: 'Automate',
      description: 'Design omnichannel logic, failover rules, and AI content from one canvas.',
      value: '∞',
      label: 'Channel combos',
    },
    {
      title: 'Optimize',
      description: 'Observe QoS, spend, and sentiment in live dashboards with automated insights.',
      value: '99.99%',
      label: 'Uptime SLA',
    },
  ];
  const channelSurfaces = [
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'sms', label: 'SMS' },
    { key: 'rcs', label: 'RCS' },
    { key: 'email', label: 'Email' },
    { key: 'voice', label: 'Voice' },
  ];

  return (
    <div className="home-page-light">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content-left">
            <div className="badge-pill hero-eyebrow">🚀 The Future of CPaaS</div>
            <h1 className="hero-title">
              One control plane for
              <br />
              <span className="home-text-reach">Reach</span>{' '}
              <span className="home-text-connect">Connect</span>{' '}
              <span className="home-text-interact">Interact</span>
            </h1>
            <p className="hero-subtitle">
              Orchestrate SMS, WhatsApp, Voice, Email, and RCS from a single, intelligent API.
              Built for teams that want scale, clarity, and a calmer operating model.
            </p>
            <div className="hero-cta-group">
              <button className="btn-primary" onClick={() => setShowContact(true)}>
                Start Free Trial
              </button>
              <button className="btn-secondary">View Documentation</button>
            </div>
            <ul className="hero-feature-list">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <strong>99.99%</strong>
                <span>Uptime SLA</span>
              </div>
              <div className="hero-stat">
                <strong>&lt;50ms</strong>
                <span>Latency</span>
              </div>
              <div className="hero-stat">
                <strong>190+</strong>
                <span>Countries</span>
              </div>
            </div>
          </div>
          <div className="hero-visual-right hero-cdn-panel">
            <div className="hero-cdn-label">Real-time request flow</div>
            <GlobeCdn className="hero-cdn-globe" />
            <div className="hero-cdn-metrics">
              <div>
                <strong>10</strong>
                <span>Edge regions</span>
              </div>
              <div>
                <strong>320k</strong>
                <span>Req/min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-top">
          <div className="trusted-intro">
            <p className="eyebrow">Trusted by Innovative Teams Worldwide</p>
            <h2 className="gradient-text">Leading brands rely on a calmer, faster way to operate global messaging.</h2>
            <p className="subtitle">
              Layer reliable delivery with compliance-grade guardrails and get total visibility into every interaction, from send to
              resolution.
            </p>
            <div className="trust-pill-row">
              {['ISO 27001', 'SOC 2 Type II', 'GDPR Ready', 'HIPAA Controls'].map((badge) => (
                <span className="trust-pill" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <div className="trust-stats">
              {trustStats.map((stat) => (
                <div key={stat.label} className="trust-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <small>{stat.caption}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="case-study-card">
            <div className="case-study-header">
              <img src={`${process.env.PUBLIC_URL || ''}/assets/testimonial-aaliyah.png`} alt="Aaliyah Bose" className="testimonial-avatar" />
              <div className="case-study-meta-top">
                <span className="case-study-badge">Case Study · Helios Bank</span>
                <div className="quote-meta">
                  <strong>Aaliyah Bose</strong>
                  <span>VP Customer Engagement</span>
                </div>
              </div>
            </div>
            <p className="case-study-quote">
              “Within weeks we unified SMS, WhatsApp, and push on one API. Delivery got faster, reporting went live, and our CAC
              dropped double digits.”
            </p>
            <div className="case-study-metrics">
              <div>
                <strong>28%</strong>
                <span>Lower operating cost</span>
              </div>
              <div>
                <strong>3x</strong>
                <span>Faster launch cadence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-ecosystem">
          <div className="trust-ecosystem-head">
            <p className="eyebrow">Customer outcomes</p>
            <h3>Proof that the platform is built to compound results.</h3>
            <p className="subtitle">
              These snapshots show how customers use the platform to cut costs, improve reliability, and simplify operations.
            </p>
          </div>

          <div className="customer-story-grid">
            {customerLogos.map((logo, index) => (
              <article
                key={logo.name}
                className={`customer-story-card ${index === 0 ? 'featured' : ''}`}
                style={{ '--card-accent': logo.accent }}
              >
                <div className="customer-story-top">
                  <div>
                    <p className="logo-name">{logo.name}</p>
                    <span className="logo-industry">{logo.industry}</span>
                  </div>
                  <span className="logo-metric">{logo.metric}</span>
                </div>
                <p className="customer-story-summary">{logo.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="features-bento">
        <div className="feature-hero-card">
          <div>
            <p className="eyebrow">Scale with Confidence</p>
            <h2>Omnichannel mastery without the sprawl.</h2>
            <p>
              Enterprise-grade features, seamless integrations, and a unified API that grows with your business. Design adaptive
              journeys, secure every touchpoint, and observe real-time impact from one mission control.
            </p>
            <div className="channel-chip-row">
              {channelSurfaces.map((channel) => (
                <span key={channel.label} className="channel-chip channel-chip-logo">
                  <ChannelBrandLogo brandKey={channel.key} size={18} className="channel-chip-icon" />
                  <span>{channel.label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hero-stat-panel">
            <div className="stat-display">
              <StatCounter end={10} suffix="B+" label="Messages/Year" />
            </div>
            <div className="stat-display">
              <span className="stat-number">60+</span>
              <span className="stat-label">Native integrations</span>
            </div>
            <div className="stat-display">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Global NOC</span>
            </div>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityTiles.map((capability) => (
            <div key={capability.title} className="capability-card">
              <div className="icon-box">{capability.icon}</div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
        <div className="workflow-timeline">
          {workflowTimeline.map((step) => (
            <div key={step.title} className="workflow-card">
              <p className="eyebrow">{step.title}</p>
              <h3>{step.description}</h3>
              <div className="timeline-stat">
                <strong>{step.value}</strong>
                <span>{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-section-head">
          <p className="eyebrow">Customer voices</p>
          <h2>Teams across India trust the platform to keep comms steady.</h2>
          <p className="subtitle">
            Real stories from Indian product, engineering, and data leaders using one system for outreach, reliability, and visibility.
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to transform your communication?</h2>
          <p>Join thousands of developers building the future of engagement.</p>
          <button className="btn-primary large" onClick={() => setShowContact(true)}>
            Get Started Now
          </button>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}

function StatCounter({ end, suffix, label }) {
  const { ref, count } = useCountUp(end);
  return (
    <div ref={ref} className="stat-counter">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default HomePage;
