/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "6rem",
      },
      colors: {
        primary: "#59C1BD",
        secondary: colors.yellow,
        neutral: colors.gray,
      },
      backgroundImage: {
        profile: "url('./assets/profile-photo.jpeg')",
      },
    },
  },
  plugins: [],
};
