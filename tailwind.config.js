module.exports = {

  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        
      },
      colors: {
        black: '#323130',
        grey: {
          'white': '#FFFFFF',
          'primary': '#323130',
          'secondary': '#605E5C',
          'disabled': '#A19F9D',
          'body': '#EDEBE9',
          'input': '#8A8886',
          'hover': '#323130',
          'dashboard':'#212529',
          10: '#FAF9F8',
          20: '#F3F2F1',
          30: '#EDEBE9',
          40: '#E1DFDD',
          50: '#D2D0CE',
          60: '#C8C6C4',
          90: '#A19F9D',
          130: '#605E5C',
          150: '#3B3A39',
          160: '#323130',
          190: '#201F1E',
          200: '#585858',
          210: '#919EAB'
        },



        themecyan: {
          darker: '#2A7665',
          dark: '#184239',
          light: '#ADD6CD',
          lighter: '#F3F9F8',
          lighter2: '#D1E9E4',
          tertiary: '#6AAC9E',
          lighteralt: '#F3F9F8',
          text: '#636363',
          text2: '#7A7A7A'
        },
        red: {
          'light': '#FDE7E9',
          'dark': '#A80000'
        },
        green: {
          'light': '#DFF6DD',
          'dark': '#107C10'
        },
        yellow: {
          'light': '#FED9CC',
          'dark': '#D5B031'
        },
        blue: {
          'light': '#E3EFF9',
          'dark': '#1890FF',
          default: '#2A7665',
        },
        overlay: {
          'light': '#F7F7F7',
          'dark': '#919191'
        },
        status: {
          'error': '#A4262C'
        }




      },
    },
    screens: {
      sm: "0px",
      tablet: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1700px",
    },
    container: {
      center: true,
      

    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  
  ]

};