import React from 'react';
import PageHeroVisual from './PageHeroVisual';

const plans = [
  {
    name: 'Builder',
    price: 'Free',
    descriptor: '1M test credits · Sandbox only',
    features: ['Full API + SDK access', 'Shared short codes & WhatsApp sandbox', 'Community support'],
  },
  {
    name: 'Scale',
    price: 'Custom rates',
    descriptor: 'Committed volume pricing',
    highlight: 'Most popular',
    features: ['Dedicated routing profiles', 'Bring-your-own numbers & senders', '24/7 NOC + success architect', 'Advanced governance & SSO'],
  },
  {
    name: 'Enterprise',
    price: 'Talk to sales',
    descriptor: 'Global + regulated workloads',
    features: ['Custom SLAs & latency guarantees', 'Private cloud / on-prem options', 'Compliance review + migration squad', 'Dedicated TAM & quarterly audits'],
  },
];

const comparisons = [
  { feature: 'Dedicated routing', builder: '—', scale: 'Included', enterprise: 'Included' },
  { feature: 'Private numbers', builder: 'Shared pool', scale: 'Available', enterprise: 'Available' },
  { feature: 'Latency SLA', builder: 'Best effort', scale: 'P95 & P99', enterprise: 'Custom' },
  { feature: 'Security audits', builder: 'Self-serve', scale: 'Shared', enterprise: 'Dedicated' },
];

const guarantees = [
  { title: 'Migration credits', detail: 'We offset unused months from your incumbent providers.' },
  { title: 'Dual delivery', detail: 'Run shadow traffic until you and your regulators trust the new routes.' },
  { title: 'Route audits', detail: 'Quarterly benchmarking on price, delivery, and quality.' },
];

function PricingPage() {
  return (
    <div className="page-content pricing-page">
      <section className="page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">Predictable economics</p>
          <h1>Only pay for the traffic you trust us with.</h1>
          <p>Start testing for free, then graduate to committed usage discounts. Enterprise teams get bespoke routing, SLAs, and governance.</p>
          <div className="page-hero-actions">
            <button className="btn-primary">Talk to sales</button>
            <button className="btn-secondary">Download rate card</button>
          </div>
        </div>
        <PageHeroVisual
          image="/assets/hero.png"
          alt="Pricing plans illustration"
          badge="Flexible pricing"
          statA={{ value: 'Free', label: 'builder tier' }}
          statB={{ value: 'Custom', label: 'enterprise rates' }}
        />
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.highlight ? 'featured' : ''}`}>
            {plan.highlight && <span className="plan-badge">{plan.highlight}</span>}
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-descriptor">{plan.descriptor}</p>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="plan-cta">{plan.price === 'Free' ? 'Get started' : 'Contact us'}</button>
          </div>
        ))}
      </section>

      <section className="pricing-comparison">
        <div className="comparison-table">
          <div className="comparison-header">
            <span>Feature</span>
            <span>Builder</span>
            <span>Scale</span>
            <span>Enterprise</span>
          </div>
          {comparisons.map((row) => (
            <div key={row.feature} className="comparison-row">
              <span>{row.feature}</span>
              <span>{row.builder}</span>
              <span>{row.scale}</span>
              <span>{row.enterprise}</span>
            </div>
          ))}
        </div>
        <div className="pricing-note">
          <h3>Wholesale routing intelligence</h3>
          <p>Your success architect tunes routes by country, use case, and quality target. Blend committed and pay-as-you-go pools without losing visibility.</p>
        </div>
      </section>

      <section className="pricing-guarantees">
        {guarantees.map((guarantee) => (
          <article key={guarantee.title} className="guarantee-card">
            <h4>{guarantee.title}</h4>
            <p>{guarantee.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PricingPage;
