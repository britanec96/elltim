import React, { useState, useEffect } from 'react';
import ItIcon2 from '../../images/ItIcon2.png';
import { Wrapper } from '../wrapper';
import OrderFormModal from '../modal-order-form';

export const PromoBlockHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Открытие или закрытие модального окна
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Закрытие модального окна при клике вне его
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event) => {
        if (event.target.id === 'modal-background') {
          setIsOpen(false);
        }
      };
      window.addEventListener('click', handleOutsideClick);
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen]);

  return (
    <section className="bg-white w-full">
      <div className="overflow-hidden text-center xl:text-left items-center">
        <Wrapper>
          <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:max-h-[40rem]">
            {/* Текстовая часть */}
            <div className="w-full xl:w-1/2">
              <h1 className="text-5xl xl:text-7xl font-extrabold whitespace-pre-line text-almost-black">
                Digital Solutions -
                <span className="bg-gray-950 p-4 rounded-md mt-4 inline-block text-6xl text-almost-white">
                  In just one click
                </span>
              </h1>
              <div className="w-full mt-12 mb-7 text-2xl">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <span className="text-sky-500 max-xl:hidden">—</span>
                  <p>
                    Experienced professionals with at least 5 years of experience
                  </p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <span className="text-sky-500 max-xl:hidden">—</span>
                  <p>The lowest prices on the market</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <span className="text-sky-500 max-xl:hidden">—</span>
                  <p>Extensive experience in solving problems</p>
                </div>
              </div>

              {/* Кнопка для открытия модального окна */}
              <div className="xl:block mt-8">
                <button
                  onClick={toggleModal}
                  className="w-56 h-16 mt-2 ml-4 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
                >
                  Get advice
                </button>
              </div>
            </div>

            {/* Изображение */}
            <div className="w-full xl:w-1/2 flex justify-center relative">
          <img
            className="w-1/2 xl:w-full md:mt-10 sm:mt-10 object-cover transition-all duration-500 ease-in-out relative transform -scale-x-100"
            src={ItIcon2}
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
        {isOpen && (
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
