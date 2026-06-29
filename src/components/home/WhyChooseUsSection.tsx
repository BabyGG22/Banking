'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Users, value: '50M+', label: 'Active Users' },
  { icon: TrendingUp, value: '$500B+', label: 'Assets Managed' },
  { icon: Award, value: '150+', label: 'Countries' },
  { icon: Clock, value: '99.99%', label: 'Uptime' },
]

const features = [
  'Monitor bills & subscriptions to maintain control of your budget',
  'Accelerate savings with automated tools to help your money grow',
  'Manage your rewards and discover new perks',
  'Send and transfer money on your time',
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800"
              >
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-brand-700 dark:text-brand-400" />
                </div>
                <h3 className="text-3xl font-extrabold text-brand-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Split Section — US Bank style */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-soft-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Person managing finances on phone"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Banking smarter is{' '}
              <span className="text-brand-700 dark:text-brand-400">easier than ever</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Unlock more benefits and rewards — track your money, automate your savings, and take full control of your financial life with BOJ.
            </p>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-700 hover:bg-brand-800 text-white rounded-xl font-semibold transition-all"
              >
                Open an Account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-700 text-brand-700 dark:text-brand-400 dark:border-brand-400 rounded-xl font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {['ISO 27001 Certified', 'PCI DSS Compliant', 'SOC 2 Type II', 'GDPR Compliant'].map(
            (badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
              >
                <div className="w-2 h-2 bg-brand-600 rounded-full" />
                <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{badge}</span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
