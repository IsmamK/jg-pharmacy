import React from 'react';

const GradientCardComponent = () => {
  const cards = [
    {
      title: "Healthcare",
      subtitle: "Care Comes to You",
      gradient: "linear-gradient(135deg, rgba(205, 190, 255, 0.8) 0%, rgba(176, 148, 255, 1) 100%)",
      logo: "❤️",
      shadow: "0 10px 20px rgba(176, 148, 255, 0.3)",
      textColor: "text-white",
      hoverEffect: "hover:shadow-[0_15px_30px_rgba(176,148,255,0.5)]"
    },
    {
      title: "Arogga Beauty",
      subtitle: "Glamour Delivered",
      gradient: "linear-gradient(135deg, rgba(255, 210, 230, 0.8) 0%, rgba(255, 120, 180, 1) 100%)",
      logo: "💄",
      shadow: "0 10px 20px rgba(255, 120, 180, 0.3)",
      textColor: "text-white",
      hoverEffect: "hover:shadow-[0_15px_30px_rgba(255,120,180,0.5)]"
    },
    {
      title: "Lab Test",
      subtitle: "Diagnosing Health",
      gradient: "linear-gradient(135deg, rgba(180, 240, 255, 0.8) 0%, rgba(80, 200, 255, 1) 100%)",
      logo: "🧪",
      shadow: "0 10px 20px rgba(80, 200, 255, 0.3)",
      textColor: "text-white",
      hoverEffect: "hover:shadow-[0_15px_30px_rgba(80,200,255,0.5)]"
    },
    {
      title: "Pet and Vet",
      subtitle: "Your Pet's joy",
      gradient: "linear-gradient(135deg, rgba(255, 240, 180, 0.8) 0%, rgba(255, 180, 80, 1) 100%)",
      logo: "🐶",
      shadow: "0 10px 20px rgba(255, 180, 80, 0.3)",
      textColor: "text-white",
      hoverEffect: "hover:shadow-[0_15px_30px_rgba(255,180,80,0.5)]"
    },
    {
      title: "Food",
      subtitle: "Best for health",
      gradient: "linear-gradient(135deg, rgba(200, 255, 210, 0.8) 0%, rgba(100, 220, 150, 1) 100%)",
      logo: "🍎",
      shadow: "0 10px 20px rgba(100, 220, 150, 0.3)",
      textColor: "text-white",
      hoverEffect: "hover:shadow-[0_15px_30px_rgba(100,220,150,0.5)]"
    }
  ];

  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 ${card.hoverEffect}`}
              style={{
                background: card.gradient,
                boxShadow: card.shadow
              }}
            >
              <div className="p-4 sm:p-5 flex flex-col h-full min-h-[150px] sm:min-h-[180px]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white bg-opacity-30 flex items-center justify-center mb-3 sm:mb-4 self-start backdrop-blur-sm border border-white border-opacity-20 transition-all duration-300 group-hover:bg-opacity-40">
                  <span className="text-2xl sm:text-3xl">{card.logo}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`${card.textColor} text-base sm:text-lg font-bold mb-1 leading-tight`}>{card.title}</h3>
                  <p className={`${card.textColor} text-opacity-90 text-xs sm:text-sm`}>{card.subtitle}</p>
                </div>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-1 bg-white bg-opacity-50 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientCardComponent;