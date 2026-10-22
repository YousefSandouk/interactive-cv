'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import profilePic from '@/app/profile.jpg'

const roles = [
  'Software Engineer',
  'Frontend & Web3 Developer',
  'React & TypeScript Specialist',
  'AI Solutions Builder',
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
          Open for Software Engineer Opportunities
        </span>
      </motion.div>

      <motion.p
        className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 text-pretty leading-relaxed"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Passionate Software Engineer enthusiastic about AI and Web3, eager to learn by building, and focused on developing interfaces and tools that solve real-world problems.
      </motion.p>

      {/* CTA Buttons — stack on mobile, row on md+ */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {/* Featured Project: Kritikos AI */}
        <a
          href="https://www.kritikosai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 border border-cyan-400/40 hover:border-cyan-400/80 bg-cyan-500/10 hover:bg-cyan-500/20 active:scale-[0.98] backdrop-blur-sm transition-all duration-200 touch-manipulation shadow-lg shadow-cyan-500/15"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
          <span>Featured: Kritikos AI</span>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Web3 Crypto Dashboard Link */}
        <a
          href="/crypto"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 border border-emerald-400/40 hover:border-emerald-400/80 bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-[0.98] backdrop-blur-sm transition-all duration-200 touch-manipulation shadow-lg shadow-emerald-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span>Launch Web3 Crypto App</span>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* WhatsApp: Chat on WhatsApp */}
        <a
          href="https://wa.me/60109664802"
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
