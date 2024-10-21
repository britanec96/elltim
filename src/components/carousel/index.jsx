import React from 'react';
import { Link } from 'react-router-dom';
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
import { Button } from '../button';

const services = [
  {
    id: 1,
    title: "Website Development for Your Startup or Business",
    description: "From 135£",
    img: WebSiteIcon,
    url: "/web-development",
  },
  {
    id: 2,
    title: "Custom Logo Design & Graphic Solutions for Any Purpose",
    description: "From 20£",
    img: GraphicDesignIcon,
    url: "/graphic-design",
  },
  {
    id: 3,
    title: "Motion Design and Animation For Your Business",
    description: "From 35£",
    img: MotionDesignIcon,
    url: "/motion-design",
  },
  {
    id: 4,
    title: "Expert Software Installation & Hardware Troubleshooting",
    description: "From 10£",
    img: HackerIcon,
    url: "/software-installation",
  },
  {
    id: 5,
    title: "Comprehensive Social Media Advertising Plans for Your Business",
    description: "From 50£",
    img: SocialMediaIcon,
    url: "/social-media-advertising",
  },
  {
    id: 6,
    title: "Custom PC Builds for Any Budget and Complexity",
    description: "Contact us",
    img: PcIcon,
    url: "/pc-builds",
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
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
                <Link to={item.url} className="inline-block">
                  <Button 
                    hasBlueStyle={true}
                  >
                    {item.description}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
