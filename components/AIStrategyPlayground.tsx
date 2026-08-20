'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const markets = ['Saudi Arabia', 'UAE', 'Global'];
const industries = ['SaaS', 'FinTech', 'E-commerce', 'Healthcare'];

export function AIStrategyPlayground() {
  const [market, setMarket] = useState('Saudi Arabia');
  const [industry, setIndustry] = useState('SaaS');
  const [budget, setBudget] = useState(50);

  // Mock KPI calculations
  const roi = Math.round(150 + budget * 1.5 + (market === 'Global' ? 30 : 0));
  const cac = Math.max(10, 100 - budget / 2);
  const conversionRate = (budget / 100) * 8 + (industry === 'FinTech' ? 2 : 0);

  return (
    <motion.div
      className="glass rounded-2xl p-5 md:p-8 h-full flex flex-col"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">AI Strategy Playground</h2>
      </div>

      <div className="space-y-5 sm:space-y-6 flex-1">
        {/* Market Selection */}
        <div>
          <label className="text-xs sm:text-sm text-gray-400 block mb-2 font-medium">Market Focus</label>
          <div className="flex gap-2 flex-wrap">
            {markets.map((m) => (
              <motion.button
                key={m}
                onClick={() => setMarket(m)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all touch-manipulation cursor-pointer ${
                  market === m
                    ? 'bg-cyan-500/30 border border-cyan-400 text-cyan-300'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                {m}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Industry Selection */}
        <div>
          <label className="text-xs sm:text-sm text-gray-400 block mb-2 font-medium">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind} className="bg-gray-900 text-white">
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs sm:text-sm text-gray-400 font-medium">
              Budget:
            </label>
            <span className="text-sm sm:text-base font-semibold text-cyan-400">${budget}k</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 touch-manipulation"
          />
        </div>

        {/* KPI Output */}
        <motion.div
          key={`${market}-${industry}-${budget}`}
          className="mt-6 pt-5 border-t border-white/10"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">Projected Metrics</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2.5 sm:p-3 text-center sm:text-left">
              <p className="text-[11px] sm:text-xs text-gray-400">ROI %</p>
              <p className="text-base sm:text-lg font-bold text-cyan-400">{roi}%</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2.5 sm:p-3 text-center sm:text-left">
              <p className="text-[11px] sm:text-xs text-gray-400">CAC</p>
              <p className="text-base sm:text-lg font-bold text-cyan-400">${cac.toFixed(0)}</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2.5 sm:p-3 text-center sm:text-left">
              <p className="text-[11px] sm:text-xs text-gray-400">Conv. Rate</p>
              <p className="text-base sm:text-lg font-bold text-cyan-400">{conversionRate.toFixed(1)}%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
