import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { privacySections } from './legalContent';

function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Privacy Notice"
      title="Privacy Policy"
      intro="This notice describes how Value Reach handles personal data in connection with our website, business operations, and communications platform."
      sections={privacySections}
    />
  );
}

export default PrivacyPolicyPage;
