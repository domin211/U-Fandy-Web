import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF434A',
          dark: '#C22D35',
          light: '#FF747A'
        },
        topbar: '#191919',
        canvas: {
          100: '#E9E7E1',
          200: '#FFFFFF',
          300: '#F5F5F5',
          400: '#E9E7E1'
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
