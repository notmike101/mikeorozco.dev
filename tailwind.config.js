module.exports = {
  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']
    },
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        'preferred-green': '#1FC178',
        'preferred-light-blue': '#068D9D',
        'preferred-dark-blue': '#111827',
        'preferred-light-red': '#F07167',
        'preferred-dark-red': '#FF4A1C',
        'preferred-teal': '#03474F',
        white: '#fefefe',
        black: '#333333',
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.4rem',
        '4xs': '0.3rem',
        '5xs': '0.2rem',
        '6xs': '0.1rem',
      },
    },
  },
};
