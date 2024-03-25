/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'VividOrange': '#ffca2f',
        'SoftYellow': '#dfe056',
        'DarkBlue': '#003c84',
        'DarkCyan': '#007d93',
        'StrongCyan': '#00c5a6',
      },
      backgroundImage: {
        'hero-pattern': "url('./public/bghero.jpg')",
      }
    },
  },
  plugins: [],
}

