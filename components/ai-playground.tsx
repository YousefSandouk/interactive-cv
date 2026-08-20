'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

const markets = ['Saudi Arabia', 'UAE', 'Global']
const industries = ['SaaS', 'E-commerce', 'FinTech', 'HealthTech']
const modelParams = ['Market Analysis', 'Sentiment Scoring', 'Lead Prediction']

interface KPIOutput {
  cac: number
  conversionRate: number
  ltv: number
  roi: number
}

export function AIPlayground() {
  const [market, setMarket] = useState('Saudi Arabia')
  const [industry, setIndustry] = useState('SaaS')
  const [budget, setBudget] = useState([50])
  const [activeParam, setActiveParam] = useState('Market Analysis')

  const calculateKPIs = (): KPIOutput => {
    const budgetMultiplier = budget[0] / 50
    const industryModifier = industry === 'SaaS' ? 1.2 : industry === 'FinTech' ? 1.35 : 1
    
    return {
      cac: Math.round((150 - budget[0] * 0.5) * industryModifier),
      conversionRate: Math.round((8 + budget[0] * 0.15 + (activeParam === 'Lead Prediction' ? 3 : 0))),
      ltv: Math.round((2500 + budget[0] * 20) * industryModifier),
      roi: Math.round((280 + budget[0] * 2.5 + (activeParam === 'Sentiment Scoring' ? 50 : 0)) * industryModifier)
    }
  }

  const kpis = calculateKPIs()

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">AI Strategy Playground</h2>

        {/* Market Selection */}
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">Market Focus</label>
          <div className="flex gap-2 flex-wrap">
            {markets.map((m) => (
              <button
                key={m}
                onClick={() => setMarket(m)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium touch-manipulation cursor-pointer ${
                  market === m
                    ? 'bg-cyan-500/30 border border-cyan-500 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Selection */}
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">Industry</label>
          <div className="flex gap-2 flex-wrap">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium touch-manipulation cursor-pointer ${
                  industry === ind
                    ? 'bg-cyan-500/30 border border-cyan-500 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2.5 sm:mb-3">
            <label className="text-xs sm:text-sm text-gray-400 font-medium">Budget ($K)</label>
            <span className="text-base sm:text-lg font-semibold text-cyan-400">${budget[0]}K</span>
          </div>
          <Slider
            value={budget}
            onValueChange={setBudget}
            min={10}
            max={200}
            step={10}
            className="w-full touch-manipulation"
          />
        </div>

        {/* Model Parameters */}
        <div className="mb-6 sm:mb-8">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">AI Model Parameters</label>
          <div className="flex gap-2 flex-wrap">
            {modelParams.map((param) => (
              <button
                key={param}
                onClick={() => setActiveParam(param)}
                className={`px-3 py-2 rounded text-xs font-medium transition-all touch-manipulation cursor-pointer ${
                  activeParam === param
                    ? 'bg-cyan-500/30 border border-cyan-500 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                {param}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Output Grid */}
        <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-white/5">
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 font-medium">Projected Marketing KPIs</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">${kpis.cac}</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">CAC Reduction</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.conversionRate}%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">Conv. Optimization</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">${kpis.ltv}</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">LTV (12 months)</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.roi}%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">Projected ROI</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
