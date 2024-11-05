import React, { useState, useEffect } from 'react';
import ItIcon2 from '../../images/snowman.png';
import { Wrapper } from '../wrapper';
import OrderFormModal from '../modal-order-form';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';
import { Button } from "../button";

export const PromoBlockHome = () => {
  const sr = useScrollReveal();
  const [isModalOpen, setModalOpen] = useState(false);

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '60px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
  ]);

  // Открытие/закрытие модального окна
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };


  return (
    <section className="bg-gray-900 w-full element-delay-200 sm:p-10 md:p-0">
      <div className="overflow-hidden text-center xl:text-left items-center">
        <Wrapper>
          <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:max-h-[40rem]">
            <div className="w-full xl:w-1/2">
              <h1 className="text-5xl xl:text-7xl font-extrabold whitespace-pre-line text-almost-white">
                Digital Solutions -
                <span className="bg-sky-600 p-4 rounded-md mt-4 inline-block text-6xl text-almost-white">
  In just one click
</span>
              </h1>
              <div className="w-full mt-12 mb-7 text-2xl font-fira text-almost-white">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <span className="text-sky-600 max-xl:hidden">—</span>
                  <p>Experienced professionals with at least 5 years of experience</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <span className="text-sky-600 max-xl:hidden">—</span>
                  <p>The lowest prices on the market</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <span className="text-sky-600 max-xl:hidden">—</span>
                  <p>Extensive experience in solving problems</p>
                </div>
              </div>

              <div className="xl:block mt-8">
                <Button
                  onClick={toggleModal}
                  hasWhiteStyle={true}
                >
                  Get advice
                </Button>
              </div>
            </div>

            <div className="sm:hidden md:w-full xl:w-1/2 md:flex md:justify-center md:relative">
              <img
                className="w-1/2 xl:w-full md:mt-10 sm:mt-10 object-cover"
                src={ItIcon2}
                alt="IT Icon"
              />
              <div
                className="hidden xl:block absolute inset-0 w-1/2 h-full bg-gradient-to-r from-gray-900 to-transparent"
                style={{ zIndex: 5 }}
              />
              <div
                className="hidden xl:block absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-transparent"
                style={{ zIndex: 5 }}
              />
            </div>
          </div>
        </Wrapper>

        {/* Модальное окно */}
        {isModalOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <OrderFormModal toggleModal={toggleModal} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PromoBlockHome;
