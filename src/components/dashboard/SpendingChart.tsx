'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { SpendingData } from '@/types'

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

interface SpendingChartProps {
  data: SpendingData[]
}

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
  }>
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="font-semibold text-slate-900 dark:text-white">
          {payload[0].name}
        </p>
        <p className="text-brand-600 dark:text-brand-400 font-bold">
          ${payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

export function SpendingChart({ data }: SpendingChartProps) {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name} ${percentage}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="amount"
          >
            {data.map((index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
              color: 'var(--color-text)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
