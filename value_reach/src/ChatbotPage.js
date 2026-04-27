import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeroVisual from './PageHeroVisual';

const starterMessages = [
  {
    role: 'bot',
    text: 'Hi, I’m your Value Reach smart workflow chatbot. I can help with products, routing, pricing, or getting a sales callback.',
  },
];

const quickPrompts = [
  'What does this chatbot do?',
  'How do I connect it to WhatsApp?',
  'Can I hand off to a human?',
  'Show me pricing options',
];

function getBotReply(message) {
  const normalized = message.toLowerCase();

  if (normalized.includes('whatsapp')) {
    return 'Yes. The chatbot can be wired into WhatsApp flows for support, lead capture, and automated follow-ups.';
  }

  if (normalized.includes('human') || normalized.includes('handoff')) {
    return 'Absolutely. You can route complex conversations to a human agent with full context preserved.';
  }

  if (normalized.includes('pricing')) {
    return 'Pricing depends on conversation volume and channels. I can point you to the sales team for a tailored quote.';
  }

  if (normalized.includes('connect') || normalized.includes('integration')) {
    return 'Integration is designed to be simple: connect your API, define intents, and launch with conversation routing.';
  }

  if (normalized.includes('what')) {
    return 'It’s a customer-facing smart workflow chatbot for support, lead qualification, and guided product discovery.';
  }

  return 'I can help with setup, use cases, integrations, and support handoff. Try asking about WhatsApp, pricing, or human escalation.';
}

function ChatbotPage() {
  const [messages, setMessages] = useState(starterMessages);
  const [draft, setDraft] = useState('');

  const suggestedPrompts = quickPrompts;

  const sendMessage = text => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    setMessages(prev => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'bot', text: getBotReply(trimmed) },
    ]);
    setDraft('');
  };

  return (
    <div className="page-content chatbot-page">
      <section className="page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">Smart Workflow Chatbot</p>
          <h1>Launch a workflow chatbot that feels helpful from the first reply.</h1>
          <p>
            Replace static support pages with a smart workflow chatbot that answers questions,
            qualifies leads, and hands off to humans when a conversation needs a personal touch.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn-primary">
              Book a demo
            </Link>
            <Link to="/developers" className="btn-secondary">
              View integration guide
            </Link>
          </div>
        </div>

        <PageHeroVisual
          image="/assets/platform-hero.svg"
          alt="Smart workflow chatbot orchestration illustration"
          accent="#7c3aed"
          badge="Always on"
          statA={{ value: '24/7', label: 'Coverage' }}
          statB={{ value: 'Instant', label: 'Replies' }}
        />
      </section>

      <section className="chatbot-layout">
        <div className="chatbot-shell">
          <div className="chatbot-header">
            <div>
              <span className="chatbot-status-dot" />
              Live demo
            </div>
            <span className="chatbot-type">Sales + support workflow bot</span>
          </div>

          <div className="chatbot-thread" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`chatbot-message ${message.role}`}>
                <span className="chatbot-avatar">{message.role === 'bot' ? 'SW' : 'You'}</span>
                <div className="chatbot-bubble">
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="chatbot-quick-prompts" aria-label="Suggested prompts">
            {suggestedPrompts.map(prompt => (
              <button key={prompt} type="button" className="chatbot-chip" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="chatbot-composer"
            onSubmit={event => {
              event.preventDefault();
              sendMessage(draft);
            }}
          >
            <input
              type="text"
              value={draft}
              onChange={event => setDraft(event.target.value)}
              placeholder="Ask something about the workflow chatbot..."
              aria-label="Chat message"
            />
            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
        </div>

        <div className="chatbot-sidecard">
          <p className="eyebrow">Why teams use it</p>
          <h2>Built for support, sales, and workflow handoff.</h2>
          <ul className="list">
            <li>Answers common questions without waiting in a queue</li>
            <li>Qualifies leads before they reach your team</li>
            <li>Escalates to a human with full context preserved</li>
            <li>Fits into WhatsApp, web chat, and smart workflow journeys</li>
          </ul>
          <Link to="/platform" className="btn-secondary small">
            Explore the platform
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ChatbotPage;
