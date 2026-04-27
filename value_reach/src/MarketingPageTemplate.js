import React from 'react';
import { Link } from 'react-router-dom';
import PageHeroVisual from './PageHeroVisual';

function MarketingPageTemplate({
  eyebrow,
  title,
  intro,
  primaryAction,
  secondaryAction,
  heroImage,
  heroImageAlt,
  heroBadge,
  heroStatA,
  heroStatB,
  stats = [],
  cards = [],
  sections = [],
}) {
  return (
    <div className="page-content">
      <section className="page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          {(primaryAction || secondaryAction) && (
            <div className="page-hero-actions">
              {primaryAction?.to ? (
                <Link to={primaryAction.to} className="btn-primary">
                  {primaryAction.label}
                </Link>
              ) : (
                <button className="btn-primary">{primaryAction?.label}</button>
              )}
              {secondaryAction?.to ? (
                <Link to={secondaryAction.to} className="btn-secondary">
                  {secondaryAction.label}
                </Link>
              ) : (
                <button className="btn-secondary">{secondaryAction?.label}</button>
              )}
            </div>
          )}
        </div>
        {heroImage && (
          <PageHeroVisual
            image={heroImage}
            alt={heroImageAlt || title}
            badge={heroBadge}
            statA={heroStatA}
            statB={heroStatB}
          />
        )}
      </section>

      {stats.length > 0 && (
        <section className="stat-grid">
          {stats.map(stat => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>
      )}

      {cards.length > 0 && (
        <section className="info-grid">
          {cards.map(card => (
            <article key={card.title} className="info-card">
              {card.icon && <div className="info-icon">{card.icon}</div>}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>
      )}

      {sections.length > 0 && (
        <section className="split-panel">
          {sections.map(section => (
            <div key={section.title} className="glow-card">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              {section.items?.length > 0 && (
                <ul className="list">
                  {section.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default MarketingPageTemplate;
