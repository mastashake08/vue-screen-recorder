module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        animation: {
         'fade-slow': 'myFade 4s linear 1'
       },
       keyframes: {
         myFade: {
           '0%': {
             opacity: '0'
           },
           '50%': {
             opacity: '0.5'
           },
           '100%': {
             opacity: '1'
           }
         }
        }
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
