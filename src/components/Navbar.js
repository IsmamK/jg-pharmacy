"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  FaPills, FaPrescriptionBottle, FaTablets, FaFlask, FaTint, 
  FaPalette, FaShower, FaHeartbeat, FaProcedures, 
  FaOilCan, FaFirstAid, FaBandAid, FaWheelchair, FaSmile, 
  FaWind, FaSpa, FaLeaf, FaHome, FaBroom, FaSoap, FaCapsules, 
  FaVial, FaAllergies, FaMugHot, FaDna, FaChevronRight, 
  FaChevronLeft, FaSearch, FaUser, FaShoppingCart 
} from 'react-icons/fa';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const categories = [
  {
    name: "medicine",
    icon: <FaPills className="text-lg" />,
    subcategories: [
      { 
        name: "Prescription", 
        icon: <FaPrescriptionBottle />,
        subSubcategories: [
          { 
            name: "Antibiotics",
            categoryProducts: [
              { name: "Amoxicillin" },
              { name: "Azithromycin" },
              { name: "Ciprofloxacin" }
            ]
          },
          { 
            name: "Antidepressants",
            categoryProducts: [
              { name: "Fluoxetine" },
              { name: "Sertraline" },
              { name: "Escitalopram" }
            ]
          },
          { 
            name: "Blood Pressure",
            categoryProducts: [
              { name: "Lisinopril" },
              { name: "Amlodipine" },
              { name: "Metoprolol" }
            ]
          },
          { 
            name: "Diabetes",
            categoryProducts: [
              { name: "Metformin" },
              { name: "Insulin" },
              { name: "Glipizide" }
            ]
          }
        ]
      },
      { 
        name: "OTC", 
        icon: <FaTablets />,
        subSubcategories: [
          { 
            name: "Pain Relief",
            categoryProducts: [
              { name: "Ibuprofen" },
              { name: "Acetaminophen" },
              { name: "Naproxen" }
            ]
          },
          { 
            name: "Cold & Flu",
            categoryProducts: [
              { name: "DayQuil" },
              { name: "NyQuil" },
              { name: "Sudafed" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "lab-test",
    icon: <FaFlask className="text-lg" />,
    subcategories: [
      { 
        name: "Blood Tests", 
        icon: <FaTint />,
        subSubcategories: [
          { 
            name: "Complete Blood Count",
            categoryProducts: [
              { name: "CBC Basic" },
              { name: "CBC with Differential" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "beauty",
    icon: <FaPalette className="text-lg" />,
    subcategories: [
      { 
        name: "Skincare", 
        icon: <FaPalette />,
        subSubcategories: [
          { 
            name: "Moisturizers",
            categoryProducts: [
              { name: "Face Cream" },
              { name: "Night Cream" },
              { name: "Eye Cream" }
            ]
          },
          { 
            name: "Cleansers",
            categoryProducts: [
              { name: "Face Wash" },
              { name: "Makeup Remover" },
              { name: "Toner" }
            ]
          }
        ]
      },
      { 
        name: "Haircare", 
        icon: <FaShower />,
        subSubcategories: [
          { 
            name: "Shampoo",
            categoryProducts: [
              { name: "Anti-Dandruff" },
              { name: "Volume Boost" },
              { name: "Color Protect" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "sexual-wellness",
    icon: <FaHeartbeat className="text-lg" />,
    subcategories: [
      { 
        name: "Contraceptives", 
        icon: <FaProcedures />,
        subSubcategories: [
          { 
            name: "Condoms",
            categoryProducts: [
              { name: "Regular" },
              { name: "Flavored" },
              { name: "Sensitive" }
            ]
          }
        ]
      },
      { 
        name: "Lubricants", 
        icon: <FaOilCan />,
        subSubcategories: [
          { 
            name: "Water Based",
            categoryProducts: [
              { name: "Classic" },
              { name: "Flavored" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "health-care",
    icon: <FaFirstAid className="text-lg" />,
    subcategories: [
      { 
        name: "First Aid", 
        icon: <FaBandAid />,
        subSubcategories: [
          { 
            name: "Bandages",
            categoryProducts: [
              { name: "Adhesive" },
              { name: "Gauze" }
            ]
          }
        ]
      },
      { 
        name: "Medical Supplies", 
        icon: <FaWheelchair />,
        subSubcategories: [
          { 
            name: "Thermometers",
            categoryProducts: [
              { name: "Digital" },
              { name: "Infrared" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "baby-mom-care",
    icon: <FaSmile className="text-lg" />,
    subcategories: [
      { 
        name: "Baby Care", 
        icon: <FaWind />,
        subSubcategories: [
          { 
            name: "Diapers",
            categoryProducts: [
              { name: "Newborn" },
              { name: "Size 1" }
            ]
          }
        ]
      },
      { 
        name: "Maternity", 
        icon: <FaSpa />,
        subSubcategories: [
          { 
            name: "Prenatal Vitamins",
            categoryProducts: [
              { name: "Folic Acid" },
              { name: "Multivitamin" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "herbal",
    icon: <FaLeaf className="text-lg" />,
    subcategories: [
      { 
        name: "Ayurvedic", 
        icon: <FaSpa />,
        subSubcategories: [
          { 
            name: "Digestive",
            categoryProducts: [
              { name: "Triphala" },
              { name: "Amla" }
            ]
          }
        ]
      },
      { 
        name: "Essential Oils", 
        icon: <FaOilCan />,
        subSubcategories: [
          { 
            name: "Aromatherapy",
            categoryProducts: [
              { name: "Lavender" },
              { name: "Eucalyptus" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "home-care",
    icon: <FaHome className="text-lg" />,
    subcategories: [
      { 
        name: "Cleaning", 
        icon: <FaBroom />,
        subSubcategories: [
          { 
            name: "Disinfectants",
            categoryProducts: [
              { name: "Surface Cleaner" },
              { name: "Floor Cleaner" }
            ]
          }
        ]
      },
      { 
        name: "Laundry", 
        icon: <FaSoap />,
        subSubcategories: [
          { 
            name: "Detergents",
            categoryProducts: [
              { name: "Liquid" },
              { name: "Powder" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "supplements",
    icon: <FaCapsules className="text-lg" />,
    subcategories: [
      { 
        name: "Vitamins", 
        icon: <FaVial />,
        subSubcategories: [
          { 
            name: "Multivitamins",
            categoryProducts: [
              { name: "Adult" },
              { name: "Children" }
            ]
          }
        ]
      },
      { 
        name: "Minerals", 
        icon: <FaAllergies />,
        subSubcategories: [
          { 
            name: "Calcium",
            categoryProducts: [
              { name: "Tablets" },
              { name: "Chewable" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "food-nutrition",
    icon: <FaMugHot className="text-lg" />,
    subcategories: [
      { 
        name: "Protein", 
        icon: <FaDna />,
        subSubcategories: [
          { 
            name: "Powders",
            categoryProducts: [
              { name: "Whey" },
              { name: "Plant-Based" }
            ]
          }
        ]
      },
      { 
        name: "Health Foods", 
        icon: <FaLeaf />,
        subSubcategories: [
          { 
            name: "Superfoods",
            categoryProducts: [
              { name: "Chia Seeds" },
              { name: "Flax Seeds" }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "pet-care",
    icon: <FaSmile className="text-lg" />,
    subcategories: [
      { 
        name: "Dogs", 
        icon: <FaFirstAid />,
        subSubcategories: [
          { 
            name: "Flea & Tick",
            categoryProducts: [
              { name: "Shampoo" },
              { name: "Collar" }
            ]
          }
        ]
      },
      { 
        name: "Cats", 
        icon: <FaProcedures />,
        subSubcategories: [
          { 
            name: "Litter",
            categoryProducts: [
              { name: "Clumping" },
              { name: "Non-Clumping" }
            ]
          }
        ]
      }
    ]
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  // Set active dropdowns based on current path
  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split('/').filter(Boolean);
      
      if (pathParts.length > 0) {
        const category = categories.find(cat => cat.name === pathParts[0]);
        if (category) {
          setActiveDropdown(category.name);
          
          if (pathParts.length > 1) {
            const subCategory = category.subcategories.find(
              sub => sub.name.toLowerCase().replace(" ", "-") === pathParts[1]
            );
            if (subCategory) {
              setActiveSubDropdown(subCategory.name);
            }
          }
        }
      }
    }
  }, [pathname]);

  const handleCategoryClick = (categoryName, e) => {
    // Only toggle dropdown if clicking on chevron
    if (e.target.closest('.chevron')) {
      e.preventDefault();
      setActiveDropdown(prev => prev === categoryName ? null : categoryName);
      setActiveSubDropdown(null);
    }
    // Otherwise, let the Link handle navigation naturally
  };

  const handleSubCategoryClick = (subCategoryName, e) => {
    // Only toggle dropdown if clicking on chevron
    if (e.target.closest('.chevron')) {
      e.preventDefault();
      setActiveSubDropdown(prev => prev === subCategoryName ? null : subCategoryName);
    }
    // Otherwise, let the Link handle navigation naturally
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-[#e2ffff] to-white px-4 sm:px-5 py-2 flex flex-wrap items-center justify-between border-b border-[#b7deae] shadow-sm">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Hamburger Menu */}
          <button 
            className="p-2 rounded-md text-[#2177b3] hover:bg-[#b7deae]/20 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo - Centered */}
          <div className="rounded-lg bg-white shadow-sm flex items-center mx-2">
            <Image 
              src={'/e-commerce-logo.jpeg'} 
              alt='jg-healthcare' 
              width={80} 
              height={40}
              className="object-contain h-10 w-auto"
            />
          </div>

          {/* Mobile Icons (Profile + Cart) */}
          <div className="flex items-center space-x-4">
            <button className="p-1 text-[#2177b3]">
              <FaUser className="h-5 w-5" />
            </button>
            <div className="relative">
              <div className="absolute -top-1.5 -right-1.5 bg-[#2177b3] text-white text-[0.65rem] rounded-full h-4 w-4 flex items-center justify-center">
                0
              </div>
              <button className="p-1 text-[#2177b3]">
                <FaShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Updated with logo first */}
        <div className="hidden md:flex items-center w-full">
          {/* Logo */}
          <div className="rounded-lg bg-white shadow-sm flex items-center mr-6">
            <Image 
              src={'/e-commerce-logo.jpeg'} 
              alt='jg-healthcare' 
              width={100} 
              height={50}
              className="object-contain h-12 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl ml-[300px]">
            <div className="relative">
              <input
                type="text"
                placeholder='Search healthcare products...'
                className="w-full py-1.5 px-4 border-2 border-[#62bdac] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2177b3] bg-white/90 text-sm shadow-sm"
              />
              <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#62bdac] p-1 rounded-full hover:bg-[#2177b3] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-1.5 text-xs bg-[#2177b3]/10 px-2.5 py-1 rounded-full hover:bg-[#2177b3]/20 transition cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#2177b3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-600">Deliver to</span>
              <span className="font-medium text-[#2177b3]">BD</span>
            </div>

            <div className="flex items-center space-x-1 text-xs bg-[#b7deae]/20 px-2.5 py-1 rounded-full hover:bg-[#b7deae]/40 cursor-pointer transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#2177b3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[#2672a3] font-medium">Account</span>
            </div>

            <div className="relative cursor-pointer group">
              <div className="absolute -top-1.5 -right-1.5 bg-[#2177b3] text-white text-[0.65rem] rounded-full h-4 w-4 flex items-center justify-center group-hover:bg-[#62bdac] transition">
                0
              </div>
              <div className="p-1.5 bg-[#e2ffff] rounded-full group-hover:bg-[#62bdac] group-hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#2177b3] group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Below Nav */}
      <div className="md:hidden px-4 py-2 bg-white border-b border-[#b7deae]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search healthcare products..."
            className="w-full py-2.5 px-4 border-2 border-[#62bdac] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2177b3] bg-white text-sm shadow-sm"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#62bdac] p-1.5 rounded-full hover:bg-[#2177b3] transition">
            <FaSearch className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30"
            onClick={closeMenu}
          />

          {/* Sidebar Content */}
          <div className="relative w-4/5 max-w-xs h-full bg-white shadow-xl z-50">
            {/* Main Categories View */}
            <div className="h-full flex flex-col">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#b7deae]">
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-white shadow-sm flex items-center">
                    <Image 
                      src={'/JG_Healthcare_Logo_updated (1).webp'} 
                      alt='jg-healthcare' 
                      width={60} 
                      height={30}
                      className="object-contain h-8 w-auto"
                    />
                  </div>
                  <span className="text-[#2177b3] font-medium">Categories</span>
                </div>
                <button 
                  className="p-1 text-gray-500 hover:text-[#2177b3]"
                  onClick={closeMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Categories List */}
              <div className="flex-1 overflow-y-auto">
                <ul className="py-2">
                  {categories.map((category) => {
                    const isActiveCategory = pathname?.includes(category.name);
                    return (
                      <li key={category.name} className="rounded-lg overflow-hidden">
                        <div className="flex flex-col">
                          <Link 
                            href={`/${category.name}`} 
                            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group
                              ${isActiveCategory ? 'bg-[#2177b3]/10 text-[#2177b3] border-l-4 border-[#2177b3]' : 'hover:bg-[#2177b3]/5 text-gray-700'}`}
                            onClick={(e) => handleCategoryClick(category.name, e)}
                          >
                            <div className="flex items-center">
                              <span className={`text-[#2177b3] mr-3 p-2 rounded-lg ${isActiveCategory ? 'bg-[#2177b3]/20' : 'bg-white group-hover:bg-[#2177b3]/10'}`}>
                                {category.icon}
                              </span>
                              <span className={`capitalize font-medium transition-colors
                                ${isActiveCategory ? 'text-[#2177b3] font-semibold' : 'group-hover:text-[#2177b3]'}`}>
                                {category.name.replace("-", " ")}
                              </span>
                            </div>
                            {category.subcategories && category.subcategories.length > 0 && (
                              <span className="chevron text-gray-400 group-hover:text-[#2177b3] transition-colors">
                                {activeDropdown === category.name ? <FiChevronDown /> : <FiChevronRight />}
                              </span>
                            )}
                          </Link>
                          
                          {activeDropdown === category.name && (
                            <div className="pl-4 py-2 space-y-2 animate-fadeIn ml-14 border-l-2 border-[#2177b3]/20">
                              {category.subcategories.map((subcategory) => {
                                const isActiveSubcategory = pathname?.includes(subcategory.name.toLowerCase().replace(" ", "-"));
                                return (
                                  <div key={subcategory.name} className="rounded-lg overflow-hidden">
                                    <div className="flex flex-col">
                                      <Link
                                        href={`/${category.name}/${subcategory.name.toLowerCase().replace(" ", "-")}`}
                                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors text-sm
                                          ${isActiveSubcategory ? 'bg-[#2177b3]/10 text-[#2177b3] font-medium border-l-2 border-[#2177b3]' : 'hover:bg-[#2177b3]/5 text-gray-600'}`}
                                        onClick={(e) => handleSubCategoryClick(subcategory.name, e)}
                                      >
                                        <div className="flex items-center">
                                          <span className={`text-[#2177b3] mr-2 ${isActiveSubcategory ? 'opacity-100' : 'opacity-80'}`}>
                                            {subcategory.icon}
                                          </span>
                                          <span>{subcategory.name}</span>
                                        </div>
                                        {subcategory.subSubcategories && subcategory.subSubcategories.length > 0 && (
                                          <span className="chevron text-gray-400 hover:text-[#2177b3] transition-colors">
                                            {activeSubDropdown === subcategory.name ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                                          </span>
                                        )}
                                      </Link>
                                      
                                      {activeSubDropdown === subcategory.name && subcategory.subSubcategories && (
                                        <div className="pl-3 py-2 space-y-1.5 animate-fadeIn ml-2">
                                          {subcategory.subSubcategories.map((subSubcategory) => {
                                            const isActiveSubSubcategory = pathname?.includes(subSubcategory.name.toLowerCase().replace(" ", "-"));
                                            return (
                                              <Link
                                                key={subSubcategory.name}
                                                href={`/${category.name}/${subcategory.name.toLowerCase().replace(" ", "-")}/${subSubcategory.name.toLowerCase().replace(" ", "-")}`}
                                                className={`flex items-center px-3 py-2 rounded-md transition-colors text-sm
                                                  ${isActiveSubSubcategory ? 'bg-[#2177b3]/10 text-[#2177b3] font-medium' : 'hover:bg-[#2177b3]/5 text-gray-500'}`}
                                              >
                                                <span className={`w-2 h-2 rounded-full mr-3 ${isActiveSubSubcategory ? 'bg-[#2177b3]' : 'bg-[#2177b3]/50'}`}></span>
                                                {subSubcategory.name}
                                              </Link>
                                            );
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;