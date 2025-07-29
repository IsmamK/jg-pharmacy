"use client"

import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaUpload, FaHospitalAlt, FaShoppingCart, FaFlask } from 'react-icons/fa';

const SpecialOfferNavbar = () => {
  const offers = [
    {
      id: 1,
      title: "Via WhatsApp",
      contact: "01810117100",
      action: "Call Now",
      discount: "10% OFF",
      bonus: "+ Cashback",
      icon: <FaWhatsapp />,
      color: "#25D366"
    },
    {
      id: 2,
      title: "Upload Prescription",
      contact: "",
      action: "Upload Now",
      discount: "10% OFF",
      bonus: "+ Cashback",
      icon: <FaUpload />,
      color: "#4A90E2"
    },
    {
      id: 3,
      title: "Register Pharmacy",
      contact: "",
      action: "Register Now",
      discount: "14% OFF",
      bonus: "+ Cashback",
      icon: <FaHospitalAlt />,
      color: "#9B59B6"
    },
    {
      id: 4,
      title: "HealthCare",
      contact: "",
      action: "Shop Now",
      discount: "60% OFF",
      bonus: "+ Cashback",
      icon: <FaShoppingCart />,
      color: "#E74C3C"
    },
    {
      id: 5,
      title: "Call To Order",
      contact: "📞 16778",
      action: "Call Now",
      discount: "10% OFF",
      bonus: "",
      icon: <FaPhoneAlt />,
      color: "#3498DB"
    },
    {
      id: 6,
      title: "Lab Test",
      contact: "",
      action: "Book Now",
      discount: "25% OFF",
      bonus: "",
      icon: <FaFlask />,
      color: "#1ABC9C"
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">Especially For You</h1>
        <p className="text-gray-500 mt-2 text-lg">Order through multiple channels</p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center h-full border border-gray-100"
          >
            {/* Icon */}
            <div 
              className="mb-4 p-3 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${offer.color}20`, color: offer.color }}
            >
              {React.cloneElement(offer.icon, { className: "text-2xl" })}
            </div>

            {/* Title */}
            <h3 className="text-gray-800 font-medium text-center text-lg">{offer.title}</h3>
            
            {/* Contact Info */}
            {offer.contact && (
              <p className="text-gray-500 text-sm mt-1.5 mb-2">{offer.contact}</p>
            )}

            {/* Discount Section */}
            <div className="my-4 text-center w-full">
              <p className="text-gray-400 text-xs mb-1">UPTO</p>
              <p 
                className="font-bold text-2xl mb-1" 
                style={{ color: offer.color }}
              >
                {offer.discount}
              </p>
              {offer.bonus && (
                <p className="text-gray-500 text-sm">{offer.bonus}</p>
              )}
            </div>

            {/* Action Button */}
            <button 
              className="mt-auto w-full py-2.5 text-white font-medium rounded-lg transition-colors text-sm"
              style={{ 
                backgroundColor: offer.color,
                boxShadow: `0 2px 4px ${offer.color}40`
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
            >
              {offer.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferNavbar;