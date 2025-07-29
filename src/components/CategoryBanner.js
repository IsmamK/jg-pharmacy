'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const CategoryBanner = () => {
  const banners = [
    {
      id: 1,
      title: 'Summer Health Essentials',
      subtitle: 'Up to 40% off on health products',
      image: 'https://t4.ftcdn.net/jpg/05/66/59/89/360_F_566598942_3BgLgcZp3iZ4eqEjxK2QEh4YZRyd3HGA.jpg',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Discover our latest products',
      image: 'https://img.freepik.com/free-photo/minimalistic-science-banner-with-pills_23-2149431123.jpg?semt=ais_hybrid&w=740&q=80',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800'
    },
    {
      id: 3,
      title: 'Wellness Packages',
      subtitle: 'Complete health solutions',
      image: 'https://img.freepik.com/free-vector/hand-drawn-medical-center-template-design_23-2150152885.jpg?semt=ais_hybrid&w=740',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800'
    }
  ];

  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-64 md:h-80"
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.id} className={`${banner.bgColor} flex items-center p-8`}>
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${banner.textColor}`}>{banner.title}</h2>
                <p className={`text-lg ${banner.textColor}`}>{banner.subtitle}</p>
                <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image 
                    src={banner.image} 
                    alt={banner.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryBanner;