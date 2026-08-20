'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

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
  achievements: string[];
  metrics?: Metric[];
}

const experiences: Experience[] = [
  {
    id: 1,
    date: '2022 - 2026',
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
    id: 2,
    date: '2019 - 2023',
    company: 'Burencý Technology',
    location: 'Dubai',
    role: 'Senior Marketing Manager & Campaign Lead',
    achievements: [
      'Led global marketing strategies integrating automation across multiple channels',
      'Managed high-budget digital campaigns with measurable ROI optimization',
      'Scaled global brand presence and established market-leading positioning',
      'Directed strategic campaigns across MENA region with multi-million dollar budgets'
    ]
  },
  {
    id: 3,
    date: '2020 - 2021',
    company: 'Onzo Marketing',
    location: 'Dubai',
    role: 'Marketing Manager (Part-time)',
    achievements: [
      'Focused on ROI-driven growth strategies and revenue acceleration',
      'Led digital transformation initiatives across client portfolio',
      'Implemented data-driven performance marketing frameworks',
      'Optimized customer acquisition cost across multiple verticals'
    ]
  },
  {
    id: 4,
    date: '2016 - 2022',
    company: 'Cinematography (Freelance)',
    location: 'MENA Region',
    role: 'Producer - Al Jazeera & Al Araby TV',
    achievements: [
      'Produced high-stakes TV reports and investigative documentaries',
      'Managed production workflows for broadcast television content',
      'Coordinated international crews and complex filming logistics',
      'Delivered award-caliber journalistic content under tight deadlines'
    ]
  },
  {
    id: 5,
    date: '2014 - 2016',
    company: '6 Yard',
    location: 'Jordan',
    role: 'Marketing Coordinator',
    achievements: [
      'Orchestrated brand activations and on-ground marketing logistics',
      'Managed event coordination and experiential marketing campaigns',
      'Developed local market strategies and community engagement programs',
      'Supported brand positioning across Levantine markets'
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
              <p className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">{exp.role}</p>
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
