import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { complianceSections } from './legalContent';

function CompliancePage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal and Compliance"
      title="Compliance and Ethics"
      intro="This page summarizes Value Reach commitments around security, ethical conduct, abuse response, and internal accountability."
      sections={complianceSections}
    />
  );
}

export default CompliancePage;
