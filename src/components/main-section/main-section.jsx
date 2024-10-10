import React from 'react';
import { PromoBlockHome } from '../promo-block-home';
import { Wrapper } from '../wrapper';
import ServiceOrderFormShort from '../order-form-short';
import Carousel from '../carousel';
import One from '../../images/One.png';
import Two from '../../images/two.png';
import Three from '../../images/three.png';
import Four from '../../images/Four.png';
import Five from '../../images/five.png';
import Six from '../../images/Six.png';
import Bear from '../../images/Bear.png';
import CarouselSection from '../main-section-part';

export const MainSection = () => {
  return (
    <>
<div className="relative w-full overflow-hidden h-11 bg-yellow-400 flex items-center">
  <div className="animate-marquee whitespace-nowrap text-xl">
    New Users Event - 50% off first orders - Use code NEW2024
  </div>
</div>
    <PromoBlockHome/>
    <Wrapper>
    <section>
    <div className="text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mt-14">
        Design, Programming, and Solutions
        </h2>
        <h1 className="text-4xl md:text-5xl mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
        For All Your Needs at The Lowest Prices:
        </h1>
      </div>
    <Carousel/>
    <CarouselSection/>
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-8 pt-8">
      <div>
      <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
  120+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">successfully</span> completed orders
  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
</h1>

    <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${One})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="flex items-center w-full">
      <h3 className="text-xl text-almost-white p-4">
       We take pride in our experience and high-quality work, backed by numerous satisfied clients.
      </h3>
    </div>
  </div>
</div>
</div>
<div>
  <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
    A team of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">professionals</span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
  </h1>
  <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Two})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex items-center w-full">
        <h3 className="text-xl text-almost-white p-4">
          Our experts in programming, design, and IT are ready to tackle any challenge.
        </h3>
      </div>
    </div>
  </div>
</div>
    </div>

    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-8 pt-8">
    <div>
  <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
    Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">solutions</span> for every project
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
  </h1>
  <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Three})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex items-center w-full">
        <h3 className="text-xl text-almost-white p-4">
          We provide solutions that are perfectly suited to your business and specific needs.
        </h3>
      </div>
    </div>
  </div>
</div>
<div>
  <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
    The most <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">competitive</span> prices
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
  </h1>
  <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Four})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex items-center w-full">
        <h3 className="text-xl text-almost-white p-4">
          High quality doesn’t have to be expensive. We offer affordable rates for every budget.
        </h3>
      </div>
    </div>
  </div>
</div>
    </div>


    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-8 pt-8">
    <div>
  <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
    Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">digital</span> services
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
  </h1>
  <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Five})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex items-center w-full">
        <h3 className="text-xl text-almost-white p-4">
          Everything from website development to tech support, all in one place, with no need to look for other vendors.
        </h3>
      </div>
    </div>
  </div>
</div>

<div>
  <h1 className="relative text-almost-black font-black md:text-4xl sm:text-3xl mb-8 text-center tracking-wide">
    Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">technology</span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-sky-500 rounded-lg transition-all duration-300 scale-x-0 hover:scale-x-100 origin-center"></span>
  </h1>
  <div className="rounded-lg bg-white flex items-center justify-center text-center overflow-hidden relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Six})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex items-center w-full">
        <h3 className="text-xl text-almost-white p-4">
          We stay up-to-date with the latest trends to offer you the most modern and effective solutions.
        </h3>
      </div>
    </div>
  </div>
</div>
    </div>
    </section>

    <section className="w-full">
      <div className='bg-white rounded-lg'>
    <h1 className='text-center text-7xl text-almost-black font-bold mt-20 mb-5 p-5'>Your Pocket Tech Mate</h1>
      </div>
      <p className='text-5xl font-medium whitespace-pre-line text-almost-black mb-10'>
  <span className="block indent-8 text-center">- Stay connected the easy way.</span>
  <span className="block indent-8 text-center">- Speak directly with a professional via your preferred messaging service.</span>
  <span className="block indent-8 text-center">- Just one message separates you from solving your issue.</span>
</p>

    <ServiceOrderFormShort/>
    <p className='text-xl text-gray-400 text-left mt-5'><span className='flex text-almost-black'>*Your Privacy Matters to Us</span>
      We do not use your personal information for unsolicited calls or advertising,
       and we do not share or distribute your data to third parties.
        Your privacy and trust are our top priorities.</p>
    </section>
   
    <section>
      
  </section>
  </Wrapper>
    </>
  )
}

