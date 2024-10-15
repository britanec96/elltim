import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

export const MenuItem = ({ text = '', icon}) => {
  return (
    <div className='flex w-full space-x-4'>
      {icon}
    <span className='text-almost-black hover:text-sky-600 cursor-pointer'>
        {text}
        </span>
    </div>
  );
};
