import type { Stock, StockSearchResult } from "./types"

// Mock data for ITC Ltd
const mockStockData: Stock = {
  symbol: "ITC Ltd",
  name: "ITC Limited",
  price: 405.7,
  change: 0.65,
  changePercent: 0.16,
  marketCap: "LARGECAP",
  marketCapValue: "5,02,540.38",
  sector: "Consumer Staples",
  industry: "FMCG - Tobacco",
  description:
    "ITC Limited is a holding company engaged in the marketing of fast moving consumer goods (FMCG). The ...",
  oneMonthReturn: -9.22,
  oneYearReturn: 5.14,
  fiftyTwoWeekHigh: 499.96,
  fiftyTwoWeekLow: 377.79,
  beta: 0.62,
  pe: 24.56,
  pb: 6.71,
  dividendYield: 3.41,
  lastUpdated: "3:56pm on 6 Mar",
}

// Mock data for search results
const mockSearchResults: StockSearchResult[] = [
  { symbol: "ITC", name: "ITC Limited", price: 405.7, change: 0.16 },
  { symbol: "INFY", name: "Infosys Limited", price: 1456.8, change: -0.75 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3789.45, change: 1.23 },
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2345.6, change: 0.45 },
  { symbol: "HDFCBANK", name: "HDFC Bank Limited", price: 1678.9, change: -0.32 },
  { symbol: "ICICIBANK", name: "ICICI Bank Limited", price: 987.65, change: 0.87 },
  { symbol: "SBIN", name: "State Bank of India", price: 567.8, change: 1.45 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel Limited", price: 876.5, change: -0.18 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever Limited", price: 2456.75, change: 0.65 },
  { symbol: "TATAMOTORS", name: "Tata Motors Limited", price: 654.3, change: 2.1 },
]

// In a real application, you would replace these with actual API calls
// For example, using Alpha Vantage, Yahoo Finance, or another financial API

export async function fetchStockData(symbol: string): Promise<Stock> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // In a real app, you would fetch data from an API
  // const response = await fetch(`https://api.example.com/stocks/${symbol}`);
  // return await response.json();

  return mockStockData
}

export async function searchStocks(query: string): Promise<StockSearchResult[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch data from an API
  // const response = await fetch(`https://api.example.com/stocks/search?q=${query}`);
  // return await response.json();

  // Filter mock data based on query
  return mockSearchResults.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase()),
  )
}

