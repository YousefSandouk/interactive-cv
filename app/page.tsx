'use client'

import { motion } from 'framer-motion'
import { HeroHeader } from '@/components/hero-header'
import { AIPlayground } from '@/components/ai-playground'
import { SkillMeters } from '@/components/skill-meters'
import { ImpactMatrix } from '@/components/impact-matrix'
import { MarketingFunnel } from '@/components/marketing-funnel'
import { CoreValues } from '@/components/core-values'
import { EducationImpact } from '@/components/education-impact'
import { CTABlock } from '@/components/cta-block'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 max-w-7xl mx-auto">
          <HeroHeader />
        </section>

        {/* Bento Grid */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Row 1 */}
            <div>
              <AIPlayground />
            </div>
            <div>
              <SkillMeters />
            </div>

            {/* Row 2 */}
            <div>
              <ImpactMatrix />
            </div>
            <div>
              <MarketingFunnel />
            </div>

            {/* Row 3 */}
            <div>
              <EducationImpact />
            </div>
            <div>
              <CoreValues />
            </div>

            {/* Row 4 — full width */}
            <div className="md:col-span-2">
              <CTABlock />
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 border-t border-white/5 max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-xs sm:text-sm">
            Interactive Digital Dossier — Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </footer>
      </div>
    </main>
  )
}
