import React from 'react';

const OrderComponent = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-8 sm:px-[32px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content - Compact Steps */}
          <div className="lg:w-1/2 space-y-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">আরোগ্য থেকে অর্ডার কিভাবে করবেন?</h1>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 font-medium text-sm">1</span>
                </div>
                <p className="text-gray-700 text-base">
  আমাদের “A Grade Pharmacist” আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।  
                  </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-pink-100 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-pink-600 font-medium text-sm">2</span>
                </div>
                <p className="text-gray-700 text-base">আমাদের 'A Grade Pharmacist' আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-emerald-600 font-medium text-sm">3</span>
                </div>
                <p className="text-gray-700 text-base">১৮-৪৮ ঘন্টার মধ্য আপনার ডেলিভারি বুঝে নিন।</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 font-medium text-sm">4</span>
                </div>
                <p className="text-gray-700 text-base">ডাউনলোড করুন আরোগ্য অ্যাপ, আর উপভোগ করুন আকর্ষণীয় মূল্যছাড়।</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-shadow">
                CERTIFON Google Play
              </button>
              <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-shadow">
                Download on the App Store
              </button>
            </div>
          </div>

          {/* Right Video - Compact */}
          <div className="lg:w-1/2 bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%] bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">how to order video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;