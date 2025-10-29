import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem'
      },
      screens: {
        '2xl': '1200px'
      }
    },
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
        sans: ['var(--font-sans)', 'sans-serif']
      },
      maxWidth: {
        layout: '1200px',
        readable: '70ch'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(20, 20, 20, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
