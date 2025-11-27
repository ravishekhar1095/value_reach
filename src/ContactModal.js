import React, { useState } from 'react';

function ContactModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) return alert('Please enter email and message');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h3>Contact sales</h3>
        {submitted ? (
          <div className="modal-body">
            <p>Thanks! We'll reach out shortly.</p>
          </div>
        ) : (
          <form className="modal-body" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} />
            </label>
            <label>
              Email *
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Message *
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
            </label>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button type="button" className="ghost-btn" onClick={onClose}>Cancel</button>
              <button className="solid-btn" type="submit">Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
