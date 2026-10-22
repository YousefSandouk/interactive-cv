'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  CodeXml,
  Palette,
  Braces,
  Terminal,
  Atom,
  FileCode,
  Layers,
  Cpu,
  Boxes,
  Server,
  Link as LinkIcon,
  Database,
  type LucideIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
  badge?: string;
  icon?: LucideIcon;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Core Frontend & Web Technologies',
    skills: [
      {
        name: 'HTML',
        level: 98,
        description: 'Semantic HTML5 structure, accessibility (WCAG/a11y), SEO optimization & clean document hierarchy',
        badge: 'Expertise',
        icon: CodeXml,
      },
      {
        name: 'CSS',
        level: 96,
        description: 'Modern CSS3, responsive Flexbox & CSS Grid, custom properties, animations & layout architecture',
        badge: 'Expertise',
        icon: Palette,
      },
      {
        name: 'JavaScript',
        level: 97,
        description: 'ES6+ specifications, asynchronous paradigms, DOM performance, event loops & functional patterns',
        badge: 'Expertise',
        icon: Braces,
      },
      {
        name: 'React & Next.js',
        level: 96,
        description: 'Modern component architecture, hooks, Server Components & App Router',
        icon: Atom,
      },
      {
        name: 'TypeScript',
        level: 95,
        description: 'Type-safe interfaces, generics, strict type checking & scalable architectures',
        icon: FileCode,
      },
      {
        name: 'Tailwind CSS',
        level: 95,
        description: 'Responsive design systems, micro-animations & Radix UI primitives',
        icon: Layers,
      },
    ],
  },
  {
    category: 'AI & Engineering',
    skills: [
      {
        name: 'Python',
        level: 94,
        description: 'Backend automation, data scripting, algorithmic logic & AI model/API pipeline orchestration',
        badge: 'Expertise',
        icon: Terminal,
      },
      {
        name: 'AI API Integration',
        level: 92,
        description: 'OpenAI, Gemini & Anthropic streaming APIs with low-latency client handling',
        icon: Cpu,
      },
      {
        name: 'LLM Orchestration',
        level: 90,
        description: 'Structured JSON outputs, function calling, embeddings & agentic tools',
        icon: Boxes,
      },
      {
        name: 'B2B SaaS Architecture',
        level: 92,
        description: 'High-performance workflows, client-side validation & clean UX',
        icon: Server,
      },
    ],
  },
  {
    category: 'Web3 & Full-Stack',
    skills: [
      {
        name: 'Wagmi & Viem',
        level: 92,
        description: 'EVM multi-chain wallet connections, on-chain reads/writes & Web3 state',
        icon: LinkIcon,
      },
      {
        name: 'API Integrations & State',
        level: 94,
        description: 'REST, GraphQL, WebSockets & TanStack React Query cache synchronization',
        icon: Database,
      },
      {
        name: 'Node.js & Databases',
        level: 88,
        description: 'Prisma ORM, Supabase, PostgreSQL & robust backend integration',
        icon: Server,
      },
    ],
  },
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
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2 gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap min-w-0">
                      {skill.icon && (
                        <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                      )}
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{skill.name}</h4>
                      {skill.badge && (
                        <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium tracking-wide uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 shadow-[0_0_8px_rgba(0,245,255,0.2)]">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                          {skill.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-cyan-400 font-medium shrink-0">{skill.level}%</span>
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
