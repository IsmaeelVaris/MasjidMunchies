/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Theme Colors
        primary: "var(--color-green)",
        "primary-dark": "var(--color-green-dark)",
        blue: "var(--color-blue)",
        gold: "var(--color-gold)",

        // Accent Colors
        orange: "var(--color-orange)",
        coral: "var(--color-coral)",

        // Background Colors
        "bg-light": "var(--bg-light)",
        "bg-gray": "var(--bg-gray)",
        "bg-dark": "var(--bg-dark)",

        // Text Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-white": "var(--text-white)",
        "text-gray": "var(--text-gray)",
      },
    },
  },
  plugins: [],
};
