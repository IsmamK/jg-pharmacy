"use client"

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function SummaryDashboard() {
  // Top Products Data
  const topProducts = [
    { name: "Prodotti per il tuo cane", rating: 4.7, sold: 120, profit: "$16,960" },
    { name: "Wholesome Pride Dog Treats", rating: 4.7, sold: 120, profit: "$16,960" },
    { name: "Beneful Baked Delights", rating: 4.7, sold: 120, profit: "$16,960" },
    { name: "Taste of the Wild Premium", rating: 4.7, sold: 120, profit: "$16,960" },
    { name: "Canagan - Britain's Finest", rating: 4.7, sold: 120, profit: "$16,960" }
  ]

  // Earnings Chart Data
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 32000, 35000, 37000, 37500, 37802],
        borderColor: '#2377fc',
        backgroundColor: '#2377fc',
        tension: 0.4
      },
      {
        label: 'Profit',
        data: [22000, 25000, 27000, 28000, 28200, 28305],
        borderColor: '#22c55e',
        backgroundColor: '#22c55e',
        tension: 0.4
      }
    ]
  }

  // Visitors Chart Data
  const visitorsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [1200, 1900, 1700, 2100, 2300, 2500, 2200],
        borderColor: '#ff5200',
        backgroundColor: '#ffc2a5',
        fill: true,
        tension: 0.4
      }
    ]
  }

  // Earnings breakdown data
  const earningsBreakdown = [
    { period: "Today", revenue: "$1,250", profit: "$950", change: "+2.5%" },
    { period: "This Week", revenue: "$8,750", profit: "$6,650", change: "+5.2%" },
    { period: "This Month", revenue: "$37,802", profit: "$28,305", change: "+0.56%" },
    { period: "This Year", revenue: "$215,400", profit: "$161,550", change: "+12.3%" }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Top Products Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Products</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="pb-2">Product</th>
                <th className="text-center pb-2">Review</th>
                <th className="text-center pb-2">Sold</th>
                <th className="text-right pb-2">Profit</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 text-sm font-medium text-gray-800 dark:text-white whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="text-center py-3">
                    <div className="flex items-center justify-center">
                      <span className="text-yellow-400 text-xs mr-1">★★★★★</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{product.rating}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 text-sm text-gray-500 dark:text-gray-400">
                    {product.sold}
                  </td>
                  <td className="text-right py-3 text-sm font-medium text-green-600 dark:text-green-400">
                    {product.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Earnings Card - Reorganized */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Earnings Overview</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {earningsBreakdown.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.period}</p>
              <p className="text-lg font-bold text-gray-800 dark:text-white">{item.revenue}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-green-600 dark:text-green-400">{item.profit} profit</p>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  item.change.startsWith('+') ? 
                  'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-40">
          <Line 
            data={earningsData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    usePointStyle: true,
                  }
                }
              },
              scales: {
                x: { 
                  grid: { display: false },
                  ticks: { color: '#6b7280' }
                },
                y: { 
                  grid: { color: '#e5e7eb', borderDash: [5] },
                  ticks: { color: '#6b7280' }
                }
              }
            }} 
          />
        </div>
      </div>

      {/* Visitors Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Website Visitors</h3>
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Visitors</p>
            <p className="text-xl font-bold text-gray-800 dark:text-white">15,320</p>
          </div>
          <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
            +12.5%
          </span>
        </div>
        <div className="h-40 mt-4">
          <Line 
            data={visitorsData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              elements: { point: { radius: 0 } },
              scales: {
                x: { 
                  grid: { display: false },
                  ticks: { color: '#6b7280' }
                },
                y: { 
                  grid: { color: '#e5e7eb', borderDash: [5] },
                  ticks: { color: '#6b7280' }
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  )
}