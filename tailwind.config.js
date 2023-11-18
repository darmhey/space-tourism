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
     backgroundImage: { 
         'home-background1': "url('/assets/home/background-home-desktop.jpg')" ,
         'home-background2': "url('/assets/home/background-home-tablet.jpg')",
         'home-background3': "url('/assets/home/background-home-mobile.jpg')"
      },
      fontFamily: {
        'sans': ['Barlow', 'ui-sans-serif', 'system-ui'],
        'Barlow': ['Barlow Condensed', 'ui-sans-serif', 'system-ui'],
        'Bellefair': ['Bellefair', 'ui-serif', 'Georgia', ],
        
      }
    },
  },
  plugins: [],
}

