import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import './SmsApiPage.css';

const smsStats = [
  { value: '700+', label: 'Direct Carrier Links', icon: '📡' },
  { value: '190+', label: 'Countries Covered', icon: '🌍' },
  { value: '99.99%', label: 'Gateway Uptime', icon: '⚡' },
  { value: '< 2s', label: 'Global Latency', icon: '⏱️' },
];

const smsFeatures = [
  {
    title: 'High-Throughput Gateway',
    description: 'Our proprietary SMS engine handles thousands of TPS (Transactions Per Second) with ease, making it ideal for large-scale marketing and time-critical OTPs.',
    icon: '🚀'
  },
  {
    title: 'Intelligent Routing',
    description: 'Patented AI algorithms constantly re-evaluating 700+ routes in real-time to find the fastest and most cost-effective path for every message.',
    icon: '🧠'
  },
  {
    title: 'Carrier-Grade Tracking',
    description: 'Get granular, real-time delivery receipts (DLR) directly from the carrier network. No more guessing if your message was delivered.',
    icon: '📊'
  },
  {
    title: 'Global Compliance',
    description: 'Built-in support for DLT (India), 10DLC (USA), and GDPR (Europe). We handle the regulatory complexity so you don’t have to.',
    icon: '🛡️'
  }
];

const codeSnippet = `// Send Bulk SMS via ValueReach API
const vreach = require('vreach-sdk')('your_api_key');

await vreach.sms.send({
  to: ['+14155552671', '+447700900123'],
  from: 'VREACH',
  text: 'Your OTP code is 482931. Valid for 2 mins.',
  fallback: {
    channel: 'whatsapp',
    condition: 'dlr_failed'
  }
});`;

function SmsApiPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="sms-api-page">
      {/* Hero Section */}
      <section className="sms-hero">
        <div className="sms-hero-content">
          <div className="hero-text">
            <span className="badge-pill">Tier-1 Bulk SMS Gateway</span>
            <h1>Global Bulk SMS Infrastructure for Enterprises</h1>
            <p>Connect to 700+ carriers through a single, resilient API. Engineered for massive scale, sub-second latency, and mission-critical reliability.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setShowContact(true)}>Get API Access</button>
              <button className="btn-secondary">View Documentation</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-container">
              <img src="/assets/sms-hero.png" alt="Global SMS Gateway" className="hero-main-img" />
              <div className="floating-indicator top-left">
                <span className="status-dot success"></span>
                <span>Direct Route Active</span>
              </div>
              <div className="floating-indicator bottom-right">
                <span className="pulsing-icon">📡</span>
                <span>Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="sms-stats-grid">
        {smsStats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Feature Bento */}
      <section className="sms-features">
        <div className="section-header">
          <span className="eyebrow">Capabilities</span>
          <h2>The Infrastructure of Bulk Communication</h2>
          <p>We've built the network so you can focus on the message. Our CPaaS core is designed for the world's most demanding enterprises.</p>
        </div>
        <div className="features-grid">
          {smsFeatures.map((feature, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="sms-integration">
        <div className="integration-content">
          <div className="integration-text">
            <h2>Developer-First Bulk API</h2>
            <p>Integrate in minutes with our clean REST API or native SDKs. Built by developers, for developers, with clear error codes and 100% endpoint predictability.</p>
            <ul className="integration-list">
              <li>OpenAPI 3.0 Documentation</li>
              <li>Real-time Webhook Callbacks</li>
              <li>Official SDKs for Node, Python, and Go</li>
              <li>Sandbox Environment included</li>
            </ul>
            <Link to="/developers" className="btn-link">Explore API Reference →</Link>
          </div>
          <div className="integration-code">
            <div className="code-header">
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="code-filename">send_bulk.js</span>
            </div>
            <pre className="code-block">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Global Connectivity Map Section */}
      <section className="sms-global">
        <div className="global-card">
          <div className="global-text">
            <h2>700+ Carriers. One API.</h2>
            <p>Our Tier-1 network bypasses aggregators to give you the most stable and cost-effective connection to your customers in 190+ countries.</p>
            <div className="region-list">
              <div className="region-item"><span>Americas</span> <strong>99.99%</strong></div>
              <div className="region-item"><span>Europe</span> <strong>99.98%</strong></div>
              <div className="region-item"><span>APAC</span> <strong>99.99%</strong></div>
              <div className="region-item"><span>MENA</span> <strong>99.95%</strong></div>
            </div>
          </div>
          <div className="global-visual">
            {/* Visual background placeholder or SVG grid */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sms-cta">
        <div className="cta-box">
          <h2>Ready to Scale Your Bulk Messaging?</h2>
          <p>Join thousands of enterprises driving engagement with Vreach’s reliable CPaaS infrastructure.</p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => setShowContact(true)}>Create Free Account</button>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}

export default SmsApiPage;
