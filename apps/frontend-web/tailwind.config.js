/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "var(--color-green)",
        "green-dark": "var(--color-green-dark)",
        blue: "var(--color-blue)",
        "blue-light": "var(--color-blue-light)",
        gold: "var(--color-gold)",
        "gold-soft": "var(--color-gold-soft)",
        red: "var(--color-red)",
        ivory: "var(--color-ivory)",

        white: "var(--text-white)",
        dark: "var(--text-dark)",
        "text-secondary": "var(--text-secondary)",

        "bg-dark": "var(--bg-dark)",
        "bg-gray": "var(--bg-gray)",
        "bg-light": "var(--bg-light)",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        display: ["'Cairo'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.2)",
        glow: "0 0 20px rgba(194,157,13,0.5)",
      },
      keyframes: {
        "slow-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "slow-pulse": "slow-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
