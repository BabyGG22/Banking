'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50M+',
    label: 'Active Users',
  },
  {
    icon: TrendingUp,
    value: '$500B+',
    label: 'Assets Managed',
  },
  {
    icon: Award,
    value: '150+',
    label: 'Countries',
  },
  {
    icon: Clock,
    value: '99.99%',
    label: 'Uptime',
  },
]

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

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Bank Of July?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trusted by millions for unmatched reliability and innovation
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {['ISO 27001 Certified', 'PCI DSS Compliant', 'SOC 2 Type II', 'GDPR Compliant'].map(
            (badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <div className="w-2 h-2 bg-brand-500 rounded-full" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{badge}</span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
