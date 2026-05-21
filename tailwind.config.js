/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#38bdf8',
          500: '#0ea5e9'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(14, 165, 233, 0.25)'
      }
    }
  },
  plugins: []
}
