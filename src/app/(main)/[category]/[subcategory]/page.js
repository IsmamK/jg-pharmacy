"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FaChevronRight, FaPills, FaFlask, FaPrescriptionBottle, FaTablets, FaTint } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Mock data - replace with your actual data source
const categoryData = {
  medicine: {
    subcategories: {
      prescription: {
        name: "Prescription",
        icon: <FaPrescriptionBottle className="text-2xl text-[#2177b3]" />,
        description: "Browse our prescription medications with doctor's approval",
        subSubcategories: [
          {
            name: "Antibiotics",
            icon: <FaPills className="text-xl text-[#2177b3]" />,
            count: 28,
            products: [
              { name: "Amoxicillin", slug: "amoxicillin" },
              { name: "Azithromycin", slug: "azithromycin" },
              { name: "Ciprofloxacin", slug: "ciprofloxacin" }
            ]
          },
          {
            name: "Antidepressants",
            icon: <FaPills className="text-xl text-[#2177b3]" />,
            count: 15,
            products: [
              { name: "Fluoxetine", slug: "fluoxetine" },
              { name: "Sertraline", slug: "sertraline" },
              { name: "Escitalopram", slug: "escitalopram" }
            ]
          }
        ]
      },
      otc: {
        name: "OTC",
        icon: <FaTablets className="text-2xl text-[#2177b3]" />,
        description: "Over-the-counter medications available without prescription",
        subSubcategories: [
          {
            name: "Pain Relief",
            icon: <FaPills className="text-xl text-[#2177b3]" />,
            count: 32,
            products: [
              { name: "Ibuprofen", slug: "ibuprofen" },
              { name: "Acetaminophen", slug: "acetaminophen" },
              { name: "Naproxen", slug: "naproxen" }
            ]
          }
        ]
      }
    }
  },
  "lab-test": {
    subcategories: {
      "blood-tests": {
        name: "Blood Tests",
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        description: "Comprehensive blood analysis and diagnostics",
        subSubcategories: [
          {
            name: "Complete Blood Count",
            icon: <FaTint className="text-xl text-[#2177b3]" />,
            count: 5,
            products: [
              { name: "CBC Basic", slug: "cbc-basic" },
              { name: "CBC with Differential", slug: "cbc-with-differential" }
            ]
          }
        ]
      }
    }
  }
};

export default function SubcategoryPage() {
  const params = useParams();
  const { category, subcategory } = params;
  
  const currentCategory = categoryData[category]?.subcategories[subcategory] || {
    name: subcategory.replace("-", " "),
    description: "",
    subSubcategories: []
  };

  return (
    <div className="bg-gradient-to-b from-[#2177b3]/5 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2177b3] to-[#2a8bd3] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="hover:underline flex items-center">
              Home
            </Link>
            <IoIosArrowForward className="text-xs" />
            <Link href={`/${category}`} className="hover:underline capitalize">
              {category.replace("-", " ")}
            </Link>
            <IoIosArrowForward className="text-xs" />
            <span className="font-medium capitalize">{currentCategory.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold capitalize mb-3">
                {currentCategory.name}
              </h1>
              <p className="mt-2 max-w-2xl text-blue-100 text-lg">
                {currentCategory.description}
              </p>
            </div>
            <div className="hidden md:block mt-6 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#2177b3]/30 rounded-full"></div>
                <div className="relative bg-white/20 p-6 rounded-full backdrop-blur-sm border-2 border-white/30">
                  {currentCategory.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
        {/* Sub-Subcategories Section */}
        <section className="mb-12 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.subSubcategories.map((subSubcategory, index) => (
              <Link
                key={index}
                href={`/${category}/${subcategory}/${subSubcategory.name.toLowerCase().replace(" ", "-")}`}
                className="group relative bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#2177b3]/30 overflow-hidden"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2177b3]/10 p-3 rounded-xl group-hover:bg-[#2177b3]/20 transition-colors">
                    {subSubcategory.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 group-hover:text-[#2177b3]">
                      {subSubcategory.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {subSubcategory.count} items
                    </p>
                  </div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-hover:text-[#2177b3]">
                  <FaChevronRight />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
            <Link
              href={`/${category}/${subcategory}`}
              className="text-[#2177b3] hover:text-[#1a5a8a] flex items-center text-sm font-medium group"
            >
              View all products
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={12} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategory.subSubcategories.flatMap(subSub => 
              subSub.products?.slice(0, 2).map((product, idx) => (
                <Link
                  key={idx}
                  href={`/${category}/${subcategory}/${subSub.name.toLowerCase().replace(" ", "-")}/${product.slug}`}
                  className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2177b3]/30"
                >
                  <div className="p-4">
                    <div className="bg-[#2177b3]/10 p-3 rounded-lg w-fit mb-3">
                      {subSub.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#2177b3]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      Available
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[#2177b3] font-bold">
                        View Details
                      </span>
                      <div className="w-8 h-8 bg-[#2177b3] rounded-full flex items-center justify-center text-white">
                        <FaChevronRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Health Tip Banner */}
        <section className="mb-12 bg-gradient-to-r from-[#2177b3] to-[#2a8bd3] rounded-2xl p-6 text-white overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white/5"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Health Tip</h2>
            <p className="mb-4 max-w-lg">
              Always consult with your healthcare provider before starting any new medication regimen. 
              Our pharmacists are available 24/7 for consultations.
            </p>
            <button className="bg-white text-[#2177b3] hover:bg-gray-100 px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 transform hover:scale-105">
              Talk to a Pharmacist
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}