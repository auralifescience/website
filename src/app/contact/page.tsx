'use client'

import { useState } from 'react'

const contactOptions = [
  {
    id: 'partnerships',
    title: 'Partnerships',
    description: 'Explore manufacturing partnerships or technology licensing opportunities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'investors',
    title: 'Investors',
    description: 'Learn about investment opportunities in sustainable biomanufacturing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'general',
    title: 'General Inquiry',
    description: 'Get in touch with our team for any other questions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [selectedType, setSelectedType] = useState('partnerships')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // honeypot — should always be empty for real users
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, type: selectedType }),
      })
      if (!res.ok) throw new Error('Failed')
      setIsSubmitted(true)
      setFormState({ name: '', email: '', company: '', message: '' })
    } catch {
      alert('Something went wrong. Please try again or email us directly at hello@auralifescience.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      if (!res.ok) throw new Error('Failed')
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-blush/10 border border-aura-blush/20 text-aura-blush text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-blush mr-2" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Build a{' '}
              <span className="gradient-text">Sustainable Future</span> Together
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Whether you&apos;re interested in partnerships, investment opportunities,
              or just want to learn more about our technology, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding" id="partnerships">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Type Selection */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <button
                    key={option.id}
                    id={option.id}
                    onClick={() => {
                      setSelectedType(option.id)
                      setIsSubmitted(false)
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedType === option.id
                        ? 'bg-aura-mint/10 border-aura-mint/50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          selectedType === option.id
                            ? 'bg-aura-mint/20 text-aura-mint'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{option.title}</h3>
                        <p className="text-sm text-white/60">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-white/60">
                    <svg className="w-5 h-5 text-aura-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@auralifescience.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <svg className="w-5 h-5 text-aura-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Chicago, IL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-aura-mint/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-aura-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-white/60 mb-6">
                      We&apos;ve received your message and will get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">
                      {selectedType === 'partnerships' && 'Partnership Inquiry'}
                      {selectedType === 'investors' && 'Investment Inquiry'}
                      {selectedType === 'general' && 'General Inquiry'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aura-mint/50 focus:ring-1 focus:ring-aura-mint/50 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aura-mint/50 focus:ring-1 focus:ring-aura-mint/50 transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aura-mint/50 focus:ring-1 focus:ring-aura-mint/50 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aura-mint/50 focus:ring-1 focus:ring-aura-mint/50 transition-colors resize-none"
                          placeholder={
                            selectedType === 'partnerships'
                              ? 'Tell us about your partnership interests and how we might work together...'
                              : selectedType === 'investors'
                              ? 'Tell us about your investment focus and interest in Aura Life Science...'
                              : 'How can we help you?'
                          }
                        />
                      </div>
                      {/* Honeypot field — hidden from real users, bots will fill it */}
                      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                        <input
                          type="text"
                          name="website"
                          value={formState.website}
                          onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding" id="newsletter">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aura-mint/10 via-aura-azure/10 to-aura-orchid/10 border border-white/10 p-8 md:p-16">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay <span className="gradient-text">Updated</span>
              </h2>
              <p className="text-white/70 mb-8">
                Subscribe to our newsletter for the latest updates on our technology,
                research breakthroughs, and industry insights.
              </p>

              {newsletterSubmitted ? (
                <div className="flex items-center justify-center gap-3 text-aura-mint">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-aura-mint/50 focus:ring-1 focus:ring-aura-mint/50 transition-colors"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-white/40 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-aura-azure/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-aura-mint/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

    </>
  )
}
