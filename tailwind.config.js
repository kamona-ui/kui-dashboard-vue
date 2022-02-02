const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Cairo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          bg: '#151823',
          'eval-1': '#222738',
          'eval-2': '#2A2F42',
          'eval-3': '#2C3142',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

    // TODO: use `https://github.com/Kamona-WD/tailwindcss-perspective` package when it support tailwindcss v3.
    require('./tailwindcss-perspective'),
  ],
}
