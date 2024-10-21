/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px',
      'sm': '545px',
    },
    fontFamily: {
      fira: ['FiraCode', 'monospace'],
    },
    extend: {
      keyframes: {
        'bounce-left-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(300%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
      animation: {
        'bounce-left-right': 'bounce-left-right 1.5s cubic-bezier(0.42, 0, 0.58, 1.2) infinite',
        'marquee': 'marquee 10s linear infinite', 
      },
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
    },
  },
  plugins: [],
}




