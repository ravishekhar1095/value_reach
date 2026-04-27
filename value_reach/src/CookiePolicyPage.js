import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { cookieSections } from './legalContent';

function CookiePolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Privacy Notice"
      title="Cookie Policy"
      intro="This Cookie Policy explains the technologies Value Reach uses on its website and how visitors can manage those choices."
      sections={cookieSections}
    />
  );
}

export default CookiePolicyPage;
