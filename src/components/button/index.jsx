import React from 'react';

const redStyle = 'flex-grow border-2 border-gray-200 text-red-500 rounded-lg hover:bg-red-500 hover:text-white hover:border-transparent transition-colors duration-300';
const blueStyle = 'flex-grow border-2 border-gray-200 text-sky-600 rounded-lg hover:bg-sky-500 hover:text-white hover:border-transparent transition-colors duration-300';
const whiteStyle = 'flex-grow border-2 border-gray-200 mt-2 text-almost-white rounded-lg hover:bg-sky-500 hover:text-white hover:border-transparent transition-colors duration-300';

export const Button = ({
  children = '',
  hasRedStyle = false,
  hasWhiteStyle = false,
  hasBlueStyle = false,
  isFilled = false,
  onClick,            
  className = '',      
  type = 'button',   
  ...props 
}) => {
  return (
    <button
      type={type}  
      onClick={onClick}  
      className={`text-almost-black px-5 py-2 text-lg tracking-wide
        ${hasRedStyle ? redStyle : ''}
        ${hasWhiteStyle ? whiteStyle : ''}
        ${hasBlueStyle ? blueStyle : ''} 
        ${className}`} 
      {...props}  
    >
      {children}
    </button>
  );
};

