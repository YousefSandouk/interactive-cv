'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Growth Hacking', level: 98, category: 'Marketing' },
  { name: 'Digital Strategy', level: 96, category: 'Strategy' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'System Design', level: 88, category: 'Backend' },
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
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">{skill.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{skill.category}</p>
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
