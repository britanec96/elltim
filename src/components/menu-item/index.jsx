import React from 'react';

export const MenuItem = ({ text = '', icon}) => {
  return (
    <div className='flex w-full space-x-4'>
      {icon}
    <span className='text-almost-white hover:text-sky-600 cursor-pointer'>
        {text}
        </span>
    </div>
  );
};
