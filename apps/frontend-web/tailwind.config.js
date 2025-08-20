/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Theme Colors
        primary: "var(--color-green)",            // #27B163
        "primary-dark": "var(--color-green-dark)", // #219150
        blue: "var(--color-blue)",                 // #2471A3
        gold: "var(--color-gold)",                 // #D4AC0D

        // Accent Colors
        orange: "var(--color-orange)",             // #D35400
        coral: "var(--color-coral)",               // #FF7043

        // Background Colors
        "bg-light": "var(--bg-light)",             // #F4F6F7
        "bg-gray": "var(--bg-gray)",               // #D5DBDB
        "bg-dark": "var(--bg-dark)",               // #2C3E50

        // Text Colors
        "text-primary": "var(--text-primary)",     // #1B1B1B
        "text-secondary": "var(--text-secondary)", // #616A6B
        "text-white": "var(--text-white)",         // #FFFFFF
        "text-gray": "var(--text-gray)",           // #616A6B
      },
    },
  },
  plugins: [],
};
