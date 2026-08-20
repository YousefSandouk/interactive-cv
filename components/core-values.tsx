'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Target, Award } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  testimonial: string;
  attribution: string;
}

const values: Value[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Execution Under Pressure',
    testimonial:
      '"Yousef delivered a complete go-to-market strategy for our MENA expansion in just 3 weeks—execution was flawless."',
    attribution: '— Founder, Dubai-based SaaS Unicorn',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Strategic Leadership',
    testimonial:
      '"His ability to translate market insights into actionable strategies scaled our business 5x in emerging markets."',
    attribution: '— CEO, Regional Marketing Agency',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Data-Driven Innovation',
    testimonial:
      '"Implemented AI-powered analytics that increased our conversion rates by 48% and reduced CAC by 35% immediately."',
    attribution: '— CMO, FinTech Startup',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Technical + Creative Fusion',
    testimonial:
      '"Rare combination of technical depth and creative storytelling—transformed how we position AI solutions in market."',
    attribution: '— VP Product, AI Solutions Company',
  },
];

export function CoreValues() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white">Core Values</h2>
        <span className="text-[10px] text-cyan-400/80 md:hidden font-medium">Tap value for testimonial</span>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
        {values.map((value, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedValue(selectedValue === index ? null : index)}
            className={`p-3 sm:p-4 rounded-lg transition-all border touch-manipulation cursor-pointer min-h-[90px] sm:min-h-[105px] flex flex-col items-center justify-center ${
              selectedValue === index
                ? 'bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="text-cyan-400 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">{value.icon}</div>
              <span className="text-[11px] sm:text-xs font-semibold text-white text-center leading-tight break-words">
                {value.title}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Testimonial Panel */}
      <AnimatePresence mode="wait">
        {selectedValue !== null && (
          <motion.div
            key={selectedValue}
            className="flex-1 bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-cyan-300 italic mb-2 sm:mb-3">
              {values[selectedValue].testimonial}
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400">{values[selectedValue].attribution}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
