import { NextResponse } from 'next/server'

export interface CryptoCoin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  sparkline_in_7d?: {
    price: number[]
  }
}

// Fallback high-fidelity data in case of API rate limits
const MOCK_COINS: CryptoCoin[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    current_price: 94850.25,
    market_cap: 1870540000000,
    market_cap_rank: 1,
    total_volume: 42150000000,
    high_24h: 96200.0,
    low_24h: 93400.5,
    price_change_24h: 1420.5,
    price_change_percentage_24h: 2.85,
    sparkline_in_7d: {
      price: [91200, 92100, 91800, 93400, 92900, 94100, 94850],
    },
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    current_price: 3420.8,
    market_cap: 411800000000,
    market_cap_rank: 2,
    total_volume: 24800000000,
    high_24h: 3510.0,
    low_24h: 3350.2,
    price_change_24h: 70.8,
    price_change_percentage_24h: 4.12,
    sparkline_in_7d: {
      price: [3150, 3210, 3190, 3300, 3280, 3390, 3420],
    },
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    current_price: 1.0,
    market_cap: 118400000000,
    market_cap_rank: 3,
    total_volume: 68000000000,
    high_24h: 1.002,
    low_24h: 0.998,
    price_change_24h: 0.0001,
    price_change_percentage_24h: 0.01,
    sparkline_in_7d: {
      price: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    },
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    current_price: 685.4,
    market_cap: 99400000000,
    market_cap_rank: 4,
    total_volume: 1850000000,
    high_24h: 698.0,
    low_24h: 672.0,
    price_change_24h: -8.6,
    price_change_percentage_24h: -1.24,
    sparkline_in_7d: {
      price: [690, 695, 680, 688, 692, 689, 685],
    },
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    current_price: 214.9,
    market_cap: 101200000000,
    market_cap_rank: 5,
    total_volume: 8900000000,
    high_24h: 222.5,
    low_24h: 204.0,
    price_change_24h: 12.4,
    price_change_percentage_24h: 6.12,
    sparkline_in_7d: {
      price: [185, 192, 190, 204, 198, 208, 214],
    },
  },
  {
    id: 'ripple',
    symbol: 'xrp',
    name: 'XRP',
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
    current_price: 2.38,
    market_cap: 135800000000,
    market_cap_rank: 6,
    total_volume: 14200000000,
    high_24h: 2.52,
    low_24h: 2.21,
    price_change_24h: 0.18,
    price_change_percentage_24h: 8.18,
    sparkline_in_7d: {
      price: [1.95, 2.05, 2.1, 2.18, 2.25, 2.3, 2.38],
    },
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png',
    current_price: 1.0,
    market_cap: 39500000000,
    market_cap_rank: 7,
    total_volume: 9800000000,
    high_24h: 1.001,
    low_24h: 0.999,
    price_change_24h: -0.0001,
    price_change_percentage_24h: -0.01,
    sparkline_in_7d: {
      price: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    },
  },
  {
    id: 'cardano',
    symbol: 'ada',
    name: 'Cardano',
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    current_price: 0.88,
    market_cap: 31200000000,
    market_cap_rank: 8,
    total_volume: 2100000000,
    high_24h: 0.92,
    low_24h: 0.84,
    price_change_24h: -0.02,
    price_change_percentage_24h: -2.22,
    sparkline_in_7d: {
      price: [0.82, 0.85, 0.89, 0.91, 0.87, 0.90, 0.88],
    },
  },
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
    current_price: 0.365,
    market_cap: 53500000000,
    market_cap_rank: 9,
    total_volume: 4800000000,
    high_24h: 0.388,
    low_24h: 0.342,
    price_change_24h: 0.018,
    price_change_percentage_24h: 5.19,
    sparkline_in_7d: {
      price: [0.31, 0.33, 0.32, 0.35, 0.34, 0.36, 0.365],
    },
  },
  {
    id: 'avalanche-2',
    symbol: 'avax',
    name: 'Avalanche',
    image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
    current_price: 45.2,
    market_cap: 18400000000,
    market_cap_rank: 10,
    total_volume: 1250000000,
    high_24h: 47.8,
    low_24h: 43.1,
    price_change_24h: 1.8,
    price_change_percentage_24h: 4.15,
    sparkline_in_7d: {
      price: [39.5, 41.2, 40.8, 43.0, 42.5, 44.1, 45.2],
    },
  },
]

export async function GET() {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h',
      {
        next: { revalidate: 60 },
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (!res.ok) {
      console.warn(`CoinGecko API returned status ${res.status}. Utilizing fallback cached dataset.`)
      return NextResponse.json({
        success: true,
        source: 'cache_fallback',
        data: MOCK_COINS,
        globalStats: calculateGlobalStats(MOCK_COINS),
      })
    }

    const data: CryptoCoin[] = await res.json()

    return NextResponse.json({
      success: true,
      source: 'coingecko_live',
      data,
      globalStats: calculateGlobalStats(data),
    })
  } catch (error) {
    console.error('Error fetching CoinGecko market data:', error)
    return NextResponse.json({
      success: true,
      source: 'error_fallback',
      data: MOCK_COINS,
      globalStats: calculateGlobalStats(MOCK_COINS),
    })
  }
}

function calculateGlobalStats(coins: CryptoCoin[]) {
  const totalMarketCap = coins.reduce((acc, c) => acc + (c.market_cap || 0), 0)
  const totalVolume = coins.reduce((acc, c) => acc + (c.total_volume || 0), 0)
  const btcCoin = coins.find((c) => c.symbol.toLowerCase() === 'btc')
  const ethCoin = coins.find((c) => c.symbol.toLowerCase() === 'eth')

  const btcDominance = btcCoin && totalMarketCap > 0 ? ((btcCoin.market_cap / totalMarketCap) * 100).toFixed(1) : '56.4'
  const ethDominance = ethCoin && totalMarketCap > 0 ? ((ethCoin.market_cap / totalMarketCap) * 100).toFixed(1) : '16.8'

  const avg24hChange = (
    coins.reduce((acc, c) => acc + (c.price_change_percentage_24h || 0), 0) / coins.length
  ).toFixed(2)

  return {
    totalMarketCap,
    totalVolume,
    btcDominance: `${btcDominance}%`,
    ethDominance: `${ethDominance}%`,
    avg24hChange: Number(avg24hChange),
  }
}
