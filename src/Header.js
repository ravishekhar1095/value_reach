import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const LOGO_WORDMARK = '/assets/logo-wordmark.svg';

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showContact, setShowContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: 'Platform', to: '/platform' },
    { label: 'Channels', to: '/channels' },
    { label: 'Automation', to: '/automation' },
    { label: 'Industries', to: '/industries' },
    { label: 'Observability', to: '/observability' },
    { label: 'Developers', to: '/developers' },
    { label: 'Pricing', to: '/pricing' },
  ];

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="logo" aria-label="Value Reach home">
          <img src={LOGO_WORDMARK} alt="Value Reach" className="logo-image" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <Link to="/contact" className="ghost-link">
            Contact
          </Link>
          <button className="btn-primary small" onClick={() => setShowContact(true)}>
            Book Demo
          </button>
        </div>
      </header>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}

export default Header;
