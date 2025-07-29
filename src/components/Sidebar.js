"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { 
  FaPills, FaFlask, FaHeartbeat, FaSmile, FaLeaf, FaHome,
  FaPrescriptionBottle, FaTablets, FaCapsules, FaBandAid,
  FaTint, FaVial, FaAllergies, FaDna, FaProcedures,
  FaFirstAid, FaWheelchair, FaCream, FaShower, FaPalette,
  FaSprayCan, FaMugHot, FaOilCan, FaSpa, FaBroom, FaSoap, FaWind
} from "react-icons/fa";

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
        icon: <FaCream />,
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

export default function Sidebar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              
              if (pathParts.length > 2) {
                const subSubCategory = subCategory.subSubcategories.find(
                  subSub => subSub.name.toLowerCase().replace(" ", "-") === pathParts[2]
                );
                if (subSubCategory) {
                  setActiveSubSubDropdown(subSubCategory.name);
                }
              }
            }
          }
        }
      }
    }
  }, [pathname]);

  const handleCategoryClick = (categoryName, e) => {
    if (e.target.closest('.chevron') || (isMobile && e.currentTarget.contains(e.target))) {
      e.preventDefault();
      setActiveDropdown(prev => prev === categoryName ? null : categoryName);
      setActiveSubDropdown(null);
      setActiveSubSubDropdown(null);
    }
  };

  const handleSubCategoryClick = (subCategoryName, e) => {
    if (e.target.closest('.chevron')) {
      e.preventDefault();
      setActiveSubDropdown(prev => prev === subCategoryName ? null : subCategoryName);
      setActiveSubSubDropdown(null);
    }
  };

  const handleSubSubCategoryClick = (subSubCategoryName, e) => {
    if (e.target.closest('.chevron')) {
      e.preventDefault();
      setActiveSubSubDropdown(prev => prev === subSubCategoryName ? null : subSubCategoryName);
    }
  };

  if (isMobile) {
    return null; // Hide sidebar completely on mobile
  }

  return (
<div className="sticky top-4 z-30 w-80 max-h-[calc(100vh-2rem)] overflow-y-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-[#2177b3]/20 m-4">      <nav className="p-5">
        <ul className="space-y-1.5">
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
                                      <div key={subSubcategory.name} className="rounded-lg overflow-hidden">
                                        <div className="flex flex-col">
                                          <Link
                                            href={`/${category.name}/${subcategory.name.toLowerCase().replace(" ", "-")}/${subSubcategory.name.toLowerCase().replace(" ", "-")}`}
                                            className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm
                                              ${isActiveSubSubcategory ? 'bg-[#2177b3]/10 text-[#2177b3] font-medium' : 'hover:bg-[#2177b3]/5 text-gray-500'}`}
                                            onClick={(e) => handleSubSubCategoryClick(subSubcategory.name, e)}
                                          >
                                            <div className="flex items-center">
                                              <span className={`w-2 h-2 rounded-full mr-3 ${isActiveSubSubcategory ? 'bg-[#2177b3]' : 'bg-[#2177b3]/50'}`}></span>
                                              {subSubcategory.name}
                                            </div>
                                            {subSubcategory.categoryProducts && subSubcategory.categoryProducts.length > 0 && (
                                              <span className="chevron text-gray-400 hover:text-[#2177b3] transition-colors">
                                                {activeSubSubDropdown === subSubcategory.name ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
                                              </span>
                                            )}
                                          </Link>
                                          
                                          {activeSubSubDropdown === subSubcategory.name && subSubcategory.categoryProducts && (
                                            <div className="pl-4 py-1.5 space-y-1 animate-fadeIn ml-1">
                                              {subSubcategory.categoryProducts.map((product) => {
                                                const isActiveProduct = pathname?.endsWith(product.name.toLowerCase().replace(" ", "-"));
                                                return (
                                                  <Link
                                                    key={product.name}
                                                    href={`/${category.name}/${subcategory.name.toLowerCase().replace(" ", "-")}/${subSubcategory.name.toLowerCase().replace(" ", "-")}/${product.name.toLowerCase().replace(" ", "-")}`}
                                                    className={`flex items-center px-3 py-1.5 text-xs rounded-md transition-colors
                                                      ${isActiveProduct ? 'bg-[#2177b3]/10 text-[#2177b3] font-medium' : 'hover:bg-[#2177b3]/5 text-gray-500'}`}
                                                  >
                                                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isActiveProduct ? 'bg-[#2177b3]' : 'bg-[#2177b3]/30'}`}></span>
                                                    {product.name}
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
      </nav>
    </div>
  );
}