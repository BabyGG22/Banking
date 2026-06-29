'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

export function HeroSection() {
  return (
    <section className="relative bg-brand-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 opacity-95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20"
            >
              <CheckCircle className="w-4 h-4 text-brand-300" />
              Trusted by millions worldwide
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Banking for the
              <span className="text-brand-300"> Modern World</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-white/70 leading-relaxed max-w-lg"
            >
              Experience premium banking with cutting-edge technology, unmatched security, and personalized financial solutions designed for your success.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-900 rounded-xl font-semibold hover:bg-brand-50 transition-all group"
              >
                Open an Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-white/60 text-sm mt-1">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$500B+</div>
                <div className="text-white/60 text-sm mt-1">Assets Under Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-white/60 text-sm mt-1">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Professional woman using mobile banking"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-brand-900/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Total Balance</span>
                  <span className="text-xs text-brand-600 font-medium bg-brand-50 px-2 py-0.5 rounded-full">+2.4%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">$48,295.00</div>
                <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
