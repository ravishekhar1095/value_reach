import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_LAST_UPDATED, legalHubCategories } from './legalContent';

function LegalHubPage() {
  return (
    <div className="page-content legal-page">
      <section className="page-hero legal-hero">
        <p className="eyebrow">Legal</p>
        <h1>Policies, terms, and compliance notices.</h1>
        <p>
          Find the core legal documents that govern use of Value Reach services, explain how we handle data, and describe the standards we apply across our platform.
        </p>
        <div className="legal-meta">
          <span className="pill">Last updated {LEGAL_LAST_UPDATED}</span>
        </div>
      </section>

      <section className="legal-grid">
        {legalHubCategories.map(category => (
          <article key={category.title} className="glow-card legal-card">
            <h2>{category.title}</h2>
            <div className="legal-link-list">
              {category.links.map(link => (
                <Link key={link.to} to={link.to} className="legal-link-card">
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default LegalHubPage;
