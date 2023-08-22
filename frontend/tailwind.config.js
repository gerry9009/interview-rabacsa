/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        9: "repeat(9, minmax(0, 1fr))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
      },
    },
  },
  plugins: [],
};
