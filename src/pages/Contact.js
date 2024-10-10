import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Задайте координаты Манчестера
const center = {
  lat: 53.4808, // Широта Манчестера
  lng: -2.2426, // Долгота Манчестера
};

const Contact = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact <span className="text-sky-500">Us</span>
        </h1>

        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or need further information, feel free to reach out to us!
            </p>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-600 mb-4">
              <li>Email: </li>
              <li>Phone: </li>
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
                  width: "100%"
                }}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

