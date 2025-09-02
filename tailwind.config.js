/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B70EDA",
        glassBG: "#a3a3a3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-t":
          "radial-gradient(circle at top,var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
