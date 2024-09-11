import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MeImageMobile from '../../images/me_pc.jpg';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import { Button } from '../button';


export const MainSection = () => {
  return (
    <section className="flex-start w-full mt-6 justify-between">
        <div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-24">
             <h1 className='text-5xl xl:text-8xl font-black xl:whitespace-pre-line mt-6'>
                {`Make\n remote work`}
             </h1>
             <p className="text-medium-grey text-lg my-12 whitespace-pre-line">
             This declares a named export of the NavItem component, meaning it can be imported elsewhere in your project.
             </p>
             <Button isFilled={ true }>Learn More</Button>
        </div>
        <h1 className='text-3xl xl:text-6xl font-black xl:whitespace-pre-line mt-40 text-center xl:text-left'>Meet, Our Team</h1>
        <div className="flex flex-col xl:flex-row xl:h-96 w-full mt-10 justify-center mb-8 gap-5 order-2">
        <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src={MeImageMobile}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Web Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Chris Ellis-Tatti</p>

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
    src={MeImageMobile}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Web Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Chris Ellis-Tatti</p>

    <p className="text-xs xl:text-lg font-medium text-white sm:text-2xl">2 years experience</p>

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
