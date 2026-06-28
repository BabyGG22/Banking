'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-50 dark:from-slate-900 via-white dark:via-slate-800 to-slate-50 dark:to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-200 dark:bg-brand-900/30 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Trusted by millions worldwide
            </motion.div>

            <motion.h1 variants={item} className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Banking for the
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent"> Modern World</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Experience premium banking with cutting-edge technology, unmatched security, and personalized financial solutions designed for your success.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Open an Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#" className="btn-ghost inline-flex items-center justify-center gap-2">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">50M+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">$500B+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Assets Under Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">150+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={item}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Phone Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-900 rounded-3xl shadow-2xl overflow-hidden transform perspective">
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-brand-50 to-blue-50 dark:from-brand-900/30 dark:to-blue-900/30 rounded-2xl border border-brand-200 dark:border-brand-800 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-brand-600 rounded-full mx-auto" />
                      <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-24 mx-auto" />
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-32 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
