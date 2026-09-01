'use client'

import React, { useState, useMemo } from 'react'
import { CryptoCoin } from '@/app/api/crypto/markets/route'
import { SparklineChart } from './sparkline-chart'
import { Star, Search, ArrowUpDown, TrendingUp, TrendingDown, ExternalLink, RefreshCw } from 'lucide-react'

interface CryptoTableProps {
  coins: CryptoCoin[]
  isLoading?: boolean
  onRefresh?: () => void
}

export function CryptoTable({ coins, isLoading, onRefresh }: CryptoTableProps) {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'gainers' | 'favorites'>('all')
  const [favorites, setFavorites] = useState<string[]>(['bitcoin', 'ethereum', 'solana'])
  const [sortField, setSortField] = useState<'rank' | 'price' | 'change'>('rank')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredCoins = useMemo(() => {
    let list = [...coins]

    // Tab Filter
    if (activeTab === 'gainers') {
      list = list.filter((c) => (c.price_change_percentage_24h || 0) > 0)
    } else if (activeTab === 'favorites') {
      list = list.filter((c) => favorites.includes(c.id))
    }

    // Search Filter
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q)
      )
    }

    // Sorting
    list.sort((a, b) => {
      let valA = 0
      let valB = 0
      if (sortField === 'rank') {
        valA = a.market_cap_rank
        valB = b.market_cap_rank
      } else if (sortField === 'price') {
        valA = a.current_price
        valB = b.current_price
      } else if (sortField === 'change') {
        valA = a.price_change_percentage_24h
        valB = b.price_change_percentage_24h
      }

      if (sortDirection === 'asc') return valA > valB ? 1 : -1
      return valA < valB ? 1 : -1
    })

    return list
  }, [coins, activeTab, search, favorites, sortField, sortDirection])

  const handleSort = (field: 'rank' | 'price' | 'change') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  return (
    <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      {/* Controls Header: Tabs, Search Bar, Refresh */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950/80 border border-slate-800">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Cryptos ({coins.length})
          </button>

          <button
            onClick={() => setActiveTab('gainers')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'gainers'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Top Gainers
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'favorites'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Watchlist ({favorites.length})
          </button>
        </div>

        {/* Right Tools: Search Input & Manual Refresh */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search crypto (e.g. BTC)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500/50 text-xs text-slate-200 placeholder-slate-500 outline-hidden transition-all"
            />
          </div>

          {onRefresh && (
            <button
              onClick={onRefresh}
              className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              title="Refresh Market Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {/* Responsive Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3 w-10 text-center">Fav</th>
              <th
                onClick={() => handleSort('rank')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  # <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4">Asset</th>
              <th
                onClick={() => handleSort('price')}
                className="py-3 px-4 cursor-pointer hover:text-white transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  Price <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('change')}
                className="py-3 px-4 cursor-pointer hover:text-white transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-1">
                  24h Change <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 hidden md:table-cell text-right">24h Volume</th>
              <th className="py-3 px-4 text-center">7d Sparkline</th>
              <th className="py-3 px-4 text-right">Trade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <tr key={idx} className="animate-pulse">
                  <td className="py-4 px-3 text-center"><div className="w-4 h-4 bg-slate-800 rounded mx-auto" /></td>
                  <td className="py-4 px-3"><div className="w-6 h-4 bg-slate-800 rounded" /></td>
                  <td className="py-4 px-4"><div className="w-32 h-6 bg-slate-800 rounded" /></td>
                  <td className="py-4 px-4 text-right"><div className="w-20 h-5 bg-slate-800 rounded ml-auto" /></td>
                  <td className="py-4 px-4 text-right"><div className="w-16 h-5 bg-slate-800 rounded ml-auto" /></td>
                  <td className="py-4 px-4 hidden md:table-cell text-right"><div className="w-24 h-5 bg-slate-800 rounded ml-auto" /></td>
                  <td className="py-4 px-4 text-center"><div className="w-28 h-8 bg-slate-800 rounded mx-auto" /></td>
                  <td className="py-4 px-4 text-right"><div className="w-12 h-6 bg-slate-800 rounded ml-auto" /></td>
                </tr>
              ))
            ) : filteredCoins.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-slate-500 text-sm">
                  No cryptocurrencies found matching your query.
                </td>
              </tr>
            ) : (
              filteredCoins.map((coin) => {
                const isPositive = (coin.price_change_percentage_24h || 0) >= 0
                const isFav = favorites.includes(coin.id)

                return (
                  <tr
                    key={coin.id}
                    className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                  >
                    {/* Star Favorite Toggle */}
                    <td className="py-4 px-3 text-center">
                      <button
                        onClick={(e) => toggleFavorite(coin.id, e)}
                        className="p-1 text-slate-600 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            isFav ? 'text-amber-400 fill-amber-400' : ''
                          }`}
                        />
                      </button>
                    </td>

                    {/* Rank */}
                    <td className="py-4 px-3 font-mono text-xs text-slate-400">
                      {coin.market_cap_rank}
                    </td>

                    {/* Asset Name & Icon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-8 h-8 rounded-full border border-slate-700/60 object-contain p-0.5 bg-slate-950"
                        />
                        <div>
                          <div className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                            {coin.name}
                          </div>
                          <div className="font-mono text-xs text-slate-400 uppercase">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Current Price */}
                    <td className="py-4 px-4 text-right font-mono font-semibold text-sm text-slate-100">
                      ${coin.current_price < 1
                        ? coin.current_price.toFixed(4)
                        : coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>

                    {/* 24h Change % Badge */}
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                          isPositive
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {isPositive ? '+' : ''}
                        {(coin.price_change_percentage_24h || 0).toFixed(2)}%
                      </span>
                    </td>

                    {/* 24h Volume */}
                    <td className="py-4 px-4 hidden md:table-cell text-right font-mono text-xs text-slate-400">
                      ${(coin.total_volume / 1e6).toFixed(1)}M
                    </td>

                    {/* 7d Sparkline */}
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <SparklineChart
                          data={coin.sparkline_in_7d?.price || []}
                          isPositive={isPositive}
                        />
                      </div>
                    </td>

                    {/* Trade / Action Link */}
                    <td className="py-4 px-4 text-right">
                      <a
                        href={`https://www.coingecko.com/en/coins/${coin.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all"
                      >
                        Trade <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
