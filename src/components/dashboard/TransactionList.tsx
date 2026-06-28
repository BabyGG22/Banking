'use client'

import { motion } from 'framer-motion'
import { Transaction } from '@/types'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

interface TransactionListProps {
  transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  return (
    <div className="space-y-2">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        {transactions.map((transaction) => (
          <motion.div key={transaction.id} variants={item}>
            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group cursor-pointer">
              {/* Left */}
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  transaction.type === 'debit'
                    ? 'bg-red-100 dark:bg-red-900/30'
                    : 'bg-green-100 dark:bg-green-900/30'
                }`}>
                  {transaction.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {transaction.category}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === 'debit'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-green-600 dark:text-green-400'
                }`}>
                  {transaction.type === 'debit' ? '-' : '+'}
                  ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {transaction.date.toLocaleDateString()}
                </p>
              </div>

              {/* Icon */}
              {transaction.type === 'debit' ? (
                <ArrowUpRight className="w-5 h-5 text-red-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              ) : (
                <ArrowDownLeft className="w-5 h-5 text-green-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
