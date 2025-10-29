import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2.5rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D9483B',
          dark: '#B33A30',
          light: '#F06554'
        },
        topbar: '#111111',
        canvas: {
          100: '#F5F2EC',
          200: '#FFFFFF',
          300: '#F1F1F1',
          400: '#E3DFD7'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'var(--font-sans)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        nav: '0.24em',
        wide: '0.18em'
      },
      boxShadow: {
        soft: '0 12px 34px rgba(15, 15, 15, 0.08)',
        header: '0 10px 30px rgba(15, 15, 15, 0.1)',
        card: '0 22px 40px rgba(21, 21, 21, 0.12)'
      }
    }
  },
  plugins: [
    ({ addComponents, theme }: PluginAPI) => {
      addComponents({
        '.btn-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.full'),
          gap: theme('spacing.2'),
          paddingInline: theme('spacing.6'),
          paddingBlock: theme('spacing.3'),
          fontSize: theme('fontSize.sm'),
          letterSpacing: theme('letterSpacing.wide'),
          textTransform: 'uppercase',
          transition: 'all 200ms ease'
        },
        '.btn-primary': {
          backgroundColor: theme('colors.brand.DEFAULT'),
          color: theme('colors.canvas.200'),
          boxShadow: theme('boxShadow.card'),
          border: `1px solid ${theme('colors.brand.dark')}`,
          ':hover': {
            backgroundColor: theme('colors.brand.dark')
          },
          ':focus-visible': {
            outline: `2px solid ${theme('colors.brand.light')}`,
            outlineOffset: '3px'
          }
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.canvas.200'),
          border: `1px solid ${theme('colors.canvas.200')}`,
          ':hover': {
            backgroundColor: 'rgba(255,255,255,0.12)'
          },
          ':focus-visible': {
            outline: `2px solid ${theme('colors.canvas.200')}`,
            outlineOffset: '3px'
          }
        }
      });
    }
  ]
};

export default config;
