import React from 'react';

function WireframeDottedGlobe({ className = '', width = 800, height = 600 }) {
  const dots = [
    [18, 18], [50, 16], [78, 20], [28, 32], [62, 35], [42, 46], [74, 52], [20, 58],
    [55, 60], [86, 66], [34, 76], [66, 82], [24, 88], [48, 92], [80, 92],
  ];

  return (
    <div className={`wireframe-globe ${className}`} style={{ width: '100%', maxWidth: width, height }}>
      <svg viewBox="0 0 100 100" role="img" aria-label="Rotating wireframe globe">
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(91, 231, 255, 0.45)" />
            <stop offset="60%" stopColor="rgba(91, 231, 255, 0.12)" />
            <stop offset="100%" stopColor="rgba(91, 231, 255, 0)" />
          </radialGradient>
        </defs>

        <circle className="wireframe-globe-glow" cx="50" cy="50" r="48" fill="url(#globeGlow)" />
        <circle className="wireframe-globe-core" cx="50" cy="50" r="34" />

        <g className="wireframe-globe-rings">
          <ellipse cx="50" cy="50" rx="34" ry="12" />
          <ellipse cx="50" cy="50" rx="34" ry="22" />
          <ellipse cx="50" cy="50" rx="34" ry="30" />
          <ellipse cx="50" cy="50" rx="12" ry="34" />
          <ellipse cx="50" cy="50" rx="22" ry="34" />
        </g>

        <g className="wireframe-globe-dots">
          {dots.map(([x, y], index) => (
            <circle key={`${x}-${y}-${index}`} cx={x} cy={y} r="0.9" />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default WireframeDottedGlobe;
