/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
        },
        flow: {
          50: '#eff9fe',
          100: '#dff3fc',
          200: '#bfe7f9',
          300: '#6fc8ee',
          400: '#3aafe6',
          500: '#1b9de3',
          600: '#0e86c4',
          700: '#0e6aa0',
          800: '#0b527d',
          900: '#083b59',
        },
        aqua: {
          300: '#7be5d8',
          400: '#3fd6c4',
          500: '#24bbaa',
          600: '#149e8f',
          700: '#107f74',
        },
        navy: {
          50: '#f2f8fd',
          100: '#d8eaf8',
          200: '#b2d5f0',
          300: '#7eb9e7',
          400: '#4b9edd',
          500: '#257dc1',
          600: '#1a5989',
          700: '#134063',
          800: '#0e2f49',
          850: '#0b2438',
          900: '#081c2b',
          950: '#06141f',
        },
        surface: '#0C2132',
        accent: {

          50: '#f3fcfb',
          100: '#def7f4',
          200: '#bdefe9',
          300: '#94e5dc',
          400: '#63d9cc',
          500: '#31ccb9',
          600: '#28a496',
          700: '#208478',
          800: '#18635a',
          900: '#114640',
          950: '#103A46',
        },
        success: {
          DEFAULT: '#1ba673',
          bg: '#e7f7ef',
        },
        warning: {
          DEFAULT: '#e08a1b',
          bg: '#fff4df',
        },
        danger: {
          DEFAULT: '#dc4b4b',
          bg: '#fdeaea',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        display: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sora: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px rgba(6, 21, 34, .04)',
        sm: '0 2px 8px rgba(6, 21, 34, .06)',
        accent: '0 4px 14px rgba(27, 157, 227, .18)',
      },
      ringColor: {
        DEFAULT: 'rgba(27, 157, 227, .18)',
      },
      transitionDuration: {
        180: '180ms',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(.22, 1, .36, 1)',
        'in-out-soft': 'cubic-bezier(.4, 0, .2, 1)',
      },
    },
  },
  plugins: [],
}
