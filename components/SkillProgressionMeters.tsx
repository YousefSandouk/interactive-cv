'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  CodeXml,
  Palette,
  Braces,
  Terminal,
  Atom,
  FileCode,
  Layers,
  Cpu,
  Link as LinkIcon,
  Server,
  type LucideIcon,
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  badge?: string
  icon?: LucideIcon
}

const skills: Skill[] = [
  { name: 'HTML', level: 98, category: 'Frontend', badge: 'Expertise', icon: CodeXml },
  { name: 'CSS', level: 96, category: 'Frontend', badge: 'Expertise', icon: Palette },
  { name: 'JavaScript', level: 97, category: 'Frontend', badge: 'Expertise', icon: Braces },
  { name: 'Python', level: 94, category: 'Backend / AI', badge: 'Expertise', icon: Terminal },
  { name: 'React & Next.js', level: 96, category: 'Frontend', icon: Atom },
  { name: 'TypeScript', level: 95, category: 'Frontend', icon: FileCode },
  { name: 'Tailwind CSS & Radix UI', level: 94, category: 'UI / UX', icon: Layers },
  { name: 'AI APIs & Streaming', level: 92, category: 'AI Engineering', icon: Cpu },
  { name: 'Wagmi & Viem (Web3)', level: 92, category: 'Web3', icon: LinkIcon },
  { name: 'Node.js & Supabase', level: 88, category: 'Backend', icon: Server },
]

export function SkillMeters() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const getLevelLabel = (level: number) => {
    if (level >= 95) return 'Expert'
    if (level >= 85) return 'Advanced'
    if (level >= 75) return 'Proficient'
    return 'Intermediate'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white">Skill Progression</h2>
          <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap skill to inspect</span>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setHoveredSkill((prev) => (prev === skill.name ? null : skill.name))}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group/skill cursor-pointer touch-manipulation select-none"
            >
              <div className="flex justify-between items-center mb-1.5 sm:mb-2 gap-2">
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  {skill.icon && <skill.icon className="w-4 h-4 text-cyan-400 shrink-0" />}
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-xs sm:text-sm font-semibold text-white">{skill.name}</p>
                      {skill.badge && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-medium tracking-wide uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                          {skill.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">{skill.category}</p>
                  </div>
                </div>
                <motion.span
                  animate={{
                    color: hoveredSkill === skill.name ? '#00f5ff' : '#9ca3af'
                  }}
                  className="text-xs font-bold"
                >
                  {getLevelLabel(skill.level)}
                </motion.span>
              </div>

              {/* Progress bar container */}
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                {/* Animated fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredSkill === skill.name ? '100%' : `${skill.level}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                />

                {/* Glow effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/50 blur-sm"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-[11px] sm:text-xs text-gray-500 mb-2 sm:mb-3 font-medium">Proficiency Levels:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-400">
            <div>• 95-100: Expert</div>
            <div>• 85-94: Advanced</div>
            <div>• 75-84: Proficient</div>
            <div>• &lt;75: Intermediate</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
