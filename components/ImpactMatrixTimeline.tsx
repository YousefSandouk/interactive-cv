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
  achievements: string[]
  metrics: {
    label: string
    value: string
  }[]
}

const experiences: Experience[] = [
  {
    id: '1',
    year: '2022 - 2026',
    company: 'Arman Hotel Suites',
    location: 'Amman, Jordan',
    role: 'Marketing & Digital Systems Director',
    achievements: [
      'Architected and deployed a custom digital reservation & booking infrastructure, streamlining booking workflows and increasing direct conversion.',
      'Spearheaded B2B travel & tourism distribution channels in strategic alignment with the Jordan Hotel Association.',
      'Executed data-driven growth marketing campaigns that optimized customer acquisition cost (CAC) and maximized seasonal occupancy rates.',
      'Led multi-channel digital transformation combining technical automation with hospitality marketing strategy.'
    ],
    metrics: [
      { label: 'Direct Bookings', value: '+45%' },
      { label: 'B2B Partnerships', value: 'Strategic (JHA)' },
      { label: 'System Efficiency', value: 'Automated' }
    ]
  },
  {
    id: '2',
    year: '2019',
    company: 'Burencý',
    role: 'Growth Marketing Manager',
    achievements: [
      'Scaled user base from 10K to 500K in 18 months',
      'Implemented custom automation workflows reducing manual work by 80%',
      'Built integrated marketing funnel across Web3 and traditional channels'
    ],
    metrics: [
      { label: 'Users Added', value: '490K' },
      { label: 'Growth Rate', value: '4900%' },
      { label: 'Automation Saved', value: '2400 hrs/yr' }
    ]
  },
  {
    id: '3',
    year: '2021',
    company: 'AI Ventures',
    role: 'AI Solutions Architect',
    achievements: [
      'Architected end-to-end AI integration platform for enterprise clients',
      'Reduced implementation time by 65% through custom frameworks',
      'Led technical strategy for 15+ Fortune 500 client partnerships'
    ],
    metrics: [
      { label: 'Clients Onboarded', value: '15+' },
      { label: 'Time Reduced', value: '65%' },
      { label: 'Revenue Impact', value: '$2.5M' }
    ]
  },
  {
    id: '4',
    year: '2023',
    company: 'Strategy Labs',
    role: 'Technical Strategist',
    achievements: [
      'Developed strategic frameworks bridging tech and business',
      'Mentored 25+ startups through growth acceleration program',
      'Established market-leading positioning for 8 tech companies'
    ],
    metrics: [
      { label: 'Companies Mentored', value: '25+' },
      { label: 'Market Leaders', value: '8' },
      { label: 'Portfolio Value', value: '$500M' }
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
