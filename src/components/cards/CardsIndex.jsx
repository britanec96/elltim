import React, { useState } from 'react';
import { Button } from '../button';

const Card = ({ title, price, description, developmentTime, technologies, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className={`bg-gray-800 text-almost-white rounded-lg p-6 transition-all duration-300`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`mb-4 w-full cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-125' : 'scale-100'}`}
        onClick={toggleZoom}
      />
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p>From <span className="text-md font-bold">{price}</span> in {developmentTime}.</p>
      
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="text-md font-fira">
          <div className="flex items-start gap-2">
            <p><span className="text-sky-500">Description:</span> {description}</p>
          </div>
          <div className="flex items-start gap-2 mt-5">
            <p><span className="text-sky-500">Development time:</span> {developmentTime}</p>
          </div>
          <div className="flex items-start gap-2 mt-5">
            <p><span className="text-sky-500">Technologies:</span> {technologies}</p>
          </div>
          <Button hasWhiteStyle={true}>
        Order
      </Button>
      <a href="https://vk.com" className='flex mt-3 font-bold hover:text-sky-500 transition-colors duration-300'>Site Example</a>
        </div>
      </div>
      
      <button onClick={toggleExpand} className="mt-3 text-sky-500 font-semibold hover:text-sky-300 transition-colors duration-300">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    {
      title: 'Landing Page 1',
      price: '140 GBP',
      developmentTime: '2-5 days',
      description: 'A single-page website for promoting a product.',
      technologies: 'HTML, CSS, JavaScript',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png',
    },
    {
      title: 'Landing Page 2',
      price: '150 GBP',
      developmentTime: '3-6 days',
      description: 'A portfolio website showcasing services.',
      technologies: 'React, Tailwind CSS',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png',
    },
    {
      title: 'Landing Page 3',
      price: '160 GBP',
      developmentTime: '1-4 days',
      description: 'An e-commerce landing page for online sales.',
      technologies: 'WordPress, WooCommerce',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-3.png',
    },
    {
      title: 'Landing Page 4',
      price: '170 GBP',
      developmentTime: '5-7 days',
      description: 'A blog website for sharing articles and stories.',
      technologies: 'HTML, CSS, PHP',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-4.png',
    },
    {
      title: 'Landing Page 5',
      price: '180 GBP',
      developmentTime: '3-5 days',
      description: 'A service landing page for a startup.',
      technologies: 'HTML, CSS, JavaScript, React',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-5.png',
    },
    {
      title: 'Landing Page 6',
      price: '190 GBP',
      developmentTime: '4-6 days',
      description: 'A promotional page for an event.',
      technologies: 'HTML, CSS, JavaScript',
      image: 'https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-6.png',
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;

