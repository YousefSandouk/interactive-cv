'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Zap, Target, Users, Shield, Lightbulb, ArrowRight } from 'lucide-react'

const coreValues = [
  {
    icon: Zap,
    title: 'Learn by Building',
    description: 'Rapidly shipping working production code from ideas to reality',
    testimonial: 'Yousef turns complex technical concepts into robust software at incredible speed',
  },
  {
    icon: Target,
    title: 'Real-World Problem Solving',
    description: 'Designing frontend tools that directly eliminate workflow friction',
    testimonial: 'Laser-focused on user experience and delivering practical business value',
  },
  {
    icon: Users,
    title: 'Clean Architecture & Collaboration',
    description: 'Writing maintainable TypeScript and mentoring fellow developers',
    testimonial: 'Champion for clean code, type safety, and collaborative engineering',
  },
  {
    icon: Shield,
    title: 'Reliability & Scale',
    description: 'Building resilient Web3 and AI systems with zero-downtime tolerance',
    testimonial: 'He engineers secure, scalable interfaces that users can genuinely depend on',
  },
]

export function CoreValuesAndCTA() {
  const [selectedValue, setSelectedValue] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-5 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/50 transition-colors"
      >
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
          <h3 className="text-xl md:text-2xl font-bold text-white">Core Values</h3>
        </div>

        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon
            const isSelected = selectedValue === index

            return (
              <motion.button
                key={value.title}
                onClick={() => setSelectedValue(index)}
                whileHover={{ x: 3 }}
                className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 flex items-center gap-3 touch-manipulation cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 border border-cyan-400'
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${
                    isSelected ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    isSelected ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {value.title}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          key={selectedValue}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-3.5 sm:p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2 font-medium">
            Client Testimonial
          </p>
          <p className="text-xs sm:text-sm text-slate-300 italic">
            "{coreValues[selectedValue].testimonial}"
          </p>
        </motion.div>
      </motion.div>

      {/* CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-5 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-cyan-900/20 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/50 transition-colors flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Ready to Collaborate?</h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 text-pretty">
            Let&apos;s discuss how strategic innovation and data-driven growth can transform your vision into reality.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          <motion.a
            href="mailto:yuusifsanduk95@gmail.com?subject=Request%20AI%20Case%20Study"
            whileHover={{ scale: 1.01, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="cyber-border block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-lg bg-cyan-500 text-black font-semibold text-xs sm:text-sm hover:bg-cyan-400 active:scale-[0.98] transition-colors text-center flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
          >
            <span>Request AI Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="mailto:yuusifsanduk95@gmail.com?subject=Schedule%20Strategy%20Discussion"
            whileHover={{ scale: 1.01, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="cyber-border block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-lg border border-cyan-500 text-cyan-400 font-semibold text-xs sm:text-sm hover:bg-cyan-500/10 active:scale-[0.98] transition-colors text-center flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
          >
            <span>Schedule Strategy Discussion</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://wa.me/60146354792"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="cyber-border block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-lg border border-cyan-500 text-cyan-400 font-semibold text-xs sm:text-sm hover:bg-cyan-500/10 active:scale-[0.98] transition-colors text-center flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Decorative Element */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </motion.div>
    </div>
  )
}
