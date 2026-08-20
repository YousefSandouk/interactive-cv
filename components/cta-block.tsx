'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, MessageCircle } from 'lucide-react';

export function CTABlock() {
  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-6">
        <div className="space-y-2 sm:space-y-3 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-white">Ready to Transform?</h2>
          <p className="text-xs sm:text-sm text-gray-400 text-pretty">
            Let&apos;s discuss how AI-powered strategy can drive growth for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {/* Request Case Study Button */}
          <motion.a
            href="mailto:yuusifsanduk95@gmail.com?subject=Request%20AI%20Case%20Study"
            className="cyber-border group relative px-4 py-3.5 sm:px-5 sm:py-4 rounded-lg bg-cyan-500/10 text-cyan-400 font-semibold text-xs sm:text-sm transition-all overflow-hidden flex items-center justify-center cursor-pointer touch-manipulation active:scale-[0.98]"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-2 relative z-10">
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>Request AI Case Study</span>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Schedule Discussion Button */}
          <motion.a
            href="mailto:yuusifsanduk95@gmail.com?subject=Schedule%20Strategy%20Discussion"
            className="cyber-border group relative px-4 py-3.5 sm:px-5 sm:py-4 rounded-lg bg-cyan-500/10 text-cyan-400 font-semibold text-xs sm:text-sm transition-all overflow-hidden flex items-center justify-center cursor-pointer touch-manipulation active:scale-[0.98]"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 relative z-10">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>Schedule Discussion</span>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* WhatsApp Direct Link */}
          <motion.a
            href="https://wa.me/60146354792"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-border group relative px-4 py-3.5 sm:px-5 sm:py-4 rounded-lg bg-cyan-500/10 text-cyan-400 font-semibold text-xs sm:text-sm transition-all overflow-hidden flex items-center justify-center cursor-pointer touch-manipulation active:scale-[0.98]"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 relative z-10">
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>Chat on WhatsApp</span>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Contact info & Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500 border-t border-white/10 pt-3.5 sm:pt-4 text-center sm:text-left">
          <p>Join 100+ companies transforming their growth strategy</p>
          <a
            href="mailto:yuusifsanduk95@gmail.com"
            className="text-cyan-400 hover:underline font-medium transition-colors"
          >
            yuusifsanduk95@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
