/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0f4c81',
        'brand-strong': '#0a355c'
      },
      boxShadow: {
        xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: [],
}
