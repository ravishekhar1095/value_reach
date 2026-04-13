import React from 'react';
import { motion } from 'framer-motion';

function SparksCarousel({ title, subtitle, items }) {
  return (
    <section className="sparks-carousel" aria-labelledby="sparks-title">
      <div className="sparks-carousel-header">
        <div>
          <p className="eyebrow">Customer outcomes</p>
          <h3 id="sparks-title">{title}</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="sparks-carousel-shell">
        <div className="sparks-carousel-track">
          {[0, 1].map((groupIndex) => (
            <div className="sparks-carousel-group" key={groupIndex}>
              {items.map((item, index) => (
                <motion.article
                  key={`${item.id}-${groupIndex}-${index}`}
                  className="sparks-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="sparks-card-image-wrap">
                    <img className="sparks-card-image" src={item.imageSrc} alt={item.title} />
                  </div>
                  <div className="sparks-card-body">
                    <h4 className="sparks-card-title">{item.title}</h4>
                    <div className="sparks-card-metric">
                      <strong>{item.count}</strong>
                      <span>{item.countLabel}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SparksCarousel;
