import React, { useState } from 'react';

const touchpoints = [
  { title: 'Sales & Migrations', description: 'Map your rollout, review routing, and get a custom rate card.', detail: 'sales@valuereach.com' },
  { title: 'Support', description: '24/7 NOC, premium escalation, and status notifications.', detail: 'noc@valuereach.com' },
  { title: 'Press & Partnerships', description: 'Get in touch about launches, alliances, and media briefings.', detail: 'press@valuereach.com' },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '' });
    }, 1200);
  }

  return (
    <div className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Talk to us</p>
        <h1>Let’s design your launch or migration.</h1>
        <p>Share your volumes, geos, and channels—we’ll stand up a pilot in under two weeks.</p>
      </section>

      <section className="split-panel">
        <div className="glow-card">
          <h2>What you get</h2>
          <ul className="list">
            <li>Migration checklist + routing plan</li>
            <li>Template review and compliance guidance</li>
            <li>Delivery + cost benchmarks versus your current provider</li>
          </ul>
          <div className="info-grid compact">
            {touchpoints.map(tp => (
              <article key={tp.title} className="info-card">
                <h3>{tp.title}</h3>
                <p>{tp.description}</p>
                <span className="pill">{tp.detail}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="form-card">
          {submitted ? (
            <p>Thanks! We’ll reach out shortly.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} />
              </label>
              <label>
                Company
                <input name="company" value={form.company} onChange={handleChange} />
              </label>
              <label>
                Email *
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Message *
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
              </label>
              <button className="btn-primary" type="submit">Send message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
