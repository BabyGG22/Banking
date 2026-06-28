'use client'

import { motion } from 'framer-motion'
import { CreditCard, TrendingUp, Lock, Smartphone, Send, PieChart } from 'lucide-react'

const services = [
  {
    icon: CreditCard,
    title: 'Digital Wallet',
    description: 'Store and manage all your cards securely in one place with instant access.',
  },
  {
    icon: Send,
    title: 'Instant Transfers',
    description: 'Send money to anyone, anywhere, anytime with just a few taps.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Tools',
    description: 'Build wealth with our comprehensive investment portfolio management.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Banking',
    description: 'Bank on the go with our powerful mobile app available 24/7.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Your money is protected with military-grade encryption technology.',
  },
  {
    icon: PieChart,
    title: 'Smart Analytics',
    description: 'Get insights into your spending with detailed financial analytics.',
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

export function ServicesSection() {
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
            Comprehensive Banking Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need for modern banking, all in one platform
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent dark:from-brand-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
