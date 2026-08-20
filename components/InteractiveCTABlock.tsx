'use client'

import { motion } from 'framer-motion'
import { FileText, Calendar, MessageCircle } from 'lucide-react'

export function CTABlock() {
  const handleCaseStudy = () => {
    window.location.href = 'mailto:yuusifsanduk95@gmail.com?subject=Request%20AI%20Case%20Study'
  }

  const handleSchedule = () => {
    window.location.href = 'mailto:yuusifsanduk95@gmail.com?subject=Schedule%20Strategy%20Discussion'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/60146354792', '_blank')
  }

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="group relative h-full rounded-2xl overflow-hidden p-5 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

      {/* Animated background circuit effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <motion.path
            d="M10,10 L390,10 L390,290 L10,290 Z"
            fill="none"
            stroke="rgba(0, 245, 255, 0.1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Let&apos;s Connect</h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 flex-1">
          Ready to discuss strategic opportunities or explore AI solutions for your business?
        </p>

        <div className="space-y-2.5 sm:space-y-3">
          {/* Case Study Button */}
          <motion.button
            onClick={handleCaseStudy}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative w-full overflow-hidden rounded-lg p-3.5 sm:p-4 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500/60 touch-manipulation cursor-pointer"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">Request AI Case Study</span>
            </div>
          </motion.button>

          {/* Schedule Button */}
          <motion.button
            onClick={handleSchedule}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative w-full overflow-hidden rounded-lg p-3.5 sm:p-4 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500/60 touch-manipulation cursor-pointer"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">Schedule Strategy Discussion</span>
            </div>
          </motion.button>

          {/* WhatsApp Direct Link Button */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative w-full overflow-hidden rounded-lg p-3.5 sm:p-4 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500/60 touch-manipulation cursor-pointer"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">Chat on WhatsApp</span>
            </div>
          </motion.button>
        </div>

        {/* Contact info */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1.5 sm:mb-2">Or reach out directly</p>
          <a
            href="mailto:yuusifsanduk95@gmail.com"
            className="text-xs sm:text-sm text-cyan-400 font-semibold hover:underline transition-colors block"
          >
            yuusifsanduk95@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export { CTABlock as InteractiveCTABlock }
export default CTABlock
