'use client'

import Link from 'next/link'
import { useState } from 'react'

const leadership = [
  {
    name: 'Emilio Balderas',
    role: 'Founder & CEO',
    bio: 'A Chicago Booth MBA with Fortune 500 consulting and deep-tech venture experience, Emilio brings the commercial and operational expertise to scale promising science into market-ready businesses.',
    fullBio: `Chicago Booth MBA with consulting and venture capital experience. As former Director at Mercury, Emilio led teams delivering 500+ projects for Fortune 500 clients including Walmart, Southern Company, and Veolia. He has also led three deep tech investments on behalf of VCs including Angeles Ventures and the Polsky Center. Emilio knows what makes a startup fundable. This, combined with his experience helping global companies open factories, navigate regulatory landscapes, develop market entry and competitive strategy, and survive business crises – uniquely qualifies him to commercialize promising research, bringing them from lab to pilot, and beyond. Through his time at Aura, Emilio has already successfully garnered interest from two global enzyme manufacturers for JDAs, which are currently in technical discussions – a promising signal as he spearheads our market entry strategy and sales.

More personally, Emilio's journey from experiencing homelessness as a child to leading a deep-tech startup demonstrates the grit and resilience essential for hard-tech entrepreneurship. His mission to make necessities affordable is deeply personal – he understands what it means when essential products are priced out of reach. His ability to translate complex science into compelling business value has already secured acceptance into elite accelerators: LabStart ($100K SAFE investment as one of six companies selected from global applicant pool), Alchemist Chicago (inaugural cohort, <5% acceptance rate), mHUB mPOWER, SpaceEdge, New Venture Challenge and LongJump's The Raise program.`,
    image: null,
    linkedin: 'https://www.linkedin.com/in/emiliobalderas/',
  },
  {
    name: 'Jacob Bhoi',
    role: 'Founder & CSO',
    bio: 'A Northwestern-trained neuroscientist with nearly a decade of circadian biology, Jake leads Aura\'s technology development with rare scientific depth and commercial acumen.',
    fullBio: `PhD Candidate (defending in August 2026) in Neuroscience at Northwestern University with nearly a decade of circadian biology research experience. Jake is an expert in Aura's core technology, circadian engineering. Jake has secured $350K+ in competitive research grants (NIH F31, NSF GRFP Honorable Mention) and is a current finalist for Argonne National Lab's Chain Reaction Innovations program, demonstrating ability to communicate complex science and secure non-dilutive funding. Previously he led development for O4U Life Sciences, establishing partnerships with AbbVie, Abbott, Merck, Genentech, and 3M – providing critical experience navigating pharma/biotech partnership structures. His rare combination of deep scientific expertise and commercial awareness makes him ideally suited to drive our technology development while understanding market requirements.`,
    image: null,
    linkedin: 'https://www.linkedin.com/in/jacob-bhoi/',
  },
  {
    name: 'AH Hassaballah',
    role: 'COO',
    bio: 'A Chicago Booth MBA with cross-functional experience spanning biotech R&D, clinical operations, and regulatory compliance, A.H. provides the operational foundation for Aura\'s scale-up from laboratory to pilot.',
    fullBio: `Chicago Booth MBA with deep expertise bridging biotechnology R&D, regulatory compliance, and biotech operational scale-up. As Scientist at Derm Biont and Concerto Bio, A.H. led clinical trial data management and expanded biobanks 10-fold while advising on strategic laboratory scaling decisions. His EPA experience provides critical insights into navigating complex regulatory environments essential for biomanufacturing commercialization. His cross-functional background managing laboratory operations addresses immediate needs as Aura transitions from proof-of-concept to pilot scale, while his track record in pitch competitions demonstrates the communication skills essential for fundraising.`,
    image: null,
    linkedin: 'https://www.linkedin.com/in/ahhassaballah/',
  },
]

const fellows = [
  {
    name: 'Chloe Sun',
    role: 'BS in Economics, University of Chicago',
    bio: '',
    linkedin: '#',
  },
  {
    name: 'Thomas Evans',
    role: 'University of Chicago',
    bio: '',
    linkedin: '#',
  },
]

const advisors = [
  {
    name: 'Carl H. Johnson, Ph.D.',
    role: 'Inventor and Advisor',
    affiliation: 'Vanderbilt University',
    bio: 'Expert on cyanobacteria circadian clocks — first described the cyanobacteria circadian clock.',
    linkedin: '#',
  },
  {
    name: 'Yao Xu, Ph.D.',
    role: 'Inventor and Advisor',
    affiliation: 'Vanderbilt University',
    bio: 'Expert in synthetic biology and engineering cyanobacteria.',
    linkedin: '#',
  },
  {
    name: 'Wayne Mitchell, Ph.D.',
    role: 'Advisor',
    affiliation: 'Formerly LanzaTech',
    bio: 'Computational biology expert who was recruited to start the bioinformatics group at LanzaTech.',
    linkedin: '#',
  },
  {
    name: 'Alice Havill',
    role: 'Advisor',
    affiliation: 'Formerly LanzaTech; Breakthrough Energy',
    bio: 'Helped scale LanzaTech from the laboratory to pilot through commercial scale-up.',
    linkedin: '#',
  },
  {
    name: 'Rasmus Jensen, Ph.D.',
    role: 'Mentor',
    affiliation: 'LanzaTech',
    bio: 'Experienced process engineer with experience biomanufacturing with diverse microbes.',
    linkedin: '#',
  },
  {
    name: 'Jen Wagner',
    role: 'Advisor',
    affiliation: 'Former President of CarbonCure; Breakthrough Energy',
    bio: 'Expert in commercializing CleanTech.',
    linkedin: '#',
  },
  {
    name: 'Chris Schweitzer',
    role: 'Advisor',
    affiliation: 'Formerly AbbVie; Mann and Hummel',
    bio: 'Venture capital professional with past experience in biotech.',
    linkedin: '#',
  },
]

const values = [
  {
    title: 'Sustainability First',
    description: 'Every decision is evaluated through the lens of environmental impact. We build technology that heals the planet.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Scientific Rigor',
    description: 'We let data guide our decisions. Our platform is built on peer-reviewed science and validated at every step.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Collaborative Spirit',
    description: 'The best solutions come from diverse perspectives. We partner openly with academia, industry, and communities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Ambitious Vision',
    description: 'We aim to fundamentally transform biomanufacturing. Incremental change is not enough for the challenges we face.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof leadership[0] | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-orchid/10 border border-aura-orchid/20 text-aura-orchid text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-orchid mr-2" />
              Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building the Future of{' '}
              <span className="gradient-text">Sustainable Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              We&apos;re a team of scientists, engineers, and operators united by a
              mission to make biomanufacturing carbon-negative.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Leadership Team</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="card text-center group w-64 cursor-pointer hover:border-aura-mint/30 transition-colors"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-aura-mint/20 to-aura-orchid/20 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold gradient-text">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-aura-mint text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                <span className="text-xs text-white/30 group-hover:text-aura-mint/60 transition-colors">Click to read more</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section-padding bg-gradient-to-b from-transparent via-aura-orchid/5 to-transparent">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Advisors and Mentors</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="card text-center group w-64">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-aura-orchid/20 to-aura-blush/20 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold gradient-text">
                    {advisor.name.replace(/,.*/, '').split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{advisor.name}</h3>
                <p className="text-aura-orchid text-sm mb-1">{advisor.role}</p>
                {advisor.affiliation && <p className="text-white/40 text-xs mb-3">{advisor.affiliation}</p>}
                {advisor.bio && <p className="text-white/60 text-sm">{advisor.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellows */}
      <section className="section-padding bg-gradient-to-b from-transparent via-aura-azure/5 to-transparent">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Fellows</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {fellows.map((fellow, index) => (
              <div key={index} className="card text-center group w-64">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-aura-azure/20 to-aura-mint/20 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold gradient-text">
                    {fellow.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{fellow.name}</h3>
                <p className="text-aura-azure text-sm mb-3">{fellow.role}</p>
                {fellow.bio && <p className="text-white/60 text-sm">{fellow.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide how we work and the impact we strive to create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card group text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-orchid/20 to-aura-blush/20 flex items-center justify-center text-aura-orchid mb-4 group-hover:scale-110 transition-transform mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aura-orchid/10 via-aura-blush/10 to-aura-mint/10 border border-white/10 p-8 md:p-16">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-white/70 mb-6">
                  We&apos;re always looking for exceptional people who share our passion
                  for sustainable technology. If you want to make a real impact on
                  climate change, we&apos;d love to hear from you.
                </p>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-aura-mint/20 to-aura-orchid/20 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-8 bg-gradient-to-br from-aura-azure/20 to-aura-blush/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-16 bg-gradient-to-br from-aura-mint/30 to-aura-azure/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-aura-dark border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-aura-mint/20 to-aura-orchid/20 border border-white/10 flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">
                {selectedMember.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
            <p className="text-aura-mint text-sm mb-6">{selectedMember.role}</p>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              {selectedMember.fullBio.split('\n\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <a
              href={selectedMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/40 hover:text-aura-azure transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  )
}
