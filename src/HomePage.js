import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import ChannelBrandLogo from './ChannelBranding';
import TestimonialCarousel from './components/ui/profile-card-testimonial-carousel';
import { GlobeCdn } from './components/ui/cobe-globe-cdn';
import SparksCarousel from './components/ui/sparks-carousel';

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

function ScrollReveal({ children, className = '', delay = 0, threshold = 0.18 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.section
      ref={ref}
      className={`${className} scroll-reveal`}
      initial={{ opacity: 0, y: 26, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 26, filter: 'blur(4px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}

function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const heroHighlights = ['Carrier failover', 'AI-assisted routing', 'Audit-ready logs'];
  const trustStats = [
    { value: '12K+', label: 'Teams orchestrating journeys', caption: 'Across 90+ countries' },
    { value: '4.9/5', label: 'Average satisfaction on G2', caption: 'Based on verified buyers' },
    { value: '35%', label: 'Average cost savings year one', caption: 'Consolidated tooling' },
  ];
  const customerSparks = [
    {
      id: 'mercurypay',
      imageSrc:
        'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=900&q=80',
      title: 'MercuryPay - smarter OTP and onboarding journeys',
      count: 32,
      countLabel: '% CAC reduction',
    },
    {
      id: 'orbitx',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      title: 'OrbitX - fewer handoffs across customer touchpoints',
      count: 3,
      countLabel: 'x faster onboarding',
    },
    {
      id: 'helios-bank',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      title: 'Helios Bank - reliable alerts across critical service flows',
      count: 99.995,
      countLabel: '% uptime',
    },
    {
      id: 'latitude-air',
      imageSrc:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      title: 'Latitude Air - travel updates that feel responsive and calm',
      count: 48,
      countLabel: 'NPS',
    },
    {
      id: 'northwind',
      imageSrc:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      title: 'Northwind - one view across SMS, WhatsApp, RCS, email, and voice',
      count: 6,
      countLabel: 'channels unified',
    },
    {
      id: 'nova-mobile',
      imageSrc:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
      title: 'Nova Mobile - scaled customer notifications without friction',
      count: 12,
      countLabel: 'M users served',
    },
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

      <ScrollReveal className="trusted-section" delay={0.05}>
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
        </div>

        <div className="trust-ecosystem">
          <SparksCarousel
            title="Proof that the platform is built to compound results."
            subtitle="These snapshots show how customers use the platform to cut costs, improve reliability, and simplify operations."
            items={customerSparks}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal className="features-bento" delay={0.08}>
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
      </ScrollReveal>

      <ScrollReveal className="testimonial-section" delay={0.1}>
        <div className="testimonial-section-head">
          <p className="eyebrow">Customer voices</p>
          <h2>Teams across India trust the platform to keep comms steady.</h2>
          <p className="subtitle">
            Real stories from Indian product, engineering, and data leaders using one system for outreach, reliability, and visibility.
          </p>
        </div>
        <TestimonialCarousel />
      </ScrollReveal>

      <ScrollReveal className="cta-section" delay={0.12}>
        <div className="cta-card">
          <h2>Ready to transform your communication?</h2>
          <p>Join thousands of developers building the future of engagement.</p>
          <button className="btn-primary large" onClick={() => setShowContact(true)}>
            Get Started Now
          </button>
        </div>
      </ScrollReveal>

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
