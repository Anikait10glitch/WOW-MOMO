/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fonts kept from the approved template, wired via next/font in app/layout.jsx
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        // Wow! Momo palette (locked) — swap exact hex here if brand sends official codes
        brand: {
          red: '#E2231A',       // primary accent
          reddark: '#B71A14',   // hover / deep red
          orangered: '#E7341A', // energetic hero red-orange (redder tone)
          yellow: '#FFC400',    // highlight / badges
          charcoal: '#161616',  // dark text sections
          cream: '#F7F4EB',     // page background (kept)
          ink: '#0F0F0F',       // body text (kept)
        },
      },
      animation: {
        'scroll': 'scroll 25s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
