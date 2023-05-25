/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url(./assets/hero1.png)",
        "landing-background": "url(./assets/landing_bg.png)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT:
          "0px 2px 0px rgba(0, 0, 0, 0.2), 0px 0px 44px var(--tw-shadow-color)",
        lg: "0 0px 28px var(--tw-shadow-color)",
      },
      dropShadow: {
        DEFAULT: "drop-shadow(0px 4px 20px #CD6700)",
      },
      animation: {
        wiggle: "wiggle 0.1s infinite;",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { backgroundImage: "url(./assets/hero11.svg)" },
          "30%": { backgroundImage: "url(./assets/hero12.svg)" },
          "60%": { backgroundImage: "url(./assets/hero13.svg)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
