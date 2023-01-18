/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        golden: {
          50: '#B99F65',
          100: '#998049'
        },

      },
      backgroundImage: {
        'sheikah-blue': "url('/src/assets/img/sheikah_blue.png')",
        'sheikah-dark-blue': "url('/src/assets/img/sheikah_dark_blue.png')",
        'sheikah-white': "url('/src/assets/img/sheikah_white.jpeg')"
      },
      backgroundSize: {
        'sheikah-pattern-size': '270px'
      },
      keyframes: {
        'raise-gap': {
          'from':  { gap: '80px' },
          'to': { gap: '120px' }
        },
        'glow':{
          '0%': { filter: 'drop-shadow(0px 0px 0px #00D1FF);' },
          '50%': { filter: 'drop-shadow(0px 0px 7px #00D1FF);' },
          '100%': { filter: 'drop-shadow(0px 0px 0px #00D1FF);' }
        },
        'fade-in': {
          'from': { opacity: '0', visibility: 'hidden' },
          'to': { opacity: '1', visibility: 'visible' }
        },
        'fade-out': {
          'from': { opacity: '1', visibility: 'visible' },
          'to': { opacity: '0', visibility: 'hidden' }
        },
        'bluring': {
          'from' : { filter: 'blur(0px)' },
          'to' : { filter: 'blur(10px)' },
        }
      },
      animation: {
        'open-sheikah-eye': 'raise-gap .55s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1 forwards',
        'sheikah-glow': 'glow 1s ease-in-out infinite',
        'sheikah-out': 'fade-out .55s .5s ease-in-out 1 forwards',
        'blur-bg' : 'bluring 1.55s 1.55s ease-in-out 1 forwards'
      },
      dropShadow: {
        'golden-glow': '2px 2px 7px #b7a443',
        'blue-glow': '0px 0px 6px #00bbff'
      },
      fontFamily: {
        'roboto' : 'Roboto',
        'sheikah' : 'Sheikah',
        'hylian' : 'Hylian',
        'botw-hylian' : 'BotwHylian'
      }
    },
  },
  plugins: [],
}
