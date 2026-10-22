'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface Experience {
  id: string
  year: string
  company: string
  location?: string
  role: string
  url?: string
  achievements: string[]
  metrics: {
    label: string
    value: string
  }[]
}

const experiences: Experience[] = [
  {
    id: '1',
    year: '2024 - Present',
    company: 'Kritikos AI',
    location: 'Production SaaS',
    role: 'Featured Project — Frontend & AI Engineering',
    url: 'https://www.kritikosai.com',
    achievements: [
      'Architected and delivered the production web application using React, Next.js, and Tailwind CSS, designing a modern, intuitive UI/UX with smooth micro-interactions.',
      'Engineered complex frontend logic and dynamic state management to integrate cutting-edge AI APIs with real-time streaming inference and low-latency responses.',
      'Implemented robust TypeScript data pipelines and client-side validation schemas ensuring seamless handling of dynamic AI outputs and structured data.',
      'Optimized Core Web Vitals, asset bundling, and code splitting, achieving top-tier Lighthouse performance scores for a fast, responsive user experience.'
    ],
    metrics: [
      { label: 'Frontend Stack', value: 'React / Next.js' },
      { label: 'Styling & UI', value: 'Tailwind CSS' },
      { label: 'AI Capabilities', value: 'Streaming AI APIs' }
    ]
  },
  {
    id: '2',
    year: '2019 - 2023',
    company: 'Burency',
    location: 'Dubai, UAE',
    role: 'Frontend / Web3 Developer',
    achievements: [
      'Engineered secure, scalable, and responsive user interfaces for a high-volume crypto and Web3 trading platform using React and TypeScript.',
      'Integrated decentralized Web3 tooling including Wagmi, Viem, and EVM wallet connectors, enabling seamless multi-chain transaction signing and account balance synchronization.',
      'Built high-density real-time order books, transaction history feeds, and market analytics dashboards via WebSocket and REST API integrations.',
      'Collaborated closely with smart contract auditors and backend engineers to implement strict client-side validation, resilient state management, and bank-grade security protocols.'
    ],
    metrics: [
      { label: 'Frameworks', value: 'React & TypeScript' },
      { label: 'Web3 Tooling', value: 'Wagmi / Viem' },
      { label: 'Platform Scale', value: '500K+ Users' }
    ]
  },
  {
    id: '3',
    year: '2023 - 2024',
    company: 'Web3 Intelligence Hub',
    location: 'Live Showcase',
    role: 'Full-Stack Web3 Developer',
    url: '/crypto',
    achievements: [
      'Developed a modern, real-time Web3 crypto portfolio and market intelligence dashboard built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.',
      'Integrated Wagmi & Viem multi-chain wallet connectors with real-time CoinGecko market telemetry, Prisma ORM, and Supabase database persistence.',
      'Created interactive financial data visualizations and sparkline trend charts using TanStack React Query for background polling and optimistic UI updates.'
    ],
    metrics: [
      { label: 'Tech Stack', value: 'Next.js 16 / React 19' },
      { label: 'Data & Storage', value: 'Prisma + Supabase' },
      { label: 'Web3 Architecture', value: 'Wagmi Multi-Chain' }
    ]
  },
  {
    id: '4',
    year: '2021 - 2023',
    company: 'AI Solutions & Automation',
    location: 'Remote',
    role: 'Software Engineer — AI & Web Applications',
    achievements: [
      'Engineered custom B2B SaaS interfaces and workflow automation dashboards integrating large language model (LLM) APIs for enterprise clients.',
      'Built modular, reusable React component libraries and custom hooks with strict TypeScript typing, accelerating product rollout cycles.',
      'Implemented automated prompt execution pipelines and structured JSON data extractors, eliminating manual processes and boosting client efficiency by 65%.'
    ],
    metrics: [
      { label: 'AI Tooling', value: 'LLM APIs & Automation' },
      { label: 'Workflow Boost', value: '+65% Efficiency' },
      { label: 'Component System', value: 'Reusable React/TS' }
    ]
  }
]

export function ImpactMatrix() {
  const [selectedId, setSelectedId] = useState(experiences[0].id)
  const selected = experiences.find((e) => e.id === selectedId)

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5 sm:mb-6 text-white">Impact Journey</h2>

        {/* Timeline nodes */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {experiences.map((exp, idx) => (
            <motion.button
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`w-full text-left px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 touch-manipulation cursor-pointer ${
                selectedId === exp.id
                  ? 'bg-cyan-500/20 border border-cyan-500/50'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">{exp.year}</p>
                  <p className="text-[11px] sm:text-xs text-gray-400">{exp.company}{exp.location ? ` • ${exp.location}` : ''}</p>
                </div>
                {selectedId === exp.id && (
                  <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Details panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={false}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-black/40 rounded-xl p-3.5 sm:p-4 border border-white/10"
            >
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-3">{selected.role}</p>

              {/* Achievements */}
              <div className="mb-4">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Key Achievements</p>
                <ul className="space-y-1.5 sm:space-y-1">
                  {selected.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-xs text-gray-300 flex gap-2"
                    >
                      <span className="text-cyan-400 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selected.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 rounded p-2.5 sm:p-2 border border-white/10 text-center"
                  >
                    <p className="text-xs sm:text-sm font-bold text-cyan-400 break-words">{metric.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 break-words">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export { ImpactMatrix as ImpactMatrixTimeline }
export default ImpactMatrix
