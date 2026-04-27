import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_LAST_UPDATED, legalPageLinks } from './legalContent';

function LegalPageTemplate({ eyebrow, title, intro, sections }) {
  return (
    <div className="page-content legal-page">
      <section className="page-hero legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="legal-meta">
          <span className="pill">Last updated {LEGAL_LAST_UPDATED}</span>
        </div>
      </section>

      <section className="legal-layout">
        <aside className="legal-nav">
          <h2>Legal</h2>
          {legalPageLinks.map(link => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </aside>

        <div className="legal-article">
          {sections.map(section => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              {section.paragraphs?.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list">
                  {section.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LegalPageTemplate;
