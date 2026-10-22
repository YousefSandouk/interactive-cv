'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

const architectures = ['B2B SaaS', 'Web3 / DeFi', 'AI Platform']
const techFocuses = ['React & Next.js', 'TypeScript Core', 'AI Streaming', 'Wagmi / Viem']
const modelParams = ['Streaming Inference', 'Structured Outputs', 'Context Caching']

interface KPIOutput {
  latency: number
  cacheHitRate: number
  clientMemory: number
  throughput: number
}

export function AIPlayground() {
  const [architecture, setArchitecture] = useState('B2B SaaS')
  const [techFocus, setTechFocus] = useState('React & Next.js')
  const [workload, setWorkload] = useState([50])
  const [activeParam, setActiveParam] = useState('Streaming Inference')

  const calculateKPIs = (): KPIOutput => {
    const loadFactor = workload[0] / 50
    const archModifier = architecture === 'B2B SaaS' ? 0.85 : architecture === 'Web3 / DeFi' ? 0.9 : 0.8
    
    return {
      latency: Math.max(18, Math.round((38 + workload[0] * 0.2 - (activeParam === 'Context Caching' ? 12 : 0)) * archModifier)),
      cacheHitRate: Math.min(99, Math.round(88 + workload[0] * 0.1 + (activeParam === 'Context Caching' ? 6 : 2))),
      clientMemory: Math.round(14 + workload[0] * 0.08 + (techFocus === 'AI Streaming' ? 4 : 0)),
      throughput: Math.min(99.9, +(99.4 + (activeParam === 'Structured Outputs' ? 0.4 : 0.2)).toFixed(1))
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
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">AI & Systems Simulator</h2>

        {/* Architecture Selection */}
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">Domain Architecture</label>
          <div className="flex gap-2 flex-wrap">
            {architectures.map((m) => (
              <button
                key={m}
                onClick={() => setArchitecture(m)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium touch-manipulation cursor-pointer ${
                  architecture === m
                    ? 'bg-cyan-500/30 border border-cyan-500 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Focus Selection */}
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">Core Tech Focus</label>
          <div className="flex gap-2 flex-wrap">
            {techFocuses.map((ind) => (
              <button
                key={ind}
                onClick={() => setTechFocus(ind)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium touch-manipulation cursor-pointer ${
                  techFocus === ind
                    ? 'bg-cyan-500/30 border border-cyan-500 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Workload Slider */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2.5 sm:mb-3">
            <label className="text-xs sm:text-sm text-gray-400 font-medium">Workload Traffic (Req/s)</label>
            <span className="text-base sm:text-lg font-semibold text-cyan-400">{workload[0] * 10}/s</span>
          </div>
          <Slider
            value={workload}
            onValueChange={setWorkload}
            min={10}
            max={200}
            step={10}
            className="w-full touch-manipulation"
          />
        </div>

        {/* Model Parameters */}
        <div className="mb-6 sm:mb-8">
          <label className="text-xs sm:text-sm text-gray-400 mb-2.5 sm:mb-3 block font-medium">AI Inference Optimizations</label>
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
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 font-medium">Projected Engineering Telemetry</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.latency}ms</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">P95 UI Latency</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.cacheHitRate}%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">Cache Hit Rate</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.clientMemory}MB</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">Client Footprint</p>
            </div>
            <div className="bg-white/5 sm:bg-transparent rounded-lg p-2.5 sm:p-0 border border-white/5 sm:border-0">
              <p className="text-lg sm:text-2xl font-bold text-cyan-400">{kpis.throughput}%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 sm:text-gray-500 mt-1">Reliability SLA</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
