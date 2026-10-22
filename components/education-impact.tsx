'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Code2 } from 'lucide-react';

const educationImpact = [
  {
    icon: Code2,
    title: 'Continuous Software Engineering & Systems',
    detail: 'Modern React, TypeScript & AI Systems',
    description: 'Relentless hands-on builder mastering production React ecosystems, Web3 protocols, and scalable AI API integrations',
  },
  {
    icon: Heart,
    title: 'Open Source & Humanitarian Engineering',
    detail: '5 Years Volunteer & Community Builder',
    description: 'Coordinated relief operations, tech initiatives, and built open-source developer showcases for real-world impact',
  },
  {
    icon: Award,
    title: 'Engineering Recognition',
    detail: 'B2B SaaS & Web3 Application Delivery',
    description: 'Demonstrated track record of delivering resilient, type-safe frontend architectures that solve complex business workflows',
  },
];

export function EducationImpact() {
  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Education & Impact</h2>

      <div className="space-y-4 sm:space-y-6 flex-1">
        {educationImpact.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-3 sm:gap-4 pb-3.5 sm:pb-4 border-b border-white/10 last:border-0"
            >
              <div className="flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-xs sm:text-sm">{item.title}</p>
                <p className="text-[11px] sm:text-xs text-cyan-400 mb-0.5 sm:mb-1 font-medium">{item.detail}</p>
                <p className="text-[11px] sm:text-xs text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
