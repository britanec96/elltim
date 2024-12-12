import React from "react";
import { Button } from "../button";

const FeatureCard = ({ title, description, icon, button, onButtonClick }) => (
  <div className="bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900 p-6 md:my-10 sm:my-3 first:mt-10 rounded-lg shadow-lg text-center text-almost-white transition-all duration-300 ease-in-out transform hover:scale-105 grid grid-rows-[auto,1fr,auto]">
    <div className="text-4xl mb-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
    <Button
      hasWhiteStyle={true}
      className="mt-3"
      onClick={onButtonClick} 
    >
      {button}
    </Button>
  </div>
);

export default FeatureCard;
