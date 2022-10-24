/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#343740",
        secondary: "#883772",
        tertiary: "#C04C71",
        quaternary: "#FCBE67",
      },
    },
    fontFamily: {
      primary: ["Koulen", "cursive"],
      secondary: ["Convergence", "sans-serif"],
    },
  },
  plugins: [],
};
