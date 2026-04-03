import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_IMAGE = '/logo-transparent.png';

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
      { label: 'Legal', to: '/legal' },
      { label: 'Careers', to: '/contact' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy Policy', to: '/legal/privacy-policy' },
      { label: 'Cookie Policy', to: '/legal/cookie-policy' },
      { label: 'Terms of Service', to: '/legal/terms' },
      { label: 'Acceptable Use', to: '/legal/acceptable-use' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={LOGO_IMAGE} alt="Value Reach" className="logo-image" />
          <p className="footer-tagline">Enterprise communications infrastructure, designed for clarity and scale.</p>
          <p className="footer-description">
            Messaging, voice, verification, automation, and observability from one unified platform.
          </p>
        </div>
        <div className="footer-content">
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
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Value Reach Inc. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link to="/legal">Legal</Link>
          <Link to="/legal/privacy-policy">Privacy</Link>
          <Link to="/legal/cookie-policy">Cookies</Link>
          <Link to="/legal/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
