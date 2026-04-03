import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { acceptableUseSections } from './legalContent';

function AcceptableUsePage() {
  return (
    <LegalPageTemplate
      eyebrow="Policies and Statements"
      title="Acceptable Use Policy"
      intro="Customers and users must use the Value Reach platform responsibly, lawfully, and in a way that protects consumers, partners, and network quality."
      sections={acceptableUseSections}
    />
  );
}

export default AcceptableUsePage;
