/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        banana: {
          graLight: '#FFEA77',
          DEFAULT: '#F2C12E',
          graDark: '#FFB213',
        },
        myText: {
          light: '#6b7280',
          medium: '#4b5563',
          dark: '#374151',
          darkest: '#010326',
        },
        dark: {
          lighter: '#A67D03',
          DEFAULT: '#010326',
        },
        accent: {
          DEFAULT: '#D96B2B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
