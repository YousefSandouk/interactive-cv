'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FunnelStage {
  name: string
  percentage: number
  strategy: string
  metrics: string[]
}

const funnelStages: FunnelStage[] = [
  {
    name: 'Architecture & Schema',
    percentage: 100,
    strategy: 'Modular component design, TypeScript domain models & API schema contract definitions',
    metrics: ['Strict TypeScript', 'Zero Any Policy', 'Modular Clean Code']
  },
  {
    name: 'Frontend & Web3 Systems',
    percentage: 84,
    strategy: 'React 19, Next.js App Router, Wagmi/Viem multi-chain EVM wallet state & responsive UI',
    metrics: ['React 19 / Next.js', 'Wagmi & Viem', 'Responsive UI']
  },
  {
    name: 'AI & API Integration',
    percentage: 68,
    strategy: 'Streaming LLM responses, structured JSON outputs, resilient RPC caching & state sync',
    metrics: ['Sub-second Streaming', 'TanStack Query', 'Real-time WebSockets']
  },
  {
    name: 'Quality & Optimization',
    percentage: 52,
    strategy: 'Strict type validation, sub-100ms INP, Core Web Vitals & automated CI/CD checks',
    metrics: ['99.9% Type Safety', 'Sub-100ms INP', '100% Lighthouse']
  }
]

export function MarketingFunnel() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null)

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">Engineering Pipeline</h2>
          <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap to view details</span>
        </div>

        <div className="space-y-4">
          {funnelStages.map((stage, index) => {
            const isHovered = hoveredStage === stage.name
            return (
              <motion.div
                key={stage.name}
                onClick={() => setHoveredStage((prev) => (prev === stage.name ? null : stage.name))}
                onMouseEnter={() => setHoveredStage(stage.name)}
                onMouseLeave={() => setHoveredStage(null)}
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group/funnel cursor-pointer touch-manipulation select-none"
              >
                {/* Stage bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs sm:text-sm font-semibold text-white">{stage.name}</p>
                    <span className="text-xs text-cyan-400 font-bold">{stage.percentage}%</span>
                  </div>

                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      initial={false}
                      animate={{ width: `${stage.percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 rounded-full"
                    />
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/40 blur-sm"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                </div>

                {/* Details on hover or tap */}
                {isHovered && (
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 p-3 bg-black/50 rounded-lg border border-cyan-500/30"
                  >
                    <p className="text-xs text-cyan-300 mb-2 font-semibold">{stage.strategy}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {stage.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] sm:text-xs bg-cyan-500/10 text-cyan-300 px-2 py-0.5 sm:py-1 rounded border border-cyan-500/20"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Funnel insights */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-2">Conversion Efficiency</p>
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-3/12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>
            <span className="text-xs text-gray-400">25% overall</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { MarketingFunnel as MarketingFunnelVisualization }
export default MarketingFunnel
