/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        horse: {
          50: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#ff0000',
          600: '#ff0000',
          700: '#ff0000',
          800: '#000000',
          900: '#000000',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loading-bar': 'loading 1.5s ease-in-out infinite',
        'gallop': 'gallop 0.5s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000' },
          'to': { boxShadow: '0 0 20px #ff0000, 0 0 30px #ff0000' },
        },
      }
    },
  },
  plugins: [],
}
