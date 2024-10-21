import React, { useState, useEffect } from 'react';
import ItIcon2 from '../../images/ItIcon2.png';
import { Wrapper } from '../wrapper';
import OrderFormModal from '../modal-order-form';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';

export const PromoBlockHome = () => {
  const sr = useScrollReveal();
  const [isModalOpen, setModalOpen] = useState(false);

  // ScrollReveal эффект при загрузке
  useEffect(() => {
    sr.reveal('.reveal', {
      delay: 400,
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
    });
    sr.reveal('.reveal-700', {
      delay: 700,
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
    });
    sr.reveal('.reveal-1200', {
      delay: 1200,
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
    });
  }, [sr]);

  // Открытие/закрытие модального окна
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  // Закрытие модального окна при клике вне его
  useEffect(() => {
    if (isModalOpen) {
      const handleClickOutside = (event) => {
        if (event.target.id === 'modal-background') {
          toggleModal();
        }
      };
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isModalOpen]);

  return (
    <section className="bg-white w-full reveal">
      <div className="overflow-hidden text-center xl:text-left items-center">
        <Wrapper>
          <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:max-h-[40rem]">
            <div className="w-full xl:w-1/2">
              <h1 className="text-5xl xl:text-7xl font-extrabold whitespace-pre-line text-almost-black">
                Digital Solutions -
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 p-4 rounded-md mt-4 inline-block text-6xl text-almost-white">
  In just one click
</span>
              </h1>
              <div className="w-full mt-12 mb-7 text-2xl font-fira">
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
                <button
                  onClick={toggleModal}
                  className="w-56 h-16 mt-2 ml-4 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 hover:bg-opacity-100 transition-colors duration-200"
                >
                  Get advice
                </button>
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex justify-center relative">
              <img
                className="w-1/2 xl:w-full md:mt-10 sm:mt-10 object-cover transition-all duration-500 ease-in-out transform -scale-x-100"
                src={ItIcon2}
                alt="IT Icon"
              />
              <div
                className="hidden xl:block absolute -left-1 inset-0 w-full h-full bg-gradient-to-r from-white to-transparent"
                style={{ zIndex: 5 }}
              />
              <div
                className="xl:hidden absolute inset-0 w-full h-full bg-gradient-to-t from-white to-transparent"
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
