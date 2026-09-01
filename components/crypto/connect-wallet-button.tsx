'use client'

import React, { useState } from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { Wallet, ShieldCheck, LogOut, ChevronDown, Sparkles, Copy, Check } from 'lucide-react'

export function ConnectWalletButton() {
  const { address, isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: balanceData } = useBalance({ address })

  // Demo Wallet State for seamless evaluation without MetaMask
  const [demoAddress, setDemoAddress] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const activeAddress = address || demoAddress
  const isWalletActive = isConnected || !!demoAddress

  const formattedAddress = activeAddress
    ? `${activeAddress.slice(0, 6)}...${activeAddress.slice(-4)}`
    : ''

  const displayBalance = address && balanceData
    ? `${parseFloat(balanceData.formatted).toFixed(3)} ${balanceData.symbol}`
    : demoAddress
    ? '3.425 ETH'
    : '0.00 ETH'

  const handleCopyAddress = () => {
    if (activeAddress) {
      navigator.clipboard.writeText(activeAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleConnectDemo = () => {
    setDemoAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976F')
    setIsOpen(false)
  }

  const handleDisconnectAll = () => {
    if (isConnected) disconnect()
    setDemoAddress(null)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      {!isWalletActive ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400 p-[1px] font-medium text-sm text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-[11px] bg-slate-950 w-full h-full group-hover:bg-slate-900/90 transition-colors">
            <Wallet className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
              Connect Wallet
            </span>
          </span>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          {/* Balance Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{displayBalance}</span>
          </div>

          {/* Wallet Address Dropdown Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/30 text-slate-200 text-xs sm:text-sm font-mono shadow-md transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{formattedAddress}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      )}

      {/* Modal / Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-3 w-80 z-50 rounded-2xl bg-slate-900/95 border border-cyan-500/30 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
            {!isWalletActive ? (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Connect Web3 Wallet
                  </h3>
                </div>

                <div className="mt-4 space-y-2.5">
                  {connectors.map((connector) => (
                    <button
                      key={connector.uid}
                      onClick={() => {
                        connect({ connector })
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all group cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          🦊
                        </span>
                        <span>{connector.name}</span>
                      </span>
                      <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Connect →
                      </span>
                    </button>
                  ))}

                  {/* Demo Wallet Fallback */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-xs text-slate-400 mb-2 font-sans">No crypto wallet installed?</p>
                    <button
                      onClick={handleConnectDemo}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-950/60 to-emerald-950/60 hover:from-cyan-900/60 hover:to-emerald-900/60 border border-cyan-500/30 text-cyan-300 text-sm font-medium transition-all group cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>Connect Demo Wallet</span>
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">3.42 ETH</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Ethereum Mainnet
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">{demoAddress ? 'Demo Mode' : 'Connected'}</span>
                </div>

                <div className="my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Connected Address</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-300 truncate max-w-[180px]">
                      {activeAddress}
                    </span>
                    <button
                      onClick={handleCopyAddress}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy Address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="mb-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between">
                  <span className="text-xs text-slate-300">ETH Balance</span>
                  <span className="text-sm font-mono font-bold text-cyan-300">{displayBalance}</span>
                </div>

                <button
                  onClick={handleDisconnectAll}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Disconnect Wallet
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
