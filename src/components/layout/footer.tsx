import Link from 'next/link'
import { brands } from '@/data/brands'

const footerLinks = {
  digitalfish: [
    { name: 'Brand Identity', href: '/services/brand-identity' },
    { name: 'UI/UX Design', href: '/services/ui-ux' },
    { name: 'Website Design', href: '/services/websites' },
    { name: 'Figma Services', href: '/services/figma' },
  ],
  personal: [
    { name: 'About Matt', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/portfolio/case-studies' },
    { name: 'Process', href: '/process' },
  ],
  connect: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Dribbble', href: '#' },
    { name: 'Figma Community', href: '#' },
    { name: 'Email', href: 'mailto:hello@digitalfish.design' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-digitalfish-primary">Digital</span>
              <span className="text-matt-primary">Fish</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {brands.digitalfish.description}
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Matt Hicks</p>
              <p className="gradient-text font-medium">Creative Designer & Developer</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.digitalfish.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks.personal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 DigitalFish & Matt Hicks. Crafted with passion.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}