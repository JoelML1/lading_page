/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          green: '#39A935',
          orange: '#FF6B35',
          blue: '#004A8A',
          gray: '#6B7280'
        },
        cyan: {
          400: '#00FFFF',
          500: '#00DDDD',
          600: '#00CCCC',
          700: '#00AAAA',
        },
        background: {
          dark: '#000000',
          darker: '#111111',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '100%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        }
      }
    },
  },
}