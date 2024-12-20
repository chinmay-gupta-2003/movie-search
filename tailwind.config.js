/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6741d9",
        "primary-light": "#7950f2",
        text: "#dee2e6",
        "text-dark": "#adb5bd",
        "background-100": "#343a40",
        "background-500": "#2b3035",
        "background-900": "#212529",
      },
    },
  },
  plugins: [],
};
