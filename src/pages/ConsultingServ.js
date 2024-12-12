import React, { useState } from 'react';
// Изображения


// Компоненты
import { Button } from '../components/button';
import OrderFormModal from '../components/modal-order-form';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';


function ConsultationServices() {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '70px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '70px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
    { selector: '.element-delay-1600', delay: 1600, options: { distance: '70px' } },
    { selector: '.element-delay-1800', delay: 1800, options: { distance: '70px' } },
  ]);

  const scrollToSection = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <section className="relative bg-cover bg-center bg-almost-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={require('../videos/ConsultingServices.mp4')} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-md mx-0 flex flex-col justify-start text-left">
              <h1 className="text-5xl font-bold text-white element-delay-200">
                Our expert <span className="text-green-500">Consultants</span> for your IT needs
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
                Computers, Internet, Tech Support
              </p>
              <div className="mt-8 element-delay-400">
                <Button
                  onClick={toggleModal}
                  hasWhiteStyle={true}
                  className=""
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
          </div>
          <div className="flex justify-between mt-12">
            <p className="text-almost-white font-bold text-xl mt-7 element-delay-800">
              We work with all of IT problems
            </p>
          </div>
        </div>
        {isModalOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <OrderFormModal toggleModal={toggleModal} />
          </div>
        )}
      </section>

      <section>
        <div className="bg-gray-900 p-5 mb-5 text-center relative">
          <h1 className="m-5 text-almost-white text-6xl font-extrabold element-delay-1200">
            Struggling with Tech Issues?
          </h1>
          <div className="element-delay-1400">
            <p className="m-5 text-gray-100 text-2xl">
              Get professional help right{' '}
              <span className="text-sky-500 text-3xl font-semibold">NOW!</span>
            </p>
            <Button
              className="m-5"
              hasWhiteStyle={true}
            >
              Chat With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConsultationServices;
