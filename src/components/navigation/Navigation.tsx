'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

const navItems = [
  {
    label: 'Personal Banking',
    href: '#',
    submenu: [
      { label: 'Checking Accounts', href: '#' },
      { label: 'Savings Accounts', href: '#' },
      { label: 'Digital Wallet', href: '#' },
      { label: 'Mobile Banking', href: '#' },
    ],
  },
  {
    label: 'Business Banking',
    href: '#',
    submenu: [
      { label: 'Business Accounts', href: '#' },
      { label: 'Commercial Loans', href: '#' },
      { label: 'Payroll Solutions', href: '#' },
      { label: 'Treasury Services', href: '#' },
    ],
  },
  {
    label: 'Investments',
    href: '#',
    submenu: [
      { label: 'Investment Portfolio', href: '#' },
      { label: 'Wealth Management', href: '#' },
      { label: 'Retirement Plans', href: '#' },
      { label: 'ETFs & Funds', href: '#' },
    ],
  },
  {
    label: 'Loans',
    href: '#',
    submenu: [
      { label: 'Personal Loans', href: '#' },
      { label: 'Home Loans', href: '#' },
      { label: 'Auto Loans', href: '#' },
      { label: 'Business Loans', href: '#' },
    ],
  },
  {
    label: 'Cards',
    href: '#',
    submenu: [
      { label: 'Credit Cards', href: '#' },
      { label: 'Debit Cards', href: '#' },
      { label: 'Premium Cards', href: '#' },
      { label: 'Corporate Cards', href: '#' },
    ],
  },
  { label: 'Support', href: '#' },
  { label: 'About', href: '#' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              BOJ
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-soft-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/dashboard" className="hidden sm:inline-block btn-ghost">
              Log In
            </Link>
            <Link href="#" className="hidden sm:inline-block btn-primary">
              Open Account
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      className="w-full text-left px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />}
                    </button>

                    {/* Mobile Submenu */}
                    {item.submenu && openSubmenu === item.label && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-brand-300 dark:border-brand-600 pl-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <Link href="/dashboard" className="flex-1 btn-ghost text-center">
                    Log In
                  </Link>
                  <Link href="#" className="flex-1 btn-primary text-center">
                    Open Account
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
