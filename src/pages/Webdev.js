import React, { useEffect, useState } from 'react';
import WebIcon from '../images/WebDev.svg';
import OurTeam from '../images/OurTeam.svg';
import ReactIcon from '../images/reactjs-fill.svg';
import Node from '../images/nodejs-fill.svg';
import JavaScript from '../images/javascript-fill.svg';
import Tailwind from '../images/tailwind-css-fill.svg';
import Html from '../images/html5-fill.svg';
import { Button } from '../components/button';
import OrderFormModal from '../components/modal-order-form';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Wrapper } from '../components/wrapper';


function WebDev() {

    // Открытие/закрытие модального окна
  const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen((prev) => !prev);
    };


  const [isZoomed, setIsZoomed] = useState(false);

  // Функция для получения коэффициента масштабирования на половину экрана
  const getScaleValue = () => {
      const screenWidth = window.innerWidth;
      return screenWidth > 1024 ? 0.5 : 1; 
    };

  const toggleZoom = () => setIsZoomed((prev) => !prev);



  // ScrollReveal эффект при загрузке
  const sr = useScrollReveal();
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
  

  return (
    <>
    <section 
      className="relative bg-cover bg-center bg-almost-black"
    >
        <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  >
    <source src={require('../videos/WebSitePrezi.mp4')} type="video/mp4" />
    Ваш браузер не поддерживает видео.
  </video>
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
          <div className="flex flex-col md:flex-row xl:flex-row mt-4 md:space-x-8 space-y-3 reveal-1200">
          <img className='' src={ReactIcon} alt="ReactIcon" loading="lazy" />
          <img src={Node} alt="Node" loading="lazy"/>
          <img src={JavaScript} alt="JavaScript" loading="lazy" />
          <img src={Tailwind} alt="Tailwind" loading="lazy" />
          <img src={Html} alt="Html" loading="lazy" />
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
    <img className="w-[350px] md:w-[50%] sm:w-[100%] h-auto" src={WebIcon} alt="Web Icon" loading="lazy" />
          <h1 className='font-bold text-lg'>What is Web Development?</h1>
          <p className='m-5'>Web development is the process of designing 
            and building websites. Web developers use programming languages,
             software, and tools to create everything you see on a website,
              from text and images to videos, apps and games. You may need to
               hire a web developer if you want to build a site of your own or
                add features to an existing site.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-[350px] md:w-[50%] sm:w-[100%] h-auto" src={OurTeam} alt="Web Icon" loading="lazy" />
        <h1 className='font-bold text-lg'>Why Choose Us for Your Website Development?</h1>
          <p className='m-5'>We bring a blend of creativity, technical expertise, and personalized solutions to build websites that not only look great but also perform exceptionally. Our team is committed to delivering user-friendly, responsive, and SEO-optimized websites that are tailored to your business needs. We ensure a seamless development process, from concept to launch, with a focus on your goals and audience.</p>
        </div>
      </div>
      </section>
      <section>
        <div className='mt-20 mb-20 bg-gray-900 text-almost-white rounded-lg p-5 text-center md:text-left'>
          <h1 className='text-center xl:text-5xl sm:text-3xl font-bold m-5'>How Does Development Process Work?</h1>
        <div className='grid xl:grid-cols-4 sm:grid-cols-1'>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-creative-commons-by-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold font'>Consultation and 50% Prepayment</h1>
            <p>We discuss your project and collect a 50% prepayment to begin.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-code-box-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Development and Design</h1>
            <p>We create the website, reviewing key stages with you for feedback.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-test-tube-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Testing and Final Revisions</h1>
            <p>After development is complete, we thoroughly test the website across various devices and browsers.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-rocket-line text-6xl text-sky-500 m-5 "></i>
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
        <div className="bg-gray-900 text-almost-white py-10 mt-20">
      <div className="container mx-auto text-left">
        <h2 className="text-3xl text-center font-bold mb-4">That's What We Can Do</h2>
        <p className="text-center mb-10">Any option, for any purpose</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">



          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg p-6">
          <img
        src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png"
        alt="Website Design"
        loading="lazy"
        className={`mb-4 w-full cursor-pointer transition-transform duration-300 ${isZoomed ? `scale-${getScaleValue() * 2}` : 'scale-100'}`}
        style={{
          transform: isZoomed ? `scale(${getScaleValue() * 2})` : 'scale(2)',
          transition: 'transform 0.3s',
          maxWidth: '100%',
          height: 'auto',
        }}
        onClick={toggleZoom} // Переключаем увеличение при клике
      />
        
        {/* Описание услуги */}
        <h3 className="font-semibold text-2xl mb-2">Landing Page</h3>
        <p>From <span className="text-md font-bold">140 GBP</span> in 2-5 days.</p>
        <div className="w-full my-5 text-md font-fira">
          <div className="xl:flex xl:items-start items-center gap-2">
            <p><span className="text-sky-500">Description:</span> A single-page website, often used for promoting a product, service, or event. It contains minimal interactive elements (forms, buttons).</p>
          </div>
          <div className="xl:flex xl:items-start items-center gap-2 mt-5">
            <p><span className="text-sky-500">Development time:</span> 1-5 days</p>
          </div>
          <div className="xl:flex xl:items-start items-center gap-2 mt-5">
            <p><span className="text-sky-500">Technologies:</span> HTML, CSS, JavaScript, CMS (e.g., WordPress), React, sometimes basic backend for form processing.</p>
          </div>
        </div>
        
        {/* Кнопка действия */}
        <Button hasWhiteStyle={true}>
          Order
        </Button>
        <a href="https://vk.com" className='flex mt-3 font-bold hover:text-sky-500 transition-colors duration-300'>Site Example</a>
      </div>



          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6">
          <img
          src="https://storage.googleapis.com/website-production/uploads/2023/07/sweetkick-landing-page-example-1.png"
          alt="Website Design"
          className="mb-4 w-full cursor-pointer"
        />
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


