'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'The Future of Digital Banking',
    excerpt: 'Explore how AI and machine learning are revolutionizing personal finance management.',
    date: 'June 15, 2024',
    category: 'Technology',
    image: '📱',
  },
  {
    title: 'Investment Strategies for 2024',
    excerpt: 'Expert tips on diversifying your portfolio and maximizing returns in today\'s market.',
    date: 'June 12, 2024',
    category: 'Investments',
    image: '📈',
  },
  {
    title: 'Smart Savings Goals: A Guide',
    excerpt: 'Learn how to set achievable financial goals and track your progress effectively.',
    date: 'June 10, 2024',
    category: 'Savings',
    image: '💰',
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

export function InsightsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 dark:from-slate-800 via-white dark:via-slate-900 to-white dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Financial Insights
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Stay informed with our latest financial news and expert insights
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image Area */}
              <div className="w-full h-48 bg-gradient-to-br from-brand-100 to-blue-100 dark:from-brand-900/30 dark:to-blue-900/30 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 bg-brand-100 dark:bg-brand-900/40 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{article.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-brand-600 dark:text-brand-400 font-medium text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
