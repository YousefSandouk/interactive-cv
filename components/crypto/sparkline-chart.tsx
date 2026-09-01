'use client'

import React from 'react'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

interface SparklineChartProps {
  data: number[]
  isPositive: boolean
  height?: number
  width?: number | string
}

export function SparklineChart({ data, isPositive, height = 40, width = 120 }: SparklineChartProps) {
  if (!data || data.length === 0) {
    return <div className="h-10 w-28 bg-slate-800/40 rounded animate-pulse" />
  }

  // Sample or slice down price data points to ~10-15 for smooth mini sparklines
  const step = Math.max(1, Math.floor(data.length / 15))
  const chartData = data
    .filter((_, index) => index % step === 0)
    .map((val, index) => ({
      index,
      price: val,
    }))

  const color = isPositive ? '#10b981' : '#f43f5e'
  const gradientId = `sparkline-gradient-${isPositive ? 'pos' : 'neg'}-${Math.random().toString(36).substring(2, 7)}`

  return (
    <div style={{ height, width }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 4, right: 0, bottom: 4, left: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
