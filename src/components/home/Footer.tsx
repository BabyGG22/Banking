'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Checking', href: '#' },
    { label: 'Savings', href: '#' },
    { label: 'Investments', href: '#' },
    { label: 'Cards', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Security', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
}

const socialLinks = [
  { label: 'Twitter', href: '#', icon: '𝕏' },
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: '📷' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 pb-16 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold group-hover:text-brand-400 transition-colors">
                BOJ
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium banking for the modern world. Secure, innovative, and trusted by millions.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:support@bankofjuly.com" className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>support@bankofjuly.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5" />
                  <span>123 Finance Avenue, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for financial insights and updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button className="px-4 py-2 bg-brand-600 hover:bg-brand-700 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-slate-800">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Bank Of July. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
