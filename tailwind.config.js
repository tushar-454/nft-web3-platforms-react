/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      body: '#141420',
      white: '#FFFFFF',
      textGray: '#BABABA',
      backGroundDarkGray: '#2C2C39',
      backGroundGray: '#42424D',
      green: '#36B37E',
      blue: '#4B3EE6',
      hoverBlue: '#3C2FED',
      transparent: '#00000000',
      line: '#2C2C37',
      yellow: '#EBC77A',
      pink: '#CB438C',
      blues: '#5142FC',
    },
    backgroundImage: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1335px',
    },
  },
  plugins: [],
};
