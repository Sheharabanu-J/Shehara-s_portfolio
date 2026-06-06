/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          DEFAULT: '#1a1aff',
          light: '#4d9eff',
          dark: '#0d0d99',
          neon: '#0066ff',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#B8860B',
          glow: '#FFA500',
        },
        darkBg: {
          DEFAULT: '#050510',
          card: '#0a0a1f',
          glass: 'rgba(10, 10, 31, 0.6)',
        }
      },
      fontFamily: {
        heading: ['Syne', 'Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(0,102,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,215,0,0.08) 0%, transparent 50%), linear-gradient(135deg, #050510 0%, #080820 50%, #050510 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFA500)',
        'blue-gradient': 'linear-gradient(135deg, #0066ff, #1a1aff)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.1)',
        'blue-glow': '0 0 20px rgba(0, 102, 255, 0.5), 0 0 60px rgba(0, 102, 255, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'matrix-fall': 'matrixFall 1.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,102,255,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0,102,255,0.8), 0 0 60px rgba(255,215,0,0.2)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100vh)', opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      },
    },
  },
  plugins: [],
}
