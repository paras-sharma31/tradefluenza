import type { Stock } from "@/lib/types"

interface StockDetailsProps {
    stock: Stock
    handleSearch: () => void
}

export default function StockDetails({ stock, handleSearch }: StockDetailsProps) {
    return (
        <div className="p-4">
            <div className=" py-2 flex justify-between items-center border-b border-slate-400 ">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">{stock.symbol}</h2>
                        <p className="text-gray-500 font-medium">{stock.marketCap}</p>
                    </div>

                    <div className="flex items-center mt-2">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                        <p className="text-gray-600">
                            {stock.sector} → {stock.industry}
                        </p>
                    </div>
                </div>

                <button onClick={handleSearch} className="p-2 rounded-full hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </div>


            <div className="mt-4">
                <p className="text-gray-700">
                    {stock.description} <span className="text-blue-500">Read More</span>
                </p>
            </div>

            <div className="mt-4">
                <div className="flex items-baseline">
                    <h3 className="text-3xl font-bold text-green-600">₹{stock.price}</h3>
                    <span className={`ml-2 ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.change).toFixed(2)} (
                        {Math.abs(stock.changePercent).toFixed(2)}%)
                    </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Last updated at: {stock.lastUpdated}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                    <p className="text-gray-500">1M Return</p>
                    <p className={`font-semibold ${stock.oneMonthReturn >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stock.oneMonthReturn}%
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">52W High</p>
                    <p className="font-semibold">{stock.fiftyTwoWeekHigh}</p>
                </div>
                <div>
                    <p className="text-gray-500">Mkt. Cap (Cr)</p>
                    <p className="font-semibold">{stock.marketCapValue}</p>
                </div>

                <div>
                    <p className="text-gray-500">1Y Return</p>
                    <p className={`font-semibold ${stock.oneYearReturn >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stock.oneYearReturn}%
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">52W Low</p>
                    <p className="font-semibold">{stock.fiftyTwoWeekLow}</p>
                </div>
                <div>
                    <p className="text-gray-500">Beta</p>
                    <p className="font-semibold">{stock.beta}</p>
                </div>

                <div>
                    <p className="text-gray-500">PE</p>
                    <p className="font-semibold">{stock.pe}</p>
                </div>
                <div>
                    <p className="text-gray-500">PB</p>
                    <p className="font-semibold">{stock.pb}</p>
                </div>
                <div>
                    <p className="text-gray-500">Div. Yield</p>
                    <p className="font-semibold">{stock.dividendYield}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="py-3 px-4 bg-green-50 text-green-600 font-medium rounded-lg border border-green-600">
                    Buy
                </button>
                <button className="py-3 px-4 bg-red-50 text-red-600 font-medium rounded-lg border border-red-600">Sell</button>
            </div>
        </div>
    )
}

