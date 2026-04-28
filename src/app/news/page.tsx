import Image from 'next/image'

const milestones = [
  {
    year: '2026',
    items: [
      {
        title: 'Aura Selected for Rhodium Scientific Prize for Advancing Space Biotechnology',
        description: 'Aura was selected for the Rhodium Scientific Prize for Advancing Space Biotechnology and will be collaborating with Rhodium Scientific to rigorously evaluate our technology for space applications.',
        tags: ['Recognition'],
      },
      {
        title: 'Aura Selected as VentureCat Semifinalist',
        description: 'Aura was selected as a semifinalist for VentureCat, Northwestern University\'s student startup competition.',
        tags: ['Competition'],
        link: 'https://www.venturecat.northwestern.edu/about/2026-semifinalists.html',
      },
      {
        title: 'Aura Advances to Semifinals at Rice Business Plan Competition',
        description: 'Aura advances as one of 15 teams globally to the semifinals at the Rice Business Plan Competition.',
        tags: ['Competition'],
        image: '/RBPC.jpg',
      },
      {
        title: 'Aura Selected for Rice Business Plan Competition',
        description: 'Aura was selected from over 550 applications globally to compete in the Rice Business Plan Competition, one of the world\'s largest and richest graduate student startup competitions.',
        tags: ['Competition'],
        link: 'https://rbpc.rice.edu/2026/2026-startups',
      },
      {
        title: 'Aura Selected for New Venture Challenge',
        description: 'Aura is selected to participate in the New Venture Challenge at the University of Chicago Polsky Center.',
        tags: ['Competition'],
      },
      {
        title: 'Jake Selected as Chain Reaction Innovations Fellowship Finalist',
        description: 'Jacob Bhoi, CSO and Co-Founder, is named a finalist for the Chain Reaction Innovations Fellowship at Argonne National Laboratory.',
        tags: ['Recognition'],
        link: 'https://chainreaction.anl.gov/2026/03/05/finalists-chosen-for-cris-cohort-2026/',
      },
      {
        title: 'Aura Sponsors Inaugural iFAB Biomanufacturing Summit',
        description: 'Aura Life Science is proud to be a sponsor of the inaugural iFAB Biomanufacturing Summit, supporting the advancement of biomanufacturing innovation and industry collaboration.',
        tags: ['Milestone'],
        link: 'https://ifabtechhub.org/event/2026-ifab-biomanufacturing-summit/',
      },
      {
        title: 'Invited to Participate in The Raise',
        description: 'Aura is invited to participate in The Raise, a premier startup competition presented by Long Jump.',
        tags: ['Recognition'],
      },
      {
        title: 'First Investment — $100,000 LabStart Phase 2',
        description: 'Aura secures its first investment of $100,000 through the LabStart Phase 2 program.',
        tags: ['Funding'],
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        title: 'Aura Places Tile on the Member Wall at mHUB',
        description: 'Aura celebrated completing the 6-month mPower Energy and Sustainability program at mHub with Co-Founders, Emilio and Jake, placing the Aura Life Science tile on the mHub member wall and pitching to the mHub community!',
        tags: ['Milestone'],
        image: '/mpower.png',
      },
      {
        title: '2025 Alchemist Chicago',
        description: 'Aura is accepted into the Alchemist Accelerator Chicago cohort, supported by the Polsky Center for Entrepreneurship and Innovation at the University of Chicago.',
        tags: ['Accelerator'],
        link: 'https://polsky.uchicago.edu/2025/10/20/meet-the-inaugural-alchemist-chicago-cohort/',
      },
      {
        title: 'Emilio Selected as LabStart Fellow',
        description: 'Emilio Balderas, CEO and Co-Founder, is selected as a LabStart Fellow, recognizing his leadership in deep tech entrepreneurship.',
        tags: ['Recognition'],
        link: 'https://www.labstart.co/blog/twenty-four-innovators-join-labstarts-exclusive-2025-entrepreneurial-fellowship-cohort',
      },
      {
        title: 'Completed Option Agreement with Vanderbilt University',
        description: 'Aura completes an option agreement with Vanderbilt University, securing access to foundational intellectual property underlying the platform.',
        tags: ['IP'],
      },
      {
        title: '2025 mPower Program — Energy and Sustainability',
        description: 'Aura is accepted into the mPower Program at mHub, focused on energy and sustainability innovation.',
        tags: ['Accelerator'],
        link: 'https://www.mhubchicago.com/blog/meet-the-2025-mpower-cohort',
      },
      {
        title: 'Aura Life Science Founded',
        description: 'Emilio Balderas and Jacob Bhoi co-found Aura Life Science to commercialize breakthrough cyanobacteria biomanufacturing technology.',
        tags: ['Milestone'],
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'Core Patent Protected by USPTO',
        description: 'The foundational intellectual property underlying Aura\'s biomanufacturing platform receives patent protection from the United States Patent and Trademark Office.',
        tags: ['IP'],
      },
    ],
  },
]

const tagColors: Record<string, string> = {
  Funding: 'bg-aura-mint/10 border-aura-mint/30 text-aura-mint',
  Recognition: 'bg-aura-azure/10 border-aura-azure/30 text-aura-azure',
  Competition: 'bg-aura-orchid/10 border-aura-orchid/30 text-aura-orchid',
  Milestone: 'bg-aura-blush/10 border-aura-blush/30 text-aura-blush',
  Accelerator: 'bg-aura-mint/10 border-aura-mint/30 text-aura-mint',
  IP: 'bg-aura-azure/10 border-aura-azure/30 text-aura-azure',
  Research: 'bg-aura-orchid/10 border-aura-orchid/30 text-aura-orchid',
}

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-mint/10 border border-aura-mint/20 text-aura-mint text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-mint mr-2" />
              News & Milestones
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Our <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              From foundational research to company milestones — tracking the progress
              of Aura Life Science.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((group) => (
                <div key={group.year}>
                  {/* Year marker */}
                  <div className="relative flex items-center mb-10">
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-aura-dark border-2 border-aura-mint flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-aura-mint">{group.year}</span>
                    </div>
                    <div className="ml-20 md:ml-0 md:pl-[calc(50%+2rem)]">
                      <span className="text-3xl font-bold gradient-text">{group.year}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-6">
                    {group.items.map((item, i) => (
                      <div key={i} className="relative flex items-start gap-6 md:gap-0">
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-aura-mint/60 border border-aura-mint mt-5 z-10" />

                        {/* Card — alternates sides on desktop */}
                        <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                          i % 2 === 0
                            ? 'md:mr-auto md:pr-8'
                            : 'md:ml-auto md:pl-8'
                        }`}>
                          <div className="card">
                            {'image' in item && item.image && (
                              <div className="mb-4 -mx-6 -mt-6 rounded-t-2xl overflow-hidden">
                                <Image src={item.image} alt={item.title} width={800} height={500} className="w-full object-contain" />
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-2 py-0.5 rounded-full text-xs border ${tagColors[tag] ?? 'bg-white/5 border-white/20 text-white/60'}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-white/60 text-sm">{item.description}</p>
                            {'link' in item && item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-3 text-aura-mint text-sm hover:text-aura-azure transition-colors"
                              >
                                Read more
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
