import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import MarketingPageTemplate from './MarketingPageTemplate';
import HomePage from './HomePage';
import ChannelPageTemplate from './ChannelPageTemplate';
import PlatformPage from './PlatformPage';
import ChannelsPage from './ChannelsPage';
import AutomationPage from './AutomationPage';
import IndustriesPage from './IndustriesPage';
import ObservabilityPage from './ObservabilityPage';
import ContactPage from './ContactPage';
import DevelopersPage from './DevelopersPage';
import PricingPage from './PricingPage';
import LegalHubPage from './LegalHubPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import CookiePolicyPage from './CookiePolicyPage';
import TermsPage from './TermsPage';
import AcceptableUsePage from './AcceptableUsePage';
import CompliancePage from './CompliancePage';
import ChatbotPage from './ChatbotPage';

const channelData = {
  sms: {
    theme: 'theme-light',
    badge: 'Tier-1 Bulk SMS Gateway',
    title: 'Global Bulk SMS Infrastructure',
    subtitle: 'Connect to 700+ carriers through a single, resilient API. Engineered for massive scale and sub-second latency.',
    heroImage: '/assets/sms-hero.png',
    overview: 'Ideal for OTPs, alerts, reminders, and high-volume transactional traffic where speed and delivery certainty matter most.',
    stats: [
      { value: '700+', label: 'Direct Carrier Links', icon: '📡' },
      { value: '190+', label: 'Countries Covered', icon: '🌍' },
      { value: '99.99%', label: 'Gateway Uptime', icon: '⚡' },
      { value: '< 2s', label: 'Global Latency', icon: '⏱️' }
    ],
    features: [
      { title: 'High-Throughput Gateway', description: 'Our proprietary SMS engine handles thousands of TPS with ease.', icon: '🚀' },
      { title: 'Intelligent Routing', description: 'AI algorithms re-evaluating 700+ routes in real-time.', icon: '🧠' }
    ],
    useCases: [
      { title: 'Authentication', description: 'OTPs, two-factor login, and passcode delivery with tight expiry controls.' },
      { title: 'Customer updates', description: 'Payment alerts, shipment updates, and service notifications at scale.' },
      { title: 'Time-sensitive nudges', description: 'Reminder flows, resend logic, and failure fallback for critical moments.' },
    ],
    coverage: [
      { label: 'Route depth', value: '700+' },
      { label: 'Primary markets', value: '190+' },
      { label: 'Latency target', value: '< 2s' },
    ],
    code: `await vreach.sms.send({
  to: '+14155552671',
  text: 'Your OTP code is 482931. Valid for 2 mins.',
  from: 'VREACH'
});`,
    codeFilename: 'send_bulk_sms.js'
  },
  whatsapp: {
    theme: 'theme-green',
    badge: 'Official Meta BSP',
    title: 'WhatsApp Business API at Scale',
    subtitle: 'High-volume WhatsApp infrastructure for enterprise notification and engagement flows.',
    heroImage: '/assets/whatsapp-hero.png',
    overview: 'Best for rich, conversational journeys where buttons, lists, and media lift engagement over plain text.',
    stats: [
      { value: 'Official', label: 'Meta Partner', icon: '💬' },
      { value: 'Verified', label: 'Green Badge', icon: '✅' },
      { value: '100%', label: 'Media Support', icon: '🖼️' },
      { value: '24h', label: 'Support Window', icon: '⏰' }
    ],
    features: [
      { title: 'Rich Interaction', description: 'Interactive buttons, lists, and high-res media templates.', icon: '🎨' },
      { title: 'Reliable Sessions', description: 'Automated 24-hour window management and templating.', icon: '🔄' }
    ],
    useCases: [
      { title: 'Commerce flows', description: 'Catalog browsing, purchase nudges, and payment completion journeys.' },
      { title: 'Support automation', description: 'Bot-first triage with human handoff for faster resolutions.' },
      { title: 'Notifications', description: 'Delivery updates, booking alerts, and account confirmations with rich templates.' },
    ],
    coverage: [
      { label: 'Session window', value: '24h' },
      { label: 'Template support', value: 'Rich media' },
      { label: 'Commerce ready', value: 'Yes' },
    ],
    code: `await vreach.whatsapp.send({
  to: '+14155552671',
  template: 'order_update',
  components: [{ type: 'body', parameters: [...] }]
});`,
    codeFilename: 'wa_notify.js'
  },
  rcs: {
    theme: 'theme-purple',
    badge: 'Rich Business Messaging',
    title: 'RCS Messaging for Android',
    subtitle: 'Bring rich cards, actionable buttons, and verified branding to the native inbox of billions.',
    heroImage: '/assets/rcs-hero.png',
    overview: 'Great for branded, app-like experiences on Android with action buttons, cards, and stronger visual storytelling.',
    stats: [
      { value: 'Rich UI', label: 'Interactive Cards', icon: '📱' },
      { value: 'Verified', label: 'Brand Profile', icon: '🛡️' },
      { value: 'High', label: 'Read Rates', icon: '👁️' },
      { value: 'Native', label: 'Android Sync', icon: '🚀' }
    ],
    features: [
      { title: 'Carousel UX', description: 'Showcase products with swipable high-res carousel cards.', icon: '🎡' },
      { title: 'Suggested Actions', description: 'One-tap replies and deep links for frictionless UX.', icon: '👆' }
    ],
    useCases: [
      { title: 'Product discovery', description: 'Feature collections, offers, and browse flows in a native-style layout.' },
      { title: 'Interactive support', description: 'Present clear next steps with quick replies and strong visual cues.' },
      { title: 'Campaigns', description: 'High-visibility launches, promos, and reminders that stand out in inboxes.' },
    ],
    coverage: [
      { label: 'Verified identity', value: 'Included' },
      { label: 'Action buttons', value: 'Yes' },
      { label: 'Native Android', value: 'Yes' },
    ],
    code: `await vreach.rcs.send({
  to: '+14155552671',
  content: {
    title: 'New Collection Out Now',
    suggestions: ['View More', 'Buy Now']
  }
});`,
    codeFilename: 'rcs_card.js'
  },
  email: {
    theme: 'theme-blue',
    badge: 'Bulk Email Infrastructure',
    title: 'High-Deliverability Email API',
    subtitle: 'Reputation-first infrastructure for mission-critical transactional and marketing volumes.',
    heroImage: '/assets/email-hero.png',
    overview: 'Use email for receipts, notifications, onboarding, and lifecycle messaging with deliverability controls built in.',
    stats: [
      { value: '99.9%', label: 'Inbox Rate', icon: '📥' },
      { value: 'Dedicated', label: 'IP Pools', icon: '🌐' },
      { value: 'AES', label: 'Encryption', icon: '🔒' },
      { value: 'Real-time', label: 'Analytics', icon: '📊' }
    ],
    features: [
      { title: 'Predictive Sending', description: 'Optimize send times for maximum inbox engagement.', icon: '📉' },
      { title: 'Inbound Parsing', description: 'Process incoming replies with custom webhook logic.', icon: '📩' }
    ],
    useCases: [
      { title: 'Transactional mail', description: 'Receipts, password resets, and account notifications with reliable tracking.' },
      { title: 'Lifecycle campaigns', description: 'Welcome series, product nudges, and retention emails with personalization.' },
      { title: 'Support replies', description: 'Route inbound responses into your helpdesk or workflow engine.' },
    ],
    coverage: [
      { label: 'Inbox rate', value: '99.9%' },
      { label: 'IP pools', value: 'Dedicated' },
      { label: 'Tracking', value: 'Real-time' },
    ],
    code: `await vreach.email.send({
  to: 'user@example.com',
  subject: 'Welcome to ValueReach',
  html: '<h1>Hello!</h1>',
  tracking: true
});`,
    codeFilename: 'transactional_mail.js'
  },
  voice: {
    theme: 'theme-orange',
    badge: 'Programmable Voice API',
    title: 'Bulk Voice & IVR Automation',
    subtitle: 'Scale phone outreach with automated alerts, high-fidelity TTS, and resilient SIP trunking.',
    heroImage: '/assets/voice-hero.png',
    overview: 'Best for urgent alerts, IVR menus, and privacy-sensitive flows that need a human voice interface.',
    stats: [
      { value: 'TTS', label: 'Natural Voices', icon: '🗣️' },
      { value: 'SIP', label: 'Direct Trunking', icon: '📞' },
      { value: 'Dual', label: 'Recording', icon: '🎙️' },
      { value: 'Logic', label: 'IVR Engine', icon: '🎛️' }
    ],
    features: [
      { title: 'Human Detection', description: 'Real-time detection of humans vs. answering machines.', icon: '🤖' },
      { title: 'Global Bridges', description: 'Bridge thousands of calls with zero latency overhead.', icon: '👥' }
    ],
    useCases: [
      { title: 'Voice alerts', description: 'Service outages, fraud warnings, and urgent reminders with guaranteed reach.' },
      { title: 'IVR menus', description: 'Create guided call flows that reduce wait times and improve routing.' },
      { title: 'Masked communications', description: 'Protect phone privacy for marketplace, delivery, and support calls.' },
    ],
    coverage: [
      { label: 'Voice quality', value: 'HD' },
      { label: 'Routing', value: 'Global SIP' },
      { label: 'Recording', value: 'Dual' },
    ],
    code: `await vreach.voice.call({
  to: '+14155552671',
  play: 'https://vreach.com/welcome.mp3',
  record: true
});`,
    codeFilename: 'voice_call.js'
  }
};

const trustsignalPages = {
  whatsappBusinessApi: {
    eyebrow: 'Bulk CPaaS Solutions',
    title: 'WhatsApp Business API',
    intro: 'Official WhatsApp Bulk solutions for high-volume enterprises. Deliver millions of notifications and engage in rich commerce at global scale.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'WhatsApp Business API for Bulk Messaging',
    heroBadge: 'Direct Meta BSP',
    heroStatA: { value: 'Unlimited', label: 'Message Volume' },
    heroStatB: { value: 'High', label: 'TPS Throughput' },
    primaryAction: { label: 'Connect API', to: '/contact' },
    secondaryAction: { label: 'Bulk Pricing', to: '/pricing' },
    stats: [
      { value: 'Official', label: 'Meta BSP Status' },
      { value: 'Verified', label: 'Sender Identity' },
      { value: 'Secure', label: 'Enterprise Grade' },
    ],
    cards: [
      { icon: '🚀', title: 'High-Volume Delivery', description: 'Engineered for massive scale with multi-region delivery nodes to ensure zero lag.' },
      { icon: '💬', title: 'Marketing Templates', description: 'Bulk-approve and dispatch promotional templates to millions of users instantly.' },
      { icon: '🛒', title: 'Commerce Hub', description: 'Unified product catalogs and payment flows for automated WhatsApp storefronts.' },
      { icon: '🤖', title: 'Low-Code Automation', description: 'Instantly deploy AI-driven support bots to handle high-volume influxes.' },
      { icon: '🛡️', title: 'Compliance Guard', description: 'Built-in opt-in management to keep your bulk campaigns 100% compliant.' },
      { icon: '📊', title: 'Global Reporting', description: 'Deep-level analytics on read rates, clicks, and conversions across every region.' },
    ],
    sections: [
      {
        eyebrow: 'Infrastructure',
        title: 'Global CPaaS Core for WhatsApp',
        description: 'Vreach provides the heavy-duty infrastructure required for massive enterprise WhatsApp workloads.',
        items: [
          'Direct hosting on Meta Cloud for lowest latency',
          'Support for interactive list messages and buttons',
          'Automated template translation at scale',
          'Advanced webhook retry logic',
          'Priority support for high-volume senders'
        ],
      },
    ],
  },
  smsApi: {
    eyebrow: 'Tier-1 Bulk SMS Provider',
    title: 'Global Bulk SMS API',
    intro: 'Drive your mission-critical notifications with our Tier-1 Bulk SMS gateway. 700+ direct carrier links for unmatched reliability and volume.',
    heroImage: '/assets/features.png',
    heroImageAlt: 'Bulk SMS Gateway Dashboard',
    heroBadge: 'Global CPaaS Leader',
    heroStatA: { value: '700+', label: 'Carrier Links' },
    heroStatB: { value: '99.99%', label: 'Gateway Uptime' },
    primaryAction: { label: 'Get API Access', to: '/contact' },
    secondaryAction: { label: 'Volume Discounts', to: '/pricing' },
    stats: [
      { value: '< 2s', label: 'Local Latency' },
      { value: 'Direct', label: 'Carrier Routes' },
      { value: 'Unlimited', label: 'Scalability' },
    ],
    cards: [
      { icon: '⚡', title: 'Massive Throughput', description: 'Capable of handling thousands of messages per second (TPS) without throttling.' },
      { icon: '🌍', title: 'Global Footprint', description: 'Direct routes to 190+ countries through a single, consolidated API endpoint.' },
      { icon: '🔍', title: 'Carrier-Grade DLR', description: 'Real-time industry-leading delivery receipts directly from the carrier network.' },
      { icon: '🔄', title: 'Intelligent Failover', description: 'Patented smart-routing constantly re-evaluates paths to find the most stable route.' },
      { icon: '🏢', title: 'Managed Onboarding', description: 'Dedicated desk for DLT, 10DLC, and sender ID registrations globally.' },
      { icon: '🔐', title: 'Security & Trust', description: 'ISO 27001 and GDPR compliant infrastructure for high-security sectors.' },
    ],
    sections: [
      {
        eyebrow: 'Technology',
        title: 'The Bulk SMS Engine',
        description: 'Our proprietary gateway is designed for companies that cannot afford a single dropped notification.',
        items: [
          'Real-time traffic balancing across 700+ routes',
          'Support for binary SMS and dynamic sender IDs',
          'Automated Unicode detection for local languages',
          'Custom retry parameters and expiry times',
          'Dedicated long-code and short-code pools'
        ],
      },
    ],
  },
  rcsMessaging: {
    eyebrow: 'Next-Gen Bulk Messaging',
    title: 'Bulk RCS Business Messaging',
    intro: 'Upgrade your bulk SMS campaigns to high-impact RCS. Deliver rich media, action buttons, and branded IDs for massive engagement.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'Bulk RCS Messaging Platform',
    heroBadge: 'Rich CPaaS',
    heroStatA: { value: 'Verified', label: 'Sender ID' },
    heroStatB: { value: 'Rich', label: 'Actionable Cards' },
    primaryAction: { label: 'Start Bulk RCS', to: '/contact' },
    secondaryAction: { label: 'RCS Case Studies', to: '/use-cases' },
    stats: [
      { value: 'Google', label: 'Verified Partner' },
      { value: 'High', label: 'CTR Performance' },
      { value: 'Branded', label: 'Experience' },
    ],
    cards: [
      { icon: '📊', title: 'Rich Media Bulk', description: 'Send carousels and high-res videos to millions of Android users globally.' },
      { icon: '✅', title: 'Verified Identity', description: 'Every bulk message carries your brand logo and a verified trust badge.' },
      { icon: '📉', title: 'Open & Read Stats', description: 'Track read receipts at scale—something standard SMS cannot provide.' },
      { icon: '⌨️', title: 'Quick Action Buttons', description: 'Include 1-tap responses to drive massive conversions for sales and support.' },
      { icon: '🔗', title: 'Deep Link Integration', description: 'Direct users from messages into your app or specific product pages.' },
      { icon: '🛡️', title: 'Safe Fallback', description: 'Automatically falls back to bulk SMS if the recipient is not RCS-enabled.' },
    ],
    sections: [
      {
        eyebrow: 'Features',
        title: 'Bulk RCS Excellence',
        description: 'Leading the transition from legacy text to the "App-less" rich messaging future.',
        items: [
          'Direct carrier billing support for RCS',
          'Interactive carousels with up to 10 rich cards',
          'Native Android integration (No app needed)',
          'Rich read receipts and interaction events',
          'Simplified global sender registration'
        ],
      },
    ],
  },
  emailApi: {
    eyebrow: 'High-Volume Email',
    title: 'Bulk Email API & SMTP',
    intro: 'High-volume transactional and marketing email delivery with a focus on reputation and inbox placement.',
    heroImage: '/assets/features.png',
    heroImageAlt: 'Bulk Email Delivery Platform',
    heroBadge: 'Certified Sending',
    heroStatA: { value: 'High', label: 'IP Reputation' },
    heroStatB: { value: '99%', label: 'Placement Rate' },
    primaryAction: { label: 'Scale Emailing', to: '/contact' },
    secondaryAction: { label: 'Email Pricing', to: '/pricing' },
    stats: [
      { value: 'Reliable', label: 'Inbox Delivery' },
      { value: 'Dedicated', label: 'IP Warm-up' },
      { value: 'SMTP/API', label: 'Flexibility' },
    ],
    cards: [
      { icon: '🚀', title: 'Scalable SMTP Relay', description: 'Connect your current tools to our high-throughput SMTP nodes in seconds.' },
      { icon: '🛡️', title: 'Reputation Shield', description: 'Proactive monitoring and dedicated IPs to keep your bulk sends out of spam.' },
      { icon: '📈', title: 'Event-Level Tracking', description: 'Webhooks for opens, clicks, bounces, and complaints at a massive scale.' },
      { icon: '🧩', title: 'Bulk Templates', description: 'High-performance template engine with dynamic tags for personalization.' },
      { icon: '🚫', title: 'List Hygiene', description: 'Automatic suppression of bad emails to protect your sender reputation.' },
      { icon: '🧪', title: 'A/B Testing Bulk', description: 'Run content experiments across large cohorts to maximize ROI.' },
    ],
    sections: [
      {
        eyebrow: 'Stack',
        title: 'Enterprise CPaaS Email',
        description: 'Designed for companies sending millions of emails a day with zero margin for error.',
        items: [
          'Multi-provider backup & failover',
          'Inbound email parsing for high-volume support',
          'Advanced SPF/DKIM/DMARC management',
          'Sub-account hierarchy for large teams',
          'Real-time delivery log tailing'
        ],
      },
    ],
  },
  voiceApi: {
    eyebrow: 'Bulk Voice CPaaS',
    title: 'Bulk Voice & IVR API',
    intro: 'Scale your outreach with bulk voice alerts, automated IVR, and global call bridging from a single API.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'Bulk Voice Automation Platform',
    heroBadge: 'Voice Scalability',
    heroStatA: { value: 'Global', label: 'SIP Network' },
    heroStatB: { value: 'HD', label: 'Voice Quality' },
    primaryAction: { label: 'Automate Voice', to: '/contact' },
    secondaryAction: { label: 'SIP Docs', to: '/developers' },
    stats: [
      { value: 'IVR', label: 'Flow Builder' },
      { value: 'Local', label: 'Numbers' },
      { value: 'Secure', label: 'Bridging' },
    ],
    cards: [
      { icon: '📞', title: 'Bulk Calling', description: 'Trigger thousands of automated voice alerts or notifications simultaneously.' },
      { icon: '🎙️', title: 'Global TTS', description: 'Premium Text-to-Speech in 40+ languages with natural human-like cadence.' },
      { icon: '🎹', title: 'Programmable IVR', description: 'Design complex multi-level menu systems using our drag-and-drop builder.' },
      { icon: '🔒', title: 'Number Privacy', description: 'Massive-scale call masking for marketplaces and delivery services.' },
      { icon: '⏺️', title: 'Bulk Recording', description: 'High-availability cloud storage for millions of call recordings and logs.' },
      { icon: '📱', title: 'Virtual Numbers', description: 'Get local or toll-free numbers in 100+ countries instantly via API.' },
    ],
  },
  chatbot: {
    eyebrow: 'Smart Workflow Chatbot',
    title: 'Smart Workflow Chatbot Studio',
    intro: 'Build a smart workflow chatbot for support, sales, and onboarding. Keep conversations fast, human, and connected to your existing tools.',
    heroImage: '/assets/automation-hero.svg',
    heroImageAlt: 'Chatbot automation interface',
    heroBadge: 'Always on',
    heroStatA: { value: '24/7', label: 'Availability' },
    heroStatB: { value: '< 1m', label: 'Setup time' },
    primaryAction: { label: 'Launch a demo', to: '/contact' },
    secondaryAction: { label: 'See platform', to: '/platform' },
    stats: [
      { value: 'Instant', label: 'Replies' },
      { value: 'Human', label: 'Handoff ready' },
      { value: 'Multi', label: 'Channel support' },
    ],
    cards: [
      { icon: '🤖', title: 'Answer questions', description: 'Use the chatbot as a first response layer for FAQs, product questions, and support triage.' },
      { icon: '🧠', title: 'Guide workflows', description: 'Keep chats on track with intent-aware flows and prompt, friendly responses.' },
      { icon: '🔁', title: 'Route to humans', description: 'Escalate edge cases to sales or support with the full conversation context attached.' },
      { icon: '📚', title: 'Use your knowledge base', description: 'Ground replies in product docs, help content, and policy sources your team already trusts.' },
      { icon: '💬', title: 'Meet customers where they are', description: 'Deploy the same assistant across web chat, WhatsApp, and other messaging channels.' },
      { icon: '⚙️', title: 'Connect to your stack', description: 'Plug the bot into CRM, ticketing, and automation tools with clean APIs and webhooks.' },
    ],
    sections: [
      {
        eyebrow: 'How it works',
        title: 'From first message to resolved conversation',
        description: 'The smart workflow chatbot handles the repetitive work, then hands off smoothly when a person needs to step in.',
        items: [
          'Capture the visitor intent',
          'Suggest the right next step',
          'Resolve common questions instantly',
          'Escalate with conversation history',
          'Track outcomes in one dashboard',
        ],
      },
    ],
  },
  blog: {
    eyebrow: 'CPaaS Resources',
    title: 'CPaaS & Bulk Insights',
    intro: 'Expert perspectives on the future of programmable communications and bulk messaging strategies.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'CPaaS Industry Insights',
    heroBadge: 'Industry Leader',
    heroStatA: { value: 'Global', label: 'Trends' },
    heroStatB: { value: 'Direct', label: 'Knowledge' },
    primaryAction: { label: 'View Insights', to: '/whats-new' },
    secondaryAction: { label: 'Contact Us', to: '/contact' },
  },
  aboutUs: {
    eyebrow: 'Our Story',
    title: 'The CPaaS Infrastructure Company',
    intro: 'We build the pipes that power global communications. Reliable, direct, and engineered for the world’s largest brands.',
    heroImage: '/assets/features.png',
    heroImageAlt: 'Our Infrastructure Story',
    heroBadge: 'Direct Connectivity',
    heroStatA: { value: '700+', label: 'Carriers' },
    heroStatB: { value: '10B+', label: 'Volume / Month' },
    primaryAction: { label: 'Contact Sales', to: '/contact' },
    secondaryAction: { label: 'See Pricing', to: '/pricing' },
    cards: [
      { icon: '🌐', title: 'Global Backbone', description: 'We operate our own carrier-grade network with POPs in every major region.' },
      { icon: '💎', title: 'Quality Obsessed', description: 'We avoid grey routes. Only Tier-1 direct connectivity for maximum delivery.' },
      { icon: '🛡️', title: 'Regulatory Experts', description: 'Deep local knowledge to navigate DLT, TRAI, and FCC regulations worldwide.' },
      { icon: '👥', title: 'Engineer-Led Support', description: 'Talk to experts who understand CPaaS architecture, not just scripts.' },
    ],
  },
  useCases: {
    eyebrow: 'Solutions',
    title: 'Scalable Bulk Use Cases',
    intro: 'See how the world’s most demanding teams use our CPaaS core to power their growth.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'Bulk Messaging Use Cases',
    heroBadge: 'Proven Success',
    heroStatA: { value: 'Massive', label: 'Engagement' },
    heroStatB: { value: 'High', label: 'ROI' },
    primaryAction: { label: 'Get Started', to: '/contact' },
    secondaryAction: { label: 'Rate Cards', to: '/pricing' },
    cards: [
      { icon: '🏦', title: 'Banking & OTP', description: 'Ultra-low latency delivery for millions of authentication codes globally.' },
      { icon: '🛍️', title: 'Retail Promotions', description: 'High-conversion bulk campaigns via WhatsApp Commerce and RCS.' },
      { icon: '🚨', title: 'Emergency Alerts', description: 'Mission-critical notification systems with 99.99% delivery guarantee.' },
      { icon: '🚚', title: 'Service Notifications', description: 'Automated bulk alerts for delivery, dispatch, and transit updates.' },
    ],
  },
  apiIntegration: {
    eyebrow: 'Developers',
    title: 'Programmable Bulk API',
    intro: 'Developer-first CPaaS. One API for millions of messages. Simple, powerful, and ridiculously fast.',
    heroImage: '/assets/features.png',
    heroImageAlt: 'CPaaS API Reference',
    heroBadge: 'Developer First',
    heroStatA: { value: 'REST', label: 'Bulk Endpoints' },
    heroStatB: { value: 'Webhooks', label: 'Real-time' },
    primaryAction: { label: 'Read API Docs', to: '/developers' },
    secondaryAction: { label: 'Get API Key', to: '/contact' },
  },
  faq: {
    eyebrow: 'Support',
    title: 'CPaaS FAQ',
    intro: 'Answers for technical and business teams planning high-volume communication rollouts.',
    heroImage: '/assets/hero.png',
    heroImageAlt: 'Technical FAQ',
    heroBadge: 'Expertise',
    heroStatA: { value: '24/7', label: 'Tech Support' },
    heroStatB: { value: 'Detailed', label: 'Guides' },
    primaryAction: { label: 'Contact Expert', to: '/contact' },
    secondaryAction: { label: 'Pricing Hub', to: '/pricing' },
  },
  whatsNew: {
    eyebrow: 'Updates',
    title: 'Product & Network Updates',
    intro: 'Latest additions to our global carrier network and new CPaaS feature releases.',
    heroImage: '/assets/features.png',
    heroImageAlt: 'CPaaS Release Notes',
    heroBadge: 'New Features',
    heroStatA: { value: 'Monthly', label: 'Releases' },
    heroStatB: { value: 'Network', label: 'Growth' },
    primaryAction: { label: 'Join Beta', to: '/contact' },
    secondaryAction: { label: 'Read Blog', to: '/blog' },
  },
};

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#0b5cff' },
      secondary: { main: '#ff6b35' },
      background: { default: '#f5f7fa' },
    },
    typography: {
      fontFamily: "'Manrope', 'Space Grotesk', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="page">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/whatsapp-business-api" element={<ChannelPageTemplate {...channelData.whatsapp} />} />
              <Route path="/sms-api" element={<ChannelPageTemplate {...channelData.sms} />} />
              <Route path="/rcs-messaging" element={<ChannelPageTemplate {...channelData.rcs} />} />
              <Route path="/email-api" element={<ChannelPageTemplate {...channelData.email} />} />
              <Route path="/voice-api" element={<ChannelPageTemplate {...channelData.voice} />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/sigmo" element={<ChatbotPage />} />
              <Route path="/blog" element={<MarketingPageTemplate {...trustsignalPages.blog} />} />
              <Route path="/about-us" element={<MarketingPageTemplate {...trustsignalPages.aboutUs} />} />
              <Route path="/use-cases" element={<MarketingPageTemplate {...trustsignalPages.useCases} />} />
              <Route path="/api-integration" element={<MarketingPageTemplate {...trustsignalPages.apiIntegration} />} />
              <Route path="/faq" element={<MarketingPageTemplate {...trustsignalPages.faq} />} />
              <Route path="/whats-new" element={<MarketingPageTemplate {...trustsignalPages.whatsNew} />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/channels" element={<ChannelsPage />} />
              <Route path="/automation" element={<AutomationPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/observability" element={<ObservabilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/developers" element={<DevelopersPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/legal" element={<LegalHubPage />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/legal/terms" element={<TermsPage />} />
              <Route path="/legal/acceptable-use" element={<AcceptableUsePage />} />
              <Route path="/legal/compliance" element={<CompliancePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
