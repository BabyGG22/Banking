'use client'

import { motion } from 'framer-motion'
import { CreditCard, TrendingUp, Lock, Smartphone, Send, PieChart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const cardProducts = [
  {
    title: 'BOJ Visa Debit',
    subtitle: 'Free with every account',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    tag: 'Most Popular',
    tagColor: 'bg-brand-700',
    description: 'Instant access to your funds with zero monthly fees.',
  },
  {
    title: 'BOJ Mastercard Credit',
    subtitle: '2% cashback on all purchases',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80',
    tag: 'Best Rewards',
    tagColor: 'bg-emerald-700',
    description: 'Earn while you spend with our premium rewards card.',
  },
  {
    title: 'BOJ Business Card',
    subtitle: 'Built for entrepreneurs',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
    tag: 'Business',
    tagColor: 'bg-slate-700',
    description: 'Separate business finances with exclusive perks.',
  },
]

const solutions = [
  { icon: CreditCard, title: 'Credit Cards', href: '#' },
  { icon: Send, title: 'Checking', href: '#' },
  { icon: TrendingUp, title: 'Savings', href: '#' },
  { icon: PieChart, title: 'Investing', href: '#' },
  { icon: Smartphone, title: 'Mobile Banking', href: '#' },
  { icon: Lock, title: 'Security', href: '#' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

export function ServicesSection() {
  return (
    <section className="bg-white dark:bg-slate-900">

      {/* ── Card Product Showcase ── */}
      <div className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-400 mb-2">
              Our Card Products
            </p>
            <div className="w-10 h-0.5 bg-brand-700 dark:bg-brand-400 mb-6" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {cardProducts.map((card, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-soft hover:shadow-soft-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Tag */}
                  <span className={`absolute top-3 left-3 ${card.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {card.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-700 dark:text-brand-400 mb-2">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {card.description}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-400 hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Solutions Grid — US Bank Style ── */}
      <div className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              Solutions Designed to Work for You
            </p>
            <div className="w-10 h-0.5 bg-brand-700 dark:bg-brand-400 mb-10" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.a
                  key={index}
                  href={solution.href}
                  variants={item}
                  whileHover={{ y: -2 }}
                  className="flex flex-col items-start gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-soft transition-all duration-200 group"
                >
                  <Icon className="w-6 h-6 text-brand-700 dark:text-brand-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-brand-700 dark:text-brand-400">
                    {solution.title}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>

    </section>
  )
                }
