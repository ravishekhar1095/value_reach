import React, { useState } from 'react';

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const touchpoints = [
  { title: 'Sales & Migrations', description: 'Map your rollout, review routing, and get a custom rate card.', details: [] },
  { title: 'Support', description: '24/7 NOC, premium escalation, and status notifications.', details: [] },
  { title: 'Press & Partnerships', description: 'Get in touch about launches, alliances, and media briefings.', details: [] },
  { title: 'General Inquiries', description: 'Have other questions? Reach out to our general info line.', details: [{ icon: <EmailIcon />, text: 'info@valuereach.in' }, { icon: <PhoneIcon />, text: '+91 8796167123' }] },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', consent: false });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    if (!form.consent) return alert('Please agree to receive updates to continue.');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '', consent: false });
    }, 1200);
  }

  return (
    <div className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Talk to us</p>
        <h1>Let’s design your launch or migration.</h1>
        <p>Share your volumes, geos, and channels—we’ll stand up a pilot in under two weeks.</p>
      </section>

      <style>{`
        .cp-form-container {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 255, 0.95));
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1);
          color: #0f172a;
          height: fit-content;
        }

        .cp-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cp-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cp-label {
          font-size: 13px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cp-input {
          width: 100%;
          padding: 14px 16px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          color: #0f172a;
          font-size: 15px;
          transition: all 0.2s;
          box-sizing: border-box;
        }

        .cp-input::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }

        .cp-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
        }

        textarea.cp-input {
          resize: vertical;
          min-height: 120px;
        }

        .cp-btn-primary {
          padding: 14px 24px;
          background: linear-gradient(135deg, #0969da, #58a6ff);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 15px rgba(9, 105, 218, 0.2);
          margin-top: 8px;
          width: 100%;
        }

        .cp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(9, 105, 218, 0.4);
        }

        .cp-success {
          text-align: center;
          padding: 40px 0;
        }

        .cp-success-icon {
          width: 80px;
          height: 80px;
          background: rgba(46, 160, 67, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #2ea043;
          font-size: 40px;
          border: 2px solid rgba(46, 160, 67, 0.2);
        }

        .cp-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #0f172a, #334155);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cp-subtitle {
          color: rgba(0, 0, 0, 0.6);
          font-size: 15px;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .cp-consent-wrap {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 8px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.015);
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .cp-consent-wrap:hover {
          background: rgba(0, 0, 0, 0.035);
        }

        .cp-radio-check {
          appearance: none;
          -webkit-appearance: none;
          min-width: 20px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.02);
          margin: 0;
          margin-top: 2px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .cp-radio-check:checked {
          border-color: #3b82f6;
          background: #3b82f6;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
        }

        .cp-radio-check:checked::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }

        .cp-consent-text {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.6);
        }
        
        .cp-consent-text strong {
          color: #0f172a;
          font-weight: 600;
        }
      `}</style>

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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                  {tp.details.map((d, i) => (
                    <span key={i} className="pill" style={{ textTransform: 'lowercase' }}>
                      {d.icon} {d.text}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="cp-form-container">
          {submitted ? (
            <div className="cp-success">
              <div className="cp-success-icon">✓</div>
              <h3 className="cp-title">Message Sent</h3>
              <p className="cp-subtitle" style={{ marginBottom: 0 }}>
                Thanks for reaching out! A member of our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 className="cp-title">Send a Message</h3>
              <p className="cp-subtitle">Get in touch to discuss your specific requirements.</p>

              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-group">
                  <label className="cp-label">Name</label>
                  <input className="cp-input" name="name" value={form.name} onChange={handleChange} required />
                </div>

                <div className="cp-group">
                  <label className="cp-label">Company</label>
                  <input className="cp-input" name="company" value={form.company} onChange={handleChange} />
                </div>

                <div className="cp-group">
                  <label className="cp-label">Email *</label>
                  <input className="cp-input" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                <div className="cp-group">
                  <label className="cp-label">Message *</label>
                  <textarea className="cp-input" name="message" value={form.message} onChange={handleChange} required />
                </div>

                <label className="cp-consent-wrap">
                  <input 
                    type="checkbox" 
                    className="cp-radio-check" 
                    name="consent" 
                    checked={form.consent} 
                    onChange={handleChange} 
                    required
                  />
                  <span className="cp-consent-text">
                    I agree to receive newsletters, promotional content, offers and event updates from <strong>ValueReach</strong> via SMS, RCS, WhatsApp and Email.
                  </span>
                </label>

                <button className="cp-btn-primary" type="submit">Send message</button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
