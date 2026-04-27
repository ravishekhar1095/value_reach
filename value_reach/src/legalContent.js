export const LEGAL_LAST_UPDATED = 'April 3, 2026';

export const legalHubCategories = [
  {
    title: 'Legal and Compliance',
    links: [
      {
        label: 'Terms of Service',
        to: '/legal/terms',
        description: 'Commercial terms, account responsibilities, billing, suspension, and liability boundaries.',
      },
      {
        label: 'Acceptable Use Policy',
        to: '/legal/acceptable-use',
        description: 'Rules for lawful messaging, prohibited traffic, abuse prevention, and platform integrity.',
      },
      {
        label: 'Compliance & Ethics',
        to: '/legal/compliance',
        description: 'Security, reporting expectations, vendor conduct, and escalation channels.',
      },
    ],
  },
  {
    title: 'Privacy Notices',
    links: [
      {
        label: 'Privacy Policy',
        to: '/legal/privacy-policy',
        description: 'How Value Reach collects, uses, shares, stores, and protects personal data.',
      },
      {
        label: 'Cookie Policy',
        to: '/legal/cookie-policy',
        description: 'How cookies and similar technologies support analytics, security, and site preferences.',
      },
    ],
  },
];

export const legalPageLinks = [
  { label: 'Legal Hub', to: '/legal' },
  { label: 'Privacy Policy', to: '/legal/privacy-policy' },
  { label: 'Cookie Policy', to: '/legal/cookie-policy' },
  { label: 'Terms of Service', to: '/legal/terms' },
  { label: 'Acceptable Use Policy', to: '/legal/acceptable-use' },
  { label: 'Compliance & Ethics', to: '/legal/compliance' },
];

export const privacySections = [
  {
    title: 'Scope',
    paragraphs: [
      'This Privacy Policy explains how Value Reach collects and processes personal data when you visit our website, create an account, request information, or use our messaging, voice, verification, email, and related communication services.',
      'Where we process customer content or traffic on behalf of a customer, we generally act as a processor or service provider. In those cases, the customer remains responsible for deciding why the data is processed and for providing any notices required to its end users.',
    ],
  },
  {
    title: 'Information We Collect',
    bullets: [
      'Account and contact details such as name, work email, phone number, company, role, and billing contacts.',
      'Service configuration and usage information such as sender IDs, routing choices, webhook endpoints, message metadata, support tickets, and audit events.',
      'Website and device information such as IP address, browser type, pages viewed, referral source, and cookie identifiers.',
      'Payment and commercial records such as invoices, transaction history, tax information, and plan selections.',
    ],
  },
  {
    title: 'How We Use Information',
    bullets: [
      'To provide, secure, and support the platform.',
      'To onboard customers, verify identities, and prevent fraud, spam, or misuse.',
      'To operate billing, reporting, service notifications, and customer success programs.',
      'To improve product performance, reliability, and user experience.',
      'To comply with applicable law, lawful requests, and telecom or messaging compliance obligations.',
    ],
  },
  {
    title: 'How We Share Information',
    paragraphs: [
      'We may share personal data with infrastructure providers, payment processors, analytics vendors, support tools, professional advisers, affiliated entities, and regulators or authorities when legally required. We do not sell personal data for third-party advertising.',
      'We also disclose data when necessary to investigate abuse, enforce our agreements, protect users, or complete a merger, acquisition, financing, or asset transfer.',
    ],
  },
  {
    title: 'International Transfers',
    paragraphs: [
      'Because Value Reach operates with global service partners and communications routes, personal data may be processed in countries other than the one where it was collected. When that happens, we use appropriate contractual, technical, and organizational safeguards designed to protect the data.',
    ],
  },
  {
    title: 'Retention',
    paragraphs: [
      'We retain information for as long as needed to provide the services, maintain security logs, meet contractual obligations, resolve disputes, enforce agreements, and satisfy legal, tax, accounting, and telecom retention requirements. Retention periods vary by data type and service context.',
    ],
  },
  {
    title: 'Your Rights',
    bullets: [
      'Request access to the personal data we hold about you.',
      'Request correction of inaccurate or incomplete information.',
      'Request deletion where retention is no longer necessary or legally required.',
      'Object to or restrict certain processing where applicable law permits.',
      'Request a portable copy of data you provided to us, where technically feasible.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'Questions or requests about this Privacy Policy can be sent to legal@valuereach.com or privacy@valuereach.com.',
    ],
  },
];

export const cookieSections = [
  {
    title: 'What Cookies Are',
    paragraphs: [
      'Cookies are small text files stored on your device when you visit a website. We also use similar technologies such as local storage, pixels, and server logs to remember preferences, understand site performance, and protect the platform.',
    ],
  },
  {
    title: 'Categories We Use',
    bullets: [
      'Strictly necessary cookies used for security, authentication, load balancing, and form submission.',
      'Performance and analytics cookies used to understand traffic, diagnose errors, and improve website usability.',
      'Preference cookies used to remember choices such as region, language, or consent selections.',
    ],
  },
  {
    title: 'How To Control Cookies',
    paragraphs: [
      'You can manage cookies through your browser settings and, where available, our consent controls. Blocking certain cookies may reduce functionality, affect sign-in flows, or prevent some content from loading correctly.',
    ],
  },
  {
    title: 'Third-Party Services',
    paragraphs: [
      'Some cookies may be set by third-party providers that support analytics, embedded content, security monitoring, or marketing operations. Their use of information is governed by their own privacy notices and contractual commitments with Value Reach.',
    ],
  },
  {
    title: 'Updates',
    paragraphs: [
      'We may update this Cookie Policy to reflect operational, legal, or technical changes. The effective date at the top of the page indicates the latest revision.',
    ],
  },
];

export const termsSections = [
  {
    title: 'Agreement Overview',
    paragraphs: [
      'These Terms of Service govern access to and use of Value Reach products, APIs, dashboards, websites, and support services. By using the services on behalf of a business, you confirm that you are authorized to bind that business to these terms.',
    ],
  },
  {
    title: 'Accounts and Access',
    bullets: [
      'Customers must keep credentials secure and maintain accurate account information.',
      'Access may be limited to authorized users and approved use cases.',
      'Customers are responsible for actions taken through their account, API keys, and sub-accounts.',
    ],
  },
  {
    title: 'Service Use',
    bullets: [
      'Use the services only for lawful communications and in compliance with telecom, privacy, and messaging rules.',
      'Obtain all required notices, consents, and opt-ins before sending regulated traffic.',
      'Do not misrepresent sender identity, evade carrier rules, or interfere with the security or reliability of the platform.',
    ],
  },
  {
    title: 'Fees and Billing',
    paragraphs: [
      'Customers agree to pay applicable fees, taxes, carrier surcharges, and pass-through costs described in the order form, dashboard, or pricing schedule. Unless otherwise stated, fees are non-refundable and usage-based charges may fluctuate according to volumes, destinations, and channel requirements.',
    ],
  },
  {
    title: 'Suspension and Termination',
    paragraphs: [
      'We may suspend or limit access when necessary to prevent fraud, abuse, legal exposure, security incidents, excessive risk, or non-payment. Either party may terminate in accordance with the governing order form or applicable notice period.',
    ],
  },
  {
    title: 'Confidentiality and Data',
    paragraphs: [
      'Each party must protect confidential information disclosed by the other and use it only for the purposes of the business relationship. Data processing obligations may also be governed by a separate data processing agreement, security addendum, or order-specific terms.',
    ],
  },
  {
    title: 'Disclaimers and Liability',
    paragraphs: [
      'Except as expressly stated in a written agreement, the services are provided on an as-available basis. To the maximum extent permitted by law, indirect, incidental, consequential, and special damages are excluded, and aggregate liability is limited to the fees paid for the affected services during the agreed lookback period.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'Legal notices concerning these Terms may be sent to legal@valuereach.com.',
    ],
  },
];

export const acceptableUseSections = [
  {
    title: 'Purpose',
    paragraphs: [
      'This Acceptable Use Policy explains the standards that apply when you use Value Reach services. It is designed to protect carriers, consumers, customers, and the reliability of the platform.',
    ],
  },
  {
    title: 'Prohibited Activity',
    bullets: [
      'Spam, phishing, malware delivery, fraud, deceptive marketing, or impersonation.',
      'Traffic that violates opt-in, opt-out, sender ID, content, registration, or template approval requirements.',
      'Unlawful content including harassment, exploitation, counterfeit activity, or content that infringes intellectual property rights.',
      'Attempts to probe, disrupt, overload, reverse engineer, or bypass security controls or routing restrictions.',
    ],
  },
  {
    title: 'Customer Responsibilities',
    bullets: [
      'Maintain records of consent and campaign approvals where required.',
      'Monitor complaint rates, unsubscribe behavior, and message quality.',
      'Respond promptly to abuse, carrier, regulatory, or platform remediation requests.',
      'Flow down these rules to your users, affiliates, and downstream resellers.',
    ],
  },
  {
    title: 'Enforcement',
    paragraphs: [
      'We may investigate suspected violations and take action including traffic filtering, sender blocking, account suspension, message rejection, data preservation, or termination. We may also cooperate with carriers, partners, and authorities where appropriate.',
    ],
  },
  {
    title: 'Reporting',
    paragraphs: [
      'Abuse reports or urgent misuse concerns may be sent to abuse@valuereach.com or legal@valuereach.com.',
    ],
  },
];

export const complianceSections = [
  {
    title: 'Program Overview',
    paragraphs: [
      'Value Reach maintains a compliance program focused on security, lawful communications, customer due diligence, vendor accountability, and ethical business conduct.',
    ],
  },
  {
    title: 'Core Commitments',
    bullets: [
      'Operate security controls appropriate to the sensitivity of the platform and customer data.',
      'Support lawful, consent-based communications and responsible sender onboarding.',
      'Investigate credible reports of fraud, abuse, corruption, or policy violations.',
      'Require employees, contractors, and key vendors to follow integrity and confidentiality standards.',
    ],
  },
  {
    title: 'Reporting Concerns',
    paragraphs: [
      'Potential compliance concerns, security issues, or misconduct reports can be submitted to compliance@valuereach.com. Reports should include enough detail for investigation, such as affected accounts, dates, sender IDs, regions, and supporting evidence where available.',
    ],
  },
  {
    title: 'Review and Updates',
    paragraphs: [
      'We review our legal notices and compliance materials periodically and may revise them to reflect product expansion, regulatory changes, or evolving industry standards.',
    ],
  },
];
