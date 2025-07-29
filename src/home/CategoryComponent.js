"use client"

import { useState } from 'react';

const CategoryComponent = () => {
  const categories = [
    { name: 'Medicine', icon: '💊', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { name: 'Breakfast & Nutrition', icon: '🥗', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { name: 'Diabetes Care', icon: '🩸', bgColor: 'bg-red-50', textColor: 'text-red-600' },
    { name: 'Skincare', icon: '🧴', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { name: 'Condoms', icon: '🛡️', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { name: 'Baby Care', icon: '👶', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
    { name: 'Natural Wellness', icon: '🌿', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
    { name: 'Fitness', icon: '💪', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    { name: 'Cat Care', icon: '🐱', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' },
    { name: 'Snacks', icon: '🍿', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
    { name: 'Elderly Care', icon: '👵', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
    { name: 'Haircare', icon: '💇', bgColor: 'bg-violet-50', textColor: 'text-violet-600' },
    { name: 'Wellness', icon: '🛡️', bgColor: 'bg-cyan-50', textColor: 'text-cyan-600' },
    { name: 'Diapering', icon: '🧷', bgColor: 'bg-rose-50', textColor: 'text-rose-600' },
    { name: 'Immunity Boosters', icon: '🛡️', bgColor: 'bg-lime-50', textColor: 'text-lime-600' },
    { name: 'Vitamins', icon: '💊', bgColor: 'bg-fuchsia-50', textColor: 'text-fuchsia-600' },
    { name: 'Veterinary', icon: '🐶', bgColor: 'bg-sky-50', textColor: 'text-sky-600' },
    { name: 'Dairy', icon: '🍦', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
    { name: 'Homeopathy', icon: '🌱', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { name: 'Personal Care', icon: '🧼', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { name: 'Lubricants', icon: '🔗', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { name: 'Feeding', icon: '🍼', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
    { name: 'Digestive Support', icon: '🌿', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
    { name: 'Gym Supplements', icon: '🏋️', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
  ];

  const [showAll, setShowAll] = useState(false);
  const mobileInitialCount = 8;
  const desktopInitialCount = 18;
  
  const visibleCategories = showAll 
    ? categories 
    : categories.slice(0, typeof window !== 'undefined' && window.innerWidth < 768 ? mobileInitialCount : desktopInitialCount);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {visibleCategories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:-translate-y-1`}
            >
              <button 
                className="w-full h-full p-3 sm:p-4 flex flex-col items-center justify-center"
                aria-label={category.name}
              >
                <span className={`text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200 ${category.textColor}`}>
                  {category.icon}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center line-clamp-2">
                  {category.name}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 sm:mt-6">
          <button
            onClick={toggleShowAll}
            className={`inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white ${
              showAll 
                ? 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200`}
          >
            {showAll ? 'Show Less Categories' : 'Show More Categories'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${
                showAll ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;