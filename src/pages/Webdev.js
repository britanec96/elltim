import React, { useEffect, useState } from 'react';
import WebDevBack from '../images/WebDevBack.jpeg';
import WebIcon from '../images/WebDev.svg';
import OurTeam from '../images/OurTeam.svg'; 
import { Button } from '../components/button';
import OrderFormModal from '../components/modal-order-form';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Wrapper } from '../components/wrapper';


function WebDev() {
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
    <>
    <section 
      className="relative bg-cover bg-center" 
      style={{ backgroundImage: `url(${WebDevBack})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> {/* Flexbox для вертикального выравнивания */}
            <h1 className="text-5xl font-bold text-white reveal">
              Our expert <span className="text-sky-500">Web Developers</span> for any job
            </h1>
            <p className="mt-6 text-xl font-fira text-gray-300 reveal-700">
              MERN Stack (MongoDB, Express.js, React, Node.js, Tailwind ,Other Libraries and API)
            </p>
            <div className="mt-8 reveal-1200">
              <Button
                onClick={toggleModal}
                hasWhiteStyle={true}
                className=""
              >
                Contact Us Today
              </Button>
            </div>
          </div>
          <div class="w-full h-px bg-gray-200 my-12 opacity-25"></div>
        </div>
        <div className="flex flex-row justify-between mt-12">
          <p className="text-almost-white font-bold text-xl mt-7 reveal-1200">The best technologies for your website</p>
          <div className="flex mt-4 space-x-8 reveal-1200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(70,146,221,1)"><path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(255,255,255,1)"><path d="M12.8873 1.36173C12.3396 1.03958 11.6604 1.03958 11.1127 1.36173L3.36271 5.92056C2.8282 6.23498 2.5 6.8088 2.5 7.42894V16.571C2.5 17.1912 2.8282 17.765 3.36272 18.0794L5.98596 19.6225C7.31923 20.4068 9 19.4454 9 17.8986V7.74655H7V17.8986L4.5 16.428V7.57193L12 3.16016L19.5 7.57193V16.428L12 20.8398L10.2316 19.7996L9.21757 21.5234L11.1127 22.6382C11.6604 22.9604 12.3396 22.9604 12.8873 22.6382L20.6373 18.0794C21.1718 17.765 21.5 17.1912 21.5 16.571V7.42894C21.5 6.8088 21.1718 6.23498 20.6373 5.92056L12.8873 1.36173ZM13.9999 7.49998C12.6372 7.49998 11.6712 7.85114 11.0504 8.46993C10.4336 9.08484 10.3135 9.80885 10.3135 10.2313C10.3135 10.7862 10.4705 11.289 10.7951 11.7048C11.1076 12.1053 11.5199 12.3537 11.9146 12.5159C12.6341 12.8116 13.5358 12.9086 14.2587 12.9863L14.346 12.9957C15.1774 13.0856 15.7998 13.1627 16.2263 13.3411C16.4189 13.4217 16.4983 13.4954 16.531 13.5379C16.5524 13.5658 16.5934 13.6278 16.5934 13.7977C16.5934 14.0618 16.5027 14.2319 16.2204 14.3926C15.873 14.5904 15.2596 14.7396 14.3368 14.7396C13.4218 14.7396 12.7838 14.5705 12.4192 14.3181C12.1357 14.1218 11.9273 13.821 11.9822 13.1683L9.98923 13.0007C9.88075 14.29 10.3479 15.3167 11.2808 15.9625C12.1325 16.5521 13.2518 16.7396 14.3368 16.7396C15.414 16.7396 16.4289 16.5753 17.2098 16.1307C18.0558 15.6491 18.5934 14.8482 18.5934 13.7977C18.5934 13.2414 18.4381 12.7369 18.1162 12.3184C17.8054 11.9144 17.3942 11.6617 16.9981 11.496C16.2701 11.1915 15.3576 11.0932 14.6296 11.0147H14.6296L14.5609 11.0073C13.7274 10.9172 13.1036 10.8423 12.6748 10.666C12.4808 10.5863 12.4025 10.5137 12.3716 10.4742C12.3528 10.4501 12.3135 10.394 12.3135 10.2313C12.3135 10.1538 12.3363 10.0121 12.4624 9.88637C12.5847 9.76449 12.9618 9.49998 13.9999 9.49998C14.9904 9.49998 15.5674 9.60515 15.897 9.80064C16.1123 9.92838 16.3451 10.1633 16.3761 10.9329L18.3745 10.8524C18.3243 9.60675 17.8694 8.64527 16.9173 8.08051C16.0795 7.58349 15.0094 7.49998 13.9999 7.49998Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(240,225,64,1)"><path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(70,146,221,1)"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(255,255,255,1)"><path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path></svg>
          </div>
        </div>
      </div>
      {/* Модальное окно */}
      {isModalOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <OrderFormModal toggleModal={toggleModal} />
          </div>
        )}
    </section>
    <Wrapper>
    <section>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
    <div className='flex flex-col items-center'>
    <img className="w-[350px] md:w-[50%] sm:w-[100%] h-auto" src={WebIcon} alt="Web Icon" />
          <h1 className='font-bold text-lg'>What is Web Development?</h1>
          <p className='m-5'>Web development is the process of designing 
            and building websites. Web developers use programming languages,
             software, and tools to create everything you see on a website,
              from text and images to videos, apps and games. You may need to
               hire a web developer if you want to build a site of your own or
                add features to an existing site.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-[350px] md:w-[50%] sm:w-[100%] h-auto" src={OurTeam} alt="Web Icon" />
        <h1 className='font-bold text-lg'>Why Choose Us for Your Website Development?</h1>
          <p className='m-5'>We bring a blend of creativity, technical expertise, and personalized solutions to build websites that not only look great but also perform exceptionally. Our team is committed to delivering user-friendly, responsive, and SEO-optimized websites that are tailored to your business needs. We ensure a seamless development process, from concept to launch, with a focus on your goals and audience.</p>
        </div>
      </div>
      </section>
      <section>
        <div className='mt-20 mb-20 bg-gray-200 rounded-lg p-5'>
          <h1 className='text-center xl:text-5xl sm:text-3xl font-bold m-5'>How Does Development Process Work?</h1>
        <div className='grid xl:grid-cols-4 sm:grid-cols-1'>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i class="ri-creative-commons-by-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold font'>Consultation and 50% Prepayment</h1>
            <p>We discuss your project and collect a 50% prepayment to begin.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i class="ri-code-box-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Development and Design</h1>
            <p>We create the website, reviewing key stages with you for feedback.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i class="ri-test-tube-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Testing and Final Revisions</h1>
            <p>After development is complete, we thoroughly test the website across various devices and browsers.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i class="ri-rocket-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Launch and Final Payment</h1>
            <p>After testing and approval, we launch the site, with the remaining 50% due at completion.</p>
          </div>
        </div>
        </div>
      </section>
      </Wrapper>
      <section>
        <div className='bg-gray-900 p-5 mb-20 relative'>
          <Wrapper>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold'>So what are you waiting for?</h1>
         <p className='m-5 text-gray-100 text-xl'>Write to us now and get a 20% discount as the first customer</p>
         <Button
         className='m-5'
         hasWhiteStyle={true}>
          Order Now
         </Button>
         <i class="ri-arrow-left-line text-4xl ml-2 text-almost-white absolute bottom-14 animate-bounce-left-right"></i>
         </Wrapper>
        </div>
        </section>
    </>
  );
}

export default WebDev;


