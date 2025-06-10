/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 100%, 100%)",
        purple: {
          100: "hsl(275, 100%, 97%)",
          600: "hsl(346, 16%, 49%)",
          950: "hsl(292, 42%, 14%)",
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
