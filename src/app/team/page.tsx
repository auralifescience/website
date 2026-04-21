import Link from 'next/link'

const leadership = [
  {
    name: 'Emilio Balderas',
    role: 'CEO & Co-Founder',
    bio: 'Emilio leads Aura\'s vision and strategy, driving the company\'s mission to make biomanufacturing carbon-negative. He brings entrepreneurial and operational expertise to building Aura\'s platform from the ground up.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/emiliobalderas/',
  },
  {
    name: 'Jacob Bhoi',
    role: 'CSO & Co-Founder',
    bio: 'Jacob leads Aura\'s scientific direction, pioneering the use of cyanobacteria as a next-generation biomanufacturing chassis. His research focuses on engineering photosynthetic organisms for high-yield protein and compound production.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/jacob-bhoi/',
  },
  {
    name: 'AH Hassaballah',
    role: 'COO',
    bio: '',
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
              <div key={index} className="card text-center group w-64">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-aura-mint/20 to-aura-orchid/20 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold gradient-text">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-aura-mint text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/40 hover:text-aura-azure transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
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
    </>
  )
}
