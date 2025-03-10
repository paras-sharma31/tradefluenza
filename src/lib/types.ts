export interface Stock {
    symbol: string
    name: string
    price: number
    change: number
    changePercent: number
    marketCap: string
    marketCapValue: string
    sector: string
    industry: string
    description: string
    oneMonthReturn: number
    oneYearReturn: number
    fiftyTwoWeekHigh: number
    fiftyTwoWeekLow: number
    beta: number
    pe: number
    pb: number
    dividendYield: number
    lastUpdated: string
  }
  
  export interface StockSearchResult {
    symbol: string
    name: string
    price: number
    change: number
  }
  
  