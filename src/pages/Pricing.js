import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';

import PricingIcon from "../images/PricingIcon.svg";
import PriceListWebDev from "../images/PriceListWebDev.svg";
import PriceListGraphDesign from "../images/PriceListGraphDesign.svg";
import PriceListSocMedia from "../images/PriceListSocMedia.svg";
import PriceListITCons from "../images/PriceListITCons.svg";
import PriceListMotionDesign from "../images/PriceListMotionDesign.svg";
import PriceListPCBuilding from "../images/PriceListPCBuilding.png";
import PriceListOther from "../images/PriceListOther.svg";

const services = [
  {
    id: 1,
    image: PriceListWebDev,
    title: 'Web Development',
    price: 'From 135£',
    description: 'Custom websites tailored to your business needs, fully responsive and optimized for performance.',
    link: '/web-development',
  },
  {
    id: 2,
    image: PriceListGraphDesign,
    title: 'Graphic Design',
    price: 'From 20£',
    description: 'Graphic design services tailored to your brand’s identity, delivering visually striking and professional designs.',
    link: '/graphic-design',
  },
  {
    id: 3,
    image: PriceListSocMedia,
    title: 'Social Media Marketing & Content Creation',
    price: 'From 25£',
    description: 'Content creation services designed to engage your audience, with high-quality, tailored content.',
    link: '/digital-marketing',
  },
  {
    id: 5,
    image: PriceListITCons,
    title: 'IT Consultation',
    price: 'From 10£',
    description: 'Comprehensive IT services tailored to support and enhance your business operations.',
    link: '/consultationservices',
  },
  {
    id: 6,
    image: PriceListMotionDesign,
    title: 'Motion Graphics & Animations',
    price: 'From 50£',
    description: 'Dynamic motion graphics and animations crafted to elevate your brand’s message.',
    link: '/motion-graphics',
  },
  {
    id: 7,
    image: PriceListPCBuilding,
    title: 'PC Building Service',
    price: 'From 50£',
    description: 'Custom PC building services tailored to your specifications.',
    link: '/consultationservices',
  },
  {
    id: 8,
    image: PriceListOther,
    title: 'Other',
    price: 'From 10£',
    description: 'Additional services tailored to meet diverse client needs.',
    link: '/consultationservices',
  },
];

const Pricing = () => {

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '70px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '70px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
  ]);

  return (
    <>
    <div className="relative w-full bg-gray-900 overflow-hidden">
    <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
      {/* Левая часть: текст и кнопки */}
      <div className="w-full xl:w-1/2 text-center p-5">
      <div className="flex justify-center items-center element-delay-200">
      <div className="text-7xl font-bold text-yellow-500 animate-bounce">
        £
      </div>
    </div>
        <h1 className="text-5xl font-bold text-sky-500 element-delay-400">
         Price List
        </h1>
        <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white element-delay-800">
        Our price list provides transparent and competitive rates for all our services
        </h2>
        <div className="element-delay-1200">
          <Link to="/order">
        <Button hasWhiteStyle={true}>Order Now</Button>
        </Link>
        </div>
      </div>

      {/* Правая часть: изображение */}
      <div className="w-1/2  element-delay-1400">
        <img
          className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={PricingIcon}
          alt="Happy Customer"
        />
      </div>
    </div>
    
  <div className="flex justify-center items-center mb-10 element-delay-1400">
<div className="w-60 h-px bg-gray-600 opacity-50"></div>
</div>

  </div>




    <div className="py-12 element-delay-1400">
      <div className="container mx-auto px-4 ">
        <div className="grid gap-8 xl:grid-cols-2 md:grid-cols-1 text-center">
          {services.map(service => (
            <div key={service.id} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
  {service.image && (
    <img
      src={service.image}
      alt={service.title}
      className="w-full mx-auto object-cover h-80 mb-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
    />
  )}
  <h2 className="text-3xl font-bold mb-4 bg-sky-600 rounded-lg p-2 text-center text-almost-white">{service.title}</h2>
  <p className="text-3xl font-bold text-sky-500 mb-4">{service.price}</p>
  <p className="text-gray-300 mb-4">{service.description}</p>
  <Link to={service.link}>
  <Button hasWhiteStyle={true}>Details & Order</Button>
  </Link>
</div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Pricing;

