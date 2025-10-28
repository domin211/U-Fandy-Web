import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#a67c52',
          dark: '#7f5a35',
          light: '#d8b68a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(20, 20, 20, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
