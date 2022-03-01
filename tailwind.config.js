module.exports = {  
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}",  
         ],
  theme: {   
         extend: {
          transformOrigin: {
               'camera-on': '38px 202px',
             }
         },
         colors: {
          secondary: '#B7CAFF',
        },
        screens: {
          'poi': { 'max': '1921px' },
          // => @media (max-width: 1921px) { ... }
        },
  },  
  variants: {
       display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
       require('tailwindcss-children'),
  ],
}