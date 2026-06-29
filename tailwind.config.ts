import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8edf7',
          100: '#c5d0eb',
          200: '#9eb0dc',
          300: '#7690cd',
          400: '#5878c2',
          500: '#3a60b7',
          600: '#1a4aaa',
          700: '#0f3a8f',
          800: '#0a2a72',
          900: '#071d54',
        },
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
