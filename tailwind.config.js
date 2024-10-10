/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* primary colors */
        "Marine-blue": "var(--Marine-blue)",
        "Purplish-blue": "var(--Purplish-blue)",
        "Pastel-blue": "var(--Pastel-blue)",
        "Light-blue": "var(--Light-blue)",
        "Strawberry-red": "var(--Strawberry-red)",
        /* neutral colors */
        "Cool-gray": "var(--Cool-gray)",
        "Light-gray": "var(--Light-gray)",
        Magnolia: "var(--Magnolia)",
        Alabaster: "var(--Alabaster)",
      },
    },
  },
  plugins: [],
};
