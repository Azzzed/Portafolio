/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#090909',
        elevated: '#111111',
        card: '#141414',
        surface: '#1A1A1A',
        ink: '#F0EAE0',
        muted: '#706A62',
        accent: '#C8B89A',
        border: '#1E1E1E',
      },
      letterSpacing: {
        widest: '0.3em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
};
