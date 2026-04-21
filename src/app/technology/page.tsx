import Link from 'next/link'

const applications = [
  { name: 'Enzymes', description: 'Industrial and specialty enzymes at scale' },
  { name: 'Food Proteins', description: 'Sustainable alternative proteins' },
  { name: 'Therapeutics', description: 'Biopharmaceutical production' },
  { name: 'Biomaterials', description: 'Next-gen sustainable materials' },
]

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



export default function Technology() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-azure/10 border border-aura-azure/20 text-aura-azure text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-azure mr-2" />
              Photosynthetic Biomanufacturing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Carbon-Negative Biomanufacturing that <span className="gradient-text">Drives Down Costs</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              We use photosynthetic microbes to convert light and CO2 into high-value
              enzymes. Through patented genetic modifications, we enable radically lower
              production costs compared to conventional precision fermentation.
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
                proteins at scale.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-aura-dark-green to-aura-dark border border-white/10 p-6">
                {/* Absorption spectrum visualization */}
                <svg viewBox="0 0 300 280" className="w-full h-auto">
                  <defs>
                    <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8ef9d5" />
                      <stop offset="40%" stopColor="#5fc2f0" />
                      <stop offset="70%" stopColor="#e2addb" />
                      <stop offset="100%" stopColor="#f5c7be" />
                    </linearGradient>
                  </defs>
                  {/* Axes */}
                  <line x1="45" y1="220" x2="275" y2="220" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="45" y1="20" x2="45" y2="220" stroke="white" strokeWidth="1" opacity="0.3" />
                  {/* Absorption curve — peaks well within bounds */}
                  <path
                    d="M45 210 Q65 190 85 195 Q105 200 125 160 Q145 120 165 130 Q185 85 205 95 Q225 140 245 195 Q260 210 275 205"
                    fill="none"
                    stroke="url(#spectrumGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  {/* Peak markers */}
                  <circle cx="165" cy="130" r="5" fill="#8ef9d5" className="animate-pulse" />
                  <circle cx="205" cy="95" r="5" fill="#e2addb" className="animate-pulse" />
                  {/* Axis labels */}
                  <text x="160" y="245" textAnchor="middle" fill="white" opacity="0.5" fontSize="11">Wavelength (nm)</text>
                  <text x="14" y="120" textAnchor="middle" fill="white" opacity="0.5" fontSize="11" transform="rotate(-90 14 120)">Absorption</text>
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
              <div key={index} className="card group text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-mint/20 to-aura-azure/20 flex items-center justify-center text-aura-mint mb-4 group-hover:scale-110 transition-transform mx-auto">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-white/60">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Applications Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Endless <span className="gradient-text">Applications</span>
              </h2>
              <p className="text-white/60 mb-8">
                Our platform technology enables production of diverse protein products
                across multiple industries, all with the same carbon-negative benefits.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-aura-mint mb-1">{app.name}</h4>
                    <p className="text-sm text-white/60">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-white/10 overflow-hidden">
                <img
                  src="/Prochlorococcus_marinus.jpg"
                  alt="Prochlorococcus marinus"
                  className="w-full h-full object-cover"
                />
              </div>
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
