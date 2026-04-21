import Link from 'next/link'


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cheaper',
    description: "Our platform's manufacturing costs are 4X cheaper than status quo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Carbon Negative',
    description: '-1.6 kg of CO₂ / kg of biomass.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Supply Chain Security',
    description: 'Abundant, cheap inputs enable secure, domestic supply chains.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Versatile',
    description: 'Proof-of-concept production of human pro-Insulin and luciferase.',
  },
]


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="container-custom mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-mint/10 border border-aura-mint/20 text-aura-mint text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-mint mr-2 animate-pulse" />
              Carbon-Negative Biomanufacturing
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The Future of{' '}
              <span className="gradient-text">Production</span>{' '}
              is Photosynthetic
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Our photosynthetic microbes achieve up to 50x higher protein yields than
              conventional photosynthetic approaches enabling photosynthetic biomanufacturing at scale.
              Cheaper. Carbon-negative. Versatile. Secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/technology" className="btn-primary">
                Explore Our Technology
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Cyanobacteria</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Ancient organisms. Revolutionary technology. Our platform harnesses
              3.5 billion years of photosynthetic evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card group text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-mint/20 to-aura-azure/20 flex items-center justify-center text-aura-mint mb-4 group-hover:scale-110 transition-transform mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-aura-mint/5 to-transparent">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Abundant Inputs<br />
              <span className="text-white/40 font-light">↓</span><br />
              <span className="gradient-text">Secure, Local Supply Chains</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our cyanobacteria convert light and CO₂ into high-value proteins like Proteinase K.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Left: Traditional fermentation */}
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-4">Traditional Fermentation</p>

              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Feedstocks</p>
                <p className="text-sm text-red-300">Corn, Soy, Sugar, etc.</p>
              </div>

              <div className="relative h-28 mb-5 overflow-hidden rounded-xl bg-white/3 border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 300 100" className="w-full h-full opacity-60">
                  {[
                    [30, 40], [80, 25], [140, 35], [200, 45], [260, 30],
                    [50, 70], [110, 60], [170, 75], [230, 65],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#f87171" opacity="0.7" />
                  ))}
                  {[
                    [30,40,260,30],[30,40,170,75],[80,25,230,65],[140,35,50,70],
                    [200,45,50,70],[80,25,170,75],[140,35,230,65],[260,30,110,60],
                  ].map(([x1,y1,x2,y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f87171" strokeWidth="1" opacity="0.3" />
                  ))}
                </svg>
                <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-red-400/70">Complex, multi-node supply chains (eg. fertilizer)</span>
              </div>

              <p className="text-sm text-white/50">Multiple points of failure. Geographically constrained. Vulnerable to price shocks and supply chain disruption.</p>
            </div>

            {/* Right: Aura approach */}
            <div className="rounded-2xl border border-aura-mint/30 bg-aura-mint/5 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-aura-mint mb-4">Aura — Photosynthetic</p>

              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Feedstock</p>
                <p className="text-sm text-aura-mint">Light and CO₂</p>
              </div>

              <div className="relative h-28 mb-5 overflow-hidden rounded-xl bg-white/3 border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 300 100" className="w-full h-full opacity-70">
                  <circle cx="150" cy="50" r="12" fill="none" stroke="#8ef9d5" strokeWidth="2" />
                  <circle cx="150" cy="50" r="5" fill="#8ef9d5" opacity="0.8" />
                  {[[100,30],[200,30],[100,70],[200,70],[150,15],[150,85]].map(([x,y],i) => (
                    <g key={i}>
                      <line x1="150" y1="50" x2={x} y2={y} stroke="#8ef9d5" strokeWidth="1.5" opacity="0.4" />
                      <circle cx={x} cy={y} r="3" fill="#8ef9d5" opacity="0.5" />
                    </g>
                  ))}
                </svg>
                <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-aura-mint/70">Local, distributed manufacturing</span>
              </div>

              <p className="text-sm text-white/50">Inputs available anywhere on Earth. Manufacture where you sell. Resilient by design.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aura-mint/10 via-aura-azure/10 to-aura-orchid/10 border border-white/10 p-8 md:p-16">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform{' '}
                <span className="gradient-text">Biomanufacturing</span>?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Partner with us to unlock the power of photosynthetic production.
                Whether you&apos;re exploring investment opportunities or seeking
                manufacturing partnerships, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#partnerships" className="btn-primary">
                  Explore Partnerships
                </Link>
                <Link href="/contact#investors" className="btn-secondary">
                  Investment Inquiries
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-aura-mint/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-aura-orchid/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  )
}
