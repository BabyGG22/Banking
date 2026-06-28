'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Zap, Fingerprint } from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock: Shield,
    title: 'Encrypted Banking',
    description: 'End-to-end encryption protects all your transactions and personal data.',
  },
  {
    icon: Zap,
    title: 'Fraud Protection',
    description: 'Real-time monitoring detects and prevents unauthorized transactions.',
  },
  {
    icon: Fingerprint,
    title: 'Multi-Factor Auth',
    description: 'Biometric and code-based authentication keeps your account secure.',
  },
  {
    icon: Eye,
    title: 'Privacy First',
    description: 'We never sell your data. Your privacy is our top priority.',
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
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 dark:from-slate-800 via-white dark:via-slate-900 to-brand-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={item}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Security You Can Trust
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Your financial security is our highest priority. We employ industry-leading security protocols and compliance standards.
              </p>
            </motion.div>

            <motion.div variants={container} className="space-y-4">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={item} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-400 border-r-brand-400"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-8 rounded-full border-2 border-transparent border-b-brand-500 border-l-brand-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center">
                      <Shield className="w-16 h-16 text-white" />
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
