import React, { useState } from 'react';

function ContactModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) return alert('Please enter email and message');
    if (!form.consent) return alert('Please agree to receive updates to continue.');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', message: '', consent: false });
    }, 2000);
  }

  return (
    <>
      <style>{`
        .cm-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(2, 6, 23, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          padding: 24px;
          animation: cmFadeIn 0.3s ease;
        }

        @keyframes cmFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cm-modal {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 255, 0.95));
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1);
          color: #0f172a;
          position: relative;
          transform: translateY(0);
          animation: cmSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes cmSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .cm-close {
          position: absolute;
          right: 24px;
          top: 24px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.5);
          transition: all 0.2s;
        }

        .cm-close:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #0f172a;
          transform: rotate(90deg);
        }

        .cm-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #0f172a, #334155);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cm-subtitle {
          color: rgba(0, 0, 0, 0.6);
          font-size: 15px;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .cm-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cm-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cm-label {
          font-size: 13px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cm-input {
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

        .cm-input::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }

        .cm-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
        }
        
        textarea.cm-input {
          resize: vertical;
          min-height: 100px;
        }

        .cm-consent-wrap {
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
        
        .cm-consent-wrap:hover {
          background: rgba(0, 0, 0, 0.035);
        }

        .cm-radio-check {
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

        .cm-radio-check:checked {
          border-color: #3b82f6;
          background: #3b82f6;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
        }

        .cm-radio-check:checked::after {
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

        .cm-consent-text {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.6);
        }
        
        .cm-consent-text strong {
          color: #0f172a;
          font-weight: 600;
        }

        .cm-actions {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }

        .cm-btn-secondary {
          flex: 1;
          padding: 14px 24px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #0f172a;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cm-btn-secondary:hover {
          background: rgba(0, 0, 0, 0.08);
        }

        .cm-btn-primary {
          flex: 2;
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
        }

        .cm-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(9, 105, 218, 0.4);
        }

        .cm-success {
          text-align: center;
          padding: 40px 0;
        }

        .cm-success-icon {
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
      `}</style>
      <div className="cm-overlay" role="dialog" aria-modal="true">
        <div className="cm-modal">
          <button className="cm-close" onClick={onClose} aria-label="Close">✕</button>

          {submitted ? (
            <div className="cm-success">
              <div className="cm-success-icon">✓</div>
              <h3 className="cm-title">Demo Requested</h3>
              <p className="cm-subtitle" style={{ marginBottom: 0 }}>
                Our team will reach out to you shortly to schedule your personalized product walkthrough.
              </p>
            </div>
          ) : (
            <>
              <h3 className="cm-title">Book a Demo</h3>
              <p className="cm-subtitle">See how ValueReach can transform your engagement strategy with unified omnichannel workflows.</p>

              <form className="cm-form" onSubmit={handleSubmit}>
                <div className="cm-group">
                  <label className="cm-label">Name</label>
                  <input className="cm-input" name="name" value={form.name} onChange={handleChange} required />
                </div>

                <div className="cm-group">
                  <label className="cm-label">Email</label>
                  <input className="cm-input" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                <div className="cm-group">
                  <label className="cm-label">Message/Requirement</label>
                  <textarea className="cm-input" name="message" value={form.message} onChange={handleChange} required />
                </div>

                <label className="cm-consent-wrap">
                  <input
                    type="checkbox"
                    className="cm-radio-check"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                  />
                  <span className="cm-consent-text">
                    I agree to receive newsletters, promotional content, offers and event updates from <strong>ValueReach</strong> via SMS, RCS, WhatsApp and Email.
                  </span>
                </label>

                <div className="cm-actions">
                  <button type="button" className="cm-btn-secondary" onClick={onClose}>Cancel</button>
                  <button className="cm-btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactModal;
