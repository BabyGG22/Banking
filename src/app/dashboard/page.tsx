'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/home/Footer'
import { AccountCard } from '@/components/dashboard/AccountCard'
import { TransactionList } from '@/components/dashboard/TransactionList'
import { SpendingChart } from '@/components/dashboard/SpendingChart'
import { CardDisplay } from '@/components/dashboard/CardDisplay'
import { mockUser, mockAccounts, mockTransactions, mockCards, mockSpendingData, mockSavingsGoals } from '@/lib/mockData'
import { Bell, Send, Plus, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const [selectedAccount, setSelectedAccount]= useState(0)
}

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

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 dark:from-slate-900 via-white dark:via-slate-800 to-slate-50 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Welcome back, {mockUser.name.split(' ')[0]}!
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <button className="relative p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            <motion.button
              variants={item}
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white">Send Money</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Transfer funds</p>
              </div>
            </motion.button>

            <motion.button
              variants={item}
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white">Add Card</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">New payment method</p>
              </div>
            </motion.button>

            <motion.button
              variants={item}
              className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white">Invest</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Grow your wealth</p>
              </div>
            </motion.button>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-3 gap-8 mb-8"
          >
            {/* Left Column - Accounts & Cards */}
            <motion.div variants={item} className="lg:col-span-1 space-y-6">
              {/* Accounts */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Accounts</h2>
                <div className="space-y-3">
                  {mockAccounts.map((acc, idx) => (
                    <AccountCard
                      key={acc.id}
                      account={acc}
                      isSelected={selectedAccount === idx}
                      onClick={() => setSelectedAccount(idx)}
                    />
                  ))}
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Cards</h2>
                <div className="space-y-3">
                  {mockCards.map((card) => (
                    <CardDisplay key={card.id} card={card} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center Column - Transactions */}
            <motion.div variants={item} className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Transactions</h2>
                  <a href="#" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
                    View all
                  </a>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                  <TransactionList transactions={mockTransactions.slice(0, 5)} />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Analytics */}
            <motion.div variants={item} className="lg:col-span-1 space-y-6">
              {/* Spending */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Spending</h2>
                <SpendingChart data={mockSpendingData} />
              </div>
            </motion.div>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            variants={item}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Savings Goals</h2>
                <button className="text-sm text-brand-600 dark:text-brand-400 hover:underline">View all</button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {mockSavingsGoals.map((goal) => {
                  const progress = (goal.currentAmount / goal.targetAmount) * 100
                  return (
                    <motion.div
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-soft-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{goal.icon}</div>
                        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-100 dark:bg-brand-900/40 px-3 py-1 rounded-full">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{goal.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        ${goal.currentAmount.toLocaleString()} of ${goal.targetAmount.toLocaleString()}
                      </p>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-brand-500 to-brand-600 h-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
