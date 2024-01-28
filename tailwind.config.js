/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Albert:['Albert Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'myImage': "url('./assets/images.jpeg')",
      }),
    },
  },
  plugins: [],
}