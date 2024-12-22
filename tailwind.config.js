/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' }, // Applies to screens smaller than 640px
        'small': { max: '500px' }, // Applies to screens smaller than 768px
      },
    },
  },
  plugins: [],
}
