import Link from 'next/link'



export default function Impact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aura-mint/10 border border-aura-mint/20 text-aura-mint text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-aura-mint mr-2" />
              Environmental Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Manufacturing That{' '}
              <span className="gradient-text">Heals the Planet</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Our carbon-negative biomanufacturing platform doesn&apos;t just reduce
              emissions. It actively removes CO2 from the atmosphere while producing
              high-value proteins.
            </p>
          </div>
        </div>
      </section>


      {/* Carbon Negative Explained */}
      <section className="section-padding bg-gradient-to-b from-transparent via-aura-mint/5 to-transparent">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Does <span className="gradient-text">Carbon-Negative</span> Mean?
              </h2>
              <p className="text-white/70 mb-6">
                Traditional biomanufacturing uses sugar feedstocks derived from
                agricultural crops. Growing these crops, processing them, and
                fermenting them releases significant CO2.
              </p>
              <p className="text-white/70 mb-6">
                Our cyanobacteria use photosynthesis to convert atmospheric CO2
                directly into proteins. The carbon in our products comes from the
                air, not from the ground.
              </p>
              <p className="text-white/70">
                For every kilogram of biomass we produce, we remove approximately
                1.6 kilograms of CO2 from the atmosphere. This makes our manufacturing
                process not just carbon-neutral, but actively carbon-negative.
              </p>
            </div>
            <div className="relative">
              {/* Carbon cycle visualization */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-aura-dark-green to-aura-dark border border-white/10 p-8 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Atmosphere */}
                  <text x="150" y="30" textAnchor="middle" fill="white" opacity="0.6" fontSize="14">Atmosphere</text>
                  <text x="150" y="50" textAnchor="middle" fill="#8ef9d5" fontSize="16" fontWeight="bold">CO2</text>

                  {/* Arrow down */}
                  <path d="M150 70 L150 100 M140 90 L150 100 L160 90" stroke="#8ef9d5" strokeWidth="2" fill="none" />

                  {/* Cyanobacteria */}
                  <circle cx="150" cy="150" r="50" fill="none" stroke="url(#impactGradient)" strokeWidth="3" />
                  <circle cx="150" cy="150" r="35" fill="#8ef9d5" opacity="0.2" />
                  <text x="150" y="145" textAnchor="middle" fill="white" fontSize="11">Cyanobacteria</text>
                  <text x="150" y="160" textAnchor="middle" fill="#8ef9d5" fontSize="10">Photosynthesis</text>

                  {/* Sun input */}
                  <circle cx="60" cy="150" r="20" fill="#fbbf24" opacity="0.3" />
                  <path d="M80 150 L100 150" stroke="#fbbf24" strokeWidth="2" />
                  <text x="60" y="185" textAnchor="middle" fill="#fbbf24" fontSize="11">Sunlight</text>

                  {/* Arrow down to product */}
                  <path d="M150 200 L150 230 M140 220 L150 230 L160 220" stroke="#5fc2f0" strokeWidth="2" fill="none" />

                  {/* Product */}
                  <rect x="110" y="240" width="80" height="30" rx="5" fill="#5fc2f0" opacity="0.3" stroke="#5fc2f0" strokeWidth="1" />
                  <text x="150" y="260" textAnchor="middle" fill="white" fontSize="12">Protein</text>

                  {/* Net negative label */}
                  <text x="230" y="150" fill="#8ef9d5" fontSize="11" fontWeight="bold">NET</text>
                  <text x="230" y="165" fill="#8ef9d5" fontSize="11" fontWeight="bold">NEGATIVE</text>

                  <defs>
                    <linearGradient id="impactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8ef9d5" />
                      <stop offset="100%" stopColor="#5fc2f0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aura-mint/10 via-aura-azure/10 to-aura-orchid/10 border border-white/10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the <span className="gradient-text">Climate Solution</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to transform your manufacturing processes and
              contribute to a carbon-negative future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#partnerships" className="btn-primary">
                Become a Partner
              </Link>
              <Link href="/technology" className="btn-secondary">
                Learn About Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
