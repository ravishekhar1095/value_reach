import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { termsSections } from './legalContent';

function TermsPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal and Compliance"
      title="Terms of Service"
      intro="These terms describe the baseline rules for using Value Reach services. Enterprise order forms, product addenda, and data processing agreements may supplement them."
      sections={termsSections}
    />
  );
}

export default TermsPage;
