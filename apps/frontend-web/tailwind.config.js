/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        green: "var(--color-green)",
        gold: "var(--color-gold)",
        blue: "var(--color-blue)",
        white: "var(--color-white)",

        bgDark: "var(--bg-dark)",
        bgSecondary: "var(--bg-secondary)",
        bgAccent: "var(--bg-accent)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textGreen: "var(--text-green)",
        textGold: "var(--text-gold)",
        textBlue: "var(--text-blue)",
      },
    },
  },
  plugins: [],
};
