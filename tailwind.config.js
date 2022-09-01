/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#005472",
        "light-blue": "#00a3dd",
        "coral-red": "#fe8a71",
        mustard: "#f6cd61",
      },
      boxShadow: {
        "button-strong": "2px 2px 3px 0px black",
      },
    },
  },
  plugins: [],
};
