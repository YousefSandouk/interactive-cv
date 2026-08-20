'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import profilePic from '@/app/profile.jpg'

const roles = [
  'Growth Marketing Manager',
  'AI Solutions Architect',
  'Technical Strategist',
  'Digital Innovation Leader',
]

export function HeroHeader() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass rounded-2xl p-5 sm:p-8 md:p-12 text-center">
      {/* Profile Picture Avatar */}
      <motion.div
        className="flex justify-center mb-6"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-cyan-400/50 shadow-[0_0_24px_rgba(0,245,255,0.3)]">
          <Image
            src={profilePic}
            alt="Yousef Mohammad Sandouk"
            priority
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
      </motion.div>

      <motion.h1
        className="glow-cyan text-2xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white text-balance break-words"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Yousef Mohammad Sandouk
      </motion.h1>

      <div className="h-8 md:h-10 flex items-center justify-center mb-6">
        <motion.p
          key={currentRole}
          className="text-sm sm:text-lg md:text-2xl text-cyan-400 font-medium text-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {roles[currentRole]}
        </motion.p>
      </div>

      <motion.div
        className="flex items-center justify-center gap-2 mb-6"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="w-2.5 h-2.5 bg-green-400 rounded-full pulse-glow flex-shrink-0"></div>
        <span className="text-xs md:text-sm text-slate-300">
          Open for Strategic Opportunities
        </span>
      </motion.div>

      <motion.p
        className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto mb-8 text-pretty"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Driving transformational growth through data-driven strategy, cutting-edge AI solutions, and technical leadership
      </motion.p>

      {/* CTA Buttons — stack on mobile, row on md+ */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {/* Primary: Download CV */}
        <a
          href="https://docs.google.com/document/d/1gIoRplbw4b5ef1ZVdzHh00rOxSuOlHShMspEWLo6wjE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-black bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition-all duration-200 shadow-[0_0_24px_rgba(0,245,255,0.45)] hover:shadow-[0_0_36px_rgba(0,245,255,0.65)] touch-manipulation"
        >
          <FileDown className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span>Download Official CV</span>
          <span className="hidden sm:inline text-black/60 font-normal">(Google Doc)</span>
        </a>

        {/* WhatsApp: Chat on WhatsApp */}
        <a
          href="https://wa.me/60146354792"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-400 border border-cyan-400/40 hover:border-cyan-400/80 bg-cyan-400/10 hover:bg-cyan-400/20 active:scale-[0.98] backdrop-blur-sm transition-all duration-200 touch-manipulation"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
          <span>Chat on WhatsApp</span>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Secondary: Get in Touch */}
        <a
          href="mailto:yuusifsanduk95@gmail.com"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 active:scale-[0.98] backdrop-blur-sm transition-all duration-200 touch-manipulation"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  )
}
