import React, { useState } from 'react';
import OrderFormModal from '../components/modal-order-form'; 

const WebDev = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Web <span className="text-sky-600">Development</span>
        </h1>

        {/* Section 1: What is Web Development */}
        <div className="mb-8 p-7 rounded-lg bg-white">
          <h2 className="text-3xl font-semibold mb-4">1. What is Web Development?</h2>
          <p className="text-gray-600 mb-4 text-lg">
            Web development is the process of building and maintaining websites. It encompasses various aspects,
            including web design, web content development, client-side/server-side scripting, and network security
            configuration.
          </p>
          <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="Web Development" className="w-full h-72 object-cover rounded-lg mb-6" />
        </div>

        <i className="ri-arrow-down-line flex justify-center text-8xl text-sky-600 text-center mb-8"></i>

        {/* Section 2: Why is it Important */}
        <div className="mb-8 p-7 rounded-lg bg-white">
          <h2 className="text-3xl font-semibold mb-4">2. Why is it Important?</h2>
          <p className="text-gray-600 mb-4 text-lg">
            In today's digital world, having a website is crucial for businesses. It helps establish credibility,
            attract customers, and showcase products or services. A well-developed website enhances user experience,
            leading to higher engagement and conversions.
          </p>
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png" alt="Importance of Web Development" className="w-full h-72 object-cover rounded-lg mb-6" />
        </div>

        <i className="ri-arrow-down-line flex justify-center text-8xl text-sky-600 text-center mb-8"></i>

        {/* Section 3: The Web Development Process */}
        <div className="mb-8 p-7 rounded-lg bg-white">
          <h2 className="text-3xl font-semibold mb-4">3. The Web Development Process</h2>
          <ol className="list-decimal list-inside text-gray-600 mb-4 text-lg">
            <li className="mb-2"><strong>Initial Consultation:</strong> We discuss your requirements, goals, and vision.</li>
            <li className="mb-2"><strong>Planning:</strong> We outline the project scope, timeline, and milestones.</li>
            <li className="mb-2"><strong>Design:</strong> We create wireframes and design the website layout.</li>
            <li className="mb-2"><strong>Development:</strong> Our developers code the website, integrating all features.</li>
            <li className="mb-2"><strong>Testing:</strong> We test the website for functionality, performance, and security.</li>
            <li className="mb-2"><strong>Launch:</strong> The website goes live, and we monitor its performance.</li>
          </ol>
        </div>

        <i className="ri-arrow-down-line flex justify-center text-8xl text-sky-600 text-center mb-8"></i>

        {/* Section 4: Payment Process */}
        <div className="mb-8 p-5 rounded-lg bg-white">
          <h2 className="text-2xl font-semibold mb-4">Payment Process</h2>
          <p className="text-gray-600 mb-4">
            We require a 30% upfront payment to begin the project. The remaining amount is due upon project completion.
            We offer flexible payment methods to accommodate your needs.
          </p>
          <img src="https://directpaynet.com/wp-content/uploads/2023/04/payment-processing-POS-gateway-credit-card-cash-payment-1440x935.jpg" alt="Payment Process" className="w-full h-72 object-cover rounded-lg mb-6" />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Contact us today to discuss your web development project and get a free quote!</p>
          <button
            className="w-56 h-16 border-2 border-gray-300 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
            onClick={openModal} 
          >
            Write to Us
          </button>
        </div>

        {/* Модальное окно для формы заказа */}
        {isModalOpen && <OrderFormModal toggleModal={closeModal} />}
      </div>
    </div>
  );
};

export default WebDev;



