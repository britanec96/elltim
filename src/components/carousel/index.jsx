import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Добавляем Autoplay

import 'swiper/swiper-bundle.css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

import PcIcon from '../../images/pcicon.jpg';
import WebSiteIcon from '../../images/websiteicon.jpg';
import GraphicDesignIcon from '../../images/graphicdesign.jpg';
import SocialMediaIcon from '../../images/socialicon.jpg';
import MotionDesignIcon from '../../images/motiondesign.jpg';
import HackerIcon from '../../images/hackericon.jpg';

const services = [
  {
    id: 1,
    title: "Website Development for Your Startup or Business",
    description: "From 135£",
    img: WebSiteIcon,
  },
  {
    id: 2,
    title: "Custom Logo Design & Graphic Solutions for Any Purpose",
    description: "From 20£",
    img: GraphicDesignIcon,
  },
  {
    id: 3,
    title: "Motion Design and Animation For Your Business",
    description: "From 35£",
    img: MotionDesignIcon,
  },
  {
    id: 4,
    title: "Expert Software Installation & Hardware Troubleshooting",
    description: "From 10£",
    img: HackerIcon,
  },
  {
    id: 5,
    title: "Comprehensive Social Media Advertising Plans for Your Business",
    description: "From 50£",
    img: SocialMediaIcon,
  },
  {
    id: 6,
    title: "Custom PC Builds for Any Budget and Complexity",
    description: "Contact us",
    img: PcIcon,
  },
];

const Carousel = () => {
  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30} 
        slidesPerView={1} 
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ // Настраиваем автоматическую прокрутку
          delay: 3000, // Интервал в миллисекундах
          disableOnInteraction: false, // Не останавливать при взаимодействии
        }}
        loop={true} // Включаем бесконечную прокрутку
        modules={[Navigation, Pagination, Autoplay]} // Передаем Autoplay в модули
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-lg bg-white flex items-center overflow-hidden relative h-96 transform transition-transform duration-300 hover:scale-105">
              <img className="w-1/2 h-full object-cover" src={item.img} alt="Service Icon" />
              <div className="absolute top-0 xl:-left-5 h-full w-1/2 bg-gradient-to-r from-transparent to-white/100 backdrop-blur-0"></div>
              <div className="w-1/2 ml-8 mr-3">
                <h3 className="sm:text-lg md:text-xl xl:text-4xl text-almost-black w-full p-4">{item.title}</h3>
                <button className="mt-2 ml-4 border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500">
                  {item.description}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

