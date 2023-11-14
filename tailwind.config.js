/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0b0d18',
        'black-accent': '#45474f',
        'white': '#ffffff',
        'light': '#d0d6f9',
        
      },
      fontFamily: {
        'sans': ['Barlow', 'ui-sans-serif', 'system-ui'],
        'sans-cond': ['Barlow Condensed', 'ui-sans-serif', 'system-ui'],
        'serif': ['Bellefair', 'ui-serif', 'Georgia', ],
        
      }
    },
  },
  plugins: [],
}

