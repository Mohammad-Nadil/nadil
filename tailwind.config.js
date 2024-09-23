/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#007BFF",
        "secondary-light": "#E5E3FF",
        "light": "#F5F4FB",
        "primary-dark": "#13FF00",
        "secondary-dark": "#202020",
        "dark": "#161616",
        "both": "#8f8f8f",
      },
    },
    fontFamily: {
      rubik: ['"Rubik 80s Fade"', "system-ui"],
      poppins: ['"Poppins"', "sans-serif"],
    },
  },
  plugins: [],
};
