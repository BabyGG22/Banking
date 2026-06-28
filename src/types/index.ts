// Types for dashboard data

export interface Account {
  id: string
  name: string
  type: 'checking' | 'savings' | 'investment'
  balance: number
  lastUpdated: Date
  accountNumber: string
}

export interface Transaction {
  id: string
  description: string
  amount: number
  type: 'debit' | 'credit'
  date: Date
  category: string
  status: 'completed' | 'pending' | 'failed'
  icon: string
}

export interface Card {
  id: string
  type: 'credit' | 'debit'
  last4: string
  holder: string
  expiryMonth: number
  expiryYear: number
  isActive: boolean
  cardNetwork: 'visa' | 'mastercard' | 'amex'
}

export interface SavingsGoal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date
  category: string
  icon: string
}

export interface Investment {
  id: string
  name: string
  symbol: string
  shares: number
  purchasePrice: number
  currentPrice: number
  changePercent: number
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'warning' | 'error' | 'info'
  date: Date
  read: boolean
}

export interface SpendingData {
  category: string
  amount: number
  percentage: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  joinDate: Date
  preferredCurrency: string
}
