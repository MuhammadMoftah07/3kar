/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        theme1: "#0CA37F",
        theme2: "#0D785A",
        theme3: "#55A28C",
        google: "#E16262",
        facebook: "#1778F2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
