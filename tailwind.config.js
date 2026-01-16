/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lumienzo': '#FEFD7F',
        'lumienzo-dark': '#E5E46B',
        'zinc-50': '#FAFAFA',
        'zinc-900': '#18181B',
      },
    },
  },
  plugins: [],
}
