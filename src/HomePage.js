import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ContactModal from './ContactModal';

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
  const trustStats = [
    { value: '12K+', label: 'Teams orchestrating journeys', caption: 'Across 90+ countries' },
    { value: '4.9/5', label: 'Average satisfaction on G2', caption: 'Based on verified buyers' },
    { value: '35%', label: 'Average cost savings year one', caption: 'Consolidated tooling' },
  ];
  const customerLogos = [
    { name: 'MercuryPay', industry: 'Fintech', metric: '−32% CAC' },
    { name: 'OrbitX', industry: 'Logistics', metric: '3x faster onboarding' },
    { name: 'Helios Bank', industry: 'Financial Services', metric: '99.995% uptime' },
    { name: 'Latitude Air', industry: 'Aviation', metric: '+48 NPS' },
    { name: 'Northwind', industry: 'Retail', metric: 'Unified 6 channels' },
    { name: 'Nova Mobile', industry: 'Telecom', metric: 'Millions of users' },
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

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content-left">
            <div className="badge-pill">🚀 The Future of CPaaS</div>
            <h1 className="hero-title">
              <span className="home-text-reach">Reach</span> <br />
              <span className="home-text-connect">Connect</span>
              <br /><span className="home-text-interact">Interact</span>
            </h1>
            <p className="hero-subtitle">
              Orchestrate SMS, WhatsApp, Voice, and Email journeys with a single, powerful API.
              Enterprise-grade reliability meets next-gen intelligence.
            </p>
            <div className="hero-cta-group">
              <button className="btn-primary" onClick={() => setShowContact(true)}>
                Start Free Trial
              </button>
              <button className="btn-secondary">View Documentation</button>
            </div>
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
          <div className="hero-visual-right">
            <div className="hero-stack-panel">
              <div className="hero-stack-cone">
                <img src="/assets/hero.png" alt="Global Connectivity" />
              </div>
              <div className="hero-stack-caption">
                <h4>Live traffic overview</h4>
                <p>Routing via 700+ carrier links across 190+ countries.</p>
              </div>
              <div className="hero-stack-orb">99.99%</div>
            </div>
            <div className="floating-card card-1">
              <span>Message Sent</span>
              <span className="status-dot success"></span>
            </div>
            <div className="floating-card card-2">
              <span>API Connected</span>
              <span className="status-dot active"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-top">
          <div className="trusted-intro">
            <p className="eyebrow">Trusted by Innovative Teams Worldwide</p>
            <h2 className="gradient-text">Leading brands rely on our secure, high-performance CPaaS for global reach.</h2>
            <p className="subtitle">
              Layer reliable delivery with compliance-grade guardrails and get total visibility into every interaction.
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
            <span className="case-study-badge">Case Study · Helios Bank</span>
            <p className="case-study-quote">
              “Within weeks we unified SMS, WhatsApp, and push on one API. Delivery is faster, reporting is live, and our CAC dropped
              double digits.”
            </p>
            <div className="quote-meta">
              <strong>Aaliyah Bose</strong>
              <span>VP Customer Engagement</span>
            </div>
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
          {customerLogos.map((logo) => (
            <div key={logo.name} className="logo-card">
              <div>
                <p className="logo-name">{logo.name}</p>
                <span className="logo-industry">{logo.industry}</span>
              </div>
              <span className="logo-metric">{logo.metric}</span>
            </div>
          ))}
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
              {['SMS', 'WhatsApp', 'Voice', 'Email', 'Push'].map((channel) => (
                <span key={channel} className="channel-chip">
                  {channel}
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
    </>
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
