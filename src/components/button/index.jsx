import React from 'react';
const borderStyles = 'border-2 border-almost-white rounded-lg';
const borderStylesCustom = 'border-2 w-full border-gray-200 text-sky-600 rounded-lg hover:bg-sky-500 hover:text-white hover:border-none';
const filledStyles = 'text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export const Button = ({
    children = '',
    hasBorder = false,
    hasBorderCustom = false,
    isFilled = false
}) => {
  return (
    <button className={`text-almost-black px-5 py-2 text-lg tracking-wide
      ${ hasBorder && borderStyles}
      ${ hasBorderCustom && borderStylesCustom} 
      ${ isFilled && filledStyles }`}>
        { children }
        </button>
  )
}
