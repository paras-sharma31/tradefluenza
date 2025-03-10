"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import StockDetails from "@/components/Stock-Details"
import type { Stock, StockSearchResult } from "@/lib/types"
import { fetchStockData, searchStocks } from "@/lib/api"
import SearchPage from "@/components/Search/search"

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams() 
  const symbol = searchParams.get("symbol")

  const [stock, setStock] = useState<Stock | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTab, setSearchTab] = useState(false)

  useEffect(() => {
    const loadStockData = async () => {
      try {
        if (symbol) {
          const stockData = await searchStocks(symbol)
          if (stockData.length > 0) {
            setStock(stockData[0]) 
          }
        } else {
          const defaultStock = await fetchStockData("ITC") 
          setStock(defaultStock)
        }
      } catch (error) {
        console.error("Failed to load stock data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadStockData()
  }, [symbol]) 

  const handleSearch = () => {
    setSearchTab((prev) => !prev)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <main className="max-w-2xl bg-white text-black my-4 rounded-md border">
      {searchTab ? (
        <SearchPage back={handleSearch} />
      ) : (
        stock && <StockDetails stock={stock} handleSearch={handleSearch} />
      )}
    </main>
  )
}
