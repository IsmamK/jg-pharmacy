"use client";
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement, 
  Title, Tooltip, Legend, ArcElement
);

export default function DashboardStats() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Chart data configurations remain the same
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 28000, 22000, 30000],
        backgroundColor: '#2377fc',
        borderRadius: 6,
      },
      {
        label: 'Orders',
        data: [8000, 12000, 10000, 15000, 18000, 20000],
        backgroundColor: '#22c55e',
        borderRadius: 6,
      }
    ]
  };

  const miniAreaData = (color) => ({
    labels: ['', '', '', '', ''],
    datasets: [
      {
        data: [30, 50, 35, 70, 60],
        borderColor: color,
        backgroundColor: `${color}20`,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  });

  const doughnutData = {
    labels: ['Men Fashion', 'Accessory', 'Sport shoes', 'Underwear', 'Women Fashion'],
    datasets: [
      {
        data: [12402, 8305, 7802, 5493, 4000],
        backgroundColor: ['#2377fc', '#22c55e', '#beedcf', '#ff5200', '#ffc2a5'],
        borderWidth: 0,
      }
    ]
  };

  // Chart options remain the same
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const miniAreaOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { display: false },
      x: { display: false }
    }
  };

  const stats = [
    { title: "Total Sales", value: "34,945", change: "1.56%", color: "#2377fc" },
    { title: "Total Income", value: "$37,802", change: "1.56%", color: "#22c55e" },
    { title: "Orders Paid", value: "34,945", change: "0.00%", color: "#beedcf" },
    { title: "Total Visitor", value: "34,945", change: "1.56%", color: "#ff5200" }
  ];

  const categories = [
    { name: "Men Fashion", value: "$12,402", change: "2.5%", color: "#2377fc" },
    { name: "Accessory", value: "$8,305", change: "1.2%", color: "#22c55e" },
    { name: "Sport shoes", value: "$7,802", change: "3.1%", color: "#beedcf" },
    { name: "Underwear", value: "$5,493", change: "0.8%", color: "#ff5200" },
    { name: "Women Fashion", value: "$4,000", change: "1.5%", color: "#ffc2a5" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Sales Summary</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ height: 'calc(100vh - 180px)' }}>
        {/* Column 1 - Fixed height cards */}
        <div className="lg:col-span-3 flex flex-col" style={{ height: '100%' }}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Key Metrics</h2>
          <div className="grid grid-cols-1 gap-4 flex-1">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={cardVariants}
                className="bg-white p-4 rounded-xl shadow-sm border-l-4 h-28 relative overflow-hidden"
                style={{ borderLeftColor: stat.color }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-16">
                  <Line data={miniAreaData(stat.color)} options={miniAreaOptions} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <p className="text-xl font-bold mt-1 text-gray-800">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs font-medium ${parseFloat(stat.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    {parseFloat(stat.change) >= 0 ? (
                      <svg className="w-3 h-3 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-red-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2 - Fixed height container */}
        <div className="lg:col-span-4" style={{ height: '100%' }}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Sales by Category</h2>
          <div className="bg-white p-5 rounded-xl shadow-sm h-full flex flex-col">
            <div className="flex flex-col lg:flex-row flex-1 gap-4 overflow-hidden">
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="space-y-3 flex-1 overflow-y-auto">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      variants={cardVariants}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-2.5 h-2.5 rounded-full mr-2" 
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">{category.value}</p>
                        <p className={`text-xs ${parseFloat(category.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {category.change}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Total Mar 20, 2023</p>
                  <p className="text-lg font-bold text-gray-800">$37,802</p>
                  <p className="text-xs text-green-500">0.56%</p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full h-full max-h-[200px]"
                >
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-lg font-bold text-gray-800">$37,802</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 - Fixed height container */}
        <div className="lg:col-span-5" style={{ height: '100%' }}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Earnings Revenue</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-5 rounded-xl shadow-sm h-full flex flex-col"
          >
            <div className="flex-1" style={{ height: '60%' }}>
              <Bar data={earningsData} options={chartOptions} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4" style={{ height: '40%' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 p-3 rounded-lg flex flex-col justify-center"
              >
                <p className="text-xs text-gray-500">Revenue</p>
                <p className="text-lg font-bold text-gray-800">$37,802</p>
                <p className="text-xs text-green-500">0.56%</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 p-3 rounded-lg flex flex-col justify-center"
              >
                <p className="text-xs text-gray-500">Order</p>
                <p className="text-lg font-bold text-gray-800">$28,305</p>
                <p className="text-xs text-green-500">0.56%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}