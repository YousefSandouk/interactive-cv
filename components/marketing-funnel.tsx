'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface FunnelStage {
  label: string;
  tooltip: string;
  percentage: number;
}

const stages: FunnelStage[] = [
  { label: 'Architecture & Schema', tooltip: 'Modular component hierarchy, TypeScript domain models & API contract definitions', percentage: 100 },
  { label: 'Frontend & Web3 Systems', tooltip: 'React 19, Next.js App Router, Wagmi/Viem on-chain state & responsive UX', percentage: 84 },
  { label: 'AI & API Integration', tooltip: 'Streaming LLM responses, structured JSON outputs, resilient RPC caching & state sync', percentage: 68 },
  { label: 'Quality & Optimization', tooltip: 'Strict type validation, sub-100ms INP, Core Web Vitals & automated CI/CD checks', percentage: 52 },
];

export function MarketingFunnel() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl md:text-2xl font-bold text-white">Engineering Pipeline</h2>
        </div>
        <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap stage to inspect</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.label}
            onClick={() => setHoveredStage((prev) => (prev === stage.label ? null : stage.label))}
            onMouseEnter={() => setHoveredStage(stage.label)}
            onMouseLeave={() => setHoveredStage(null)}
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer touch-manipulation select-none"
          >
            {/* Track */}
            <div className="w-full h-11 rounded-lg bg-white/5 border border-white/10 overflow-hidden relative">
              {/* Fill bar using width % — no overflow */}
              <motion.div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500/40 to-cyan-400/20 rounded-lg transition-all ${
                  hoveredStage === stage.label ? 'shadow-[0_0_16px_rgba(0,245,255,0.35)]' : ''
                }`}
                initial={false}
                animate={{ width: `${stage.percentage}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
              />
              {/* Label row always full width */}
              <div className="relative z-10 h-full flex items-center justify-between px-3.5 sm:px-4">
                <span className="text-xs sm:text-sm font-semibold text-cyan-300">{stage.label}</span>
                <span className="text-xs text-gray-400 font-medium">{stage.percentage}%</span>
              </div>
            </div>

            {/* Tooltip */}
            {hoveredStage === stage.label && (
              <motion.div
                className="mt-1.5 z-20 bg-gray-900/95 backdrop-blur-md border border-cyan-400/50 rounded-lg px-3 py-2 text-xs text-gray-300 shadow-lg"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-cyan-300 font-medium">{stage.tooltip}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
