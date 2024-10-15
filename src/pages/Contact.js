import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ContactUs from '../../src/images/contact.jpg'; 
import { Wrapper } from '../components/wrapper'; 

const center = {
  lat: 53.4808,
  lng: -2.2426,
};

const Contact = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex xl:flex-row md:flex-col sm:flex-col bg-white w-full text-center items-center justify-center reveal">
        <div className="w-full p-5 relative">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
            Work With Us
          </h1>
          <h2 className="text-3xl font-bold text-almost-black">
            Some Extra Money, Why Not?
          </h2>
        </div>

        <div className="relative w-full h-[600px]">
          <img className="w-full h-full object-cover" src={ContactUs} alt="Contact Us" />
          <div
            className="absolute inset-0 w-full h-full xl:bg-gradient-to-r sm:bg-gradient-to-b from-white/100 to-transparent"
            style={{ zIndex: 5 }}
          />
        </div>
      </div>

      <Wrapper>
        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Cooperation</h2>
            <p className="text-gray-600 mb-4">
              If you want to work with us, we look forward to your message.
            </p>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-600 mb-4">
              <li>Email: example@example.com</li> {/* Добавьте email */}
              <li>Phone: +44 123 456 7890</li> {/* Добавьте номер телефона */}
              <li>Address: Manchester, UK</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Write to Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-56 h-16 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
   
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: "100%",
        }}
        center={center}
        zoom={14}
        options={{ mapId: 'DEMO_MAP_ID' }}
      >
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
