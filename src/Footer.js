import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_WORDMARK = '/assets/logo-wordmark.svg';
const LOGO_MARK = '/assets/logo-mark.svg';

const footerMenus = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'Channels', to: '/channels' },
      { label: 'Automation', to: '/automation' },
      { label: 'Observability', to: '/observability' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Industries', to: '/industries' },
      { label: 'Developers', to: '/developers' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Status', to: '/observability' },
      { label: 'Security', to: '/platform' },
      { label: 'Careers', to: '/contact' },
    ],
  },
];

function Footer() {
  const handleSubscribe = event => {
    event.preventDefault();
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="eyebrow">Ready when you are</p>
          <h3>Let’s connect your next journey.</h3>
          <p>We’ll review your routes, map rollout plans, and pair you with a success architect.</p>
        </div>
        <form className="footer-newsletter" onSubmit={handleSubscribe}>
          <label htmlFor="newsletter">Subscribe for launch notes</label>
          <div className="newsletter-input">
            <input id="newsletter" type="email" placeholder="you@company.com" required />
            <button type="submit" className="btn-primary small">Join</button>
          </div>
          <span>Monthly digest. No spam.</span>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <img src={LOGO_WORDMARK} alt="Value Reach" className="logo-image" />
          <p>The enterprise CPaaS for global scale.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">git</a>
          </div>
        </div>
        {footerMenus.map(menu => (
          <div className="footer-links-col" key={menu.title}>
            <h4>{menu.title}</h4>
            {menu.links.map(link => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Value Reach Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
