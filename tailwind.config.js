/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1ea',
        accent: '#ff006e',
        highlight: '#ffd60a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
      },
      boxShadow: {
        stamp: '4px 4px 0 #111',
      },
    },
  },
  plugins: [],
}
