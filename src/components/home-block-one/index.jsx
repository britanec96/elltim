import React, { useEffect } from 'react';
import One from '../../images/One.png';
import Two from '../../images/two.png';
import Three from '../../images/three.png';
import Four from '../../images/Four.png';
import Five from '../../images/five.png';
import Six from '../../images/Six.png';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';

const HomeBlockOne = () => {
  const sr = useScrollReveal();

  useEffect(() => {
    sr.reveal('.reveal', {
      delay: 300,
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
    });
  }, [sr]);

  return (
    <div className="py-20 px-4 md:px-8 mt-20">

      <div className="text-center mb-12 reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Power Up Your Ideas With
        </h2>
        <h1 className="text-4xl mt-2 md:text-7xl font-bold text-sky-600">
          Northern Techies
        </h1>
      </div>

      <div className="text-center text-lg md:text-xl text-gray-600 mb-12 reveal">
        <p>You don't have to know computers or software — we handle it all for you.</p>
        <p>
        We're not going to teach you how to fish, we're giving you the{' '}
          <span className="text-black font-bold underline decoration-sky-500 decoration-4">
            fish.
          </span>
        </p>
      </div>

      <div className='flex items-center justify-center text-gray-400 reveal'>
      <i className="ri-money-pound-circle-line mr-1"></i> <h1 className='mr-5'>Low-Budget</h1>
      <i className="ri-speed-line mr-1"></i> <h1 className='mr-5'>Fast</h1>
      <i className="ri-star-line mr-1"></i> <h1>Qualitatively</h1>
      </div>

      <div className="md:flex md:justify-between mt-12 reveal">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          120+ Successfully Completed Orders
          </h3>
          <p className="text-lg text-gray-600">
          We take pride in our extensive experience and commitment to delivering high-quality work.
          With a proven track record of success, 
          we have earned the trust and satisfaction of numerous clients across various industries. 
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Each project is approached with meticulous attention to detail,
           ensuring that our solutions not only meet but exceed expectations.
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 float-start border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Reviews
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden sm:block md:w-1/2 mt-6 md:mt-0">
          <img
            src={One}
            className="w-full max-w-[700px] max-h-[300px] object-cover object-center rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>



      <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>




      <div className="md:flex flex-row-reverse md:justify-between mt-24 reveal">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          A Team Of Professionals
          </h3>
          <p className="text-lg text-gray-600">
          Our team of experts, specializing in programming, design, and IT, is fully equipped to
           tackle even the most complex challenges. Whether it’s developing cutting-edge software, 
           crafting intuitive and visually stunning designs, or solving intricate IT problems, 
           we bring a wealth of knowledge and experience to the table.
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Each member of our team is passionate about their field, constantly
           staying updated with the latest technologies and best practices to deliver innovative and tailored solutions.
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 float-end border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              About Us
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden sm:block md:w-1/2 mr-8 mt-6 md:mt-0">
          <img
            src={Two}
            className="w-full max-w-[700px] max-h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>




      <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>





      <div className="md:flex md:justify-between mt-24 reveal">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Tailored Solutions For Every Project
          </h3>
          <p className="text-lg text-gray-600">
          We provide tailored solutions that are perfectly aligned with your business goals and specific needs. Our approach begins with a deep understanding of your unique challenges, 
          ensuring that every service or product we deliver is designed to seamlessly integrate into your operations.
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Whether you’re looking to optimize workflows, enhance customer experiences, or scale your business, 
          our solutions are built to not only meet your current demands but also to evolve with your growth.
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 float-start border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Portfolio
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden sm:block md:w-1/2 mt-6 md:mt-0">
          <img
            src={Three}
            className="w-full max-w-[700px] max-h-[300px] object-cover object-left-top rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>



      <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>




      <div className="md:flex flex-row-reverse md:justify-between mt-24 reveal">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          The Most Competitive Prices
          </h3>
          <p className="text-lg text-gray-600">
          High quality doesn’t have to come with a high price tag. 
          We believe that exceptional service and results should be accessible to everyone, regardless of budget.
          </p>
          <p className="mt-4 text-lg text-gray-600">
          That's why we offer affordable rates that cater to businesses and individuals alike. Our flexible pricing
           ensures that you receive top-tier solutions without compromising on quality, no matter the size of your project.
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 float-end border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Pricing
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden sm:block md:w-1/2 mr-8 mt-6 md:mt-0">
          <img
            src={Four}
            className="w-full max-w-[700px] max-h-[300px] object-right-bottom object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>




      <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>




      <div className="md:flex md:justify-between mt-24 reveal">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Comprehensive Digital Services
          </h3>
          <p className="text-lg text-gray-600">
          From website development to comprehensive tech support, we offer everything you need, all in one place. 
          Our wide range of services eliminates the hassle of searching for multiple vendors,
           allowing you to focus on your core business while we handle the technical side.
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Whether you require custom software solutions, ongoing IT maintenance,
          or creative design services, we’ve got you covered.
          </p>

          {/* Кнопка */}
          <div className="mt-6">
            <button className="mt-2 float-start border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Блок с изображением снизу для мобильных экранов */}
        <div className="hidden sm:block md:w-1/2 mt-6 md:mt-0">
          <img
            src={Five}
            className="w-full max-w-[700px] max-h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>



      <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>



      <div 
  className="md:flex flex-row-reverse mt-24 h-[30rem] reveal bg-cover bg-center rounded-lg shadow-md"
  style={{ backgroundImage: `url(${Six})` }} // Здесь 0.5 - уровень прозрачности
>

  <div className="flex flex-col p-6 text-center justify-center rounded-lg">
    <h3 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4 text-shadow">
      Innovative Technology
    </h3>
    <p className="text-lg text-almost-white text-shadow">
      We stay ahead of the curve by constantly keeping up with the latest industry trends and advancements.
      This ensures that we can offer you the most modern, innovative, and effective solutions available.
    </p>
    <p className="mt-4 text-lg text-almost-white text-shadow">
      Our team continuously hones its skills, embracing new technologies and methodologies to deliver cutting-edge services tailored to your unique needs.
    </p>
  </div>
</div>

    </div>
    
  );
};

export default HomeBlockOne;
