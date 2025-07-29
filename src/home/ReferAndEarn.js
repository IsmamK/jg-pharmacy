"use client"

import Image from 'next/image';

const ReferAndEarn = () => {
  return (
    <div className="px-8 py-12 "> {/* px-8 = 32px */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Content Section */}
          <div className="p-8 md:p-12 flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refer & Earn</h2>
            <p className="text-lg text-gray-700 mb-6">
              Share Arogga App with your friends & keep
              earning 40 Taka each successful refer.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Start Referring
            </button>
          </div>

          {/* Image Section */}
          <div className="hidden md:block flex-1 relative h-80">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
              alt="Happy person referring friends"
              className="w-full h-full object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;