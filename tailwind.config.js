/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0B1437",
        "brand-gold": "#C9A84C",
        "brand-charcoal": "#1C1C1E",
        "surface": "#faf9f6",
        "surface-container-low": "#f4f3f0",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e9e8e5",
        "surface-container-highest": "#e3e2df",
        "on-surface": "#1a1c1a",
        "on-background": "#1a1c1a",
        "on-surface-variant": "#46464e",
        "primary-container": "#10193c",
        "on-primary": "#ffffff",
        "outline-variant": "#c6c5cf",
        "tertiary-container": "#c9a84c"
      },
      fontFamily: {
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries'
  ],
}
