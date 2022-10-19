/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    gridTemplateColumns: {
      auto: 'repeat(auto-fill, minmax(250px, 1fr))',
    },
    colors: {
      teal: 'rgb(var(--teal) / <alpha-value>)',
      white: '#f0fcfb',
      ebony: '#15163D',
      gray: '#6B7280',
    },
  },
  plugins: [],
};
