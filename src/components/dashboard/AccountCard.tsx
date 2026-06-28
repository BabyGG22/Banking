'use client'

import { motion } from 'framer-motion'
import { Account } from '@/types'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

interface AccountCardProps {
  account: Account
  isSelected?: boolean
  onClick?: () => void
}

export function AccountCard({ account, isSelected = false, onClick }: AccountCardProps) {
  const [showBalance, setShowBalance] = useState(true)

  const getCardGradient = (type: Account['type']) => {
    switch (type) {
      case 'checking':
        return 'from-brand-600 to-brand-800'
      case 'savings':
        return 'from-emerald-500 to-emerald-700'
      case 'investment':
        return 'from-purple-500 to-purple-700'
      default:
        return 'from-slate-600 to-slate-800'
    }
  }

  const getTypeLabel = (type: Account['type']) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-brand-400 shadow-soft-lg' : 'hover:shadow-soft-lg'
      }`}
    >
      {/* Card Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCardGradient(account.type)}`} />

      {/* Card Content */}
      <div className="relative p-6 text-white space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-medium">{getTypeLabel(account.type)}</p>
            <h3 className="text-lg font-semibold">{account.name}</h3>
          </div>
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
            {account.type === 'checking' && <span>💳</span>}
            {account.type === 'savings' && <span>💰</span>}
            {account.type === 'investment' && <span>📈</span>}
          </div>
        </div>

        {/* Balance */}
        <div className="space-y-2">
          <p className="text-white/80 text-sm">Balance</p>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-tight">
              {showBalance ? `$${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowBalance(!showBalance)
              }}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {showBalance ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <span className="text-sm text-white/80">{account.accountNumber}</span>
          <span className="text-xs text-white/60">Exp: 12/26</span>
        </div>
      </div>
    </motion.div>
  )
}
