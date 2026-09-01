'use client'

import React from 'react'
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart, ShieldAlert } from 'lucide-react'

interface GlobalStats {
  totalMarketCap: number
  totalVolume: number
  btcDominance: string
  ethDominance: string
  avg24hChange: number
}

interface GlobalMetricsHeroProps {
  stats?: GlobalStats
  isLoading?: boolean
}

export function GlobalMetricsHero({ stats, isLoading }: GlobalMetricsHeroProps) {
  const formatCurrency = (val?: number) => {
    if (!val) return '$0.00'
    if (val >= 1e12) return `$${(val / 1e12).toFixed(2)}T`
    if (val >= 1e9) return `$${(val / 1e9).toFixed(2)}B`
    if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`
    return `$${val.toLocaleString()}`
  }

  const isPositiveAvg = (stats?.avg24hChange || 0) >= 0

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading & Market Overview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Live Web3 Market Feed
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crypto Market <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">Intelligence</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Real-time multi-chain telemetry, live price updates, 7-day sparkline trends, and non-custodial wallet portfolio tracking powered by Wagmi &amp; CoinGecko.
          </p>

          {/* Metric Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {/* Total Market Cap */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Market Cap
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-mono">
                {isLoading ? <div className="h-5 w-16 bg-slate-800 rounded animate-pulse" /> : formatCurrency(stats?.totalMarketCap)}
              </div>
            </div>

            {/* 24h Volume */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> 24h Volume
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-mono">
                {isLoading ? <div className="h-5 w-16 bg-slate-800 rounded animate-pulse" /> : formatCurrency(stats?.totalVolume)}
              </div>
            </div>

            {/* BTC Dominance */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-purple-500/30 transition-colors">
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                <PieChart className="w-3.5 h-3.5 text-purple-400" /> BTC Dom.
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-mono">
                {isLoading ? <div className="h-5 w-12 bg-slate-800 rounded animate-pulse" /> : stats?.btcDominance || '56.4%'}
              </div>
            </div>

            {/* 24h Sentiment */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                {isPositiveAvg ? (
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                )}
                Avg 24h
              </div>
              <div className={`text-sm sm:text-base font-bold font-mono ${isPositiveAvg ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isLoading ? (
                  <div className="h-5 w-12 bg-slate-800 rounded animate-pulse" />
                ) : (
                  `${isPositiveAvg ? '+' : ''}${stats?.avg24hChange || 0}%`
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Portfolio Quick Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-xl relative group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Portfolio Valuation
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                Live Feed
              </span>
            </div>

            <div className="text-3xl font-extrabold text-white font-mono mb-1">
              $11,718.24
            </div>
            <div className="text-xs text-emerald-400 font-mono flex items-center gap-1 mb-6">
              <TrendingUp className="w-3.5 h-3.5" /> +$482.10 (4.29%) 24h
            </div>

            {/* Allocation breakdown bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>Asset Allocation</span>
                <span className="text-cyan-300">ETH 60% · BTC 30% · SOL 10%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden flex">
                <div className="h-full bg-cyan-400" style={{ width: '60%' }} />
                <div className="h-full bg-purple-400" style={{ width: '30%' }} />
                <div className="h-full bg-emerald-400" style={{ width: '10%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
