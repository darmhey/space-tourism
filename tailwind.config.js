/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      '2.7': '0.16rem',
      '2.36': '0.1475rem',
      '3.38': '0.21rem',
      '4.72': '0.3rem',
    },
    fontSize: {
      '16': '1rem',
      '12': '0.75rem',
      '56': '3.5rem',
      '15': '0.94rem',
      '14': '0.875rem',
      '28': '1.75rem',
      '20': '1.25rem',
      '80': '5rem',
      '18': '1.125rem',
      '100': '6.25rem',
    },
    extend: {
      colors: {
        'black': '#0b0d18',
        'black-accent': '#45474f',
        'white': '#ffffff',
        'light': '#d0d6f9',
        
      },
     
   
      fontFamily: {
        'sans': ['Barlow', 'ui-sans-serif', 'system-ui'],
        'Barlow': ['Barlow Condensed', 'ui-sans-serif', 'system-ui'],
        'Bellefair': ['Bellefair', 'ui-serif', 'Georgia', ],
        
      },
      backgroundImage: {
        'home-background1': "url('/assets/home/background-home-desktop.jpg')" ,
        'home-background2': "url('/assets/home/background-home-tablet.jpg')",
        'home-background3': "url('/assets/home/background-home-mobile.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
      },
      gridTemplateColumns: {
        'template': 'minmax(10rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(10rem, 1fr)',

      }
    },
  },
  plugins: [],
}

