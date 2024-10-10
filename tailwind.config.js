/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px',
      'sm': '645px',
    },
    fontFamily: {
  
    },
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      colors: {
        'almost-white': 'hsl(0, 0% ,98%)',
        'medium-grey': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(300%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
      animation: {
        'marquee': 'marquee 10s linear infinite', 
      },
    },
  },
  plugins: [],
}



