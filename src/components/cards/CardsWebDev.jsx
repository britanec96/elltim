import React, { useState } from 'react';
import { Button } from '../button';
import { Wrapper } from '../wrapper';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';

const Card = ({ title, price, description, developmentTime, technologies, image, siteExample }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  useScrollReveal([
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
  ]);

  return (
    <div className="bg-gray-800 text-almost-white rounded-lg p-6 mt-10 mb-10 transition-all duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`mb-4 w-[500px] h-[300px] object-cover cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-125' : 'scale-100'}`}
        onClick={toggleZoom}
      />
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p>From <span className="text-md font-bold">{price}</span> in {developmentTime}.</p>
      
      <div className="text-md mt-5">
        <div className="flex items-start gap-2">
          <p><span className="text-sky-500">Description:</span> {description}</p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p><span className="text-sky-500">Development time:</span> {developmentTime}</p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p><span className="text-sky-500">Technologies:</span> {technologies}</p>
        </div>
      </div>
      
      <Button hasWhiteStyle={true} className="mt-5">
        Order
      </Button>
      <a href={siteExample} className="flex mt-3 font-bold hover:text-sky-500 transition-colors duration-300">
        Site Example
      </a>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    {
      title: 'Landing Page',
      price: '140 GBP',
      developmentTime: '2-5 days',
      description: 'A single-page website for promoting a product.',
      technologies: 'HTML, CSS, JavaScript, CMS (e.g., WordPress), React, basic backend for form processing.',
      image: 'https://unbounce.com/photos/1100X400.png',
      siteExample: 'https://vk.com',
    },
    {
      title: 'Business Website',
      price: '400 GBP',
      developmentTime: '1-3 weeks',
      description: 'A multi-page website for a company with information about products.',
      technologies: 'HTML, CSS, JavaScript, CMS (e.g., WordPress),React,basic backend for form processing.',
      image: 'https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2023/04/10114555/Calendly-1.png',
      siteExample: 'https://vk.com',
    },
    {
      title: 'E-commerce Website',
      price: '1800 GBP',
      developmentTime: '5-8 weeks',
      description: 'A website for online sales with a shopping cart, payment gateways, and product and user management.',
      technologies: 'HTML, CSS, JavaScript, CMS (Shopify), frameworks (React), backend (Node.js), payment gateway integration (PayPal, Stripe).',
      image: 'https://cdn.dribbble.com/userupload/13606668/file/original-828e65a135620231018173b2b69c38ae.png?resize=1200x900&vertical=center',
      siteExample: 'https://vk.com',
    },
    {
      title: 'Content Portal (soon)',
      price: '??? GBP',
      developmentTime: '??? days',
      description: 'A website with a large amount of content, such as news portals or platforms for posting articles or blogs',
      technologies: 'CMS (Drupal, WordPress), advanced content management systems, possible API integration.',
      image: 'https://knowledge.hubspot.com/hubfs/best-news-site-design-8-20240911-21119.webp',
      siteExample: 'https://vk.com',
    },
    {
      title: 'Social Networking/Community Website (soon)',
      price: '??? GBP',
      developmentTime: '??? days',
      description: 'Websites with user registration and authentication, allowing users to create and edit profiles',
      technologies: 'Backend (Node.js, Django, Ruby on Rails), frontend frameworks (React, Angular), databases (PostgreSQL, MongoDB), authentication systems.',
      image: 'https://themes.getbootstrap.com/wp-content/uploads/2022/04/preview-screenshot.jpg',
      siteExample: 'https://vk.com',
    },
    {
      title: 'Booking Website (soon)',
      price: '??? GBP',
      developmentTime: '??? days',
      description: 'Platforms for booking services (e.g., hotels, events, car rentals).',
      technologies: 'Backend (Node.js, Laravel, Django), frontend frameworks, integration with external services (calendar, payments), APIs.',
      image: 'https://www.chibikiu.com/wp-content/uploads/2023/06/what-is-booking.com-app-1.jpg',
      siteExample: 'https://vk.com',
    },
  ];

  return (
    <Wrapper>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 element-delay-800">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </Wrapper>
  );
};

export default CardList;


