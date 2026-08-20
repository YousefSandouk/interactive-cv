'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Zap, Target, Users, Brain } from 'lucide-react'

interface Value {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  testimonial: string
  author: string
}

const coreValues: Value[] = [
  {
    id: '1',
    name: 'High-Pressure Delivery',
    description: 'Excellence under constraints',
    icon: <Zap className="w-6 h-6" />,
    testimonial: 'Consistently delivers high-quality results in fast-paced environments, meeting aggressive timelines without compromising quality.',
    author: 'CEO, Tech Startup'
  },
  {
    id: '2',
    name: 'Strategic Leadership',
    description: 'Visionary decision-making',
    icon: <Target className="w-6 h-6" />,
    testimonial: 'Brings clarity to complex problems and guides teams toward ambitious goals with well-defined strategic direction.',
    author: 'Founder, Growth Company'
  },
  {
    id: '3',
    name: 'Human-Centric Design',
    description: 'User-first philosophy',
    icon: <Users className="w-6 h-6" />,
    testimonial: 'Always considers the human element in technical solutions, creating tools that are both powerful and intuitive.',
    author: 'Product Lead, Innovation Lab'
  },
  {
    id: '4',
    name: 'Continuous Learning',
    description: 'Adaptive evolution',
    icon: <Brain className="w-6 h-6" />,
    testimonial: 'Stays ahead of industry trends and continuously upgrades skills, bringing cutting-edge knowledge to every project.',
    author: 'Director, Digital Strategy'
  }
]

export function CoreValues() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">Core Values</h2>
          <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap card for testimonial</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
          {coreValues.map((value, idx) => (
            <motion.button
              key={value.id}
              onClick={() => setSelectedId(selectedId === value.id ? null : value.id)}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative p-3 sm:p-4 rounded-lg transition-all duration-300 flex flex-col items-center justify-center text-center touch-manipulation cursor-pointer min-h-[90px] sm:min-h-[105px] ${
                selectedId === value.id
                  ? 'bg-cyan-500/20 border border-cyan-500/50'
                  : 'bg-white/5 border border-white/10 hover:border-white/30'
              }`}
            >
              <motion.div
                animate={{ color: selectedId === value.id ? '#00f5ff' : '#9ca3af' }}
                className="mb-1.5 sm:mb-2 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6"
              >
                {value.icon}
              </motion.div>
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">{value.name}</p>
            </motion.button>
          ))}
        </div>

        {/* Testimonial panel */}
        <AnimatePresence mode="wait">
          {selectedId && (
            <motion.div
              key={selectedId}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-black/60 rounded-lg p-3.5 sm:p-4 border border-cyan-500/20"
            >
              <p className="text-xs sm:text-sm italic text-gray-300 mb-2 sm:mb-3">
                "{coreValues.find((v) => v.id === selectedId)?.testimonial}"
              </p>
              <p className="text-xs text-cyan-400 font-semibold">
                — {coreValues.find((v) => v.id === selectedId)?.author}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export { CoreValues as CoreValuesBlock }
export default CoreValues
