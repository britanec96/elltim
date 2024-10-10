import React, { useState } from 'react';

// Example data for portfolio items
const portfolioItems = [
  {
    category: 'Web Development',
    title: 'E-Commerce Website',
    description: 'A fully functional e-commerce website with payment integration.',
    image: 'https://via.placeholder.com/400',
  },
  {
    category: 'Web Development',
    title: 'Corporate Landing Page',
    description: 'A sleek and modern corporate landing page.',
    image: 'https://via.placeholder.com/400',
  },
  {
    category: 'Mobile Development',
    title: 'Fitness Tracking App',
    description: 'A mobile app to track fitness activities and health metrics.',
    image: 'https://via.placeholder.com/400',
  },
  {
    category: 'Mobile Development',
    title: 'Food Delivery App',
    description: 'A mobile app for a food delivery service with real-time tracking.',
    image: 'https://via.placeholder.com/400',
  },
  {
    category: 'Graphic Design',
    title: 'Brand Identity Design',
    description: 'Complete branding for a new company, including logo and stationary.',
    image: 'https://via.placeholder.com/400',
  },
  {
    category: 'Graphic Design',
    title: 'Social Media Campaign',
    description: 'Graphics and visuals for a high-impact social media campaign.',
    image: 'https://via.placeholder.com/400',
  },
  // Add more items for each category
];

const categories = ['All', 'Web Development', 'Motion Design', 'Graphic Design'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Title with one word colored in sky-500 */}
        <h1 className="text-4xl rounded-lg font-bold text-center mb-8 p-5">
          Our <span className="text-sky-500">Portfolio</span>
        </h1>

        {/* Categories Filter */}
        <div className="text-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-56 h-16 mt-2 ml-4 border-2 text-sky-500 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200 ${
                selectedCategory === category ? 'bg-sky-500 text-white' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg mb-4" src={item.image} alt={item.title} />
              <h3 className="text-2xl font-semibold mb-2">
                {item.title.split(' ').map((word, i) => 
                  i === 0 ? <span key={i} className="text-sky-500">{word}</span> : ` ${word}`
                )}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

