'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface Experience {
  id: number;
  date: string;
  company: string;
  location: string;
  role: string;
  url?: string;
  achievements: string[];
  metrics?: Metric[];
}

const experiences: Experience[] = [
  {
    id: 1,
    date: '2024 - Present',
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
    id: 2,
    date: '2019 - 2023',
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
    id: 3,
    date: '2023 - 2024',
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
    id: 4,
    date: '2021 - 2023',
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
];

export function ImpactMatrix() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="p-5 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
    >
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">Impact Timeline</h2>
      </div>

      {/* Timeline Navigation */}
      <div className="space-y-2.5 sm:space-y-3 mb-6">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setActiveId(exp.id)}
            className={`w-full text-left px-3.5 py-2.5 sm:px-4 sm:py-3 rounded transition-all touch-manipulation cursor-pointer ${
              activeId === exp.id
                ? 'bg-cyan-500/20 border border-cyan-400 text-white'
                : 'bg-slate-700/30 border border-slate-600 text-gray-400 hover:border-cyan-500/30'
            }`}
          >
            <p className="font-semibold text-xs sm:text-sm">{exp.company}</p>
            <p className="text-[11px] sm:text-xs text-gray-500">{exp.location} • {exp.date}</p>
          </button>
        ))}
      </div>

      {/* Experience Details */}
      <AnimatePresence mode="wait">
        {experiences.map((exp) => {
          if (exp.id !== activeId) return null;
          
          return (
            <motion.div
              key={exp.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-cyan-500/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <p className="text-base sm:text-lg font-semibold text-cyan-400">{exp.role}</p>
                {exp.url && (
                  <a
                    href={exp.url}
                    target={exp.url.startsWith('http') ? '_blank' : undefined}
                    rel={exp.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-100 bg-cyan-500/15 hover:bg-cyan-500/25 px-2.5 py-1 rounded-md border border-cyan-400/30 transition-colors"
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="flex gap-2 text-xs sm:text-sm text-gray-300"
                  >
                    <Award className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-cyan-500/20">
                  {exp.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      className="bg-white/5 rounded-lg p-2.5 border border-white/10 text-center"
                    >
                      <p className="text-xs sm:text-sm font-bold text-cyan-400 break-words">{metric.value}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 break-words">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
