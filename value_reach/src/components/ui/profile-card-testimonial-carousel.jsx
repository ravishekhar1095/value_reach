import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Quote,
  UserRound,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    title: 'Head of Engineering, Bengaluru',
    description:
      'The platform helped our team ship dependable omnichannel journeys without losing speed. Delivery visibility and routing controls are now part of our daily workflow.',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    githubUrl: 'https://github.com/',
    twitterUrl: 'https://x.com/',
    youtubeUrl: 'https://youtube.com/',
    linkedinUrl: 'https://linkedin.com/',
  },
  {
    name: 'Priya Nair',
    title: 'Director of Product, Mumbai',
    description:
      'We went from scattered messaging tools to one clean operating layer. The team response was sharp, practical, and perfectly tuned for our launch cadence.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    githubUrl: 'https://github.com/',
    twitterUrl: 'https://x.com/',
    youtubeUrl: 'https://youtube.com/',
    linkedinUrl: 'https://linkedin.com/',
  },
  {
    name: 'Kabir Shah',
    title: 'VP Data & Analytics, Hyderabad',
    description:
      'Their reliability and observability story is strong. Our dashboards got clearer, handoffs got easier, and the whole team gained confidence in the system.',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    githubUrl: 'https://github.com/',
    twitterUrl: 'https://x.com/',
    youtubeUrl: 'https://youtube.com/',
    linkedinUrl: 'https://linkedin.com/',
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];
  const highlightTags = [
    { icon: BadgeCheck, label: 'Verified delivery' },
    { icon: Sparkles, label: 'Fast onboarding' },
    { icon: UserRound, label: 'Dedicated support' },
  ];

  const goNext = () => setCurrentIndex((index) => (index + 1) % testimonials.length);
  const goPrevious = () => setCurrentIndex((index) => (index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-mobile">
        <div className="testimonial-image-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.imageUrl}
              src={current.imageUrl}
              alt={current.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="testimonial-image"
            />
          </AnimatePresence>
        </div>
        <div className="testimonial-copy">
          <h3>{current.name}</h3>
          <p className="testimonial-title">{current.title}</p>
          <p className="testimonial-description">{current.description}</p>
          <div className="testimonial-highlights">
            {highlightTags.map(({ icon: Icon, label }) => (
              <span key={label}>
                <Icon size={16} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="testimonial-carousel-desktop">
        <div className="testimonial-avatar-panel">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.imageUrl}
              src={current.imageUrl}
              alt={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="testimonial-image"
            />
          </AnimatePresence>
        </div>

        <div className="testimonial-card-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <p className="testimonial-kicker">Customer story</p>
              <h3>{current.name}</h3>
              <p className="testimonial-title">{current.title}</p>
              <p className="testimonial-description">
                <Quote size={16} className="testimonial-quote-icon" />
                {current.description}
              </p>
              <div className="testimonial-highlights">
                {highlightTags.map(({ icon: Icon, label }) => (
                  <span key={label}>
                    <Icon size={16} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="testimonial-nav">
        <button type="button" onClick={goPrevious} aria-label="Previous testimonial">
          <ChevronLeft size={20} />
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} aria-label="Next testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
