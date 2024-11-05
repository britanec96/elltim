import React, { useEffect } from 'react';
import { PromoBlockHome } from '../promo-block-home';
import { Wrapper } from '../wrapper';
import ServiceOrderFormShort from '../order-form-short';
import Carousel from '../carousel';
import HomeBlockOne from '../home-block-one';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';

export const MainSection = () => {

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '60px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
  ]);

  return (
    <>
<div className="relative w-full overflow-hidden h-11 bg-almost-white flex items-center">
  <div className="animate-marquee whitespace-nowrap text-xl">
    New Users Event - 50% off first orders - Use code NEW2024
  </div>
</div>
    <PromoBlockHome/>
    <Wrapper>
    <div className="text-center mb-12 element-delay-2000">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mt-14">
        Design, Programming, and Solutions
        </h2>
        <h1 className="text-4xl md:text-5xl mt-5 font-fira text-sky-600">
        For All Your Needs at The Lowest Prices:
        </h1>
      </div>
    <Carousel/>
    <HomeBlockOne/>

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
  </Wrapper>
    </>
  )
}

