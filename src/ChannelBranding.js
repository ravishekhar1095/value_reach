import React from 'react';

export const channelBrands = {
  whatsapp: {
    label: 'WhatsApp',
    src: 'https://cdn.simpleicons.org/whatsapp/25D366',
  },
  sms: {
    label: 'SMS',
    src: 'https://cdn.simpleicons.org/googlemessages/1A73E8',
  },
  rcs: {
    label: 'RCS',
    src: 'https://cdn.simpleicons.org/googlemessages/1A73E8',
  },
  email: {
    label: 'Email',
    src: 'https://cdn.simpleicons.org/gmail/EA4335',
  },
  voice: {
    label: 'Voice',
    src: '/assets/mic.svg',
  },
  sigmo: {
    label: 'Sigmo',
    src: '/assets/logo-mark.svg',
  },
};

export const channelBrandOrder = ['whatsapp', 'sms', 'rcs', 'email', 'voice'];

function ChannelBrandLogo({ brandKey, size = 28, className = '' }) {
  const brand = channelBrands[brandKey];

  if (!brand) {
    return null;
  }

  return (
    <img
      src={brand.src}
      alt={brand.label}
      className={className}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
    />
  );
}

export default ChannelBrandLogo;
