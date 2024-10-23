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
          <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
        </div>
        <div className="flex justify-between mt-12">
          <p className="text-almost-white font-bold text-xl mt-7 reveal-1200">The best technologies for your website</p>
          <div className="flex flex-col md:flex-row xl:flex-row mt-4 space-x-8 reveal-1200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(70,146,221,1)"><path d="M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"></path></svg>
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
          <i className="ri-creative-commons-by-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold font'>Consultation and 50% Prepayment</h1>
            <p>We discuss your project and collect a 50% prepayment to begin.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-code-box-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Development and Design</h1>
            <p>We create the website, reviewing key stages with you for feedback.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-test-tube-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Testing and Final Revisions</h1>
            <p>After development is complete, we thoroughly test the website across various devices and browsers.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-rocket-line text-8xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Launch and Final Payment</h1>
            <p>After testing and approval, we launch the site, with the remaining 50% due at completion.</p>
          </div>
        </div>
        </div>
      </section>
      </Wrapper>
      <section>
        <div className='bg-gray-900 p-5 relative'>
          <Wrapper>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold'>So what are you waiting for?</h1>
         <p className='m-5 text-gray-100 text-xl'>Write to us now and get a 20% discount as the first customer</p>
         <Button
         className='m-5'
         hasWhiteStyle={true}>
          Order Now
         </Button>
         <i className="ri-arrow-left-line text-4xl ml-2 text-almost-white absolute bottom-14 animate-bounce-left-right"></i>
         </Wrapper>
        </div>
        </section>
        <section>
        <div className="bg-gray-900 text-almost-white py-10">
      <div className="container mx-auto text-left">
        <h2 className="text-3xl font-bold mb-4">Showcased Work From Us</h2>
        <p className="mb-10">Get some inspiration from Web Development projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2">Landing Page</h3>
            <p>From <span className='text-md font-bold'>140 GBP</span> in 2-5 days.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span> A single-page website, often used for promoting a product, service, or event. It contains minimal interactive elements (forms, buttons).</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> 1-5 days</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> HTML, CSS, JavaScript, CMS (e.g., WordPress),React, sometimes basic backend for form processing.</p>
                </div>
              </div>
            <Button
            hasWhiteStyle={true}
            >
            I Want That One!
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="App Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2">Business Website</h3>
            <p>From <span className='text-md font-bold'>400 GBP</span> in 1-3 weeks.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span> A multi-page website for a company with information about products, services, and contact details, sometimes with a blog. It may include contact forms and basic admin panels for content editing.</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> 2-5 weeks</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> HTML, CSS, JavaScript, CMS (e.g., WordPress),React, sometimes basic backend for form processing.</p>
                </div>
              </div>
            <Button
            hasWhiteStyle={true}
            >
            I Want That One!
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2">E-commerce Website</h3>
            <p>From <span className='text-md font-bold'>1800 GBP</span> in 5-8 weeks.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span> A website for online sales with a shopping cart, payment gateways, and product and user management. It includes features like user profiles, product filters, and search.</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> 5-8 weeks</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> HTML, CSS, JavaScript, CMS (Shopify), frameworks (React), backend (Node.js), payment gateway integration (PayPal, Stripe).</p>
                </div>
              </div>
            <Button
            hasWhiteStyle={true}
            >
            I Want That One!
            </Button>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2 opacity-30">Content Portal (soon)</h3>
            <p>From <span className='text-md font-bold'>&&& GBP</span> in &&& days.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span>A website with a large amount of content, such as news portals or platforms for posting articles or blogs, with the ability to edit content through an admin panel.</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> &&& days</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span>CMS (Drupal, WordPress), advanced content management systems, possible API integration.</p>
                </div>
              </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2 opacity-30">Social Networking/Community Website (soon)</h3>
            <p>From <span className='text-md font-bold'>&&& GBP</span> in &&& days.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span>Websites with user registration and authentication, allowing users to create and edit profiles, and interact with each other (e.g., social networks, forums).</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> &&& days</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> Backend (Node.js, Django, Ruby on Rails), frontend frameworks (React, Angular), databases (PostgreSQL, MongoDB), authentication systems.</p>
                </div>
              </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2 opacity-30">Booking Website (soon)</h3>
            <p>From <span className='text-md font-bold'>&&& GBP</span> in &&& days.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span>  Platforms for booking services (e.g., hotels, events, car rentals). They include complex booking forms, a calendar system, and payment gateways.</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> &&& days</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> Backend (Node.js, Laravel, Django), frontend frameworks, integration with external services (calendar, payments), APIs.</p>
                </div>
              </div>
          </div>

          {/* Card 7 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <img src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png" alt="Website Design" className="mb-4 w-full" />
            <h3 className="font-semibold text-2xl mb-2 opacity-30">E-learning Website (soon)</h3>
            <p>From <span className='text-md font-bold'>&&& GBP</span> in &&& days.</p>
            <div className="w-full my-5 text-md font-fira">
                <div className="xl:flex xl:items-start items-center gap-2">
                  <p><span className='text-sky-500'>Description:</span> A website for online courses, lectures, and webinars. It includes complex elements like video players, testing systems, progress tracking, user profiles, and rating systems.</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Development time:</span> &&& days</p>
                </div>
                <div className="xl:flex xl:items-start items-center gap-2 mt-5">
                  <p><span className='text-sky-500'>Technologies:</span> Backend (Django, Node.js, Laravel), video hosting (YouTube API, Vimeo), testing and analytics systems.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
        </section>
    </>
  );
}

export default WebDev;


