const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '5%': '5%',
        '10%': '10%',
        '12%': '12%',
        '13%': '13%',
        '14%': '14%',
        '15%': '15%',
        '16%': '16%',
        '17%': '17%',
        '18%': '18%',
        '19%': '19%',
        '20%': '20%',
        '25%': '25%',
        '27%': '27%',
        '30%': '30%',
        '33%': '33%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',

        '20px': '20px',
        '40px': '40px',
        '43px': '43px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '100px': '100px',
        '125px': '125px',
        '130px': '130px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',

        'navbar': '80px',
        'category-text-sm': '100px',
        'card-storage-extra': '150px',
        'card-storage-xs': '250px',
        'card-storage-sm': '400px',
        'card-storage': '470px',
        'card': '450px',
        'card-sm': '400px',
        'add-card-btn': '63px',
        'toggle': '677px;',
        'toggle-items': '200px',
        '2xl-preview-page': '520px',
        'xl-preview-page': '420px',
        'lg-preview-page': '360px',
        'md-preview-page': '330px',
        'sm-preview-page': '280px',
        'xs-preview-page': '150px',
        'xl-pictures-icon': '90px'

      },
      width: {
        '9%': '9%',
        '10%': '10%',
        '11%': '11%',
        '12%': '12%',
        '13%': '13%',
        '14%': '14%',
        '15%': '15%',
        '16%': '16%',
        '17%': '17%',
        '18%': '18%',
        '19%': '19%',
        '20%': '20%',
        '22%': '22%',
        '23%': '23%',
        '24%': '24%',
        '25%': '25%',
        '30%': '30%',
        '33%': '33%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '48%': '48%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '78%': '78%',
        '79%': '79%',
        '80%': '80%',
        '87%': '87%',
        '90%': '90%',
        '95%': '95%',
        '110%': '110%',
        '120%': '120%',

        '10px': '10px',
        '20px': '20px',
        '35px': '35px',
        '40px': '40px',
        '47.5px': '47.5px',
        '80px': '80px',
        '60.4px': '60.4px',

        '100px': '100px',
        '150px': '150px',
        '264px': '264px',
        '300px': '300px', 


        'select-2xl': '55px',
        'add-card-btn': '63px',
        'toggle-sm': '325px',
        'toggle-lg': '350px',
        '2xl-picture-icon': '300px',
        'xl-picture-icon': '240px',
      }, 
      fontSize:{
        'xs': '8px',
        'xs-lg': '10px',
        'select-2xl': '5px',
        'select-sm': '10px',
        'select-xs': '15px',
        'title-preview': '8px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px'
      },
      spacing:{
         '1%': '1%',
         '2%': '2%',
         '3%': '3%',
         '4%': '4%',
         '5%': '5%',
         '10%': '10%',
         '20%': '20%',
         '40%': '40%',
         '50%': '50%',
         '85%': '85%',
         '86%': '86%',
         '86.7%': '86.7%',
         '87%': '87%',
         '88%': '88%',
         '89%': '89%',
         '90%': '90%',
         '1px': '1px',
         '10px': '10px',
      },
      margin:{
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '15px':'15px',
        '16px': '16px',
        '70px': '70px'
      },
      colors:{
        'toggle-bg': 'rgba(57, 55, 72, 0.22);',
        'body-bg': 'rgb(248 250 252)',
        'items-light': '#D3D2D5',
        'items-dark': '#2B2B2B',
        'items-green': '#2B2B2B',
        'green-button': '#5ECE7B',
        'border-color-gray': '#E5E5E5'
      },
      fontFamily:{
        'Raleway': 'Raleway',
        'Roboto': 'Roboto',
      },
      lineHeight:{
        '160%': '160%',
      },
      borderWidth: {
        '1.5': '1.5px' 
      },

    },
  },
  variants: {},
  plugins: [],
}