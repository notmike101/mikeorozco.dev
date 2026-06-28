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
      sans: ['"IBM Plex Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
    },
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        canvas: '#f7f6f2',
        surface: '#ffffff',
        ink: '#182026',
        muted: '#5f6b73',
        line: '#d9d7d0',
        accent: '#315d73',
        'accent-hover': '#24495b',
        'accent-soft': '#e5eef2',
        'dark-canvas': '#101820',
        'dark-surface': '#18232c',
        'dark-ink': '#f2f1ec',
        'dark-muted': '#aab4ba',
        'dark-line': '#33414a',
        'dark-accent': '#7ba7b8',
      },
    },
  },
};
