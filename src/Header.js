import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
import ChannelBrandLogo, { channelBrands } from './ChannelBranding';

const LOGO_IMAGE = `${(process.env.PUBLIC_URL || '').replace(/\/$/, '')}/logo-transparent.png`;

const menuGroups = {
  products: {
    label: 'CPaaS Solutions',
    eyebrow: 'Unified Gateway',
    title: 'Bulk Messaging Infrastructure',
    summary:
      'Scale your connectivity with Tier-1 direct routes for Bulk SMS, WhatsApp Business, RCS, Email, and Voice through a single API.',
    sections: [
      {
        title: 'Core Channels',
        links: [
          { label: 'Bulk SMS API', to: '/sms-api', description: 'Tier-1 global delivery at scale' },
          { label: 'WhatsApp for Business', to: '/whatsapp-business-api', description: 'Official high-volume notification flows' },
          { label: 'RCS Business Messaging', to: '/rcs-messaging', description: 'Branded rich cards for mass outreach' },
        ],
      },
      {
        title: 'Network Services',
        links: [
          { label: 'Bulk Email API', to: '/email-api', description: 'Reputation-first high-volume sending' },
          { label: 'Bulk Voice & IVR', to: '/voice-api', description: 'Automated alerts and SIP trunking' },
          { label: 'Sigmo Omnichannel', to: '/sigmo', description: 'Unified bulk orchestration hub' },
        ],
      },
    ],
    channelLogos: ['whatsapp', 'sms', 'rcs', 'email', 'voice'],
    featureLink: { label: 'Explore CPaaS platform', to: '/platform' },
  },
  resources: {
    label: 'Resources',
    eyebrow: 'Knowledge Hub',
    title: 'Bulk Messaging Strategy',
    summary:
      'Access technical guides, carrier updates, and industry insights to optimize your high-volume communication stack.',
    sections: [
      {
        title: 'Insights',
        links: [
          { label: 'Bulk Industry Blog', to: '/blog', description: 'Latest strategies and updates' },
          { label: 'CPaaS Infrastructure', to: '/about-us', description: 'Our Tier-1 network and mission' },
          { label: 'Enterprise Use Cases', to: '/use-cases', description: 'Success stories at scale' },
        ],
      },
      {
        title: 'Developer Support',
        links: [
          { label: 'Programmable API', to: '/api-integration', description: 'Integration tools and sandbox' },
          { label: 'Technical FAQ', to: '/faq', description: 'Quick answers for engineering teams' },
          { label: 'Bulk Pricing', to: '/pricing', description: 'High-volume committed rates' },
          { label: 'Talk to an Expert', to: '/contact', description: 'Technical routing consultation' },
        ],
      },
    ],
    channelLogos: ['whatsapp', 'sms', 'rcs', 'email', 'voice'],
    featureLink: { label: 'Get API keys', to: '/contact' },
  },
};

function Header() {
  const [showContact, setShowContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openDropdown = menuKey => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(menuKey);
  };

  const closeDropdownSoon = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 220);
  };

  const renderDropdown = (menuKey, menu) => {
    const isOpen = activeDropdown === menuKey;

    return (
      <div
        className={`nav-dropdown ${isOpen ? 'open' : ''}`}
        key={menuKey}
        onMouseEnter={() => openDropdown(menuKey)}
        onMouseLeave={closeDropdownSoon}
        onFocus={() => openDropdown(menuKey)}
        onBlur={closeDropdownSoon}
      >
        <button
          type="button"
          className="nav-link nav-trigger"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setActiveDropdown(prev => (prev === menuKey ? null : menuKey))}
        >
          {menu.label}
          <span className="nav-caret" aria-hidden="true">
            ▾
          </span>
        </button>

        <div className="mega-menu" role="menu" aria-label={menu.label}>
          <div className="mega-menu-rail">
            <p className="mega-menu-eyebrow">{menu.eyebrow}</p>
            <h3>{menu.title}</h3>
            <p>{menu.summary}</p>
            {menu.channelLogos?.length > 0 && (
              <div className="channel-logo-strip" aria-label={`${menu.label} channel logos`}>
                {menu.channelLogos.map(brandKey => (
                  <span key={brandKey} className="channel-logo-pill">
                    <ChannelBrandLogo brandKey={brandKey} size={18} className="channel-logo-image" />
                    <span>{channelBrands[brandKey]?.label || brandKey}</span>
                  </span>
                ))}
              </div>
            )}
            <Link className="mega-menu-feature" to={menu.featureLink.to} onClick={() => setActiveDropdown(null)}>
              <span>{menu.featureLink.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mega-menu-grid">
            {menu.sections.map(section => (
              <div className="mega-menu-col" key={section.title}>
                <p className="mega-menu-col-title">{section.title}</p>
                {section.links.map(link => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="mega-menu-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mega-menu-link-title">{link.label}</span>
                    <span className="mega-menu-link-description">{link.description}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="logo" aria-label="Value Reach home">
          <img src={LOGO_IMAGE} alt="Value Reach" className="logo-image" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links-desktop">
            {Object.entries(menuGroups).map(([key, menu]) => renderDropdown(key, menu))}
          </div>

          <div className="nav-links-mobile">
            {Object.entries(menuGroups).map(([key, menu]) => renderDropdown(key, menu))}
          </div>
        </nav>
        <div className="nav-actions">
          <Link to="/whats-new" className="ghost-link">
            What's New
          </Link>
          <Link to="/sign-in" className="ghost-link">
            Sign In
          </Link>
          <button className="btn-primary small" onClick={() => setShowContact(true)}>
            Talk to an expert
          </button>
        </div>
      </header>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}

export default Header;
