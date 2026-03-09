import Link from 'next/link'

const advantages = [
  {
    title: 'Photosynthetic Production',
    description: 'Our engineered cyanobacteria use CO2 and light as their primary energy source, eliminating the need for expensive sugar feedstocks that traditional fermentation requires.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Enhanced Protein Expression',
    description: 'Through precise manipulations to the cyanobacteria circadian clock, we have achieved 30-50x improvements in recombinant protein expression compared to wild-type strains.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Carbon Negative Process',
    description: 'Protein we produce captures and sequesters CO2, permitting our manufacturing process to actively fight climate change.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Supply Chains',
    description: "Our platform's simple inputs permit scale-up without complex global supply chains.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Strain Engineering',
    description: 'We engineer our cyanobacteria strains with optimized gene expression systems, enhanced secretion pathways, and improved photosynthetic efficiency.',
  },
  {
    number: '02',
    title: 'Cultivation',
    description: 'Cells are grown in our proprietary photobioreactors that maximize light exposure and CO2 uptake while maintaining optimal growth conditions.',
  },
  {
    number: '03',
    title: 'Expression',
    description: 'Using light-controlled promoters and optimized expression systems, our cells produce target proteins at unprecedented yields.',
  },
  {
    number: '04',
    title: 'Purification',
    description: 'Engineered secretion systems simplify downstream processing. Standard chromatography methods deliver pharmaceutical-grade purity.',
  },
]

const comparison = [
  { feature: 'Carbon Feedstock', aura: 'CO2 (free)', ecoli: 'Glucose ($$$)' },
  { feature: 'Energy Source', aura: 'Sunlight', ecoli: 'Electricity' },
  { feature: 'Carbon Footprint', aura: 'Negative', ecoli: 'Positive' },
  { feature: 'Production Cost', aura: 'Competitive', ecoli: 'Baseline' },
  { feature: 'Scale-up Risk', aura: 'Low', ecoli: 'Medium' },
  { feature: 'Protein Yields', aura: '30-50x improved', ecoli: 'Standard' },
]

export default function Technology() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-azure/10 border border-aura-azure/20 text-aura-azure text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-azure mr-2" />
              Platform Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Engineering <span className="gradient-text">Photosynthesis</span> for Protein Production
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Our cyanobacteria biomanufacturing platform combines billions of years
              of evolutionary optimization with cutting-edge synthetic biology to
              achieve unprecedented protein yields.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cyanobacteria */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="gradient-text">Cyanobacteria</span>?
              </h2>
              <p className="text-white/70 mb-6">
                Cyanobacteria are nature&apos;s original photosynthetic factories. These
                remarkable microorganisms have been converting sunlight and CO2 into
                complex molecules for over 3.5 billion years.
              </p>
              <p className="text-white/70 mb-6">
                Unlike E. coli and yeast, which require expensive sugar feedstocks,
                cyanobacteria grow on sunlight and CO2 alone. This fundamental
                difference enables truly sustainable, cost-effective biomanufacturing.
              </p>
              <p className="text-white/70">
                Our proprietary strains have been engineered to redirect their
                photosynthetic power toward producing high-value recombinant
                proteins at industrial scale.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-aura-dark-green to-aura-dark border border-white/10 p-8">
                {/* Absorption spectrum visualization */}
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    <linearGradient id="spectrumGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#8ef9d5" />
                      <stop offset="25%" stopColor="#5fc2f0" />
                      <stop offset="50%" stopColor="#d4fdee" />
                      <stop offset="75%" stopColor="#e2addb" />
                      <stop offset="100%" stopColor="#f5c7be" />
                    </linearGradient>
                  </defs>
                  {/* Stylized absorption spectrum */}
                  <path
                    d="M30 250 Q60 180, 90 200 Q120 220, 150 100 Q180 50, 210 150 Q240 200, 270 180"
                    fill="none"
                    stroke="url(#spectrumGradient)"
                    strokeWidth="3"
                    className="opacity-80"
                  />
                  {/* Peak markers */}
                  <circle cx="150" cy="100" r="6" fill="#8ef9d5" className="animate-pulse" />
                  <circle cx="210" cy="150" r="5" fill="#e2addb" className="animate-pulse" />
                  {/* Axis */}
                  <line x1="30" y1="260" x2="270" y2="260" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="30" y1="50" x2="30" y2="260" stroke="white" strokeWidth="1" opacity="0.3" />
                  {/* Labels */}
                  <text x="150" y="285" textAnchor="middle" fill="white" opacity="0.5" fontSize="12">Wavelength (nm)</text>
                  <text x="15" y="155" textAnchor="middle" fill="white" opacity="0.5" fontSize="12" transform="rotate(-90 15 155)">Absorption</text>
                </svg>
                <p className="text-center text-sm text-white/40 mt-4">
                  Cyanobacteria absorption spectrum visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section-padding bg-gradient-to-b from-transparent via-aura-mint/5 to-transparent">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Platform <span className="gradient-text">Advantages</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our technology combines the best of nature with advanced engineering
              to deliver unmatched production capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-mint/20 to-aura-azure/20 flex items-center justify-center text-aura-mint mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-white/60">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From strain engineering to final product, every step is optimized
              for efficiency, sustainability, and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card h-full">
                  <div className="text-5xl font-bold gradient-text opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-aura-mint/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Aura vs. <span className="gradient-text">Traditional</span> Fermentation
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              See how our cyanobacteria platform compares to conventional E. coli
              fermentation systems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-aura-mint">Aura Platform</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/50">E. coli</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-t border-white/5">
                      <td className="px-6 py-4 text-sm text-white/70">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-aura-mint font-medium">{row.aura}</td>
                      <td className="px-6 py-4 text-center text-sm text-white/50">{row.ecoli}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aura-azure/10 via-aura-mint/10 to-aura-orchid/10 border border-white/10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Our Technology?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s explore how our platform can transform your biomanufacturing
              needs while reducing your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#partnerships" className="btn-primary">
                Discuss Partnership
              </Link>
              <Link href="/impact" className="btn-secondary">
                View Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
