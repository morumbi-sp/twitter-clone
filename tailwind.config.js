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
          DEFAULT: '#FEB202',
        },
        myText: {
          light: '#6b7280',
          medium: '#4b5563',
          dark: '#374151',
          darkest: '#1f2937',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
