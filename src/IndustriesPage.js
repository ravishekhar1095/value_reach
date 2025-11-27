import React from 'react';

const industryShowcase = [
  {
    name: 'Banks & Fintech',
    description: 'OTP, fraud, collections, and wealth updates delivered with SOC 2 guardrails.',
    badge: '99.99% SLA',
  },
  {
    name: 'Retail & Ecommerce',
    description: 'Abandoned cart, COD verification, and loyalty journeys across SMS, RCS, and WhatsApp.',
    badge: '+35% conversions',
  },
  {
    name: 'Logistics & Mobility',
    description: 'Masked calls, ETA notifications, and driver/passenger comms in 40+ languages.',
    badge: '3x faster resolution',
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-ready reminders, tele-consult updates, and patient support workflows.',
    badge: 'Trusted by top hospital chains',
  },
];

const industryJourneys = [
  { stage: 'Acquire', highlights: ['KYC nudges', 'Welcome WhatsApp flows', 'App install journeys'] },
  { stage: 'Engage', highlights: ['Personalized offers', 'Back-in-stock alerts', 'Appointment reminders'] },
  { stage: 'Support', highlights: ['Two-way WhatsApp care', 'Masked voice escalation', 'Multilingual notifications'] },
];

const industryMetrics = [
  { value: '14d', label: 'Average rollout per region' },
  { value: '190+', label: 'Regulatory jurisdictions covered' },
  { value: '700+', label: 'Carrier + OTT partnerships' },
];

const industryStories = [
  { title: 'MercuryPay', summary: 'Moved OTP + alerts in 10 days with zero DLT rejections.' },
  { title: 'Northwind Retail', summary: 'Blended RCS, WhatsApp, and SMS to boost reorders by 42%.' },
];

function IndustriesPage() {
  return (
    <div className="page-content industries-page">
      <section className="page-hero">
        <p className="eyebrow">Industries</p>
        <h1>Launch proven playbooks in regulated, high-stakes sectors.</h1>
        <p>From banking to healthcare, our solution architects bring templates, routing plans, and compliance guardrails you can adopt on day one.</p>
      </section>

      <section className="industry-showcase">
        {industryShowcase.map((industry) => (
          <article key={industry.name} className="industry-card">
            <span className="pill">{industry.badge}</span>
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
          </article>
        ))}
      </section>

      <section className="industry-journeys">
        {industryJourneys.map((journey) => (
          <div key={journey.stage} className="journey-card">
            <h3>{journey.stage}</h3>
            <ul>
              {journey.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="industry-insights">
        <div className="insight-left">
          <h2>Blueprints you can lift and run</h2>
          <p>We bring pre-vetted templates, localization packs, and compliance reviews so your teams can ship safely and quickly.</p>
          <ul className="list">
            <li>DLT, TRAI, GDPR, and HIPAA-ready playbooks</li>
            <li>Localization libraries for 40+ languages</li>
            <li>Solution architects embedded through launch</li>
          </ul>
        </div>
        <div className="insight-right">
          {industryMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="industry-stories">
        {industryStories.map((story) => (
          <article key={story.title} className="case-card">
            <strong>{story.title}</strong>
            <p>{story.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default IndustriesPage;
