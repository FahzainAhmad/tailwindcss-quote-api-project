/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      quotee: ["Space Grotesk", "sans-serif"],
    },
    screens: {
      'sm': '320px',
      // => @media (max-width: 640px) { ... }

      'md': '400px',
      // => @media (max-width: 768px) { ... }

      'lg': '720px',
      // => @media (max-width: 1024px) { ... }

      'xl': '1080px',
      // => @media (max-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (max-width: 1536px) { ... }
    },
    extend: {
      spacing:{
        '66':'17rem',
        '82':'22rem',
        '83':'23rem',
        '84':'23.5rem',
        '94':'23.5rem',
        '100':'24.5rem',
        '102':'25rem',
        '103':'25.5rem',
        '104':'27rem',
        '105':'28rem',
        '106':'30rem',
    },
    borderRadius: {
      '4xl': '2rem',
      '5xl': '5rem',
    }
  },
  plugins: [],
}
}
