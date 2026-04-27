import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import './ChannelPages.css';

function ChannelPageTemplate({ 
  theme = 'theme-blue', 
  badge, 
  title, 
  subtitle, 
  heroImage, 
  overview,
  stats = [], 
  features = [], 
  useCases = [],
  coverage = [],
  code, 
  codeFilename,
  regionStats = []
}) {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={`channel-page ${theme}`}>
      {/* Hero Section */}
      <section className="channel-hero">
        <div className="channel-hero-content">
          <div className="hero-text">
            <span className="badge-pill">{badge}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setShowContact(true)}>Get Started</button>
              <button className="btn-secondary">API Docs</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-wrapper">
              <img src={heroImage} alt={title} className="hero-main-img" />
              <div className="floating-badge top">
                <span className="status-dot success"></span>
                <span>Active Routing</span>
              </div>
              <div className="floating-badge bottom">
                <span>99.99% Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="channel-stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="channel-features">
        <div className="features-grid">
          {features.map((feature, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {overview && (
        <section className="channel-overview">
          <div className="overview-card">
            <p className="eyebrow">Overview</p>
            <h2>What this channel is best at</h2>
            <p>{overview}</p>
          </div>
        </section>
      )}

      {useCases.length > 0 && (
        <section className="channel-use-cases">
          <div className="section-heading">
            <p className="eyebrow">Use cases</p>
            <h2>Where teams use it</h2>
          </div>
          <div className="use-case-grid">
            {useCases.map((item, i) => (
              <article className="use-case-card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {coverage.length > 0 && (
        <section className="channel-coverage">
          <div className="section-heading">
            <p className="eyebrow">Coverage</p>
            <h2>Operational snapshot</h2>
          </div>
          <div className="coverage-grid">
            {coverage.map((item, i) => (
              <div className="coverage-card" key={i}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Integration */}
      <section className="integration-section">
        <div className="integration-content">
          <div className="integration-text">
            <h2>Built for Developers</h2>
            <p>Direct Tier-1 connectivity through a clean, unified API. Scale your volume without increasing complexity.</p>
            <ul className="integration-list">
              <li>Low Latency Endpoints</li>
              <li>Global Webhooks</li>
              <li>Native SDKs</li>
              <li>Sandbox included</li>
            </ul>
            <Link to="/developers" className="btn-secondary small">Explore Docs →</Link>
          </div>
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots"><span></span><span></span><span></span></div>
              <span className="code-filename">{codeFilename}</span>
            </div>
            <pre><code>{code}</code></pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sms-cta">
        <div className="cta-box">
          <div className="cta-copy">
            <p className="eyebrow">Ready when you are</p>
            <h2>Move to production faster.</h2>
            <p>We’ll help your team launch with stable routing, simple pricing, and support that stays close after kickoff.</p>
          </div>
          <div className="cta-points">
            <span>Fast setup</span>
            <span>Flexible pricing</span>
            <span>Hands-on support</span>
          </div>
          <div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button className="btn-primary" onClick={() => setShowContact(true)}>Talk to sales</button>
            <button className="btn-secondary">View pricing</button>
          </div>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}

export default ChannelPageTemplate;
