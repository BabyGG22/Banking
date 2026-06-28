import { Account, Transaction, Card, SavingsGoal, Investment, Notification, User } from '@/types'

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '👤',
  joinDate: new Date('2022-01-15'),
  preferredCurrency: 'USD',
}

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Premium Checking',
    type: 'checking',
    balance: 12450.75,
    lastUpdated: new Date(),
    accountNumber: '****5678',
  },
  {
    id: '2',
    name: 'High-Yield Savings',
    type: 'savings',
    balance: 45230.20,
    lastUpdated: new Date(),
    accountNumber: '****4321',
  },
  {
    id: '3',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 127850.00,
    lastUpdated: new Date(),
    accountNumber: '****8765',
  },
]

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Whole Foods Market',
    amount: 145.32,
    type: 'debit',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    category: 'Groceries',
    status: 'completed',
    icon: '🛒',
  },
  {
    id: '2',
    description: 'Salary Deposit',
    amount: 5000.00,
    type: 'credit',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    category: 'Income',
    status: 'completed',
    icon: '💼',
  },
  {
    id: '3',
    description: 'Amazon Purchase',
    amount: 89.99,
    type: 'debit',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    category: 'Shopping',
    status: 'completed',
    icon: '📦',
  },
  {
    id: '4',
    description: 'Netflix Subscription',
    amount: 15.99,
    type: 'debit',
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    category: 'Entertainment',
    status: 'completed',
    icon: '🎬',
  },
  {
    id: '5',
    description: 'Gym Membership',
    amount: 49.99,
    type: 'debit',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    category: 'Fitness',
    status: 'completed',
    icon: '💪',
  },
  {
    id: '6',
    description: 'Gas Station',
    amount: 52.50,
    type: 'debit',
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    category: 'Transportation',
    status: 'completed',
    icon: '⛽',
  },
]

export const mockCards: Card[] = [
  {
    id: '1',
    type: 'credit',
    last4: '4242',
    holder: 'John Doe',
    expiryMonth: 12,
    expiryYear: 2025,
    isActive: true,
    cardNetwork: 'visa',
  },
  {
    id: '2',
    type: 'debit',
    last4: '5555',
    holder: 'John Doe',
    expiryMonth: 8,
    expiryYear: 2026,
    isActive: true,
    cardNetwork: 'mastercard',
  },
]

export const mockSavingsGoals: SavingsGoal[] = [
  {
    id: '1',
    name: 'Vacation to Europe',
    targetAmount: 5000,
    currentAmount: 3250,
    deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
    category: 'Travel',
    icon: '✈️',
  },
  {
    id: '2',
    name: 'New Car',
    targetAmount: 35000,
    currentAmount: 12500,
    deadline: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    category: 'Vehicle',
    icon: '🚗',
  },
  {
    id: '3',
    name: 'Home Renovation',
    targetAmount: 20000,
    currentAmount: 8750,
    deadline: new Date(Date.now() + 270 * 24 * 60 * 60 * 1000),
    category: 'Home',
    icon: '🏠',
  },
]

export const mockInvestments: Investment[] = [
  {
    id: '1',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    shares: 50,
    purchasePrice: 150.25,
    currentPrice: 192.50,
    changePercent: 28.18,
  },
  {
    id: '2',
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    shares: 30,
    purchasePrice: 280.50,
    currentPrice: 378.91,
    changePercent: 35.10,
  },
  {
    id: '3',
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    shares: 20,
    purchasePrice: 650.00,
    currentPrice: 245.30,
    changePercent: -62.26,
  },
  {
    id: '4',
    name: 'Google LLC',
    symbol: 'GOOGL',
    shares: 15,
    purchasePrice: 2800.75,
    currentPrice: 3150.25,
    changePercent: 12.47,
  },
]

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Payment Received',
    message: 'Your salary of $5,000 has been deposited.',
    type: 'success',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: '2',
    title: 'Unusual Activity',
    message: 'A large transaction was detected. Please verify.',
    type: 'warning',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: '3',
    title: 'Bill Payment Due',
    message: 'Your electricity bill of $120 is due in 3 days.',
    type: 'info',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: '4',
    title: 'Investment Update',
    message: 'Your portfolio gained $450 today.',
    type: 'success',
    date: new Date(),
    read: false,
  },
]

export const mockSpendingData = [
  { category: 'Food & Dining', amount: 520, percentage: 28 },
  { category: 'Shopping', amount: 340, percentage: 18 },
  { category: 'Entertainment', amount: 290, percentage: 16 },
  { category: 'Transportation', amount: 280, percentage: 15 },
  { category: 'Utilities', amount: 210, percentage: 11 },
  { category: 'Fitness', amount: 160, percentage: 12 },
]
