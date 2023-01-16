/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
      },
      colors: {
        primary: "#59C1BD",
        secondary: colors.yellow,
        neutral: colors.gray,
      },
      backgroundImage: {
        profile: "url('src/assets/profile-photo.jpeg')",
      },
    },
  },
  plugins: [],
};
