/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // For pages
    './components/**/*.{js,ts,jsx,tsx}', // For your components
    './styles/**/*.{js,ts,jsx,tsx}', // If you have any styles in a styles folder
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [
    daisyui,
  ],
};
