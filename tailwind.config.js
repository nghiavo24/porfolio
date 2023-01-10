/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'grand': ['grand slang'],
      'darby': ['darby sans']
    },
    letterSpacing: {
      normal: "0.1em",
    },
    extend: {
      keyframes: {
        headShake: {
        '0%': {
          transform: 'translateX(0)',
        },
        '6.5%': {
          transform: 'translateX(-6px) rotateY(-9deg)',
        },
  
        '18.5%': {
          transform: 'translateX(5px) rotateY(7deg)',
        },
  
        '31.5%': {
          transform: 'translateX(-3px) rotateY(-5deg)',
        },
  
        '43.5%': {
          transform: 'translateX(2px) rotateY(3deg)',
        },
        '50%': {
          transform: 'translateX(0)',
        },
      },
    },
      animation: {
        headShake: 'headShake 2s 1'
      }
    },
  },
  plugins: [],
}
