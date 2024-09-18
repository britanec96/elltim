import React from 'react';
import DanielImage from '../../images/danielimage.jpg';
import MeImageBanner from '../../images/me_pc.jpg';
import ItIcon from '../../images/ItIcon.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import { Button } from '../button';


export const MainSection = () => {
  return (
    <section className="flex-start w-full mt-6 justify-between">
        <div className="relative text-center xl:text-left mt-12 xl:mt-24 bg-gradient-to-r from-sky-500 to-indigo-400 rounded-lg p-3 xl:p-6">
             <h1 className='text-5xl xl:text-7xl font-black xl:whitespace-pre-line mt-6'>
                {`Transforming Ideas -\n into Digital Reality`}
             </h1>
             <p className="text-black-700 text-xl my-12 whitespace-pre-line">
             Complete Web, Design, and IT Solutions for Your Business.
             </p>
             <Button isFilled={ true }>Hire us now</Button>
             <img className="hidden xl:block xl:w-1/3 xl:absolute xl:right-0 xl:bottom-0 xl:top-0 xl:-rotate-90" src={ItIcon} />
        </div>
        <h1 className='text-3xl xl:text-6xl font-black xl:whitespace-pre-line mt-40 text-center xl:text-left'>Meet, Our Team</h1>
        <div className="flex flex-col xl:flex-row xl:h-96 w-full mt-10 justify-center mb-8 gap-5 order-2">
        <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={MeImageBanner}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Web Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Christopher Ellis-Tatti</p>

    <p className="text-xs xl:text-lg font-medium text-white">2 years experience</p>

    <div className="mt-32">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-24 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>

<a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={DanielImage}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-blue-400 shadow-sm">Graphic Designer</p>

    <p className="text-xl font-bold text-white sm:text-2xl shadow-sm">Daniel Coza</p>

    <p className="text-xs xl:text-lg font-medium text-white sm:text-2xl">5 years experience</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-24 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
        </div>
        <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
                <Databiz/>
                <Audiophile/>
                <Meet/>
                <Maker/>
             </div>
    </section>
  )
}
