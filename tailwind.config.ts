import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          mint: '#8ef9d5',
          'mint-light': '#d4fdee',
          orchid: '#e2addb',
          azure: '#5fc2f0',
          blush: '#f5c7be',
          dark: '#0a0f0d',
          'dark-green': '#0d1a14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 20s infinite',
        'blob-slow': 'blob 30s infinite',
        'blob-slower': 'blob 40s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -30px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '75%': {
            transform: 'translate(30px, 10px) scale(1.05)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
