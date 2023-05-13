/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#724af8',
        darkPrimary: '#3514a6',
        // darkPrimary: '#0624c2'
        // primary: '#0029FF',
        secondary: '#F3F3F3',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover'],
    },
  },
  plugins: [],
}
