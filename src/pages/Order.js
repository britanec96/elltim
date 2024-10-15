import React from 'react'
import ServiceOrderForm from '../components/order-form'
import { Wrapper } from '../components/wrapper'

export const Order = () => {
  return (
    <div> 
      <div className='flex justify-center items-center h-11 bg-yellow-400'>Spring event - 50% off first orders - Use code NEW2024</div>
        <Wrapper>
      <div className='flex flex-col xl:flex-row items-center justify-center text-center mt-15 p-10 bg-white rounded-2xl space-y-6 xl:space-y-0 xl:space-x-8'>
  <h1 className='text-5xl xl:text-6xl text-almost-black font-extrabold leading-tight'>
    Don't Put off Problems for Later,
  </h1>
  <button className="w-full max-w-sm mt-7 xl:mt-0 border-2 border-gray-300 text-gray-700 text-2xl xl:text-3xl font-bold px-5 py-3 rounded-lg hover:bg-sky-500 hover:border-none hover:text-almost-white transition-all duration-300 ease-in-out transform hover:scale-105">
  <i className="ri-message-2-line"></i> Chat With Us </button>
</div>

        <h1 className='text-sky-600 text-8xl text-center m-10 font-black'>Either</h1>
        <ServiceOrderForm/>
        <p className='text-xl text-gray-400 text-left mt-5'><span className='flex text-almost-white'>*Your Privacy Matters to Us</span>
      We do not use your personal information for unsolicited calls or advertising,
       and we do not share or distribute your data to third parties.
        Your privacy and trust are our top priorities.</p>
        </Wrapper>
    </div>
  )
}
