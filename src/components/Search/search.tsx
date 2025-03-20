"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { searchStocks } from "@/lib/api"
import type { StockSearchResult } from "@/lib/types"

export default function SearchPage({ back }: { back: () => void }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<StockSearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length >= 3) {
        handleSearch()
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, )

  const handleSearch = async () => {
    if (query.length < 3) {
      setResults([])
      return
    }

    setIsSearching(true)
    try {
      const searchResults = await searchStocks(query)
      setResults(searchResults)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleBack = () => {
    back(); 
  };

  const handleSelectStock = (symbol: string) => {
    router.push(`/?symbol=${symbol}`)
    back(); 

  }

  return (
    <div className="text-black max-w-2xl mx-auto bg-white">
      <div className="p-4 border-b flex items-center gap-2">
        <button onClick={handleBack} className="p-1 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="w-full p-2 pl-10 border border-slate-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Search by name or stock"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="p-4">
        {query.length < 3 ? (
          <div className="flex flex-col items-center justify-center h-80 text-gray-500">
            <p className="text-lg">Type 3 or more characters</p>
            <p>to start searching</p>
          </div>
        ) : isSearching ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No results found</div>
        ) : (
          <ul className="divide-y">
            {results.map((stock) => (
              <li
                key={stock.symbol}
                className="py-3 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSelectStock(stock.symbol)}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{stock.symbol}</p>
                    <p className="text-sm text-gray-600">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{stock.price}</p>
                    <p className={`text-sm ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

