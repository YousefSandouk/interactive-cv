import { Metadata } from 'next'
import { CryptoDashboard } from '@/components/crypto/crypto-dashboard'

export const metadata: Metadata = {
  title: 'Crypto Wallet & Portfolio Dashboard | Web3 Showcase',
  description: 'A modern, real-time Web3 crypto portfolio and market intelligence dashboard built with Next.js, Wagmi, Prisma, and Supabase.',
}

export default function CryptoPage() {
  return <CryptoDashboard />
}
