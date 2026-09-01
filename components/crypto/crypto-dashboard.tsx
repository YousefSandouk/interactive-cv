'use client'

import React, { useEffect, useState } from 'react'
import { Web3Provider } from '@/components/providers/web3-provider'
import { ConnectWalletButton } from './connect-wallet-button'
import { GlobalMetricsHero } from './global-metrics-hero'
import { CryptoTable } from './crypto-table'
import { CryptoCoin } from '@/app/api/crypto/markets/route'
import { Shield, Sparkles, Layers, RefreshCw, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function CryptoDashboardContent() {
  const [coins, setCoins] = useState<CryptoCoin[]>([])
  const [globalStats, setGlobalStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  const fetchMarketData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('/api/crypto/markets')
      const json = await res.json()
      if (json.success) {
        setCoins(json.data)
        setGlobalStats(json.globalStats)
        setLastUpdated(new Date().toLocaleTimeString())
      }
    } catch (err) {
      console.error('Failed to fetch crypto markets:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
    const interval = setInterval(fetchMarketData, 60000) // Auto-refresh every 60s
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black relative">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Navigation Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
              title="Return to Main Dossier"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <h1 className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
                  Aura<span className="text-cyan-400">Web3</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                    v2.0
                  </span>
                </h1>
                <p className="text-xs text-slate-400 font-mono">
                  Portfolio &amp; Market Intelligence Dashboard
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {lastUpdated && (
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <RefreshCw className="w-3 h-3 text-cyan-400" /> Refreshed {lastUpdated}
              </span>
            )}

            {/* Web3 Wallet Connector Button */}
            <ConnectWalletButton />
          </div>
        </header>

        {/* Global Market Metrics Hero */}
        <section>
          <GlobalMetricsHero stats={globalStats} isLoading={isLoading} />
        </section>

        {/* Real-time Cryptocurrencies Data Table */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" /> Top Cryptocurrencies by Market Cap
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Live CoinGecko Telemetry
            </span>
          </div>

          <CryptoTable coins={coins} isLoading={isLoading} onRefresh={fetchMarketData} />
        </section>

        {/* Full-Stack Architecture Showcase Banner */}
        <footer className="mt-12 p-6 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <Shield className="w-4 h-4" /> Non-Custodial Web3 Architecture
          </div>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built with Next.js App Router, Tailwind CSS, Wagmi &amp; Viem Web3 Connectors, Prisma ORM, Supabase Database, and Recharts SVG Sparklines.
          </p>
        </footer>
      </div>
    </div>
  )
}

export function CryptoDashboard() {
  return (
    <Web3Provider>
      <CryptoDashboardContent />
    </Web3Provider>
  )
}
