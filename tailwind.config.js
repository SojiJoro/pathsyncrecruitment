/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Calm blue
        primary: {
          DEFAULT: '#4A90E2',
          dark: '#2E5C8A',
          light: '#7CB3E9',
          50: '#EEF5FC',
          100: '#D5E7F7',
          200: '#ABCFF0',
          300: '#7CB3E9',
          400: '#5FA1E6',
          500: '#4A90E2',
          600: '#3A7BC9',
          700: '#2E5C8A',
          800: '#234568',
          900: '#182F47',
        },
        // Secondary - Success green
        secondary: {
          DEFAULT: '#50C878',
          dark: '#3A9B5C',
          light: '#7DD99A',
          50: '#EFFBF3',
          100: '#D7F5E2',
          200: '#AFEBC5',
          300: '#7DD99A',
          400: '#5FCD86',
          500: '#50C878',
          600: '#3A9B5C',
          700: '#2D7847',
          800: '#1F5532',
          900: '#12331E',
        },
        // Neutral colors
        neutral: {
          bg: '#FAFBFC',
          surface: '#FFFFFF',
          'text-primary': '#1A2332',
          'text-secondary': '#5A6C7D',
          border: '#E1E8ED',
          50: '#FAFBFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Accent colors
        info: '#4A90E2',
        success: '#50C878',
        warning: '#F5A623',
        error: '#E94B3C',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        dyslexic: ['OpenDyslexic', 'Comic Sans MS', 'sans-serif'],
      },
      fontSize: {
        'body': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'small': ['1rem', { lineHeight: '1.6' }], // 16px
      },
      lineHeight: {
        'relaxed': '1.6',
        'heading': '1.2',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
