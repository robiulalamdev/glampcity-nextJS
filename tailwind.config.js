/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0029FF',
        secondary: '#F3F3F3',
        darkPrimary: '#0624c2'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover']
    },
  },
  plugins: [],
}
