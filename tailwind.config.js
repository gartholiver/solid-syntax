module.exports = {
  content: [
    './templates/**/*.twig',
    './inc/theme/filters.php',
    './inc/theme/functions.php'
  ],
  theme: {
    colors: {
      'black': {
        'faded': '#262626',
        'background': '#161616',
        'DEFAULT': '#000000',
      },
      'white': '#ffffff',
      'transparent': 'transparent',
      'current': 'currentColor',
      'gray': {
        'DEFAULT': '#F4F4F4',
        'medium': '#8D8D8D',
        'dark': '#C6C6C6',
        'darker': '#A8A8A8',
        'darkest': '#6f6f6f'
      },
      'red': {
        'DEFAULT': '#c32529',
      },
      'yellow': {
        'DEFAULT': '#FFF101',
        'dark': '#FFEF01'
      },
    },
    fontFamily: {
      'display': ['"Heading Now"', 'sans-serif'],
      'body': ['"Poppins"', 'sans-serif']
    },
    extend: {
      animation: {
        'ping-slow': 'ping 2s linear infinite',
      },
      height: {
        'screen-80': '80vh'
      },
      scale: {
        '175': '1.75',
        '200': '2'
      }
    },
  },
  plugins: [],
}
