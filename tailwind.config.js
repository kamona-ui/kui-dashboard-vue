const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        't-lg':
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
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
