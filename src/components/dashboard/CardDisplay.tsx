'use client'

import { motion } from 'framer-motion'
import { Card } from '@/types'
import { CreditCard } from 'lucide-react'

interface CardDisplayProps {
  card: Card
}

export function CardDisplay({ card }: CardDisplayProps) {
  const getCardGradient = (network: Card['cardNetwork']) => {
    switch (network) {
      case 'visa':
        return 'from-blue-600 to-blue-800'
      case 'mastercard':
        return 'from-red-600 to-orange-600'
      case 'amex':
        return 'from-green-700 to-emerald-900'
      default:
        return 'from-slate-600 to-slate-800'
    }
  }

  const getCardNetwork = (network: Card['cardNetwork']) => {
    return network.toUpperCase()
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className={`relative rounded-2xl overflow-hidden h-56 bg-gradient-to-br ${getCardGradient(
        card.cardNetwork
      )} shadow-soft-lg`}
    >
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/50" />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-white/50" />
      </div>

      {/* Card Content */}
      <div className="relative p-6 text-white h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CreditCard className="w-8 h-8" />
            <span className="font-semibold">{getCardNetwork(card.cardNetwork)}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            card.isActive ? 'bg-green-400' : 'bg-red-400'
          }`}>
            {card.isActive ? 'ACTIVE' : 'INACTIVE'}
          </div>
        </div>

        {/* Cardholder Name */}
        <div>
          <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Cardholder</p>
          <p className="text-xl font-semibold">{card.holder}</p>
        </div>

        {/* Card Number & Expiry */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Card Number</p>
            <p className="font-mono text-lg">•••• •••• •••• {card.last4}</p>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Expires</p>
            <p className="font-mono text-lg">
              {String(card.expiryMonth).padStart(2, '0')}/{card.expiryYear}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
