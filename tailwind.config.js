/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // O Tailwind vai ler seus arquivos aqui
  ],
  theme: {
    extend: {
      // Mapeamos as cores do seu projeto aqui
      colors: {
        'primary-dark-blue': '#0D2B57',
        'primary-light': '#E6EEF3',
        'accent-cyan': '#00c9c9',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Sua fonte padrão
      },
    },
  },
  plugins: [],
}