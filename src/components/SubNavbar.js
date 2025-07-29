"use client"

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronRight, FiPhone, FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const SubNavbar = () => {
  const router = useRouter();
  const [showHiddenLinks, setShowHiddenLinks] = useState(false);
  const [hiddenLinksCount, setHiddenLinksCount] = useState(0);
  const containerRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const allCategories = [
    { name: 'Home', path: '/' },
    { name: 'Medicine', path: '/medicine' },
    { name: 'Lab Test', path: '/lab-test' },
    { name: 'Healthcare', path: '/healthcare' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Sexual Wellness', path: '/sexual-wellness' },
    { name: 'Baby & Mom Care', path: '/baby-mom-care' },
    { name: 'Herbal', path: '/herbal' },
    { name: 'HomeCare', path: '/homecare' },
    { name: 'Supplement', path: '/supplement' },
    { name: 'Food & Nutrition', path: '/food-nutrition' },
    { name: 'Career', path: '/career' },
    { name: 'Pet Care', path: '/pet-care' },
    { name: 'Veterinary', path: '/veterinary' },
    { name: 'Homeopathy', path: '/homeopathy' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Upload Prescriptions', path: '/upload-prescriptions' }
  ];

  const handleCategoryClick = (path) => {
    router.push(path);
  };

  useEffect(() => {
    const calculateHiddenLinks = () => {
      if (!containerRef.current || !linksContainerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const shopByCategoryBtn = containerRef.current.querySelector('#shop-by-category');
      const callForOrderBtn = containerRef.current.querySelector('#call-for-order');
      
      if (!shopByCategoryBtn || !callForOrderBtn) return;

      const availableWidth = containerWidth - shopByCategoryBtn.offsetWidth - callForOrderBtn.offsetWidth - 100; // 100px for arrow button and padding
      const links = Array.from(linksContainerRef.current.children);
      
      let totalWidth = 0;
      let visibleCount = 0;

      links.forEach(link => {
        if (totalWidth + link.offsetWidth <= availableWidth) {
          totalWidth += link.offsetWidth;
          visibleCount++;
        }
      });

      setHiddenLinksCount(allCategories.length - visibleCount);
    };

    calculateHiddenLinks();
    window.addEventListener('resize', calculateHiddenLinks);
    return () => window.removeEventListener('resize', calculateHiddenLinks);
  }, []);

  const handleArrowClick = () => {
    if (isAnimating || hiddenLinksCount <= 0) return;
    
    setIsAnimating(true);
    setShowHiddenLinks(!showHiddenLinks);
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="hidden md:block bg-[#2177b3] px-10 py-2 shadow-md w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="flex items-center justify-between w-full"
      >
        {/* Shop By Category Button */}
        <button 
          id="shop-by-category"
          className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition whitespace-nowrap"
          onClick={() => router.push('/categories')}
        >
          <FiMenu className="text-lg" />
          <span className="font-medium">Shop By Category</span>
        </button>

        {/* Categories Links */}
        <div className="flex-1 mx-4 overflow-hidden">
          <div 
            ref={linksContainerRef}
            className={`flex space-x-1 transition-all duration-500 ${showHiddenLinks ? '-translate-x-[20%]' : ''}`}
            style={{ width: showHiddenLinks ? '120%' : '100%' }}
          >
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.path)}
                className="text-white hover:bg-white/20 px-3 py-1 rounded-md transition text-sm font-medium whitespace-nowrap"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Arrow Button (only shows when there are hidden links) */}
        {hiddenLinksCount > 0 && (
          <button
            onClick={handleArrowClick}
            className="flex items-center justify-center text-white hover:bg-white/20 p-1 rounded-md transition mr-2"
            aria-label={showHiddenLinks ? 'Show less categories' : 'Show more categories'}
          >
            <FiChevronRight className={`text-xl transition-transform ${showHiddenLinks ? 'rotate-180' : ''}`} />
          </button>
        )}

        {/* Call for Order Button */}
        <button 
          id="call-for-order"
          className="flex items-center space-x-1 bg-[#62bdac] hover:bg-[#52a89a] text-white px-4 py-1.5 rounded-md transition shadow-md whitespace-nowrap"
          onClick={() => window.location.href = 'tel:+1234567890'}
        >
          <FiPhone className="text-lg" />
          <span className="font-medium">Call for Order</span>
        </button>
      </div>
    </div>
  );
};

export default SubNavbar;