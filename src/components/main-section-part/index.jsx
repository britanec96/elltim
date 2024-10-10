import React from 'react';
import Bear from '../../images/Bear.png';

const CarouselSection = () => {
  return (
    <div className="py-20 px-4 md:px-8 mt-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Power Up Your Business With Us
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          Northern Techies
        </h1>
      </div>


      <div className="text-center text-lg md:text-xl text-gray-600 mb-12">
        <p>Slider Revolution’s WordPress carousel plugin makes</p>
        <p>
          building powerful presentations with website carousels an absolute{' '}
          <span className="text-black font-bold underline decoration-sky-500 decoration-4">
            breeze.
          </span>
        </p>
      </div>


      <div className="md:flex md:justify-between mt-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Create All Kinds of Amazing Layouts
          </h3>
          <p className="text-lg text-gray-600">
            Slider Revolution can produce WordPress carousels, including post
            carousels and image carousels with multiple images, that adapt to
            any screen size.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            In addition, our slider plugin gives you complete control over the
            number of visible slides, their rotation, scale, opacity and much
            more!
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 ml-4 border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Preview Carousel Templates
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden md:block md:w-1/2 mt-6 md:mt-0">
          <img
            src={Bear}
            alt="Carousel Thumbnail"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
