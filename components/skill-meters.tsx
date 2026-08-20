'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    skills: [
      { name: 'React', level: 95, description: 'Modern component architecture & hooks' },
      { name: 'Node.js', level: 90, description: 'Full-stack backend development' },
      { name: 'Tailwind CSS', level: 95, description: 'Responsive UI design & theming' },
    ]
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Google AI Models', level: 88, description: 'AI model integration & optimization' },
      { name: 'Training & Fine-tuning', level: 85, description: 'Custom model training workflows' },
      { name: 'LLM Integration', level: 90, description: 'Large language model API implementation' },
    ]
  },
  {
    category: 'Creative & Production',
    skills: [
      { name: 'Premiere Pro', level: 92, description: 'Video editing & post-production' },
      { name: 'Illustrator', level: 88, description: 'Vector design & brand assets' },
      { name: 'Photoshop', level: 90, description: 'Photo editing & digital art' },
    ]
  }
];

export function SkillMeters() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl md:text-2xl font-bold text-white">Skill Progression</h2>
        </div>
        <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap skill to inspect</span>
      </div>

      <div className="space-y-6 sm:space-y-8 flex-1">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="text-xs uppercase tracking-widest text-cyan-400 mb-3 font-semibold">
              {group.category}
            </h3>
            <div className="space-y-3.5 sm:space-y-4">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  onClick={() => setHoveredSkill((prev) => (prev === skill.name ? null : skill.name))}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (groupIndex * 0.15) + (index * 0.1) }}
                  className="cursor-pointer touch-manipulation select-none"
                >
                  <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{skill.name}</h4>
                    <span className="text-xs text-cyan-400 font-medium">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full"
                      initial={false}
                      animate={{ width: `${hoveredSkill === skill.name ? skill.level : skill.level * 0.7}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Tooltip / Description */}
                  {hoveredSkill === skill.name && (
                    <motion.p
                      className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-lg p-2 mt-2"
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
