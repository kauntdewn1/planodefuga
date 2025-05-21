/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 1s steps(20, end), hide-cursor 0s 1s forwards',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'shine': 'shine 3s linear infinite',
        'holographic': 'holographic 4s linear infinite',
        'pulse': 'pulse 2s infinite',
        'glow': 'glow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { 
            width: '0',
            opacity: '0'
          },
          'to': { 
            width: '100%',
            opacity: '1'
          }
        },
        'hide-cursor': {
          'to': {
            'border-right-color': 'transparent'
          }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff00' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        holographic: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(255, 215, 0, 0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '50%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
    },
  },
  plugins: [],
}