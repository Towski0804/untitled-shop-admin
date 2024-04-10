/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '500px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

