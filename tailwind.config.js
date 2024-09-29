/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paradise: ['CallmeJigo', 'sans-serif'], // Ajoute cette ligne pour intégrer la nouvelle police
      },
    },
  },
  plugins: [],
}