import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  company: [
    { href: '/technology', label: 'Technology' },
    { href: '/team', label: 'Team' },
    { href: '/impact', label: 'Impact' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/contact#partnerships', label: 'Partnerships' },
    { href: '/contact#investors', label: 'Investors' },
    { href: '/contact#newsletter', label: 'Newsletter' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-aura-dark/50 backdrop-blur-sm">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/Aura_Logo.png"
                alt="Aura Life Science"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm max-w-md mb-6">
              Just as the lightbulb allowed factories to work the night shift, we&apos;ve bioengineered cyanobacteria to work around the clock, converting light, CO2, and salts into the world&apos;s inputs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aura-life-science/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-aura-mint hover:border-aura-mint/50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-aura-mint text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-aura-mint text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            {new Date().getFullYear()} Aura Life Science. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
