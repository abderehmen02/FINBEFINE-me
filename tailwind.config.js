const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#5279F4",
      ...colors,
    },
    extend: {
      scale: {
        130: "1.3",
        140: "1.4",
        165: "1.65",
        170: "1.70",
        200: "2",
        300: "3",
        400: "4",
      },
    },
  },
  plugins: [],
};
