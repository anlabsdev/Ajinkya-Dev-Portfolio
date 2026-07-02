/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b77e7",
          dark: "#5b9dff",
        },
        secondary: {
          DEFAULT: "#7c5cff",
          dark: "#9d85ff",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dark: "#67e8f9",
        },
        background: {
          light: "#fafafa",
          dark: "#070b14",
        },
        text: {
          light: "#0f172a",
          dark: "#e6ecf5",
        },
        card: {
          light: "#ffffff",
          dark: "#0e1524",
        },
      },
      fontFamily: {
        // display + body pairing; legacy class names mapped so existing
        // font-poppins / font-worksans usage picks up the new type system
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        poppins: ["Space Grotesk", "sans-serif"],
        worksans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        glow: '0 0 40px rgba(43, 119, 231, 0.25)',
        'glow-lg': '0 0 80px rgba(43, 119, 231, 0.3)',
        soft: '0 18px 45px rgba(15, 23, 42, 0.07)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
