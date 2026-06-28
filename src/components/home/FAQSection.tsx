'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I open an account with Zenith Bank?',
    answer: 'Opening an account is simple and takes just 5 minutes. Download our mobile app or visit our website, click "Open Account," and follow the guided setup process. You\'ll need a valid ID and phone number.',
  },
  {
    question: 'Is my money safe with Zenith Bank?',
    answer: 'Yes, absolutely. Your deposits are protected by government insurance up to $250,000 per account. We also use military-grade encryption and multi-factor authentication for all transactions.',
  },
  {
    question: 'What are the fees for basic accounts?',
    answer: 'Our basic checking and savings accounts have no monthly maintenance fees. Some services like wire transfers or expedited card delivery may have nominal charges.',
  },
  {
    question: 'Can I transfer money internationally?',
    answer: 'Yes, we support international transfers to over 150 countries. Rates are competitive, and most transfers are completed within 1-2 business days.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'Visit our login page and click "Forgot Password." You\'ll receive a secure link via email to reset your password. For security, you may also be asked to verify your identity.',
  },
  {
    question: 'What customer support options are available?',
    answer: 'We offer 24/7 support via live chat, email, phone, and social media. Our average response time is under 2 minutes.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Find answers to common questions about our services and features
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={item}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-l-2 border-brand-300 dark:border-brand-600 ml-8 pl-6 py-4 text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
