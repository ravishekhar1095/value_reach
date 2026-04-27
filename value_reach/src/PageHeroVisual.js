import React from 'react';

function PageHeroVisual({ image, alt, accent = '#5be7ff', badge, statA, statB }) {
  return (
    <div className="page-hero-visual">
      <div className="page-hero-image-card" style={{ '--hero-accent': accent }}>
        <img src={image} alt={alt} className="page-hero-image" />
      </div>
      {(badge || statA || statB) && (
        <div className="page-hero-metadata">
          {badge && <span className="hero-image-badge">{badge}</span>}
          <div className="hero-image-stats">
            {statA && (
              <div>
                <strong>{statA.value}</strong>
                <span>{statA.label}</span>
              </div>
            )}
            {statB && (
              <div>
                <strong>{statB.value}</strong>
                <span>{statB.label}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PageHeroVisual;
